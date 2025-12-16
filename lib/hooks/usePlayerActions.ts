"use client"

import { useCallback } from "react"
import { useGameStore } from "@/lib/stores/gameStore"
import { getAgeRules, canChangeUnderwear } from "@/lib/rules/gameRules"
import type { UnderwearType } from "@/lib/types/gameTypes"

export function usePlayerActions() {
  const currentPlayerId = useGameStore((state) => state.currentPlayerId)
  const currentPlayer = useGameStore((state) =>
    state.currentPlayerId ? state.players.get(state.currentPlayerId) : null,
  )
  const updatePlayerClothing = useGameStore((state) => state.updatePlayerClothing)
  const updatePlayerNeeds = useGameStore((state) => state.updatePlayerNeeds)
  const addMessage = useGameStore((state) => state.addMessage)

  const togglePacifier = useCallback(() => {
    if (!currentPlayer) return

    const ageRules = getAgeRules(currentPlayer.character.ageGroup)
    if (!ageRules.canTogglePacifier) {
      addMessage({
        id: `msg_${Date.now()}`,
        senderId: "system",
        senderName: "System",
        content: "You cannot remove your pacifier at this age.",
        timestamp: Date.now(),
        isSystem: true,
        messageType: "announcement",
      })
      return
    }

    updatePlayerClothing(currentPlayer.id, {
      pacifierIn: !currentPlayer.clothing.pacifierIn,
    })
  }, [currentPlayer, updatePlayerClothing, addMessage])

  const changeUnderwear = useCallback(
    (newType: UnderwearType) => {
      if (!currentPlayer) return

      if (!canChangeUnderwear(currentPlayer.character.ageGroup, newType)) {
        addMessage({
          id: `msg_${Date.now()}`,
          senderId: "system",
          senderName: "System",
          content: `You cannot wear ${newType} at your age.`,
          timestamp: Date.now(),
          isSystem: true,
          messageType: "announcement",
        })
        return
      }

      updatePlayerClothing(currentPlayer.id, {
        underwearType: newType,
        underwearState: "clean",
        diaperFillLevel: 0,
      })

      addMessage({
        id: `msg_${Date.now()}`,
        senderId: "system",
        senderName: "System",
        content: `Changed to ${newType}.`,
        timestamp: Date.now(),
        isSystem: true,
        messageType: "announcement",
      })
    },
    [currentPlayer, updatePlayerClothing, addMessage],
  )

  const usePotty = useCallback(() => {
    if (!currentPlayer) return

    const ageRules = getAgeRules(currentPlayer.character.ageGroup)
    if (!ageRules.canUsePotty) {
      addMessage({
        id: `msg_${Date.now()}`,
        senderId: "system",
        senderName: "System",
        content: "You need help using the potty.",
        timestamp: Date.now(),
        isSystem: true,
        messageType: "announcement",
      })
      return
    }

    // Check if near a potty (would need object proximity check)
    updatePlayerNeeds(currentPlayer.id, {
      bladder: Math.max(0, currentPlayer.needs.bladder - 50),
    })

    addMessage({
      id: `msg_${Date.now()}`,
      senderId: "system",
      senderName: "System",
      content: "You used the potty!",
      timestamp: Date.now(),
      isSystem: true,
      messageType: "announcement",
    })
  }, [currentPlayer, updatePlayerNeeds, addMessage])

  const useToilet = useCallback(() => {
    if (!currentPlayer) return

    const ageRules = getAgeRules(currentPlayer.character.ageGroup)
    if (!ageRules.canUseToilet(currentPlayer.clothing.underwearType)) {
      addMessage({
        id: `msg_${Date.now()}`,
        senderId: "system",
        senderName: "System",
        content: "You cannot use the toilet with your current underwear.",
        timestamp: Date.now(),
        isSystem: true,
        messageType: "announcement",
      })
      return
    }

    updatePlayerNeeds(currentPlayer.id, {
      bladder: 0,
      bowel: 0,
    })

    addMessage({
      id: `msg_${Date.now()}`,
      senderId: "system",
      senderName: "System",
      content: "You used the toilet!",
      timestamp: Date.now(),
      isSystem: true,
      messageType: "announcement",
    })
  }, [currentPlayer, updatePlayerNeeds, addMessage])

  return {
    togglePacifier,
    changeUnderwear,
    usePotty,
    useToilet,
    currentPlayer,
  }
}
