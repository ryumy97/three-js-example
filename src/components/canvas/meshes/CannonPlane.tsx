import { Triplet, useBox } from '@react-three/cannon';
import React, { useRef } from 'react';
import { Mesh } from 'three';

type Props = {
  rotation: Triplet;
};

const CannonPlane: React.FC<Props> = (props) => {
  const [ref] = useBox(() => ({ type: 'Static', ...props, args: [20, 20, 1] }), useRef<Mesh>(null));

  return (
    <mesh ref={ref} receiveShadow>
      <boxGeometry args={[20, 20]} />
      <meshStandardMaterial color='pink' />
    </mesh>
  );
};

export default CannonPlane;
