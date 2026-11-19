import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial, RoundedBox, Sparkles } from "@react-three/drei";
import { useRef } from "react";
import type { Group, Mesh } from "three";

// Scene colours mirror the CSS palette tokens (lime / pink / cyan / violet).
const LIME = "#c8ff3d";
const PINK = "#ff3d9a";
const CYAN = "#5ee7ff";
const VIOLET = "#7c3aed";

function Blob() {
  const ref = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.25;
    ref.current.rotation.x += delta * 0.08;
  });
  return (
    <mesh ref={ref} scale={1.55}>
      <icosahedronGeometry args={[1, 64]} />
      <MeshDistortMaterial
        color={VIOLET}
        emissive={VIOLET}
        emissiveIntensity={0.25}
        roughness={0.12}
        metalness={0.85}
        distort={0.42}
        speed={2.2}
      />
    </mesh>
  );
}

function Ring() {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = Math.PI / 2.4 + Math.sin(state.clock.elapsedTime * 0.4) * 0.15;
    ref.current.rotation.z = state.clock.elapsedTime * 0.3;
  });
  return (
    <mesh ref={ref} scale={2.3}>
      <torusGeometry args={[1, 0.018, 16, 160]} />
      <meshStandardMaterial color={LIME} emissive={LIME} emissiveIntensity={1.2} />
    </mesh>
  );
}

function Pod({ position, color, size = 0.42, speed = 1.5 }: { position: [number, number, number]; color: string; size?: number; speed?: number }) {
  return (
    <Float speed={speed} rotationIntensity={1.6} floatIntensity={1.8}>
      <RoundedBox args={[size, size, size]} radius={size * 0.18} smoothness={4} position={position}>
        <meshStandardMaterial color={color} roughness={0.25} metalness={0.4} emissive={color} emissiveIntensity={0.35} />
      </RoundedBox>
    </Float>
  );
}

function Knot() {
  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={1.4}>
      <mesh position={[-1.9, -1.3, 0.6]} scale={0.32}>
        <torusKnotGeometry args={[1, 0.32, 140, 20]} />
        <meshStandardMaterial color={PINK} roughness={0.2} metalness={0.6} emissive={PINK} emissiveIntensity={0.3} />
      </mesh>
    </Float>
  );
}

function Rig() {
  const group = useRef<Group>(null);
  const { viewport, size } = useThree();
  const wide = size.width >= 900;
  // Fit the cluster to the visible height so tall or short screens never crop it.
  const fit = Math.min(1, viewport.height / 6.2, viewport.width / (wide ? 9 : 5));
  useFrame((state) => {
    const g = group.current;
    if (!g) return;
    g.rotation.y += (state.pointer.x * 0.35 - g.rotation.y) * 0.05;
    g.rotation.x += (-state.pointer.y * 0.25 - g.rotation.x) * 0.05;
  });
  return (
    <group
      ref={group}
      position={wide ? [viewport.width * 0.24, 0, 0] : [viewport.width * 0.22, viewport.height * 0.24, -1]}
      scale={fit}
    >
      <Blob />
      <Ring />
      {wide ? <Knot /> : null}
      <Pod position={[2.1, 1.3, 0.4]} color={LIME} />
      <Pod position={[-2.2, 1.5, -0.6]} color={CYAN} size={0.34} speed={2.2} />
      <Pod position={[1.8, -1.6, 0.8]} color={PINK} size={0.28} speed={1.2} />
      <Pod position={[0.2, 2.2, -1]} color={CYAN} size={0.22} speed={2.6} />
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas dpr={[1, 1.75]} camera={{ position: [0, 0, 6.5], fov: 45 }} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 5, 5]} intensity={1.4} />
      <pointLight position={[-4, -2, 3]} intensity={40} color={PINK} />
      <pointLight position={[4, 2, 2]} intensity={40} color={LIME} />
      <pointLight position={[0, -4, -2]} intensity={30} color={CYAN} />
      <Rig />
      <Sparkles count={70} scale={[12, 7, 4]} size={2.2} speed={0.4} color={LIME} opacity={0.7} />
    </Canvas>
  );
}
