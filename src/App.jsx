import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Loader } from '@react-three/drei';
import Model from "./Model";



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


function App() {
  const [loading, setLoading] = useState(true);

  // Simulate loading time with a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulating a 3-second loading time
    return () => clearTimeout(timer);
  }, []);

  // Use react-responsive to check if the screen is small (mobile)
  const isSmallScreen = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      {/* Conditionally render loading screen or 3D model */}
      {loading ? (
        // Loading screen
        <div style={{ textAlign: 'center', paddingTop: '50vh' }}>
          <h1>Loading...</h1>
          {isSmallScreen && <SpinningCube />}
        </div>
      ) : (
        // 3D model
        <Canvas style={{ width: '100%', height: '100%' }}>
          <Suspense fallback={null}>
            <Model />
          </Suspense>
          <OrbitControls />
        </Canvas>
      )}
    </div>
  );
}

export default App;
