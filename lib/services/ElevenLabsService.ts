import type {
  VoiceProfile,
  VoiceRecognitionResult,
  VoiceSynthesisOptions,
  VoiceService,
  VoiceEmotion,
} from "@/lib/types/gameTypes"

/**
 * ElevenLabs Service - Client-side wrapper using secure API routes
 */
export class ElevenLabsService implements VoiceService {
  private voiceProfile: VoiceProfile | null = null
  private recognitionLanguage = "en"
  private synthesisLanguage = "en"
  private audioLevelCallback?: (level: number) => void

  constructor() {}

  get isInitialized(): boolean {
    return true // Always initialized since we use server routes
  }

  async recognizeSpeech(audioData: ArrayBuffer): Promise<VoiceRecognitionResult> {
    try {
      const formData = new FormData()
      formData.append("audio", new Blob([audioData], { type: "audio/wav" }))

      const response = await fetch("/api/voice/transcribe", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error(`Transcription error: ${response.status}`)
      }

      const result = await response.json()

      return {
        text: result.text || "",
        confidence: result.confidence || 0.9,
        language: result.language || this.recognitionLanguage,
        duration: result.duration || 0,
      }
    } catch (error) {
      console.error("Speech recognition failed:", error)
      throw new Error(`Speech recognition failed: ${error}`)
    }
  }

  async startContinuousRecognition(): Promise<void> {
    console.log("Starting continuous recognition")
  }

  async stopContinuousRecognition(): Promise<string> {
    console.log("Stopping continuous recognition")
    return ""
  }

  async synthesizeSpeech(text: string, options: VoiceSynthesisOptions): Promise<ArrayBuffer> {
    try {
      const { voiceId, stability = 0.7, similarityBoost = 0.8, style = 0.3 } = options

      const response = await fetch("/api/voice/synthesize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text,
          voiceId,
          stability,
          similarityBoost,
          style,
        }),
      })

      if (!response.ok) {
        throw new Error(`Speech synthesis error: ${response.status}`)
      }

      return await response.arrayBuffer()
    } catch (error) {
      console.error("Speech synthesis failed:", error)
      throw new Error(`Speech synthesis failed: ${error}`)
    }
  }

  async getAvailableVoices(): Promise<VoiceProfile[]> {
    try {
      const response = await fetch("/api/voice/voices")

      if (!response.ok) {
        throw new Error(`Failed to fetch voices: ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      console.error("Failed to fetch available voices:", error)
      return []
    }
  }

  async createVoiceProfile(voiceId: string): Promise<VoiceProfile> {
    const voices = await this.getAvailableVoices()
    const voice = voices.find((v) => v.voiceId === voiceId)

    if (!voice) {
      throw new Error(`Voice not found: ${voiceId}`)
    }

    return voice
  }

  async processAudioInput(stream: MediaStream): Promise<void> {
    console.log("Processing audio input")
  }

  setAudioLevelCallback(callback: (level: number) => void): void {
    this.audioLevelCallback = callback
  }

  setRecognitionLanguage(language: string): void {
    this.recognitionLanguage = language
  }

  setSynthesisLanguage(language: string): void {
    this.synthesisLanguage = language
  }

  setVoiceProfile(profile: VoiceProfile): void {
    this.voiceProfile = profile
  }

  getVoiceSettingsForEmotion(emotion: VoiceEmotion): Partial<VoiceSynthesisOptions> {
    switch (emotion) {
      case "caring":
        return {
          stability: 0.75,
          similarityBoost: 0.85,
          style: 0.25,
          useSpeakerBoost: true,
        }

      case "firm":
        return {
          stability: 0.8,
          similarityBoost: 0.7,
          style: 0.6,
          useSpeakerBoost: true,
        }

      case "stern":
        return {
          stability: 0.9,
          similarityBoost: 0.6,
          style: 0.8,
          useSpeakerBoost: true,
        }

      case "playful":
        return {
          stability: 0.6,
          similarityBoost: 0.8,
          style: 0.2,
          useSpeakerBoost: false,
        }

      case "neutral":
      default:
        return {
          stability: 0.7,
          similarityBoost: 0.8,
          style: 0.4,
          useSpeakerBoost: true,
        }
    }
  }

  async synthesizeCaregiverSpeech(
    voiceId: string,
    text: string,
    emotion: VoiceEmotion = "caring",
  ): Promise<ArrayBuffer> {
    const voiceSettings = this.getVoiceSettingsForEmotion(emotion)

    return this.synthesizeSpeech(text, {
      voiceId,
      ...voiceSettings,
    })
  }
}
