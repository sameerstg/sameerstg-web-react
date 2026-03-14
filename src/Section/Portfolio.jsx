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
      x: dir > 0 ? "100vw" : "-100vw",
      z: -800,
      opacity: 0,
      rotateY: dir > 0 ? -30 : 30,
      scale: 0.7,
    }),
    center: {
      x: 0,
      z: 0,
      opacity: 1,
      rotateY: 0,
      scale: 1,
      transition: { duration: 0.35, type: "spring", stiffness: 120, damping: 20 }
    },
    exit: (dir) => ({
      x: dir < 0 ? "100vw" : "-100vw",
      z: -800,
      opacity: 0,
      rotateY: dir < 0 ? -30 : 30,
      scale: 0.7,
      transition: { duration: 0.35, ease: "easeInOut" }
    })
  };

  return (
    <div ref={containerRef} className="w-full h-full flex flex-col justify-center items-center relative overflow-hidden" style={{ perspective: "1500px" }}>
      {loading ? (
        <div className="text-center text-lg py-10">Loading...</div>
      ) : (
        <>
          <AnimatePresence initial={false} custom={direction}>
            {portfolios.length > 0 && (
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 flex justify-center items-center w-full h-full"
              >
                <ImageSlider
                  link={portfolios[currentIndex].link}
                  title={portfolios[currentIndex].title}
                  contents={portfolios[currentIndex].portfolioItems}
                  index={currentIndex}
                />
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Internal dots for navigating portfolios */}
          <div className="absolute bottom-5 tablet:bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-50">
            {portfolios.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                   if (isScrolling.current || i === currentIndex) return;
                   const dir = i > currentIndex ? 1 : -1;
                   isScrolling.current = true;
                   setDirection(dir);
                   setCurrentIndex(i);
                   setTimeout(() => isScrolling.current = false, 550);
                }}
                className={`transition-all duration-300 rounded-full ${i === currentIndex ? "w-8 h-2 bg-[#00ffff] shadow-[0_0_10px_#00ffff]" : "w-2 h-2 bg-white/30 hover:bg-[#00ffff]/50"}`}
              />
            ))}
          </div>
          
          {/* Skip/Next Hint on the Right Edge */}
          <div className={`absolute right-4 laptop:right-12 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-6 transition-opacity duration-500 pointer-events-none mix-blend-screen ${showHint ? 'opacity-60' : 'opacity-0'}`}>
            <div className={`text-[#00ffff] font-bold text-[10px] uppercase tracking-widest bg-black/50 px-3 py-1 rounded-full border border-[#00ffff]/30 whitespace-nowrap hidden md:block ${currentIndex === portfolios.length - 1 ? 'animate-pulse' : ''}`}>
              {currentIndex === portfolios.length - 1 ? "Skip" : "Next"}
            </div>
            
            <div className="w-5 h-8 border-2 border-white/70 rounded-full flex justify-center pt-1 shadow-[0_0_10px_rgba(0,255,255,0.2)]">
              <div className="w-1 h-2 bg-[#00ffff] rounded-full animate-bounce" />
            </div>
            
            <div className="w-[1px] h-8 bg-gradient-to-b from-[#00ffff] to-transparent animate-pulse" />
            
            <svg viewBox="0 0 24 24" fill="none" stroke="#00ffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 animate-pulse opacity-80 filter drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]">
              <path d="M12 20v-5m0 0V9a2 2 0 0 1 4 0v3m-4-3a2 2 0 0 0-4 0v1m4 4h-2a3 3 0 0 1-3-3V9m8 6h2a3 3 0 0 0 3-3V8a3 3 0 0 0-6 0v2"></path>
            </svg>
          </div>
        </>
      )}
    </div>
  );
}

export default Portfolio;
