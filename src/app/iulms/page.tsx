'use client';
import React, { useEffect } from 'react';
import { Download, Globe, Smartphone, GraduationCap, Calendar, BookOpen, FileText } from 'lucide-react';
import Background3D from "@/Components/Background3D";
import { motion } from "framer-motion";

export default function Page() {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div className="relative w-full h-screen overflow-hidden bg-[#020617]">
            <Background3D />
            
            <div className="relative z-10 w-full h-full overflow-y-auto hide-scrollbar scroll-smooth">
                {/* Hero Section */}
                <section className="pt-32 pb-12 px-4 sm:pt-40 sm:pb-16 lg:pt-48 lg:pb-20">
                    <div className="max-w-7xl mx-auto text-center">
                        <motion.h1 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl sm:text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter"
                        >
                            Welcome to <span className="text-secondary bg-clip-text">IULMS</span>
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg sm:text-2xl text-tertiary max-w-3xl mx-auto mb-12 px-2 leading-relaxed"
                        >
                            Your all-in-one student portal for attendance, grades, timetables, assignments, and more — accessible on web and mobile.
                        </motion.p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://iulms.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto inline-flex justify-center items-center px-10 py-5 bg-white text-black font-bold rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-300"
                            >
                                <Globe className="mr-3 h-6 w-6" />
                                Open Web Portal
                            </motion.a>

                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://drive.usercontent.google.com/download?id=12yBxRQIRcyR_seZan_pcF5R5aRHPi5pj&export=download&authuser=2"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto inline-flex justify-center items-center px-10 py-5 bg-secondary text-black font-bold rounded-2xl shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] transition-all duration-300"
                            >
                                <Smartphone className="mr-3 h-6 w-6" />
                                Download App
                            </motion.a>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-16">
                            Everything You Need in One Place
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { icon: Calendar, title: "Attendance Tracking", desc: "Mark and view daily attendance" },
                                { icon: BookOpen, title: "Grades & Results", desc: "Check semester results instantly" },
                                { icon: FileText, title: "Transcript Info", desc: "Access your academic transcript" },
                                { icon: GraduationCap, title: "Timetable", desc: "Never miss a class again" }
                            ].map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="text-center p-8 bg-black/40 backdrop-blur-xl rounded-[2rem] border border-white/10 hover:border-secondary/30 transition-all duration-500 group"
                                >
                                    <div className="inline-flex p-5 bg-white/5 rounded-2xl mb-6 group-hover:bg-secondary/10 transition-colors">
                                        <feature.icon className="h-10 w-10 text-white group-hover:text-secondary transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{feature.title}</h3>
                                    <p className="text-tertiary text-sm leading-relaxed">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Access Section */}
                <section id="access" className="py-20 px-4 sm:px-6 lg:px-8 pb-40">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-16">
                            Access IULMS Anywhere
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {/* Web */}
                            <motion.div 
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: -50 }}
                                className="bg-black/60 backdrop-blur-2xl p-10 rounded-[2.5rem] text-center border border-white/10 shadow-2xl"
                            >
                                <div className="bg-white/5 rounded-3xl w-24 h-24 mx-auto mb-8 flex items-center justify-center border border-white/10">
                                    <Globe className="h-12 w-12 text-secondary" />
                                </div>
                                <h3 className="text-2xl font-black text-white mb-4">Web Portal</h3>
                                <p className="text-tertiary mb-8">
                                    Use on any browser — laptop, tablet, or phone. Fast, responsive, and always updated.
                                </p>
                                <a
                                    href="https://iulms.vercel.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all"
                                >
                                    Go to Web →
                                </a>
                            </motion.div>

                            {/* Mobile App */}
                            <motion.div 
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: 50 }}
                                className="bg-black/60 backdrop-blur-2xl p-10 rounded-[2.5rem] text-center border border-white/10 shadow-2xl"
                            >
                                <div className="bg-white/5 rounded-3xl w-24 h-24 mx-auto mb-8 flex items-center justify-center border border-white/10">
                                    <Smartphone className="h-12 w-12 text-secondary" />
                                </div>
                                <h3 className="text-2xl font-black text-white mb-4">Mobile App</h3>
                                <p className="text-tertiary mb-8">
                                    The full experience in the palm of your hand. Download the stable APK for Android.
                                </p>
                                <a
                                    href="https://drive.usercontent.google.com/download?id=12yBxRQIRcyR_seZan_pcF5R5aRHPi5pj&export=download&authuser=2"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center px-8 py-3 bg-secondary/20 hover:bg-secondary/30 text-secondary font-bold rounded-xl transition-all"
                                >
                                    <Download className="mr-2 h-5 w-5" />
                                    Download APK
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}