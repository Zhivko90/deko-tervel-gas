import Image from "next/image";
import { business } from "@/lib/data";
import { IconPhone, IconPin } from "./Icons";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Фоново изображение */}
      <div className="absolute inset-0">
        <Image
          src="/images/00-hero.jpg"
          alt="Комплексът в цялост"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-asphalt via-asphalt/85 to-asphalt/60" />
      </div>

      <div className="container-x relative flex min-h-[100svh] flex-col justify-center pb-20 pt-32">
        <div className="mx-auto max-w-3xl animate-rise text-center">
          {/* Лого + име */}
          <div className="flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-7">
            <Image
              src="/images/deko-logo-light.png"
              alt={business.name}
              width={542}
              height={328}
              priority
              className="h-16 w-auto sm:h-24"
            />
            <span className="hidden h-20 w-px bg-white/20 sm:block" aria-hidden />
            <h1 className="display-title text-5xl text-paper sm:text-6xl md:text-7xl">
              Тервел <span className="text-amber">Газ</span>
            </h1>
          </div>

          <p className="mx-auto mt-7 max-w-xl text-lg text-muted-dark">{business.intro}</p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#uslugi"
              className="rounded-lg bg-amber px-6 py-3.5 font-display font-medium uppercase tracking-wide text-asphalt transition-transform hover:-translate-y-0.5"
            >
              Виж услугите
            </a>
            <a
              href={business.phoneHref}
              className="flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3.5 font-display font-medium uppercase tracking-wide text-paper transition-colors hover:border-amber hover:text-amber"
            >
              <IconPhone width={18} height={18} />
              Обади се
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-dark">
            <IconPin width={16} height={16} className="text-amber" />
            {business.address}
          </div>
        </div>
      </div>

      {/* Опасна лента-разделител */}
      <div className="h-3 w-full bg-hazard opacity-90" aria-hidden />
    </section>
  );
}
