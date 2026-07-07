import { business } from "@/lib/data";
import { IconPhone, IconPin, IconClock } from "./Icons";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="kontakti" className="scroll-mt-20 border-t border-white/10 bg-asphalt-900 py-20 md:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-2">
        <Reveal>
          <span className="eyebrow">Контакти</span>
          <h2 className="display-title mt-3 text-4xl text-paper md:text-5xl">
            Отбий се при нас
          </h2>
          <p className="mt-4 max-w-md text-muted-dark">
            Позвъни или мини директно — екипът ни е насреща през целия работен ден.
          </p>

          <div className="mt-8 space-y-5">
            <a href={business.phoneHref} className="flex items-start gap-4 group">
              <span className="grid h-11 w-11 shrink-0 place-items-center border border-white/15 text-amber">
                <IconPhone width={20} height={20} />
              </span>
              <span>
                <span className="block font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-dark">
                  Телефон
                </span>
                <span className="font-display text-2xl text-paper transition-colors group-hover:text-amber">
                  {business.phone}
                </span>
              </span>
            </a>

            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center border border-white/15 text-amber">
                <IconPin width={20} height={20} />
              </span>
              <span>
                <span className="block font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-dark">
                  Адрес
                </span>
                <span className="font-display text-xl text-paper">{business.address}</span>
              </span>
            </div>

            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center border border-white/15 text-amber">
                <IconClock width={20} height={20} />
              </span>
              <div>
                <span className="block font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-dark">
                  Работно време
                </span>
                <ul className="mt-1 space-y-1">
                  {business.hours.map((h) => (
                    <li key={h.d} className="flex gap-4 text-paper">
                      <span className="w-44 text-muted-dark">{h.d}</span>
                      <span className="font-mono tabular-nums text-amber">{h.h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Карта */}
        <Reveal delay={120}>
          <div className="h-full min-h-[22rem] overflow-hidden border border-white/10 bg-asphalt-800">
            {business.mapEmbed ? (
              <iframe
                src={business.mapEmbed}
                title="Карта"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-3 p-8 text-center">
                <IconPin width={40} height={40} className="text-amber" />
                <p className="font-display text-xl uppercase tracking-wide text-paper">
                  Тук ще стои картата
                </p>
                <p className="max-w-xs font-mono text-xs leading-relaxed text-muted-dark">
                  Постави линк за вграждане от Google Карти в полето{" "}
                  <span className="text-amber">mapEmbed</span> в lib/data.ts
                </p>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
