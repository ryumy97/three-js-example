import { BallCollider, MeshCollider, Physics, RapierRigidBody, RigidBody } from '@react-three/rapier';
import { useControls } from 'leva';
import React, { Suspense, useEffect, useRef } from 'react';
import Common from '../environments/Common';
import Plane from '../meshes/Plane';
import TorusKnot from '../meshes/TorusKnot';
import * as THREE from 'three';
import { useThree } from '@react-three/fiber';
import { getRandomItem } from '@/helpers/global';

const RapierCollisions: React.FC = () => {
  const { debug } = useControls({
    debug: false,
  });

  const three = useThree();

  const ballRef = useRef<RapierRigidBody>(null);
  const cuboidRef = useRef<RapierRigidBody>(null);
  const hullRef = useRef<RapierRigidBody>(null);
  const trimeshRef = useRef<RapierRigidBody>(null);

  useEffect(() => {
    console.log(ballRef.current);
    console.log(cuboidRef.current);
    console.log(hullRef.current);
    console.log(trimeshRef.current);

    three.camera.lookAt(0, 0, 0);
  }, [three.camera]);

  return (
    <>
      <Suspense>
        <Physics debug={debug}>
          <RigidBody ref={ballRef} colliders='ball' position={[-3, 5, 3]} restitution={1}>
            <TorusKnot
              onClick={(event) => {
                (event.object as THREE.Mesh<THREE.TorusKnotGeometry, THREE.MeshStandardMaterial>).material.color.set(
                  getRandomItem(['#6363F3', '#52F2CC', '#DFF793']),
                );

                ballRef.current.applyImpulse(
                  {
                    x: 5,
                    y: 400,
                    z: 0,
                  },
                  true,
                );
              }}
            />
          </RigidBody>
          <RigidBody ref={cuboidRef} colliders='cuboid' position={[3, 5, -3]}>
            <TorusKnot />
          </RigidBody>
          <RigidBody ref={hullRef} colliders='hull' position={[-3, 5, -3]}>
            <TorusKnot />
          </RigidBody>
          <RigidBody ref={trimeshRef} colliders='trimesh' position={[3, 5, 3]}>
            <TorusKnot />
          </RigidBody>
          <RigidBody>
            <Plane />
          </RigidBody>
        </Physics>
      </Suspense>
      <Common cameraPosition={new THREE.Vector3(0, 15, -25)} />
    </>
  );
};

export default RapierCollisions;
