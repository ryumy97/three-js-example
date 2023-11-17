import { Physics } from '@react-three/cannon';
import React from 'react';
import Common from '../environments/Common';
import CannonCube from '../meshes/CannonCube';
import CannonPlane from '../meshes/CannonPlane';

const CannonExample: React.FC = () => {
  return (
    <>
      <Physics>
        <CannonCube></CannonCube>
        <CannonPlane rotation={[-Math.PI / 2, 0, 0]} />
      </Physics>
      <Common />
    </>
  );
};

export default CannonExample;
