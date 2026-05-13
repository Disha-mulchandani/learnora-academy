import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Learnora Academy | Online Classes for Students",

  description:
    "Learnora Academy offers interactive online classes for English, Coding, Creative Writing, Science, AP Computer Science, and personalized tutoring for students worldwide with experienced Indian teachers.",

  keywords: [
    "Learnora Academy",
    "online classes",
    "online tuition",
    "online tutoring",
    "home tuition",
    "private tutor",
    "online learning",
    "virtual classes",
    "Indian teachers",
    "Indian tutors",
    "worldwide learners",
    "international students",
    "English classes",
    "coding classes",
    "creative writing classes",
    "science tuition",
    "AP Computer Science",
    "computer science tutor",
    "kids online classes",
    "student learning platform",
    "personalized learning",
    "one to one tutoring",
    "online education",
    "e learning",
    "study from home",
    "best online tuition",
    "live online classes",
    "online coaching",
    "academic tutoring",
    "global learning platform",
    "teacher for students",
    "online tutor India",
    "affordable online tuition",
    "interactive learning",
    "learning academy",
    "education platform",
    "school tuition",
    "online classes for kids",
    "online tuition for students",
    "best tutors online",
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
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}