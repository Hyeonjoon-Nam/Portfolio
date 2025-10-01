import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

const siteUrl = "https://portfolio-sooty-rho-46.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Hyeonjoon Nam — Software Engineer (Systems & Performance)",
  description:
    "Tech Lead experience (4–13 members). Profiling-driven optimization, A* pathfinding, and architecture patterns across custom C++ engines and UE5/Unity.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Hyeonjoon Nam — Software Engineer (Systems & Performance)",
    description:
      "Profiling • Spike reduction • A* pathfinding • Architecture patterns. Tech Lead experience across custom C++ engines and UE5/Unity.",
    url: siteUrl,
    siteName: "Hyeonjoon Nam",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Hyeonjoon Nam" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hyeonjoon Nam — Systems & Performance",
    description:
      "Gameplay systems + performance optimization in custom C++ engines and UE5/Unity.",
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
      <body className="min-h-screen bg-zinc-950 text-zinc-100 pt-14 md:pt-14">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
