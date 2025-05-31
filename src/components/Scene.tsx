"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { Box } from "@/components/Box";

export const Scene: React.FC = () => {
  return (
    <Canvas className="!w-screen !h-screen">
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} color="blue" hoverColor="lightblue" />
    </Canvas>
  );
};
