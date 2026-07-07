import { advantages } from "@/lib/data";
import Reveal from "./Reveal";

export default function Advantages() {
  return (
    <section className="bg-amber py-16 text-asphalt md:py-20">
      <div className="container-x grid gap-10 md:grid-cols-3">
        {advantages.map((a, i) => (
          <Reveal key={a.title} delay={i * 100}>
            <div className="border-t-2 border-asphalt pt-4">
              <h3 className="display-title text-2xl md:text-3xl">{a.title}</h3>
              <p className="mt-2 text-asphalt/80">{a.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
