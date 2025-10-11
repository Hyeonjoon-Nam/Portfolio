import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="max-w-5xl mx-auto px-5 py-12">
        {/* HERO: Name / Role / About */}
        <Hero />

        <section id="projects" className="mt-20 scroll-mt-20">
          {/* 중복 헤더 제거: Projects 컴포넌트 내부 타이틀 사용 */}
          <Projects />
        </section>

        {/* 하단 공통 Contact 섹션 */}
        <section id="contact" className="mt-20 scroll-mt-20">
          <h2 className="text-2xl md:text-3xl font-semibold text-center">Contact</h2>
          <p className="mt-3 text-center text-zinc-400">
            Feel free to reach out.
          </p>
          <div className="mt-6 flex flex-col items-center gap-2">
            <a
              href="mailto:hyeonjoon.nam.dev@gmail.com"
              className="underline underline-offset-4 hover:text-white"
            >
              hyeonjoon.nam.dev@gmail.com
            </a>
            <a
              href="tel:+12067867888"
              className="underline underline-offset-4 hover:text-white"
            >
              (206) 786 7888
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
