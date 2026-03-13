"use client";

import { useRef, useLayoutEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  MeshTransmissionMaterial,
  Instance,
  Instances,
  Mask,
  useMask,
  CameraControls,
  Environment,
  Lightformer,
  AccumulativeShadows,
  RandomizedLight,
} from "@react-three/drei";
import * as THREE from "three";

const SPHERES: [number, string, number, [number, number, number]][] = [
  [0.38, "#ff6b9d", 1.0,  [ 0.9,  0.3,  0.5]],
  [0.30, "#39ff14", 1.5,  [-0.7,  0.6,  0.2]],
  [0.34, "#22d3ee", 0.8,  [ 0.2, -0.5, -0.7]],
  [0.26, "#fbbf24", 2.0,  [-0.8, -0.3,  0.5]],
  [0.32, "#a78bfa", 1.2,  [ 0.6,  0.8, -0.4]],
  [0.20, "#fb923c", 1.8,  [-0.4,  0.7,  0.6]],
  [0.28, "#f472b6", 0.9,  [ 0.7, -0.6,  0.3]],
  [0.22, "#34d399", 1.4,  [-0.5, -0.8, -0.4]],
  [0.18, "#60a5fa", 2.2,  [ 0.4,  0.1,  0.9]],
  [0.24, "#e879f9", 1.1,  [-0.2,  0.9, -0.6]],
];

// Glass sphere — writes to stencil so contents are clipped inside
function GlassBowl({ children }: { children: React.ReactNode }) {
  const contentsRef = useRef<THREE.Group>(null);
  const stencil = useMask(1, false);

  useLayoutEffect(() => {
    contentsRef.current?.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        Object.assign((child as THREE.Mesh).material, { ...stencil });
      }
    });
  }, [stencil]);

  return (
    <group>
      {/* Write stencil shape */}
      <Mask id={1} colorWrite={false} depthWrite={false}>
        <sphereGeometry args={[2, 64, 64]} />
      </Mask>
      {/* Actual glass surface */}
      <mesh renderOrder={-1000}>
        <sphereGeometry args={[2, 64, 64]} />
        <MeshTransmissionMaterial
          backside
          samples={4}
          thickness={0.3}
          chromaticAberration={0.04}
          anisotropy={0.15}
          distortion={0.08}
          distortionScale={0.08}
          temporalDistortion={0.2}
          iridescence={1}
          iridescenceIOR={1}
          iridescenceThicknessRange={[0, 1400]}
        />
      </mesh>
      {/* Contents masked to sphere */}
      <group ref={contentsRef}>{children}</group>
    </group>
  );
}

// Floating colored spheres inside the bowl
function FloatingSpheres() {
  return (
    <Instances renderOrder={-1000}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshBasicMaterial depthTest={false} />
      {SPHERES.map(([scale, color, speed, position], i) => (
        <Float key={i} rotationIntensity={8} floatIntensity={6} speed={speed}>
          <Instance scale={scale} color={color} position={position} />
        </Float>
      ))}
    </Instances>
  );
}

// Spinning torus knot as the centerpiece
function CenterPiece() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.25;
      ref.current.rotation.y = state.clock.elapsedTime * 0.18;
    }
  });
  return (
    <Float speed={1.2} floatIntensity={0.3}>
      <mesh ref={ref} scale={0.32}>
        <torusKnotGeometry args={[1, 0.32, 200, 32, 2, 3]} />
        <meshStandardMaterial
          color="#39ff14"
          metalness={0.6}
          roughness={0.1}
          emissive="#39ff14"
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  );
}

function SceneContent() {
  return (
    <>
      <color attach="background" args={["#0a0a0a"]} />

      {/* Glass bowl with contents */}
      <GlassBowl>
        <FloatingSpheres />
        <CenterPiece />
      </GlassBowl>

      {/* Soft colored shadows on floor */}
      <AccumulativeShadows
        temporal
        frames={80}
        color="#39ff14"
        colorBlend={0.4}
        opacity={0.35}
        scale={20}
        position={[0, -3.2, 0]}
      >
        <RandomizedLight
          amount={8}
          radius={10}
          ambient={0.5}
          intensity={1}
          position={[0, 6, -4]}
          size={10}
        />
      </AccumulativeShadows>

      {/* Environment: custom Lightformers for beautiful glass caustics */}
      <Environment resolution={512}>
        <group rotation={[-Math.PI / 3, 0, 0]}>
          <Lightformer intensity={5} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
          {[2, 0, 2, 0, 2, 0, 2, 0].map((x, i) => (
            <Lightformer
              key={i}
              form="circle"
              intensity={5}
              rotation={[Math.PI / 2, 0, 0]}
              position={[x, 4, i * 4]}
              scale={[4, 1, 1]}
            />
          ))}
          <Lightformer intensity={3} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[50, 2, 1]} />
          <Lightformer intensity={3} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[50, 2, 1]} />
        </group>
      </Environment>

      <CameraControls truckSpeed={0} dollySpeed={0} minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
    </>
  );
}

export function AboutScene() {
  return (
    <div className="absolute inset-0 w-full h-full min-h-[60vh]">
      <Canvas shadows camera={{ position: [0, 0, 8], fov: 35, near: 1, far: 50 }}>
        <SceneContent />
      </Canvas>
    </div>
  );
}
