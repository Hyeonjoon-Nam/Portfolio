import Link from "next/link";
import Image from "next/image";
import type { Project } from "../data/types";
import GalleryClient from "./GalleryClient";

function getYouTubeId(src: string): string | null {
  if (!src) return null;
  if (/^[a-zA-Z0-9_-]{8,}$/.test(src)) return src;
  const m =
    src.match(
      /(?:youtube\.com\/.*[?&]v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{8,})/
    ) || [];
  return m[1] || null;
}

export default function ProjectDetailPage({ p }: { p: Project }) {
  const hasMedia = Array.isArray(p.media) && p.media.length > 0;
  const hasImages = Array.isArray(p.images) && p.images.length > 0;
  const hasRoles = Array.isArray(p.roles) && p.roles.length > 0;
  const hasChallenges = Array.isArray(p.challenges) && p.challenges.length > 0;

  const primaryImage = hasImages ? p.images![0] : null;
  const firstMedia = hasMedia ? p.media![0] : null;
  const youTubeId =
    firstMedia?.type === "youtube" ? getYouTubeId(firstMedia.src) : null;

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="max-w-5xl mx-auto px-5 py-10">
        <Link
          href="/"
          className="inline-block text-sm mb-6 text-white/80 hover:text-white underline underline-offset-4"
        >
          ← Back to Home
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold">{p.title}</h1>
        {p.tagline && <p className="mt-2 text-zinc-400">{p.tagline}</p>}

        {/* Media on top: YouTube/Video → fallback Image */}
        <div className="mt-6">
          {firstMedia ? (
            firstMedia.type === "youtube" && youTubeId ? (
              <div className="w-full aspect-video rounded-xl overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube-nocookie.com/embed/${youTubeId}`}
                  title={`${p.title} video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            ) : firstMedia.type === "video" ? (
              <video
                className="w-full rounded-xl"
                src={firstMedia.src}
                loop
                muted
                playsInline
                controls
              />
            ) : null
          ) : primaryImage ? (
            <div className="relative w-full rounded-xl overflow-hidden">
              <Image
                src={primaryImage}
                alt={`${p.title} preview`}
                width={1280}
                height={720}
                className="w-full h-auto"
                priority={false}
                sizes="100vw"
              />
            </div>
          ) : null}
        </div>

        <section className="mt-10">
          <h2 className="text-xl font-semibold">What is this game?</h2>
          <p className="mt-2 text-zinc-300">{p.description}</p>
        </section>

        {(p.role || p.team || p.tools) && (
          <section className="mt-10">
            <h2 className="text-xl font-semibold">Team Info</h2>
            <ul className="mt-2 text-zinc-300 space-y-1">
              {p.role && (
                <li>
                  <span className="font-medium">Role:</span> {p.role}
                </li>
              )}
              {p.team && (
                <li>
                  <span className="font-medium">Team:</span> {p.team}
                </li>
              )}
              {p.tools && (
                <li>
                  <span className="font-medium">Engine/Tools:</span> {p.tools}
                </li>
              )}
            </ul>
          </section>
        )}

        {hasRoles && (
          <section className="mt-10">
            <h2 className="text-xl font-semibold">Contributions</h2>
            <ul className="mt-2 list-disc list-outside pl-6 text-zinc-300 space-y-1">
              {p.roles!.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </section>
        )}

        {hasChallenges && (
          <section className="mt-10">
            <h2 className="text-xl font-semibold">Challenges &amp; Solutions</h2>
            <ul className="mt-2 list-disc list-outside pl-6 text-zinc-300 space-y-1">
              {p.challenges!.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </section>
        )}

        {hasImages && (
          <section className="mt-10">
            <h2 className="text-xl font-semibold">Gallery</h2>
            <div className="mt-3">
              <GalleryClient title={p.title} images={p.images!} />
            </div>
          </section>
        )}

        {!!p.links?.length && (
          <section className="mt-10">
            <h2 className="text-xl font-semibold">Links</h2>
            <div className="mt-3 flex flex-wrap gap-2">
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
          </section>
        )}

        <section id="contact" className="mt-16 scroll-mt-20">
          <h2 className="text-xl md:text-2xl font-semibold text-center">Contact</h2>
          <p className="mt-3 text-center text-zinc-400">Feel free to reach out.</p>
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
