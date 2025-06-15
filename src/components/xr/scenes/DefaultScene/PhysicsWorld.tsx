"use client";

import React, { Suspense } from "react";
import { CuboidCollider, Physics, RigidBody } from "@react-three/rapier";
import { Sphere } from "@/components/xr/common/Sphere";

export const PhysicsWorld: React.FC = () => {
  return (
    <Suspense>
      <Physics>
        <RigidBody colliders={"hull"} restitution={1}>
          <Sphere position={[0, 2, -5]} color="olive" castShadow />
        </RigidBody>
        {/* 地面のコライダー */}
        <CuboidCollider position={[0, 0, 0]} args={[20, 0, 20]} />
      </Physics>
    </Suspense>
  );
};
