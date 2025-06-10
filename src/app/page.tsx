"use client";

import type { NextPage } from "next";
import React from "react";
import { Scene, store } from "@/components/Scene";

const HomePage: NextPage = () => {
  return (
    <div>
      <button onClick={() => store.enterVR()} />
      <Scene />
    </div>
  );
};

export default HomePage;
