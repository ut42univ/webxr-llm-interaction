"use client";

import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { TeleportTarget, XR, XROrigin } from "@react-three/xr";
import { Stats } from "@react-three/drei";
import { Floor } from "@/components/xr/common/Floor";
import { Vector3 } from "three";
import { store } from "@/lib/xr-store";
import { Lights } from "@/components/xr/common/Lights";
import { Camera } from "@/components/xr/common/Camera";
import { EnvironmentSetup } from "@/components/xr/scenes/DefaultScene/EnvironmentSetup";
import { InteractiveObjects } from "@/components/xr/scenes/DefaultScene/InteractiveObjects";
import { PhysicsWorld } from "@/components/xr/scenes/DefaultScene/PhysicsWorld";

export const DefaultScene: React.FC = () => {
  const [position, setPosition] = useState(new Vector3());

  return (
    <Canvas shadows className="!fixed !w-screen !h-screen">
      <XR store={store}>
        <XROrigin position={position} />
        <Stats />
        <Camera />
        <Lights />
        <EnvironmentSetup />

        <TeleportTarget onTeleport={setPosition}>
          <Floor />
        </TeleportTarget>

        <InteractiveObjects />
        <PhysicsWorld />
      </XR>
    </Canvas>
  );
};
