"use client";

import { useRef, useState, useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { KeyboardControls, useKeyboardControls } from "@react-three/drei";
import Ecctrl from "ecctrl";
import type { ReactNode } from "react";

import { useGameStore } from "@/lib/stores/gameStore";
import { getAgeGroupScale } from "@/lib/types/gameTypes";
import type { Player } from "@/lib/types/gameTypes";

import { CustomCharacterModel } from "./models/CustomCharacterModel";
import type { CharacterAnimation } from "./animations/CharacterAnimationSystem";

interface PlayerControllerProps {
  player: Player;
  isLocalPlayer: boolean;
}

export function PlayerController({
  player,
  isLocalPlayer,
}: PlayerControllerProps) {
  const groupRef = useRef<any>(null);
  const { camera } = useThree();

  const updatePlayer = useGameStore((s) => s.updatePlayer);
  const scale = getAgeGroupScale(player.character.ageGroup);

  const [currentAnimation, setCurrentAnimation] =
    useState<CharacterAnimation>("idle");

  const [emotions, setEmotions] = useState({
    happiness: 0.5,
    sadness: 0,
    anger: 0,
    surprise: 0,
  });

  const [, getKeys] = useKeyboardControls();

  useEffect(() => {
    updatePlayer(player.id, { currentAnimation });
  }, [currentAnimation, player.id, updatePlayer]);

  return (
        <Ecctrl>
          <group ref={groupRef} scale={scale}>
            <CustomCharacterModel
              customization={player.character}
              clothing={player.clothing}
              position={[0, 0, 0]}
              scale={1}
              currentAnimation={currentAnimation}
              emotions={emotions}
              isAnimated
            />

            <NameTag
              name={player.name}
              alignment={player.alignment}
            />

            <NeedIndicators player={player} />
            <EmotionIndicators emotions={emotions} />

            {process.env.NODE_ENV === "development" && (
              <mesh position={[0, 3, 0]}>
                <planeGeometry args={[2, 0.5]} />
                <meshBasicMaterial
                  color="#000"
                  transparent
                  opacity={0.7}
                />
              </mesh>
            )}
          </group>
        </Ecctrl>
  );
}

/* ----------------------------- */
/* UI Subcomponents              */
/* ----------------------------- */

function NameTag({
  name,
  alignment,
}: {
  name: string;
  alignment: Player["alignment"];
}) {
  const getAlignmentColor = (a: Player["alignment"]) => {
    switch (a) {
      case "little_angel":
        return "#FFD700";
      case "good_boy_girl":
        return "#90EE90";
      case "boy_girl":
        return "#87CEEB";
      case "bad_boy_girl":
        return "#FFA500";
      case "little_shit":
        return "#FF6347";
      default:
        return "#FFFFFF";
    }
  };

  return (
    <group position={[0, 2.2, 0]}>
      <mesh>
        <planeGeometry args={[1.5, 0.4]} />
        <meshBasicMaterial
          color={getAlignmentColor(alignment)}
          transparent
          opacity={0.9}
        />
      </mesh>
    </group>
  );
}

function NeedIndicators({ player }: { player: Player }) {
  const { needs } = player;

  return (
    <group position={[0, 2.5, 0]}>
      {needs.bladder > 80 && (
        <mesh position={[-0.3, 0, 0]}>
          <sphereGeometry args={[0.08]} />
          <meshBasicMaterial color="#FFD700" />
        </mesh>
      )}

      {needs.bowel > 80 && (
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.08]} />
          <meshBasicMaterial color="#8B4513" />
        </mesh>
      )}

      {needs.hunger > 80 && (
        <mesh position={[0.3, 0, 0]}>
          <sphereGeometry args={[0.08]} />
          <meshBasicMaterial color="#FF6347" />
        </mesh>
      )}
    </group>
  );
}

function EmotionIndicators({
  emotions,
}: {
  emotions: {
    happiness: number;
    sadness: number;
    anger: number;
    surprise: number;
  };
}) {
  const indicators: ReactNode[] = [];

  if (emotions.happiness > 0.7) {
    indicators.push(
      <mesh key="happy" position={[-0.4, 0.3, 0]}>
        <sphereGeometry args={[0.06]} />
        <meshBasicMaterial color="#FFD700" />
      </mesh>
    );
  }

  if (emotions.sadness > 0.5) {
    indicators.push(
      <mesh key="sad" position={[-0.2, 0.3, 0]}>
        <sphereGeometry args={[0.06]} />
        <meshBasicMaterial color="#87CEEB" />
      </mesh>
    );
  }

  if (emotions.anger > 0.5) {
    indicators.push(
      <mesh key="angry" position={[0, 0.3, 0]}>
        <sphereGeometry args={[0.06]} />
        <meshBasicMaterial color="#FF6347" />
      </mesh>
    );
  }

  if (emotions.surprise > 0.5) {
    indicators.push(
      <mesh key="surprised" position={[0.2, 0.3, 0]}>
        <sphereGeometry args={[0.06]} />
        <meshBasicMaterial color="#DDA0DD" />
      </mesh>
    );
  }

  return indicators.length ? (
    <group position={[0, 2.8, 0]}>{indicators}</group>
  ) : null;
}
