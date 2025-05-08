import { useEffect, useState, useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

export default function Avatar() {
  return (
    <div className="absolute inset-0 z-50">
      <Canvas
        shadows
        camera={{ fov: 45, position: [0, 0.8, 8] }}
        gl={{ preserveDrawingBuffer: true }}
        className="w-full h-full"
      >
        <AvatarModel />
      </Canvas>
    </div>
  )
}

function AvatarModel() {
  const meshRef = useRef()
  const pointLightRef = useRef()

  // ✅ Track screen width for responsive size
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(t * 1.5) * 0.15
      meshRef.current.rotation.y += 0.01
    }
    if (pointLightRef.current) {
      pointLightRef.current.intensity = Math.sin(t * 2) * 0.4 + 1
    }
  })

  const particles = useMemo(() => (
    [...Array(30)].map((_, i) => ({
      key: i,
      position: [
        Math.sin(i * 1.5) * 2 + (Math.random() - 0.5) * 0.2,
        Math.cos(i * 0.7) * 2 + (Math.random() - 0.5) * 0.2,
        Math.sin(i) * 2 + (Math.random() - 0.5) * 0.2
      ]
    }))
  ), [])

  return (
    <group>
      <OrbitControls 
        enableZoom={false}
        autoRotate
        autoRotateSpeed={1.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />

      {/* ✅ Sphere with responsive size */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[isMobile ? 1.4 : 1, 64, 64]} />
        <meshStandardMaterial
          color="#915EFF"
          metalness={0.8}
          roughness={0.2}
          emissive="#915EFF"
          emissiveIntensity={0.6}
        />
      </mesh>

      {particles.map(({ key, position }) => (
        <mesh key={key} position={position}>
          <sphereGeometry args={[0.03, 16, 16]} />
          <meshStandardMaterial
            color="#ffffff"
            emissive="#915EFF"
            emissiveIntensity={2}
          />
        </mesh>
      ))}

      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 3, 2]} intensity={0.8} castShadow />
      <pointLight
        ref={pointLightRef}
        position={[2, 2, 2]}
        intensity={1.5}
        color="#ffffff"
        distance={10}
        decay={2}
      />
    </group>
  )
}
