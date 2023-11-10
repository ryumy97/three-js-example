import { PerspectiveCamera } from '@react-three/drei';
import React, { Suspense } from 'react';

type Props = {
  color?: string;
};

const Common: React.FC<Props> = ({ color }) => (
  <Suspense fallback={null}>
    {color && <color attach='background' args={[color]} />}
    <ambientLight intensity={0.5} />
    <pointLight position={[20, 30, 10]} intensity={1} />
    <pointLight position={[-10, -10, -10]} color='blue' />
    <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
  </Suspense>
);

export default Common;
