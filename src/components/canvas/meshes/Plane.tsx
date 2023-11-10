import { Triplet, usePlane } from '@react-three/cannon';
import React, { useRef } from 'react';
import { Mesh } from 'three';

type Props = {
  rotation: Triplet;
};

const Plane: React.FC<Props> = (props) => {
  const [ref] = usePlane(() => ({ type: 'Static', ...props }), useRef<Mesh>(null));

  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[10, 10]} />
      <shadowMaterial color='#171717' />
    </mesh>
  );
};

export default Plane;
