import { MeshProps, MeshStandardMaterialProps, TorusKnotGeometryProps } from '@react-three/fiber';
import React, { forwardRef } from 'react';
import * as THREE from 'three';

type Props = MeshProps;

const TorusKnot = forwardRef<THREE.Mesh<THREE.TorusKnotGeometry, THREE.MeshStandardMaterial>, Props>((props, ref) => {
  return (
    <mesh castShadow ref={ref} {...props}>
      <torusKnotGeometry />
      <meshStandardMaterial />
    </mesh>
  );
});

TorusKnot.displayName = 'TorusKnot';

export default TorusKnot;
