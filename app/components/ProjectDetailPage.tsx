// ⛔ "use client";  없음 (Server Component)

import Link from "next/link";
import type { Project } from "../data/types";
import dynamic from "next/dynamic";

// 클라에서만 필요한 조각들을 동적 로드
const GalleryClient = dynamic(() => import("./GalleryClient"), { ssr: false });
const YouTubeLite = dynamic(() => import("./YouTubeLite"), { ssr: false });

export default function ProjectDetailPage({ p }: { p: Project }) {
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

        {/* Media */}
        <div className="mt-6">
          {p.media[0]?.type === "youtube" ? (
            <YouTubeLite id={p.media[0].src} title={`${p.title} video`} />
          ) : (
            <video className="w-full rounded-xl" src={p.media[0]?.src} loop muted playsInline controls />
          )}
        </div>

        {/* What / Role / Challenges */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <section className="md:col-span-2">
            <h2 className="text-xl font-semibold">What is this game?</h2>
            <p className="mt-2 text-zinc-300">{p.description}</p>

            <h2 className="text-xl font-semibold mt-6">Challenges &amp; Solutions</h2>
            <ul className="mt-2 list-disc list-inside text-zinc-300 space-y-1">
              {p.challenges.map((c) => (<li key={c}>{c}</li>))}
            </ul>
          </section>

          <aside>
            <h3 className="text-lg font-semibold">My Role</h3>
            <ul className="mt-2 space-y-1 text-zinc-300">
              {p.roles.map((r) => (<li key={r}>• {r}</li>))}
            </ul>

            {!!p.links?.length && (
              <>
                <h3 className="text-lg font-semibold mt-6">Links</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.links.map((l) => (
                    <a key={l.href} href={l.href} target="_blank" rel="noreferrer"
                       className="px-3 py-1.5 rounded-lg border border-zinc-700 hover:bg-white/10">
                      {l.label}
                    </a>
                  ))}
                </div>
              </>
            )}
          </aside>
        </div>

        {/* Gallery */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold">Gallery</h2>
          <GalleryClient title={p.title} images={p.images} />
        </section>
      </div>
    </main>
  );
}
