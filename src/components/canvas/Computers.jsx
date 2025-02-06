import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Preload } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = () => {
  const computer = useGLTF("/desktop_pc/scene.gltf");

  return (
    <mesh scale={0.8} position={[0, -0.5, -1]}> {/* Reduced scale for responsiveness */}
      <hemisphereLight intensity={0.3} groundColor="black" />
      <pointLight position={[10, 10, 10]} intensity={50} />
      <primitive object={computer.scene} />
    </mesh>
  );
};

const ComputerCanvas = () => {
  return (
    <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] flex justify-center items-center  "> {/* Reduced size and margin for small screens */}
      <Canvas
        shadows
        camera={{ position: [20, 15, 10], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputerCanvas;
