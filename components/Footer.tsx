import Image from "next/image";
import { business, services, nav } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-asphalt py-14">
      <div className="container-x grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center">
            <Image
              src="/images/deko-logo-light.png"
              alt={business.name}
              width={542}
              height={328}
              className="h-11 w-auto"
            />
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-dark">{business.tagline}. {business.intro}</p>
        </div>

        <div>
          <h4 className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-amber">Услуги</h4>
          <ul className="mt-4 space-y-2">
            {services.map((s) => (
              <li key={s.id}>
                <a href="#uslugi" className="text-sm text-muted-dark transition-colors hover:text-paper">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-amber">Меню</h4>
          <ul className="mt-4 space-y-2">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-sm text-muted-dark transition-colors hover:text-paper">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-amber">Контакт</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-dark">
            <li>
              <a href={business.phoneHref} className="transition-colors hover:text-paper">
                {business.phone}
              </a>
            </li>
            <li>{business.address}</li>
          </ul>
        </div>
      </div>

      <div className="container-x mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-muted-dark sm:flex-row sm:items-center sm:justify-between">
        <span>
          © {new Date().getFullYear()} {business.name}. Всички права запазени.
        </span>
        <span className="font-mono uppercase tracking-wider">Изработено с Next.js &amp; Tailwind</span>
      </div>
    </footer>
  );
}