import { getRandomItem } from '@/helpers/global';
import { Triplet } from '@react-three/cannon';
import { useLoader, useThree } from '@react-three/fiber';
import { EffectComposer, N8AO } from '@react-three/postprocessing';
import { Physics } from '@react-three/rapier';
import { button, useControls } from 'leva';
import React, { useEffect } from 'react';
import * as THREE from 'three';
import * as THREE_LIB from 'three-stdlib';
import AttractorItem from '../bodies/AttractorItem';
import Pointer from '../bodies/Pointer';
import Common from '../environments/Common';
import TorusKnot from '../meshes/TorusKnot';
import { useGLTF } from '@react-three/drei';
import Logo from '../environments/Logo';

const logo = [
  '/glb/3d Logo Exports_DDB_001.glb',
  '/glb/3d Logo Exports_Group_001.glb',
  '/glb/3d Logo Exports_Mango_001.glb',
  '/glb/3d Logo Exports_Track_001.glb',
  '/glb/3d Logo Exports_Tribal_001.glb',
];

const data = Array(5)
  .fill(null)
  .map<{
    scale: number;
    position: Triplet;
    rotation: Triplet;
    color: THREE.Color;
  }>(() => ({
    scale: Math.random() + 1,
    position: [(Math.random() - 0.5) * 5, (Math.random() - 0.5) * 5, (Math.random() - 0.5) * 5],
    rotation: [Math.PI * Math.random(), Math.PI * Math.random(), Math.PI * Math.random()],
    color: getRandomItem([new THREE.Color('#6363F3'), new THREE.Color('#52F2CC'), new THREE.Color('#DFF793')]),
  }));

const RapierAttractors: React.FC = () => {
  const { debug } = useControls({
    debug: false,
    resetCamera: button((get) => {
      three.camera.position.set(0, 0, -30);
      three.camera.lookAt(0, 0, 0);
    }),
  });

  const three = useThree();

  const gltf = useGLTF(logo) as (THREE_LIB.GLTF & {
    nodes: Record<string, THREE.Mesh>;
    materials: Record<string, THREE.MeshStandardMaterial>;
  })[];

  useEffect(() => {
    three.camera.lookAt(0, 0, 0);
  }, [three.camera]);

  return (
    <>
      <Physics debug={debug} gravity={[0, 0, 0]}>
        {/* <primitive object={gltf.scene} /> */}
        {data.map((item, index) => {
          const currentIndex = index % logo.length;
          let node;

          if (currentIndex === 0) {
            node = gltf[currentIndex].nodes['DDB'];
          } else if (currentIndex === 1) {
            node = gltf[currentIndex].nodes['Group'];
          } else if (currentIndex === 2) {
            node = gltf[currentIndex].nodes['Mango'];
          } else if (currentIndex === 3) {
            node = gltf[currentIndex].nodes['Track'];
          } else if (currentIndex === 4) {
            node = gltf[currentIndex].nodes['Tribal'];
          }

          return (
            <AttractorItem key={index} {...item}>
              {/* <mesh
                castShadow
                receiveShadow
                geometry={geometry}
                material={material}
                position={item.position}
                rotation={item.rotation}
                scale={200}
              >
              </mesh> */}
              <primitive object={node} position={item.position} rotation={item.rotation} scale={200} />
            </AttractorItem>
          );
        })}
        <Pointer />
      </Physics>
      <Logo cameraPosition={new THREE.Vector3(0, 0, -30)} color='#000000' />

      <EffectComposer disableNormalPass multisampling={8}>
        <N8AO distanceFalloff={1} aoRadius={1} intensity={4} />
      </EffectComposer>
    </>
  );
};

export default RapierAttractors;
