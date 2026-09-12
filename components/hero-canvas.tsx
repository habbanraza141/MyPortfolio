"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, RoundedBox, Sparkles, useTexture } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { SRGBColorSpace, type Group } from "three";

function Portrait() {
  const texture = useTexture("/habban.jpg");
  texture.colorSpace = SRGBColorSpace;
  texture.anisotropy = 8;

  const group = useRef<Group>(null);
  const { pointer } = useThree();

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.rotation.y = pointer.x * 0.55 + Math.sin(t * 0.5) * 0.12;
    group.current.rotation.x = -pointer.y * 0.28 + 0.06;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.08} floatIntensity={0.42}>
      <group ref={group}>
        <RoundedBox args={[2.28, 2.58, 0.14]} radius={0.14} smoothness={8}>
          <meshStandardMaterial
            color="#0d121a"
            metalness={0.82}
            roughness={0.22}
          />
        </RoundedBox>
        <mesh position={[0, 0, 0.076]}>
          <planeGeometry args={[2.04, 2.34]} />
          <meshStandardMaterial
            map={texture}
            roughness={0.4}
            metalness={0.04}
          />
        </mesh>
        <mesh position={[0, 0, -0.08]}>
          <planeGeometry args={[2.12, 2.42]} />
          <meshBasicMaterial color="#22d3ee" transparent opacity={0.16} />
        </mesh>
      </group>
    </Float>
  );
}

function Rings() {
  const ref = useRef<Group>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.z = state.clock.elapsedTime * 0.14;
    ref.current.rotation.x = 0.72;
    ref.current.rotation.y = state.clock.elapsedTime * 0.08;
  });

  return (
    <group ref={ref}>
      <mesh>
        <torusGeometry args={[2.15, 0.012, 16, 90]} />
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.42} />
      </mesh>
      <mesh rotation={[0.2, Math.PI / 3, 0.1]}>
        <torusGeometry args={[2.5, 0.008, 16, 90]} />
        <meshBasicMaterial color="#818cf8" transparent opacity={0.32} />
      </mesh>
    </group>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.6], fov: 38 }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 6, 5]} intensity={1.45} color="#e0f2fe" />
      <pointLight position={[-3, -2, 2]} intensity={1.05} color="#22d3ee" />
      <pointLight position={[3, 2, 1]} intensity={0.75} color="#818cf8" />
      <Suspense fallback={null}>
        <Portrait />
      </Suspense>
      <Rings />
      <Sparkles count={55} scale={6.2} size={2} speed={0.28} color="#67e8f9" />
    </Canvas>
  );
}
