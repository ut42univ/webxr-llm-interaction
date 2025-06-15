"use client";

import React from "react";
import { Box } from "@/components/xr/common/Box";
import { Sphere } from "@/components/xr/common/Sphere";
import { Handle } from "@react-three/handle";

export const InteractiveObjects: React.FC = () => {
  return (
    <>
      <Box position={[-4.0, 1.5, 0]} castShadow />
      <Box
        position={[4.0, 1.5, 0]}
        color="blue"
        hoverColor="lightblue"
        castShadow
      />
      <Handle>
        <Sphere
          position={[0, 1.0, 5]}
          color="orange"
          hoverColor="yellow"
          castShadow
        />
      </Handle>
    </>
  );
};
