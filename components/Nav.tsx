"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { business, nav } from "@/lib/data";
import { IconPhone } from "./Icons";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-asphalt-900/95 backdrop-blur border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between md:h-20">
        <a href="#top" className="flex items-center" aria-label={business.name}>
          <Image
            src="/images/deko-logo-light.png"
            alt={business.name}
            width={542}
            height={328}
            priority
            className="h-9 w-auto md:h-11"
          />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="font-mono text-xs uppercase tracking-[0.18em] text-muted-dark transition-colors hover:text-amber"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={business.phoneHref}
              className="flex items-center gap-2 rounded-lg bg-amber px-4 py-2 font-display font-medium uppercase tracking-wide text-asphalt transition-transform hover:-translate-y-0.5"
            >
              <IconPhone width={18} height={18} />
              Обади се
            </a>
          </li>
        </ul>

        {/* Мобилен бутон */}
        <button
          aria-label={open ? "Затвори менюто" : "Отвори менюто"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-paper transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span className={`h-0.5 w-6 bg-paper transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-6 bg-paper transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Мобилно падащо меню */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-asphalt-900 md:hidden ${
          open ? "max-h-96" : "max-h-0 border-t-0"
        } transition-[max-height] duration-300`}
      >
        <ul className="container-x flex flex-col gap-1 py-4">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-3 font-display text-lg uppercase tracking-wide text-paper"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={business.phoneHref}
              className="flex items-center justify-center gap-2 rounded-lg bg-amber px-4 py-3 font-display font-medium uppercase tracking-wide text-asphalt"
            >
              <IconPhone width={18} height={18} />
              {business.phone}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
