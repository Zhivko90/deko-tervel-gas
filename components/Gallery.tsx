"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { gallery } from "@/lib/data";
import Reveal from "./Reveal";

export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const touchX = useRef<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + gallery.length) % gallery.length)),
    []
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % gallery.length)),
    []
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, prev, next]);

  // Плъзгане с пръст
  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 45) {
      if (dx > 0) prev();
      else next();
    }
    touchX.current = null;
  };

  const active = index === null ? null : gallery[index];

  return (
    <section id="galeriya" className="scroll-mt-20 bg-asphalt py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <span className="eyebrow">Галерия</span>
          <h2 className="display-title mt-3 text-4xl text-paper md:text-5xl">
            Погледни отблизо
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {gallery.map((img, i) => (
            <Reveal key={img.src} delay={(i % 4) * 80}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Отвори снимка: ${img.alt}`}
                className="group relative block aspect-[4/3] w-full overflow-hidden border border-white/10"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-asphalt/0 transition-colors group-hover:bg-asphalt/30" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Голям преглед */}
      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-asphalt-900/95 backdrop-blur"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          {/* Затвори */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); close(); }}
            aria-label="Затвори"
            className="absolute right-4 top-4 z-[120] grid h-12 w-12 place-items-center rounded-lg border border-white/25 bg-asphalt-900/80 text-paper transition-colors hover:border-amber hover:text-amber"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          {/* Назад */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Предишна"
            className="absolute left-2 top-1/2 z-[120] grid h-12 w-12 -translate-y-1/2 place-items-center rounded-lg border border-white/25 bg-asphalt-900/80 text-paper transition-colors hover:border-amber hover:text-amber sm:left-6"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Напред */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Следваща"
            className="absolute right-2 top-1/2 z-[120] grid h-12 w-12 -translate-y-1/2 place-items-center rounded-lg border border-white/25 bg-asphalt-900/80 text-paper transition-colors hover:border-amber hover:text-amber sm:right-6"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Снимката (плъзгане с пръст сменя) */}
          <div
            className="relative z-[105] h-[72vh] w-[88vw] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <Image
              src={active.src}
              alt={active.alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>

          {/* Брояч */}
          <span className="absolute bottom-4 left-1/2 z-[120] -translate-x-1/2 rounded-lg bg-asphalt-900/80 px-3 py-1 font-mono text-xs text-paper">
            {index! + 1} / {gallery.length}
          </span>
        </div>
      )}
    </section>
  );
}
