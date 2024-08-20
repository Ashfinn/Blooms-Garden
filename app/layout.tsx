import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from '@/components/Hero';

export const metadata: Metadata = {
  title: "Bloom's Garden",
  description: "Explore our collection of flowers that have grown through the toughest of times, just like us.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Hero />
        {children}
        </body>
        <Footer />
    </html>
  );
}