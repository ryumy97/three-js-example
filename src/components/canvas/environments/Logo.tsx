import { Environment, Lightformer, PerspectiveCamera, useHelper } from '@react-three/drei';
import React, { Suspense, useRef } from 'react';
import * as THREE from 'three';

type Props = {
  cameraPosition?: THREE.Vector3;
  color?: string;
  debug?: boolean;
};

const Logo: React.FC<Props> = ({ cameraPosition, color, debug }) => {
  const spotlight = useRef();

  //   useHelper(spotlight, THREE.SpotLightHelper);

  return (
    <Suspense fallback={null}>
      {color && <color attach='background' args={[color]} />}
      {/* <ambientLight intensity={0.25} /> */}
      {/* <pointLight position={[10, -10, 10]} intensity={1} />
    <pointLight position={[-10, 10, -10]} intensity={5} decay={0.05} castShadow /> */}
      {/* <pointLight position={[-20, -30, -10]} intensity={2.5} /> */}
      <spotLight
        position={[-5, 5, -10]}
        angle={Math.PI / 4}
        penumbra={1}
        intensity={20}
        decay={1}
        castShadow
        ref={spotlight}
      />

      <PerspectiveCamera makeDefault fov={40} position={cameraPosition ? cameraPosition : [-5, 7, -9]} />

      <Environment resolution={256}>
        <group rotation={[-Math.PI / 3, 0, 1]}>
          <Lightformer form='circle' intensity={0.2} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={2} />
          <Lightformer form='circle' intensity={0.2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={2} />
          <Lightformer form='circle' intensity={0.2} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={2} />
          <Lightformer form='circle' intensity={0.2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={8} />
        </group>
      </Environment>
    </Suspense>
  );
};

export default Logo;
