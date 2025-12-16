import { z } from "zod"

export type PlayerRole = "caregiver" | "little"
export type Gender = "male" | "female"
export type AgeGroup = "1-4" | "4-7" | "7-9" | "12+"
export type DisciplineStatus = "green" | "yellow" | "red"
export type UnderwearType = "diaper" | "training_pants" | "underwear"
export type UnderwearState = "clean" | "wet" | "messy" | "both"
export type AdminRole = "owner" | "admin" | "mod" | "none"
export type SpankingImplement = "hand" | "paddle" | "belt"
export type BehaviorSeverity = 1 | 2 | 3 | 4 | 5
export type AuthorityActionType =
  | "escort"
  | "physical_control"
  | "relocation"
  | "cooldown"
  | "mouth_soaping"
  | "disciplinary_action"
  | "spanking_otk"
export type Alignment = "little_angel" | "good_boy_girl" | "boy_girl" | "bad_boy_girl" | "little_shit"
export type VoiceEmotion = "neutral" | "caring" | "firm" | "playful" | "stern"
export type VoiceProvider = "inworld" | "eastworld" | "bark" | "elevenlabs"
export type VoiceRecognitionProvider = "elevenlabs" | "openai" | "whisper"
export type VoiceSynthesisProvider = "elevenlabs" | "bark" | "inworld"
export type PunishmentType = "timeout" | "spanking" | "warning" | "mouth_soap" | "privilege_loss"
export type MessageType = "chat" | "whisper" | "announcement" | "punishment" | "reward"
export type EntityType = "player" | "npc" | "object" | "accident"
export type SoundEventType = "voice" | "cry" | "music" | "ambient"
export type ControlIntensity = "light" | "firm"
export type ControlPoint = "arm" | "shoulder" | "upper_back"
export type RestrictedCapability = "movement" | "interaction" | "voice"
export type DisciplinaryEffect = "morale_penalty" | "privilege_loss" | "reputation_change"
export type BehaviorCategory = "safety" | "rule_violation" | "disruption"
export type ConstraintType = "time" | "cooldown" | "energy" | "authority"
export type Rotation = number

export interface Vector3 {
  x: number
  y: number
  z: number
}

// AI Perception and World State Interfaces
export interface EntityRef {
  id: string
  type: EntityType
  position: Vector3
}

export interface SoundEvent {
  id: string
  type: SoundEventType
  source: string
  position: Vector3
  intensity: number
  timestamp: number
}

export interface Perception {
  visibleEntities: EntityRef[]
  distances: Map<string, number>
  occluded: boolean
  audioEvents: SoundEvent[]
}

export interface WorldState {
  navmesh: any // Simplified navmesh data
  hazards: string[]
  interactables: Map<string, InteractiveObject>
}

export interface Intent {
  goals: Goal[]
  constraints: Constraint[]
  cooldowns: Map<string, number>
}

export interface Goal {
  id: string
  priority: number
  description: string
  targetId?: string
  location?: Vector3
}

export interface Constraint {
  type: ConstraintType
  value: number
  description: string
}

// Voice System Interfaces
export interface VoiceProfile {
  provider: VoiceProvider
  voiceId: string
  pitch: number
  speed: number
  emotion: VoiceEmotion
  recognitionProvider: VoiceRecognitionProvider
  synthesisProvider: VoiceSynthesisProvider
}

export interface VoiceRecognitionResult {
  text: string
  confidence: number
  language: string
  duration: number
}

export interface VoiceSynthesisOptions {
  voiceId: string
  stability?: number
  similarityBoost?: number
  style?: number
  useSpeakerBoost?: boolean
}

export interface VoiceService {
  // Speech Recognition (STT)
  recognizeSpeech(audioData: ArrayBuffer): Promise<VoiceRecognitionResult>
  startContinuousRecognition(): Promise<void>
  stopContinuousRecognition(): Promise<string>

  // Speech Synthesis (TTS)
  synthesizeSpeech(text: string, options: VoiceSynthesisOptions): Promise<ArrayBuffer>

  // Voice Management
  getAvailableVoices(): Promise<VoiceProfile[]>
  createVoiceProfile(voiceId: string): Promise<VoiceProfile>

  // Audio Processing
  processAudioInput(stream: MediaStream): Promise<void>
  setAudioLevelCallback(callback: (level: number) => void): void

  // Configuration
  setRecognitionLanguage(language: string): void
  setSynthesisLanguage(language: string): void
  setVoiceProfile(profile: VoiceProfile): void
}

// Behavior and Authority System Interfaces
export interface BehaviorEvent {
  id: string
  actorId: string
  category: BehaviorCategory
  severity: BehaviorSeverity
  timestamp: number
  description: string
  evidence?: string[]
}

export interface PhysicalControlAction {
  type: "physical_control"
  authorityId: string
  targetId: string
  controlPoint: ControlPoint
  intensity: ControlIntensity
  durationMs: number
}

export interface EscortAction {
  type: "escort"
  authorityId: string
  targetId: string
  destinationId: string
  canResist: boolean
  reason: string
}

export interface CooldownAction {
  type: "cooldown"
  targetId: string
  durationMs: number // hard-cap enforced (e.g. 5 min)
  restrictedCapabilities: RestrictedCapability[]
  reason: string
}

export interface DisciplinaryAction {
  type: "disciplinary_action"
  targetId: string
  effect: DisciplinaryEffect
  magnitude: number
  reason: string
}

export type AuthorityIntervention = PhysicalControlAction | EscortAction | CooldownAction | DisciplinaryAction

export interface AuthorityDecision {
  authorityId: string
  targetId: string
  triggeringEventId: string
  confidence: number
  interventions: AuthorityIntervention[]
  reasoning: string
}

export interface CharacterCustomization {
  skinColor: string
  ageGroup: AgeGroup
  hairColor?: string
  eyeColor?: string
  facialFeatures?: string[]
}

export interface ClothingState {
  shirt: boolean
  pants: boolean
  socks: boolean
  shoes: boolean
  underwearType: UnderwearType
  underwearState: UnderwearState
  diaperFillLevel: number
  pacifierIn: boolean
}

export interface NeedGauges {
  bladder: number
  bowel: number
  hunger: number
}

export interface Player {
  id: string
  name: string
  role: PlayerRole
  gender: Gender
  adminRole: AdminRole
  character: CharacterCustomization
  clothing: ClothingState
  needs: NeedGauges
  position: Vector3
  rotation: Rotation
  disciplineStatus: DisciplineStatus
  alignment: Alignment
  isInTimeout: boolean
  timeoutEndTime?: number
  isBeingLed: boolean
  ledBy?: string
  currentAnimation: string
  privileges: string[]
  rewards: Reward[]
  punishments: Punishment[]
  voiceId?: string
  lastVoiceActivity?: number
}

export interface CaregiverPersonality {
  strictness: number // 0-100
  nurturing: number // 0-100
  patience: number // 0-100
  fairness: number // 0-100
  responsiveness: number // 0-100
}

export interface Caregiver extends Player {
  role: "caregiver"
  personality: CaregiverPersonality
  perception: Perception
  worldState: WorldState
  currentIntent: Intent
  voiceProfile: VoiceProfile
  isAI: boolean
  lastDecisionTime?: number
}

export interface Reward {
  id: string
  name: string
  description: string
  givenBy: string
  timestamp: number
  alignmentBonus: number
}

export interface Punishment {
  id: string
  type: PunishmentType
  reason: string
  givenBy: string
  timestamp: number
  duration?: number
  implement?: SpankingImplement
  alignmentPenalty: number
}

export interface LobbySettings {
  name: string
  maxPlayers: number
  staffOnlyRoleChanges: boolean
  staffOnlyGenderChanges: boolean
  isPrivate: boolean
  monetizationEnabled: boolean
  trialDays: number
}

export interface Lobby {
  id: string
  inviteCode: string
  settings: LobbySettings
  ownerId: string
  players: Map<string, Player>
  caregivers: Map<string, Caregiver>
  objects: Map<string, InteractiveObject>
  accidents: Map<string, Accident>
  createdAt: number
  trialEndDate?: number
  isSuspended: boolean
}

export interface ChatMessage {
  id: string
  senderId: string
  senderName: string
  content: string
  timestamp: number
  isSystem: boolean
  messageType: MessageType
  alignmentChange?: number
}

export interface Accident {
  id: string
  type: "pee" | "poop"
  position: Vector3
  playerId: string
  timestamp: number
  cleanedUp: boolean
  size: number // 0-100%
  cause?: string
}

export interface InteractiveObject {
  id: string
  type:
    | "slide"
    | "changing_station"
    | "timeout_chair"
    | "timeout_stool"
    | "play_area"
    | "potty"
    | "toilet_male"
    | "toilet_female"
    | "toy_box"
    | "music_system"
  position: Vector3
  rotation: Rotation
  isOccupied: boolean
  occupiedBy?: string
  isLocked: boolean
  requiredPrivilege?: string
  interactionRadius: number
}

export type ClientMessage =
  | { type: "join_lobby"; lobbyId: string; player: Omit<Player, "id"> }
  | { type: "create_lobby"; settings: LobbySettings; player: Omit<Player, "id"> }
  | { type: "leave_lobby" }
  | { type: "move"; position: Vector3; rotation: Rotation }
  | { type: "animation"; animation: string }
  | { type: "chat"; content: string; messageType?: "chat" | "whisper" }
  | { type: "voice_message"; audioData: ArrayBuffer }
  | { type: "update_role"; targetId: string; role: PlayerRole }
  | { type: "update_gender"; targetId: string; gender: Gender }
  | { type: "update_admin_role"; targetId: string; adminRole: AdminRole }
  | { type: "update_settings"; settings: Partial<LobbySettings> }
  | { type: "discipline"; targetId: string; status: DisciplineStatus }
  | { type: "give_reward"; targetId: string; reward: Omit<Reward, "id" | "givenBy" | "timestamp"> }
  | { type: "give_punishment"; targetId: string; punishment: Omit<Punishment, "id" | "givenBy" | "timestamp"> }
  | { type: "start_leading"; targetId: string }
  | { type: "stop_leading" }
  | { type: "interact_object"; objectId: string; action: string }
  | { type: "change_clothing"; clothing: Partial<ClothingState> }
  | { type: "use_potty" }
  | { type: "eat_food"; foodType: string }
  | { type: "drink"; liquidType: string }
  | { type: "change_diaper"; targetId: string; newType: UnderwearType }
  | { type: "clean_accident"; accidentId: string }
  | { type: "ai_caregiver_command"; caregiverId: string; command: string }

export type ServerMessage =
  | { type: "lobby_joined"; lobby: SerializedLobby; playerId: string }
  | { type: "lobby_created"; lobby: SerializedLobby; playerId: string; inviteCode: string }
  | { type: "player_joined"; player: Player }
  | { type: "player_left"; playerId: string }
  | { type: "player_moved"; playerId: string; position: Vector3; rotation: Rotation }
  | { type: "player_animation"; playerId: string; animation: string }
  | { type: "chat_message"; message: ChatMessage }
  | { type: "voice_message"; senderId: string; audioData: ArrayBuffer }
  | { type: "player_updated"; player: Player }
  | { type: "settings_updated"; settings: LobbySettings }
  | { type: "discipline_updated"; playerId: string; status: DisciplineStatus }
  | { type: "alignment_updated"; playerId: string; alignment: Alignment; change: number }
  | { type: "reward_given"; playerId: string; reward: Reward }
  | { type: "punishment_given"; playerId: string; punishment: Punishment }
  | { type: "leading_started"; leaderId: string; targetId: string }
  | { type: "leading_stopped"; leaderId: string; targetId: string }
  | { type: "object_state"; objectId: string; isOccupied: boolean; occupiedBy?: string }
  | { type: "object_occupied"; objectId: string; playerId: string; objectType: string }
  | { type: "object_vacated"; objectId: string; playerId: string }
  | { type: "clothing_changed"; playerId: string; clothing: ClothingState }
  | { type: "needs_updated"; playerId: string; needs: NeedGauges }
  | { type: "accident_occurred"; accident: Accident }
  | { type: "accident_cleaned"; accidentId: string }
  | { type: "diaper_change_started"; caregiverId: string; littleId: string }
  | { type: "diaper_change_completed"; caregiverId: string; littleId: string }
  | { type: "timeout_started"; playerId: string; duration: number; reason: string }
  | { type: "timeout_ended"; playerId: string }
  | { type: "ai_caregiver_action"; caregiverId: string; action: AuthorityDecision }
  | { type: "ai_caregiver_speech"; caregiverId: string; message: string }
  | { type: "error"; message: string }

export interface SerializedLobby {
  id: string
  inviteCode: string
  settings: LobbySettings
  ownerId: string
  players: Player[]
  caregivers: Caregiver[]
  objects: InteractiveObject[]
  accidents: Accident[]
  createdAt: number
  trialEndDate?: number
  isSuspended: boolean
}

export const lobbySettingsSchema = z.object({
  name: z.string().min(1).max(50),
  maxPlayers: z.number().min(2).max(20),
  staffOnlyRoleChanges: z.boolean(),
  staffOnlyGenderChanges: z.boolean(),
  isPrivate: z.boolean(),
})

export function getAgeGroupScale(ageGroup: AgeGroup): number {
  switch (ageGroup) {
    case "1-4":
      return 0.6
    case "4-7":
      return 0.75
    case "7-9":
      return 0.85
    case "12+":
      return 1.0
  }
}

export function canUsePottyAlone(ageGroup: AgeGroup): boolean {
  return ageGroup === "7-9" || ageGroup === "12+"
}

export function canUseBathroomAlone(ageGroup: AgeGroup): boolean {
  return ageGroup === "12+"
}

export function needsEscort(ageGroup: AgeGroup): boolean {
  return ageGroup === "1-4" || ageGroup === "4-7"
}

export function getAlignmentColor(alignment: Alignment): string {
  switch (alignment) {
    case "little_angel":
      return "#FFD700"
    case "good_boy_girl":
      return "#90EE90"
    case "boy_girl":
      return "#87CEEB"
    case "bad_boy_girl":
      return "#FFA500"
    case "little_shit":
      return "#FF6347"
  }
}

export function calculateAlignmentChange(currentAlignment: Alignment, change: number): Alignment {
  // This would need more sophisticated logic in a real implementation
  const alignmentOrder: Alignment[] = ["little_shit", "bad_boy_girl", "boy_girl", "good_boy_girl", "little_angel"]

  const currentIndex = alignmentOrder.indexOf(currentAlignment)
  const newIndex = Math.max(0, Math.min(alignmentOrder.length - 1, currentIndex + change))

  return alignmentOrder[newIndex]
}

// Voice Service Configuration for AI Caregivers
export const VOICE_SERVICE_CONFIG = {
  // Default voice settings for AI caregivers
  CAREGIVER_VOICE: {
    stability: 0.7,
    similarityBoost: 0.8,
    style: 0.3,
    useSpeakerBoost: true,
  },

  // Audio processing settings
  AUDIO_SETTINGS: {
    sampleRate: 44100,
    channels: 1,
    bitDepth: 16,
    chunkDuration: 1000, // 1 second
  },

  // Recognition settings (for player speech recognition)
  RECOGNITION_SETTINGS: {
    language: "en",
    model: "eleven_multilingual_v2",
    confidence: 0.8,
  },
}
