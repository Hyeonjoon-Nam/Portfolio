import Link from "next/link";
import type { Project } from "../data/types";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <Link
      href={`/${p.id}`}
      className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 transition-colors"
    >
      {/* Thumb */}
      <div className="relative">
        <img
          src={p.thumb || p.images?.[0] || ""}
          alt={`${p.title} thumbnail`}
          className="w-full aspect-video object-cover"
          loading="lazy"
        />
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

      {/* bottom bar (optional: minimal details) */}
      {/* <div className="px-4 py-3 text-sm text-zinc-400">{/* keep empty for clean look */}{/*}</div> */}
    </Link>
  );
}
