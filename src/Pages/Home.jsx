"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Intro from "@/Section/Intro";
import Portfolio from "@/Section/Portfolio";
import Socials from "@/Section/Socials";
import Interests from "@/Section/Interests";
import GithubAndTools from "@/Section/GithubAndTools";
import OtherLinks from "@/Section/OtherLinks";
import { Vortex } from "@/Components/ui/vortex";
import Feedback from "@/Section/Feedback";
import Background3D from "@/Components/Background3D";
import Footer from "@/Section/Footer";

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
    return { x, y, opacity: 0 };
  },
  center: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeInOut" }
  },
  exit: (custom) => {
    const { dir, side } = custom;
    let x = 0; let y = 0;
    if (side === 0) y = dir > 0 ? "-100vh" : "100vh";
    if (side === 1) x = dir > 0 ? "-100vw" : "100vw";
    if (side === 2) y = dir > 0 ? "100vh" : "-100vh";
    if (side === 3) x = dir > 0 ? "100vw" : "-100vw";
    return { x, y, opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } };
  }
};

function HomeMain() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState({ dir: 1, side: 0 }); 
  const isScrolling = useRef(false);
  const totalSections = 5;

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
          setTimeout(() => isScrolling.current = false, 1200);
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

    // Passive false is needed to prevent default properly on certain browsers
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

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
             <div className="flex flex-col flex-grow justify-center items-center gap-8 laptop:gap-5 w-full py-[10vh] min-h-max">
               <Socials />
               <Interests />
               <GithubAndTools />
             </div>
          </FullScreenWrap>
        );
      case 2:
        return (
          <FullScreenWrap>
            <Vortex backgroundColor="#0000" containerClassName="w-full min-h-max" className="w-full min-h-max flex flex-col justify-center items-center py-[10vh]" rangeY={400} particleCount={50} baseHue={120}>
              <div id="portfolio" className="w-full flex justify-center items-center relative z-50">
                <Portfolio />
              </div>
            </Vortex>
          </FullScreenWrap>
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
                setTimeout(() => isScrolling.current = false, 1200);
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

      <div id="home" className="text-primary font-bold text-center flex flex-col z-10 w-full h-screen overflow-hidden relative">
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
