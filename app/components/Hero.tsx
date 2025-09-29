// app/components/Hero.tsx
export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-6 pt-14 pb-10">
      {/* 이름 + 직군 */}
      <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
        Hyeonjoon Nam —{" "}
        <span className="text-white/80">Gameplay Programmer</span>
      </h1>

      {/* 짧은 소개 */}
      <p className="mt-4 text-base sm:text-lg text-white/70 max-w-3xl">
        C++ / Unreal Engine / Unity — specializing in Gameplay AI, Systems,
        and Optimization for real-time interactive games.
      </p>

      {/* 버튼들 */}
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href="/Hyeonjoon_Nam_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="rounded-xl px-4 py-2 bg-white/10 hover:bg-white/15 transition"
        >
          Download Resume
        </a>
        <a
          href="https://www.linkedin.com/in/hyeonjoon-nam"
          target="_blank"
          rel="noreferrer"
          className="rounded-xl px-4 py-2 border border-white/20 hover:bg-white/10 transition"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/Hyeonjoon-Nam"
          target="_blank"
          rel="noreferrer"
          className="rounded-xl px-4 py-2 border border-white/20 hover:bg-white/10 transition"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
