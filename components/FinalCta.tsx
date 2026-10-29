import Image from "next/image";
import { site } from "@/data/site";
import BookButton, { WhatsAppButton } from "./BookButton";

type Props = {
  title?: string;
  /** Tratamiento para el mensaje de WhatsApp. */
  topic?: string;
};

export default function FinalCta({ title = "¿No sabes qué tratamiento necesitas?", topic }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-cream" aria-labelledby="reserva-titulo">
      <Image
        src="/images/linea-rostro.webp"
        alt=""
        width={448}
        height={635}
        aria-hidden
        className="pointer-events-none absolute -bottom-10 -right-10 w-64 opacity-25 invert md:right-10 md:w-80"
      />
      <div className="container-x relative py-16 md:py-24">
        <div className="reveal max-w-2xl">
          <p className="eyebrow text-gold-soft">Valoración previa</p>
          <h2 id="reserva-titulo" className="mt-4 font-display text-4xl leading-[1.05] md:text-6xl">
            {title}
          </h2>
          <p className="mt-6 max-w-lg leading-relaxed text-cream/75">
            Reserva la consulta de diagnóstico ({site.consultation.price}, {site.consultation.duration}) o escríbenos por
            WhatsApp: te orientamos antes de reservar el tratamiento.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <BookButton variant="light">Reservar en Booksy</BookButton>
            <WhatsAppButton topic={topic} className="!border-cream/40 !text-cream hover:!bg-cream hover:!text-ink">
              Preguntar por WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
}
