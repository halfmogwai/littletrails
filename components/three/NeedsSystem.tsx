"use client"

import { useEffect, useRef } from "react"
import { useGameStore } from "@/lib/stores/gameStore"
import { getAgeRules } from "@/lib/rules/gameRules"

/**
 * Needs System - Manages player needs (bladder, bowel, hunger)
 * Runs independently and updates player state
 */
export function useNeedsSystem() {
  const playersMap = useGameStore((state) => state.players)
  const updatePlayerNeeds = useGameStore((state) => state.updatePlayerNeeds)
  const updatePlayerClothing = useGameStore((state) => state.updatePlayerClothing)
  const addAccident = useGameStore((state) => state.addAccident)

  const playerIdsRef = useRef<Set<string>>(new Set())

  useEffect(() => {
    const players = Array.from(playersMap.values())

    const interval = setInterval(() => {
      players.forEach((player) => {
        // Skip caregivers
        if (player.role === "caregiver") return

        const ageRules = getAgeRules(player.character.ageGroup)
        const newNeeds = { ...player.needs }

        // Increase needs over time
        newNeeds.bladder = Math.min(100, player.needs.bladder + Math.random() * 2)
        newNeeds.bowel = Math.min(100, player.needs.bowel + Math.random() * 1)
        newNeeds.hunger = Math.min(100, player.needs.hunger + Math.random() * 0.5)

        updatePlayerNeeds(player.id, newNeeds)

        // Check for accidents
        if (newNeeds.bladder >= 100 && player.clothing.underwearType === "diaper") {
          // Automatic wetting in diaper
          const newFillLevel = Math.min(5, player.clothing.diaperFillLevel + 1)
          const newState = player.clothing.underwearState === "messy" ? "both" : "wet"

          updatePlayerClothing(player.id, {
            diaperFillLevel: newFillLevel,
            underwearState: newState,
          })

          // Reset bladder
          updatePlayerNeeds(player.id, { bladder: 0 })
        } else if (newNeeds.bladder >= 100 && player.clothing.underwearType !== "diaper") {
          // Accident on floor
          addAccident({
            id: `accident_${Date.now()}_${player.id}`,
            type: "pee",
            position: player.position,
            playerId: player.id,
            timestamp: Date.now(),
            cleanedUp: false,
            size: 50 + Math.random() * 50,
            cause: "bladder_full",
          })

          // Wet underwear
          updatePlayerClothing(player.id, {
            underwearState: player.clothing.underwearState === "messy" ? "both" : "wet",
          })

          // Reset bladder
          updatePlayerNeeds(player.id, { bladder: 0 })
        }

        // Bowel accidents
        if (newNeeds.bowel >= 100) {
          if (player.clothing.underwearType === "diaper") {
            // Mess in diaper
            const newFillLevel = Math.min(5, player.clothing.diaperFillLevel + 2)
            const newState = player.clothing.underwearState === "wet" ? "both" : "messy"

            updatePlayerClothing(player.id, {
              diaperFillLevel: newFillLevel,
              underwearState: newState,
            })

            // Reset bowel
            updatePlayerNeeds(player.id, { bowel: 0 })
          } else {
            // Accident on floor
            addAccident({
              id: `accident_${Date.now()}_${player.id}`,
              type: "poop",
              position: player.position,
              playerId: player.id,
              timestamp: Date.now(),
              cleanedUp: false,
              size: 30 + Math.random() * 40,
              cause: "bowel_full",
            })

            // Messy underwear
            updatePlayerClothing(player.id, {
              underwearState: player.clothing.underwearState === "wet" ? "both" : "messy",
            })

            // Reset bowel
            updatePlayerNeeds(player.id, { bowel: 0 })
          }
        }
      })
    }, 5000) // Update every 5 seconds

    return () => clearInterval(interval)
  }, [playersMap.size, updatePlayerNeeds, updatePlayerClothing, addAccident])
}
