"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Box } from "@/components/Box";
import { createXRStore, XR } from "@react-three/xr";
import { Environment, OrbitControls } from "@react-three/drei";
import { Sphere } from "@/components/Sphere";
import { EnvironmentFallback } from "@/components/EnvironmentFallback";

export const store = createXRStore();

export const Scene: React.FC = () => {
  return (
    <Canvas
      className="!w-screen !h-screen"
      camera={{ position: [0, 0, 12], fov: 30 }}
    >
      <XR store={store}>
        <hemisphereLight intensity={0.5} color="white" groundColor="black" />
        <Suspense fallback={<EnvironmentFallback />}>
          <Environment
            files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/4k/roof_garden_4k.hdr"
            ground={{ height: 5, radius: 40, scale: 20 }}
          />
        </Suspense>

        <Box position={[-4.0, 1.5, 0]} />
        <Box position={[4.0, 1.5, 0]} color="blue" hoverColor="lightblue" />

        <Sphere position={[0, 1.0, 0]} color="orange" />

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
