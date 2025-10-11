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
      {/* 이미지 컨테이너를 relative로 두되, Image는 width/height로 비율 고정 */}
      <div className="relative">
        {thumb ? (
          <Image
            src={thumb}
            alt={`${p.title} thumbnail`}
            width={1280}
            height={720}         // 16:9 고정 비율
            className="w-full h-auto block object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
            priority={false}
          />
        ) : (
          <div className="w-full h-48 sm:h-56 bg-zinc-800" />
        )}

        {/* 하단 그라데이션 + 타이틀 */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
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
