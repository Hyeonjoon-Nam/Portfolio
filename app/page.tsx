import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="max-w-5xl mx-auto px-5 py-12">
        {/* HERO */}
        <section id="home" className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold">C++ Systems & Performance — New Grad (RTIS ’26)</h1>
          <p className="mt-4 text-zinc-400">
            Profiling-first optimization for real-time C++ systems. I reduce spikes and stabilize frame time through data-oriented
            refactors, cache/memory-aware layouts, and clean interfaces with tests/CI.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <a href="#projects" className="px-4 py-2 rounded-xl bg-white text-black">
              View Projects
            </a>
            <a href="/Hyeonjoon_Nam_Resume.pdf" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-xl border border-zinc-700">
              Download Resume
            </a>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mt-16">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <div className="mt-6">
            <Projects />
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-16">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href="mailto:hyeonjoon.nam.dev@gmail.com" className="px-4 py-2 rounded-xl bg-white text-black" aria-label="Send me an email">
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/hyeonjoon-nam"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl border border-zinc-700"
              aria-label="Open my LinkedIn in a new tab"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Hyeonjoon-Nam"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl border border-zinc-700"
              aria-label="Open my GitHub in a new tab"
            >
              GitHub
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
