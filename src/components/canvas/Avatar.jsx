import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useState } from "react";
import AvatarModel from "./Avtarmodel";

export default function Avatar() {
  const [isInteracting, setIsInteracting] = useState(false);

  return (
    <div className="w-full h-[600px] md:h-[720px]">
      <Canvas
        shadows
        camera={{ fov: 30, position: [0, 1.5, 7] }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.65} />
        <directionalLight position={[6, 10, 6]} intensity={1.3} />

        {/* detect user movement */}
        <OrbitControls
          enableZoom={false}
          autoRotate={false}

          // LOCK X ROTATION (UP/DOWN)
          minPolarAngle={Math.PI / 2}  
          maxPolarAngle={Math.PI / 2}   

          // allow only horizontal rotation
          enablePan={false}
          rotateSpeed={1}

          onStart={() => setIsInteracting(true)}
          onEnd={() => setIsInteracting(false)}
        />


        {/* pass interaction state */}
        <AvatarModel isInteracting={isInteracting} />
      </Canvas>
    </div>
  );
}
