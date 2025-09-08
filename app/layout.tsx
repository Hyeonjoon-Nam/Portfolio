// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // 배포 URL로 바꾸기
  metadataBase: new URL("https://portfolio-sooty-rho-46.vercel.app"),
  title: {
    default: "Hyeonjoon Nam — C++ Performance",
    template: "%s — Hyeonjoon Nam",
  },
  description:
    "Profiling-first optimization for real-time C++ systems. I reduce spikes and stabilize frame time through data-oriented refactors, cache/memory-aware layouts, and clean interfaces with tests/CI.",
  alternates: {
    canonical: "/", // 기본 canonical
  },
  openGraph: {
    title: "Hyeonjoon Nam — C++ Systems & Performance",
    description:
      "Profiling-first optimization for real-time C++ systems.",
    url: "/",
    siteName: "Hyeonjoon Nam",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Portfolio cover" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hyeonjoon Nam — C++ Systems & Performance",
    description:
      "Profiling-first optimization for real-time C++ systems.",
    images: ["/og.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },                       // 32x32 또는 48x48 ico
      { url: "/icon.png", type: "image/png", sizes: "512x512" }, // PWA용
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950 text-zinc-100`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
