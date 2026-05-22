import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "LearnAtHome | Online Tutoring for USA & Global Students | Math, SAT, Science & Coding",

  description:
    "LearnAtHome offers personalized 1:1 online tutoring for students in the USA and worldwide. Expert tutoring in Math, Science, English, Coding, SAT & ACT preparation for Grades 1–12.",

  keywords: [
    "online tutoring USA",
    "SAT math tutor",
    "coding classes online",
    "math tutoring",
    "science tutoring",
    "english tutor online",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col bg-white text-gray-900">

        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}