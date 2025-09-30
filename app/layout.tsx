import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

// 사이트 URL만 실제 배포 주소로 바꿔주세요
const siteUrl = "https://portfolio-sooty-rho-46.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Hyeonjoon Nam",
  description:
    "Gameplay / AI Engineer · Systems Optimization · New Grad (RTIS ’26).",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Hyeonjoon Nam",
    description:
      "Gameplay / AI Engineer · Systems Optimization · New Grad (RTIS ’26).",
    url: siteUrl,
    siteName: "Hyeonjoon Nam",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Hyeonjoon Nam" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hyeonjoon Nam",
    description:
      "Gameplay / AI Engineer · Systems Optimization · New Grad (RTIS ’26).",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-zinc-950">
      <body className="min-h-screen bg-zinc-950 text-zinc-100">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
