"use client";

export default function Hero() {
  return (
    <section id="home" className="text-center">
      {/* 이름 */}
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
        Hyeonjoon Nam
      </h1>

      {/* 원하는 직군(간단) */}
      <p className="mt-3 text-base md:text-lg text-white/80">
        Gameplay / AI Engineer · Systems Optimization · New Grad (RTIS ’26)
      </p>

      {/* About / Summary */}
      <h2 className="mt-10 text-2xl md:text-3xl font-semibold">
        About
      </h2>
      <p className="mt-4 max-w-2xl mx-auto text-sm md:text-base leading-7 text-white/80">
        I build real-time gameplay systems and tactical AI with a profiling-first mindset.
        My focus is stabilizing frame time through data-oriented refactors, cache-aware layouts,
        and clean interfaces. I’ve led small teams, owned core mechanics end-to-end, and shipped
        pathfinding/patrol systems that scale from prototypes to large waves without spikes.
      </p>
    </section>
  );
}
