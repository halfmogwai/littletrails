import { ShaderMaterial, UniformsUtils, Vector3, Color } from 'three'

export interface CharacterShaderOptions {
  skinColor: string
  hairColor: string
  eyeColor: string
  clothingColor: string
  ageGroup: string
  emotions?: {
    happiness: number
    sadness: number
    anger: number
    surprise: number
  }
  timeOfDay?: number
  wetness?: number
  diaperState?: 'clean' | 'wet' | 'messy' | 'both'
}

export class CharacterShaderMaterial extends ShaderMaterial {
  constructor(options: CharacterShaderOptions) {
    super()

    // Convert hex colors to THREE.Color objects
    const skinColor = new Color(options.skinColor)
    const hairColor = new Color(options.hairColor)
    const eyeColor = new Color(options.eyeColor)
    const clothingColor = new Color(options.clothingColor)

    // Shader uniforms
    this.uniforms = {
      uSkinColor: { value: skinColor },
      uHairColor: { value: hairColor },
      uEyeColor: { value: eyeColor },
      uClothingColor: { value: clothingColor },
      uTime: { value: 0 },
      uEmotions: { value: [0.5, 0, 0, 0] }, // happiness, sadness, anger, surprise
      uWetness: { value: 0 },
      uCameraPosition: { value: new Vector3() },
      uWorldPosition: { value: new Vector3() },
      uAgeGroup: { value: this.getAgeGroupMultiplier(options.ageGroup) },
      uDiaperState: { value: this.getDiaperStateValue(options.diaperState || 'clean') },
      uLightDirection: { value: new Vector3(0.5, 1.0, 0.3).normalize() },
      uAmbientLight: { value: 0.3 },
      uDiffuseLight: { value: 0.8 },
    }
    
    // Set vertex shader
    this.vertexShader = `
      varying vec3 vNormal;
      varying vec3 vPosition;
      varying vec2 vUv;
      varying vec3 vWorldPosition;

      void main() {
        vPosition = position;
        vNormal = normalize(normalMatrix * normal);
        vUv = uv;
        vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `
    
    // Set fragment shader
    this.fragmentShader = `
      uniform vec3 uSkinColor;
      uniform vec3 uHairColor;
      uniform vec3 uEyeColor;
      uniform vec3 uClothingColor;
      uniform float uTime;
      uniform vec4 uEmotions;
      uniform float uWetness;
      uniform vec3 uCameraPosition;
      uniform vec3 uWorldPosition;
      uniform float uAgeGroup;
      uniform float uDiaperState;
      uniform vec3 uLightDirection;
      uniform float uAmbientLight;
      uniform float uDiffuseLight;

      varying vec3 vNormal;
      varying vec3 vPosition;
      varying vec2 vUv;
      varying vec3 vWorldPosition;

      // Simple noise function for texture variation
      float noise(vec2 p) {
        return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
      }

      void main() {
        vec3 normal = normalize(vNormal);

        // Lighting calculation
        vec3 lightDir = normalize(uLightDirection);
        float diffuse = max(dot(normal, lightDir), 0.0);
        float ambient = uAmbientLight;
        
        // Camera-based rim lighting
        vec3 viewDir = normalize(uCameraPosition - vWorldPosition);
        float rim = 1.0 - max(dot(normal, viewDir), 0.0);
        rim = smoothstep(0.0, 1.0, rim) * 0.2;

        // Color selection based on UV coordinates and emotions
        vec3 baseColor;
        float emotionIntensity = uEmotions.x * 0.3 + uEmotions.y * 0.2 + uEmotions.z * 0.2 + uEmotions.w * 0.3;

        if (vUv.y > 0.7) {
          // Hair area
          baseColor = uHairColor;
          // Add emotion-based hair variation
          baseColor += vec3(uEmotions.z * 0.1, -uEmotions.y * 0.1, 0.0);
        } else if (vUv.y > 0.5) {
          // Skin area
          baseColor = uSkinColor;
          // Add wetness effect
          if (uWetness > 0.0) {
            baseColor = mix(baseColor, vec3(0.7, 0.8, 1.0), uWetness * 0.3);
          }
          // Add emotion-based skin variation
          baseColor += vec3(uEmotions.x * 0.05, -uEmotions.y * 0.05, 0.0);
        } else {
          // Clothing area
          baseColor = uClothingColor;
          // Diaper state affects color
          if (uDiaperState > 0.0) {
            baseColor = mix(baseColor, vec3(0.6, 0.8, 1.0), uDiaperState * 0.2);
          }
        }

        // Age group affects overall brightness
        baseColor *= uAgeGroup;

        // Add subtle texture variation
        float textureNoise = noise(vUv * 10.0 + uTime * 0.1);
        baseColor *= (0.95 + textureNoise * 0.1);

        // Apply emotion intensity
        baseColor *= (1.0 + emotionIntensity * 0.1);

        // Apply lighting
        vec3 litColor = baseColor * (ambient + diffuse * uDiffuseLight) + rim;

        // Add subtle fresnel effect
        float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 3.0);
        litColor += fresnel * 0.1;

        gl_FragColor = vec4(litColor, 1.0);
      }
    `
    
    this.transparent = false
    this.depthWrite = true
    this.depthTest = true
    this.side = 2 // Double-sided
  }
  
  private getAgeGroupMultiplier(ageGroup: string): number {
    switch (ageGroup) {
      case '1-4': return 0.6
      case '4-7': return 0.75
      case '7-9': return 0.85
      case '12+': return 1.0
      default: return 0.8
    }
  }
  
  private getDiaperStateValue(state: string): number {
    switch (state) {
      case 'clean': return 0.0
      case 'wet': return 1.0
      case 'messy': return 2.0
      case 'both': return 3.0
      default: return 0.0
    }
  }
  
  updateTime(time: number) {
    this.uniforms.uTime.value = time
  }

  updateEmotions(emotions: CharacterShaderOptions['emotions']) {
    this.uniforms.uEmotions.value = [
      emotions?.happiness || 0,
      emotions?.sadness || 0,
      emotions?.anger || 0,
      emotions?.surprise || 0
    ]
  }

  updateWetness(wetness: number) {
    this.uniforms.uWetness.value = wetness
  }

  updateCameraPosition(position: Vector3) {
    this.uniforms.uCameraPosition.value.copy(position)
  }

  updateWorldPosition(position: Vector3) {
    this.uniforms.uWorldPosition.value.copy(position)
  }

  // Additional methods for better shader management
  dispose() {
    super.dispose()
  }

  clone(): this {
    const cloned = new CharacterShaderMaterial({
      skinColor: `#${this.uniforms.uSkinColor.value.getHexString()}`,
      hairColor: `#${this.uniforms.uHairColor.value.getHexString()}`,
      eyeColor: `#${this.uniforms.uEyeColor.value.getHexString()}`,
      clothingColor: `#${this.uniforms.uClothingColor.value.getHexString()}`,
      ageGroup: this.getAgeGroupFromMultiplier(this.uniforms.uAgeGroup.value),
      emotions: {
        happiness: this.uniforms.uEmotions.value[0],
        sadness: this.uniforms.uEmotions.value[1],
        anger: this.uniforms.uEmotions.value[2],
        surprise: this.uniforms.uEmotions.value[3]
      },
      wetness: this.uniforms.uWetness.value,
      diaperState: this.getDiaperStateFromValue(this.uniforms.uDiaperState.value)
    }) as this
    
    // Copy additional uniforms
    cloned.uniforms.uTime.value = this.uniforms.uTime.value
    cloned.uniforms.uCameraPosition.value.copy(this.uniforms.uCameraPosition.value)
    cloned.uniforms.uWorldPosition.value.copy(this.uniforms.uWorldPosition.value)
    cloned.uniforms.uLightDirection.value.copy(this.uniforms.uLightDirection.value)
    cloned.uniforms.uAmbientLight.value = this.uniforms.uAmbientLight.value
    cloned.uniforms.uDiffuseLight.value = this.uniforms.uDiffuseLight.value
    
    return cloned
  }

  private getAgeGroupFromMultiplier(multiplier: number): string {
    switch (multiplier) {
      case 0.6: return '1-4'
      case 0.75: return '4-7'
      case 0.85: return '7-9'
      case 1.0: return '12+'
      default: return '4-7'
    }
  }

  private getDiaperStateFromValue(value: number): 'clean' | 'wet' | 'messy' | 'both' {
    switch (value) {
      case 0.0: return 'clean'
      case 1.0: return 'wet'
      case 2.0: return 'messy'
      case 3.0: return 'both'
      default: return 'clean'
    }
  }
}