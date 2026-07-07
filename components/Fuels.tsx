import { IconFuel, IconGas } from "./Icons";
import Reveal from "./Reveal";

const items = [
  {
    name: "Бензин А95",
    text: "Качествен бензин за всеки автомобил.",
    icon: IconFuel,
  },
  {
    name: "Дизел",
    text: "Дизелово гориво за леки и товарни коли.",
    icon: IconFuel,
  },
  {
    name: "Автогаз (LPG)",
    text: "Изгодно гориво за коли с газова уредба.",
    icon: IconFuel,
    accent: true,
  },
  {
    name: "Пропан-бутан",
    text: "Пълнене на битови бутилки за готвене и отопление.",
    icon: IconGas,
    accent: true,
  },
];

export default function Fuels() {
  return (
    <section id="gorivo" className="scroll-mt-20 bg-asphalt-900 py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <span className="eyebrow">Горива и газ</span>
          <h2 className="display-title mt-3 max-w-2xl text-4xl text-paper md:text-5xl">
            Заредете при нас — денонощно
          </h2>
          <p className="mt-4 max-w-2xl text-muted-dark">
            Бензин, дизел и автогаз за автомобила, както и пропан-бутан за битови бутилки.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.name} delay={(i % 4) * 90}>
                <article
                  className={`h-full border bg-asphalt-800 p-6 transition-colors ${
                    f.accent
                      ? "border-lpg/40 hover:border-lpg"
                      : "border-white/10 hover:border-amber"
                  }`}
                >
                  <span
                    className={`grid h-12 w-12 place-items-center rounded-lg ${
                      f.accent ? "bg-lpg/15 text-lpg" : "bg-amber/15 text-amber"
                    }`}
                  >
                    <Icon />
                  </span>
                  <h3 className="mt-5 font-display text-2xl uppercase tracking-wide text-paper">
                    {f.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-dark">{f.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <p className="mt-8 font-mono text-xs uppercase tracking-[0.15em] text-muted-dark">
          Актуалните цени питайте на място.
        </p>
      </div>
    </section>
  );
}