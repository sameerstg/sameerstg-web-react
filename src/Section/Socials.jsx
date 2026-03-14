"use client";
import React, { useRef, useState, useEffect } from "react";
import github from "../Assets/Images/Socials/github.svg";
import linkedin from "../Assets/Images/Socials/linkedin.svg";
import artstation from "../Assets/Images/Socials/artstation.svg";
import facebook from "../Assets/Images/Socials/facebook.svg";
import playstore from "../Assets/Images/Socials/playstore.svg";
import instagram from "../Assets/Images/Socials/instagram.svg";
import youtube from "../Assets/Images/Socials/youtube.svg";
import discord from "../Assets/Images/Socials/discord.svg";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

const socials = [
  { name: "Play Store", image: playstore, href: "https://play.google.com/store/apps/developer?id=Sameerstg" },
  { name: "GitHub", image: github, href: "https://github.com/sameerstg" },
  { name: "LinkedIn", image: linkedin, href: "https://www.linkedin.com/in/sameerstg/" },
  { name: "ArtStation", image: artstation, href: "https://www.artstation.com/sameerstg8" },
  { name: "Facebook", image: facebook, href: "https://www.facebook.com/profile.php?id=100069067089055" },
  { name: "Instagram", image: instagram, href: "https://www.instagram.com/sameerstg/" },
  { name: "YouTube", image: youtube, href: "https://www.youtube.com/channel/UCt68mmpafwAmhsENbxr_5Lg?view_as=subscriber" },
  { name: "Discord", image: discord, href: "https://discord.gg/pJVTACah" },
];

function TiltIcon({ social, index, total }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [25, -25]), { damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-25, 25]), { damping: 20 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // 3D positioning
  const angle = (index / total) * Math.PI * 2;
  const radius = 100; // Expanded base radius
  const baseX = Math.cos(angle) * radius;
  const baseY = Math.sin(angle) * radius;

  return (
    <motion.a
      href={social.href}
      target="_blank"
      rel="noreferrer noopener"
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, x: baseX * 2, y: baseY * 2, scale: 0 }}
      whileInView={{ opacity: 1, x: baseX, y: baseY, scale: 1 }}
      viewport={{ once: false }}
      transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.1 }}
      whileHover={{ scale: 1.2, zIndex: 50 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="absolute flex items-center justify-center p-3 sm:p-4 bg-black/40 backdrop-blur-xl border border-[#00ffff]/20 rounded-2xl shadow-[0_0_20px_rgba(0,255,255,0.15)] group hover:border-[#00ffff]/60 hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] transition-colors"
    >
      <div style={{ transform: "translateZ(30px)" }} className="relative pointer-events-none">
        <Image src={social.image} alt={social.name} className="w-8 h-8 sm:w-10 sm:h-10 object-contain drop-shadow-[0_0_5px_#00ffff]" />
      </div>
      
      {/* 3D Floating Tooltip */}
      <div 
        style={{ transform: "translateZ(60px) translateY(-50px) translateX(-50%)" }} 
        className="absolute left-1/2 top-0 bg-black/80 px-3 py-1 rounded-MD text-xs font-bold tracking-widest text-[#00ffff] opacity-0 group-hover:opacity-100 transition-opacity border border-white/10 pointer-events-none shadow-2xl whitespace-nowrap"
      >
        {social.name}
      </div>
    </motion.a>
  );
}

export default function Socials() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleMove = (e) => {
      setMouseX((e.clientX / window.innerWidth) * 2 - 1);
      setMouseY((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="relative w-full flex flex-col items-center justify-center min-h-[350px] sm:min-h-[400px]">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="absolute top-0 text-white/50 text-xs sm:text-sm font-bold tracking-[0.4em] uppercase z-20 mix-blend-screen bg-black/30 px-6 py-2 rounded-full border border-white/5"
      >
        Connect with me
      </motion.div>

      {/* Main 3D Container */}
      <motion.div 
        className="relative flex items-center justify-center w-full h-full z-10 mt-10"
        style={{ 
          perspective: "1200px",
          rotateX: mouseY * -15,
          rotateY: mouseX * 15,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
      >
        {/* Core Glowing Orb */}
        <div className="absolute w-[60px] h-[60px] rounded-full bg-[#00ffff]/10 shadow-[0_0_60px_#00ffff] animate-pulse pointer-events-none" />

        {socials.map((social, index) => (
          <TiltIcon
            key={index}
            social={social}
            index={index}
            total={socials.length}
          />
        ))}
      </motion.div>
    </div>
  );
}
