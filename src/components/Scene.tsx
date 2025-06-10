"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { Box } from "@/components/Box";
import { createXRStore, XR } from "@react-three/xr";

export const store = createXRStore();

export const Scene: React.FC = () => {
  return (
    <Canvas className="!w-screen !h-screen">
      <XR store={store}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} color="blue" hoverColor="lightblue" />
      </XR>
    </Canvas>
  );
};
