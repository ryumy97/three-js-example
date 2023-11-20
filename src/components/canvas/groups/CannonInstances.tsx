import { Debug, Physics } from '@react-three/cannon';
import React from 'react';
import Common from '../environments/Common';
import CannonCubeInstances from '../meshes/CannonCubeInstances';
import CannonPlane from '../meshes/CannonPlane';

const CannonInstances: React.FC = () => {
  return (
    <>
      <Physics>
        <Debug color='red'>
          <CannonCubeInstances></CannonCubeInstances>
          <CannonPlane rotation={[-Math.PI / 2, 0, 0]} />
        </Debug>
      </Physics>
      <Common />
    </>
  );
};

export default CannonInstances;
