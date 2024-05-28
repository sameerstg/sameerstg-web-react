import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '../Section/Navbar'
import Footer from '../Section/Footer'
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sameerstg",
  description: "Sameerstg Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Analytics mode={'production'} />;
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
