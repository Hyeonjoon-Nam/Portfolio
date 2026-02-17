"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

type Props = {
  open: boolean;
  images: string[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export default function GalleryLightbox({ open, images, index, onClose, onPrev, onNext }: Props) {
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const imgSrc = images[index];

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", onKey);
    closeBtnRef.current?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose, onPrev, onNext]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl h-[70vh] md:h-[80vh] bg-black/40 rounded-2xl overflow-hidden border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full">
          <Image
            src={imgSrc}
            alt="Gallery image"
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />
        </div>

        <button
          ref={closeBtnRef}
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 rounded-full px-3 py-2 text-sm bg-white/10 hover:bg-white/20 border border-white/20"
        >
          ✕
        </button>

        <button
          onClick={onPrev}
          aria-label="Previous image"
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full px-3 py-2 text-sm bg-white/10 hover:bg-white/20 border border-white/20"
        >
          ←
        </button>
        <button
          onClick={onNext}
          aria-label="Next image"
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full px-3 py-2 text-sm bg-white/10 hover:bg-white/20 border border-white/20"
        >
          →
        </button>

        <div className="absolute bottom-3 left-0 right-0 text-center text-xs text-white/80">
          {index + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}
