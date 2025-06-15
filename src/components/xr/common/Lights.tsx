"use client";

import React from "react";
import { SoftShadows } from "@react-three/drei";

export const Lights: React.FC = () => {
  return (
    <>
      <SoftShadows size={15} focus={5} samples={5} />
      <directionalLight
        castShadow
        position={[4, 10, 4]}
        intensity={1.5}
        shadow-mapSize-width={512}
        shadow-mapSize-height={512}
      />
    </>
  );
};
