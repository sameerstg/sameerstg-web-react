import React, { useEffect, useState, useRef } from "react";
import ImageSlider from "../Components/ImageSlider";
import { motion, AnimatePresence } from "framer-motion";

function Portfolio() {
  const [portfolios, setportfolios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [showHint, setShowHint] = useState(false);
  const isScrolling = useRef(false);
  const containerRef = useRef(null);

  async function getPortfolios() {
    setLoading(true);
    try {
      const res = await fetch("/api/portfolio");
      const ports = await res.json();
      setportfolios(Array.isArray(ports) ? ports : []);
    } catch (e) {
      console.error("Failed to fetch portfolio", e);
    }
    setLoading(false);
  }

  useEffect(() => {
    getPortfolios();
  }, []);


  useEffect(() => {
    setShowHint(false);
    const timer = setTimeout(() => setShowHint(true), 2000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || portfolios.length === 0) return;

    let touchStartY = 0;

    const navigate = (dir) => {
      if (isScrolling.current) return;
      isScrolling.current = true;
      setDirection(dir);
      setCurrentIndex((prev) => prev + dir);
      setTimeout(() => {
        isScrolling.current = false;
      }, 550); // Prevent rapid firing
    };

    const handleWheel = (e) => {
      if (isScrolling.current) {
        e.stopPropagation();
        e.preventDefault();
        return;
      }
      
      // Let wheel pass to window/Home.jsx if scrolling past portfolio edges
      if (e.deltaY > 0 && currentIndex < portfolios.length - 1) {
        e.stopPropagation();
        e.preventDefault();
        navigate(1);
      } else if (e.deltaY < 0 && currentIndex > 0) {
        e.stopPropagation();
        e.preventDefault();
        navigate(-1);
      }
    };

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (isScrolling.current) {
        e.stopPropagation();
        e.preventDefault();
        return;
      }

      const touchEndY = e.touches[0].clientY;
      const deltaTemp = touchStartY - touchEndY;

      if (Math.abs(deltaTemp) < 30) return;

      if (deltaTemp > 0 && currentIndex < portfolios.length - 1) {
        e.stopPropagation();
        e.preventDefault();
        navigate(1);
        touchStartY = touchEndY;
      } else if (deltaTemp < 0 && currentIndex > 0) {
        e.stopPropagation();
        e.preventDefault();
        navigate(-1);
        touchStartY = touchEndY;
      }
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    el.addEventListener("touchstart", handleTouchStart, { passive: false });
    el.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      el.removeEventListener("wheel", handleWheel);
      el.removeEventListener("touchstart", handleTouchStart);
      el.removeEventListener("touchmove", handleTouchMove);
    };
  }, [currentIndex, portfolios.length]);

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? "100%" : "-100%",
      z: -1200,
      opacity: 0,
      rotateY: dir > 0 ? 65 : -65,
      rotateZ: dir > 0 ? 10 : -10,
      scale: 0.5,
      filter: "blur(10px)",
    }),
    center: {
      x: 0,
      z: 0,
      opacity: 1,
      rotateY: 0,
      rotateZ: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { 
        x: { type: "spring", stiffness: 200, damping: 25 },
        opacity: { duration: 0.2 },
        default: { duration: 0.4, ease: "circOut" }
      }
    },
    exit: (dir) => ({
      x: dir < 0 ? "100%" : "-100%",
      z: -1200,
      opacity: 0,
      rotateY: dir < 0 ? 65 : -65,
      rotateZ: dir < 0 ? 10 : -10,
      scale: 0.5,
      filter: "blur(10px)",
      transition: { duration: 0.3, ease: "circIn" }
    })
  };

  return (
    <div ref={containerRef} className="w-full h-full flex flex-col justify-center items-center relative overflow-hidden" style={{ perspective: "2000px" }}>
      {loading ? (
        <div className="flex flex-col justify-center items-center h-full gap-4">
           <div className="w-16 h-16 border-4 border-[#00ffff]/10 border-t-[#00ffff] rounded-full animate-spin shadow-[0_0_15px_#00ffff]" />
           <span className="text-[#00ffff] font-mono text-sm tracking-widest animate-pulse">SYNCING PORTFOLIO...</span>
        </div>
      ) : (
        <>
          <AnimatePresence initial={false} custom={direction} mode="wait">
            {portfolios.length > 0 && (
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                style={{ transformStyle: "preserve-3d" }}
                className="absolute inset-0 flex justify-center items-center w-full h-full"
              >
                <div className="relative w-full max-w-7xl px-4">
                  <ImageSlider
                    link={portfolios[currentIndex].link}
                    title={portfolios[currentIndex].title}
                    contents={portfolios[currentIndex].portfolioItems}
                    index={currentIndex}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* 3D Project Counter */}
          <div className="absolute top-1/2 left-4 laptop:left-12 -translate-y-1/2 z-50 pointer-events-none hidden md:flex flex-col items-center gap-4">
            <div className="text-white/20 font-black text-6xl lg:text-8xl tracking-tighter opacity-10 select-none">
              {(currentIndex + 1).toString().padStart(2, '0')}
            </div>
            <div className="h-24 w-[2px] bg-gradient-to-b from-transparent via-[#00ffff]/50 to-transparent" />
            <div className="text-[#00ffff]/40 font-mono text-sm rotate-90 whitespace-nowrap tracking-[0.5em] uppercase">
              Project
            </div>
          </div>
          
          {/* Internal dots for navigating portfolios */}
          <div className="absolute bottom-5 tablet:bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-50 bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 shadow-2xl">
            {portfolios.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                   if (isScrolling.current || i === currentIndex) return;
                   const dir = i > currentIndex ? 1 : -1;
                   isScrolling.current = true;
                   setDirection(dir);
                   setCurrentIndex(i);
                   setTimeout(() => isScrolling.current = false, 350);
                }}
                className={`transition-all duration-500 rounded-full h-2 ${i === currentIndex ? "w-10 bg-[#00ffff] shadow-[0_0_20px_#00ffff]" : "w-2 bg-white/20 hover:bg-[#00ffff]/50"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Portfolio;
