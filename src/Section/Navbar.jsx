"use client";
import React, { useState, useEffect } from "react";
import logo from "../Assets/Images/logo.png";
import { motion, AnimatePresence } from "framer-motion";
import { BsList, BsXLg } from "react-icons/bs";
import Image from "next/image";
import { useRouter } from 'next/navigation';

const navItems = [
  { name: "Home", id: "home", index: 0 },
  { name: "Socials", id: "socials", index: 1 },
  { name: "Portfolio", id: "portfolio", index: 2 },
  { name: "Contact", id: "footer", index: 4 }
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const onIndexChange = (e) => setActiveIndex(e.detail.index);
    window.addEventListener("sectionIndexChange", onIndexChange);
    return () => window.removeEventListener("sectionIndexChange", onIndexChange);
  }, []);

  const handleNav = (id) => {
    if (window?.location?.pathname === '/') {
      window.dispatchEvent(new CustomEvent('navigateToSection', { detail: { id } }));
    } else {
      router.push('/');
    }
    setDrawerOpen(false);
  };

  return (
    <>
      <motion.div 
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-[100] transition-all duration-700 rounded-full flex items-center justify-between px-6 shadow-2xl backdrop-blur-md border ${
          activeIndex > 0 || drawerOpen
            ? "w-[90vw] tablet:w-[60vw] bg-black/60 border-[#00ffff]/20 py-2" 
            : "w-[95vw] tablet:w-[80vw] bg-transparent border-transparent py-4"
        }`}
      >
        {/* Left: Logo */}
        <button onClick={() => handleNav("home")} className="hover:scale-110 transition-transform drop-shadow-[0_0_10px_rgba(0,255,255,0.2)]">
          <Image height={activeIndex > 0 || drawerOpen ? 35 : 55} width={activeIndex > 0 || drawerOpen ? 35 : 55} src={logo} alt="logo" className="transition-all duration-700 object-contain" />
        </button>

        {/* Center/Right: Desktop Links */}
        <div className="hidden tablet:flex items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`relative text-xs lg:text-sm font-bold tracking-[0.2em] uppercase transition-colors duration-300 py-2 ${
                activeIndex === item.index ? "text-[#00ffff]" : "text-white/60 hover:text-white"
              }`}
            >
              {item.name}
              {activeIndex === item.index && (
                <motion.div 
                  layoutId="nav-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#00ffff] rounded-full shadow-[0_0_10px_#00ffff]"
                  transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Right: Mobile Burger */}
        <div className="tablet:hidden flex items-center">
          <button onClick={() => setDrawerOpen(!drawerOpen)} className={`transition-colors p-2 ${drawerOpen ? 'text-[#00ffff]' : 'text-white hover:text-[#00ffff]'}`}>
             {drawerOpen ? <BsXLg size={26} className="drop-shadow-[0_0_10px_#00ffff]" /> : <BsList size={34} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[90] bg-black/80 flex flex-col items-center justify-center gap-10 tablet:hidden"
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { delay: i * 0.1 + 0.1 } }}
                exit={{ opacity: 0, y: 20, transition: { delay: (navItems.length - i) * 0.05 } }}
                onClick={() => handleNav(item.id)}
                className={`text-xl sm:text-3xl font-black tracking-widest uppercase transition-all duration-300 ${
                  activeIndex === item.index 
                    ? "text-[#00ffff] scale-125 drop-shadow-[0_0_15px_rgba(0,255,255,0.8)]" 
                    : "text-white/50 hover:text-white hover:scale-110"
                }`}
              >
                {item.name}
              </motion.button>
            ))}
            
            {/* Mobile Footer Decor */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.6 } }}
              className="absolute bottom-12 flex flex-col items-center gap-2 opacity-50"
            >
              <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-[#00ffff]" />
              <div className="text-[10px] text-[#00ffff] tracking-widest uppercase font-mono">Navigate</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
