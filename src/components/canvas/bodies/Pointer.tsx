import { useFrame } from '@react-three/fiber';
import { BallCollider, RigidBody } from '@react-three/rapier';
import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';

const Pointer: React.FC = (props) => {
  const pointerRef = useRef(null);
  const pointerStateRef = useRef({ mouse: new THREE.Vector3() });

  const data = useMemo(() => {
    return { mouse: new THREE.Vector3(0, 0, 0) };
  }, []);

  useFrame(({ viewport, pointer }, delta) => {
    if (pointerRef.current && pointerStateRef.current) {
      const currentViewport = viewport.getCurrentViewport();

      const targetX = (-pointer.x * currentViewport.width) / 2;
      const targetY = (pointer.y * currentViewport.height) / 2;

      const x = THREE.MathUtils.lerp(data.mouse.x, targetX, 0.1);
      const y = THREE.MathUtils.lerp(data.mouse.y, targetY, 0.1);

      const position = pointerStateRef?.current.mouse.set(x, y, 0);

      pointerRef?.current?.setNextKinematicTranslation(position);

      data.mouse.set(x, y, 0);
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
