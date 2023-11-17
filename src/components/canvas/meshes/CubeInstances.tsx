import { Triplet } from '@react-three/cannon';
import { Instances } from '@react-three/drei';
import React from 'react';
import CubeInstance from './CubeInstance';
import { Color } from '@react-three/fiber';
import { getRandomItem } from '@/helpers/global';

const data = Array(500)
  .fill(null)
  .map<{
    scale: number;
    position: Triplet;
    rotation: Triplet;
    color: Color;
  }>(() => ({
    scale: Math.random() + 1,
    position: [(Math.random() - 0.5) * 10, Math.random() * 1000, (Math.random() - 0.5) * 10],
    rotation: [Math.PI * Math.random(), Math.PI * Math.random(), Math.PI * Math.random()],
    color: getRandomItem(['#6363F3', '#52F2CC', '#DFF793']),
  }));

const CubeInstances: React.FC = (props) => {
  return (
    <Instances
      limit={500} // Optional: max amount of items (for calculating buffer size)
      range={500} // Optional: draw-range
    >
      <boxGeometry />
      <meshStandardMaterial />
      {data.map(({ position, rotation, scale, color }, index) => {
        return <CubeInstance key={index} color={color} scale={scale} position={position} rotation={rotation} />;
      })}
    </Instances>
  );
};

export default CubeInstances;
