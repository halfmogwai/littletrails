import type {
  Caregiver,
  Player,
  Lobby,
  AuthorityDecision,
  BehaviorEvent,
  Vector3,
  EntityRef,
  SoundEvent,
  Accident,
  ChatMessage,
} from "@shared/gameTypes"
import { nanoid } from "nanoid"

/**
 * Enhanced BrainService - AI Caregiver Decision Making and Behavior System
 * This service provides sophisticated rule-based decision making without external AI dependencies
 * Focuses on deterministic, game-appropriate behaviors for the daycare environment
 */
export class BrainService {
  private caregiver: Caregiver
  private lobby: Lobby
  private decisionInterval: number
  private perceptionRadius: number
  private lastDecisionTime = 0
  private behaviorMemory: Map<string, BehaviorEvent[]> = new Map()
  private interactionCooldowns: Map<string, number> = new Map()

  constructor(
    caregiver: Caregiver,
    lobby: Lobby,
    config: {
      decisionInterval?: number
      perceptionRadius?: number
    } = {},
  ) {
    this.caregiver = caregiver
    this.lobby = lobby
    this.decisionInterval = config.decisionInterval || 2000 // Default 2 seconds
    this.perceptionRadius = config.perceptionRadius || 15 // Default 15 units
  }

  /**
   * Update the caregiver reference
   */
  updateCaregiver(caregiver: Caregiver): void {
    this.caregiver = caregiver
  }

  /**
   * Update the lobby reference
   */
  updateLobby(lobby: Lobby): void {
    this.lobby = lobby
  }

  /**
   * Main decision-making loop with enhanced logic
   */
  async makeDecision(): Promise<AuthorityDecision | null> {
    const now = Date.now()
    if (now - this.lastDecisionTime < this.decisionInterval) {
      return null
    }
    this.lastDecisionTime = now

    // Update perception first
    this.updatePerception()

    try {
      // Enhanced decision making with multiple priority levels
      return this.makeEnhancedDecision()
    } catch (error) {
      console.error("BrainService decision error:", error)
      return null
    }
  }

  /**
   * Enhanced decision making with sophisticated prioritization
   */
  private makeEnhancedDecision(): AuthorityDecision | null {
    // Priority 1: Immediate safety concerns
    const safetyDecision = this.assessSafetyConcerns()
    if (safetyDecision) return safetyDecision

    // Priority 2: Critical needs (diaper, bathroom)
    const needsDecision = this.assessCriticalNeeds()
    if (needsDecision) return needsDecision

    // Priority 3: Behavioral interventions
    const behaviorDecision = this.assessBehavioralIssues()
    if (behaviorDecision) return behaviorDecision

    // Priority 4: Environment maintenance
    const maintenanceDecision = this.assessEnvironmentMaintenance()
    if (maintenanceDecision) return maintenanceDecision

    // Priority 5: Positive engagement
    const engagementDecision = this.assessPositiveEngagement()
    if (engagementDecision) return engagementDecision

    return null
  }

  /**
   * Assess immediate safety concerns
   */
  private assessSafetyConcerns(): AuthorityDecision | null {
    // Check for accidents that pose safety risks
    const dangerousAccidents = Array.from(this.lobby.accidents.values()).filter(
      (accident) => !accident.cleanedUp && accident.size > 70,
    )

    if (dangerousAccidents.length > 0) {
      const nearestAccident = this.findNearestAccident(dangerousAccidents)
      return this.createCleaningDecision(nearestAccident, "dangerous_accident")
    }

    // Check for players in dangerous situations
    const endangeredPlayers = this.identifyEndangeredPlayers()
    if (endangeredPlayers.length > 0) {
      const nearestEndangered = this.findNearestPlayer(endangeredPlayers)
      return this.createInterventionDecision(nearestEndangered, "safety_rescue", {
        type: "escort",
        authorityId: this.caregiver.id,
        targetId: nearestEndangered.id,
        destinationId: this.findSafeLocation(nearestEndangered.position),
        canResist: false,
        reason: "safety_concern",
      })
    }

    return null
  }

  /**
   * Assess critical player needs
   */
  private assessCriticalNeeds(): AuthorityDecision | null {
    const players = Array.from(this.lobby.players.values())

    // Check for diaper emergencies
    for (const player of players) {
      if (this.isDiaperEmergency(player)) {
        return this.createDiaperChangeDecision(player, "emergency_diaper_change")
      }
    }

    // Check for bathroom emergencies
    for (const player of players) {
      if (this.isBathroomEmergency(player)) {
        return this.createEscortDecision(player, "bathroom_emergency", "toilet_female")
      }
    }

    // Check for players showing distress signals
    const distressedPlayers = this.identifyDistressedPlayers()
    if (distressedPlayers.length > 0) {
      const nearestDistressed = this.findNearestPlayer(distressedPlayers)
      return this.createComfortDecision(nearestDistressed, "distress_comfort")
    }

    return null
  }

  /**
   * Assess behavioral issues requiring intervention
   */
  private assessBehavioralIssues(): AuthorityDecision | null {
    const players = Array.from(this.lobby.players.values())

    // Check for repeat offenders
    const repeatOffenders = players.filter((player) => this.isRepeatOffender(player))
    if (repeatOffenders.length > 0) {
      const worstOffender = this.findWorstOffender(repeatOffenders)
      return this.createDisciplinaryDecision(worstOffender, "repeat_offender")
    }

    // Check for current rule violations
    const ruleViolators = players.filter((player) => this.isCurrentlyViolatingRules(player))
    if (ruleViolators.length > 0) {
      const worstViolator = this.findWorstViolator(ruleViolators)
      return this.createDisciplinaryDecision(worstViolator, "active_rule_violation")
    }

    // Check for timeout completions
    const timeoutCompleters = players.filter(
      (player) => player.isInTimeout && player.timeoutEndTime && Date.now() > player.timeoutEndTime,
    )

    if (timeoutCompleters.length > 0) {
      const completer = this.findNearestPlayer(timeoutCompleters)
      return this.createReleaseDecision(completer, "timeout_completed")
    }

    return null
  }

  /**
   * Assess environment maintenance needs
   */
  private assessEnvironmentMaintenance(): AuthorityDecision | null {
    // Clean up routine accidents
    const routineAccidents = Array.from(this.lobby.accidents.values()).filter(
      (accident) => !accident.cleanedUp && accident.size <= 70,
    )

    if (routineAccidents.length > 0) {
      const oldestAccident = routineAccidents.reduce((oldest, current) =>
        current.timestamp < oldest.timestamp ? current : oldest,
      )
      return this.createCleaningDecision(oldestAccident, "routine_cleanup")
    }

    // Check and restock supplies if needed
    const supplyCheck = this.checkSupplyLevels()
    if (supplyCheck.needsRestock) {
      return this.createSupplyRestockDecision(supplyCheck.location, "supply_maintenance")
    }

    return null
  }

  /**
   * Assess opportunities for positive engagement
   */
  private assessPositiveEngagement(): AuthorityDecision | null {
    const now = Date.now()

    // Avoid spamming positive interactions
    if (this.interactionCooldowns.has("positive_engagement")) {
      const lastEngagement = this.interactionCooldowns.get("positive_engagement")!
      if (now - lastEngagement < 30000) {
        // 30 second cooldown
        return null
      }
    }

    const wellBehavedPlayers = this.identifyWellBehavedPlayers()
    if (wellBehavedPlayers.length > 0) {
      const exemplaryPlayer = this.findExemplaryPlayer(wellBehavedPlayers)
      this.interactionCooldowns.set("positive_engagement", now)
      return this.createRewardDecision(exemplaryPlayer, "positive_recognition")
    }

    return null
  }

  /**
   * Update caregiver perception based on current lobby state
   */
  updatePerception(): void {
    const visibleEntities: EntityRef[] = []
    const distances = new Map<string, number>()
    const audioEvents: SoundEvent[] = []

    // Scan players
    this.lobby.players.forEach((player) => {
      const dist = this.calculateDistance(this.caregiver.position, player.position)
      if (dist <= this.perceptionRadius) {
        visibleEntities.push({
          id: player.id,
          type: "player",
          position: player.position,
        })
        distances.set(player.id, dist)

        // Add audio events for players who are talking
        if (player.lastVoiceActivity && Date.now() - player.lastVoiceActivity < 5000) {
          audioEvents.push({
            id: `audio_${player.id}_${Date.now()}`,
            type: "voice",
            source: player.id,
            position: player.position,
            intensity: Math.max(0.1, 1 - dist / this.perceptionRadius),
            timestamp: Date.now(),
          })
        }
      }
    })

    // Scan accidents
    this.lobby.accidents.forEach((accident) => {
      const dist = this.calculateDistance(this.caregiver.position, accident.position)
      if (dist <= this.perceptionRadius) {
        visibleEntities.push({
          id: accident.id,
          type: "accident",
          position: accident.position,
        })
        distances.set(accident.id, dist)
      }
    })

    // Scan objects
    this.lobby.objects.forEach((obj) => {
      const dist = this.calculateDistance(this.caregiver.position, obj.position)
      if (dist <= this.perceptionRadius) {
        visibleEntities.push({
          id: obj.id,
          type: "object",
          position: obj.position,
        })
        distances.set(obj.id, dist)
      }
    })

    // Update perception
    this.caregiver.perception = {
      visibleEntities,
      distances,
      occluded: false,
      audioEvents,
    }
  }

  /**
   * Process chat messages and generate contextual responses
   */
  async processChatMessage(message: ChatMessage): Promise<{ response: string; audio: ArrayBuffer } | null> {
    if (message.senderId === this.caregiver.id) {
      return null // Don't respond to self
    }

    const player = this.lobby.players.get(message.senderId)
    if (!player) {
      return null
    }

    try {
      const responseText = this.generateContextualResponse(message, player)

      // Add to behavior memory for future decisions
      this.addToBehaviorMemory(player.id, {
        id: `chat_${Date.now()}`,
        actorId: player.id,
        category: "rule_violation", // Neutral category
        severity: 1,
        timestamp: Date.now(),
        description: `Said: "${message.content}"`,
      })

      return { response: responseText, audio: new ArrayBuffer(0) }
    } catch (error) {
      console.error("Failed to process chat message:", error)
      return null
    }
  }

  /**
   * Generate appropriate speech for decisions
   */
  async generateSpeechForDecision(decision: AuthorityDecision): Promise<{ text: string; audio: ArrayBuffer }> {
    const speechText = this.generateDecisionSpeech(decision)
    return { text: speechText, audio: new ArrayBuffer(0) }
  }

  /**
   * Update caregiver intent based on current decision
   */
  updateIntent(decision: AuthorityDecision | null): void {
    if (!decision) {
      return
    }

    const goals: any[] = []

    // Add goal based on decision type
    if (decision.reasoning.includes("diaper")) {
      goals.push({
        id: `goal_${nanoid()}`,
        priority: 1,
        description: "Change player diaper",
        targetId: decision.targetId,
      })
    } else if (decision.reasoning.includes("accident") || decision.reasoning.includes("cleanup")) {
      goals.push({
        id: `goal_${nanoid()}`,
        priority: 1,
        description: "Clean up mess",
        targetId: decision.targetId,
      })
    } else if (decision.reasoning.includes("safety")) {
      goals.push({
        id: `goal_${nanoid()}`,
        priority: 1,
        description: "Ensure player safety",
        targetId: decision.targetId,
      })
    }

    // Update caregiver intent
    this.caregiver.currentIntent = {
      goals,
      constraints: [],
      cooldowns: new Map(),
    }
  }

  // ============ Helper Methods ============

  private calculateDistance(p1: Vector3, p2: Vector3): number {
    const dx = p1.x - p2.x
    const dy = p1.y - p2.y
    const dz = p1.z - p2.z
    return Math.sqrt(dx * dx + dy * dy + dz * dz)
  }

  private findNearestAccident(accidents: Accident[]): Accident {
    return accidents.reduce((nearest, current) => {
      const currentDist = this.calculateDistance(this.caregiver.position, current.position)
      const nearestDist = this.calculateDistance(this.caregiver.position, nearest.position)
      return currentDist < nearestDist ? current : nearest
    })
  }

  private findNearestPlayer(players: Player[]): Player {
    return players.reduce((nearest, current) => {
      const currentDist = this.calculateDistance(this.caregiver.position, current.position)
      const nearestDist = this.calculateDistance(this.caregiver.position, nearest.position)
      return currentDist < nearestDist ? current : nearest
    })
  }

  private isDiaperEmergency(player: Player): boolean {
    return (
      player.clothing.underwearType === "diaper" &&
      (player.clothing.diaperFillLevel >= 3 || player.clothing.underwearState === "both")
    )
  }

  private isBathroomEmergency(player: Player): boolean {
    return player.needs.bladder > 90 || player.needs.bowel > 90
  }

  private identifyDistressedPlayers(): Player[] {
    return Array.from(this.lobby.players.values()).filter((player) => {
      // Check for distress signals
      const recentMessages = Array.from(this.lobby.players.values()).flatMap((p) => []) // Simplified for now

      return player.disciplineStatus === "red" || player.alignment === "little_shit" || player.needs.bladder > 80
    })
  }

  private isRepeatOffender(player: Player): boolean {
    const memory = this.behaviorMemory.get(player.id) || []
    const recentBehaviors = memory.filter(
      (behavior) => Date.now() - behavior.timestamp < 300000, // Last 5 minutes
    )
    return recentBehaviors.length > 2
  }

  private findWorstOffender(players: Player[]): Player {
    return players.reduce((worst, current) => {
      const worstMemory = this.behaviorMemory.get(worst.id) || []
      const currentMemory = this.behaviorMemory.get(current.id) || []

      const worstScore = worstMemory.length
      const currentScore = currentMemory.length

      return currentScore > worstScore ? current : worst
    })
  }

  private identifyWellBehavedPlayers(): Player[] {
    return Array.from(this.lobby.players.values()).filter(
      (player) =>
        player.alignment === "little_angel" ||
        player.alignment === "good_boy_girl" ||
        (player.disciplineStatus === "green" && player.punishments.length === 0),
    )
  }

  private findExemplaryPlayer(players: Player[]): Player {
    return players.reduce((exemplary, current) => {
      const exemplaryRewards = exemplary.rewards.length
      const currentRewards = current.rewards.length
      return currentRewards > exemplaryRewards ? current : exemplary
    })
  }

  private generateContextualResponse(message: ChatMessage, player: Player): string {
    const content = message.content.toLowerCase()

    // Emergency responses
    if (content.includes("help") || content.includes("emergency")) {
      return `${player.name}, I'm coming to help you right away!`
    }

    // Bathroom requests
    if (content.includes("bathroom") || content.includes("toilet") || content.includes("potty")) {
      if (player.character.ageGroup === "1-4" || player.character.ageGroup === "4-7") {
        return `Come with me, ${player.name}. I'll help you use the potty.`
      } else {
        return `You know where the bathroom is, ${player.name}. You may go now.`
      }
    }

    // Diaper requests
    if (content.includes("diaper") || content.includes("change")) {
      if (this.isDiaperEmergency(player)) {
        return `Yes, ${player.name}, your diaper definitely needs changing. Let's go to the changing station.`
      } else {
        return `Let me check your diaper, ${player.name}. We'll see if you need a change.`
      }
    }

    // General inquiries
    if (content.includes("what") || content.includes("how") || content.includes("why")) {
      return `That's a good question, ${player.name}. Let me think about that.`
    }

    // Positive interactions
    if (content.includes("thank") || content.includes("good job") || content.includes("love you")) {
      return `Aww, thank you ${player.name}! You're such a sweet little.`
    }

    // Default responses
    const responses = [
      `I hear you, ${player.name}.`,
      `That's interesting, ${player.name}.`,
      `Tell me more about that, ${player.name}.`,
      `I understand, ${player.name}.`,
    ]

    return responses[Math.floor(Math.random() * responses.length)]
  }

  private generateDecisionSpeech(decision: AuthorityDecision): string {
    const targetPlayer = this.lobby.players.get(decision.targetId)
    if (!targetPlayer) {
      return "I need to attend to something."
    }

    const playerName = targetPlayer.name
    const reasoning = decision.reasoning.toLowerCase()

    if (reasoning.includes("diaper") || reasoning.includes("change")) {
      return `${playerName}, it's time for a diaper change. Let's go to the changing station.`
    }

    if (reasoning.includes("accident") || reasoning.includes("cleanup")) {
      return `I need to clean up a mess. Please stay where you are, ${playerName}.`
    }

    if (reasoning.includes("safety")) {
      return `${playerName}, I need to make sure you're safe. Come with me.`
    }

    if (reasoning.includes("bathroom")) {
      return `${playerName}, let's go to the bathroom.`
    }

    if (reasoning.includes("discipline") || reasoning.includes("timeout")) {
      return `${playerName}, you need some time to think about your behavior.`
    }

    if (reasoning.includes("reward") || reasoning.includes("good")) {
      return `${playerName}, you're being such a good little!`
    }

    return `${playerName}, I need to talk to you.`
  }

  // ============ Decision Creation Helpers ============

  private createCleaningDecision(accident: Accident, reason: string): AuthorityDecision {
    return {
      authorityId: this.caregiver.id,
      targetId: accident.id,
      triggeringEventId: `accident_${accident.id}`,
      confidence: 1.0,
      interventions: [
        {
          type: "disciplinary_action" as any,
          targetId: accident.id,
          effect: "reputation_change",
          magnitude: 0,
          reason: reason,
        },
      ],
      reasoning: `Cleaning up ${accident.type} accident`,
    }
  }

  private createDiaperChangeDecision(player: Player, reason: string): AuthorityDecision {
    return {
      authorityId: this.caregiver.id,
      targetId: player.id,
      triggeringEventId: `diaper_${player.id}`,
      confidence: 0.95,
      interventions: [
        {
          type: "escort",
          authorityId: this.caregiver.id,
          targetId: player.id,
          destinationId: this.findNearestChangingStation(player.position),
          canResist: false,
          reason: reason,
        },
      ],
      reasoning: `${player.name} needs an immediate diaper change`,
    }
  }

  private createEscortDecision(player: Player, reason: string, destinationType: string): AuthorityDecision {
    return {
      authorityId: this.caregiver.id,
      targetId: player.id,
      triggeringEventId: `escort_${player.id}`,
      confidence: 0.9,
      interventions: [
        {
          type: "escort",
          authorityId: this.caregiver.id,
          targetId: player.id,
          destinationId: this.findDestinationByType(destinationType),
          canResist: false,
          reason: reason,
        },
      ],
      reasoning: `Escorting ${player.name} to ${destinationType}`,
    }
  }

  private createComfortDecision(player: Player, reason: string): AuthorityDecision {
    return {
      authorityId: this.caregiver.id,
      targetId: player.id,
      triggeringEventId: `comfort_${player.id}`,
      confidence: 0.8,
      interventions: [
        {
          type: "disciplinary_action" as any,
          targetId: player.id,
          effect: "morale_penalty",
          magnitude: -2,
          reason: reason,
        },
      ],
      reasoning: `Comforting ${player.name} who seems distressed`,
    }
  }

  private createDisciplinaryDecision(player: Player, reason: string): AuthorityDecision {
    const severity = this.calculateDisciplineSeverity(player)

    let intervention: any
    if (severity > 3) {
      intervention = {
        type: "cooldown" as const,
        targetId: player.id,
        durationMs: Math.min(severity * 60000, 300000), // Max 5 minutes
        restrictedCapabilities: severity > 4 ? ["movement", "interaction"] : ["interaction"],
        reason: reason,
      }
    } else {
      intervention = {
        type: "disciplinary_action" as const,
        targetId: player.id,
        effect: "reputation_change" as const,
        magnitude: severity,
        reason: reason,
      }
    }

    return {
      authorityId: this.caregiver.id,
      targetId: player.id,
      triggeringEventId: `discipline_${player.id}`,
      confidence: 0.85,
      interventions: [intervention],
      reasoning: `${player.name} requires disciplinary action for ${reason}`,
    }
  }

  private createRewardDecision(player: Player, reason: string): AuthorityDecision {
    return {
      authorityId: this.caregiver.id,
      targetId: player.id,
      triggeringEventId: `reward_${player.id}`,
      confidence: 0.7,
      interventions: [
        {
          type: "disciplinary_action" as any,
          targetId: player.id,
          effect: "morale_penalty",
          magnitude: -1,
          reason: reason,
        },
      ],
      reasoning: `Rewarding ${player.name} for good behavior`,
    }
  }

  private createReleaseDecision(player: Player, reason: string): AuthorityDecision {
    return {
      authorityId: this.caregiver.id,
      targetId: player.id,
      triggeringEventId: `release_${player.id}`,
      confidence: 1.0,
      interventions: [
        {
          type: "disciplinary_action" as any,
          targetId: player.id,
          effect: "morale_penalty",
          magnitude: -1,
          reason: reason,
        },
      ],
      reasoning: `${player.name} timeout has ended`,
    }
  }

  private createInterventionDecision(player: Player, reason: string, intervention: any): AuthorityDecision {
    return {
      authorityId: this.caregiver.id,
      targetId: player.id,
      triggeringEventId: `intervention_${player.id}`,
      confidence: 0.9,
      interventions: [intervention],
      reasoning: `${player.name} requires intervention for ${reason}`,
    }
  }

  private createSupplyRestockDecision(location: string, reason: string): AuthorityDecision {
    return {
      authorityId: this.caregiver.id,
      targetId: "supply_closet",
      triggeringEventId: `supply_${Date.now()}`,
      confidence: 0.6,
      interventions: [
        {
          type: "disciplinary_action" as any,
          targetId: "supply_closet",
          effect: "reputation_change",
          magnitude: 0,
          reason: reason,
        },
      ],
      reasoning: "Restocking supplies for daycare maintenance",
    }
  }

  private calculateDisciplineSeverity(player: Player): number {
    let severity = 1

    // Base severity on discipline status
    switch (player.disciplineStatus) {
      case "red":
        severity += 3
        break
      case "yellow":
        severity += 1
        break
    }

    // Increase severity based on alignment
    switch (player.alignment) {
      case "little_shit":
        severity += 2
        break
      case "bad_boy_girl":
        severity += 1
        break
    }

    // Increase severity based on recent punishment history
    const recentPunishments = player.punishments.filter(
      (p) => Date.now() - p.timestamp < 300000, // Last 5 minutes
    )
    severity += recentPunishments.length

    return Math.min(severity, 5)
  }

  private findNearestChangingStation(position: Vector3): string {
    const changingStations = Array.from(this.lobby.objects.values()).filter((obj) => obj.type === "changing_station")

    if (changingStations.length === 0) return "changing_station_1"

    const nearest = changingStations.reduce((closest, current) => {
      const currentDist = this.calculateDistance(position, current.position)
      const closestDist = this.calculateDistance(position, closest.position)
      return currentDist < closestDist ? current : closest
    })

    return nearest.id
  }

  private findDestinationByType(type: string): string {
    const destinations = Array.from(this.lobby.objects.values()).filter((obj) => obj.type === type)

    if (destinations.length === 0) return "default_destination"

    return destinations[0].id
  }

  private findSafeLocation(position: Vector3): string {
    // Find nearest safe area (play area, timeout area, etc.)
    const safeAreas = Array.from(this.lobby.objects.values()).filter((obj) =>
      ["play_area", "timeout_chair", "timeout_stool"].includes(obj.type),
    )

    if (safeAreas.length === 0) return "safe_zone"

    const nearest = safeAreas.reduce((closest, current) => {
      const currentDist = this.calculateDistance(position, current.position)
      const closestDist = this.calculateDistance(position, closest.position)
      return currentDist < closestDist ? current : closest
    })

    return nearest.id
  }

  private identifyEndangeredPlayers(): Player[] {
    // This would be more sophisticated in a real implementation
    // For now, return players with critical needs
    return Array.from(this.lobby.players.values()).filter(
      (player) => player.needs.bladder > 95 || player.needs.bowel > 95,
    )
  }

  private isCurrentlyViolatingRules(player: Player): boolean {
    // Check for active rule violations
    // This would be more sophisticated with actual rule checking
    return player.disciplineStatus === "red"
  }

  private findWorstViolator(players: Player[]): Player {
    return players.reduce((worst, current) => {
      const worstSeverity = this.calculateDisciplineSeverity(worst)
      const currentSeverity = this.calculateDisciplineSeverity(current)
      return currentSeverity > worstSeverity ? current : worst
    })
  }

  private checkSupplyLevels(): { needsRestock: boolean; location: string } {
    // Simplified supply checking
    return { needsRestock: false, location: "supply_closet" }
  }

  private addToBehaviorMemory(playerId: string, behavior: BehaviorEvent): void {
    if (!this.behaviorMemory.has(playerId)) {
      this.behaviorMemory.set(playerId, [])
    }

    const playerMemory = this.behaviorMemory.get(playerId)!
    playerMemory.push(behavior)

    // Keep only recent behaviors (last 10 minutes)
    const cutoffTime = Date.now() - 600000
    this.behaviorMemory.set(
      playerId,
      playerMemory.filter((b) => b.timestamp > cutoffTime),
    )
  }
}
