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
    "online math tutor",
    "SAT math help",
    "ACT preparation",
    "Grades 1-12 tutoring",
    "Common Core math",
    "algebra tutor online",
    "geometry tutoring",
    "science tutoring",
    "English tutoring",
    "coding classes online",
    "private online tutor",
    "1:1 tutoring",
    "virtual learning",
    "online classes for students",
    "USA students tutoring",
    "international students learning",
    "British curriculum tutoring",
    "IB tutoring",
    "online learning platform",
    "academic tutoring",
    "step by step learning",
    "home learning platform",
    "interactive online classes",
    "personalized education",
  ],

  verification: {
    google: "KrQ2D3GxzuRSRjWQrx-lIswKXGged1rcoDFyIk2oYNE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-US"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-gray-900">

        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}