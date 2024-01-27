// SpinningCube.jsx
import React from 'react';

const SpinningCube = () => (
  <mesh rotation={[0, 0, 0]}>
    <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
    <meshBasicMaterial attach="material" color="lightgray" />
  </mesh>
);

export default SpinningCube;
