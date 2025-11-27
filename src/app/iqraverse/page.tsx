import React from 'react';
import { Gamepad2, Zap, Users, Trophy } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'IqraVerse - University Admission Assistant Game | Iqra University',
    description: 'IqraVerse is an interactive game where you can visit the university admission department and ask queries through natural conversation. Get instant answers about admissions, programs, and student life.',
    keywords: ['IqraVerse', 'Iqra University', 'admission', 'interactive game', 'admission queries', 'university assistant', 'chatbot game'],
    authors: [{ name: 'Iqra University' }],
    creator: 'Iqra University IT Department',
    publisher: 'Iqra University',
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        title: 'IqraVerse - University Admission Assistant Game',
        description: 'Visit Iqra University&apos;s admission department and ask questions through interactive conversation.',
        url: 'https://sameerstg-web-react.vercel.app/iqraverse',
        siteName: 'IqraVerse',
        images: [
            {
                url: 'https://via.placeholder.com/1200x630?text=IqraVerse+Admission+Game',
                width: 1200,
                height: 630,
                alt: 'IqraVerse Admission Game',
                type: 'image/png',
            },
        ],
        type: 'website',
        locale: 'en_US',
    },


    category: 'Entertainment',
    classification: 'Interactive Game',
    viewport: 'width=device-width, initial-scale=1.0',
};

export default function IqraVersePage() {
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
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            <main className="min-h-screen text-white">

                {/* Hero Section */}
                <section className="pt-16 pb-12 px-4 sm:pt-20 sm:pb-16 lg:pt-24 lg:pb-20" aria-label="IqraVerse Gaming Platform">
                    <div className="max-w-7xl mx-auto text-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 sm:mb-6">
                            Welcome to <span className="text-cyan-400">IqraVerse</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-10 px-2">
                            Visit Iqra University&apos;s admission department and ask your queries through interactive conversation. Get instant answers about admissions, programs, and student life.
                        </p>
                    </div>
                </section>

                {/* Featured Game Section */}
                <section id="games" className=" px-4 sm:px-6 lg:px-8" aria-label="Featured Game">
                    <div className="max-w-7xl mx-auto">

                        <div className="bg-gray-800 p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg border border-gray-700 flex justify-center overflow-x-auto">
                            <iframe
                                frameBorder="0"
                                src="https://itch.io/embed-upload/15663616?color=333333"
                                allowFullScreen
                                allow="fullscreen"
                                width="980"
                                height="640"
                                style={{ border: 'none' }}
                            >
                            </iframe>
                        </div>
                    </div>
                </section>





            </main>
        </>
    );
}
