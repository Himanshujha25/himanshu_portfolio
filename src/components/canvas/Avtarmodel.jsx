import { useGLTF } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function AvatarModel({ isInteracting }) {
  const group = useRef();

  const avatar = useGLTF("/avatar.glb");
  const waving = useGLTF("/Waving.glb");

  const mixer = useRef();
  const actionRef = useRef();

  useEffect(() => {
    mixer.current = new THREE.AnimationMixer(avatar.scene);

    const clip = waving.animations[0];
    const action = mixer.current.clipAction(clip);

    action.loop = THREE.LoopRepeat;
    action.clampWhenFinished = false;
    action.enabled = true;

    actionRef.current = action;
  }, []);

  useEffect(() => {
    if (!actionRef.current) return;

    if (isInteracting) {
      actionRef.current.play();        // Start animation
    } else {
      actionRef.current.stop();        // Stop animation
    }
  }, [isInteracting]);

  useFrame((state, delta) => {
    if (mixer.current && isInteracting) mixer.current.update(delta);

    if (group.current) {
      if (isInteracting) {
        const t = state.clock.getElapsedTime();
        group.current.position.y = -1.2 + Math.sin(t * 1.5) * 0.05;
      } else {
        group.current.position.y = -1.2; // reset position
      }
    }
  });

  return (
    <group ref={group} scale={1.6} position={[0, -1.2, 0]}>
      <primitive object={avatar.scene} />
    </group>
  );
}
