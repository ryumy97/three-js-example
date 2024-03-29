import { PerspectiveCamera } from '@react-three/drei';
import React, { Suspense } from 'react';
import * as THREE from 'three';

type Props = {
  cameraPosition?: THREE.Vector3;
  color?: string;
};

const Common: React.FC<Props> = ({ cameraPosition, color }) => (
  <Suspense fallback={null}>
    {color && <color attach='background' args={[color]} />}
    <ambientLight intensity={1} />
    <pointLight position={[-10, 10, -10]} intensity={1} decay={0.2} castShadow />
    <pointLight position={[-20, -30, -10]} intensity={0.5} />
    <pointLight position={[-5, -10, -15]} color='blue' intensity={0.01} />
    <PerspectiveCamera makeDefault fov={40} position={cameraPosition ? cameraPosition : [-5, 7, -9]} />
  </Suspense>
);

export default Common;
