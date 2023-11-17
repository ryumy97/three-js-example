import { Physics } from '@react-three/cannon';
import { button, useControls } from 'leva';
import React, { useState } from 'react';
import Common from '../environments/Common';
import CubeInstances from '../meshes/CubeInstances';
import Plane from '../meshes/Plane';

const PhysicsWithMultiple: React.FC = () => {
  const [counter, setCounter] = useState(0);

  useControls({
    refresh: button((get) => {
      setCounter((prev) => prev + 1);
    }),
  });

  return (
    <>
      <Physics>
        <CubeInstances key={counter}></CubeInstances>
        <Plane rotation={[-Math.PI / 2, 0, 0]} />
      </Physics>
      <Common />
    </>
  );
};

export default PhysicsWithMultiple;
