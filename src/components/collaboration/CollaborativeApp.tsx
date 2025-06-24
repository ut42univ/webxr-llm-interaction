"use client";

import { Cursor } from "@/components/collaboration/Cursor.";
import { useMyPresence, useOthers } from "@liveblocks/react/suspense";
import { PointerEvent } from "react";
import { useState } from "react";

export const CollaborativeApp = () => {
  const [myPresence, updateMyPresence] = useMyPresence();
  const others = useOthers();
  const userCount = others.length;
  const [newUsername, setNewUsername] = useState("");

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cursor = {
      x: Math.floor(e.clientX - rect.left),
      y: Math.floor(e.clientY - rect.top),
    };
    updateMyPresence({ cursor });
  };

  const handlePointerLeave = () => {
    updateMyPresence({ cursor: null });
  };

  const handleUsernameChange = () => {
    if (newUsername.trim()) {
      updateMyPresence({ username: newUsername.trim() });
      setNewUsername("");
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">同時接続確認</h1>
        <p className="text-2xl text-gray-600">
          現在 {userCount} 人のユーザーがこのルームに接続しています。
        </p>
        <p className="text-lg text-gray-500 mt-2">
          あなたの名前: {myPresence.username || "Anonymous"}
        </p>

        {/* 名前変更セクション */}
        <div className="mt-4 mb-4 flex flex-col items-center gap-2">
          <div className="flex gap-2 items-center">
            <input
              type="text"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
              placeholder="新しい名前を入力"
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleUsernameChange();
                }
              }}
            />
            <button
              onClick={handleUsernameChange}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              変更
            </button>
          </div>
        </div>

        <p className="text-lg text-gray-500 mt-2">参加しているユーザー:</p>
        <ul className="list-disc list-inside text-lg text-gray-500 mt-2">
          {others.map(({ connectionId, presence }) => (
            <li key={connectionId}>
              {presence.username || "Anonymous"} (ID: {connectionId})
            </li>
          ))}
        </ul>
      </div>

      <div
        className="relative h-64 w-3xl border-2 border-gray-300 rounded-lg"
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        Cursor: {JSON.stringify(myPresence.cursor)}
        {others
          .filter((other) => other.presence.cursor !== null)
          .map(({ connectionId, presence }) => (
            <Cursor
              key={connectionId}
              username={presence.username}
              x={presence.cursor!.x}
              y={presence.cursor!.y}
            />
          ))}
      </div>
    </div>
  );
};
