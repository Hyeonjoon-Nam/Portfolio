"use client";

import { useMemo, useState } from "react";

function extractYouTubeId(input: string): string | null {
  if (/^[A-Za-z0-9_-]{6,}$/.test(input) && !/^https?:\/\//i.test(input)) return input;
  try {
    const u = new URL(input);
    if (u.hostname.includes("youtube.com")) {
      if (u.pathname.startsWith("/watch")) return u.searchParams.get("v");
      const parts = u.pathname.split("/").filter(Boolean);
      if (parts.length >= 2 && (parts[0] === "embed" || parts[0] === "shorts")) return parts[1];
    }
    if (u.hostname === "youtu.be") {
      const parts = u.pathname.split("/").filter(Boolean);
      if (parts[0]) return parts[0];
    }
  } catch {}
  return null;
}

export default function YouTubeLite({ id, title }: { id: string; title: string }) {
  const [play, setPlay] = useState(false);
  const videoId = useMemo(() => extractYouTubeId(id), [id]);
  const watchUrl = videoId ? `https://www.youtube.com/watch?v=${videoId}` : undefined;
  const poster = videoId ? `https://img.youtube.com/vi/${videoId}/mqdefault.jpg` : undefined;

  if (!videoId) {
    return (
      <div className="rounded-xl border border-white/10 p-4 bg-black/30">
        <p className="text-sm text-white/80">Unable to load YouTube video. Please check the video ID/URL or privacy settings.</p>
        {id && <p className="text-xs mt-2 text-white/60 break-all">Provided: <span className="underline">{id}</span></p>}
      </div>
    );
  }

  if (play) {
    return (
      <div className="rounded-xl overflow-hidden" style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
        />
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden rounded-xl">
      <button
        onClick={() => setPlay(true)}
        className="group relative w-full overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-white/30"
        aria-label={`Play ${title}`}
        style={{ position: "relative", paddingBottom: "56.25%" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={poster}
          alt={`${title} poster`}
          loading="lazy"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <span className="absolute inset-0 grid place-items-center">
          <span className="rounded-full px-4 py-2 bg-white/90 text-black group-hover:bg-white">▶ Play</span>
        </span>
      </button>

      <div className="mt-2 text-right">
        <a href={watchUrl} target="_blank" rel="noreferrer" className="text-xs underline underline-offset-4 text-white/70 hover:text-white">
          Open on YouTube ↗
        </a>
      </div>
    </div>
  );
}
