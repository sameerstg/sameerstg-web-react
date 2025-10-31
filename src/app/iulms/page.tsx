import React from 'react';
import { Download, Globe, Smartphone, GraduationCap, Calendar, BookOpen, FileText } from 'lucide-react';

export default function Page() {
    return (
        <>
            <div className="min-h-screen  text-white">

                {/* Hero Section */}
                <section className="pt-16 pb-12 px-4 sm:pt-20 sm:pb-16 lg:pt-24 lg:pb-20">
                    <div className="max-w-7xl mx-auto text-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 sm:mb-6">
                            Welcome to <span className="text-indigo-400">IULMS</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-10 px-2">
                            Your all-in-one student portal for attendance, grades, timetables, assignments, and more — accessible on web and mobile.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                            {/* Web Access Button */}
                            <a
                                href="https://iulms.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto inline-flex justify-center items-center px-6 sm:px-8 py-3 sm:py-4 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:bg-indigo-500 transform hover:scale-105 transition-all duration-200 text-sm sm:text-base"
                            >
                                <Globe className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                                Open Web Portal
                            </a>

                            {/* App Download Button */}
                            <a
                                href="https://drive.google.com/file/d/12yBxRQIRcyR_seZan_pcF5R5aRHPi5pj/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto inline-flex justify-center items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:from-purple-500 hover:to-pink-500 transform hover:scale-105 transition-all duration-200 text-sm sm:text-base"
                            >
                                <Smartphone className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                                Download App
                            </a>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" className="py-12 sm:py-16 ">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-10 sm:mb-12">
                            Everything You Need in One Place
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                            {[
                                { icon: Calendar, title: "Attendance Tracking", desc: "Mark and view daily attendance" },
                                { icon: BookOpen, title: "Grades & Results", desc: "Check semester results instantly" },
                                { icon: FileText, title: "Transcript Info", desc: "Access your academic transcript" },
                                { icon: GraduationCap, title: "Timetable", desc: "Never miss a class again" }
                            ].map((feature, idx) => (
                                <div
                                    key={idx}
                                    className="text-center p-5 sm:p-6 bg-gray-700 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-600"
                                >
                                    <div className="inline-flex p-3 bg-indigo-900 rounded-full mb-3 sm:mb-4">
                                        <feature.icon className="h-7 w-7 sm:h-8 sm:w-8 text-indigo-400" />
                                    </div>
                                    <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">{feature.title}</h3>
                                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Access Section */}
                <section id="access" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-10 sm:mb-12">
                            Access IULMS Anywhere
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-center">
                            {/* Web */}
                            <div className="bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-all duration-300 border border-gray-700">
                                <div className="bg-gray-700 border-2 border-dashed rounded-xl w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                                    <Globe className="h-12 w-12 sm:h-16 sm:w-16 text-gray-500" />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">Web Portal</h3>
                                <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
                                    Use on any browser — laptop, tablet, or phone.
                                </p>
                                <a
                                    href="https://iulms.vercel.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block px-5 sm:px-6 py-2.5 sm:py-3  text-white font-medium rounded-lg hover:bg-indigo-500 transition text-sm sm:text-base"
                                >
                                    Go to Web →
                                </a>
                            </div>

                            {/* Mobile App */}
                            <div className="bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-all duration-300 border border-gray-700">
                                <div className="bg-gray-700 border-2 border-dashed rounded-xl w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                                    <Smartphone className="h-12 w-12 sm:h-16 sm:w-16 text-gray-500" />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">Mobile App</h3>
                                <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
                                    Download the APK and install on Android.
                                </p>
                                <a
                                    href="https://drive.google.com/file/d/12yBxRQIRcyR_seZan_pcF5R5aRHPi5pj/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-purple-500 hover:to-pink-500 transition text-sm sm:text-base w-full sm:w-auto"
                                >
                                    <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                                    Download APK
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
}