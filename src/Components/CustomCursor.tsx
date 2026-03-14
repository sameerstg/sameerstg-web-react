"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      // Main small dot follows instantly
      gsap.to(cursor, {
        x: clientX,
        y: clientY,
        duration: 0.1,
        ease: "power2.out",
      });

      // Larger circle follows with a slight delay (kinetic effect)
      gsap.to(follower, {
        x: clientX,
        y: clientY,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    const onMouseDown = () => {
       gsap.to(follower, { scale: 0.8, backgroundColor: "rgba(0, 255, 255, 0.5)", duration: 0.2 });
    };

    const onMouseUp = () => {
       gsap.to(follower, { scale: 1, backgroundColor: "rgba(0, 255, 255, 0)", duration: 0.2 });
    };

    // Detection for interactive elements
    const onMouseEnterLink = () => {
      gsap.to(follower, {
        scale: 2.5,
        backgroundColor: "rgba(0, 255, 255, 0.1)",
        borderColor: "rgba(255, 255, 255, 0.5)",
        duration: 0.3
      });
      gsap.to(cursor, { scale: 0, opacity: 0, duration: 0.2 });
    };

    const onMouseLeaveLink = () => {
      gsap.to(follower, {
        scale: 1,
        backgroundColor: "rgba(0, 255, 255, 0)",
        borderColor: "rgba(0, 255, 255, 0.4)",
        duration: 0.3
      });
      gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.2 });
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    // Attach listeners to all buttons and links
    const links = document.querySelectorAll("a, button, [role='button']");
    links.forEach(link => {
      link.addEventListener("mouseenter", onMouseEnterLink);
      link.addEventListener("mouseleave", onMouseLeaveLink);
    });

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      links.forEach(link => {
        link.removeEventListener("mouseenter", onMouseEnterLink);
        link.removeEventListener("mouseleave", onMouseLeaveLink);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-secondary rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-8 h-8 border border-secondary/40 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-[background-color,border-color,transform] duration-300"
      >
        <div className="w-1 h-1 bg-secondary/20 rounded-full animate-pulse" />
      </div>
    </>
  );
};

export default CustomCursor;
