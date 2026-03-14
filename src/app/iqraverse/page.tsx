'use client';
import React, { useEffect } from 'react';
import { Gamepad2, Zap, Users, Trophy } from 'lucide-react';
import { Metadata } from 'next';
import Background3D from "@/Components/Background3D";
import { motion } from "framer-motion";


export default function IqraVersePage() {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    const schemaData = {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'IqraVerse - Interactive Gaming Platform',
        description: 'Interactive gaming platform for Iqra University students featuring immersive games.',
        url: 'https://sameerstg-web-react.vercel.app/iqraverse',
        applicationCategory: 'GameApplication',
        author: {
            '@type': 'Organization',
            name: 'Iqra University',
            url: 'https://iqra.edu.pk',
            logo: 'https://iqra.edu.pk/logo.png',
        },
        creator: {
            '@type': 'Organization',
            name: 'Iqra University IT Department',
        },
        operatingSystem: ['Web', 'Windows', 'macOS', 'Linux'],
    };

    return (
        <div className="relative w-full h-screen overflow-hidden bg-[#020617]">
            <Background3D />
            
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            <div className="relative z-10 w-full h-full overflow-y-auto hide-scrollbar scroll-smooth">
                {/* Hero Section */}
                <section className="pt-32 pb-12 px-4 sm:pt-40 sm:pb-16 lg:pt-48 lg:pb-20">
                    <div className="max-w-7xl mx-auto text-center">
                        <motion.h1 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl sm:text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter"
                        >
                            Welcome to <span className="text-[#00ffff] drop-shadow-[0_0_20px_rgba(0,255,255,0.4)]">IqraVerse</span>
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg sm:text-2xl text-tertiary max-w-4xl mx-auto mb-12 px-2 leading-relaxed"
                        >
                            Visit Iqra University&apos;s admission department and ask your queries through interactive conversation. Get instant answers about admissions, programs, and student life.
                        </motion.p>
                    </div>
                </section>

                {/* Featured Game Section */}
                <section id="games" className="px-4 sm:px-6 lg:px-8 pb-40">
                    <div className="max-w-7xl mx-auto">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative group p-1"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#00ffff]/20 to-[#6366f1]/20 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
                            <div className="relative bg-black/60 backdrop-blur-3xl p-4 sm:p-6 md:p-8 rounded-3xl shadow-2xl border border-white/10 overflow-hidden">
                                <div className="aspect-video w-full flex justify-center">
                                    <iframe
                                        frameBorder="0"
                                        src="https://itch.io/embed-upload/15663616?color=111111"
                                        allowFullScreen
                                        allow="fullscreen"
                                        className="w-full h-full rounded-xl"
                                        style={{ border: 'none' }}
                                    >
                                    </iframe>
                                </div>
                            </div>
                        </motion.div>
                        
                        <div className="mt-12 text-center text-white/40 text-sm font-mono tracking-widest uppercase">
                            Immersive Admissions Experience • v1.0.4
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

