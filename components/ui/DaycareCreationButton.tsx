"use client"

import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import { useGameStore } from "@/lib/stores/gameStore"
import { hasValidDaycareAccess } from "@/lib/utils/paywall"

export function DaycareCreationButton() {
  const currentLobby = useGameStore((state) => state.currentLobby)
  const setShowPaywall = useGameStore((state) => state.setShowPaywall)

  const handleCreateDaycare = () => {
    // Check if user has valid access
    const hasAccess = currentLobby
      ? hasValidDaycareAccess(currentLobby.createdAt, currentLobby.trialEndDate, false)
      : false

    if (hasAccess) {
      // Create daycare
      console.log("[v0] Creating daycare...")
      // Would show daycare creation modal
    } else {
      // Show paywall
      setShowPaywall(true)
    }
  }

  return (
    <Button onClick={handleCreateDaycare} className="gap-2 bg-primary hover:bg-primary/90">
      <PlusCircle className="h-4 w-4" />
      Create Daycare
    </Button>
  )
}
