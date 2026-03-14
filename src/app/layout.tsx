import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '../Section/Navbar'
import Footer from '../Section/Footer'
import { Analytics } from "@vercel/analytics/react";
import CustomCursor from "@/Components/CustomCursor";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Sameer STG (Sameerstg) | 3D Creative Developer & Designer",
    template: "%s | Sameer STG"
  },
  description: "Explore the digital universe of Sameer stg (Sameerstg), a 3D Creative Developer specializing in immersive web experiences, VR simulations, and modern UI/UX design.",
  keywords: ["Sameer stg", "Sameerstg", "Sameer STG Portfolio", "Sameerstg Web", "3D Web Developer", "Creative Technologist", "React Developer", "Three.js Portfolio", "VR Developer", "Next.js 3D Portfolio"],
  authors: [{ name: "Sameer STG" }],
  creator: "Sameer STG",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sameerstg.com",
    title: "Sameer stg (Sameerstg) | 3D Creative Developer & Designer",
    description: "Personal portfolio of Sameer stg showcasing 3D web experiences, VR projects, and creative development work.",
    siteName: "Sameer STG",
    images: [
      {
        url: "/og-image.png", // Assuming an OG image exists or will be added
        width: 1200,
        height: 630,
        alt: "Sameer STG Portfolio Overlay",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sameer stg (Sameerstg) | 3D Creative Developer & Designer",
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
