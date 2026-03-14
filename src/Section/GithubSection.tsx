"use client";
import React from 'react';
import { motion } from 'framer-motion';

const GithubSection = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center min-h-[350px] sm:min-h-[400px]">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="absolute top-0 text-white/50 text-xs sm:text-sm font-bold tracking-[0.4em] uppercase z-20 mix-blend-screen bg-black/30 px-6 py-2 rounded-full border border-white/5"
      >
        My GitHub
      </motion.div>

      <div className="flex flex-col gap-6 w-full items-center justify-center mt-12 lg:mt-16 z-10 px-4">
        <button className="mx-auto w-full max-w-sm text-white font-semibold p-3 rounded-xl bg-black/40 backdrop-blur-md hover:bg-black/60 transition-colors border border-[#00ffff]/20 hover:border-[#00ffff]/60 shadow-[0_0_20px_rgba(0,255,255,0.1)] group">
          <a href="https://github.com/sameerstg" target="_blank" rel="noreferrer noopener" className="flex items-center justify-center gap-3">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 group-hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.6)] group-hover:text-[#00ffff] transition-colors"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.09.682-.217.682-.482 0-.237-.009-.866-.013-1.699-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.254-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.748-1.025 2.748-1.025.546 1.376.202 2.394.1 2.646.64.699 1.026 1.591 1.026 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"></path></svg>
            <span className="tracking-wider group-hover:text-white text-white/80 transition-colors">VISIT MY GITHUB</span>
          </a>
        </button>

        <a href="https://github.com/sameerstg" target="_blank" rel="noreferrer noopener" className="w-full max-w-sm hover:scale-[1.03] transition-transform duration-300">
          <img
            className="w-full max-w-sm pointer-events-none rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.5)] border border-white/5"
            src="https://github-readme-streak-stats.herokuapp.com/?user=sameerstg&theme=dark&hide_border=true&background=0d1117&ring=00ffff&fire=00ffff&currStreakLabel=00ffff"
            alt="sameerstg github stats"
          />
        </a>
      </div>
    </div>
  );
};

export default GithubSection;
