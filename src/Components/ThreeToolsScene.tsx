"use client";

import React, { useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Sparkles, Html } from "@react-three/drei";

const techLogos = [
  { src: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg", name: "HTML5" },
  { src: "https://www.svgrepo.com/show/452185/css-3.svg", name: "CSS3" },
  { src: "https://www.svgrepo.com/show/349419/javascript.svg", name: "JavaScript" },
  { src: "https://www.svgrepo.com/show/374146/typescript-official.svg", name: "TypeScript" },
  { src: "https://www.svgrepo.com/show/521299/next-16.svg", name: "Next.js" },
  { src: "https://www.svgrepo.com/show/303266/nodejs-icon-logo.svg", name: "Node.js" },
  { src: "https://www.svgrepo.com/show/354259/react.svg", name: "React" },
  { src: "https://cdn-icons-png.flaticon.com/512/888/888847.png", name: "C" },
  { src: "https://img.icons8.com/?size=100&id=40669&format=png&color=000000", name: "C++" },
  { src: "https://www.svgrepo.com/show/373604/flutter.svg", name: "Flutter" },
  { src: "https://www.svgrepo.com/show/331761/sql-database-sql-azure.svg", name: "MySQL" },
  { src: "https://www.svgrepo.com/show/374016/python.svg", name: "Python" },
  { src: "https://www.svgrepo.com/show/473818/unity.svg", name: "Unity" },
  { src: "https://www.svgrepo.com/show/353488/blender.svg", name: "Blender" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/2/20/Photoshop_CC_icon.png", name: "Photoshop" },
  { src: "https://www.adobe.com/cc-shared/assets/img/product-icons/svg/after-effects.svg", name: "After Effects" },
  { src: "https://www.audacityteam.org/_astro/Audacity_Logo.DK8H7nvr.svg", name: "Audacity" },
  { src: "https://www.svgrepo.com/show/373441/arduino.svg", name: "Arduino" },
  { src: "https://icon.icepanel.io/Technology/svg/.NET-core.svg", name: ".NET" },
  { src: "https://www.svgrepo.com/show/448222/figma.svg", name: "Figma" },
  { src: "https://www.svgrepo.com/show/354202/postman-icon.svg", name: "Postman" },
  { src: "https://www.svgrepo.com/show/373595/firebase.svg", name: "Firebase" },
];

import { useState, useEffect } from "react";

function LogoPlane({ src, name, position, index }: { src: string; name: string; position: [number, number, number]; index: number }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    // Staggered entrance
    const timeout = setTimeout(() => setVisible(true), 300 + index * 120);
    return () => clearTimeout(timeout);
  }, [index]);
  // Animate from outside (x/y scaled up, opacity 0 → 1)
  const startX = position[0] * 2.2;
  const startY = position[1] * 2.2;
  return (
    <Float speed={1.2} rotationIntensity={0.7} floatIntensity={0.7}>
      <Html center position={position} transform style={{ pointerEvents: "none" }}>
        <img
          src={src}
          alt={name}
          width={38}
          height={38}
          style={{
            borderRadius: "8px",
            boxShadow: "0 2px 8px #0ea5e9",
            opacity: visible ? 1 : 0,
            transform: visible
              ? "translate(0px,0px) scale(1)"
              : `translate(${startX}px,${startY}px) scale(0.7)`,
            transition: "opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)",
          }}
        />
      </Html>
    </Float>
  );
}

function ThreeToolsScene() {
  // Mobile detection
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
  // Arrange logos in a grid (not stacked)
  const logoPositions = useMemo(() => {
    const cols = isMobile ? 4 : 6;
    const rows = Math.ceil(techLogos.length / cols);
    const spacingX = isMobile ? 1.2 : 1.6;
    const spacingY = isMobile ? 1.2 : 1.6;
    return techLogos.map((_, i) => {
      const col = i % cols;
      const row = Math.floor(i / cols);
      // Center grid
      const x = (col - (cols - 1) / 2) * spacingX;
      const y = (row - (rows - 1) / 2) * spacingY;
      return [x, y, 0.2] as [number, number, number];
    });
  }, [isMobile]);

  return (
    <div className="relative w-full max-w-sm tablet:max-w-md h-72 tablet:h-96 rounded-2xl overflow-hidden border border-white/25 bg-[#040a10] shadow-[0_16px_50px_rgba(0,160,220,0.2)]">
      <Canvas
        dpr={[1, 1.6]}
        camera={{ position: [0, 0, 6.4], fov: 52 }}
        shadows
        gl={{ powerPreference: "low-power" }}
        frameloop="demand"
      >
        <color attach="background" args={["#040a10"]} />
        <fog attach="fog" args={["#040a10", 6, 12]} />

        <ambientLight intensity={0.45} />
        <directionalLight position={[4, 4, 3]} intensity={0.7} castShadow />
        <pointLight position={[-4, -2, 2]} intensity={0.5} color="#0ea5e9" />

        <Sparkles
          count={isMobile ? 20 : 55}
          scale={[7, 7, 7]}
          size={1.5}
          speed={0.25}
          color="#8be9ff"
        />

        {techLogos.map((logo, i) => (
          <LogoPlane key={logo.name} src={logo.src} name={logo.name} position={logoPositions[i]} index={i} />
        ))}

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          autoRotate={!isMobile}
          autoRotateSpeed={isMobile ? 0.3 : 0.7}
          minPolarAngle={Math.PI / 3.2}
          maxPolarAngle={(Math.PI * 2) / 3}
        />
      </Canvas>

      <p className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 text-[11px] tablet:text-xs tracking-wide text-[#8be9ff]/90">
        Drag to rotate • Powered by Three.js
      </p>
    </div>
  );
}

export default ThreeToolsScene;