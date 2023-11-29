import { Triplet } from '@react-three/cannon';
import { useFrame } from '@react-three/fiber';
import { RapierRigidBody, RigidBody, vec3 } from '@react-three/rapier';
import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';

type Props = React.PropsWithChildren & {
  position: Triplet;
  color: THREE.Color;
};

const AttractorItem: React.FC<Props> = (props) => {
  const { position, color, children } = props;

  const api = useRef<RapierRigidBody>(null);
  const refState = useMemo(
    () => ({
      vec: new THREE.Vector3(),
    }),
    [],
  );

  useFrame((_, delta) => {
    if (api.current) {
      delta = Math.min(0.1, delta);
      api.current.applyImpulse(refState.vec.copy(vec3(api.current.translation())).negate().multiplyScalar(2), true);
    }
  });

  return (
    <RigidBody linearDamping={4} angularDamping={1} friction={0.1} ref={api} colliders={'hull'} position={position}>
      {children}
    </RigidBody>
  );
};

export default AttractorItem;
