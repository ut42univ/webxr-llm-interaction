"use client";

import React from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

export const Camera: React.FC = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 12]} fov={30} />
      <OrbitControls
        autoRotateSpeed={0.85}
        zoomSpeed={0.75}
        minPolarAngle={Math.PI / 2.5}
        maxPolarAngle={Math.PI / 2.55}
      />
    </>
  );
};
