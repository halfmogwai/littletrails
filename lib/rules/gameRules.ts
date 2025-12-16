import type {
  AgeGroup,
  UnderwearType,
  CaregiverPersonality,
  BehaviorEvent,
  BehaviorSeverity,
  VoiceEmotion,
} from "./gameTypes"

export interface AgeRules {
  canChooseClothes: boolean
  canTogglePacifier: boolean
  alwaysHasPacifier: boolean
  allowedUnderwear: UnderwearType[]
  canUsePotty: boolean
  canUseToilet: (currentUnderwear: UnderwearType) => boolean
  defaultAnimation: "crawl" | "walk"
  defaultClothing: {
    shirt: boolean
    pants: boolean
    socks: boolean
    shoes: boolean
    underwearType: UnderwearType
    pacifierIn: boolean
  }
}

export const AGE_RULES: Record<AgeGroup, AgeRules> = {
  "1-4": {
    canChooseClothes: false,
    canTogglePacifier: false,
    alwaysHasPacifier: true,
    allowedUnderwear: ["diaper"],
    canUsePotty: false,
    canUseToilet: () => false,
    defaultAnimation: "crawl",
    defaultClothing: {
      shirt: false,
      pants: false,
      socks: false,
      shoes: false,
      underwearType: "diaper",
      pacifierIn: true,
    },
  },
  "4-7": {
    canChooseClothes: false,
    canTogglePacifier: true,
    alwaysHasPacifier: false,
    allowedUnderwear: ["diaper", "training_pants", "underwear"],
    canUsePotty: true,
    canUseToilet: (underwear) => underwear === "training_pants" || underwear === "underwear",
    defaultAnimation: "walk",
    defaultClothing: {
      shirt: true,
      pants: true,
      socks: true,
      shoes: true,
      underwearType: "training_pants",
      pacifierIn: false,
    },
  },
  "7-9": {
    canChooseClothes: true,
    canTogglePacifier: false,
    alwaysHasPacifier: false,
    allowedUnderwear: ["diaper", "training_pants", "underwear"],
    canUsePotty: true,
    canUseToilet: (underwear) => underwear === "training_pants" || underwear === "underwear",
    defaultAnimation: "walk",
    defaultClothing: {
      shirt: true,
      pants: true,
      socks: true,
      shoes: true,
      underwearType: "underwear",
      pacifierIn: false,
    },
  },
  "12+": {
    canChooseClothes: true,
    canTogglePacifier: false,
    alwaysHasPacifier: false,
    allowedUnderwear: ["diaper", "training_pants", "underwear"],
    canUsePotty: true,
    canUseToilet: (underwear) => underwear === "training_pants" || underwear === "underwear",
    defaultAnimation: "walk",
    defaultClothing: {
      shirt: true,
      pants: true,
      socks: true,
      shoes: true,
      underwearType: "underwear",
      pacifierIn: false,
    },
  },
}

// AI Caregiver Personality and Behavior Rules
export interface AICaregiverRules {
  maxPatrolDistance: number
  reactionTime: number // milliseconds
  interventionThresholds: {
    safety: BehaviorSeverity
    ruleViolation: BehaviorSeverity
    disruption: BehaviorSeverity
  }
  voiceSettings: {
    defaultEmotion: VoiceEmotion
    firmnessThreshold: number // 0-100, when to switch to firm tone
    nurturingThreshold: number // 0-100, when to show nurturing behavior
  }
  personalityModifiers: {
    strictness: number // affects intervention frequency
    nurturing: number // affects reward and comfort behaviors
    patience: number // affects timeout duration tolerance
    fairness: number // affects consistency in rule enforcement
    responsiveness: number // affects reaction speed to events
  }
}

export const AI_CAREGIVER_RULES: AICaregiverRules = {
  maxPatrolDistance: 10.0, // units
  reactionTime: 500, // milliseconds
  interventionThresholds: {
    safety: 2,
    ruleViolation: 3,
    disruption: 4,
  },
  voiceSettings: {
    defaultEmotion: "caring",
    firmnessThreshold: 70,
    nurturingThreshold: 30,
  },
  personalityModifiers: {
    strictness: 0.5,
    nurturing: 0.5,
    patience: 0.5,
    fairness: 0.5,
    responsiveness: 0.5,
  },
}

export interface CaregiverOverride {
  canForceUnderwear: boolean
  canForceTimeout: boolean
  canChangeClothes: boolean
  canUsePhysicalControl: boolean
  canEscort: boolean
  canSpeak: boolean // AI caregivers can speak
}

export function getCaregiverPermissions(targetAgeGroup: AgeGroup): CaregiverOverride {
  return {
    canForceUnderwear: targetAgeGroup === "1-4" || targetAgeGroup === "4-7",
    canForceTimeout: true,
    canChangeClothes: true,
    canUsePhysicalControl: targetAgeGroup === "1-4" || targetAgeGroup === "4-7",
    canEscort: true,
    canSpeak: true, // AI caregivers can always speak
  }
}

export function getAICaregiverRules(): AICaregiverRules {
  return AI_CAREGIVER_RULES
}

export function calculatePersonalityModifiers(
  personality: CaregiverPersonality,
): AICaregiverRules["personalityModifiers"] {
  return {
    strictness: personality.strictness / 100,
    nurturing: personality.nurturing / 100,
    patience: personality.patience / 100,
    fairness: personality.fairness / 100,
    responsiveness: personality.responsiveness / 100,
  }
}

export function shouldAICaregiverIntervene(event: BehaviorEvent, personality: CaregiverPersonality): boolean {
  const rules = getAICaregiverRules()
  // Map the category string to the correct property name
  const categoryKey = event.category === "rule_violation" ? "ruleViolation" : event.category
  const threshold = rules.interventionThresholds[categoryKey]

  // Adjust threshold based on personality
  let adjustedThreshold = threshold

  // Strict caregivers intervene more frequently
  if (personality.strictness > 70) {
    adjustedThreshold = Math.max(1, threshold - 1) as BehaviorSeverity
  }
  // Nurturing caregivers are more tolerant
  else if (personality.nurturing > 70) {
    adjustedThreshold = Math.min(5, threshold + 1) as BehaviorSeverity
  }

  return event.severity >= adjustedThreshold
}

export function getAICaregiverVoiceEmotion(
  personality: CaregiverPersonality,
  context: "normal" | "warning" | "discipline" | "comfort",
): VoiceEmotion {
  const rules = getAICaregiverRules()

  switch (context) {
    case "normal":
      return rules.voiceSettings.defaultEmotion
    case "warning":
      return personality.strictness > rules.voiceSettings.firmnessThreshold ? "firm" : "caring"
    case "discipline":
      return "stern"
    case "comfort":
      return "caring" // Use 'caring' instead of 'nurturing'
    default:
      return rules.voiceSettings.defaultEmotion
  }
}

export function calculateInterventionConfidence(event: BehaviorEvent, personality: CaregiverPersonality): number {
  let baseConfidence = 0.5

  // Higher strictness increases confidence in interventions
  baseConfidence += (personality.strictness - 50) / 100

  // Higher severity increases confidence
  baseConfidence += (event.severity - 1) * 0.1

  // Higher responsiveness increases confidence
  baseConfidence += (personality.responsiveness - 50) / 200

  return Math.max(0.1, Math.min(1.0, baseConfidence))
}

// Age-based rules
export function getAgeRules(ageGroup: AgeGroup): AgeRules {
  return AGE_RULES[ageGroup]
}

export function canChangeUnderwear(ageGroup: AgeGroup, newType: UnderwearType): boolean {
  const rules = AGE_RULES[ageGroup]
  return rules.allowedUnderwear.includes(newType)
}

export function canUseToiletWithCurrentUnderwear(ageGroup: AgeGroup, underwearType: UnderwearType): boolean {
  const rules = AGE_RULES[ageGroup]
  return rules.canUseToilet(underwearType)
}

export function shouldShowPacifier(ageGroup: AgeGroup, pacifierIn: boolean): boolean {
  const rules = AGE_RULES[ageGroup]
  if (rules.alwaysHasPacifier) return true
  if (ageGroup === "7-9" || ageGroup === "12+") return false
  return pacifierIn
}

export function getDefaultClothingForAge(ageGroup: AgeGroup) {
  return AGE_RULES[ageGroup].defaultClothing
}

export function getAnimationForAge(ageGroup: AgeGroup): "crawl" | "walk" {
  return AGE_RULES[ageGroup].defaultAnimation
}
