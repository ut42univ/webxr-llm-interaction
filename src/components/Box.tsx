"use client";

import React, { useRef, useState } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

interface BoxProps {
  position?: [number, number, number];
  color?: string;
  hoverColor?: string;
}

export const Box: React.FC<BoxProps> = ({
  position = [0, 0, 0],
  color = "red",
  hoverColor = "hotpink",
}) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? hoverColor : color} />
    </mesh>
  );
};
