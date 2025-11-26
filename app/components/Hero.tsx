"use client";

export default function Hero() {
  return (
    <section id="home" className="text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
        Hyeonjoon Nam
      </h1>

      <p className="mt-3 text-base md:text-lg text-white/80">
        Software Engineer (C++ · Games &amp; Tools)
      </p>

      <h2 className="mt-10 text-2xl md:text-3xl font-semibold">About</h2>

      <div className="mt-4 max-w-2xl mx-auto text-sm md:text-base leading-7 text-white/80 space-y-3">
        <p>
          I&apos;m a C++ gameplay and tools engineer working in Unreal Engine 5
          and custom C++/OpenGL engines. I&apos;ve led 4–13 person teams as a
          tech lead and QA automation lead, building AI behaviors, pathfinding
          systems, and server-authoritative melee combat.
        </p>
        <p>
          Recently I optimized A* pathfinding from 8.4s to 0.65ms in a
          100-enemy benchmark, cut a wave-balance iteration loop from 62s to
          15–17s with a data-driven loader, and shipped{" "}
          <b>p4bot</b>, a Perforce→Discord automation toolkit that turns
          70–90 second manual lock checks into a 1–3 second glance and saves
          our 6-person team about 10–20 minutes per day.
        </p>
        <p>
          I like building systems that are easy to debug, measure, and iterate
          on, and I&apos;m especially interested in gameplay, AI, tools, and QA
          automation roles close to the engine.
        </p>
      </div>
    </section>
  );
}
