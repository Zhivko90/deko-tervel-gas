import Image from "next/image";
import { services } from "@/lib/data";
import { serviceIcons } from "./Icons";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="uslugi" className="scroll-mt-20 bg-concrete py-20 text-asphalt md:py-28">
      <div className="container-x">
        <Reveal>
          <span className="eyebrow text-amber-deep">Нашите услуги</span>
          <h2 className="display-title mt-3 max-w-2xl text-4xl text-asphalt md:text-5xl">
            Шест услуги под един покрив
          </h2>
          <p className="mt-4 max-w-2xl text-muted-light">
            От зареждане с гориво до строителни материали — обслужваме и колата, и обекта ти.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = serviceIcons[s.id];
            return (
              <Reveal key={s.id} delay={(i % 3) * 100}>
                <article className="group h-full overflow-hidden border border-black/10 bg-white transition-shadow hover:shadow-xl">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-asphalt/60 to-transparent" />
                    <span className="absolute left-3 top-3 bg-amber px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-asphalt">
                      {s.tag}
                    </span>
                    <span className="absolute bottom-3 left-3 grid h-11 w-11 place-items-center bg-asphalt text-amber">
                      {Icon && <Icon />}
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="display-title text-2xl text-asphalt">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-light">{s.text}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {s.features.map((f) => (
                        <li
                          key={f}
                          className="border border-black/10 bg-concrete-light px-2.5 py-1 font-mono text-[0.7rem] uppercase tracking-wide text-asphalt/80"
                        >
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
