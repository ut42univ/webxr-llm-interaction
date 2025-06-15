"use client";

import type { NextPage } from "next";
import React from "react";
import { DefaultScene } from "@/components/xr/scenes/DefaultScene/DefaultScene";
import { Button } from "@/components/ui/button";
import { RectangleGoggles } from "lucide-react";
import { store } from "@/lib/xr-store";

const HomePage: NextPage = () => {
  return (
    <div>
      <Button
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-10"
        onClick={() => store.enterVR()}
      >
        <RectangleGoggles />
        没入モードに移行
      </Button>
      <DefaultScene />
    </div>
  );
};

export default HomePage;
