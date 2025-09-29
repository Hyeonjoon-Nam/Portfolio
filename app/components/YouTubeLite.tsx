"use client";

import { useState } from "react";

export default function YouTubeLite({ id, title }: { id: string; title: string }) {
  const [play, setPlay] = useState(false);

  if (play) {
    return (
      <div className="rounded-xl overflow-hidden" style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
        />
      </div>
    );
  }

  const poster = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
  return (
    <button
      onClick={() => setPlay(true)}
      className="group relative w-full overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-white/30"
      aria-label={`Play ${title}`}
    >
      <div className="relative" style={{ paddingBottom: "56.25%" }}>
        <img
          src={poster}
          alt={`${title} poster`}
          loading="lazy"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <span className="absolute inset-0 grid place-items-center">
        <span className="rounded-full px-4 py-2 bg-white/90 text-black group-hover:bg-white">▶ Play</span>
      </span>
    </button>
  );
}
