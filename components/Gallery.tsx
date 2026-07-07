import Image from "next/image";
import { gallery } from "@/lib/data";
import Reveal from "./Reveal";

export default function Gallery() {
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
              <div className="group relative aspect-[4/3] overflow-hidden border border-white/10">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-asphalt/0 transition-colors group-hover:bg-asphalt/30" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}