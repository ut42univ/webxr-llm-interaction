"use client";

import { NextPage } from "next";

const Loading: NextPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="w-full max-w-4xl space-y-8">
        {/* Loading indicator */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-2">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2"></div>
            <span>WebXR環境を準備中...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
