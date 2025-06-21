"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";

export function Room({
  children,
  roomId,
}: {
  children: ReactNode;
  roomId: string;
}) {
  const PUBLIC_API_KEY: string =
    process.env.NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_API_KEY || "";

  return (
    <LiveblocksProvider publicApiKey={PUBLIC_API_KEY}>
      <RoomProvider id={roomId}>
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}
