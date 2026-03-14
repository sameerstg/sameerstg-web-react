"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const interestsData = [
  { id: 1, text: "🚀 Latest Technologies", color: "#00ffff" },
  { id: 2, text: "👨‍💻 Software Development", color: "#8be9ff" },
  { id: 3, text: "💭 Conspiracies & Thinking", color: "#00ffcc" },
  { id: 4, text: "♟ Chess - ⚽ Football - 🎮 Games", color: "#00b5ff" },
];

function TiltInterestBox({ interest, index, total }) {
  const ref = useRef(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(y, [0, 1], [15, -15]), { damping: 20 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-15, 15]), { damping: 20 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, x: -100, rotateY: -30 }}
      whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: index * 0.15 }}
      whileHover={{ scale: 1.05, zIndex: 10 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full sm:w-[350px] p-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] cursor-pointer group hover:border-[#00ffff]/40"
    >
      <div 
        style={{ transform: "translateZ(40px)" }} 
        className="flex items-center gap-4 text-white font-bold tracking-wide"
      >
        <span style={{ color: interest.color }} className="text-xl opacity-80 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_8px_rgba(0,255,255,0.4)]">
          {interest.text.split(" ")[0]} 
        </span>
        <span className="group-hover:text-white text-white/80 transition-colors pointer-events-none">
          {interest.text.substring(interest.text.indexOf(" ") + 1)}
        </span>
      </div>
      
      {/* 3D Underglow */}
      <div 
        style={{ transform: "translateZ(-20px)", background: interest.color }} 
        className="absolute inset-0 blur-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl"
      />
    </motion.div>
  );
}

export default function Interests() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  const rotateX = useTransform(springY, [-1, 1], [5, -5]);
  const rotateY = useTransform(springX, [-1, 1], [-5, 5]);

  useEffect(() => {
    const handleMove = (e) => {
      mouseX.set((e.clientX / window.innerWidth) * 2 - 1);
      mouseY.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <div className="relative w-full flex flex-col items-center justify-center min-h-[400px] sm:min-h-[500px]">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-white/50 text-xs sm:text-sm font-bold tracking-[0.4em] uppercase mb-12 mix-blend-screen bg-black/30 px-6 py-2 rounded-full border border-white/5"
      >
        My Interests
      </motion.div>

      <motion.div 
        className="flex flex-col gap-4 perspective-[1000px] w-full px-4 items-center"
        style={{ 
          rotateX,
          rotateY,
        }}
      >
        {interestsData.map((interest, index) => (
          <TiltInterestBox 
            key={interest.id} 
            interest={interest} 
            index={index} 
            total={interestsData.length} 
          />
        ))}
      </motion.div>
    </div>
  );
}