import { BoxProps, useBox } from '@react-three/cannon';
import { Instance, InstanceProps } from '@react-three/drei';
import React, { useEffect, useMemo, useRef } from 'react';
import { Mesh, Vector3 } from 'three';

type Props = BoxProps & {
  color: InstanceProps['color'];
  scale: number;
};

const CubeInstance: React.FC<Props> = (props) => {
  const { position, rotation, color, scale } = props;

  const [ref, api] = useBox(() => ({ mass: 1, position, rotation, args: [scale, scale, scale] }), useRef<Mesh>(null));

  const three = useMemo(() => new Vector3(), []);

  useEffect(() => {
    api.position.subscribe((value) => {
      if (value[1] < -10) {
        api.position.set((Math.random() - 0.5) * 10, Math.random() * 20 + 50, (Math.random() - 0.5) * 10);
        api.velocity.set(0, 0, 0);
        api.angularVelocity.set(0, 0, 0);
      }
    });
  }, [api.angularVelocity, api.position, api.velocity]);

  return <Instance ref={ref} castShadow {...{ position, rotation, color, scale }}></Instance>;
};

export default CubeInstance;
