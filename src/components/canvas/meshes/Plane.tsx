import { Triplet, useBox, usePlane } from '@react-three/cannon';
import { button, useControls } from 'leva';
import React, { useRef, useState } from 'react';
import { Mesh } from 'three';

type Props = {
  rotation: Triplet;
};

const Plane: React.FC<Props> = (props) => {
  const [ref] = useBox(() => ({ type: 'Static', ...props, args: [20, 20, 1] }), useRef<Mesh>(null));

  return (
    <mesh ref={ref} receiveShadow>
      <boxGeometry args={[20, 20]} />
      <meshStandardMaterial color='pink' />
    </mesh>
  );
};

export default Plane;
