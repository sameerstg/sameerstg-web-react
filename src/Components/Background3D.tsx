"use client";

import React, { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, Sparkles, Environment, Text } from "@react-three/drei";
import * as THREE from "three";
import { InteractiveGroup } from "../Section/Tools3D";

function RotatingShapes() {
  const group = useRef<THREE.Group>(null);
  const scrollTracker = useRef(0);
  const mouseTracker = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      scrollTracker.current = window.scrollY;
    };
    const handleMouseMove = (e: MouseEvent) => {
      mouseTracker.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseTracker.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useFrame((state, delta) => {
    if (group.current) {
      // Rotate the entire group slowly
      group.current.rotation.y += delta * 0.05;

      // Parallax effect on scroll
      const targetY = scrollTracker.current * 0.005;
      group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, targetY, delta * 3);

      // Mouse interactive tilt
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        -mouseTracker.current.y * 0.2,
        delta * 2
      );
      group.current.rotation.z = THREE.MathUtils.lerp(
        group.current.rotation.z,
        -mouseTracker.current.x * 0.2,
        delta * 2
      );
    }
  });

  // Array of random shapes to distribute
  const items = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => ({
      position: [
        (Math.random() - 0.5) * 35,
        (Math.random() - 0.5) * 60 - 10,
        (Math.random() - 0.5) * 15 - 5,
      ] as [number, number, number],
      scale: Math.random() * 0.8 + 0.2,
      rotation: [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI,
      ] as [number, number, number],
      type: Math.floor(Math.random() * 3),
      speed: Math.random() * 2 + 0.5,
    }));
  }, []);

  return (
    <group ref={group}>


      {items.map((item, i) => (
        <Float
          key={i}
          speed={item.speed}
          rotationIntensity={1.5}
          floatIntensity={2}
          position={item.position}
        >
          <mesh rotation={item.rotation} scale={item.scale}>
            {item.type === 0 ? (
              <octahedronGeometry args={[1, 0]} />
            ) : item.type === 1 ? (
              <icosahedronGeometry args={[1, 1]} />
            ) : (
              <torusGeometry args={[0.5, 0.2, 16, 32]} />
            )}
            <meshStandardMaterial
              color={item.type === 0 ? "#00ffff" : item.type === 1 ? "#3b82f6" : "#6366f1"}
              wireframe={item.type !== 0}
              metalness={0.8}
              roughness={0.2}
              transparent
              opacity={0.6}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

export default function Background3D() {
  const [mounted, setMounted] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div
        className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#020617] transition-all duration-1000 ease-in-out ${loaded ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
      >
        <div className="relative flex items-center justify-center">
          <div className="w-20 h-20 border-4 border-transparent border-t-[#00ffff] border-l-[#00ffff] rounded-full animate-spin"></div>
          <div className="absolute w-12 h-12 border-4 border-transparent border-b-[#6366f1] border-r-[#6366f1] rounded-full animate-[spin_1.5s_linear_reverse]"></div>
          <div className="absolute font-bold text-white text-xs">STG</div>
        </div>
        <p className="mt-6 text-[#00ffff] font-mono tracking-widest text-sm animate-pulse uppercase">
          Initializing Universe...
        </p>
      </div>

      <div className={`fixed top-0 left-0 w-full h-full -z-50 pointer-events-none transition-opacity duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}>
        <Canvas
          camera={{ position: [0, 0, 10], fov: 50 }}
          onCreated={() => {
            // Slight delay to ensure content is ready before fade
            setTimeout(() => setLoaded(true), 1200);
          }}
        >
          <ambientLight intensity={0.2} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} color="#00ffff" />
          <directionalLight position={[-10, -10, -5]} intensity={1} color="#6366f1" />
          <pointLight position={[0, 0, 0]} intensity={2} color="#8be9ff" />

          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <Sparkles count={200} scale={20} size={2} speed={0.4} opacity={0.3} color="#00ffff" />

          <InteractiveGroup />
          <RotatingShapes />
        </Canvas>
      </div>
    </>
  );
}
