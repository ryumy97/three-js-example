'use client';

import { r3f } from '@/helpers/global';
import { Preload } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { button, useControls } from 'leva';
import { Perf } from 'r3f-perf';
import { useState } from 'react';

export default function Scene({ ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped

  const [counter, setCounter] = useState(0);

  useControls({
    refresh: button((get) => {
      setCounter((prev) => prev + 1);
    }),
  });

  return (
    <Canvas key={counter} {...props}>
      {/* @ts-ignore */}
      <r3f.Out />
      <Preload all />
      <Perf />
    </Canvas>
  );
}
