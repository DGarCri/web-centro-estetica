import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check, ChevronDown, ShieldCheck } from "lucide-react";
import { getTreatment, treatments } from "@/data/treatments";
import { reviewsByTreatment } from "@/data/reviews";
import { site } from "@/data/site";
import BookButton, { WhatsAppButton } from "@/components/BookButton";
import ServiceList from "@/components/ServiceList";
import FinalCta from "@/components/FinalCta";
import LocalBusinessJsonLd from "@/components/LocalBusinessJsonLd";
import { ReviewCard } from "@/components/Reviews";
import { TreatmentIcon } from "@/components/icons";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return treatments.map((t) => ({ slug: t.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const t = getTreatment((await params).slug);
  if (!t) return {};
  const path = `/tratamientos/${t.slug}`;
  return {
    title: t.seoTitle,
    description: t.metaDescription,
    alternates: { canonical: path },
    openGraph: { title: `${t.seoTitle} · Aurea Estética`, description: t.metaDescription, url: path },
  };
}

export default async function TreatmentPage({ params }: Params) {
  const t = getTreatment((await params).slug);
  if (!t) notFound();

  const [cover, ...gallery] = t.photos;
  const related = reviewsByTreatment[t.slug] ?? [];
  const others = treatments.filter((o) => o.slug !== t.slug);

  return (
    <>
      <LocalBusinessJsonLd path={`/tratamientos/${t.slug}`} treatment={t} />

      {/* Cabecera */}
      <section className="pb-12 md:pb-20">
        <div className="container-x">
          <nav aria-label="Migas de pan" className="pt-4 text-xs text-taupe md:pt-8">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/" className="hover:text-ink">
                  Inicio
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/tratamientos" className="hover:text-ink">
                  Tratamientos
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li aria-current="page" className="text-ink">
                {t.name}
              </li>
            </ol>
          </nav>

          <div className="mt-6 grid items-center gap-10 md:mt-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <div className="flex items-center gap-3">
                <span className="ring-icon size-11 text-ink/70">
                  <TreatmentIcon icon={t.icon} className="size-5" />
                </span>
                <p className="eyebrow text-gold">{t.kicker}</p>
              </div>
              <h1 className="mt-5 font-display text-[2.6rem] leading-[1.02] text-ink sm:text-6xl lg:text-7xl">{t.seoTitle}</h1>
              <p className="mt-5 max-w-lg text-[1.0625rem] leading-relaxed text-taupe">{t.summary}</p>

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                <p className="font-display text-4xl text-ink">{t.from}</p>
                {t.needsAssessment && (
                  <p className="inline-flex items-center gap-2 rounded-full bg-sand px-3 py-1.5 text-xs text-ink">
                    <ShieldCheck className="size-4 text-gold" strokeWidth={1.5} aria-hidden />
                    Valoración previa personalizada
                  </p>
                )}
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <BookButton treatment={t.name} className="w-full sm:w-auto" />
                <WhatsAppButton topic={t.whatsapp} className="w-full sm:w-auto">
                  Preguntar por WhatsApp
                </WhatsAppButton>
              </div>
            </div>

            <div className="md:col-span-5">
              {cover ? (
                <figure className="mx-auto w-[78%] max-w-xs md:w-full">
                  <div className="overflow-hidden rounded-t-full bg-sand p-1.5">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-t-full">
                      <Image
                        src={cover.src}
                        alt={cover.alt}
                        fill
                        priority
                        sizes="(min-width: 768px) 30vw, 78vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <figcaption className="mt-3 text-center text-[0.6875rem] uppercase tracking-[0.18em] text-taupe">
                    {cover.caption}
                  </figcaption>
                </figure>
              ) : (
                <div className="placeholder-photo mx-auto flex aspect-[3/4] w-[78%] max-w-xs items-center justify-center rounded-t-full p-8 text-center md:w-full">
                  <span className="text-[0.6875rem] uppercase leading-relaxed tracking-[0.2em] text-taupe">
                    {t.placeholder}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* En qué consiste y para quién es */}
      <section className="bg-paper py-14 md:py-20" aria-labelledby="que-es">
        <div className="container-x grid gap-12 md:grid-cols-12">
          <div className="reveal md:col-span-7">
            <p className="eyebrow text-gold">En qué consiste</p>
            <h2 id="que-es" className="mt-3 font-display text-4xl leading-[1.05] text-ink md:text-5xl">
              ¿Cómo funciona?
            </h2>
            <div className="mt-5 space-y-4 leading-relaxed text-taupe">
              {t.what.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <div className="mt-8 rounded-3xl bg-cream p-5 md:p-6">
              <h3 className="eyebrow text-ink">Sesiones</h3>
              <p className="mt-2 text-sm leading-relaxed text-taupe">{t.sessions}</p>
            </div>
          </div>

          <div className="reveal md:col-span-5">
            <p className="eyebrow text-gold">Para quién es</p>
            <ul className="mt-4 space-y-4">
              {t.forWho.map((f) => (
                <li key={f} className="flex gap-3 leading-relaxed text-ink">
                  <span className="ring-icon mt-0.5 size-6 shrink-0 text-gold">
                    <Check className="size-3.5" strokeWidth={1.5} aria-hidden />
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            {t.needsAssessment && (
              <aside className="mt-8 rounded-3xl border border-gold/40 p-5 text-sm leading-relaxed text-taupe md:p-6">
                <p className="flex items-center gap-2 font-normal text-ink">
                  <ShieldCheck className="size-4 text-gold" strokeWidth={1.5} aria-hidden /> Valoración previa personalizada
                </p>
                <p className="mt-2">
                  Antes de la primera sesión revisamos contigo tu piel, tu salud, tu medicación y tus tratamientos previos
                  para decidir si este tratamiento es adecuado para ti. Es un tratamiento estético: no sustituye el
                  consejo de tu médico y los resultados varían de una persona a otra.
                </p>
              </aside>
            )}
          </div>
        </div>
      </section>

      {/* Precios */}
      <section id="precios" className="scroll-mt-20 py-14 md:py-20" aria-labelledby="precios-titulo">
        <div className="container-x grid gap-10 md:grid-cols-12">
          <div className="reveal md:col-span-4">
            <p className="eyebrow text-gold">Precios · {t.name}</p>
            <h2 id="precios-titulo" className="mt-3 font-display text-4xl leading-[1.05] text-ink md:text-5xl">
              Precios y duración
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-taupe">
              Precios publicados en Booksy ({site.updated}). El precio final se confirma en la cita. Consulta de
              diagnóstico: {site.consultation.price}.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <BookButton treatment={t.name} />
              <WhatsAppButton topic={t.whatsapp}>Preguntar por WhatsApp</WhatsAppButton>
            </div>
          </div>
          <div className="reveal md:col-span-8">
            <ServiceList groups={t.groups} />
          </div>
        </div>
      </section>

      {/* Fotos */}
      {gallery.length > 0 && (
        <section className="pb-14 md:pb-20" aria-label={`Fotos de ${t.name}`}>
          <div className="container-x">
            <ul className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {gallery.map((p) => (
                <li key={p.src} className="reveal">
                  <figure>
                    <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-sand">
                      <Image src={p.src} alt={p.alt} fill sizes="(min-width: 768px) 22vw, 46vw" className="object-cover" />
                    </div>
                    <figcaption className="mt-2 text-xs text-taupe">{p.caption}</figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Reseñas del tratamiento */}
      {related.length > 0 && (
        <section className="bg-sand py-14 md:py-20" aria-labelledby="resenas-tratamiento">
          <div className="container-x">
            <p className="eyebrow text-gold">Opiniones</p>
            <h2 id="resenas-tratamiento" className="mt-3 font-display text-4xl leading-[1.05] text-ink md:text-5xl">
              Quien ya lo ha probado
            </h2>
            <ul className="no-scrollbar -mx-4 mt-8 flex snap-x snap-mandatory gap-3 carousel scroll-px-4 px-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-3">
              {related.map((r, i) => (
                <ReviewCard key={r.author + r.date} review={r} delay={i * 70} />
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Preguntas frecuentes */}
      <section className="py-14 md:py-20" aria-labelledby="faq-titulo">
        <div className="container-x grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow text-gold">Preguntas frecuentes</p>
            <h2 id="faq-titulo" className="mt-3 font-display text-4xl leading-[1.05] text-ink md:text-5xl">
              Lo que más nos preguntan
            </h2>
          </div>
          <div className="md:col-span-8">
            <ul className="divide-y divide-ink/10 border-y border-ink/10">
              {t.faqs.map((f) => (
                <li key={f.q}>
                  <details className="group py-1">
                    <summary className="flex cursor-pointer items-center justify-between gap-4 py-4 text-[1.0625rem] text-ink">
                      {f.q}
                      <ChevronDown
                        className="size-5 shrink-0 text-taupe transition-transform duration-300 group-open:rotate-180"
                        strokeWidth={1.25}
                        aria-hidden
                      />
                    </summary>
                    <p className="pb-5 pr-8 leading-relaxed text-taupe">{f.a}</p>
                  </details>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Otros tratamientos */}
      <section className="bg-paper py-14 md:py-16" aria-labelledby="otros-titulo">
        <div className="container-x">
          <h2 id="otros-titulo" className="eyebrow text-gold">
            Otros tratamientos en Madrid
          </h2>
          <ul className="no-scrollbar -mx-4 mt-5 flex gap-3 carousel px-4 md:mx-0 md:grid md:grid-cols-5 md:overflow-visible md:px-0">
            {others.map((o) => (
              <li key={o.slug} className="w-44 shrink-0 md:w-auto">
                <Link
                  href={`/tratamientos/${o.slug}`}
                  className="group flex h-full flex-col gap-3 rounded-3xl border border-ink/10 bg-cream p-4 hover:border-ink/30"
                >
                  <span className="flex items-center justify-between">
                    <span className="ring-icon size-9 text-ink/70">
                      <TreatmentIcon icon={o.icon} className="size-4" />
                    </span>
                    <ArrowUpRight className="size-4 text-taupe group-hover:text-ink" strokeWidth={1.25} aria-hidden />
                  </span>
                  <span className="font-display text-2xl leading-none text-ink [overflow-wrap:anywhere]">{o.cardName ?? o.name}</span>
                  <span className="text-xs text-taupe">{o.from}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FinalCta title={`¿Tienes dudas sobre ${t.whatsapp}?`} topic={t.whatsapp} />
    </>
  );
}
