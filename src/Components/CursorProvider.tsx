"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface CursorContextType {
  setIsHovering: (isHovering: boolean) => void;
  setCursorStyle: (style: Partial<React.CSSProperties>) => void;
}

const CursorContext = createContext<CursorContextType>({
  setIsHovering: () => {},
  setCursorStyle: () => {},
});

export const useCursor = () => useContext(CursorContext);

interface CustomCursorProviderProps {
  children: ReactNode;
}

const CustomCursorProvider = ({ children }: CustomCursorProviderProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorStyle, setCursorStyle] = useState<Partial<React.CSSProperties>>({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest("a, button, .carousel-previous, .carousel-next");
      setIsHovering(!!isInteractive);
    };

    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024); // Disable cursor on mobile (< lg breakpoint)
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("resize", checkIsMobile);

    checkIsMobile(); // Initial check

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  if (isMobile) return <>{children}</>;

  return (
    <CursorContext.Provider value={{ setIsHovering, setCursorStyle }}>
      <motion.div
        className=" fixed top-0 left-0 w-10 h-10 rounded-full bg-white border-2 border-gray-300 mix-blend-difference pointer-events-none z-[9999]"
        animate={{
          x: position.x - 8, // Offset to center cursor
          y: position.y - 8,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
          mass: 0.5,
        }}
        style={cursorStyle} // Apply CSS styles like borderColor
      />
      {children}
    </CursorContext.Provider>
  );
};

export default CustomCursorProvider;