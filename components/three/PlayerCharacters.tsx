"use client"

import { useMemo } from "react"
import { useGameStore } from "@/lib/stores/gameStore"
import { PlayerController } from "./PlayerController"
import { KeyboardControls } from "@react-three/drei"
import { useShallow } from "zustand/react/shallow"

// Keyboard controls configuration
const keyboardMap = [
  { name: "forward", keys: ["ArrowUp", "KeyW"] },
  { name: "backward", keys: ["ArrowDown", "KeyS"] },
  { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
  { name: "rightward", keys: ["ArrowRight", "KeyD"] },
  { name: "jump", keys: ["Space"] },
  { name: "run", keys: ["Shift"] },
  { name: "pee", keys: ["KeyP"] },
  { name: "poop", keys: ["RightShift", "KeyP"] },
  { name: "cry", keys: ["KeyC"] },
  { name: "grab", keys: ["KeyQ"] },
  { name: "crawl", keys: ["KeyE"] },
];

export function PlayerCharacters() {
    const players = useGameStore(
    useShallow((s) => Array.from(s.players.values()))
  )
  const currentPlayerId = useGameStore((s) => s.currentPlayerId)

  return (
    <KeyboardControls map={keyboardMap}>
      {players.map((player) => (
        <PlayerController
          key={player.id}
          player={player}
          isLocalPlayer={player.id === currentPlayerId}
        />
      ))}
    </KeyboardControls>
  )
}