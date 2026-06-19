import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function GoldenKnot() {
  const mesh = useRef<THREE.Mesh>(null!)
  const { mouse } = useThree()

  useFrame((state) => {
    mesh.current.rotation.x = state.clock.elapsedTime * 0.16
    mesh.current.rotation.y = state.clock.elapsedTime * 0.23
    mesh.current.rotation.z = THREE.MathUtils.lerp(
      mesh.current.rotation.z,
      mouse.x * 0.22,
      0.05
    )
  })

  return (
    <Float speed={1.0} rotationIntensity={0.1} floatIntensity={0.45}>
      <mesh ref={mesh} scale={1.42} position={[0.3, 0.1, 0]}>
        <torusKnotGeometry args={[1.0, 0.32, 256, 20, 2, 3]} />
        <MeshDistortMaterial
          color="#e8c04a"
          emissive="#c8a84b"
          emissiveIntensity={0.88}
          metalness={0.62}
          roughness={0.14}
          distort={0.03}
          speed={0.7}
        />
      </mesh>
    </Float>
  )
}

function WireframeSphere() {
  const mesh = useRef<THREE.Mesh>(null!)
  useFrame((state) => {
    mesh.current.rotation.y = state.clock.elapsedTime * 0.055
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.03) * 0.12
  })
  return (
    <mesh ref={mesh}>
      <icosahedronGeometry args={[3.7, 1]} />
      <meshBasicMaterial color="#c8a84b" wireframe transparent opacity={0.065} />
    </mesh>
  )
}

function GoldRing({ radius, tube, speed, tiltX }: {
  radius: number; tube: number; speed: number; tiltX?: number
}) {
  const mesh = useRef<THREE.Mesh>(null!)
  useFrame((state) => {
    mesh.current.rotation.y = state.clock.elapsedTime * speed
    mesh.current.rotation.x = tiltX ?? state.clock.elapsedTime * 0.15
  })
  return (
    <mesh ref={mesh}>
      <torusGeometry args={[radius, tube, 8, 100]} />
      <meshStandardMaterial
        color="#e8c860"
        emissive="#c8a84b"
        emissiveIntensity={0.75}
        metalness={0.5}
        roughness={0.22}
        transparent
        opacity={0.6}
      />
    </mesh>
  )
}

function FloatingParticles() {
  const count = 200
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 3.5 + Math.random() * 4.0
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
    points.current.rotation.y = state.clock.elapsedTime * 0.05
    points.current.rotation.x = state.clock.elapsedTime * 0.022
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#ffd060" size={0.038} transparent opacity={0.85} sizeAttenuation />
    </points>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} color="#fff8e0" />
      {/* Key: warm gold from upper-right front */}
      <pointLight position={[5, 6, 5]}    intensity={10} color="#ffe0a0" />
      {/* Fill: gold from left */}
      <pointLight position={[-4, 2, 4]}   intensity={5}  color="#c8a84b" />
      {/* Top white highlight */}
      <pointLight position={[1, 8, 3]}    intensity={7}  color="#ffffff" />
      {/* Cool backlight for depth */}
      <pointLight position={[-1, -5, -4]} intensity={3}  color="#2a4a8a" />
      {/* Rim from behind — creates edge separation */}
      <pointLight position={[0, 0, -9]}   intensity={2.5} color="#c8a84b" />

      <GoldenKnot />
      <WireframeSphere />
      <GoldRing radius={3.5} tube={0.014} speed={0.18} />
      <GoldRing radius={2.8} tube={0.010} speed={-0.26} tiltX={1.25} />
      <FloatingParticles />
    </>
  )
}

export function Hero3DScene() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0.3, 8], fov: 42 }}
      gl={{ alpha: true, antialias: true }}
      onCreated={({ gl }) => { gl.setClearColor(0x000000, 0) }}
      style={{ background: 'transparent', width: '100%', height: '100%' }}
    >
      <Scene />
    </Canvas>
  )
}
