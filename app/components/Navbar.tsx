import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-900/80 backdrop-blur">
      <div className="max-w-5xl mx-auto h-12 px-4 flex items-center gap-3">
        <Link
          href="/"
          className="shrink-0 font-extrabold tracking-tight text-white"
          aria-label="Home"
        >
          HN
        </Link>

        <nav className="flex-1 overflow-x-auto">
          <ul className="flex items-center gap-4 sm:gap-6 whitespace-nowrap">
            <li>
              <Link
                href="/"
                className="inline-block py-1 text-zinc-200 hover:text-white text-sm sm:text-base"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="inline-block py-1 text-zinc-200 hover:text-white text-sm sm:text-base"
              >
                Contact
              </Link>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/hyeonjoon-nam/"
                target="_blank"
                rel="noreferrer"
                className="inline-block py-1 text-zinc-200 hover:text-white text-sm sm:text-base"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/hyeonjoon-nam"
                target="_blank"
                rel="noreferrer"
                className="inline-block py-1 text-zinc-200 hover:text-white text-sm sm:text-base"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="/Hyeonjoon_Nam_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-block py-1 text-zinc-200 hover:text-white text-sm sm:text-base"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
