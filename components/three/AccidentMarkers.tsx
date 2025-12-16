"use client"

import { useMemo } from "react"
import { useGameStore } from "@/lib/stores/gameStore"

export function AccidentMarkers() {
  const accidentsMap = useGameStore((state) => state.accidents)
  const accidents = useMemo(() => Array.from(accidentsMap.values()), [accidentsMap])

  return (
    <>{accidents.map((accident) => !accident.cleanedUp && <AccidentMarker key={accident.id} accident={accident} />)}</>
  )
}

function AccidentMarker({ accident }: { accident: any }) {
  const color = accident.type === "pee" ? "#FFD700" : "#8B4513"
  const size = 0.3 + (accident.size / 100) * 0.5

  return (
    <mesh position={[accident.position.x, 0.02, accident.position.z]} rotation={[-Math.PI / 2, 0, 0]}>
      <circleGeometry args={[size, 16]} />
      <meshBasicMaterial color={color} transparent opacity={0.7} />
    </mesh>
  )
}
