"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Crown, Calendar, AlertCircle } from "lucide-react"
import { useGameStore } from "@/lib/stores/gameStore"
import { hasValidDaycareAccess } from "@/lib/utils/paywall"

export function SubscriptionStatus() {
  const currentLobby = useGameStore((state) => state.currentLobby)
  const setShowPaywall = useGameStore((state) => state.setShowPaywall)

  if (!currentLobby) return null

  const isPaid = false // Would check actual payment status
  const hasAccess = hasValidDaycareAccess(currentLobby.createdAt, currentLobby.trialEndDate, isPaid)
  const isExpired = currentLobby.trialEndDate && Date.now() > currentLobby.trialEndDate

  if (isPaid) {
    return (
      <Card className="p-4 bg-primary/10 border-primary/30">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/20 rounded-full">
            <Crown className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-foreground">Premium Member</h4>
            <p className="text-sm text-muted-foreground">Thank you for your support!</p>
          </div>
        </div>
      </Card>
    )
  }

  if (isExpired) {
    return (
      <Card className="p-4 bg-destructive/10 border-destructive/30">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-destructive/20 rounded-full">
            <AlertCircle className="h-5 w-5 text-destructive" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-foreground">Trial Expired</h4>
            <p className="text-sm text-muted-foreground">Upgrade to continue using daycare features</p>
          </div>
          <Button size="sm" onClick={() => setShowPaywall(true)} className="bg-primary hover:bg-primary/90">
            Upgrade Now
          </Button>
        </div>
      </Card>
    )
  }

  if (currentLobby.trialEndDate) {
    const daysRemaining = Math.ceil((currentLobby.trialEndDate - Date.now()) / (1000 * 60 * 60 * 24))

    return (
      <Card className="p-4 bg-secondary/10 border-secondary/30">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-secondary/20 rounded-full">
            <Calendar className="h-5 w-5 text-secondary" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-foreground">Free Trial Active</h4>
            <p className="text-sm text-muted-foreground">
              {daysRemaining} {daysRemaining === 1 ? "day" : "days"} remaining
            </p>
          </div>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setShowPaywall(true)}
            className="border-primary text-primary hover:bg-primary/10"
          >
            Upgrade
          </Button>
        </div>
      </Card>
    )
  }

  return null
}
