import type { ClientMessage, ServerMessage, ChatMessage, VoiceProfile } from "@shared/gameTypes"
import type { VoiceService } from "@shared/gameTypes"

/**
 * LiveKit Service - Real-time communication using LiveKit
 * This service replaces the WebSocketManager with LiveKit's WebRTC capabilities
 */
export class LiveKitService {
  private room: any
  private token: string
  private url: string
  private localParticipant: any
  private remoteParticipants: Map<string, any> = new Map()
  private messageHandlers: Map<string, (message: ServerMessage) => void> = new Map()
  private voiceService: VoiceService
  private isConnected = false

  constructor(url: string, token: string, voiceService: VoiceService) {
    this.url = url
    this.token = token
    this.voiceService = voiceService
  }

  /**
   * Connect to LiveKit room
   */
  async connect(): Promise<void> {
    try {
      // Import LiveKit client dynamically to avoid SSR issues
      const { Room, LocalParticipant } = await import("livekit-client")

      this.room = new Room({
        adaptiveStream: true,
        dynacast: true,
        publishDefaults: {
          videoSimulcastLayers: [
            { scale: 1, maxBitrate: 1000000 },
            { scale: 0.5, maxBitrate: 500000 },
          ],
        },
      })

      // Set up event handlers
      this.setupEventHandlers()

      // Connect to the room
      await this.room.connect(this.url, this.token)
      this.isConnected = true
      this.localParticipant = this.room.localParticipant

      console.log("Connected to LiveKit room:", this.room.name)
    } catch (error) {
      console.error("Failed to connect to LiveKit:", error)
      throw error
    }
  }

  /**
   * Set up event handlers for LiveKit room
   */
  private setupEventHandlers(): void {
    if (!this.room) return

    // Room connection events
    this.room.on("connected", () => {
      console.log("LiveKit room connected")
      this.isConnected = true
    })

    this.room.on("disconnected", () => {
      console.log("LiveKit room disconnected")
      this.isConnected = false
    })

    this.room.on("reconnecting", () => {
      console.log("LiveKit room reconnecting...")
    })

    this.room.on("reconnected", () => {
      console.log("LiveKit room reconnected")
    })

    // Participant events
    this.room.on("participantConnected", (participant: any) => {
      console.log("Participant connected:", participant.identity)
      this.remoteParticipants.set(participant.identity, participant)
      this.handleParticipantConnected(participant)
    })

    this.room.on("participantDisconnected", (participant: any) => {
      console.log("Participant disconnected:", participant.identity)
      this.remoteParticipants.delete(participant.identity)
      this.handleParticipantDisconnected(participant)
    })

    // Data message events (for game state synchronization)
    this.room.on("dataReceived", (payload: Uint8Array, participant: any, kind: number) => {
      try {
        const message = JSON.parse(new TextDecoder().decode(payload)) as ServerMessage
        this.handleServerMessage(message)
      } catch (error) {
        console.error("Failed to parse LiveKit data message:", error)
      }
    })

    // Track events for audio/video
    this.room.on("trackSubscribed", (track: any, publication: any, participant: any) => {
      this.handleTrackSubscribed(track, publication, participant)
    })

    this.room.on("trackUnsubscribed", (track: any, publication: any, participant: any) => {
      this.handleTrackUnsubscribed(track, publication, participant)
    })
  }

  /**
   * Handle participant connected event
   */
  private handleParticipantConnected(participant: any): void {
    // Subscribe to all tracks from the new participant
    participant.tracks.forEach((publication: any) => {
      if (publication.kind === "audio" || publication.kind === "video") {
        this.room.localParticipant.subscribe(publication.trackSid)
      }
    })

    // Send participant joined message
    const message: ServerMessage = {
      type: "player_joined",
      player: {
        id: participant.identity,
        name: participant.name || "Player",
        role: "little", // Default role
        gender: "male", // Default gender
        adminRole: "none",
        character: {
          skinColor: "#F5D0C5",
          ageGroup: "4-7",
        },
        clothing: {
          shirt: true,
          pants: true,
          socks: true,
          shoes: true,
          underwearType: "diaper",
          underwearState: "clean",
          diaperFillLevel: 0,
          pacifierIn: false,
        },
        needs: {
          bladder: 0,
          bowel: 0,
          hunger: 0,
        },
        position: { x: 0, y: 0, z: 0 },
        rotation: 0,
        disciplineStatus: "green",
        alignment: "boy_girl",
        isInTimeout: false,
        isBeingLed: false,
        currentAnimation: "idle",
        privileges: [],
        rewards: [],
        punishments: [],
      },
    }

    this.handleServerMessage(message)
  }

  /**
   * Handle participant disconnected event
   */
  private handleParticipantDisconnected(participant: any): void {
    const message: ServerMessage = {
      type: "player_left",
      playerId: participant.identity,
    }

    this.handleServerMessage(message)
  }

  /**
   * Handle track subscribed event
   */
  private handleTrackSubscribed(track: any, publication: any, participant: any): void {
    if (track.kind === "audio") {
      // Handle audio track
      const audioElement = new Audio()
      audioElement.srcObject = new MediaStream([track.mediaStreamTrack])
      audioElement.play().catch(console.error)
    } else if (track.kind === "video") {
      // Handle video track
      const videoElement = document.createElement("video")
      videoElement.srcObject = new MediaStream([track.mediaStreamTrack])
      videoElement.autoplay = true
      videoElement.playsInline = true
      // You would typically attach this to the DOM or handle it appropriately
    }
  }

  /**
   * Handle track unsubscribed event
   */
  private handleTrackUnsubscribed(track: any, publication: any, participant: any): void {
    // Clean up media elements
    if (track.kind === "audio" || track.kind === "video") {
      const mediaStream = track.mediaStreamTrack
      if (mediaStream) {
        mediaStream.stop()
      }
    }
  }

  /**
   * Send a client message to the server via LiveKit data channel
   */
  async sendMessage(message: ClientMessage): Promise<void> {
    if (!this.isConnected || !this.room) {
      console.warn("LiveKit not connected, message not sent")
      return
    }

    try {
      const payload = new TextEncoder().encode(JSON.stringify(message))
      await this.room.localParticipant.publishData(payload, 0) // 0 = reliable
    } catch (error) {
      console.error("Failed to send LiveKit message:", error)
      throw error
    }
  }

  /**
   * Handle incoming server messages
   */
  private handleServerMessage(message: ServerMessage): void {
    // Dispatch to registered handlers
    this.messageHandlers.forEach((handler) => {
      try {
        handler(message)
      } catch (error) {
        console.error("Error in message handler:", error)
      }
    })

    // Handle specific message types
    switch (message.type) {
      case "chat_message":
        this.handleChatMessage(message.message)
        break
      case "voice_message":
        this.handleVoiceMessage(message.senderId, message.audioData)
        break
      case "ai_caregiver_speech":
        this.handleAICaregiverSpeech(message.caregiverId, message.message)
        break
    }
  }

  /**
   * Handle chat messages
   */
  private async handleChatMessage(message: ChatMessage): Promise<void> {
    console.log("Chat message received:", message)
    // You might want to display this in the UI or process it further
  }

  /**
   * Handle voice messages
   */
  private async handleVoiceMessage(senderId: string, audioData: ArrayBuffer): Promise<void> {
    try {
      // Use the voice service to process the voice message
      const result = await this.voiceService.recognizeSpeech(audioData)
      console.log("Voice recognition result:", result)

      // Create a chat message from the voice input
      const chatMessage: ChatMessage = {
        id: `voice_${Date.now()}`,
        senderId,
        senderName: senderId, // Would be better to get the actual name
        content: result.text,
        timestamp: Date.now(),
        isSystem: false,
        messageType: "chat",
      }

      // Send the transcribed message back to the room
      const serverMessage: ServerMessage = {
        type: "chat_message",
        message: chatMessage,
      }

      this.handleServerMessage(serverMessage)
    } catch (error) {
      console.error("Failed to process voice message:", error)
    }
  }

  /**
   * Handle AI caregiver speech
   */
  private async handleAICaregiverSpeech(caregiverId: string, message: string): Promise<void> {
    try {
      // Find the caregiver
      const caregiver = Array.from(this.remoteParticipants.values()).find((p) => p.identity === caregiverId)

      if (!caregiver) {
        console.warn("Caregiver not found:", caregiverId)
        return
      }

      // Use the voice service to synthesize speech
      const voiceProfile: VoiceProfile = {
        provider: "inworld",
        voiceId: "caregiver_voice", // Would use the actual caregiver voice ID
        pitch: 1.0,
        speed: 1.0,
        emotion: "caring",
        recognitionProvider: "elevenlabs",
        synthesisProvider: "inworld",
      }

      const audioData = await this.voiceService.synthesizeSpeech(message, {
        voiceId: voiceProfile.voiceId,
        stability: 0.7,
        similarityBoost: 0.8,
        style: 0.3,
        useSpeakerBoost: true,
      })

      // Play the synthesized speech
      const audioContext = new AudioContext()
      const audioBuffer = await audioContext.decodeAudioData(audioData)
      const source = audioContext.createBufferSource()
      source.buffer = audioBuffer
      source.connect(audioContext.destination)
      source.start()
    } catch (error) {
      console.error("Failed to handle AI caregiver speech:", error)
    }
  }

  /**
   * Register a message handler
   */
  onMessage(handler: (message: ServerMessage) => void): void {
    const handlerId = `handler_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    this.messageHandlers.set(handlerId, handler)
  }

  /**
   * Remove a message handler
   */
  offMessage(handler: (message: ServerMessage) => void): void {
    this.messageHandlers.forEach((h, key) => {
      if (h === handler) {
        this.messageHandlers.delete(key)
      }
    })
  }

  /**
   * Disconnect from LiveKit room
   */
  async disconnect(): Promise<void> {
    if (this.room) {
      await this.room.disconnect()
      this.isConnected = false
      this.remoteParticipants.clear()
      console.log("Disconnected from LiveKit room")
    }
  }

  /**
   * Get connection status
   */
  isConnectedToRoom(): boolean {
    return this.isConnected
  }

  /**
   * Get local participant
   */
  getLocalParticipant(): any {
    return this.localParticipant
  }

  /**
   * Get remote participants
   */
  getRemoteParticipants(): Map<string, any> {
    return this.remoteParticipants
  }

  /**
   * Publish local audio track
   */
  async publishAudioTrack(): Promise<void> {
    if (!this.room || !this.isConnected) {
      console.warn("Cannot publish audio track: not connected to room")
      return
    }

    try {
      const { LocalAudioTrack } = await import("livekit-client")
      const track = await LocalAudioTrack.create({
        encoder: {
          bitrate: 64000,
          sampleRate: 44100,
          channelCount: 1,
        },
      })

      await this.room.localParticipant.publishTrack(track)
      console.log("Published local audio track")
    } catch (error) {
      console.error("Failed to publish audio track:", error)
      throw error
    }
  }

  /**
   * Publish local video track
   */
  async publishVideoTrack(): Promise<void> {
    if (!this.room || !this.isConnected) {
      console.warn("Cannot publish video track: not connected to room")
      return
    }

    try {
      const { LocalVideoTrack } = await import("livekit-client")
      const track = await LocalVideoTrack.create({
        resolution: {
          width: 640,
          height: 480,
        },
        encoder: {
          bitrate: 1000000,
          framerate: 30,
        },
      })

      await this.room.localParticipant.publishTrack(track)
      console.log("Published local video track")
    } catch (error) {
      console.error("Failed to publish video track:", error)
      throw error
    }
  }

  /**
   * Unpublish all tracks
   */
  async unpublishAllTracks(): Promise<void> {
    if (!this.room || !this.isConnected) {
      return
    }

    try {
      await this.room.localParticipant.unpublishAllTracks()
      console.log("Unpublished all tracks")
    } catch (error) {
      console.error("Failed to unpublish tracks:", error)
      throw error
    }
  }

  /**
   * Create a LiveKit token for a participant
   * This would typically be done server-side, but included here for completeness
   */
  static async createToken(
    apiKey: string,
    apiSecret: string,
    roomName: string,
    participantName: string,
    participantIdentity: string,
  ): Promise<string> {
    try {
      const { AccessToken } = await import("livekit-server-sdk")

      const at = new AccessToken(apiKey, apiSecret, {
        identity: participantIdentity,
        name: participantName,
      })

      at.addGrant({
        roomJoin: true,
        room: roomName,
        canPublish: true,
        canSubscribe: true,
        canPublishData: true,
      })

      return at.toJwt()
    } catch (error) {
      console.error("Failed to create LiveKit token:", error)
      throw error
    }
  }
}
