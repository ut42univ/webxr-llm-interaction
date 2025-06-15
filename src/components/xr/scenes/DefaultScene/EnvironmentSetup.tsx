"use client";

import React, { Suspense } from "react";
import { Environment, Sky } from "@react-three/drei";
import { EnvironmentFallback } from "@/components/xr/common/EnvironmentFallback";

export const EnvironmentSetup: React.FC = () => {
  return (
    <>
      <Suspense fallback={<EnvironmentFallback />}>
        <Environment
          files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/4k/roof_garden_4k.hdr"
          ground={{ height: 5, radius: 40, scale: 20 }}
        />
      </Suspense>
      <Sky inclination={1.0} />
    </>
  );
};
