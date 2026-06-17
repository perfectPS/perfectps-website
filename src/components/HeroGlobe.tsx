import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import * as THREE from 'three'

function fibonacciSphere(count: number, radius: number): THREE.Vector3[] {
  const phi = Math.PI * (3 - Math.sqrt(5))
  return Array.from({ length: count }, (_, i) => {
    const y = 1 - (i / (count - 1)) * 2
    const r = Math.sqrt(1 - y * y)
    const theta = phi * i
    return new THREE.Vector3(Math.cos(theta) * r * radius, y * radius, Math.sin(theta) * r * radius)
  })
}

function ArcLine({ a, b, color }: { a: THREE.Vector3; b: THREE.Vector3; color: string }) {
  const obj = useMemo(() => {
    const mid = a.clone().add(b).multiplyScalar(0.5).normalize().multiplyScalar(a.length() * 1.38)
    const curve = new THREE.QuadraticBezierCurve3(a, mid, b)
    const geo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(48))
    const mat = new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.28 })
    return new THREE.Line(geo, mat)
  }, [a, b, color])
  return <primitive object={obj} />
}

function Globe({ reduced }: { reduced: boolean }) {
  const group = useRef<THREE.Group>(null)
  const nodes = useMemo(() => fibonacciSphere(34, 2.4), [])

  const arcs = useMemo<Array<[THREE.Vector3, THREE.Vector3, string]>>(() => {
    const idx = [0, 5, 8, 14, 17, 22, 25, 30, 2, 19]
    const pairs: Array<[THREE.Vector3, THREE.Vector3, string]> = []
    for (let i = 0; i < idx.length - 1; i += 2) {
      pairs.push([nodes[idx[i]], nodes[idx[i + 1]], i % 4 === 0 ? '#00eeff' : '#0066ff'])
    }
    return pairs
  }, [nodes])

  useFrame(({ clock }) => {
    if (reduced || !group.current) return
    const t = clock.getElapsedTime()
    group.current.rotation.y = t * 0.045
    group.current.rotation.x = Math.sin(t * 0.018) * 0.1
  })

  return (
    <group ref={group}>
      {/* Wireframe globe */}
      <mesh>
        <sphereGeometry args={[2.4, 40, 40]} />
        <meshBasicMaterial color="#00eeff" wireframe transparent opacity={0.065} />
      </mesh>
      {/* Inner dark fill for depth */}
      <mesh>
        <sphereGeometry args={[2.35, 20, 20]} />
        <meshBasicMaterial color="#010c14" transparent opacity={0.55} />
      </mesh>
      {/* Connection nodes */}
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[i % 5 === 0 ? 0.058 : 0.038, 8, 8]} />
          <meshBasicMaterial color={i % 7 === 0 ? '#f59e0b' : '#00eeff'} />
        </mesh>
      ))}
      {/* Arcs between nodes */}
      {arcs.map(([a, b, c], i) => (
        <ArcLine key={i} a={a} b={b} color={c} />
      ))}
    </group>
  )
}

export default function HeroGlobe() {
  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 46 }}
      dpr={[1, 1.5]}
      performance={{ min: 0.5 }}
      gl={{ alpha: true, antialias: true }}
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
    >
      <Stars
        radius={90}
        depth={50}
        count={2200}
        factor={2.8}
        saturation={0}
        fade
        speed={reduced ? 0 : 0.8}
      />
      <Globe reduced={reduced} />
    </Canvas>
  )
}
