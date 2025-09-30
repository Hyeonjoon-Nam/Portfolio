import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="max-w-5xl mx-auto px-5 py-12">
        {/* HERO: Name / Role / About */}
        <Hero />

        {/* PROJECTS 헤더 (중앙, 크게) */}
        <section id="projects" className="mt-20">
          <h2 className="text-2xl md:text-3xl font-semibold text-center">Projects</h2>
          <div className="mt-8">
            <Projects />
          </div>
        </section>

        {/* CONTACT (원래 섹션 유지, 헤더 중앙 정렬) */}
        <section id="contact" className="mt-20">
          <h2 className="text-2xl md:text-3xl font-semibold text-center">Contact</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:hyeonjoon.nam.dev@gmail.com"
              className="px-4 py-2 rounded-xl bg-white text-black"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/hyeonjoon-nam"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl border border-zinc-700"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Hyeonjoon-Nam"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl border border-zinc-700"
            >
              GitHub
            </a>
            <a
              href="/Hyeonjoon_Nam_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl border border-zinc-700"
            >
              Resume
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
