"use client";

import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

// 라이트박스는 동적 로드 (SSR 제외)
const GalleryLightbox = dynamic(() => import("./GalleryLightbox"), { ssr: false });

export default function GalleryClient({ title, images }: { title: string; images: string[] }) {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const openAt = (i: number) => {
    setIdx(i);
    setOpen(true);
  };
  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setIdx((i) => (i + 1) % images.length);

  return (
    <>
      {/* 썸네일 그리드 */}
      <div className="mt-3 grid grid-cols-2 md:grid-cols-3 gap-3">
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => openAt(i)}
            className="relative w-full h-40 rounded-lg border border-white/10 overflow-hidden focus:outline-none focus:ring-2 focus:ring-white/30"
            aria-label={`Open image ${i + 1}`}
          >
            <Image
              src={src}
              alt={`${title} screenshot ${i + 1}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* 라이트박스 */}
      <GalleryLightbox
        open={open}
        images={images}
        index={idx}
        onClose={() => setOpen(false)}
        onPrev={prev}
        onNext={next}
      />
    </>
  );
}
