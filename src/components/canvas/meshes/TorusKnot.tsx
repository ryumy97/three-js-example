import { MeshProps, MeshStandardMaterialProps, TorusKnotGeometryProps } from '@react-three/fiber';
import React, { forwardRef } from 'react';
import * as THREE from 'three';

type Props = MeshProps & {
  color?: THREE.Color;
};

const TorusKnot = forwardRef<THREE.Mesh<THREE.TorusKnotGeometry, THREE.MeshStandardMaterial>, Props>((props, ref) => {
  const { color } = props;

  return (
    <mesh castShadow receiveShadow ref={ref} {...props}>
      <torusKnotGeometry />
      <meshStandardMaterial color={color} />
    </mesh>
  );
});

TorusKnot.displayName = 'TorusKnot';

export default TorusKnot;
