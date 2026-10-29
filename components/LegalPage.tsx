import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Plantilla de los textos legales. Los huecos [entre corchetes] deben rellenarse
// con los datos fiscales de la titular antes de publicar la web definitiva.
export default function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="py-12 md:py-20">
      <div className="container-x max-w-3xl">
        <Link href="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-taupe hover:text-ink">
          <ArrowLeft className="size-3.5" strokeWidth={1.5} aria-hidden /> Inicio
        </Link>
        <h1 className="mt-8 font-display text-5xl leading-none text-ink md:text-6xl">{title}</h1>
        <p className="mt-6 rounded-xl border border-gold/40 bg-paper p-4 text-sm leading-relaxed text-taupe">
          Texto pendiente de completar con los datos de la titular. Esta es una propuesta de diseño, no la web oficial.
        </p>
        <div className="mt-10 space-y-5 leading-relaxed text-taupe [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-3xl [&_h2]:text-ink [&_strong]:text-ink">
          {children}
        </div>
      </div>
    </section>
  );
}
