import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { treatments } from "@/data/treatments";
import { TreatmentIcon } from "../icons";

export default function Featured() {
  return (
    <section className="bg-paper py-16 md:py-24" aria-labelledby="tratamientos-titulo">
      <div className="container-x">
        <div className="reveal flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow text-gold">Tratamientos</p>
            <h2 id="tratamientos-titulo" className="mt-3 font-display text-4xl leading-[1.05] text-ink md:text-6xl">
              Todo lo que hacemos, con precio.
            </h2>
          </div>
          <Link href="/tratamientos" className="text-[0.75rem] uppercase tracking-[0.2em] text-ink">
            <span className="link-underline">Ver la lista completa</span>
          </Link>
        </div>

        <ul className="mt-8 grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-3 lg:gap-4">
          {treatments.map((t, i) => (
            <li key={t.slug} className="reveal" style={{ transitionDelay: `${(i % 3) * 70}ms` }}>
              <Link
                href={`/tratamientos/${t.slug}`}
                className="group flex h-full flex-col rounded-3xl border border-ink/10 bg-cream p-4 transition-colors duration-300 hover:border-ink/30 hover:bg-sand sm:p-5 md:p-7"
              >
                <div className="flex items-start justify-between">
                  <span className="ring-icon size-10 text-ink/75 sm:size-12">
                    <TreatmentIcon icon={t.icon} className="size-5" />
                  </span>
                  <ArrowUpRight
                    className="size-5 text-taupe transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                    strokeWidth={1.25}
                    aria-hidden
                  />
                </div>
                <p className="eyebrow mt-6 hidden text-[0.625rem] text-gold sm:block">{t.kicker}</p>
                <h3 className="mt-4 font-display text-[1.4rem] leading-none text-ink [overflow-wrap:anywhere] sm:mt-2 sm:text-3xl">{t.cardName ?? t.name}</h3>
                <p className="mt-3 hidden flex-1 text-sm leading-relaxed text-taupe sm:block">{t.summary}</p>
                <span className="mb-4 flex-1 sm:hidden" />
                <p className="mt-auto border-t border-ink/10 pt-3 text-sm text-ink sm:mt-5 sm:pt-4">{t.from}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
