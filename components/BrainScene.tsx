"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, OrbitControls, Sphere } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Network() {
  const group = useRef<THREE.Group>(null);
  const points = useMemo(() => {
    const p: [number, number, number][] = [];
    for (let i = 0; i < 92; i++) {
      const theta = Math.random() * Math.PI * 2;
      const u = Math.random() * 2 - 1;
      const r = 1.45 + Math.random() * 0.22;
      const s = Math.sqrt(1 - u * u);
      p.push([r * s * Math.cos(theta), r * u, r * s * Math.sin(theta)]);
    }
    return p;
  }, []);
  const links = useMemo(() => {
    const out: [number, number][] = [];
    points.forEach((a, i) => {
      const near = points.map((b, j) => ({ j, d: Math.hypot(a[0]-b[0], a[1]-b[1], a[2]-b[2]) }))
        .filter(v => v.j !== i).sort((x, y) => x.d-y.d).slice(0, 3);
      near.forEach(v => { if (i < v.j) out.push([i, v.j]); });
    });
    return out;
  }, [points]);

  useFrame((_, delta) => { if (group.current) { group.current.rotation.y += delta * 0.08; group.current.rotation.x = Math.sin(Date.now() * 0.0002) * 0.08; } });

  return <group ref={group}>
    {links.map(([a,b], i) => <Line key={i} points={[points[a], points[b]]} color="#a78bfa" transparent opacity={0.24} lineWidth={0.7} />)}
    {points.map((p, i) => <Sphere key={i} position={p} args={[i % 7 === 0 ? 0.045 : 0.023, 8, 8]}>
      <meshStandardMaterial color={i % 7 === 0 ? "#f6c56f" : "#b7a2ff"} emissive={i % 7 === 0 ? "#b7802b" : "#5a42b5"} emissiveIntensity={1.2} />
    </Sphere>)}
    <mesh rotation={[0.4, 0.1, 0.25]}>
      <torusGeometry args={[1.8, 0.008, 8, 160]} />
      <meshBasicMaterial color="#f6c56f" transparent opacity={0.65} />
    </mesh>
    <mesh rotation={[1.2, 0.3, 0.6]}>
      <torusGeometry args={[2.02, 0.006, 8, 160]} />
      <meshBasicMaterial color="#a78bfa" transparent opacity={0.55} />
    </mesh>
  </group>;
}

export default function BrainScene() {
  return <div className="brain-canvas" aria-label="Interactive 3D neural network visualization">
    <Canvas camera={{ position: [0, 0, 5.5], fov: 45 }} dpr={[1, 1.5]}>
      <ambientLight intensity={1.2} />
      <pointLight position={[4, 3, 5]} intensity={2} color="#b8a1ff" />
      <Float speed={1.3} rotationIntensity={0.12} floatIntensity={0.15}><Network /></Float>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.35} />
    </Canvas>
  </div>;
}
