"use client";

import type { NextPage } from "next";
import React from "react";
import { Scene } from "@/components/Scene";
import { createXRStore } from "@react-three/xr";

const store = createXRStore();

const HomePage: NextPage = () => {
  return (
    <>
      <button onClick={() => store.enterAR()}>Enter AR</button>
      <Scene />
    </>
  );
};

export default HomePage;
