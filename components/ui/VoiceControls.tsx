"use client"

import { useState, useCallback, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mic, MicOff, Volume2, VolumeX } from "lucide-react"
import { useVoiceStore } from "@/lib/stores/voiceStore"
import { useGameStore } from "@/lib/stores/gameStore"
import { ElevenLabsService } from "@/lib/services/ElevenLabsService"
import { nanoid } from "nanoid"

export function VoiceControls() {
  const [isRecording, setIsRecording] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [voiceService] = useState(() => new ElevenLabsService())
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const audioChunksRef = useRef<Blob[]>([])

  const { setRecording, setAudioLevel, setLastTranscript } = useVoiceStore()
  const addMessage = useGameStore((state) => state.addMessage)
  const currentPlayerId = useGameStore((state) => state.currentPlayerId)

  const startRecording = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })

      const mediaRecorder = new MediaRecorder(stream)
      mediaRecorderRef.current = mediaRecorder
      audioChunksRef.current = []

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data)
        }
      }

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/wav" })
        const arrayBuffer = await audioBlob.arrayBuffer()

        // Transcribe audio
        try {
          const result = await voiceService.recognizeSpeech(arrayBuffer)
          console.log("[v0] Transcription:", result.text)

          setLastTranscript(result.text, result.confidence)

          // Add message to chat
          if (currentPlayerId) {
            addMessage({
              id: `msg_${nanoid()}`,
              senderId: currentPlayerId,
              senderName: "You",
              content: result.text,
              timestamp: Date.now(),
              isSystem: false,
              messageType: "chat",
            })
          }
        } catch (error) {
          console.error("[v0] Transcription failed:", error)
        }

        // Clean up
        stream.getTracks().forEach((track) => track.stop())
        audioChunksRef.current = []
      }

      mediaRecorder.start()
      setIsRecording(true)
      setRecording(true)

      // Audio level monitoring
      if (typeof window !== "undefined" && "AudioContext" in window) {
        const audioContext = new AudioContext()
        const source = audioContext.createMediaStreamSource(stream)
        const analyser = audioContext.createAnalyser()
        analyser.fftSize = 256
        source.connect(analyser)

        const dataArray = new Uint8Array(analyser.frequencyBinCount)
        const updateLevel = () => {
          if (mediaRecorderRef.current?.state === "recording") {
            analyser.getByteFrequencyData(dataArray)
            const average = dataArray.reduce((a, b) => a + b) / dataArray.length
            setAudioLevel(average / 255)
            requestAnimationFrame(updateLevel)
          }
        }
        updateLevel()
      }
    } catch (error) {
      console.error("[v0] Failed to start recording:", error)
    }
  }, [voiceService, setRecording, setAudioLevel, setLastTranscript, addMessage, currentPlayerId])

  const stopRecording = useCallback(() => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
      mediaRecorderRef.current.stop()
      setIsRecording(false)
      setRecording(false)
      setAudioLevel(0)
    }
  }, [setRecording, setAudioLevel])

  const toggleMute = useCallback(() => {
    setIsMuted(!isMuted)
  }, [isMuted])

  return (
    <Card className="absolute top-4 right-4 p-3 pointer-events-auto bg-card/90 backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <Button
          variant={isRecording ? "destructive" : "default"}
          size="icon"
          onMouseDown={startRecording}
          onMouseUp={stopRecording}
          onTouchStart={startRecording}
          onTouchEnd={stopRecording}
        >
          {isRecording ? <Mic className="h-4 w-4 animate-pulse" /> : <MicOff className="h-4 w-4" />}
        </Button>

        <Button variant="outline" size="icon" onClick={toggleMute}>
          {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </Button>

        <div className="flex flex-col gap-1 min-w-[100px]">
          <div className="text-xs font-medium">{isRecording ? "Recording..." : "Hold to talk"}</div>
          {isRecording && (
            <div className="h-1 bg-secondary rounded-full overflow-hidden">
              <div className="h-full bg-primary animate-pulse" style={{ width: "100%" }} />
            </div>
          )}
        </div>
      </div>
    </Card>
  )
}
