'use client';

import React, { forwardRef, Suspense, useImperativeHandle, useRef } from 'react';
import { OrbitControls, PerspectiveCamera, View as ViewImpl } from '@react-three/drei';
import { Three } from '@/helpers/components/Three';

type Props = {
  orbit?: boolean;
  className: string;
} & React.PropsWithChildren;

const View = forwardRef<React.FC, Props>(({ children, orbit, ...props }, ref) => {
  const localRef = useRef(null);
  useImperativeHandle(ref, () => localRef.current);

  return (
    <>
      <div ref={localRef} {...props} />
      <Three>
        <ViewImpl track={localRef}>
          {children}
          {orbit && <OrbitControls />}
        </ViewImpl>
      </Three>
    </>
  );
});
View.displayName = 'View';

export { View };
