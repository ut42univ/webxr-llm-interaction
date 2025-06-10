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
      shadows
      className="!w-screen !h-screen"
      camera={{ position: [0, 0, 12], fov: 30 }}
    >
      <XR store={store}>
        <hemisphereLight intensity={0.5} color="white" groundColor="black" />
        <directionalLight
          castShadow
          position={[5, 10, 5]}
          intensity={1.0}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <Suspense fallback={<EnvironmentFallback />}>
          <Environment
            files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/4k/roof_garden_4k.hdr"
            ground={{ height: 5, radius: 40, scale: 20 }}
          />
        </Suspense>

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

        {/* 影を受けるための地面 */}
        <mesh
          receiveShadow
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, 0, 0]}
        >
          <planeGeometry args={[100, 100]} />
          <shadowMaterial opacity={0.6} />
        </mesh>

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
