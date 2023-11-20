import { Physics, RigidBody } from '@react-three/rapier';
import React, { Suspense } from 'react';
import Cube from '../meshes/Cube';
import Common from '../environments/Common';
import Plane from '../meshes/Plane';
import { useControls } from 'leva';

const RapierExample: React.FC = () => {
  
  const { debug } = useControls({
    debug: false,
  });
  
    return (
      <>
        <Suspense>
          <Physics debug={debug}>
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
