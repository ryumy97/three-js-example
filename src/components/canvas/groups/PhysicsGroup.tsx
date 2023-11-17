import { Physics } from '@react-three/cannon';
import React from 'react';
import Common from '../environments/Common';
import Cube from '../meshes/Cube';
import Plane from '../meshes/Plane';

const PhysicsGroup: React.FC = () => {
  return (
    <>
      <Physics>
        <Cube></Cube>
        <Plane rotation={[-Math.PI / 2, 0, 0]} />
      </Physics>
      <Common />
    </>
  );
};

export default PhysicsGroup;
