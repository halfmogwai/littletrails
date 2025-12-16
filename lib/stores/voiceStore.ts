import { create } from "zustand"
import type { VoiceProfile } from "@/lib/types/gameTypes"

interface VoiceState {
  // Voice connection
  isConnected: boolean
  isRecording: boolean
  audioLevel: number

  // Voice profile
  currentVoiceProfile: VoiceProfile | null
  availableVoices: VoiceProfile[]

  // Caregiver voices
  caregiverVoices: Map<string, string> // caregiverId -> voiceId

  // Transcription
  lastTranscript: string | null
  transcriptConfidence: number

  // Actions
  setConnected: (connected: boolean) => void
  setRecording: (recording: boolean) => void
  setAudioLevel: (level: number) => void
  setVoiceProfile: (profile: VoiceProfile | null) => void
  setAvailableVoices: (voices: VoiceProfile[]) => void
  setCaregiverVoice: (caregiverId: string, voiceId: string) => void
  setLastTranscript: (transcript: string, confidence: number) => void
}

export const useVoiceStore = create<VoiceState>((set) => ({
  isConnected: false,
  isRecording: false,
  audioLevel: 0,
  currentVoiceProfile: null,
  availableVoices: [],
  caregiverVoices: new Map(),
  lastTranscript: null,
  transcriptConfidence: 0,

  setConnected: (connected) => set({ isConnected: connected }),
  setRecording: (recording) => set({ isRecording: recording }),
  setAudioLevel: (level) => set({ audioLevel: level }),
  setVoiceProfile: (profile) => set({ currentVoiceProfile: profile }),
  setAvailableVoices: (voices) => set({ availableVoices: voices }),

  setCaregiverVoice: (caregiverId, voiceId) =>
    set((state) => {
      const caregiverVoices = new Map(state.caregiverVoices)
      caregiverVoices.set(caregiverId, voiceId)
      return { caregiverVoices }
    }),

  setLastTranscript: (transcript, confidence) =>
    set({
      lastTranscript: transcript,
      transcriptConfidence: confidence,
    }),
}))
