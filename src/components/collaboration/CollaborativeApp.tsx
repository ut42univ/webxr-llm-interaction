"use client";

import { useOthers } from "@liveblocks/react/suspense";

export function CollaborativeApp() {
  const others = useOthers();
  const userCount = others.length;
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">同時接続確認</h1>
        <p className="text-2xl text-gray-600">
          現在 {userCount} 人のユーザーがこのルームに接続しています。
        </p>
        　
      </div>
    </div>
  );
}
