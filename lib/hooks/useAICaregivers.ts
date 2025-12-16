"use client"

import { useEffect, useRef } from "react"
import { useGameStore } from "@/lib/stores/gameStore"
import { nanoid } from "nanoid"
import type { Caregiver } from "@/lib/types/gameTypes"

export function useAICaregivers() {
  const hasInitialized = useRef(false)

  useEffect(() => {
    if (hasInitialized.current) return
    hasInitialized.current = true

    // Use setTimeout to defer spawning to next tick, avoiding render cycle
    const timeoutId = setTimeout(() => {
      const state = useGameStore.getState()
      const playerCount = state.players.size
      const caregiverCount = state.caregivers.size
      const neededCaregivers = Math.max(1, Math.ceil(Math.max(1, playerCount) / 4))

      if (caregiverCount < neededCaregivers) {
        const toSpawn = neededCaregivers - caregiverCount
        for (let i = 0; i < toSpawn; i++) {
          const caregiver = createAICaregiver(caregiverCount + i)
          useGameStore.getState().addCaregiver(caregiver)
        }
      }
    }, 0)

    return () => clearTimeout(timeoutId)
  }, [])
}

function createAICaregiver(index: number): Caregiver {
  const personalities = [
    { name: "Miss Sophie", strictness: 60, nurturing: 70 },
    { name: "Mr. James", strictness: 75, nurturing: 55 },
    { name: "Miss Emily", strictness: 45, nurturing: 85 },
    { name: "Mr. David", strictness: 80, nurturing: 50 },
    { name: "Miss Rachel", strictness: 55, nurturing: 75 },
  ]

  const personality = personalities[index % personalities.length]

  return {
    id: `ai_caregiver_${nanoid()}`,
    name: personality.name,
    role: "caregiver",
    gender: personality.name.startsWith("Miss") ? "female" : "male",
    adminRole: "mod",
    character: {
      skinColor: "#F5D0C5",
      ageGroup: "12+",
      hairColor: "#8B4513",
      eyeColor: "#4A90E2",
    },
    clothing: {
      shirt: true,
      pants: true,
      socks: true,
      shoes: true,
      underwearType: "underwear",
      underwearState: "clean",
      diaperFillLevel: 0,
      pacifierIn: false,
    },
    needs: {
      bladder: 0,
      bowel: 0,
      hunger: 0,
    },
    position: {
      x: (Math.random() - 0.5) * 20,
      y: 0,
      z: (Math.random() - 0.5) * 20,
    },
    rotation: Math.random() * Math.PI * 2,
    disciplineStatus: "green",
    alignment: "little_angel",
    isInTimeout: false,
    isBeingLed: false,
    currentAnimation: "walk",
    privileges: ["all"],
    rewards: [],
    punishments: [],
    personality: {
      strictness: personality.strictness,
      nurturing: personality.nurturing,
      patience: 60 + Math.random() * 20,
      fairness: 75 + Math.random() * 15,
      responsiveness: 70 + Math.random() * 20,
    },
    perception: {
      visibleEntities: [],
      distances: new Map(),
      occluded: false,
      audioEvents: [],
    },
    worldState: {
      navmesh: null,
      hazards: [],
      interactables: new Map(),
    },
    currentIntent: {
      goals: [],
      constraints: [],
      cooldowns: new Map(),
    },
    voiceProfile: {
      provider: "elevenlabs",
      voiceId: `caregiver_voice_${index}`,
      pitch: 1.0,
      speed: 1.0,
      emotion: "caring",
      recognitionProvider: "openai",
      synthesisProvider: "elevenlabs",
    },
    isAI: true,
    lastDecisionTime: Date.now(),
  }
}
