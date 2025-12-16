"use client"

import { useMemo } from "react"
import { RigidBody, CuboidCollider } from "@react-three/rapier"

export function DaycareEnvironment() {
  // Decorative elements (posters) with explicit thin colliders
  const decorativeElements = useMemo(() => {
    const elements = []

    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2
      const radius = 35
      const x = Math.cos(angle) * radius
      const z = Math.sin(angle) * radius

      // Poster is a plane, so we give it a tiny cuboid collider explicitly.
      elements.push(
        <RigidBody key={`wall-art-${i}`} type="fixed" colliders={false}>
          <CuboidCollider
            // half extents (width/2, height/2, depth/2)
            args={[1, 0.75, 0.03]}
            position={[x, 3, z]}
            rotation={[0, angle + Math.PI, 0]}
          />
          <mesh position={[x, 3, z]} rotation={[0, angle + Math.PI, 0]}>
            <planeGeometry args={[2, 1.5]} />
            <meshStandardMaterial
              color={i % 2 === 0 ? "#FFE5EC" : "#D4F1F4"}
              roughness={0.5}
            />
          </mesh>
        </RigidBody>
      )
    }

    return elements
  }, [])

  return (
    <>
      {/* =========================
          FLOOR (visual plane + thick collider)
         ========================= */}
      <RigidBody type="fixed" colliders={false} friction={1.2} restitution={0.2}>
        {/* Collider thickness: 0.5 tall (half-height 0.25), top at y=0 */}
        <CuboidCollider args={[40, 0.25, 40]} position={[0, -0.25, 0]} />

        {/* Visual plane at y=0 */}
        <mesh receiveShadow position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[80, 80]} />
          <meshStandardMaterial color="#FFF5F7" roughness={0.8} metalness={0.1} />
        </mesh>
      </RigidBody>

      {/* =========================
          CEILING (optional)
         ========================= */}
      <RigidBody type="fixed" colliders={false}>
        {/* Ceiling collider: thin slab near y=6 */}
        <CuboidCollider args={[40, 0.15, 40]} position={[0, 6.15, 0]} />
        <mesh position={[0, 6, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <planeGeometry args={[80, 80]} />
          <meshStandardMaterial
            color="#FFFAF0"
            side={2}
            transparent
            opacity={0.9}
          />
        </mesh>
      </RigidBody>

      {/* =========================
          WALLS
         ========================= */}
      <WallSegment
        position={[0, 2, -40]}
        rotation={[0, 0, 0]}
        width={80}
        height={4}
        thickness={0.35}
        color="#E0BBE4"
        hasWindows
      />
      <WallSegment
        position={[0, 2, 40]}
        rotation={[0, Math.PI, 0]}
        width={80}
        height={4}
        thickness={0.35}
        color="#E0BBE4"
        hasWindows
      />
      <WallSegment
        position={[-40, 2, 0]}
        rotation={[0, Math.PI / 2, 0]}
        width={80}
        height={4}
        thickness={0.35}
        color="#FFDFD3"
        hasWindows
      />
      <WallSegment
        position={[40, 2, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        width={80}
        height={4}
        thickness={0.35}
        color="#FFDFD3"
        hasWindows
      />

      {/* Interior walls */}
      <WallSegment
        position={[-10, 2, 15]}
        rotation={[0, 0, 0]}
        width={20}
        height={4}
        thickness={0.35}
        color="#D4F1F4"
      />
      <WallSegment
        position={[10, 2, -15]}
        rotation={[0, Math.PI / 2, 0]}
        width={15}
        height={4}
        thickness={0.35}
        color="#FFEAA7"
      />

      {/* =========================
          DECORATIVE RUGS (visual only)
         ========================= */}
      <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[8, 32]} />
        <meshStandardMaterial color="#FFE5EC" roughness={0.9} />
      </mesh>

      <mesh position={[-15, 0.01, -15]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[5, 32]} />
        <meshStandardMaterial color="#E0BBE4" roughness={0.9} />
      </mesh>

      <mesh position={[15, 0.01, 15]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[5, 32]} />
        <meshStandardMaterial color="#D4F1F4" roughness={0.9} />
      </mesh>

      {/* =========================
          DECORATIVE WALL ART
         ========================= */}
      {decorativeElements}
    </>
  )
}

interface WallSegmentProps {
  position: [number, number, number]
  rotation: [number, number, number]
  width: number
  height: number
  thickness?: number
  color: string
  hasWindows?: boolean
}

/**
 * WallSegment: visual wall + explicit cuboid collider.
 * IMPORTANT: collider uses thickness so the player doesn't snag on a paper-thin mesh.
 */
function WallSegment({
  position,
  rotation,
  width,
  height,
  thickness = 0.35,
  color,
  hasWindows = false,
}: WallSegmentProps) {
  return (
    <RigidBody type="fixed" colliders={false}>
      {/* Collider centered on the wall segment */}
      <CuboidCollider
        args={[width / 2, height / 2, thickness / 2]}
        position={position}
        rotation={rotation}
      />

      {/* Visuals */}
      <group position={position} rotation={rotation}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[width, height, thickness]} />
          <meshStandardMaterial color={color} roughness={0.7} metalness={0.2} />
        </mesh>

        {hasWindows && (
          <>
            <mesh position={[0, 0, thickness / 2 + 0.01]}>
              <planeGeometry args={[width * 0.8, height * 0.6]} />
              <meshStandardMaterial color="#D4F1F4" transparent opacity={0.7} />
            </mesh>

            <mesh position={[-width * 0.35, height * 0.2, thickness / 2 + 0.02]}>
              <boxGeometry args={[0.5, 0.1, 0.03]} />
              <meshStandardMaterial color="#FFE5EC" />
            </mesh>
            <mesh position={[width * 0.35, height * 0.2, thickness / 2 + 0.02]}>
              <boxGeometry args={[0.5, 0.1, 0.03]} />
              <meshStandardMaterial color="#FFE5EC" />
            </mesh>
          </>
        )}
      </group>
    </RigidBody>
  )
}
