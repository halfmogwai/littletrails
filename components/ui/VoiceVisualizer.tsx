"use client"

import { useMemo } from "react"
import { useVoiceStore } from "@/lib/stores/voiceStore"
import { useGameStore } from "@/lib/stores/gameStore"

export function VoiceVisualizer() {
  const audioLevel = useVoiceStore((state) => state.audioLevel)
  const playersMap = useGameStore((state) => state.players)
  const caregiversMap = useGameStore((state) => state.caregivers)

  const players = useMemo(() => Array.from(playersMap.values()), [playersMap])
  const caregivers = useMemo(() => Array.from(caregiversMap.values()), [caregiversMap])

  const activeSpeakers = useMemo(
    () =>
      [...players, ...caregivers].filter(
        (entity) => entity.lastVoiceActivity && Date.now() - entity.lastVoiceActivity < 2000,
      ),
    [players, caregivers],
  )

  if (activeSpeakers.length === 0 && audioLevel === 0) return null

  return (
    <div className="fixed top-20 right-4 pointer-events-none">
      <div className="flex flex-col gap-2">
        {activeSpeakers.map((speaker) => (
          <div
            key={speaker.id}
            className="bg-primary/20 backdrop-blur-sm rounded-lg px-3 py-2 flex items-center gap-2 animate-pulse"
          >
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-sm font-medium text-foreground">{speaker.name} is speaking</span>
          </div>
        ))}

        {audioLevel > 0 && (
          <div className="bg-secondary/20 backdrop-blur-sm rounded-lg px-3 py-2">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-1 bg-primary rounded-full transition-all"
                    style={{
                      height: audioLevel * 100 > i * 20 ? `${(i + 1) * 4}px` : "4px",
                    }}
                  />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">Your mic</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
