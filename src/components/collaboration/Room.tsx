"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { LoadingFallback } from "@/components/collaboration/LoadingFallback";

export function Room({
  children,
  roomId,
}: {
  children: ReactNode;
  roomId: string;
}) {
  const PUBLIC_API_KEY: string =
    process.env.NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY || "";

  return (
    <LiveblocksProvider publicApiKey={PUBLIC_API_KEY}>
      <RoomProvider
        id={roomId}
        initialPresence={{ username: "Anonymous", cursor: null }}
      >
        <ClientSideSuspense fallback={<LoadingFallback />}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}
