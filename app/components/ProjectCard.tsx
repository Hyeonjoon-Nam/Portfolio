import Link from "next/link";
import Image from "next/image";
import type { Project } from "../data/types";

export default function ProjectCard({ p }: { p: Project }) {
  const thumb = p.thumb || p.images?.[0];

  return (
    <Link
      href={`/${p.id}`}
      className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 transition-colors"
    >
      {/* Thumb */}
      <div className="relative">
        {thumb ? (
          <div className="relative w-full aspect-video">
            <Image
              src={thumb}
              alt={`${p.title} thumbnail`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              className="object-cover"
              priority={false}
            />
          </div>
        ) : (
          <div className="w-full aspect-video bg-zinc-800" />
        )}

        {/* gradient + title */}
        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
          <h3 className="text-lg md:text-xl font-semibold drop-shadow-sm">
            {p.title}
          </h3>
          {p.tagline && (
            <p className="mt-1 text-sm text-zinc-300/90 line-clamp-1">
              {p.tagline}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
