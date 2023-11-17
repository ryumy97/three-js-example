import React from 'react';

const Cube: React.FC = (props) => {
  return (
    <mesh castShadow position={[0, 5, 0]}>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  );
};

export default Cube;
