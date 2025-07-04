/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: ChristyHsu (https://sketchfab.com/ida61xq)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/dining-room-kichen-baked-4831c2ce6a0044d9bee9eacefcc0f2bd
Title: Dining room | Kichen baked
*/

import * as THREE from "three";
import React, { JSX } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    house_Material009_0: THREE.Mesh;
    cabinet_Material015_0: THREE.Mesh;
    window_Material016_0: THREE.Mesh;
    table_Material5001_0: THREE.Mesh;
    floor_floor_0: THREE.Mesh;
    jar4_Material017_0: THREE.Mesh;
    jar3_Material002_0: THREE.Mesh;
    vase_grey001_0: THREE.Mesh;
    faucet_Material006_0: THREE.Mesh;
    bowl_grey_0: THREE.Mesh;
    painting_Material010_0: THREE.Mesh;
    painting_Material011_0: THREE.Mesh;
    candle_Material013_0: THREE.Mesh;
    candle_Material008_0: THREE.Mesh;
    candle_Material007_0: THREE.Mesh;
    flower_leaf2_0: THREE.Mesh;
    flower_leaf1_0: THREE.Mesh;
    lighting_Material001_0: THREE.Mesh;
    lighting_Material003_0: THREE.Mesh;
    lighting_Material014_0: THREE.Mesh;
    IKEA_seat_wood__0: THREE.Mesh;
    carpet_Carpet__0: THREE.Mesh;
    chopping_board1_Material1_0: THREE.Mesh;
    chopping_board2_Material2_0: THREE.Mesh;
    jar1_Material3_0: THREE.Mesh;
    jar2_Material4_0: THREE.Mesh;
    seat_Leather_0: THREE.Mesh;
    seat_Material5_0: THREE.Mesh;
  };
  materials: {
    ["Material.009"]: THREE.MeshStandardMaterial;
    ["Material.015"]: THREE.MeshStandardMaterial;
    ["Material.016"]: THREE.MeshStandardMaterial;
    ["Material5.001"]: THREE.MeshStandardMaterial;
    floor: THREE.MeshStandardMaterial;
    ["Material.017"]: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
    ["grey.001"]: THREE.MeshStandardMaterial;
    ["Material.006"]: THREE.MeshStandardMaterial;
    grey: THREE.MeshStandardMaterial;
    ["Material.010"]: THREE.MeshStandardMaterial;
    ["Material.011"]: THREE.MeshStandardMaterial;
    ["Material.013"]: THREE.MeshStandardMaterial;
    ["Material.008"]: THREE.MeshStandardMaterial;
    ["Material.007"]: THREE.MeshStandardMaterial;
    leaf2: THREE.MeshStandardMaterial;
    leaf1: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
    ["Material.003"]: THREE.MeshStandardMaterial;
    ["Material.014"]: THREE.MeshStandardMaterial;
    wood: THREE.MeshStandardMaterial;
    Carpet: THREE.MeshStandardMaterial;
    Material1: THREE.MeshStandardMaterial;
    Material2: THREE.MeshStandardMaterial;
    Material3: THREE.MeshStandardMaterial;
    Material4: THREE.MeshStandardMaterial;
    Leather: THREE.MeshStandardMaterial;
    Material5: THREE.MeshStandardMaterial;
  };
};

export const LivingRoom: React.FC = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(
    "/models/living-room.glb"
  ) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="3ea9d54983ef41049c8c29b9d6d4440afbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="RootNode">
              <group
                name="house"
                position={[0, 151.309, -0.282]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[396.176, 396.176, 150]}
              >
                <mesh
                  name="house_Material009_0"
                  receiveShadow
                  geometry={nodes.house_Material009_0.geometry}
                  material={materials["Material.009"]}
                />
              </group>
              <group
                name="cabinet"
                position={[367.527, 300.186, 45.941]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[34.407, 249.171, 3.605]}
              >
                <mesh
                  name="cabinet_Material015_0"
                  receiveShadow
                  geometry={nodes.cabinet_Material015_0.geometry}
                  material={materials["Material.015"]}
                />
              </group>
              <group name="window" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                  name="window_Material016_0"
                  receiveShadow
                  geometry={nodes.window_Material016_0.geometry}
                  material={materials["Material.016"]}
                />
              </group>
              <group
                name="table"
                position={[83.1, 65.739, 24.667]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[80.747, 80.747, 10.763]}
              >
                <mesh
                  name="table_Material5001_0"
                  receiveShadow
                  geometry={nodes.table_Material5001_0.geometry}
                  material={materials["Material5.001"]}
                />
              </group>
              <group name="floor" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                  name="floor_floor_0"
                  receiveShadow
                  geometry={nodes.floor_floor_0.geometry}
                  material={materials.floor}
                />
              </group>
              <group
                name="jar4"
                position={[377.036, 94.34, 219.292]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={7.771}
              >
                <mesh
                  name="jar4_Material017_0"
                  receiveShadow
                  geometry={nodes.jar4_Material017_0.geometry}
                  material={materials["Material.017"]}
                />
              </group>
              <group
                name="jar3"
                position={[383.419, 94.983, 239.01]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={8.337}
              >
                <mesh
                  name="jar3_Material002_0"
                  receiveShadow
                  geometry={nodes.jar3_Material002_0.geometry}
                  material={materials["Material.002"]}
                />
              </group>
              <group
                name="vase"
                position={[85.258, 86.332, 64.115]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={8.337}
              >
                <mesh
                  name="vase_grey001_0"
                  receiveShadow
                  geometry={nodes.vase_grey001_0.geometry}
                  material={materials["grey.001"]}
                />
              </group>
              <group
                name="faucet"
                position={[392.071, 95.046, 141.652]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[0.204, 0.204, 1.555]}
              >
                <mesh
                  name="faucet_Material006_0"
                  receiveShadow
                  geometry={nodes.faucet_Material006_0.geometry}
                  material={materials["Material.006"]}
                />
              </group>
              <group
                name="bowl"
                position={[372.827, 99.081, 270.913]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[16.524, 16.524, 12.674]}
              >
                <mesh
                  name="bowl_grey_0"
                  receiveShadow
                  geometry={nodes.bowl_grey_0.geometry}
                  material={materials.grey}
                />
              </group>
              <group
                name="painting"
                position={[388.469, 117.552, -211.434]}
                rotation={[-Math.PI / 2, 0.148, 0]}
                scale={[2.712, 31.279, 31.279]}
              >
                <mesh
                  name="painting_Material010_0"
                  receiveShadow
                  geometry={nodes.painting_Material010_0.geometry}
                  material={materials["Material.010"]}
                />
                <mesh
                  name="painting_Material011_0"
                  receiveShadow
                  geometry={nodes.painting_Material011_0.geometry}
                  material={materials["Material.011"]}
                />
              </group>
              <group
                name="candle"
                position={[366.217, 115.97, -143.771]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={3.789}
              >
                <mesh
                  name="candle_Material013_0"
                  receiveShadow
                  geometry={nodes.candle_Material013_0.geometry}
                  material={materials["Material.013"]}
                />
                <mesh
                  name="candle_Material008_0"
                  receiveShadow
                  geometry={nodes.candle_Material008_0.geometry}
                  material={materials["Material.008"]}
                />
                <mesh
                  name="candle_Material007_0"
                  receiveShadow
                  geometry={nodes.candle_Material007_0.geometry}
                  material={materials["Material.007"]}
                />
              </group>
              <group
                name="flower"
                position={[85.821, 88.279, 64.486]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              >
                <mesh
                  name="flower_leaf2_0"
                  receiveShadow
                  geometry={nodes.flower_leaf2_0.geometry}
                  material={materials.leaf2}
                />
                <mesh
                  name="flower_leaf1_0"
                  receiveShadow
                  geometry={nodes.flower_leaf1_0.geometry}
                  material={materials.leaf1}
                />
              </group>
              <group
                name="lighting"
                position={[188.831, 243.457, -26.58]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[2.688, 2.688, 23.024]}
              >
                <mesh
                  name="lighting_Material001_0"
                  receiveShadow
                  geometry={nodes.lighting_Material001_0.geometry}
                  material={materials["Material.001"]}
                />
                <mesh
                  name="lighting_Material003_0"
                  receiveShadow
                  geometry={nodes.lighting_Material003_0.geometry}
                  material={materials["Material.003"]}
                />
                <mesh
                  name="lighting_Material014_0"
                  receiveShadow
                  geometry={nodes.lighting_Material014_0.geometry}
                  material={materials["Material.014"]}
                />
              </group>
              <group
                name="IKEA_seat"
                position={[363.595, 31.995, -331.439]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={[17.536, 15.514, 15.514]}
              >
                <mesh
                  name="IKEA_seat_wood__0"
                  receiveShadow
                  geometry={nodes.IKEA_seat_wood__0.geometry}
                  material={materials.wood}
                />
              </group>
              <group
                name="carpet"
                position={[81.578, 2.411, 26.536]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[190.768, 245.015, 0.524]}
              >
                <mesh
                  name="carpet_Carpet__0"
                  receiveShadow
                  geometry={nodes.carpet_Carpet__0.geometry}
                  material={materials.Carpet}
                />
              </group>
              <group
                name="chopping_board1"
                position={[388.318, 97.913, 187.245]}
                rotation={[-1.593, -1.28, -0.023]}
                scale={[1.332, 1.546, 1.332]}
              >
                <mesh
                  name="chopping_board1_Material1_0"
                  receiveShadow
                  geometry={nodes.chopping_board1_Material1_0.geometry}
                  material={materials.Material1}
                />
              </group>
              <group
                name="chopping_board2"
                position={[391.595, 98.773, 194.446]}
                rotation={[-1.6, -1.347, -0.03]}
                scale={[1.399, 1.586, 1.399]}
              >
                <mesh
                  name="chopping_board2_Material2_0"
                  receiveShadow
                  geometry={nodes.chopping_board2_Material2_0.geometry}
                  material={materials.Material2}
                />
              </group>
              <group
                name="jar1"
                position={[375.22, 92.792, -108.769]}
                rotation={[-Math.PI / 2, 0, -1.875]}
                scale={0.898}
              >
                <mesh
                  name="jar1_Material3_0"
                  receiveShadow
                  geometry={nodes.jar1_Material3_0.geometry}
                  material={materials.Material3}
                />
              </group>
              <group
                name="jar2"
                position={[372.586, 97.235, -121.78]}
                rotation={[-Math.PI / 2, 0, -1.247]}
                scale={0.824}
              >
                <mesh
                  name="jar2_Material4_0"
                  receiveShadow
                  geometry={nodes.jar2_Material4_0.geometry}
                  material={materials.Material4}
                />
              </group>
              <group
                name="seat"
                position={[81.651, 59.793, -127.726]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={[25.257, 25.257, 2.667]}
              >
                <mesh
                  name="seat_Leather_0"
                  receiveShadow
                  geometry={nodes.seat_Leather_0.geometry}
                  material={materials.Leather}
                />
                <mesh
                  name="seat_Material5_0"
                  receiveShadow
                  geometry={nodes.seat_Material5_0.geometry}
                  material={materials.Material5}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/models/living-room.glb");
