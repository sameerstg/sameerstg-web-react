import React, { useRef, useState } from 'react'
import gsap from 'gsap';

export default function Magnetic({ children }: { children: React.ReactElement }) {
    const magnetic = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!magnetic.current) return;
        const { clientX, clientY } = e;
        const { height, width, left, top } = magnetic.current.getBoundingClientRect();
        const x = clientX - (left + width / 2)
        const y = clientY - (top + height / 2)
        
        // Target the first child of the wrapper for the motion
        const target = magnetic.current.firstChild as HTMLElement;
        if (target) {
            gsap.to(target, {
                x: x * 0.35,
                y: y * 0.35,
                duration: 1,
                ease: "elastic.out(1, 0.3)"
            });
        }
    }

    const handleMouseLeave = () => {
        const target = magnetic.current?.firstChild as HTMLElement;
        if (target) {
            gsap.to(target, {
                x: 0,
                y: 0,
                duration: 1,
                ease: "elastic.out(1, 0.3)"
            });
        }
    }

    return (
        <div 
            ref={magnetic}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ display: 'inline-block' }}
        >
            {children}
        </div>
    )
}

