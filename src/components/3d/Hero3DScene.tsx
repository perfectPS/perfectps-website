import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function GoldenOrb() {
  const mesh = useRef<THREE.Mesh>(null!)
  const { mouse, viewport } = useThree()

  useFrame((state) => {
    mesh.current.rotation.y = state.clock.elapsedTime * 0.22
    mesh.current.rotation.x = THREE.MathUtils.lerp(
      mesh.current.rotation.x,
      -(mouse.y * viewport.height) / 120,
      0.04
    )
    mesh.current.rotation.z = THREE.MathUtils.lerp(
      mesh.current.rotation.z,
      (mouse.x * viewport.width) / 240,
      0.04
    )
  })

  return (
    <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.8}>
      <mesh ref={mesh} scale={2.1} position={[0.8, 0, 0]}>
        <icosahedronGeometry args={[1, 3]} />
        <MeshDistortMaterial
          color="#d4a843"
          emissive="#8a5a00"
          emissiveIntensity={0.7}
          metalness={0.55}
          roughness={0.28}
          distort={0.12}
          speed={1.5}
        />
      </mesh>
    </Float>
  )
}

function GoldRing({ radius, tube, speed, tiltX }: {
  radius: number; tube: number; speed: number; tiltX?: number
}) {
  const mesh = useRef<THREE.Mesh>(null!)
  useFrame((state) => {
    mesh.current.rotation.y = state.clock.elapsedTime * speed
    mesh.current.rotation.x = tiltX ?? state.clock.elapsedTime * 0.18
  })
  return (
    <mesh ref={mesh}>
      <torusGeometry args={[radius, tube, 8, 120]} />
      <meshStandardMaterial
        color="#e8c860"
        emissive="#c8a84b"
        emissiveIntensity={0.8}
        metalness={0.5}
        roughness={0.2}
        transparent
        opacity={0.7}
      />
    </mesh>
  )
}

function FloatingParticles() {
  const count = 160
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 3.0 + Math.random() * 4
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3]     = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [])

  const points = useRef<THREE.Points>(null!)
  useFrame((state) => {
    points.current.rotation.y = state.clock.elapsedTime * 0.06
    points.current.rotation.x = state.clock.elapsedTime * 0.03
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#ffd060" size={0.04} transparent opacity={0.9} sizeAttenuation />
    </points>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.6} color="#fff8e0" />
      {/* Key light: warm gold from upper-right */}
      <pointLight position={[6, 5, 6]}    intensity={7}  color="#ffe0a0" />
      {/* Fill: gold from left */}
      <pointLight position={[-4, 2, 5]}   intensity={4}  color="#c8a84b" />
      {/* Rim: white highlight from above */}
      <pointLight position={[1, 7, 3]}    intensity={5}  color="#ffffff" />
      {/* Cool backlight */}
      <pointLight position={[-2, -4, -5]} intensity={2}  color="#2a4a8a" />

      <GoldenOrb />
      <GoldRing radius={3.6} tube={0.016} speed={0.25} />
      <GoldRing radius={3.0} tube={0.012} speed={-0.32} tiltX={1.2} />
      <FloatingParticles />
    </>
  )
}

export function Hero3DScene() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 8], fov: 42 }}
      gl={{ alpha: true, antialias: true }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0)
      }}
      style={{ background: 'transparent', width: '100%', height: '100%' }}
    >
      <Scene />
    </Canvas>
  )
}
