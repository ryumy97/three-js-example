import { getRandomItem } from '@/helpers/global';
import { Triplet } from '@react-three/cannon';
import { useFrame } from '@react-three/fiber';
import { CuboidCollider, InstancedRigidBodies, InstancedRigidBodyProps, RapierRigidBody } from '@react-three/rapier';
import React, { useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';

const data = Array(500)
  .fill(null)
  .map<{
    scale: number;
    position: Triplet;
    rotation: Triplet;
    color: THREE.Color;
  }>(() => ({
    scale: Math.random() + 1,
    position: [(Math.random() - 0.5) * 10, Math.random() * 1000, (Math.random() - 0.5) * 10],
    rotation: [Math.PI * Math.random(), Math.PI * Math.random(), Math.PI * Math.random()],
    color: getRandomItem([new THREE.Color('#6363F3'), new THREE.Color('#52F2CC'), new THREE.Color('#DFF793')]),
  }));

const CubeInstances: React.FC = (props) => {
  const rigidBodies = useRef<RapierRigidBody[]>(null);
  const meshes = useRef<THREE.InstancedMesh>(null);

  useEffect(() => {
    if (!rigidBodies.current) {
      return;
    }

    const color = new THREE.Color();

    data.forEach((data, index) => {
      meshes.current.setColorAt(index, color.set(data.color));
    });
  }, []);

  const instances = useMemo<InstancedRigidBodyProps[]>(() => {
    return data.map<InstancedRigidBodyProps>((item, index) => {
      return {
        key: index,
        ...item,
      };
    });
  }, []);

  useFrame(() => {
    rigidBodies.current.map((api, index) => {
      if (api.translation().y < -10) {
        api.setTranslation(
          {
            x: (Math.random() - 0.5) * 10,
            y: Math.random() * 300 + 100,
            z: (Math.random() - 0.5) * 10,
          },
          false,
        );
        api.setLinvel(
          {
            x: 0,
            y: 0,
            z: 0,
          },
          false,
        );
        api.setAngvel(
          {
            x: 0,
            y: 0,
            z: 0,
          },
          false,
        );
        api.resetForces(false);
        api.resetTorques(true);
      }
    });
  });

  return (
    <InstancedRigidBodies
      ref={rigidBodies}
      instances={instances}
      colliders='cuboid'
      colliderNodes={[<CuboidCollider key={'cuboid'} args={[0.5, 0.5, 0.5]} />]}
    >
      <instancedMesh ref={meshes} args={[undefined, undefined, data.length]} count={data.length} castShadow>
        <boxGeometry />
        <meshStandardMaterial />
      </instancedMesh>
    </InstancedRigidBodies>
  );
};

export default CubeInstances;
