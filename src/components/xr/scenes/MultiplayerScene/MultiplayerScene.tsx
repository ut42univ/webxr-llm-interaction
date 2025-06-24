"use client";

import { Camera } from "@/components/xr/common/Camera";
import { Lights } from "@/components/xr/common/Lights";
import { Room } from "@/components/xr/scenes/MultiplayerScene/Room";
import { store } from "@/lib/xr-store";
import { Sky, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { TeleportTarget, XR, XROrigin } from "@react-three/xr";
import { useState } from "react";
import { Vector3 } from "three";

export const MultiplayerScene: React.FC = () => {
  const [position, setPosition] = useState(new Vector3());
  return (
    <Canvas shadows className="!fixed !w-screen !h-screen">
      <XR store={store}>
        <XROrigin position={position} />

        <Stats />

        <Camera />
        <Lights />

        <Sky sunPosition={[100, 20, 100]} />
        <Room />

        <TeleportTarget onTeleport={setPosition}>
          <mesh
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, 0, 0]}
          >
            <planeGeometry args={[100, 100]} />
            <shadowMaterial transparent opacity={0.4} />
          </mesh>
        </TeleportTarget>
      </XR>
    </Canvas>
  );
};
