import { Physics } from '@react-three/cannon';
import React from 'react';
import Common from '../environments/Common';
import CubeInstances from '../meshes/CubeInstances';
import Plane from '../meshes/Plane';

const CannonInstances: React.FC = () => {
  return (
    <>
      <Physics>
        <CubeInstances></CubeInstances>
        <Plane rotation={[-Math.PI / 2, 0, 0]} />
      </Physics>
      <Common />
    </>
  );
};

export default CannonInstances;
