"use client";

import { Cursor } from "@/components/ui/Cursor";
import { Button } from "@/components/ui/button";
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
    <div className="min-h-screen w-full bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        {/* ヘッダーカード */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h1 className="text-3xl font-semibold text-gray-900 mb-3">
            共同編集スペース（デモ）
          </h1>
          <div className="flex items-center gap-4 text-gray-600">
            <span className="text-lg">
              <span className="text-green-500">⚫︎</span>
              {userCount + 1} 名のユーザがオンラインです
            </span>
            <span className="text-sm">
              あなたの表示名: {myPresence.username || "Anonymous"}
            </span>
          </div>
        </div>

        {/* 名前変更カード */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex gap-3 items-center justify-center">
            <input
              type="text"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
              placeholder="新しい表示名を入力"
              className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Button onClick={handleUsernameChange} className="px-6">
              更新
            </Button>
          </div>
        </div>

        {/* カーソル表示エリア */}
        <div className="bg-white rounded-lg shadow-sm p-4">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            他のユーザのカーソル位置
          </h2>
          <div
            className="relative h-96 w-full bg-gray-50 border border-gray-200 rounded-lg cursor-crosshair"
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
          >
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
      </div>
    </div>
  );
};
