"use client";

import { Floor } from "@/components/xr/common/Floor";
import { Lights } from "@/components/xr/common/Lights";
import { Room } from "@/components/xr/scenes/MultiplayerScene/Room";
import { store } from "@/lib/xr-store";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
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

        <PerspectiveCamera makeDefault position={[-5, 5, 5]} fov={45} />
        <OrbitControls />

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
