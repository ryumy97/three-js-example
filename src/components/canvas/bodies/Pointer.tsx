import { useFrame } from '@react-three/fiber';
import { BallCollider, RigidBody } from '@react-three/rapier';
import React, { useRef } from 'react';
import * as THREE from 'three';

const Pointer: React.FC = (props) => {
  const pointerRef = useRef(null);
  const pointerStateRef = useRef({ mouse: new THREE.Vector3() });

  useFrame(({ viewport, pointer }, delta) => {
    // console.log(viewport);

    if (pointerRef.current && pointerStateRef.current) {
      pointerRef?.current?.setNextKinematicTranslation(
        pointerStateRef?.current.mouse.set((-pointer.x * viewport.width) / 2, (pointer.y * viewport.height) / 2, 0),
      );
    }
  });

  return (
    <RigidBody ref={pointerRef} position={[0, 0, 0]} type='kinematicPosition' colliders={false}>
      <BallCollider args={[1]} />
      {/* <Attractor range={10} strength={-50} /> */}
    </RigidBody>
  );
};

export default Pointer;
