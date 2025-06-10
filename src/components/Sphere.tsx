import { Shadow } from "@react-three/drei";
import { useState } from "react";

interface SphereProps {
  size?: number;
  color?: string;
  hoverColor?: string;
  [key: string]: any;
}

export const Sphere: React.FC<SphereProps> = ({
  size = 1,
  color = "white",
  hoverColor = "lightgray",
  ...props
}) => {
  const [hovered, setHover] = useState(false);

  return (
    <mesh
      {...props}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <sphereGeometry args={[size, 64, 64]} />
      <meshPhysicalMaterial
        roughness={0}
        color={hovered ? hoverColor : color}
        envMapIntensity={0.2}
      />
      <Shadow
        rotation={[-Math.PI / 2, 0, 0]}
        scale={size * 1.5}
        position={[0, -size, 0]}
        color="black"
        opacity={1}
      />
    </mesh>
  );
};
