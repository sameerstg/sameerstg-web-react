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
import Magnetic from "@/Components/Magnetic";


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

const otherRelatedLinks = [
    { name: "Chess.com", label: "♟️", href: "https://www.chess.com/member/sameerstg" },
    { name: "Leetcode", label: "💻", href: "https://leetcode.com/sameerstg/" },
    { name: "Monkeytype", label: "⌨️", href: "https://monkeytype.com/profile/Sameerstg" },
];

function TiltIcon({ social, index, total }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [25, -25]), { damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-25, 25]), { damping: 20 });

  const handleHoverMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const handleHoverLeave = () => {
    x.set(0);
    y.set(0);
  };

  // 3D positioning
  const angle = (index / total) * Math.PI * 2;
  const isOuter = index >= 8; 
  const radius = 100; 
  const baseX = Math.cos(angle) * radius;
  const baseY = Math.sin(angle) * radius;

  return (
    <div 
        className="absolute w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] flex items-center justify-center"
        style={{ 
            left: `calc(50% + ${baseX}px)`, 
            top: `calc(50% + ${baseY}px)`,
            transform: 'translate(-50%, -50%)',
            zIndex: isOuter ? 10 : 20
        }}
    >
      <Magnetic>
        <motion.a
          href={social.href}
          target="_blank"
          rel="noreferrer noopener"
          onMouseMove={handleHoverMove}
          onMouseLeave={handleHoverLeave}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: isOuter ? 0.8 : 1 }}
          viewport={{ once: false }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: index * 0.05 }}
          whileHover={{ scale: isOuter ? 1.1 : 1.2, zIndex: 50 }}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          className="flex items-center justify-center p-3 sm:p-4 bg-black/40 backdrop-blur-xl border border-[#00ffff]/20 rounded-2xl shadow-[0_0_20px_rgba(0,255,255,0.15)] group hover:border-[#00ffff]/60 hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] transition-colors"
        >
          <div style={{ transform: "translateZ(30px)" }} className="relative pointer-events-none">
             <Image src={social.image} alt={social.name} className="w-8 h-8 sm:w-10 sm:h-10 object-contain drop-shadow-[0_0_5px_#00ffff]" />
          </div>
          
          <div 
            style={{ transform: "translateZ(60px) translateY(-50px) translateX(-50%)" }} 
            className="absolute left-1/2 top-0 bg-black/80 px-3 py-1 rounded-MD text-xs font-bold tracking-widest text-[#00ffff] opacity-0 group-hover:opacity-100 transition-opacity border border-white/10 pointer-events-none shadow-2xl whitespace-nowrap"
          >
            {social.name}
          </div>
        </motion.a>
      </Magnetic>
    </div>

  );
}


export default function Socials() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  const rotateX = useTransform(springY, [-1, 1], [15, -15]);
  const rotateY = useTransform(springX, [-1, 1], [-15, 15]);

  useEffect(() => {
    const handleMove = (e) => {
      mouseX.set((e.clientX / window.innerWidth) * 2 - 1);
      mouseY.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <div className="relative w-full flex flex-col items-center justify-center min-h-[500px]">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="absolute top-0 z-20"
      >
        <div className="relative px-8 py-3 rounded-full bg-black/60 backdrop-blur-xl border border-[#00ffff]/30 shadow-[0_0_20px_rgba(0,255,255,0.2)]">
          <span className="text-white text-sm sm:text-base font-black tracking-[0.5em] uppercase bg-gradient-to-r from-white via-[#00ffff] to-white bg-clip-text text-transparent">
            Connect with me
          </span>
          <div className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-[#00ffff] to-transparent shadow-[0_0_10px_#00ffff]" />
        </div>
      </motion.div>

      {/* Main 3D Container */}
      <motion.div 
        className="relative flex items-center justify-center w-full h-[300px] z-10 mt-10"
        style={{ 
          perspective: "1200px",
          rotateX,
          rotateY,
        }}
      >
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

      {/* Related Links Shelf */}
      <div className="mt-12 flex flex-col items-center gap-4 z-20">
         <div className="text-[10px] text-white/30 tracking-[0.4em] uppercase font-bold">Other Related Links</div>
         <div className="flex gap-4">
            {otherRelatedLinks.map((link, i) => (
                <Magnetic key={link.name}>
                    <motion.a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="w-12 h-12 flex items-center justify-center bg-black/40 backdrop-blur-lg border border-white/10 rounded-xl hover:border-[#00ffff]/50 hover:bg-[#00ffff]/10 transition-all text-xl"
                        title={link.name}
                    >
                        {link.label}
                    </motion.a>
                </Magnetic>
            ))}
         </div>
      </div>
    </div>
  );
}

