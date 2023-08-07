import React,{Suspense, useRef } from "react";
import {Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Model.jsx";


const Scene = () => {
  return (
    <>
      <Suspense fallback ={null}>
        <Model />
      </Suspense>
      {/*REPLACE THIS LIGHT AS NEEDED IT'S A GOOD START*/}
      <ambientLight />
    </>
  );
};


const App = () => {
  return (
    <Canvas gl={{ physicallyCorrectLights: true, toneMappingExposure:.005 }}>
        {/* REMOVE ORBIT CONTROLS TO FORCE THE CAMERA VIEW*/}
    <OrbitControls/>
      <Scene />
    </Canvas>
  );
};

export default App;
