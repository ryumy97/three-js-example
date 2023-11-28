import { getRandomItem } from '@/helpers/global';
import { Triplet } from '@react-three/cannon';
import { useThree } from '@react-three/fiber';
import { EffectComposer, N8AO } from '@react-three/postprocessing';
import { Physics } from '@react-three/rapier';
import { useControls } from 'leva';
import React, { useEffect } from 'react';
import * as THREE from 'three';
import AttractorItem from '../bodies/AttractorItem';
import Pointer from '../bodies/Pointer';
import Common from '../environments/Common';
import TorusKnot from '../meshes/TorusKnot';

const data = Array(10)
  .fill(null)
  .map<{
    scale: number;
    position: Triplet;
    rotation: Triplet;
    color: THREE.Color;
  }>(() => ({
    scale: Math.random() + 1,
    position: [(Math.random() - 0.5) * 5, (Math.random() - 0.5) * 5, (Math.random() - 0.5) * 5],
    rotation: [Math.PI * Math.random(), Math.PI * Math.random(), Math.PI * Math.random()],
    color: getRandomItem([new THREE.Color('#6363F3'), new THREE.Color('#52F2CC'), new THREE.Color('#DFF793')]),
  }));

const RapierAttractors: React.FC = () => {
  const { debug } = useControls({
    debug: false,
  });

  const three = useThree();

  useEffect(() => {
    three.camera.lookAt(0, 0, 0);
  }, [three.camera]);

  return (
    <>
      <Physics debug={debug} gravity={[0, 0, 0]}>
        {data.map((item, index) => {
          return (
            <AttractorItem key={index} {...item}>
              <TorusKnot {...item} />
            </AttractorItem>
          );
        })}
        <Pointer />
        {/* <Attractor position={[0, 0, 0]} range={200} strength={100} /> */}
        {/* <group position={[1, 0, 0]}>
          <Attractor range={10} strength={10} />
        </group> */}
      </Physics>
      <Common cameraPosition={new THREE.Vector3(0, 0, -30)} />

      {/* <EffectComposer disableNormalPass multisampling={8}>
        <N8AO distanceFalloff={1} aoRadius={1} intensity={1000} />
      </EffectComposer> */}
    </>
  );
};

export default RapierAttractors;
