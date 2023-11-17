import { Physics, RigidBody } from '@react-three/rapier';
import React, { Suspense } from 'react';
import Cube from '../meshes/Cube';
import Common from '../environments/Common';
import Plane from '../meshes/Plane';

const RapierExample: React.FC = () => {
  return (
    <>
      <Suspense>
        <Physics debug>
          <RigidBody>
            <Cube />
          </RigidBody>
          <RigidBody>
            <Plane />
          </RigidBody>
        </Physics>
      </Suspense>
      <Common />
    </>
  );
};

export default RapierExample;
