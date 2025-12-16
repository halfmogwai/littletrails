"use client"

import { useGameStore } from "@/lib/stores/gameStore"
import { RigidBody } from "@react-three/rapier"
import { useRef, useEffect, useState, useMemo } from "react"
import type { Caregiver, Lobby, Vector3 as GameVector3 } from "@/lib/types/gameTypes"
import { PathfindingService } from "@/lib/services/PathfindingService"
import { BrainService } from "@/lib/services/BrainService"
import { useFrame } from "@react-three/fiber"
import { nanoid } from "nanoid"
import { CustomCharacterModel } from "./models/CustomCharacterModel"
import { CharacterAnimation } from "./animations/CharacterAnimationSystem"

export function CaregiverCharacters() {
  const caregiversMap = useGameStore((state) => state.caregivers)
  const caregiverIds = useMemo(
    () => Array.from(caregiversMap.keys()),
    [caregiversMap]
  )

  return (
    <>
      {caregiverIds.map((id) => {
        const caregiver = caregiversMap.get(id)
        return caregiver ? <CaregiverCharacter key={id} caregiverId={id} /> : null
      })}
    </>
  )
}

function CaregiverCharacter({ caregiverId }: { caregiverId: string }) {
  const rigidBodyRef = useRef<any>(null)
  const caregiver = useGameStore((state) => state.caregivers.get(caregiverId))
  const currentLobby = useGameStore((state) => state.currentLobby)
  const playersMap = useGameStore((state) => state.players)
  const objectsMap = useGameStore((state) => state.objects)
  const accidentsMap = useGameStore((state) => state.accidents)
  const addMessage = useGameStore((state) => state.addMessage)
  const updateCaregiver = useGameStore((state) => state.updateCaregiver)

  const pathfinding = useMemo(() => new PathfindingService(40, 40, 2), [])

  const brain = useMemo(() => {
    if (!currentLobby || !caregiver) return null

    const lobby: Lobby = {
      ...currentLobby,
      players: playersMap,
      caregivers: new Map([[caregiverId, caregiver]]),
      objects: objectsMap,
      accidents: accidentsMap,
    }
    return new BrainService(caregiver, lobby, {
      decisionInterval: 2000,
      perceptionRadius: 15,
    })
  }, [caregiverId, currentLobby, caregiver, playersMap, objectsMap, accidentsMap])

  const [currentPath, setCurrentPath] = useState<GameVector3[]>([])
  const [pathIndex, setPathIndex] = useState(0)
  const [currentAnimation, setCurrentAnimation] = useState<CharacterAnimation>('idle')
  const [emotions, setEmotions] = useState({
    happiness: 0.5,
    sadness: 0,
    anger: 0,
    surprise: 0
  })
  const lastDecisionRef = useRef<number>(0)

  useEffect(() => {
    if (!brain || !currentLobby || !caregiver) return

    const lobby: Lobby = {
      ...currentLobby,
      players: playersMap,
      caregivers: new Map([[caregiverId, caregiver]]),
      objects: objectsMap,
      accidents: accidentsMap,
    }

    brain.updateLobby(lobby)
    brain.updateCaregiver(caregiver)
  }, [playersMap, objectsMap, accidentsMap, caregiver])

  useEffect(() => {
    const objectsArray = Array.from(objectsMap.values())
    pathfinding.updateWithObjects(objectsArray)
  }, [objectsMap, pathfinding])

  useFrame((state, delta) => {
    if (!caregiver?.isAI || !brain || !rigidBodyRef.current) return

    const now = Date.now()

    if (now - lastDecisionRef.current > 2000) {
      lastDecisionRef.current = now

      brain.makeDecision().then((decision) => {
        if (decision) {
          console.log("[v0] AI Caregiver decision:", decision)

          handleCaregiverDecision(decision)

          brain.generateSpeechForDecision(decision).then((speech) => {
            addMessage({
              id: `msg_${nanoid()}`,
              senderId: caregiverId,
              senderName: caregiver.name,
              content: speech.text,
              timestamp: Date.now(),
              isSystem: false,
              messageType: "chat",
            })

            updateCaregiver(caregiverId, {
              lastVoiceActivity: Date.now(),
            })
          })

          brain.updateIntent(decision)

          if (decision.interventions.length > 0) {
            const intervention = decision.interventions[0]
            if (intervention.type === "escort") {
              const targetPlayer = playersMap.get(decision.targetId)
              if (targetPlayer) {
                const path = pathfinding.findPath(caregiver.position, targetPlayer.position)
                if (path.length > 0) {
                  const smoothPath = pathfinding.smoothPath(path)
                  setCurrentPath(smoothPath)
                  setPathIndex(0)
                }
              }
            }
          }
        }
      })
    }

    if (currentPath.length > 0 && pathIndex < currentPath.length) {
      const targetPos = currentPath[pathIndex]
      const currentPos = rigidBodyRef.current.translation()

      const distance = Math.sqrt(Math.pow(targetPos.x - currentPos.x, 2) + Math.pow(targetPos.z - currentPos.z, 2))

      if (distance < 0.5) {
        setPathIndex(pathIndex + 1)

        if (pathIndex + 1 >= currentPath.length) {
          setCurrentPath([])
          setPathIndex(0)
          setCurrentAnimation('idle')
        }
      } else {
        const direction = {
          x: targetPos.x - currentPos.x,
          z: targetPos.z - currentPos.z,
        }
        const magnitude = Math.sqrt(direction.x * direction.x + direction.z * direction.z)
        const normalized = {
          x: direction.x / magnitude,
          z: direction.z / magnitude,
        }

        const speed = 2.5
        const newPos = {
          x: currentPos.x + normalized.x * speed * delta,
          y: currentPos.y,
          z: currentPos.z + normalized.z * speed * delta,
        }

        rigidBodyRef.current.setNextKinematicTranslation(newPos)

        const angle = Math.atan2(direction.x, direction.z)
        rigidBodyRef.current.setNextKinematicRotation({
          x: 0,
          y: Math.sin(angle / 2),
          z: 0,
          w: Math.cos(angle / 2),
        })

        // Update animation based on movement
        setCurrentAnimation('walk')

        updateCaregiver(caregiverId, {
          position: newPos,
          rotation: angle,
        })
      }
    } else {
      // Random movement when no path
      if (Math.random() < 0.001) {
        const randomTarget = {
          x: (Math.random() - 0.5) * 30,
          y: 0,
          z: (Math.random() - 0.5) * 30,
        }

        const path = pathfinding.findPath(caregiver.position, randomTarget)
        if (path.length > 0) {
          const smoothPath = pathfinding.smoothPath(path)
          setCurrentPath(smoothPath)
          setPathIndex(0)
          setCurrentAnimation('walk')
        }
      } else {
        setCurrentAnimation('idle')
      }
    }

    // Update emotions based on activity
    updateEmotions()
  })

  const updateEmotions = () => {
    const newEmotions = { ...emotions }
    
    // Speaking increases happiness slightly
    if (caregiver?.lastVoiceActivity && Date.now() - caregiver.lastVoiceActivity < 2000) {
      newEmotions.happiness = Math.min(1, newEmotions.happiness + 0.02)
    }
    
    // Active interventions might increase sternness (anger)
    if (currentPath.length > 0) {
      newEmotions.anger = Math.min(0.3, newEmotions.anger + 0.01)
    }
    
    // Natural emotion decay
    newEmotions.happiness = Math.max(0.3, newEmotions.happiness - 0.005)
    newEmotions.anger = Math.max(0, newEmotions.anger - 0.003)
    
    setEmotions(newEmotions)
  }

  const handleCaregiverDecision = (decision: any) => {
    const intervention = decision.interventions[0]

    switch (intervention?.type) {
      case "escort":
        console.log("[v0] Escorting player:", decision.targetId)
        setCurrentAnimation('being_led')
        break

      case "cooldown":
        console.log("[v0] Putting player in timeout:", decision.targetId)
        setCurrentAnimation('timeout_pose')
        break

      case "disciplinary_action":
        console.log("[v0] Disciplinary action:", decision.reasoning)
        setCurrentAnimation('spank_otk')
        setEmotions(prev => ({ ...prev, anger: Math.min(0.7, prev.anger + 0.3) }))
        break

      case "physical_control":
        console.log("[v0] Physical control:", decision.targetId)
        setCurrentAnimation('being_led')
        break

      default:
        console.log("[v0] Unknown intervention type")
        setCurrentAnimation('idle')
    }

    // Reset to idle after a delay
    setTimeout(() => {
      setCurrentAnimation('idle')
    }, 3000)
  }

  if (!caregiver) return null

  // Create default clothing for caregiver
  const caregiverClothing = {
    shirt: true,
    pants: true,
    socks: true,
    shoes: true,
    underwearType: 'underwear' as const,
    underwearState: 'clean' as const,
    diaperFillLevel: 0,
    pacifierIn: false
  }

  return (
    <RigidBody
      ref={rigidBodyRef}
      colliders="ball"
      type="kinematicPosition"
      position={[caregiver.position.x, caregiver.position.y + 1, caregiver.position.z]}
      enabledRotations={[false, true, false]}
    >
      <CustomCharacterModel
        customization={caregiver.character}
        clothing={caregiverClothing}
        position={[0, 0, 0]}
        scale={1.0}
        currentAnimation={currentAnimation}
        emotions={emotions}
        isAnimated={true}
      />
      
      {/* Voice activity indicator */}
      {caregiver.lastVoiceActivity && Date.now() - caregiver.lastVoiceActivity < 2000 && (
        <mesh position={[0, 3, 0]}>
          <sphereGeometry args={[0.1]} />
          <meshBasicMaterial color="#87CEEB" />
        </mesh>
      )}

      {/* Intent indicator */}
      {caregiver.currentIntent.goals.length > 0 && (
        <mesh position={[0, 3.2, 0]}>
          <sphereGeometry args={[0.08]} />
          <meshBasicMaterial color="#FFD700" />
        </mesh>
      )}

      {/* Personality aura */}
      <mesh position={[0, 2.5, 0]}>
        <sphereGeometry args={[0.6, 16, 16]} />
        <meshBasicMaterial
          color={caregiver.personality.strictness > 70 ? "#FF6347" : "#90EE90"}
          transparent
          opacity={0.1}
        />
      </mesh>
    </RigidBody>
  )
}