// LoadingScreen.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import SpinningCube from './SpinningCube';

const LoadingScreen = () => (
  <Canvas style={{ width: '100%', height: '100%' }}>
    <OrbitControls />
    <ambientLight />
    <SpinningCube />
  </Canvas>
);

export default LoadingScreen;

