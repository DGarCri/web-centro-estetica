import { Star } from "lucide-react";
import type { Review } from "@/data/reviews";
import { site } from "@/data/site";

function Stars({ className = "size-3.5" }: { className?: string }) {
  return (
    <span className="flex gap-0.5 text-gold" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`${className} fill-current`} strokeWidth={0} />
      ))}
    </span>
  );
}

export function ReviewCard({ review: r, delay = 0 }: { review: Review; delay?: number }) {
  return (
    <li className="reveal w-[82vw] max-w-sm shrink-0 snap-start rounded-3xl border border-ink/10 bg-paper p-6 sm:w-auto sm:max-w-none" style={{ transitionDelay: `${delay}ms` }}>
      <figure className="flex h-full flex-col">
        <Stars />
        <blockquote className="mt-4 flex-1 text-[0.9375rem] leading-relaxed text-ink">«{r.text}»</blockquote>
        <figcaption className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-taupe">
          <span className="text-sm text-ink">{r.author}</span>
          <span aria-hidden>·</span>
          <span>{r.date}</span>
          <span aria-hidden>·</span>
          <span>{r.source}</span>
          {r.service && <span className="w-full text-[0.625rem] uppercase tracking-[0.18em] text-gold">{r.service}</span>}
        </figcaption>
      </figure>
    </li>
  );
}

export default function Reviews({ reviews, title = "Lo que dicen sus clientas." }: { reviews: Review[]; title?: string }) {
  const { booksy, google } = site.ratings;
  return (
    <section id="opiniones" className="scroll-mt-20 py-16 md:py-24" aria-labelledby="opiniones-titulo">
      <div className="container-x">
        <div className="reveal grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-6">
            <p className="eyebrow text-gold">Opiniones</p>
            <h2 id="opiniones-titulo" className="mt-3 font-display text-4xl leading-[1.05] text-ink md:text-6xl">
              {title}
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3 md:col-span-6">
            {[
              { label: "Booksy", ...booksy, unit: "reseñas" },
              { label: "Google", ...google, unit: "opiniones" },
            ].map((r) => (
              <a
                key={r.label}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-3xl border border-ink/10 bg-paper p-4 transition-colors hover:border-ink/30 md:p-5"
              >
                <span className="eyebrow text-[0.625rem] text-taupe">{r.label}</span>
                <span className="mt-2 flex items-end gap-2">
                  <span className="font-display text-5xl leading-none text-ink">{r.value}</span>
                  <span className="pb-1.5">
                    <Stars className="size-3" />
                  </span>
                </span>
                <span className="mt-2 block text-xs text-taupe">
                  {r.count} {r.unit} · <span className="link-underline">ver todas</span>
                </span>
              </a>
            ))}
          </div>
        </div>

        <ul className="no-scrollbar -mx-4 mt-10 flex snap-x snap-mandatory gap-3 carousel scroll-px-4 px-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-3 lg:gap-4">
          {reviews.map((r, i) => (
            <ReviewCard key={r.author + r.date} review={r} delay={(i % 3) * 70} />
          ))}
        </ul>
        <p className="mt-6 text-xs text-taupe">
          Reseñas de ejemplo: el negocio y sus clientas son ficticios.
        </p>
      </div>
    </section>
  );
}
