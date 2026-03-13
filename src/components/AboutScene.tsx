"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sky, OrbitControls, Float, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";

function FloatingShapes() {
  const group = useRef<THREE.Group>(null);
  const torusRef = useRef<THREE.Mesh>(null);
  const icosaRef = useRef<THREE.Mesh>(null);
  const knotRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (group.current) {
      group.current.rotation.y = t * 0.05;
    }
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.2;
      torusRef.current.rotation.y = t * 0.3;
    }
    if (icosaRef.current) {
      icosaRef.current.rotation.x = t * 0.15;
      icosaRef.current.rotation.y = t * -0.2;
    }
    if (knotRef.current) {
      knotRef.current.rotation.x = t * 0.1;
      knotRef.current.rotation.y = t * 0.25;
    }
  });

  return (
    <group ref={group}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh ref={torusRef} position={[-2, 0.8, -1]}>
          <torusKnotGeometry args={[0.4, 0.12, 128, 32]} />
          <meshStandardMaterial color="#39ff14" metalness={0.3} roughness={0.4} />
        </mesh>
      </Float>
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.4}>
        <mesh ref={icosaRef} position={[2, -0.3, -0.5]}>
          <icosahedronGeometry args={[0.5, 0]} />
          <meshStandardMaterial color="#ff1493" metalness={0.2} roughness={0.6} wireframe />
        </mesh>
      </Float>
      <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.6}>
        <mesh ref={knotRef} position={[0, 1.2, -1.5]}>
          <torusGeometry args={[0.35, 0.1, 32, 64]} />
          <MeshTransmissionMaterial
            backside
            samples={4}
            thickness={0.5}
            chromaticAberration={0.1}
            anisotropy={0.3}
            distortion={0.2}
            distortionScale={0.2}
            temporalDistortion={0.1}
            iridescence={0.2}
            iridescenceIOR={1}
            iridescenceThicknessRange={[0, 1400]}
            color="#a78bfa"
          />
        </mesh>
      </Float>
      <Float speed={1.8} rotationIntensity={0.25} floatIntensity={0.35}>
        <mesh position={[1.5, 0.5, -2]}>
          <dodecahedronGeometry args={[0.3, 0]} />
          <meshStandardMaterial color="#22d3ee" metalness={0.5} roughness={0.3} />
        </mesh>
      </Float>
      <Float speed={2.2} rotationIntensity={0.2} floatIntensity={0.45}>
        <mesh position={[-1.2, -0.5, -1.2]}>
          <octahedronGeometry args={[0.25, 0]} />
          <meshStandardMaterial color="#fbbf24" metalness={0.4} roughness={0.4} />
        </mesh>
      </Float>
    </group>
  );
}

function SceneContent() {
  return (
    <>
      <Sky
        distance={450000}
        sunPosition={[0.5, 0.8, 0.5]}
        inclination={0.55}
        azimuth={0.25}
        turbidity={8}
        rayleigh={2}
        mieCoefficient={0.005}
        mieDirectionalG={0.8}
      />
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
      <directionalLight position={[-3, 2, 2]} intensity={0.5} />
      <pointLight position={[0, 2, 2]} intensity={0.8} color="#39ff14" />
      <pointLight position={[2, -1, 1]} intensity={0.4} color="#ff1493" />
      <FloatingShapes />
      <OrbitControls
        enableDamping
        dampingFactor={0.05}
        minPolarAngle={0.3}
        maxPolarAngle={Math.PI / 2 - 0.1}
        minDistance={3}
        maxDistance={12}
        target={[0, 0.3, 0]}
      />
    </>
  );
}

export function AboutScene() {
  return (
    <div className="absolute inset-0 w-full h-full min-h-[60vh] bg-[var(--background)]">
      <Canvas
        camera={{ position: [4, 2, 6], fov: 45 }}
        gl={{ antialias: true, alpha: false }}
        dpr={[1, 2]}
      >
        <SceneContent />
      </Canvas>
    </div>
  );
}
