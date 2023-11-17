import React from 'react';

const Plane: React.FC = (props) => {
  return (
    <mesh receiveShadow position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial color='pink' />
    </mesh>
  );
};

export default Plane;
