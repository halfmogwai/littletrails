import { create } from "zustand"
import { subscribeWithSelector } from "zustand/middleware"
import type {
  Player,
  Caregiver,
  Lobby,
  InteractiveObject,
  Accident,
  ChatMessage,
  Vector3,
  ClothingState,
  NeedGauges,
} from "@/lib/types/gameTypes"

interface GameState {
  // Lobby state
  currentLobby: Lobby | null
  currentPlayerId: string | null

  // Players and NPCs
  players: Map<string, Player>
  caregivers: Map<string, Caregiver>

  // Environment
  objects: Map<string, InteractiveObject>
  accidents: Map<string, Accident>

  // Chat
  messages: ChatMessage[]

  // UI state
  isVoiceActive: boolean
  selectedPlayerId: string | null
  showPaywall: boolean

  // Actions
  setCurrentLobby: (lobby: Lobby) => void
  setCurrentPlayer: (playerId: string) => void
  updatePlayer: (playerId: string, updates: Partial<Player>) => void
  updateCaregiver: (caregiverId: string, updates: Partial<Caregiver>) => void
  addMessage: (message: ChatMessage) => void
  addAccident: (accident: Accident) => void
  cleanAccident: (accidentId: string) => void
  updateObject: (objectId: string, updates: Partial<InteractiveObject>) => void
  setVoiceActive: (active: boolean) => void
  setSelectedPlayer: (playerId: string | null) => void
  setShowPaywall: (show: boolean) => void
  updatePlayerPosition: (playerId: string, position: Vector3, rotation: number) => void
  updatePlayerClothing: (playerId: string, clothing: Partial<ClothingState>) => void
  updatePlayerNeeds: (playerId: string, needs: Partial<NeedGauges>) => void
  addCaregiver: (caregiver: Caregiver) => void
}

export const useGameStore = create<GameState>()(
  subscribeWithSelector((set, get) => ({
    currentLobby: null,
    currentPlayerId: null,
    players: new Map(),
    caregivers: new Map(),
    objects: new Map(),
    accidents: new Map(),
    messages: [],
    isVoiceActive: false,
    selectedPlayerId: null,
    showPaywall: false,

    setCurrentLobby: (lobby) =>
      set({
        currentLobby: lobby,
        players: new Map(lobby.players),
        caregivers: new Map(lobby.caregivers),
        objects: new Map(lobby.objects),
        accidents: new Map(lobby.accidents),
      }),

    setCurrentPlayer: (playerId) => set({ currentPlayerId: playerId }),

    updatePlayer: (playerId, updates) =>
      set((state) => {
        const players = new Map(state.players)
        const player = players.get(playerId)
        if (player) {
          players.set(playerId, { ...player, ...updates })
        }
        return player ? { players } : state
      }),

    updateCaregiver: (caregiverId, updates) =>
      set((state) => {
        const caregivers = new Map(state.caregivers)
        const caregiver = caregivers.get(caregiverId)
        if (caregiver) {
          caregivers.set(caregiverId, { ...caregiver, ...updates })
        }
        return caregiver ? { caregivers } : state
      }),

    addMessage: (message) =>
      set((state) => ({
        messages: [...state.messages, message].slice(-100), // Keep last 100 messages
      })),

    addAccident: (accident) =>
      set((state) => {
        const accidents = new Map(state.accidents)
        accidents.set(accident.id, accident)
        return { accidents }
      }),

    cleanAccident: (accidentId) =>
      set((state) => {
        const accidents = new Map(state.accidents)
        const accident = accidents.get(accidentId)
        if (accident) {
          accidents.set(accidentId, { ...accident, cleanedUp: true })
        }
        return { accidents }
      }),

    updateObject: (objectId, updates) =>
      set((state) => {
        const objects = new Map(state.objects)
        const obj = objects.get(objectId)
        if (obj) {
          objects.set(objectId, { ...obj, ...updates })
        }
        return { objects }
      }),

    setVoiceActive: (active) => set({ isVoiceActive: active }),

    setSelectedPlayer: (playerId) => set({ selectedPlayerId: playerId }),

    setShowPaywall: (show) => set({ showPaywall: show }),

    updatePlayerPosition: (playerId, position, rotation) =>
      set((state) => {
        const players = new Map(state.players)
        const player = players.get(playerId)
        if (player) {
          if (
            player.position.x === position.x &&
            player.position.y === position.y &&
            player.position.z === position.z &&
            player.rotation === rotation
          ) {
            return state
          }
          players.set(playerId, { ...player, position, rotation })
        }
        return player ? { players } : state
      }),

    updatePlayerClothing: (playerId, clothing) =>
      set((state) => {
        const players = new Map(state.players)
        const player = players.get(playerId)
        if (player) {
          players.set(playerId, {
            ...player,
            clothing: { ...player.clothing, ...clothing },
          })
        }
        return player ? { players } : state
      }),

    updatePlayerNeeds: (playerId, needs) =>
      set((state) => {
        const players = new Map(state.players)
        const player = players.get(playerId)
        if (player) {
          players.set(playerId, {
            ...player,
            needs: { ...player.needs, ...needs },
          })
        }
        return player ? { players } : state
      }),

    addCaregiver: (caregiver) =>
      set((state) => {
        const caregivers = new Map(state.caregivers)
        caregivers.set(caregiver.id, caregiver)
        return { caregivers }
      }),
  })),
)

export const selectPlayerById = (state: GameState, playerId: string) => state.players.get(playerId)

export const selectAllPlayers = (state: GameState) => state.players

export const selectCaregiverById = (state: GameState, caregiverId: string) => state.caregivers.get(caregiverId)

export const selectAllCaregivers = (state: GameState) => state.caregivers
