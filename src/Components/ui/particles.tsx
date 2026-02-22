"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    opacity: number;
}

interface ParticlesProps {
    count?: number;
    connectionDistance?: number;
    speed?: number;
    color?: string;
    className?: string;
    mouseRadius?: number;
    mouseForce?: number;
    repel?: boolean;
}

export default function Particles({
    count = 90,
    connectionDistance = 150,
    speed = 0.4,
    color = "0, 255, 255",
    className = "",
    mouseRadius = 160,
    mouseForce = 0.06,
    repel = true,
}: ParticlesProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouse = useRef({ x: -9999, y: -9999 });
    const particles = useRef<Particle[]>([]);
    const animRef = useRef<number>(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };

        const spawnParticles = () => {
            particles.current = Array.from({ length: count }, () => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * speed,
                vy: (Math.random() - 0.5) * speed,
                radius: Math.random() * 1.5 + 0.5,
                opacity: Math.random() * 0.5 + 0.3,
            }));
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const ps = particles.current;
            const rect = canvas.getBoundingClientRect();

            // Convert window-level mouse coords to canvas-local coords
            const mx = mouse.current.x - rect.left;
            const my = mouse.current.y - rect.top;

            for (let i = 0; i < ps.length; i++) {
                const p = ps[i];

                // Mouse influence
                const dx = mx - p.x;
                const dy = my - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < mouseRadius && dist > 0) {
                    const force = (1 - dist / mouseRadius) * mouseForce;
                    if (repel) {
                        // Scatter away from cursor
                        p.vx -= (dx / dist) * force;
                        p.vy -= (dy / dist) * force;
                    } else {
                        // Attract toward cursor
                        p.vx += (dx / dist) * force;
                        p.vy += (dy / dist) * force;
                    }
                }

                // Speed cap — let mouse bursts be faster, then decay back
                const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
                const maxSpd = speed * 5;
                if (spd > maxSpd) {
                    p.vx = (p.vx / spd) * maxSpd;
                    p.vy = (p.vy / spd) * maxSpd;
                } else if (spd > speed) {
                    // Natural friction — gradually slow back down
                    p.vx *= 0.98;
                    p.vy *= 0.98;
                }

                p.x += p.vx;
                p.y += p.vy;

                // Bounce off walls
                if (p.x < 0) { p.x = 0; p.vx *= -1; }
                if (p.x > canvas.width) { p.x = canvas.width; p.vx *= -1; }
                if (p.y < 0) { p.y = 0; p.vy *= -1; }
                if (p.y > canvas.height) { p.y = canvas.height; p.vy *= -1; }

                // Draw dot
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${color}, ${p.opacity})`;
                ctx.fill();

                // Draw connecting lines to nearby particles
                for (let j = i + 1; j < ps.length; j++) {
                    const q = ps[j];
                    const lx = p.x - q.x;
                    const ly = p.y - q.y;
                    const d = Math.sqrt(lx * lx + ly * ly);
                    if (d < connectionDistance) {
                        const alpha = (1 - d / connectionDistance) * 0.4;
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(q.x, q.y);
                        ctx.strokeStyle = `rgba(${color}, ${alpha})`;
                        ctx.lineWidth = 0.6;
                        ctx.stroke();
                    }
                }

                // Draw line from nearest particles to cursor
                if (dist < mouseRadius * 0.7) {
                    const alpha = (1 - dist / (mouseRadius * 0.7)) * 0.5;
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(mx, my);
                    ctx.strokeStyle = `rgba(${color}, ${alpha})`;
                    ctx.lineWidth = 0.8;
                    ctx.stroke();
                }
            }

            animRef.current = requestAnimationFrame(draw);
        };

        // Listen on window so mouse works even when hovering over text/other elements
        const handleMouseMove = (e: MouseEvent) => {
            mouse.current = { x: e.clientX, y: e.clientY };
        };

        const handleMouseLeave = () => {
            mouse.current = { x: -9999, y: -9999 };
        };

        resize();
        spawnParticles();
        draw();

        const handleResize = () => { resize(); spawnParticles(); };
        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            cancelAnimationFrame(animRef.current);
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [count, connectionDistance, speed, color, mouseRadius, mouseForce, repel]);

    return (
        <canvas
            ref={canvasRef}
            className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
        />
    );
}
