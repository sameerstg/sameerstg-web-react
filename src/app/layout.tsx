import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '../Section/Navbar'
import Footer from '../Section/Footer'
import { Analytics } from "@vercel/analytics/react";
import CustomCursor from "@/Components/CustomCursor";


const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "Sameerstg | Game Developer",
    template: "%s | Sameerstg"
  },
  description: "Explore the digital universe of Sameerstg, a 3D Creative Developer specializing in immersive web experiences, VR simulations, and modern UI/UX design.",
  keywords: ["Sameerstg", "Sameerstg Portfolio", "Sameerstg Web", "3D Web Developer", "Creative Technologist", "React Developer", "Three.js Portfolio", "VR Developer", "Next.js 3D Portfolio"],
  authors: [{ name: "Sameerstg" }],
  creator: "Sameerstg",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sameerstg.com",
    title: "Sameerstg | 3D Creative Developer & Designer",
    description: "Personal portfolio of Sameerstg showcasing 3D web experiences, VR projects, and creative development work.",
    siteName: "Sameerstg",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sameerstg Portfolio Overlay",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sameerstg | 3D Creative Developer & Designer",
    description: "3D Creative Developer specializing in interactive web experiences and VR.",
    creator: "@sameerstg",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Analytics mode={'production'} />
        <Navbar />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
