'use client'
import { useEffect, useState, useRef } from "react";
import ImageSlider from "@/Components/ImageSlider";
import Background3D from "@/Components/Background3D";
import { motion, AnimatePresence } from "framer-motion";

const UserHelpOverlay = ({ show }: { show: boolean }) => (
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
        <span className="text-xs uppercase font-bold text-white/80 tracking-widest hidden tablet:block">Explore</span>
      </div>
    </div>
  </div>
);

export default function Page() {
  const [portfolios, setportfolios] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [showHelp, setShowHelp] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  async function getPortfolios() {
    try {
      setLoading(true);
      const res = await fetch("/api/portfolio/private?title=VR Simulations");
      const ports = await res.json();
      setportfolios(Array.isArray(ports) ? ports : []);
    } catch (e) {
      console.error("Failed to fetch VR portfolios", e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getPortfolios();
    document.body.style.overflow = "hidden";
    
    const timer = setTimeout(() => setShowHelp(true), 2000);

    return () => {
      document.body.style.overflow = "auto";
      clearTimeout(timer);
    };
  }, []);

  const handleScroll = () => {
    if (showHelp) setShowHelp(false);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#020617]">
      <Background3D />
      <UserHelpOverlay show={showHelp} />
      
      <div 
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="relative z-10 w-full h-full overflow-y-auto hide-scrollbar scroll-smooth"
        style={{ perspective: "1500px" }}
      >
        <div className="max-w-7xl mx-auto px-4 pt-32 pb-40">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, z: -100 }}
            animate={{ opacity: 1, scale: 1, z: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-24"
          >
            <h1 className="text-5xl tablet:text-7xl font-bold bg-gradient-to-b from-white via-white to-[#00ffff]/50 bg-clip-text text-transparent mb-6 tracking-tight">
              VR Simulations
            </h1>
            <div className="h-1.5 w-32 bg-gradient-to-r from-transparent via-[#00ffff] to-transparent mx-auto rounded-full shadow-[0_0_20px_#00ffff]" />
          </motion.div>

          {loading ? (
             <div className="flex flex-col justify-center items-center h-96 gap-4">
                <div className="w-16 h-16 border-4 border-[#00ffff]/10 border-t-[#00ffff] rounded-full animate-spin shadow-[0_0_15px_#00ffff]" />
                <span className="text-[#00ffff] font-mono text-sm tracking-widest animate-pulse">LOADING VIRTUAL ASSETS...</span>
             </div>
          ) : (
            <div className="flex flex-col gap-32">
              {portfolios.map((port: any) => (
                <div key={port.id} className="space-y-24">
                  {port.portfolioItems.map((p: any, idx: number) => (
                    <motion.div
                      key={p.id}
                      initial={{ opacity: 0, y: 50, rotateX: 10 }}
                      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                      viewport={{ margin: "-100px" }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      className="group relative"
                    >
                      <div className="absolute -inset-1 bg-gradient-to-r from-[#00ffff]/20 to-[#6366f1]/20 rounded-[2rem] blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                      <div className="relative bg-black/40 backdrop-blur-2xl border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl">
                        <ImageSlider
                          link={null}
                          title={""}
                          contents={[p]}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              ))}
              
              {portfolios.length === 0 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-white/50 py-32 bg-white/5 backdrop-blur-sm rounded-[2rem] border border-white/10"
                >
                  <p className="text-xl font-medium">No virtual simulations available at the moment.</p>
                  <p className="text-sm mt-2 text-[#00ffff]/60">Check back soon for new immersive experiences.</p>
                </motion.div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


