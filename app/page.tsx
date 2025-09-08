export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="max-w-5xl mx-auto px-5 py-12">
        {/* HERO */}
        <section id="home" className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold">
            Hyeonjoon Nam — Gameplay AI & Full-Stack Engineer
          </h1>
          <p className="mt-4 text-zinc-400">
            I build real-time gameplay systems (C++/C#, Unity/Unreal) and ship full-stack apps with tests &amp; CI/CD.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <a href="#projects" className="px-4 py-2 rounded-xl bg-white text-black">View Projects</a>
            <a
              href="/resume/Hyeonjoon_Nam_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl border border-zinc-700"
            >
              Download Resume
            </a>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mt-16">
          <h2 className="text-2xl font-semibold">Projects</h2>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {/* Suspense Defense */}
            <article className="rounded-2xl border border-zinc-800 p-4">
              <img
                src="/images/sd_thumb.png"
                alt="Suspense Defense"
                className="w-full h-48 object-cover rounded-lg border border-zinc-800"
              />
              <h3 className="mt-3 text-xl font-semibold">Suspense Defense</h3>
              <p className="text-zinc-400 mt-1">
                Tower-defense loop with exploration, pathfinding AI, night defense, and a boss fight.
              </p>

              {/* Responsive YouTube embed (SD) */}
              <div
                className="mt-3"
                style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", borderRadius: 12 }}
              >
                <iframe
                  src="https://www.youtube.com/embed/_2lPt6jRqoE?rel=0&modestbranding=1"
                  title="Suspense Defense — 1-min Demo"
                  loading="lazy"
                  allowFullScreen
                  style={{ position: "absolute", top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                />
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                <a
                  href="https://youtu.be/_2lPt6jRqoE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-lg border border-zinc-700"
                >
                  Video
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-lg border border-zinc-700"
                >
                  GitHub
                </a>
              </div>
            </article>

            {/* TCAS */}
            <article className="rounded-2xl border border-zinc-800 p-4">
              <img
                src="/images/tcas_thumb.png"
                alt="The Children Are Sleeping"
                className="w-full h-48 object-cover rounded-lg border border-zinc-800"
              />
              <h3 className="mt-3 text-xl font-semibold">The Children Are Sleeping</h3>
              <p className="text-zinc-400 mt-1">
                Team project focusing on gameplay systems and optimization. Steam page in preparation.
              </p>

              {/* Responsive YouTube embed (TCAS Trailer) */}
              <div
                className="mt-3"
                style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", borderRadius: 12 }}
              >
                <iframe
                  src="https://www.youtube.com/embed/C3MexPR3Eyc?rel=0&modestbranding=1"
                  title="TCAS — Trailer"
                  loading="lazy"
                  allowFullScreen
                  style={{ position: "absolute", top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                />
              </div>

              <div className="mt-3 flex gap-2 flex-wrap">
                <a
                  href="https://youtu.be/C3MexPR3Eyc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-lg border border-zinc-700"
                >
                  Video
                </a>
                {/* Steam 링크 생기면 여기에 버튼 하나 더 추가 */}
              </div>
            </article>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-16">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href="mailto:hyeonjoon.nam.dev@gmail.com" className="px-4 py-2 rounded-xl bg-white text-black">Email</a>
            <a
              href="https://www.linkedin.com/in/hyeonjoon-nam"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl border border-zinc-700"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/HyeonjoonNam-DigiPen"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl border border-zinc-700"
            >
              GitHub
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
