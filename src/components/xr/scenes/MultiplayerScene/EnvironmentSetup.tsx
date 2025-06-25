"use client";

import React, { Suspense } from "react";
import { Sky } from "@react-three/drei";
import { EnvironmentFallback } from "@/components/xr/common/EnvironmentFallback";
import { LivingRoom } from "@/components/xr/scenes/MultiplayerScene/Room";

export const EnvironmentSetup: React.FC = () => {
  return (
    <>
      <Sky />
      <ambientLight />
      <Suspense fallback={<EnvironmentFallback />}>
        <LivingRoom />
      </Suspense>
    </>
  );
};
