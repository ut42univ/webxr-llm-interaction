"use client";

import { Floor } from "@/components/xr/common/Floor";
import { Lights } from "@/components/xr/common/Lights";
import { Sphere } from "@/components/xr/common/Sphere";
import { EnvironmentSetup } from "@/components/xr/scenes/MultiplayerScene/EnvironmentSetup";
import { store } from "@/lib/xr-store";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { TeleportTarget, XR, XROrigin } from "@react-three/xr";
import { useState } from "react";
import { Vector3 } from "three";

export const MultiplayerScene: React.FC = () => {
  const [position, setPosition] = useState(new Vector3(-2, 0, 0));
  return (
    <Canvas shadows className="!fixed !w-screen !h-screen">
      <XR store={store}>
        <XROrigin position={position} />

        <PerspectiveCamera makeDefault position={[-5, 5, 5]} fov={45} />
        <OrbitControls />

        <Lights />
        <EnvironmentSetup />

        <TeleportTarget onTeleport={setPosition}>
          <Floor size={[5, 5]} />
        </TeleportTarget>
      </XR>
    </Canvas>
  );
};
