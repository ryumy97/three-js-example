import { PerspectiveCamera } from '@react-three/drei';
import React, { Suspense } from 'react';

type Props = {
  color?: string;
};

const Common: React.FC<Props> = ({ color }) => (
  <Suspense fallback={null}>
    {color && <color attach='background' args={[color]} />}
    <ambientLight intensity={1} />
    <directionalLight position={[20, 30, 10]} intensity={1} castShadow />
    <pointLight position={[-20, -30, -10]} intensity={0.5} />
    <pointLight position={[-5, -10, -15]} color='blue' intensity={0.01} />
    <PerspectiveCamera makeDefault fov={40} position={[5, 7, 9]} />
  </Suspense>
);

export default Common;
