"use client"

import { useMemo } from "react"
import { useGameStore } from "@/lib/stores/gameStore"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { usePlayerActions } from "@/lib/hooks/usePlayerActions"
import { getAlignmentColor } from "@/lib/types/gameTypes"

export function HUD() {
  const { currentPlayer } = usePlayerActions()
  const messagesArray = useGameStore((state) => state.messages)
  const messages = useMemo(() => messagesArray.slice(-5), [messagesArray])

  if (!currentPlayer) return null

  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Top left - Player stats */}
      <Card className="absolute top-4 left-4 p-4 pointer-events-auto bg-card/90 backdrop-blur-sm">
        <div className="flex flex-col gap-2 min-w-[200px]">
          <h3 className="font-semibold text-foreground">{currentPlayer.name}</h3>

          {/* Alignment indicator */}
          <div
            className="px-2 py-1 rounded-md text-xs font-medium text-center"
            style={{ backgroundColor: getAlignmentColor(currentPlayer.alignment) }}
          >
            {currentPlayer.alignment.replace(/_/g, " ").toUpperCase()}
          </div>

          {/* Needs */}
          <div className="flex flex-col gap-1">
            <div className="flex justify-between text-xs">
              <span>Bladder</span>
              <span>{Math.round(currentPlayer.needs.bladder)}%</span>
            </div>
            <Progress value={currentPlayer.needs.bladder} className="h-2" />

            <div className="flex justify-between text-xs">
              <span>Bowel</span>
              <span>{Math.round(currentPlayer.needs.bowel)}%</span>
            </div>
            <Progress value={currentPlayer.needs.bowel} className="h-2" />

            <div className="flex justify-between text-xs">
              <span>Hunger</span>
              <span>{Math.round(currentPlayer.needs.hunger)}%</span>
            </div>
            <Progress value={currentPlayer.needs.hunger} className="h-2" />
          </div>

          {/* Clothing status */}
          <div className="text-xs text-muted-foreground">
            <div>Underwear: {currentPlayer.clothing.underwearType}</div>
            <div>State: {currentPlayer.clothing.underwearState}</div>
            {currentPlayer.clothing.underwearType === "diaper" && (
              <div>Fill: {currentPlayer.clothing.diaperFillLevel}/5</div>
            )}
          </div>
        </div>
      </Card>

      {/* Bottom center - Chat messages */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[500px] pointer-events-auto">
        <div className="flex flex-col gap-1">
          {messages.map((msg) => (
            <div key={msg.id} className="bg-card/90 backdrop-blur-sm rounded-lg px-3 py-2 text-sm">
              <span className="font-semibold text-primary">{msg.senderName}: </span>
              <span className="text-foreground">{msg.content}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom right - Controls hint */}
      <Card className="absolute bottom-4 right-4 p-3 pointer-events-auto bg-card/90 backdrop-blur-sm">
        <div className="text-xs text-muted-foreground">
          <div className="font-semibold mb-1">Controls</div>
          <div>WASD / Arrows - Move</div>
          <div>Shift - Run</div>
          <div>Space - Jump</div>
        </div>
      </Card>
    </div>
  )
}
