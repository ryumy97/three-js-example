import { Instance } from '@react-three/drei';
import { InstancedMeshProps } from '@react-three/fiber';
import React from 'react';
import { Color } from '@react-three/fiber';

type Props = InstancedMeshProps & {
  color: Color;
};

const CubeInstance: React.FC<Props> = (props) => {
  const { position, rotation, color, scale } = props;

  return <Instance castShadow {...{ position, rotation, color, scale }}></Instance>;
};

export default CubeInstance;
