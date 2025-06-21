import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const LoadingFallback: React.FC = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-neutral-800">
      <div className="grid grid-cols-2 gap-4 mb-6">
        <Skeleton className="w-24 h-24" />
        <Skeleton className="w-24 h-24" />
        <Skeleton className="w-24 h-24" />
        <Skeleton className="w-24 h-24" />
      </div>
      <p className="text-xl font-medium text-white">
        ルームに参加しています...
      </p>
    </div>
  );
};
