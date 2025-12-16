"use client"

import { useMemo } from "react"
import { RigidBody } from "@react-three/rapier"
import { useGameStore } from "@/lib/stores/gameStore"
import type { InteractiveObject } from "@/lib/types/gameTypes"

export function DaycareObjects() {
  const objectsMap = useGameStore((state) => state.objects)
  const objects = useMemo(() => Array.from(objectsMap.values()), [objectsMap])

  return (
    <>
      {objects.map((obj) => (
        <InteractiveObjectMesh key={obj.id} object={obj} />
      ))}

      {/* Default objects if none loaded */}
      {objects.length === 0 && <DefaultDaycareObjects />}
    </>
  )
}

function InteractiveObjectMesh({ object }: { object: InteractiveObject }) {
  const updateObject = useGameStore((state) => state.updateObject)

  const handleClick = () => {
    console.log("[v0] Object clicked:", object.id, object.type)
    // Handle object interaction
  }

  return (
    <RigidBody
      type="fixed"
      colliders="cuboid"
      position={[object.position.x, object.position.y, object.position.z]}
      rotation={[0, object.rotation, 0]}
    >
      <ObjectByType type={object.type} isOccupied={object.isOccupied} onClick={handleClick} />
    </RigidBody>
  )
}

function ObjectByType({
  type,
  isOccupied,
  onClick,
}: {
  type: InteractiveObject["type"]
  isOccupied: boolean
  onClick: () => void
}) {
  const occupiedColor = isOccupied ? "#FFA5A5" : "#B5EAD7"

  switch (type) {
    case "changing_station":
      return <ChangingStation color={occupiedColor} onClick={onClick} />

    case "timeout_chair":
      return <TimeoutChair color={occupiedColor} onClick={onClick} />

    case "timeout_stool":
      return <TimeoutStool color={occupiedColor} onClick={onClick} />

    case "slide":
      return <Slide color={occupiedColor} onClick={onClick} />

    case "play_area":
      return <PlayArea color={occupiedColor} onClick={onClick} />

    case "potty":
      return <Potty color={occupiedColor} onClick={onClick} />

    case "toilet_female":
    case "toilet_male":
      return <Toilet color={occupiedColor} onClick={onClick} />

    case "toy_box":
      return <ToyBox color={occupiedColor} onClick={onClick} />

    case "music_system":
      return <MusicSystem color={occupiedColor} onClick={onClick} />

    default:
      return <DefaultObject color={occupiedColor} onClick={onClick} />
  }
}

function ChangingStation({ color, onClick }: { color: string; onClick: () => void }) {
  return (
    <group onClick={onClick}>
      {/* Table/platform */}
      <mesh position={[0, 0.75, 0]} castShadow receiveShadow>
        <boxGeometry args={[2, 0.2, 1.5]} />
        <meshStandardMaterial color={color} roughness={0.6} />
      </mesh>
      {/* Legs */}
      <mesh position={[-0.8, 0.35, -0.6]} castShadow>
        <cylinderGeometry args={[0.05, 0.05, 0.7]} />
        <meshStandardMaterial color="#C7CEEA" />
      </mesh>
      <mesh position={[0.8, 0.35, -0.6]} castShadow>
        <cylinderGeometry args={[0.05, 0.05, 0.7]} />
        <meshStandardMaterial color="#C7CEEA" />
      </mesh>
      <mesh position={[-0.8, 0.35, 0.6]} castShadow>
        <cylinderGeometry args={[0.05, 0.05, 0.7]} />
        <meshStandardMaterial color="#C7CEEA" />
      </mesh>
      <mesh position={[0.8, 0.35, 0.6]} castShadow>
        <cylinderGeometry args={[0.05, 0.05, 0.7]} />
        <meshStandardMaterial color="#C7CEEA" />
      </mesh>
      {/* Cushion/pad */}
      <mesh position={[0, 0.95, 0]}>
        <boxGeometry args={[1.8, 0.3, 1.3]} />
        <meshStandardMaterial color="#FFE5EC" roughness={0.9} />
      </mesh>
    </group>
  )
}

function TimeoutChair({ color, onClick }: { color: string; onClick: () => void }) {
  return (
    <group onClick={onClick}>
      {/* Seat */}
      <mesh position={[0, 0.4, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.6, 0.1, 0.6]} />
        <meshStandardMaterial color={color} roughness={0.6} />
      </mesh>
      {/* Back */}
      <mesh position={[0, 0.8, -0.25]} castShadow>
        <boxGeometry args={[0.6, 0.7, 0.1]} />
        <meshStandardMaterial color={color} roughness={0.6} />
      </mesh>
      {/* Legs */}
      {[
        [-0.25, 0.2, -0.25],
        [0.25, 0.2, -0.25],
        [-0.25, 0.2, 0.25],
        [0.25, 0.2, 0.25],
      ].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]} castShadow>
          <cylinderGeometry args={[0.03, 0.03, 0.4]} />
          <meshStandardMaterial color="#E0BBE4" />
        </mesh>
      ))}
    </group>
  )
}

function TimeoutStool({ color, onClick }: { color: string; onClick: () => void }) {
  return (
    <group onClick={onClick}>
      {/* Seat */}
      <mesh position={[0, 0.3, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.3, 0.3, 0.1]} />
        <meshStandardMaterial color={color} roughness={0.6} />
      </mesh>
      {/* Legs */}
      {[
        [-0.2, 0.125, -0.2],
        [0.2, 0.125, -0.2],
        [-0.2, 0.125, 0.2],
        [0.2, 0.125, 0.2],
      ].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]} castShadow>
          <cylinderGeometry args={[0.025, 0.025, 0.25]} />
          <meshStandardMaterial color="#FFDFD3" />
        </mesh>
      ))}
    </group>
  )
}

function Slide({ color, onClick }: { color: string; onClick: () => void }) {
  return (
    <group onClick={onClick}>
      {/* Slide surface */}
      <mesh position={[0, 1, 0]} rotation={[-Math.PI / 6, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.2, 0.1, 3]} />
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.4} />
      </mesh>
      {/* Side rails */}
      <mesh position={[-0.55, 1.2, 0]} rotation={[-Math.PI / 6, 0, 0]} castShadow>
        <boxGeometry args={[0.1, 0.3, 3]} />
        <meshStandardMaterial color="#D4F1F4" />
      </mesh>
      <mesh position={[0.55, 1.2, 0]} rotation={[-Math.PI / 6, 0, 0]} castShadow>
        <boxGeometry args={[0.1, 0.3, 3]} />
        <meshStandardMaterial color="#D4F1F4" />
      </mesh>
      {/* Platform */}
      <mesh position={[0, 2, -1.2]} castShadow>
        <boxGeometry args={[1.2, 0.2, 0.8]} />
        <meshStandardMaterial color="#FFEAA7" />
      </mesh>
      {/* Support structure */}
      <mesh position={[0, 1, -1.2]} castShadow>
        <cylinderGeometry args={[0.1, 0.1, 2]} />
        <meshStandardMaterial color="#E0BBE4" />
      </mesh>
    </group>
  )
}

function PlayArea({ color, onClick }: { color: string; onClick: () => void }) {
  return (
    <group onClick={onClick}>
      {/* Play mat */}
      <mesh position={[0, 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[2, 32]} />
        <meshStandardMaterial color={color} roughness={0.9} />
      </mesh>
      {/* Toys scattered around */}
      <mesh position={[-0.5, 0.2, 0.5]} castShadow>
        <boxGeometry args={[0.3, 0.3, 0.3]} />
        <meshStandardMaterial color="#FFE5EC" />
      </mesh>
      <mesh position={[0.6, 0.15, -0.4]} castShadow>
        <sphereGeometry args={[0.15]} />
        <meshStandardMaterial color="#D4F1F4" />
      </mesh>
      <mesh position={[0, 0.25, 0]} castShadow>
        <cylinderGeometry args={[0.2, 0.2, 0.5]} />
        <meshStandardMaterial color="#FFDFD3" />
      </mesh>
    </group>
  )
}

function Potty({ color, onClick }: { color: string; onClick: () => void }) {
  return (
    <group onClick={onClick}>
      {/* Base */}
      <mesh position={[0, 0.15, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.25, 0.3, 0.3]} />
        <meshStandardMaterial color={color} roughness={0.4} />
      </mesh>
      {/* Bowl */}
      <mesh position={[0, 0.35, 0]} castShadow>
        <cylinderGeometry args={[0.22, 0.18, 0.15]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.2} metalness={0.3} />
      </mesh>
      {/* Back support */}
      <mesh position={[0, 0.5, -0.2]} castShadow>
        <boxGeometry args={[0.4, 0.3, 0.1]} />
        <meshStandardMaterial color={color} roughness={0.6} />
      </mesh>
    </group>
  )
}

function Toilet({ color, onClick }: { color: string; onClick: () => void }) {
  return (
    <group onClick={onClick}>
      {/* Base */}
      <mesh position={[0, 0.2, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.5, 0.4, 0.6]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.2} metalness={0.3} />
      </mesh>
      {/* Bowl */}
      <mesh position={[0, 0.45, 0]} castShadow>
        <cylinderGeometry args={[0.2, 0.2, 0.1]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.2} metalness={0.3} />
      </mesh>
      {/* Tank */}
      <mesh position={[0, 0.7, -0.2]} castShadow>
        <boxGeometry args={[0.45, 0.5, 0.2]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.2} metalness={0.3} />
      </mesh>
      {/* Seat */}
      <mesh position={[0, 0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.15, 0.25, 32]} />
        <meshStandardMaterial color={color} roughness={0.4} side={2} />
      </mesh>
    </group>
  )
}

function ToyBox({ color, onClick }: { color: string; onClick: () => void }) {
  return (
    <group onClick={onClick}>
      {/* Box body */}
      <mesh position={[0, 0.4, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.2, 0.8, 0.8]} />
        <meshStandardMaterial color={color} roughness={0.7} />
      </mesh>
      {/* Lid */}
      <mesh position={[0, 0.85, 0]} castShadow>
        <boxGeometry args={[1.25, 0.1, 0.85]} />
        <meshStandardMaterial color="#E0BBE4" roughness={0.7} />
      </mesh>
      {/* Toys peeking out */}
      <mesh position={[-0.3, 0.9, 0]} castShadow>
        <sphereGeometry args={[0.1]} />
        <meshStandardMaterial color="#FFE5EC" />
      </mesh>
      <mesh position={[0.2, 0.95, 0.1]} castShadow>
        <boxGeometry args={[0.15, 0.15, 0.15]} />
        <meshStandardMaterial color="#D4F1F4" />
      </mesh>
    </group>
  )
}

function MusicSystem({ color, onClick }: { color: string; onClick: () => void }) {
  return (
    <group onClick={onClick}>
      {/* Base unit */}
      <mesh position={[0, 0.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.8, 0.6, 0.4]} />
        <meshStandardMaterial color={color} roughness={0.5} metalness={0.5} />
      </mesh>
      {/* Display/screen */}
      <mesh position={[0, 0.55, 0.21]}>
        <planeGeometry args={[0.6, 0.3]} />
        <meshStandardMaterial color="#87CEEB" emissive="#87CEEB" emissiveIntensity={0.5} />
      </mesh>
      {/* Buttons */}
      {[-0.2, 0, 0.2].map((x, i) => (
        <mesh key={i} position={[x, 0.25, 0.21]} castShadow>
          <cylinderGeometry args={[0.05, 0.05, 0.05]} />
          <meshStandardMaterial color="#FFE5EC" />
        </mesh>
      ))}
    </group>
  )
}

function DefaultObject({ color, onClick }: { color: string; onClick: () => void }) {
  return (
    <mesh onClick={onClick} castShadow receiveShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} roughness={0.6} />
    </mesh>
  )
}

function DefaultDaycareObjects() {
  return (
    <>
      {/* Changing station */}
      <RigidBody type="fixed" colliders="cuboid" position={[-15, 0, 10]}>
        <ChangingStation color="#B5EAD7" onClick={() => {}} />
      </RigidBody>

      {/* Timeout chairs */}
      <RigidBody type="fixed" colliders="cuboid" position={[15, 0, -15]}>
        <TimeoutChair color="#B5EAD7" onClick={() => {}} />
      </RigidBody>
      <RigidBody type="fixed" colliders="cuboid" position={[17, 0, -15]}>
        <TimeoutChair color="#B5EAD7" onClick={() => {}} />
      </RigidBody>

      {/* Slide */}
      <RigidBody type="fixed" colliders="cuboid" position={[-20, 0, -10]}>
        <Slide color="#FFB7B2" onClick={() => {}} />
      </RigidBody>

      {/* Play areas */}
      <RigidBody type="fixed" colliders="cuboid" position={[0, 0, 0]}>
        <PlayArea color="#D4F1F4" onClick={() => {}} />
      </RigidBody>

      {/* Potties */}
      <RigidBody type="fixed" colliders="cuboid" position={[-5, 0, 15]}>
        <Potty color="#FFEAA7" onClick={() => {}} />
      </RigidBody>
      <RigidBody type="fixed" colliders="cuboid" position={[-3, 0, 15]}>
        <Potty color="#FFEAA7" onClick={() => {}} />
      </RigidBody>

      {/* Toilets */}
      <RigidBody type="fixed" colliders="cuboid" position={[18, 0, 18]}>
        <Toilet color="#E0BBE4" onClick={() => {}} />
      </RigidBody>

      {/* Toy boxes */}
      <RigidBody type="fixed" colliders="cuboid" position={[-10, 0, -5]}>
        <ToyBox color="#FFDFD3" onClick={() => {}} />
      </RigidBody>

      {/* Music system */}
      <RigidBody type="fixed" colliders="cuboid" position={[10, 0, 10]}>
        <MusicSystem color="#C7CEEA" onClick={() => {}} />
      </RigidBody>
    </>
  )
}
