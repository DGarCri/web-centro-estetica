import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { beforeAfter } from "@/data/treatments";
import { InstagramIcon } from "../icons";

// Composiciones antes/después (arriba, antes).
export default function BeforeAfter() {
  return (
    <section id="antes-despues" className="scroll-mt-20 py-16 md:py-24" aria-labelledby="antes-titulo">
      <div className="container-x">
        <div className="reveal flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow text-gold">Antes y después</p>
            <h2 id="antes-titulo" className="mt-3 font-display text-4xl leading-[1.05] text-ink md:text-6xl">
              Resultados naturales, <span className="text-gold">sin filtros.</span>
            </h2>
            <p className="mt-4 text-taupe">
              Arriba, antes; abajo, después. <span className="lg:hidden">Desliza para ver más.</span>
            </p>
          </div>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[0.75rem] uppercase tracking-[0.2em] text-ink"
          >
            <InstagramIcon className="size-4" />
            <span className="link-underline">Más en Instagram</span>
          </a>
        </div>

        <ul className="no-scrollbar -mx-4 mt-10 flex snap-x snap-mandatory gap-3 carousel scroll-px-4 px-4 md:-mx-10 md:scroll-px-10 md:px-10 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-4 lg:overflow-visible lg:px-0">
          {beforeAfter.map((p) => (
            <li key={p.src} className="reveal w-[72vw] max-w-xs shrink-0 snap-start lg:w-auto lg:max-w-none">
              <figure>
                <Link href={`/tratamientos/${p.treatment}`} className="block overflow-hidden rounded-t-full bg-sand p-1.5">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-t-full">
                    <Image src={p.src} alt={p.alt} fill sizes="(min-width: 1024px) 22vw, 72vw" className="object-cover" />
                  </div>
                </Link>
                <figcaption className="mt-3 flex items-baseline justify-between gap-2">
                  <span className="font-display text-2xl text-ink">{p.caption}</span>
                  <span className="text-[0.625rem] uppercase tracking-[0.18em] text-taupe">Micropigmentación</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
