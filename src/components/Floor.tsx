import React from "react";

interface FloorProps {
  size?: [number, number];
  opacity?: number;
  [key: string]: any;
}

export const Floor: React.FC<FloorProps> = ({
  size = [100, 100],
  opacity = 0.4,
  ...props
}) => {
  return (
    <mesh
      receiveShadow
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, 0, 0]}
      {...props}
    >
      <planeGeometry args={size} />
      <shadowMaterial transparent opacity={opacity} />
    </mesh>
  );
};
