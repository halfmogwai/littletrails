"use client"

import { DaycareScene } from "@/components/three/DaycareScene"
import { HUD } from "@/components/ui/HUD"
import { VoiceControls } from "@/components/ui/VoiceControls"
import { VoiceVisualizer } from "@/components/ui/VoiceVisualizer"
import { TranscriptDisplay } from "@/components/ui/TranscriptDisplay"
import { PaywallDialog } from "@/components/ui/PaywallDialog"
import { TrialBanner } from "@/components/ui/TrialBanner"
import { DaycareCreationButton } from "@/components/ui/DaycareCreationButton"
import { SubscriptionStatus } from "@/components/ui/SubscriptionStatus"
import { Suspense, useEffect } from "react"
import { useGameStore } from "@/lib/stores/gameStore"
import { useAICaregivers } from "@/lib/hooks/useAICaregivers"
import { useVoiceCommunication } from "@/lib/hooks/useVoiceCommunication"
import { nanoid } from "nanoid"
import type { Player, Lobby } from "@/lib/types/gameTypes"

export default function Home() {
  const setCurrentLobby = useGameStore((state) => state.setCurrentLobby)
  const setCurrentPlayer = useGameStore((state) => state.setCurrentPlayer)
  useAICaregivers()
  useVoiceCommunication()

  useEffect(() => {
    // Initialize a test lobby with player
    const playerId = nanoid()

    const testPlayer: Player = {
      id: playerId,
      name: "Little One",
      role: "little",
      gender: "male",
      adminRole: "none",
      character: {
        skinColor: "#F5D0C5",
        ageGroup: "4-7",
        hairColor: "#FFD700",
        eyeColor: "#87CEEB",
      },
      clothing: {
        shirt: true,
        pants: true,
        socks: true,
        shoes: true,
        underwearType: "training_pants",
        underwearState: "clean",
        diaperFillLevel: 0,
        pacifierIn: false,
      },
      needs: {
        bladder: 20,
        bowel: 10,
        hunger: 15,
      },
      position: { x: 0, y: 1.5, z: 0 }, // Start above ground level
      rotation: 0,
      disciplineStatus: "green",
      alignment: "boy_girl",
      isInTimeout: false,
      isBeingLed: false,
      currentAnimation: "walk",
      privileges: [],
      rewards: [],
      punishments: [],
    }

    const testLobby: Lobby = {
      id: nanoid(),
      inviteCode: "TEST123",
      settings: {
        name: "Test Daycare",
        maxPlayers: 20,
        staffOnlyRoleChanges: false,
        staffOnlyGenderChanges: false,
        isPrivate: false,
        monetizationEnabled: true,
        trialDays: 7,
      },
      ownerId: playerId,
      players: new Map([[playerId, testPlayer]]),
      caregivers: new Map(),
      objects: new Map(),
      accidents: new Map(),
      createdAt: Date.now(),
      trialEndDate: Date.now() + 2 * 24 * 60 * 60 * 1000, // 2 days trial
      isSuspended: false,
    }

    setCurrentLobby(testLobby)
    setCurrentPlayer(playerId)
  }, [setCurrentLobby, setCurrentPlayer])

  return (
    <main className="w-full h-screen overflow-hidden relative">
      <Suspense
        fallback={
          <div className="w-full h-screen flex items-center justify-center bg-background">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
              <p className="text-lg font-medium text-foreground">Initializing Daycare...</p>
            </div>
          </div>
        }
      >
        <DaycareScene />
        <HUD />
        <VoiceControls />
        <VoiceVisualizer />
        <TranscriptDisplay />
        <PaywallDialog />
        <TrialBanner />

        {/* Top bar with daycare management */}
        <div className="fixed top-4 left-1/2 -translate-x-1/2 flex items-center gap-4 pointer-events-auto">
          <DaycareCreationButton />
        </div>

        {/* Subscription status at bottom left */}
        <div className="fixed bottom-4 left-4 pointer-events-auto max-w-[350px]">
          <SubscriptionStatus />
        </div>
      </Suspense>
    </main>
  )
}
