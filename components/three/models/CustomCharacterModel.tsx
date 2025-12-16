// Custom Character Model using Three.js primitives and custom shaders
import { useRef, useMemo, useEffect, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Mesh, Vector3, Quaternion, Euler, Color } from 'three'
import { CharacterShaderMaterial } from '../shaders/CharacterShader'
import { CharacterAnimation, useCharacterAnimations, type CharacterAnimationController } from '../animations/CharacterAnimationSystem'
import type { CharacterCustomization, ClothingState } from '@/lib/types/gameTypes'

export interface CustomCharacterModelProps {
  customization: CharacterCustomization
  clothing: ClothingState
  position: [number, number, number]
  rotation?: [number, number, number]
  scale?: number
  currentAnimation?: CharacterAnimation
  onAnimationChange?: (animation: CharacterAnimation) => void
  emotions?: {
    happiness: number
    sadness: number
    anger: number
    surprise: number
  }
  isAnimated?: boolean
}

export function CustomCharacterModel({
  customization,
  clothing,
  position,
  rotation = [0, 0, 0],
  scale = 1,
  currentAnimation = 'idle',
  onAnimationChange,
  emotions,
  isAnimated = true
}: CustomCharacterModelProps) {
  const groupRef = useRef<any>(null)
  const headRef = useRef<Mesh>(null)
  const bodyRef = useRef<Mesh>(null)
  const armsRef = useRef<{ left: Mesh; right: Mesh }>(null)
  const legsRef = useRef<{ left: Mesh; right: Mesh }>(null)
  const diaperRef = useRef<Mesh>(null)
  
  const { camera } = useThree()
  const [shaderMaterials, setShaderMaterials] = useState<CharacterShaderMaterial[]>([])
  
  // Animation system
  const { animationState, playAnimation, update } = useCharacterAnimations()
  
  // Create shader materials with error handling
  const characterMaterial = useMemo(() => {
    try {
      const material = new CharacterShaderMaterial({
        skinColor: customization.skinColor,
        hairColor: customization.hairColor || '#8B4513',
        eyeColor: customization.eyeColor || '#4A90E2',
        clothingColor: getClothingColor(clothing),
        ageGroup: customization.ageGroup,
        emotions: emotions || { happiness: 0.5, sadness: 0, anger: 0, surprise: 0 },
        wetness: getWetnessLevel(clothing),
        diaperState: clothing.underwearState
      })
      return material
    } catch (error) {
      console.error('Error creating character shader material:', error)
      // Fallback to basic material
      return {
        color: customization.skinColor,
        roughness: 0.8,
        metalness: 0.1,
        updateTime: () => {},
        updateEmotions: () => {},
        updateWetness: () => {},
        updateCameraPosition: () => {},
        updateWorldPosition: () => {},
        clone: () => {},
        dispose: () => {}
      }
    }
  }, [customization, clothing, emotions])
  
  // Character dimensions based on age group
  const characterDimensions = useMemo(() => {
    switch (customization.ageGroup) {
      case '1-4':
        return {
          headSize: 0.25,
          bodyHeight: 0.6,
          bodyWidth: 0.3,
          armLength: 0.35,
          legLength: 0.4,
          scale: 0.6
        }
      case '4-7':
        return {
          headSize: 0.28,
          bodyHeight: 0.8,
          bodyWidth: 0.35,
          armLength: 0.45,
          legLength: 0.5,
          scale: 0.75
        }
      case '7-9':
        return {
          headSize: 0.3,
          bodyHeight: 1.0,
          bodyWidth: 0.4,
          armLength: 0.55,
          legLength: 0.6,
          scale: 0.85
        }
      case '12+':
        return {
          headSize: 0.32,
          bodyHeight: 1.2,
          bodyWidth: 0.45,
          armLength: 0.65,
          legLength: 0.7,
          scale: 1.0
        }
      default:
        return {
          headSize: 0.28,
          bodyHeight: 0.9,
          bodyWidth: 0.38,
          armLength: 0.5,
          legLength: 0.55,
          scale: 0.8
        }
    }
  }, [customization.ageGroup])
  
  // Update shader uniforms
  useFrame((state, delta) => {
    if (isAnimated) {
      update(delta)
    }
    
    // Update shader uniforms
    characterMaterial.updateTime(state.clock.elapsedTime)
    characterMaterial.updateCameraPosition(camera.position)
    
    if (groupRef.current) {
      characterMaterial.updateWorldPosition(groupRef.current.position)
    }
    
    // Animate emotions
    if (emotions) {
      characterMaterial.updateEmotions(emotions)
    }
    
    // Update wetness based on clothing state
    characterMaterial.updateWetness(getWetnessLevel(clothing))
  })
  
  // Handle animation changes
  useEffect(() => {
    if (currentAnimation !== animationState.current && isAnimated) {
      playAnimation(currentAnimation, groupRef.current)
    }
  }, [currentAnimation, animationState.current, isAnimated])
  
  // Create character body parts
  const Body = () => (
    <group ref={groupRef} position={position} rotation={rotation} scale={characterDimensions.scale * scale}>
      {/* Head */}
      <mesh ref={headRef} position={[0, characterDimensions.bodyHeight + characterDimensions.headSize, 0]} castShadow>
        <sphereGeometry args={[characterDimensions.headSize, 16, 16]} />
        <primitive object={characterMaterial} attach="material" />
      </mesh>
      
      {/* Hair */}
      {customization.hairColor && (
        <mesh position={[0, characterDimensions.bodyHeight + characterDimensions.headSize + characterDimensions.headSize * 0.8, 0]} castShadow>
          <sphereGeometry args={[characterDimensions.headSize * 1.1, 12, 12]} />
          <meshStandardMaterial color={customization.hairColor} roughness={0.9} />
        </mesh>
      )}
      
      {/* Body */}
      <mesh ref={bodyRef} position={[0, characterDimensions.bodyHeight / 2, 0]} castShadow>
        <cylinderGeometry args={[characterDimensions.bodyWidth / 2, characterDimensions.bodyWidth / 2, characterDimensions.bodyHeight, 8]} />
        <primitive object={characterMaterial} attach="material" />
      </mesh>
      
      {/* Arms */}
      <group ref={armsRef}>
        <mesh 
          position={[-characterDimensions.bodyWidth / 2 - 0.05, characterDimensions.bodyHeight * 0.8, 0]} 
          rotation={[0, 0, Math.PI / 6]} 
          castShadow
        >
          <cylinderGeometry args={[0.06, 0.06, characterDimensions.armLength, 8]} />
          <primitive object={characterMaterial} attach="material" />
        </mesh>
        <mesh 
          position={[characterDimensions.bodyWidth / 2 + 0.05, characterDimensions.bodyHeight * 0.8, 0]} 
          rotation={[0, 0, -Math.PI / 6]} 
          castShadow
        >
          <cylinderGeometry args={[0.06, 0.06, characterDimensions.armLength, 8]} />
          <primitive object={characterMaterial} attach="material" />
        </mesh>
      </group>
      
      {/* Legs */}
      <group ref={legsRef}>
        <mesh position={[-characterDimensions.bodyWidth / 4, characterDimensions.legLength / 2, 0]} castShadow>
          <cylinderGeometry args={[0.08, 0.08, characterDimensions.legLength, 8]} />
          <primitive object={characterMaterial} attach="material" />
        </mesh>
        <mesh position={[characterDimensions.bodyWidth / 4, characterDimensions.legLength / 2, 0]} castShadow>
          <cylinderGeometry args={[0.08, 0.08, characterDimensions.legLength, 8]} />
          <primitive object={characterMaterial} attach="material" />
        </mesh>
      </group>
      
      {/* Diaper */}
      {clothing.underwearType === 'diaper' && (
        <mesh ref={diaperRef} position={[0, characterDimensions.bodyHeight * 0.2, characterDimensions.bodyWidth / 2]} castShadow>
          <boxGeometry args={[characterDimensions.bodyWidth * 0.8, 0.3, 0.1]} />
          <meshStandardMaterial 
            color={getDiaperColor(clothing.underwearState)} 
            transparent 
            opacity={0.9}
          />
        </mesh>
      )}
      
      {/* Face details */}
      <FaceDetails 
        eyeColor={customization.eyeColor || '#4A90E2'} 
        headHeight={characterDimensions.bodyHeight + characterDimensions.headSize}
        headSize={characterDimensions.headSize}
        emotions={emotions}
      />
      
      {/* Clothing overlays */}
      <ClothingOverlays 
        clothing={clothing} 
        dimensions={characterDimensions}
      />
    </group>
  )
  
  return <Body />
}

// Face details component
function FaceDetails({ 
  eyeColor, 
  headHeight,
  headSize,
  emotions 
}: { 
  eyeColor: string
  headHeight: number
  headSize: number
  emotions?: { happiness: number; sadness: number; anger: number; surprise: number }
}) {
  const eyeSize = emotions?.surprise && emotions.surprise > 0.3 ? 0.08 : 0.06
  
  return (
    <group position={[0, headHeight - 0.1, headSize * 0.9]}>
      {/* Eyes */}
      <mesh position={[-0.12, 0.05, 0]}>
        <sphereGeometry args={[eyeSize, 8, 8]} />
        <meshBasicMaterial color={eyeColor} />
      </mesh>
      <mesh position={[0.12, 0.05, 0]}>
        <sphereGeometry args={[eyeSize, 8, 8]} />
        <meshBasicMaterial color={eyeColor} />
      </mesh>
      
      {/* Mouth - emotion based */}
      <mesh position={[0, -0.05, 0]}>
        <sphereGeometry args={[0.03, 6, 6]} />
        <meshBasicMaterial 
          color={
            emotions?.happiness && emotions.happiness > 0.5 ? '#FF6B6B' :
            emotions?.anger && emotions.anger > 0.5 ? '#FF4757' :
            emotions?.sadness && emotions.sadness > 0.5 ? '#57606F' :
            '#FF6B6B'
          } 
        />
      </mesh>
      
      {/* Tears for crying */}
      {emotions?.sadness && emotions.sadness > 0.3 && (
        <group>
          <mesh position={[-0.15, 0.02, 0]}>
            <sphereGeometry args={[0.02, 4, 4]} />
            <meshBasicMaterial color="#87CEEB" transparent opacity={0.7} />
          </mesh>
          <mesh position={[0.15, 0.02, 0]}>
            <sphereGeometry args={[0.02, 4, 4]} />
            <meshBasicMaterial color="#87CEEB" transparent opacity={0.7} />
          </mesh>
        </group>
      )}
    </group>
  )
}

// Clothing overlays component
function ClothingOverlays({ 
  clothing, 
  dimensions 
}: { 
  clothing: ClothingState
  dimensions: any 
}) {
  return (
    <group>
      {/* Shirt */}
      {clothing.shirt && (
        <mesh position={[0, dimensions.bodyHeight * 0.8, 0]} castShadow>
          <cylinderGeometry args={[dimensions.bodyWidth / 2 + 0.02, dimensions.bodyWidth / 2 + 0.02, dimensions.bodyHeight * 0.6, 8]} />
          <meshStandardMaterial color="#E8E8E8" roughness={0.8} />
        </mesh>
      )}
      
      {/* Pants */}
      {clothing.pants && (
        <group>
          <mesh position={[-dimensions.bodyWidth / 6, dimensions.legLength * 0.3, 0]} castShadow>
            <cylinderGeometry args={[0.1, 0.09, dimensions.legLength * 0.6, 8]} />
            <meshStandardMaterial color="#4169E1" roughness={0.7} />
          </mesh>
          <mesh position={[dimensions.bodyWidth / 6, dimensions.legLength * 0.3, 0]} castShadow>
            <cylinderGeometry args={[0.1, 0.09, dimensions.legLength * 0.6, 8]} />
            <meshStandardMaterial color="#4169E1" roughness={0.7} />
          </mesh>
        </group>
      )}
      
      {/* Socks */}
      {clothing.socks && (
        <group>
          <mesh position={[-dimensions.bodyWidth / 6, 0.05, 0.05]} castShadow>
            <boxGeometry args={[0.12, 0.1, 0.18]} />
            <meshStandardMaterial color="#FFFFFF" />
          </mesh>
          <mesh position={[dimensions.bodyWidth / 6, 0.05, 0.05]} castShadow>
            <boxGeometry args={[0.12, 0.1, 0.18]} />
            <meshStandardMaterial color="#FFFFFF" />
          </mesh>
        </group>
      )}
      
      {/* Shoes */}
      {clothing.shoes && (
        <group>
          <mesh position={[-dimensions.bodyWidth / 6, 0.02, 0.1]} castShadow>
            <boxGeometry args={[0.16, 0.08, 0.22]} />
            <meshStandardMaterial color="#8B4513" roughness={0.9} />
          </mesh>
          <mesh position={[dimensions.bodyWidth / 6, 0.02, 0.1]} castShadow>
            <boxGeometry args={[0.16, 0.08, 0.22]} />
            <meshStandardMaterial color="#8B4513" roughness={0.9} />
          </mesh>
        </group>
      )}
    </group>
  )
}

// Helper functions
function getClothingColor(clothing: ClothingState): string {
  if (clothing.underwearType === 'diaper') {
    return getDiaperColor(clothing.underwearState)
  }
  return '#E8E8E8' // Default clothing color
}

function getDiaperColor(state: string): string {
  switch (state) {
    case 'clean': return '#FFFFFF'
    case 'wet': return '#ADD8E6'
    case 'messy': return '#8B4513'
    case 'both': return '#D2691E'
    default: return '#FFFFFF'
  }
}

function getWetnessLevel(clothing: ClothingState): number {
  switch (clothing.underwearState) {
    case 'wet': return 0.6
    case 'messy': return 0.8
    case 'both': return 1.0
    default: return 0.0
  }
}