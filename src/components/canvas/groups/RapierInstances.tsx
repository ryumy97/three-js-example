import { Physics, RigidBody } from '@react-three/rapier';
import { useControls } from 'leva';
import React, { Suspense } from 'react';
import Common from '../environments/Common';
import CubeInstances from '../meshes/CubeInstances';
import Plane from '../meshes/Plane';

const RapierInstances: React.FC = () => {
  const { debug } = useControls({
    debug: false,
  });

  return (
    <>
      <Suspense>
        <Physics debug={debug}>
          {/* <RigidBody> */}
          <CubeInstances />
          {/* </RigidBody> */}
          <RigidBody>
            <Plane />
          </RigidBody>
        </Physics>
      </Suspense>
      <Common />
    </>
  );
};

export default RapierInstances;
