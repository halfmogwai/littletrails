// Character Animation System with crying, pee, diaper change animations
import { useRef, useEffect, useState, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { AnimationMixer, LoopRepeat, Vector3, Quaternion } from 'three'
import { gsap } from 'gsap'
import type { CharacterShaderMaterial } from '../shaders/CharacterShader'
import type { CharacterCustomization, ClothingState } from '@/lib/types/gameTypes'

export type CharacterAnimation = 
  | 'idle'
  | 'walk'
  | 'run'
  | 'jump'
  | 'crawl'
  | 'sit'
  | 'cry'
  | 'pee'
  | 'diaper_change'
  | 'cry_intense'
  | 'happy_dance'
  | 'timeout_pose'
  | 'spank_otk'
  | 'being_led'

export interface AnimationConfig {
  duration: number
  loop: boolean
  easing: string
  priority: number // Higher priority animations interrupt lower ones
}

export interface AnimationState {
  current: CharacterAnimation
  previous: CharacterAnimation
  isPlaying: boolean
  startTime: number
  duration: number
  speed: number
}

export class CharacterAnimationController {
  private mixer: AnimationMixer | null = null
  private currentAnimation: CharacterAnimation = 'idle'
  private animations: Map<CharacterAnimation, AnimationConfig> = new Map()
  private onAnimationChange?: (animation: CharacterAnimation) => void
  
  constructor() {
    this.setupAnimations()
  }
  
  private setupAnimations() {
    this.animations.set('idle', {
      duration: 2.0,
      loop: true,
      easing: 'power2.inOut',
      priority: 0
    })
    
    this.animations.set('walk', {
      duration: 1.0,
      loop: true,
      easing: 'none',
      priority: 1
    })
    
    this.animations.set('run', {
      duration: 0.8,
      loop: true,
      easing: 'none',
      priority: 2
    })
    
    this.animations.set('jump', {
      duration: 1.5,
      loop: false,
      easing: 'power2.out',
      priority: 3
    })
    
    this.animations.set('crawl', {
      duration: 1.2,
      loop: true,
      easing: 'none',
      priority: 2
    })
    
    this.animations.set('sit', {
      duration: 2.0,
      loop: true,
      easing: 'power2.inOut',
      priority: 1
    })
    
    // Special gameplay animations
    this.animations.set('cry', {
      duration: 3.0,
      loop: true,
      easing: 'none',
      priority: 5
    })
    
    this.animations.set('cry_intense', {
      duration: 1.5,
      loop: true,
      easing: 'none',
      priority: 6
    })
    
    this.animations.set('pee', {
      duration: 4.0,
      loop: false,
      easing: 'power2.inOut',
      priority: 7
    })
    
    this.animations.set('diaper_change', {
      duration: 5.0,
      loop: false,
      easing: 'power2.inOut',
      priority: 8
    })
    
    this.animations.set('happy_dance', {
      duration: 2.5,
      loop: true,
      easing: 'bounce.out',
      priority: 4
    })
    
    this.animations.set('timeout_pose', {
      duration: 3.0,
      loop: true,
      easing: 'none',
      priority: 5
    })
    
    this.animations.set('spank_otk', {
      duration: 3.0,
      loop: false,
      easing: 'power2.inOut',
      priority: 9
    })
    
    this.animations.set('being_led', {
      duration: 2.0,
      loop: true,
      easing: 'none',
      priority: 4
    })
  }
  
  setMixer(mixer: AnimationMixer) {
    this.mixer = mixer
  }
  
  setOnAnimationChange(callback: (animation: CharacterAnimation) => void) {
    this.onAnimationChange = callback
  }
  
  playAnimation(
    animation: CharacterAnimation, 
    character?: {
      position: Vector3
      rotation: Quaternion
      scale?: Vector3
    },
    options?: {
      duration?: number
      speed?: number
      onComplete?: () => void
    }
  ): boolean {
    if (!this.mixer) return false
    
    const config = this.animations.get(animation)
    if (!config) return false
    
    // Check priority - higher priority animations interrupt lower ones
    const currentConfig = this.animations.get(this.currentAnimation)
    if (currentConfig && config.priority < currentConfig.priority) {
      return false
    }
    
    // Create GSAP timeline for the animation
    const timeline = gsap.timeline({
      onComplete: () => {
        if (options?.onComplete) {
          options.onComplete()
        }
      }
    })
    
    // Set character transform if provided
    if (character) {
      timeline.set(character, {
        x: character.position.x,
        y: character.position.y,
        z: character.position.z,
        rotationX: character.rotation.x,
        rotationY: character.rotation.y,
        rotationZ: character.rotation.z,
        scaleX: character.scale?.x || 1,
        scaleY: character.scale?.y || 1,
        scaleZ: character.scale?.z || 1,
      })
    }
    
    // Define animation sequences based on type
    switch (animation) {
      case 'cry':
        this.createCryAnimation(timeline, character)
        break
      case 'cry_intense':
        this.createIntenseCryAnimation(timeline, character)
        break
      case 'pee':
        this.createPeeAnimation(timeline, character)
        break
      case 'diaper_change':
        this.createDiaperChangeAnimation(timeline, character)
        break
      case 'happy_dance':
        this.createHappyDanceAnimation(timeline, character)
        break
      case 'timeout_pose':
        this.createTimeoutPoseAnimation(timeline, character)
        break
      case 'spank_otk':
        this.createSpankAnimation(timeline, character)
        break
      case 'being_led':
        this.createBeingLedAnimation(timeline, character)
        break
      default:
        this.createStandardAnimation(timeline, animation, character)
    }
    
    this.currentAnimation = animation
    this.onAnimationChange?.(animation)
    
    return true
  }
  
  private createCryAnimation(timeline: gsap.core.Timeline, character?: any) {
    // Crying animation with head bobbing and arm movements
    timeline.to(character, {
      duration: 0.5,
      y: character.position.y + 0.2,
      rotationZ: -0.1,
      easing: 'power2.in'
    })
    
    // Repeat crying motion
    timeline.to(character, {
      duration: 1.0,
      y: character.position.y - 0.1,
      rotationZ: 0.1,
      repeat: -1,
      yoyo: true,
      easing: 'sine.inOut'
    })
    
    // Hand to face gesture
    timeline.to(character, {
      duration: 0.3,
      x: character.position.x - 0.3,
      rotationY: -0.3,
      repeat: -1,
      yoyo: true,
      easing: 'sine.inOut'
    }, 0)
  }
  
  private createIntenseCryAnimation(timeline: gsap.core.Timeline, character?: any) {
    // More aggressive crying with full body movement
    timeline.to(character, {
      duration: 0.3,
      y: character.position.y + 0.3,
      x: character.position.x + 0.1,
      rotationX: -0.2,
      rotationZ: 0.2,
      easing: 'power2.in'
    })
    
    // Violent shaking
    timeline.to(character, {
      duration: 0.8,
      x: character.position.x - 0.2,
      rotationY: 0.4,
      repeat: -1,
      yoyo: true,
      easing: 'power2.inOut'
    })
    
    // Arms flailing
    timeline.to(character, {
      duration: 0.4,
      rotationZ: -0.5,
      repeat: -1,
      yoyo: true,
      easing: 'bounce.inOut'
    }, 0)
  }
  
  private createPeeAnimation(timeline: gsap.core.Timeline, character?: any) {
    // Potty preparation
    timeline.to(character, {
      duration: 1.0,
      y: character.position.y - 0.3,
      rotationX: 0.3,
      easing: 'power2.inOut'
    })
    
    // Squatting position
    timeline.to(character, {
      duration: 1.5,
      y: character.position.y - 0.6,
      rotationX: 0.6,
      scaleY: 0.8,
      easing: 'power2.inOut'
    })
    
    // Releasing (brief pause)
    timeline.to(character, {
      duration: 1.0,
      y: character.position.y - 0.5,
      repeat: 0
    })
    
    // Standing up
    timeline.to(character, {
      duration: 1.5,
      y: character.position.y,
      rotationX: 0,
      scaleY: 1,
      easing: 'power2.out'
    })
  }
  
  private createDiaperChangeAnimation(timeline: gsap.core.Timeline, character?: any) {
    // Lying down
    timeline.to(character, {
      duration: 1.0,
      y: character.position.y - 0.5,
      rotationX: -1.5,
      easing: 'power2.inOut'
    })
    
    // Struggling slightly
    timeline.to(character, {
      duration: 0.5,
      rotationZ: 0.2,
      repeat: 3,
      yoyo: true,
      easing: 'sine.inOut'
    })
    
    // Cooperative pose
    timeline.to(character, {
      duration: 1.0,
      rotationX: -1.2,
      rotationZ: 0,
      easing: 'power2.inOut'
    })
    
    // Staying still during change
    timeline.to(character, {
      duration: 2.0,
      // Minimal movement - just breathing
      y: character.position.y - 0.5 + Math.sin(Date.now()) * 0.02,
      repeat: 0
    })
    
    // Getting up
    timeline.to(character, {
      duration: 0.5,
      y: character.position.y,
      rotationX: 0,
      easing: 'power2.out'
    })
  }
  
  private createHappyDanceAnimation(timeline: gsap.core.Timeline, character?: any) {
    // Jumping up and down
    timeline.to(character, {
      duration: 0.4,
      y: character.position.y + 0.4,
      scaleY: 1.1,
      easing: 'bounce.out'
    })
    
    timeline.to(character, {
      duration: 0.4,
      y: character.position.y,
      scaleY: 1,
      repeat: -1,
      yoyo: true,
      easing: 'bounce.in'
    })
    
    // Arms swaying
    timeline.to(character, {
      duration: 1.0,
      rotationY: 0.3,
      repeat: -1,
      yoyo: true,
      easing: 'sine.inOut'
    })
  }
  
  private createTimeoutPoseAnimation(timeline: gsap.core.Timeline, character?: any) {
    // Defiant pose
    timeline.to(character, {
      duration: 1.0,
      rotationY: Math.PI,
      y: character.position.y + 0.1,
      easing: 'power2.inOut'
    })
    
    // Slight bouncing/sulking
    timeline.to(character, {
      duration: 2.0,
      y: character.position.y + 0.05,
      repeat: -1,
      yoyo: true,
      easing: 'sine.inOut'
    })
  }
  
  private createSpankAnimation(timeline: gsap.core.Timeline, character?: any) {
    // Over-the-knee position
    timeline.to(character, {
      duration: 0.8,
      rotationX: -1.0,
      y: character.position.y - 0.4,
      easing: 'power2.inOut'
    })
    
    // Struggling
    timeline.to(character, {
      duration: 0.3,
      rotationZ: 0.3,
      repeat: 5,
      yoyo: true,
      easing: 'power2.inOut'
    })
    
    // Brief pause
    timeline.to(character, {
      duration: 0.5,
      rotationZ: 0,
      repeat: 0
    })
    
    // Getting up
    timeline.to(character, {
      duration: 1.0,
      rotationX: 0,
      y: character.position.y,
      easing: 'power2.out'
    })
  }
  
  private createBeingLedAnimation(timeline: gsap.core.Timeline, character?: any) {
    // Passive walking motion
    timeline.to(character, {
      duration: 0.8,
      y: character.position.y + 0.1,
      repeat: -1,
      yoyo: true,
      easing: 'sine.inOut'
    })
    
    // Slight resistance movement
    timeline.to(character, {
      duration: 1.5,
      rotationX: -0.1,
      repeat: -1,
      yoyo: true,
      easing: 'sine.inOut'
    })
  }
  
  private createStandardAnimation(timeline: gsap.core.Timeline, animation: CharacterAnimation, character?: any) {
    const config = this.animations.get(animation)!
    
    // Simple loop animation for basic movements
    if (config.loop) {
      timeline.to(character, {
        duration: config.duration,
        repeat: -1,
        yoyo: true,
        easing: config.easing,
        // Add subtle movement based on animation type
        ...this.getAnimationTransforms(animation, character)
      })
    } else {
      timeline.to(character, {
        duration: config.duration,
        easing: config.easing,
        ...this.getAnimationTransforms(animation, character)
      })
    }
  }
  
  private getAnimationTransforms(animation: CharacterAnimation, character?: any) {
    const transforms: any = {}
    
    switch (animation) {
      case 'walk':
        transforms.y = character.position.y + 0.05
        transforms.rotationY = Math.sin(Date.now() * 0.01) * 0.1
        break
      case 'run':
        transforms.y = character.position.y + 0.1
        transforms.scaleX = 1.05
        break
      case 'jump':
        transforms.y = character.position.y + 0.5
        transforms.scaleY = 1.2
        break
      case 'sit':
        transforms.y = character.position.y - 0.3
        transforms.rotationX = 0.2
        break
      default:
        break
    }
    
    return transforms
  }
  
  update(delta: number) {
    if (this.mixer) {
      this.mixer.update(delta)
    }
  }
  
  stop() {
    if (this.mixer) {
      this.mixer.stopAllAction()
    }
    this.currentAnimation = 'idle'
  }
  
  getCurrentAnimation(): CharacterAnimation {
    return this.currentAnimation
  }
}

// React hook for character animations
export function useCharacterAnimations() {
  const [animationState, setAnimationState] = useState<AnimationState>({
    current: 'idle',
    previous: 'idle',
    isPlaying: false,
    startTime: 0,
    duration: 0,
    speed: 1
  })
  
  const controllerRef = useRef<CharacterAnimationController | null>(null)
  
  useEffect(() => {
    controllerRef.current = new CharacterAnimationController()
    
    controllerRef.current.setOnAnimationChange((animation) => {
      setAnimationState(prev => ({
        ...prev,
        current: animation,
        previous: prev.current,
        isPlaying: true,
        startTime: Date.now()
      }))
    })
    
    return () => {
      controllerRef.current?.stop()
    }
  }, [])
  
  const playAnimation = (animation: CharacterAnimation, character?: any, options?: any) => {
    if (controllerRef.current) {
      return controllerRef.current.playAnimation(animation, character, {
        ...options,
        onComplete: () => {
          setAnimationState(prev => ({
            ...prev,
            isPlaying: false
          }))
          if (options?.onComplete) {
            options.onComplete()
          }
        }
      })
    }
    return false
  }
  
  const update = (delta: number) => {
    controllerRef.current?.update(delta)
  }
  
  return {
    animationState,
    playAnimation,
    update,
    controller: controllerRef.current
  }
}