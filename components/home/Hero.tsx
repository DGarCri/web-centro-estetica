import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { site } from "@/data/site";
import BookButton, { WhatsAppButton } from "../BookButton";

export default function Hero() {
  const { booksy, google } = site.ratings;
  return (
    <section className="relative overflow-hidden pb-12 md:pb-20">
      <div className="container-x relative grid items-center gap-10 pt-6 md:grid-cols-12 md:pt-14">
        <div className="md:col-span-7">
          <p className="eyebrow text-gold">Madrid · solo con cita previa</p>
          <h1 className="mt-4 font-display text-[2.85rem] leading-[1.02] text-ink sm:text-6xl lg:text-[4.4rem]">
            Estética avanzada y rejuvenecimiento <em className="not-italic text-gold">no invasivo</em>
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-taupe md:text-[1.0625rem]">
            Micropigmentación, HIFU, Plasma Pen, láser Nd:YAG y diodo, cejas, pestañas y faciales. Con valoración previa
            y explicándote cada paso.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <BookButton className="w-full sm:w-auto" />
            <WhatsAppButton className="w-full sm:w-auto">Preguntar por WhatsApp</WhatsAppButton>
          </div>

          {/* Prueba social */}
          <ul className="mt-8 grid grid-cols-3 divide-x divide-ink/10 border-y border-ink/10 py-4 text-center sm:max-w-xl sm:text-left">
            <li className="px-2 sm:pl-0 sm:pr-5">
              <a href={booksy.url} target="_blank" rel="noopener noreferrer" className="block hover:text-gold">
                <span className="flex items-center justify-center gap-1 font-display text-3xl leading-none sm:justify-start">
                  {booksy.value}
                  <Star className="size-4 fill-gold text-gold" strokeWidth={0} aria-hidden />
                </span>
                <span className="mt-1.5 block text-[0.6875rem] uppercase leading-snug tracking-[0.14em] text-taupe">
                  Booksy · {booksy.count} reseñas
                </span>
              </a>
            </li>
            <li className="px-2 sm:px-5">
              <a href={google.url} target="_blank" rel="noopener noreferrer" className="block hover:text-gold">
                <span className="flex items-center justify-center gap-1 font-display text-3xl leading-none sm:justify-start">
                  {google.value}
                  <Star className="size-4 fill-gold text-gold" strokeWidth={0} aria-hidden />
                </span>
                <span className="mt-1.5 block text-[0.6875rem] uppercase leading-snug tracking-[0.14em] text-taupe">
                  Google · {google.count} opiniones
                </span>
              </a>
            </li>
            <li className="px-2 sm:px-5">
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="block hover:text-gold">
                <span className="block font-display text-3xl leading-none">+{site.instagramFollowers}</span>
                <span className="mt-1.5 block text-[0.6875rem] uppercase leading-snug tracking-[0.14em] text-taupe">
                  Seguidores en Instagram
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div className="relative md:col-span-5">
          {/* Dibujo de línea de su flyer, detrás de la foto en arco */}
          <Image
            src="/images/linea-rostro.webp"
            alt=""
            width={448}
            height={635}
            aria-hidden
            priority
            className="pointer-events-none absolute -left-6 -top-4 w-40 opacity-30 md:-left-24 md:top-6 md:w-56"
          />
          <div className="relative ml-auto w-[82%] max-w-sm overflow-hidden rounded-t-full border border-ink/10 bg-sand p-2 md:w-full">
            <div className="relative aspect-[3/4] overflow-hidden rounded-t-full">
              <Image
                src="/images/cejas-antes-despues-microblading.webp"
                alt="Cejas antes (arriba) y después (abajo) de la micropigmentación en Aurea"
                fill
                priority
                sizes="(min-width: 768px) 36vw, 80vw"
                className="object-cover"
              />
              <span className="eyebrow absolute left-1/2 top-[38%] -translate-x-1/2 rounded-full bg-paper/90 px-3 py-1 text-[0.625rem] text-ink">
                Antes
              </span>
              <span className="eyebrow absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-ink px-3 py-1 text-[0.625rem] text-cream">
                Después
              </span>
            </div>
          </div>
          <p className="mt-3 text-right text-[0.6875rem] uppercase tracking-[0.2em] text-taupe">
            Ejemplo ·{" "}
            <Link href="/tratamientos/micropigmentacion" className="link-underline">
              micropigmentación de cejas
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
