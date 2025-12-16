"use client"

import { useVoiceStore } from "@/lib/stores/voiceStore"
import { Card } from "@/components/ui/card"

export function TranscriptDisplay() {
  const lastTranscript = useVoiceStore((state) => state.lastTranscript)
  const transcriptConfidence = useVoiceStore((state) => state.transcriptConfidence)

  if (!lastTranscript) return null

  return (
    <Card className="fixed bottom-32 left-1/2 -translate-x-1/2 p-3 max-w-[500px] pointer-events-auto bg-card/90 backdrop-blur-sm">
      <div className="flex flex-col gap-1">
        <div className="text-xs text-muted-foreground flex justify-between">
          <span>You said:</span>
          <span>Confidence: {Math.round(transcriptConfidence * 100)}%</span>
        </div>
        <div className="text-sm text-foreground">{lastTranscript}</div>
      </div>
    </Card>
  )
}
