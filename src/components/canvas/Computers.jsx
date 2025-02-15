import React, { Suspense, useEffect, useState, memo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Preload } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = memo(({ isMobile }) => {
  const { scene } = useGLTF("/desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={1.2} groundColor="black" />
      <pointLight intensity={50} position={[5, 10, 5]} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <primitive
        object={scene}
        scale={isMobile ? 0.55 : 0.9}
        position={isMobile ? [.1, -1., -0.5] : [0, -1.5, -1.8]}
        rotation={[0, isMobile ? -0.15 : -0.25, -0.1]}
      />
    </mesh>
  );
});

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 768
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`w-full flex justify-center items-center ${
        isMobile ? "h-[300px]" : "h-[600px]"
      }`}
    >
      <Canvas
        shadows
        camera={{
          position: isMobile ? [7, 8, 5] : [15, 12, 10],
          fov: 25,
        }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
