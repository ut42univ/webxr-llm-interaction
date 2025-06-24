"use client";

import type { NextPage } from "next";
import React from "react";
import { DefaultScene } from "@/components/xr/scenes/DefaultScene/DefaultScene";
import { VREntry } from "@/components/ui/VREntry";

const XRPage: NextPage = () => {
  return (
    <div>
      <VREntry />
      <DefaultScene />
    </div>
  );
};

export default XRPage;
