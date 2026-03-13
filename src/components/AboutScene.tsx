"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

// 4000 particle spiral galaxy
function ParticleGalaxy() {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const count = 4000;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.pow(Math.random(), 0.6) * 9;
      const armOffset = radius * 0.4;
      const spread = (Math.random() - 0.5) * (1.2 - radius * 0.08);
      arr[i * 3]     = Math.cos(angle + armOffset) * radius;
      arr[i * 3 + 1] = spread;
      arr[i * 3 + 2] = Math.sin(angle + armOffset) * radius;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.025;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#39ff14"
        size={0.018}
        sizeAttenuation
        depthWrite={false}
        opacity={0.65}
      />
    </Points>
  );
}

// Central iridescent glass orb
function GlassOrb() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.12;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.07;
    }
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.1, 4]} />
      <MeshTransmissionMaterial
        backside
        samples={6}
        thickness={0.9}
        chromaticAberration={0.2}
        anisotropy={0.6}
        distortion={0.35}
        distortionScale={0.25}
        temporalDistortion={0.15}
        iridescence={1}
        iridescenceIOR={1.6}
        iridescenceThicknessRange={[0, 1400]}
        color="#39ff14"
        roughness={0}
        envMapIntensity={1}
      />
    </mesh>
  );
}

// 3 orbital rings at different inclinations
function OrbitalRings() {
  const r1 = useRef<THREE.Mesh>(null);
  const r2 = useRef<THREE.Mesh>(null);
  const r3 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (r1.current) r1.current.rotation.z = t * 0.28;
    if (r2.current) r2.current.rotation.x = t * 0.19;
    if (r3.current) {
      r3.current.rotation.y = t * 0.22;
      r3.current.rotation.z = t * 0.1;
    }
  });

  return (
    <>
      <mesh ref={r1}>
        <torusGeometry args={[1.75, 0.012, 16, 120]} />
        <meshStandardMaterial color="#39ff14" metalness={1} roughness={0} emissive="#39ff14" emissiveIntensity={0.5} />
      </mesh>
      <mesh ref={r2} rotation={[Math.PI / 3, 0, Math.PI / 5]}>
        <torusGeometry args={[2.15, 0.009, 16, 120]} />
        <meshStandardMaterial color="#a78bfa" metalness={1} roughness={0} emissive="#a78bfa" emissiveIntensity={0.4} />
      </mesh>
      <mesh ref={r3} rotation={[Math.PI / 2, Math.PI / 7, 0]}>
        <torusGeometry args={[2.55, 0.007, 16, 120]} />
        <meshStandardMaterial color="#22d3ee" metalness={1} roughness={0} emissive="#22d3ee" emissiveIntensity={0.3} />
      </mesh>
    </>
  );
}

// Orbiting satellite gems
function OrbitingSatellite({ radius, speed, offset, color, size }: {
  radius: number; speed: number; offset: number; color: string; size: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime * speed + offset;
    if (meshRef.current) {
      meshRef.current.position.x = Math.cos(t) * radius;
      meshRef.current.position.z = Math.sin(t) * radius;
      meshRef.current.position.y = Math.sin(t * 0.7) * 0.4;
      meshRef.current.rotation.x += 0.02;
      meshRef.current.rotation.y += 0.015;
    }
  });

  return (
    <mesh ref={meshRef} scale={size}>
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color={color} metalness={0.8} roughness={0.05} emissive={color} emissiveIntensity={0.3} />
    </mesh>
  );
}

// Floating crystal shards in background
function BackgroundCrystals() {
  const shards = useMemo(() => [
    { pos: [-4, 2, -3] as [number,number,number],   s: 0.28, c: "#f472b6", spd: 0.7 },
    { pos: [3.8, 2.5, -4] as [number,number,number], s: 0.22, c: "#fbbf24", spd: 1.0 },
    { pos: [-3, -2.5, -2] as [number,number,number], s: 0.32, c: "#22d3ee", spd: 0.8 },
    { pos: [3.2, -2, -3] as [number,number,number],  s: 0.2,  c: "#a78bfa", spd: 1.2 },
    { pos: [0, 3.5, -4] as [number,number,number],   s: 0.18, c: "#39ff14", spd: 0.9 },
    { pos: [-1.5, -3, -2] as [number,number,number], s: 0.24, c: "#fb923c", spd: 0.6 },
  ], []);

  return (
    <>
      {shards.map((s, i) => (
        <Float key={i} speed={s.spd} rotationIntensity={0.5} floatIntensity={0.5}>
          <mesh position={s.pos} scale={s.s}>
            <octahedronGeometry args={[1, 0]} />
            <meshStandardMaterial color={s.c} metalness={0.7} roughness={0.05} emissive={s.c} emissiveIntensity={0.25} />
          </mesh>
        </Float>
      ))}
    </>
  );
}

// Slow auto-pan camera (no OrbitControls)
function CameraRig() {
  useFrame((state) => {
    const t = state.clock.elapsedTime * 0.06;
    state.camera.position.x = Math.sin(t) * 0.8 + 4.2;
    state.camera.position.y = Math.cos(t * 0.8) * 0.4 + 2;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

// Orbiting point lights for caustics-like effect
function DynamicLights() {
  const l1 = useRef<THREE.PointLight>(null);
  const l2 = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (l1.current) {
      l1.current.position.x = Math.cos(t * 0.4) * 4;
      l1.current.position.z = Math.sin(t * 0.4) * 4;
    }
    if (l2.current) {
      l2.current.position.x = Math.cos(t * 0.3 + Math.PI) * 5;
      l2.current.position.z = Math.sin(t * 0.3 + Math.PI) * 5;
    }
  });

  return (
    <>
      <ambientLight intensity={0.08} />
      <pointLight ref={l1} position={[4, 3, 4]} intensity={3} color="#39ff14" />
      <pointLight ref={l2} position={[-4, -2, 3]} intensity={2} color="#a78bfa" />
      <pointLight position={[0, 6, -4]} intensity={1.5} color="#22d3ee" />
    </>
  );
}

function SceneContent() {
  return (
    <>
      <DynamicLights />
      <ParticleGalaxy />
      <GlassOrb />
      <OrbitalRings />
      <OrbitingSatellite radius={2.15} speed={0.35} offset={0}            color="#39ff14" size={0.18} />
      <OrbitingSatellite radius={2.15} speed={0.35} offset={Math.PI * 2/3} color="#f472b6" size={0.14} />
      <OrbitingSatellite radius={2.15} speed={0.35} offset={Math.PI * 4/3} color="#22d3ee" size={0.16} />
      <BackgroundCrystals />
      <CameraRig />
    </>
  );
}

export function AboutScene() {
  return (
    <div className="absolute inset-0 w-full h-full min-h-[60vh]" style={{ background: "var(--background)" }}>
      <Canvas
        camera={{ position: [4.2, 2, 6], fov: 45 }}
        gl={{ antialias: true, alpha: false }}
        dpr={[1, 2]}
      >
        <SceneContent />
      </Canvas>
    </div>
  );
}
