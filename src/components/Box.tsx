"use client";

import React, { useRef, useState } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

interface BoxProps {
  size?: number;
  color?: string;
  hoverColor?: string;
  [key: string]: any;
}

export const Box: React.FC<BoxProps> = ({
  size = 1,
  color = "red",
  hoverColor = "hotpink",
  ...props
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
      {...props}
      ref={meshRef}
      scale={active ? size * 1.5 : size}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[size, size, size]} />
      <meshPhysicalMaterial
        roughness={0}
        color={hovered ? hoverColor : color}
        envMapIntensity={0.2}
      />
    </mesh>
  );
};
