"use client";

import React, { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Stars, Sparkles, Environment, Text, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { InteractiveGroup } from "../Section/Tools3D";

function RotatingShapes() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const scrollTracker = useRef(0);
  const mouseTracker = useRef({ x: 0, y: 0 });

  const { viewport } = useThree();

  // Optimized data structure for 100+ shapes
  const count = 40;
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const items = useMemo(() => {
    return Array.from({ length: count }).map(() => ({
      position: [
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 60 - 5,
        (Math.random() - 0.5) * 20 - 10,
      ] as [number, number, number],
      factor: Math.random() * 2 + 0.5,
      speed: Math.random() * 0.01 + 0.005,
      xFactor: Math.random() * 10,
      yFactor: Math.random() * 10,
      zFactor: Math.random() * 10,
    }));
  }, []);

  useEffect(() => {
    const handleScroll = () => { scrollTracker.current = window.scrollY; };
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

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (!meshRef.current) return;

    items.forEach((item, i) => {
      const { position, xFactor, yFactor, zFactor, speed } = item;
      
      const x = position[0] + Math.cos(time * speed + xFactor) * 2;
      const y = position[1] + Math.sin(time * speed + yFactor) * 2 + (scrollTracker.current * 0.002);
      const z = position[2] + Math.sin(time * speed + zFactor) * 2;

      dummy.position.set(x, y, z);
      dummy.rotation.set(time * speed, time * speed, time * speed);
      
      // Interactive mouse tilt influence
      dummy.rotation.x += mouseTracker.current.y * 0.1;
      dummy.rotation.y += mouseTracker.current.x * 0.1;
      
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <octahedronGeometry args={[0.6, 0]} />
      <meshStandardMaterial
        color="#00ffff"
        metalness={0.9}
        roughness={0.1}
        transparent
        opacity={0.3}
        wireframe
      />
    </instancedMesh>
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
          dpr={[1, 2]} // Performance: limit pixel ratio on high-density screens
          gl={{
            powerPreference: "high-performance",
            alpha: true,
            antialias: false,
            stencil: false,
            depth: true
          }}
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
