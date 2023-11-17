'use client';

import { Three } from '@/helpers/components/Three';
import { OrbitControls, View as ViewImpl } from '@react-three/drei';
import React, { forwardRef, useImperativeHandle, useRef } from 'react';

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
