"use client";

import { useState } from "react";
import Image from "next/image";
import type { Project } from "../data/types";
import GalleryLightbox from "./GalleryLightbox";
import Link from "next/link";

export default function ProjectDetailPage({ p }: { p: Project }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openAt = (i: number) => {
    setLightboxIndex(i);
    setLightboxOpen(true);
  };

  const onPrev = () => setLightboxIndex((i) => (i - 1 + p.images.length) % p.images.length);
  const onNext = () => setLightboxIndex((i) => (i + 1) % p.images.length);

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="max-w-5xl mx-auto px-5 py-10">
        {/* Back */}
        <Link href="/#projects" className="inline-block text-sm mb-4 opacity-80 hover:opacity-100">
          ← Back to Projects
        </Link>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold">{p.title}</h1>
        <p className="mt-2 text-zinc-400">{p.tagline}</p>

        {/* Media (기존 유지) */}
        <div className="mt-6">
          {p.media[0]?.type === "youtube" ? (
            <div className="rounded-xl overflow-hidden" style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
              <iframe
                src={`https://www.youtube.com/embed/${p.media[0].src}?rel=0&modestbranding=1`}
                title={`${p.title} video`}
                allowFullScreen
                loading="lazy"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
              />
            </div>
          ) : (
            <video className="w-full rounded-xl" src={p.media[0]?.src} autoPlay loop muted playsInline controls />
          )}
        </div>

        {/* What / Role / Challenges (기존 유지) */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <section className="md:col-span-2">
            <h2 className="text-xl font-semibold">What is this game?</h2>
            <p className="mt-2 text-zinc-300">{p.description}</p>

            <h2 className="text-xl font-semibold mt-6">Challenges &amp; Solutions</h2>
            <ul className="mt-2 list-disc list-inside text-zinc-300 space-y-1">
              {p.challenges.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </section>

          <aside>
            <h3 className="text-lg font-semibold">My Role</h3>
            <ul className="mt-2 space-y-1 text-zinc-300">
              {p.roles.map((r) => (
                <li key={r}>• {r}</li>
              ))}
            </ul>

            {p.links && p.links.length > 0 && (
              <>
                <h3 className="text-lg font-semibold mt-6">Links</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 rounded-lg border border-zinc-700 hover:bg-white/10"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </>
            )}
          </aside>
        </div>

        {/* Gallery (썸네일 클릭 → 라이트박스 열기) */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold">Gallery</h2>
          <div className="mt-3 grid grid-cols-2 md:grid-cols-3 gap-3">
            {p.images.map((src, i) => (
              <button
                key={src}
                onClick={() => openAt(i)}
                className="relative w-full h-40 rounded-lg border border-white/10 overflow-hidden focus:outline-none focus:ring-2 focus:ring-white/30"
                aria-label={`Open image ${i + 1}`}
              >
                <Image
                  src={src}
                  alt={`${p.title} screenshot ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </section>
      </div>

      {/* Lightbox 모달 */}
      <GalleryLightbox
        open={lightboxOpen}
        images={p.images}
        index={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={onPrev}
        onNext={onNext}
      />
    </main>
  );
}
