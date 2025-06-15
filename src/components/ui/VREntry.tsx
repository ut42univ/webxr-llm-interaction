"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { RectangleGoggles, AlertTriangle } from "lucide-react";
import { store } from "@/lib/xr-store";
import { Alert, AlertTitle } from "@/components/ui/alert";

export const VREntry: React.FC = () => {
  const [isVRCapable, setIsVRCapable] = useState(true);
  const [checkingVR, setCheckingVR] = useState(true);

  useEffect(() => {
    const checkVRSupport = async () => {
      if (navigator.xr) {
        try {
          const supported = await navigator.xr.isSessionSupported(
            "immersive-vr"
          );
          setIsVRCapable(supported);
        } catch (e) {
          console.error("Error checking VR support:", e);
          setIsVRCapable(false);
        }
      } else {
        setIsVRCapable(false);
      }
      setCheckingVR(false);
    };
    checkVRSupport();
  }, []);

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center">
      {!checkingVR && !isVRCapable && (
        <Alert variant="destructive" className="mb-2">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>
            お使いのデバイスは没入モードに対応していません。
          </AlertTitle>
        </Alert>
      )}
      <Button
        onClick={() => store.enterVR()}
        disabled={!isVRCapable || checkingVR}
        aria-disabled={!isVRCapable || checkingVR}
      >
        <RectangleGoggles className="mr-2" />
        {checkingVR
          ? "対応状況を確認中..."
          : isVRCapable
          ? "没入モードに移行"
          : "没入モード非対応"}
      </Button>
    </div>
  );
};
