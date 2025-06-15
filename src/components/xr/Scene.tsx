"use client";

import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Box } from "@/components/xr/Box";
import { createXRStore, TeleportTarget, XR, XROrigin } from "@react-three/xr";
import {
  Environment,
  OrbitControls,
  SoftShadows,
  Sky,
  Stats,
  PerspectiveCamera,
} from "@react-three/drei";
import { Sphere } from "@/components/xr/Sphere";
import { EnvironmentFallback } from "@/components/xr/EnvironmentFallback";
import { Floor } from "@/components/xr/Floor";
import { CuboidCollider, Physics, RigidBody } from "@react-three/rapier";
import { Vector3 } from "three";

export const store = createXRStore({
  hand: { teleportPointer: true },
  controller: { teleportPointer: true },
});

export const Scene: React.FC = () => {
  const [position, setPosition] = useState(new Vector3());

  return (
    <Canvas shadows className="!fixed !w-screen !h-screen">
      <XR store={store}>
        <XROrigin position={position} />
        <Stats />
        <PerspectiveCamera makeDefault position={[0, 0, 12]} fov={30} />
        <OrbitControls
          autoRotateSpeed={0.85}
          zoomSpeed={0.75}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 2.55}
        />
        <SoftShadows size={15} focus={5} samples={5} />
        <directionalLight
          castShadow
          position={[4, 10, 4]}
          intensity={1.5}
          shadow-mapSize-width={512}
          shadow-mapSize-height={512}
        />
        <Suspense fallback={<EnvironmentFallback />}>
          <Environment
            files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/4k/roof_garden_4k.hdr"
            ground={{ height: 5, radius: 40, scale: 20 }}
          />
        </Suspense>

        <Sky inclination={1.0} />
        <TeleportTarget onTeleport={setPosition}>
          <Floor />
        </TeleportTarget>

        <Box position={[-4.0, 1.5, 0]} castShadow />
        <Box
          position={[4.0, 1.5, 0]}
          color="blue"
          hoverColor="lightblue"
          castShadow
        />

        <Sphere
          position={[0, 1.0, 0]}
          color="orange"
          hoverColor="yellow"
          castShadow
        />

        {/* 物理法則テスト*/}
        <Suspense>
          <Physics>
            <RigidBody colliders={"hull"} restitution={1}>
              <Sphere position={[0, 2, -5]} color="olive" castShadow />
            </RigidBody>

            {/* 地面のコライダー */}
            <CuboidCollider position={[0, 0, 0]} args={[20, 0, 20]} />
          </Physics>
        </Suspense>
      </XR>
    </Canvas>
  );
};
