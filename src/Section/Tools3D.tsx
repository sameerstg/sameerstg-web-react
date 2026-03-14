"use client";
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Html } from '@react-three/drei';
import * as THREE from 'three';

const icons = [
  { src: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg', name: 'HTML5' },
  { src: 'https://www.svgrepo.com/show/452185/css-3.svg', name: 'CSS3' },
  { src: 'https://www.svgrepo.com/show/349419/javascript.svg', name: 'JavaScript' },
  { src: 'https://www.svgrepo.com/show/374146/typescript-official.svg', name: 'TypeScript' },
  { src: 'https://www.svgrepo.com/show/521299/next-16.svg', name: 'Next.js' },
  { src: 'https://www.svgrepo.com/show/303266/nodejs-icon-logo.svg', name: 'Node.js' },
  { src: 'https://www.svgrepo.com/show/354259/react.svg', name: 'React' },
  { src: 'https://cdn-icons-png.flaticon.com/512/888/888847.png', name: 'C' },
  { src: 'https://img.icons8.com/?size=100&id=40669&format=png&color=000000', name: 'C++' },
  { src: 'https://www.svgrepo.com/show/373604/flutter.svg', name: 'Flutter' },
  { src: 'https://www.svgrepo.com/show/331761/sql-database-sql-azure.svg', name: 'MySQL' },
  { src: 'https://www.svgrepo.com/show/374016/python.svg', name: 'Python' },
  { src: 'https://www.svgrepo.com/show/473818/unity.svg', name: 'Unity' },
  { src: 'https://www.svgrepo.com/show/353488/blender.svg', name: 'Blender' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Photoshop_CC_icon.png', name: 'Photoshop' },
  { src: 'https://www.adobe.com/cc-shared/assets/img/product-icons/svg/after-effects.svg', name: 'After Effects' },
  { src: 'https://www.svgrepo.com/show/373441/arduino.svg', name: 'Arduino' },
  { src: 'https://www.svgrepo.com/show/448222/figma.svg', name: 'Figma' },
  { src: 'https://www.svgrepo.com/show/354202/postman-icon.svg', name: 'Postman' },
  { src: 'https://www.svgrepo.com/show/373595/firebase.svg', name: 'Firebase' },
];

export function InteractiveGroup() {
  const group = useRef<THREE.Group>(null);
  const mouseTracker = useRef({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Fallback listener for document pointer if state.pointer doesn't register through overlapping divs
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseTracker.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseTracker.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state, delta) => {
    if (group.current) {
      // Base rotation continues regardless of mouse
      group.current.rotation.y += delta * 0.15;
      
      const targetX = mouseTracker.current.x * Math.PI * 0.5;
      const targetY = -mouseTracker.current.y * Math.PI * 0.5;
      
      // Intuitive interactive 3D tilt tracking the mouse!
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetY, 0.05);
      group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, -targetX * 0.5, 0.05);
    }
  });

  const [sectionIndex, setSectionIndex] = useState(0);
  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    setIsHome(window.location.pathname === '/' || window.location.pathname === '/Home');
    const handleSectionChange = (e: any) => {
      setSectionIndex(e.detail.index);
    };
    window.addEventListener("sectionIndexChange", handleSectionChange);
    return () => window.removeEventListener("sectionIndexChange", handleSectionChange);
  }, []);

  return (
    <group ref={group}>
      {icons.map((icon, i) => {
        // Distribute icons evenly spherically
        const phi = Math.acos(-1 + (2 * i) / icons.length);
        const theta = Math.sqrt(icons.length * Math.PI) * phi;
        const r = isMobile ? 3.5 : 5.8; // Radius scale
        const x = r * Math.cos(theta) * Math.sin(phi);
        const y = r * Math.sin(theta) * Math.sin(phi);
        const z = r * Math.cos(phi);

        const currentOpacity = (isHome && sectionIndex === 0) ? 0.6 : 0.03;
        const currentScale = (isHome && sectionIndex === 0) ? 1 : 0.7;

        return (
          <Float key={i} speed={2} rotationIntensity={1} floatIntensity={2} position={[x, y, z]}>
            <Html transform sprite center style={{ pointerEvents: 'none', mixBlendMode: 'screen', opacity: currentOpacity, transition: 'all 1.5s ease-in-out', transform: `scale(${currentScale})` }}>
              <div className="w-10 h-10 tablet:w-14 tablet:h-14 rounded-xl flex items-center justify-center bg-black/40 backdrop-blur-md border border-[#00ffff]/10 shadow-[0_0_10px_rgba(0,255,255,0.05)]">
                <img src={icon.src} alt={icon.name} className="w-5 h-5 tablet:w-7 tablet:h-7 object-contain grayscale-[0.2]" />
              </div>
            </Html>
          </Float>
        );
      })}
    </group>
  );
}
