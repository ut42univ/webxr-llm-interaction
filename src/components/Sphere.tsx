import { Shadow } from "@react-three/drei";

interface SphereProps {
  size?: number;
  amount?: number;
  color?: string;
  emissive?: string;
  [key: string]: any;
}

export const Sphere: React.FC<SphereProps> = ({
  size = 1,
  amount = 50,
  color = "white",
  ...props
}) => (
  <mesh {...props}>
    <sphereGeometry args={[size, 64, 64]} />
    <meshPhysicalMaterial roughness={0} color={color} envMapIntensity={0.2} />
    <Shadow
      rotation={[-Math.PI / 2, 0, 0]}
      scale={size * 1.5}
      position={[0, -size, 0]}
      color="black"
      opacity={1}
    />
  </mesh>
);
