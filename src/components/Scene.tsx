"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Box } from "@/components/Box";
import { createXRStore, XR } from "@react-three/xr";
import {
  Environment,
  OrbitControls,
  SoftShadows,
  Sky,
} from "@react-three/drei";
import { Sphere } from "@/components/Sphere";
import { EnvironmentFallback } from "@/components/EnvironmentFallback";
import { Floor } from "@/components/Floor";

export const store = createXRStore();

export const Scene: React.FC = () => {
  return (
    <Canvas
      shadows
      className="!w-screen !h-screen"
      camera={{ position: [0, 0, 12], fov: 30 }}
    >
      <XR store={store}>
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

        <Floor />

        <OrbitControls
          autoRotateSpeed={0.85}
          zoomSpeed={0.75}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 2.55}
        />
      </XR>
    </Canvas>
  );
};
