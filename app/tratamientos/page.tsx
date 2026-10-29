import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { treatments } from "@/data/treatments";
import { site } from "@/data/site";
import ServiceList from "@/components/ServiceList";
import FinalCta from "@/components/FinalCta";
import LocalBusinessJsonLd from "@/components/LocalBusinessJsonLd";
import { TreatmentIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Tratamientos y precios en Madrid",
  description:
    "Precios de micropigmentación, HIFU, Plasma Pen, láser Nd:YAG y diodo, cejas con hilo, pestañas y faciales en Aurea Estética, Madrid.",
  alternates: { canonical: "/tratamientos" },
  openGraph: { title: "Tratamientos y precios · Aurea Estética", url: "/tratamientos" },
};

export default function TratamientosPage() {
  return (
    <>
      <LocalBusinessJsonLd path="/tratamientos" />
      <section className="pb-8 pt-8 md:pb-12 md:pt-16">
        <div className="container-x">
          <p className="eyebrow text-gold">Tratamientos y precios</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.02] text-ink md:text-7xl">
            Tratamientos en Madrid
          </h1>
          <p className="mt-5 max-w-xl leading-relaxed text-taupe">
            Todos los precios y duraciones, tal y como están en Booksy ({site.updated}). Toca un tratamiento para ver en
            qué consiste, para quién es y sus preguntas frecuentes.
          </p>
        </div>

        {/* Índice rápido, fijo bajo la cabecera */}
        <nav aria-label="Tratamientos" className="sticky top-16 z-30 mt-8 border-y border-ink/10 bg-cream/95 backdrop-blur-md lg:top-20">
          <ul className="no-scrollbar container-x flex gap-2 carousel py-3">
            {treatments.map((t) => (
              <li key={t.slug} className="shrink-0">
                <a href={`#${t.slug}`} className="block rounded-full border border-ink/15 px-4 py-2 text-sm text-ink hover:border-ink">
                  {t.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      <div className="container-x space-y-16 pb-20 md:space-y-24">
        {treatments.map((t) => (
          <section key={t.slug} id={t.slug} className="scroll-mt-36 grid gap-8 md:grid-cols-12" aria-labelledby={`${t.slug}-t`}>
            <div className="md:col-span-4">
              <span className="ring-icon size-12 text-ink/70">
                <TreatmentIcon icon={t.icon} className="size-5" />
              </span>
              <p className="eyebrow mt-5 text-gold">{t.kicker}</p>
              <h2 id={`${t.slug}-t`} className="mt-2 font-display text-4xl leading-none text-ink md:text-5xl">
                {t.name}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-taupe">{t.summary}</p>
              <Link
                href={`/tratamientos/${t.slug}`}
                className="mt-5 inline-flex items-center gap-2 text-[0.75rem] uppercase tracking-[0.2em] text-ink"
              >
                <span className="link-underline">Ver {t.name.toLowerCase()}</span>
                <ArrowRight className="size-4" strokeWidth={1.25} aria-hidden />
              </Link>
            </div>
            <div className="md:col-span-8">
              <ServiceList groups={t.groups} />
            </div>
          </section>
        ))}
      </div>

      <FinalCta />
    </>
  );
}
