import { useBox } from '@react-three/cannon';
import React, { useRef } from 'react';
import { Mesh } from 'three';

const Cube: React.FC = (props) => {
  const [ref] = useBox(() => ({ mass: 1, position: [0, 5, 0], ...props }), useRef<Mesh>(null));

  return (
    <mesh ref={ref} castShadow>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  );
};

export default Cube;
