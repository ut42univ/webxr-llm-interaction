import React from "react";
import { Html } from "@react-three/drei";
import { Skeleton } from "@/components/ui/skeleton";

export const EnvironmentFallback: React.FC = () => {
  return (
    <Html fullscreen>
      <div className="w-full h-full flex flex-col justify-center items-center bg-white">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Skeleton className="w-24 h-24" />
          <Skeleton className="w-24 h-24" />
          <Skeleton className="w-24 h-24" />
          <Skeleton className="w-24 h-24" />
        </div>
        <p className="text-xl font-medium">環境を読み込んでいます...</p>
      </div>
    </Html>
  );
};
