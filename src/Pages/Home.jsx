"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Intro from "@/Section/Intro";
import Portfolio from "@/Section/Portfolio";
import Socials from "@/Section/Socials";
import Interests from "@/Section/Interests";
import GithubSection from "@/Section/GithubSection";
import OtherLinks from "@/Section/OtherLinks";
import { Vortex } from "@/Components/ui/vortex";
import Feedback from "@/Section/Feedback";
import Background3D from "@/Components/Background3D";
import Footer from "@/Section/Footer";

const UserHelpOverlay = ({ show }) => (
  <div className={`fixed bottom-10 left-1/2 -translate-x-1/2 z-50 transition-opacity duration-1000 pointer-events-none flex flex-col items-center gap-3 ${show ? "opacity-100" : "opacity-0"}`}>
    <div className="flex items-center gap-5 bg-black/60 backdrop-blur-lg px-6 py-3 rounded-full border border-white/10 shadow-[0_0_20px_rgba(0,255,255,0.3)]">
      <div className="flex items-center gap-2">
        <div className="w-5 h-8 border-2 border-white/70 rounded-full flex justify-center pt-1">
          <div className="w-1 h-2 bg-[#00ffff] rounded-full animate-bounce" />
        </div>
        <span className="text-xs uppercase font-bold text-white/80 tracking-widest hidden tablet:block">Scroll</span>
      </div>
      <div className="w-[1px] h-6 bg-white/20 hidden tablet:block" />
      <div className="flex items-center gap-2">
        <div className="relative w-8 h-8 flex justify-center items-center">
           <svg viewBox="0 0 24 24" fill="none" stroke="#00ffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 animate-pulse">
             <path d="M12 20v-5m0 0V9a2 2 0 0 1 4 0v3m-4-3a2 2 0 0 0-4 0v1m4 4h-2a3 3 0 0 1-3-3V9m8 6h2a3 3 0 0 0 3-3V8a3 3 0 0 0-6 0v2"></path>
           </svg>
        </div>
        <span className="text-xs uppercase font-bold text-white/80 tracking-widest hidden tablet:block">Swipe</span>
      </div>
    </div>
  </div>
);

const FullScreenWrap = ({ children }) => (
  <div className="w-full h-full overflow-y-auto hide-scrollbar flex flex-col items-center">
    {children}
  </div>
);

const variants = {
  enter: (custom) => {
    const { dir, side } = custom;
    let x = 0; let y = 0;
    // 0: bottom, 1: right, 2: top, 3: left
    if (side === 0) y = dir > 0 ? "100vh" : "-100vh";
    if (side === 1) x = dir > 0 ? "100vw" : "-100vw";
    if (side === 2) y = dir > 0 ? "-100vh" : "100vh";
    if (side === 3) x = dir > 0 ? "-100vw" : "100vw";
    return { 
      x, y, 
      z: -500, 
      scale: 0.8, 
      rotateX: side === 0 ? 30 : side === 2 ? -30 : 0, 
      rotateY: side === 1 ? -30 : side === 3 ? 30 : 0, 
      opacity: 0 
    };
  },
  center: {
    x: 0,
    y: 0,
    z: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    opacity: 1,
    transition: { duration: 0.35, ease: "easeOut" }
  },
  exit: (custom) => {
    const { dir, side } = custom;
    let x = 0; let y = 0;
    if (side === 0) y = dir > 0 ? "-100vh" : "100vh";
    if (side === 1) x = dir > 0 ? "-100vw" : "100vw";
    if (side === 2) y = dir > 0 ? "100vh" : "-100vh";
    if (side === 3) x = dir > 0 ? "100vw" : "-100vw";
    return { 
      x, y, 
      z: -500, 
      scale: 0.8, 
      rotateX: side === 0 ? -30 : side === 2 ? 30 : 0, 
      rotateY: side === 1 ? 30 : side === 3 ? -30 : 0, 
      opacity: 0, 
      transition: { duration: 0.35, ease: "easeIn" } 
    };
  }
};

function HomeMain() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState({ dir: 1, side: 0 }); 
  const isScrolling = useRef(false);
  const totalSections = 5;
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    setShowHelp(false);
    const timer = setTimeout(() => setShowHelp(true), 2000);
    return () => clearTimeout(timer);
  }, [index]);

  useEffect(() => {
    // Hide default scrollbar entirely since we are creating a layered 3D slider effect
    document.body.style.overflow = "hidden";
    
    let touchStartY = 0;

    const navigate = (dir) => {
      setIndex((prev) => {
        const next = prev + dir;
        if (next >= 0 && next < totalSections) {
          // Select random side for the newly entering slide (0 to 3)
          const randomSide = Math.floor(Math.random() * 4);
          setDirection({ dir, side: randomSide });
          isScrolling.current = true;
          setTimeout(() => isScrolling.current = false, 550);
          return next;
        }
        return prev;
      });
    };

    const handleWheel = (e) => {
      // Check if we are inside a deliberately scrolling container like FullScreenWrap
      const scrollable = e.target.closest('.overflow-y-auto');
      if (scrollable) {
        const { scrollTop, scrollHeight, clientHeight } = scrollable;
        const atTop = scrollTop === 0;
        const atBottom = Math.abs(scrollHeight - clientHeight - scrollTop) < 1;

        if (e.deltaY > 0 && !atBottom) return; // Allow normal scroll down within component
        if (e.deltaY < 0 && !atTop) return; // Allow normal scroll up within component
      }

      // If already animating, prevent standard wheel events
      if (isScrolling.current) {
        e.preventDefault();
        return;
      }
      if (Math.abs(e.deltaY) < 30) return; // Ignore small magic mouse glides

      if (e.deltaY > 0) navigate(1);
      else if (e.deltaY < 0) navigate(-1);
    };

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      const scrollable = e.target.closest('.overflow-y-auto');
      const touchEndY = e.touches[0].clientY;
      const deltaTemp = touchStartY - touchEndY; // Positive is swiping up / scrolling down
      
      if (scrollable) {
        const { scrollTop, scrollHeight, clientHeight } = scrollable;
        const atTop = scrollTop === 0;
        const atBottom = Math.abs(scrollHeight - clientHeight - scrollTop) < 1;

        if (deltaTemp > 0 && !atBottom) { touchStartY = touchEndY; return; }
        if (deltaTemp < 0 && !atTop) { touchStartY = touchEndY; return; }
      }

      if (isScrolling.current) return;
      if (Math.abs(deltaTemp) < 40) return;

      if (deltaTemp > 0) {
        navigate(1);
        touchStartY = touchEndY;
      } else {
        navigate(-1);
        touchStartY = touchEndY;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    const handleCustomNav = (e) => {
      const id = e.detail.id;
      let targetIndex = -1;
      if (id === 'home') targetIndex = 0;
      if (id === 'socials') targetIndex = 1;
      if (id === 'portfolio') targetIndex = 2;
      if (id === 'footer') targetIndex = 4;

      if (targetIndex !== -1) {
        setIndex((prev) => {
          if (isScrolling.current || targetIndex === prev) return prev;
          const dir = targetIndex > prev ? 1 : -1;
          const randomSide = Math.floor(Math.random() * 4);
          setDirection({ dir, side: randomSide });
          isScrolling.current = true;
          setTimeout(() => isScrolling.current = false, 550);
          return targetIndex;
        });
      }
    };
    window.addEventListener("navigateToSection", handleCustomNav);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("navigateToSection", handleCustomNav);
    };
  }, []);

  useEffect(() => {
    window.dispatchEvent(new CustomEvent("sectionIndexChange", { detail: { index } }));
  }, [index]);

  const renderSection = (currentIndex) => {
    switch (currentIndex) {
      case 0:
        return (
          <div className="w-full h-full flex flex-col justify-center items-center">
            <Intro />
          </div>
        );
      case 1:
        return (
          <FullScreenWrap>
             <div className="flex flex-col flex-grow justify-center items-center w-full py-[10vh] min-h-max">
               <div className="w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-6 px-4 sm:px-10 items-center justify-center h-full">
                 <Socials />
                 <Interests />
                 <GithubSection />
               </div>
             </div>
          </FullScreenWrap>
        );
      case 2:
        return (
          <div className="w-full h-full relative">
            <Vortex backgroundColor="#0000" containerClassName="absolute inset-0 w-full h-full" className="w-full h-full flex flex-col justify-center items-center" rangeY={400} particleCount={50} baseHue={120}>
              <div id="portfolio" className="w-full h-full flex justify-center items-center relative z-50">
                <Portfolio />
              </div>
            </Vortex>
          </div>
        );
      case 3:
        return (
          <div className="w-full h-full flex flex-col justify-center items-center">
            <OtherLinks />
          </div>
        );
      case 4:
        return (
          <FullScreenWrap>
            <div className="flex flex-col flex-grow justify-center items-center w-full min-h-max py-20 relative z-50">
               <Feedback />
            </div>
            <div className="w-full relative z-40">
               <Footer />
            </div>
          </FullScreenWrap>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Background3D />
      <UserHelpOverlay show={showHelp} />
      
      {/* Dynamic 3D Dot Navigation Overlay */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
        {Array.from({ length: totalSections }).map((_, i) => (
           <button
             key={i}
             onClick={() => {
                if (isScrolling.current || i === index) return;
                const dir = i > index ? 1 : -1;
                 const randomSide = Math.floor(Math.random() * 4);
                 setDirection({ dir, side: randomSide });
                 isScrolling.current = true;
                 setTimeout(() => isScrolling.current = false, 550);
                setIndex(i);
             }}
             title={`Go to section ${i + 1}`}
             className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
               i === index 
                 ? "bg-[#00ffff] scale-150 shadow-[0_0_15px_#00ffff]" 
                 : "bg-[#00ffff]/30 hover:bg-[#00ffff]/60"
             }`}
           />
        ))}
      </div>

      <div id="home" className="text-primary font-bold text-center flex flex-col z-10 w-full h-screen overflow-hidden relative" style={{ perspective: "1500px" }}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full"
          >
            {renderSection(index)}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}

export default HomeMain;
