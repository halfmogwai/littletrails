"use client"

import { Canvas } from "@react-three/fiber"
import { Physics } from "@react-three/rapier"
import { Sky, Environment } from "@react-three/drei"
import { Suspense } from "react"
import { useRef } from "react"
import { DaycareEnvironment } from "./DaycareEnvironment"
import { DaycareObjects } from "./DaycareObjects"
import { PlayerCharacters } from "./PlayerCharacters"
import { CaregiverCharacters } from "./CaregiverCharacters"
import { AccidentMarkers } from "./AccidentMarkers"
import { LoadingFallback } from "./LoadingFallback"
import { useNeedsSystem } from "./NeedsSystem"
import { useGameStore } from "@/lib/stores/gameStore"

export function DaycareScene() {
  useNeedsSystem()
  const currentPlayerId = useGameStore((state) => state.currentPlayerId)
  const players = useGameStore((state) => state.players)
  const currentPlayer = currentPlayerId ? players.get(currentPlayerId) : null
  const playerRef = useRef<any>(null)

  return (
    <div className="w-full h-screen">
      <Canvas
        shadows
        camera={{
          position: [0, 5, 10],
          fov: 60,
          near: 0.1,
          far: 1000,
        }}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: "high-performance",
        }}
      >
        <Suspense fallback={<LoadingFallback />}>
          {/* Lighting */}
          <ambientLight intensity={0.6} color="#FFE5EC" />
          <directionalLight
            position={[10, 20, 10]}
            intensity={0.8}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-camera-far={50}
            shadow-camera-left={-30}
            shadow-camera-right={30}
            shadow-camera-top={30}
            shadow-camera-bottom={-30}
            color="#FFFAF0"
          />
          <pointLight position={[-10, 10, -10]} intensity={0.3} color="#E0BBE4" />
          <pointLight position={[10, 10, 10]} intensity={0.3} color="#FFDFD3" />

          {/* Pastel sky */}
          <Sky
            distance={450000}
            sunPosition={[10, 20, 10]}
            inclination={0.6}
            azimuth={0.25}
            turbidity={2}
            rayleigh={0.5}
          />

          {/* Physics world with gravity */}
          <Physics gravity={[0, -9.81, 0]} debug={true} timeStep={1 / 60} numSolverIterations={10}>
            {/* Ground and walls */}
            <DaycareEnvironment />

            {/* Interactive objects */}
            <DaycareObjects />

            {/* Player characters */}
            <PlayerCharacters />

            {/* AI Caregiver NPCs */}
            <CaregiverCharacters />

            {/* Accident markers */}
            <AccidentMarkers />
          </Physics>

          {/* Environment lighting */}
          <Environment preset="apartment" background={false} />
        </Suspense>
      </Canvas>
    </div>
  )
}
