"use client";

import React from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

export const Camera: React.FC = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 12]} fov={30} />
      <OrbitControls />
    </>
  );
};
