// "use client";  // ⛔ 제거

import Link from "next/link";
import Image from "next/image";
import type { Project } from "../data/types";

export default function ProjectCard({ p, priority = false }: { p: Project; priority?: boolean }) {
  return (
    <Link
      href={`/${p.id}`}
      className="group text-left rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/30"
    >
      {/* 썸네일 */}
      <div className="relative aspect-video w-full">
        <Image
          src={p.thumb}
          alt={`${p.title} thumbnail`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover opacity-95 group-hover:opacity-100"
          priority={priority}                // ⬅ 첫 카드 LCP 가점
          fetchPriority={priority ? "high" : undefined}
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold">{p.title}</h3>
        <p className="text-white/70 text-sm mt-1 line-clamp-2">{p.tagline}</p>

        <div className="mt-2 flex flex-wrap gap-2">
          {p.roles.slice(0, 3).map((r) => (
            <span key={r} className="text-xs px-2 py-0.5 rounded-full bg-white/10 border border-white/10">{r}</span>
          ))}
        </div>

        <div className="mt-3 text-sm underline underline-offset-4 text-white/80">View details →</div>
      </div>
    </Link>
  );
}
