"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-zinc-950/70 border-b border-white/5">
      <nav className="max-w-5xl mx-auto px-5 h-12 flex items-center justify-between text-sm">
        <div className="flex items-center gap-4">
          <Link href="/" className="font-semibold hover:opacity-100 opacity-90">
            HN
          </Link>
          <a href="/#projects" className="opacity-80 hover:opacity-100">Projects</a>
          <a href="/#contact" className="opacity-80 hover:opacity-100">Contact</a>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="https://www.linkedin.com/in/hyeonjoon-nam"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-80 hover:opacity-100 underline underline-offset-4"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/Hyeonjoon-Nam"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-80 hover:opacity-100 underline underline-offset-4"
          >
            GitHub
          </Link>
          <a
            href="/Hyeonjoon_Nam_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-80 hover:opacity-100 underline underline-offset-4"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
