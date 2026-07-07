import { fuels } from "@/lib/data";

export default function PriceBoard() {
  return (
    <div className="relative overflow-hidden border border-white/10 bg-asphalt-900 shadow-2xl">
      {/* Скенираща светлина */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-amber/10 to-transparent motion-safe:animate-scan" />

      <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
        <span className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-muted-dark">
          Актуални цени
        </span>
        <span className="flex items-center gap-1.5 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-lpg">
          <span className="h-2 w-2 rounded-full bg-lpg motion-safe:animate-flicker" />
          Отворено
        </span>
      </div>

      <ul className="divide-y divide-white/5">
        {fuels.map((f) => (
          <li key={f.name} className="flex items-baseline justify-between px-5 py-3.5">
            <span
              className={`font-display uppercase tracking-wide ${
                f.accent ? "text-lpg" : "text-paper"
              }`}
            >
              {f.name}
            </span>
            <span className="flex items-baseline gap-1.5">
              <span
                className="font-mono text-2xl font-medium tabular-nums text-amber motion-safe:animate-flicker"
                style={{ textShadow: "0 0 12px rgba(255,176,32,0.45)" }}
              >
                {f.price}
              </span>
              <span className="font-mono text-[0.7rem] uppercase tracking-wider text-muted-dark">
                {f.unit}
              </span>
            </span>
          </li>
        ))}
      </ul>

      <p className="border-t border-white/10 px-5 py-2.5 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-muted-dark">
        * Примерни цени — обновявайте ги в lib/data.ts
      </p>
    </div>
  );
}
