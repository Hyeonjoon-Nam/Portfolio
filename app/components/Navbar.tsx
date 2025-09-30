"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-zinc-900/80 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-5xl mx-auto px-5 flex items-center justify-between h-14">
        {/* 로고/이름 */}
        <Link
          href="/"
          className="text-xl font-bold text-white hover:text-zinc-300 transition"
        >
          HN
        </Link>

        {/* 메뉴 */}
        <div className="flex gap-6">
          <Link href="#projects" className="text-white text-lg hover:text-zinc-300 transition">
            Projects
          </Link>
          <Link href="#contact" className="text-white text-lg hover:text-zinc-300 transition">
            Contact
          </Link>
          <a
            href="https://www.linkedin.com/in/hyeonjoon-nam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-lg hover:text-zinc-300 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Hyeonjoon-Nam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-lg hover:text-zinc-300 transition"
          >
            GitHub
          </a>
          <a
            href="/Hyeonjoon_Nam_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-lg hover:text-zinc-300 transition"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
