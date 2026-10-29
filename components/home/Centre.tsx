import Image from "next/image";
import { ClipboardCheck, MessageCircleHeart, Sparkles } from "lucide-react";
import { site } from "@/data/site";

const points = [
  {
    icon: ClipboardCheck,
    title: "Valoración antes de empezar",
    text: `Consulta de diagnóstico en Booksy (${site.consultation.price}, ${site.consultation.duration}). En HIFU, láser y Plasma Pen, siempre antes de la primera sesión.`,
  },
  {
    icon: MessageCircleHeart,
    title: "Te explica cada paso",
    text: "Es lo que más repiten las reseñas: sabes en todo momento qué te está haciendo y por qué.",
  },
  {
    icon: Sparkles,
    title: "Aparatología en el centro",
    text: "HIFU, láser Nd:YAG, láser de diodo, Plasma Pen y Dermapen en el mismo centro.",
  },
];

export default function Centre() {
  return (
    <section id="centro" className="scroll-mt-20 bg-sand py-16 md:py-24" aria-labelledby="centro-titulo">
      <div className="container-x grid gap-10 md:grid-cols-12 md:items-center">
        <div className="reveal md:col-span-5">
          <div className="grid grid-cols-2 gap-3">
            <div className="relative aspect-[9/16] overflow-hidden rounded-t-full">
              <Image
                src="/images/higiene-facial-cabina.webp"
                alt="Higiene facial en la cabina de Aurea Estética"
                fill
                sizes="(min-width: 768px) 20vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="placeholder-photo mt-10 flex aspect-[9/16] items-center justify-center rounded-b-full p-4 text-center">
              <span className="text-[0.625rem] uppercase leading-relaxed tracking-[0.2em] text-taupe">
                Foto pendiente
                <br />
                Foto del equipo o del local
              </span>
            </div>
          </div>
        </div>

        <div className="reveal md:col-span-7 md:pl-8">
          <p className="eyebrow text-gold">El centro</p>
          <h2 id="centro-titulo" className="mt-3 font-display text-4xl leading-[1.05] text-ink md:text-6xl">
            Te atiende {site.owner}, <span className="text-gold">paso a paso.</span>
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-taupe">
            Un centro con cita previa en {site.address.city}. Lucía te valora, te hace el tratamiento y te explica los
            cuidados de después.
          </p>
          <ul className="mt-8 space-y-6">
            {points.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-4">
                <span className="ring-icon size-11 shrink-0 text-ink/70">
                  <Icon className="size-[1.125rem]" strokeWidth={1.25} aria-hidden />
                </span>
                <div>
                  <h3 className="text-[1.0625rem] font-normal text-ink">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-taupe">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
