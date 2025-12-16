"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { useGameStore } from "@/lib/stores/gameStore"
import { ElevenLabsService } from "@/lib/services/ElevenLabsService"

export function useVoiceCommunication() {
  const messageCount = useGameStore((state) => state.messages.length)
  const lastMessageId = useGameStore((state) => state.messages[state.messages.length - 1]?.id)
  const caregiversMap = useGameStore((state) => state.caregivers)

  const [voiceService] = useState(() => new ElevenLabsService())
  const lastProcessedMessage = useRef<string | null>(null)
  const audioContextRef = useRef<AudioContext | null>(null)

  // Stable function to get caregiver
  const getCaregiver = useCallback((id: string) => caregiversMap.get(id), [caregiversMap])

  // Initialize audio context
  useEffect(() => {
    if (typeof window !== "undefined" && "AudioContext" in window) {
      audioContextRef.current = new AudioContext()
    }

    return () => {
      audioContextRef.current?.close()
    }
  }, [])

  useEffect(() => {
    if (!audioContextRef.current || !lastMessageId || messageCount === 0) return

    if (lastMessageId === lastProcessedMessage.current) return

    // Get latest message from store
    const messages = useGameStore.getState().messages
    const latestMessage = messages[messages.length - 1]
    if (!latestMessage) return

    const caregiver = getCaregiver(latestMessage.senderId)
    if (!caregiver) return

    lastProcessedMessage.current = lastMessageId

    // Synthesize speech
    const voiceSettings = voiceService.getVoiceSettingsForEmotion(caregiver.voiceProfile.emotion)

    voiceService
      .synthesizeSpeech(latestMessage.content, {
        voiceId: caregiver.voiceProfile.voiceId,
        ...voiceSettings,
      })
      .then(async (audioData) => {
        if (!audioContextRef.current || audioData.byteLength === 0) return

        try {
          const audioBuffer = await audioContextRef.current.decodeAudioData(audioData)
          const source = audioContextRef.current.createBufferSource()
          source.buffer = audioBuffer
          source.connect(audioContextRef.current.destination)
          source.start()
        } catch (error) {
          console.error("[v0] Failed to play audio:", error)
        }
      })
      .catch((error) => {
        console.error("[v0] Failed to synthesize speech:", error)
      })
  }, [lastMessageId, messageCount, voiceService, getCaregiver])
}
