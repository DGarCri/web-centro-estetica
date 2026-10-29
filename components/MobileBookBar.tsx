"use client";

import { usePathname } from "next/navigation";
import { CalendarCheck } from "lucide-react";
import { site, whatsappUrl } from "@/data/site";
import { treatments } from "@/data/treatments";
import { WhatsAppIcon } from "./icons";

// Barra fija en móvil: «Reservar» (Booksy) y «WhatsApp», siempre a mano. En la página de un
// tratamiento, el mensaje de WhatsApp ya lleva su nombre.
// Todo con min-w-0: nada puede ser más ancho que la pantalla.
export default function MobileBookBar() {
  const pathname = usePathname();
  const treatment = treatments.find((t) => pathname === `/tratamientos/${t.slug}`);

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-paper/95 px-3 pb-[calc(0.5rem+env(safe-area-inset-bottom))] pt-2 backdrop-blur-md lg:hidden">
      <div className="grid grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-2">
        <a
          href={site.booksy}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Reservar en Booksy (se abre en una pestaña nueva)"
          className="flex min-w-0 items-center justify-center gap-2 rounded-full bg-ink px-3 py-3.5 text-[0.75rem] font-medium uppercase tracking-[0.16em] text-cream"
        >
          <CalendarCheck className="size-4 shrink-0" strokeWidth={1.5} aria-hidden />
          Reservar
        </a>
        <a
          href={whatsappUrl(treatment?.whatsapp)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Escribir por WhatsApp (se abre en una pestaña nueva)"
          className="flex min-w-0 items-center justify-center gap-2 rounded-full border border-ink/25 px-3 py-3.5 text-[0.75rem] font-medium uppercase tracking-[0.16em] text-ink"
        >
          <WhatsAppIcon className="size-4 shrink-0 text-whatsapp" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
