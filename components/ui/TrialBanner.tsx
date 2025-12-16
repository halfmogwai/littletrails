"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Sparkles } from "lucide-react"
import { useGameStore } from "@/lib/stores/gameStore"
import { hasValidDaycareAccess } from "@/lib/utils/paywall"

export function TrialBanner() {
  const currentLobby = useGameStore((state) => state.currentLobby)
  const setShowPaywall = useGameStore((state) => state.setShowPaywall)
  const [daysRemaining, setDaysRemaining] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!currentLobby || !currentLobby.trialEndDate) {
      setIsVisible(false)
      return
    }

    const hasAccess = hasValidDaycareAccess(currentLobby.createdAt, currentLobby.trialEndDate, false)
    const remaining = Math.ceil((currentLobby.trialEndDate - Date.now()) / (1000 * 60 * 60 * 24))

    setDaysRemaining(remaining)
    setIsVisible(hasAccess && remaining <= 3) // Show when 3 or fewer days remain
  }, [currentLobby])

  if (!isVisible || daysRemaining <= 0) return null

  return (
    <Card className="fixed top-20 left-1/2 -translate-x-1/2 p-4 pointer-events-auto bg-accent/90 backdrop-blur-sm border-2 border-primary/30 max-w-[400px]">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-primary/20 rounded-full">
          <Clock className="h-5 w-5 text-primary" />
        </div>

        <div className="flex-1">
          <h4 className="font-semibold text-foreground flex items-center gap-1">
            Trial Ending Soon
            {daysRemaining <= 1 && <Sparkles className="h-3 w-3 text-primary animate-pulse" />}
          </h4>
          <p className="text-sm text-muted-foreground">
            {daysRemaining === 1 ? "1 day" : `${daysRemaining} days`} left in your free trial
          </p>
        </div>

        <Button size="sm" onClick={() => setShowPaywall(true)} className="bg-primary hover:bg-primary/90">
          Upgrade
        </Button>
      </div>
    </Card>
  )
}
