import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { treatments } from "@/data/treatments";
import { FacebookIcon, InstagramIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-sand pb-32 pt-16 text-taupe lg:pb-12 md:pt-20">
      <div className="container-x">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-12">
          <div className="col-span-2 md:col-span-4">
            <Image src="/images/logo-aurea.webp" alt="Aurea Estética" width={886} height={522} className="h-auto w-40" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed">
              Estética avanzada y rejuvenecimiento no invasivo en Madrid. Solo con cita previa.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram (se abre en una pestaña nueva)"
                className="ring-icon size-10 text-ink/70 hover:text-gold"
              >
                <InstagramIcon className="size-4" />
              </a>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook (se abre en una pestaña nueva)"
                className="ring-icon size-10 text-ink/70 hover:text-gold"
              >
                <FacebookIcon className="size-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h2 className="eyebrow text-ink">Tratamientos</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {treatments.map((t) => (
                <li key={t.slug}>
                  <Link href={`/tratamientos/${t.slug}`} className="hover:text-ink">
                    {t.seoTitle.replace(" en Madrid", "")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h2 className="eyebrow text-ink">Horario</h2>
            <dl className="mt-4 space-y-2.5 text-sm">
              {site.hours.map((h) => (
                <div key={h.days}>
                  <dt className="text-ink">{h.days}</dt>
                  <dd>{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="col-span-2 md:col-span-3">
            <h2 className="eyebrow text-ink">Dónde estamos</h2>
            <address className="mt-4 text-sm not-italic leading-relaxed">
              {site.address.street}
              <br />
              {site.address.postalCode} {site.address.city} ({site.address.region})
            </address>
            <p className="mt-3 flex flex-col gap-2 text-sm">
              <a href={site.directions} target="_blank" rel="noopener noreferrer" className="link-underline self-start text-ink">
                Cómo llegar
              </a>
              <a href={site.phoneHref} className="link-underline self-start text-ink">
                {site.phone}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-ink/10 pt-6 text-xs md:flex-row md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.fullName}
          </p>
          <p className="flex flex-wrap gap-x-4 gap-y-1">
            <Link href="/aviso-legal" className="hover:text-ink">
              Aviso legal
            </Link>
            <Link href="/privacidad" className="hover:text-ink">
              Privacidad
            </Link>
            <span>Propuesta de diseño no oficial · Datos de Booksy, Google e Instagram a {site.updated}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
