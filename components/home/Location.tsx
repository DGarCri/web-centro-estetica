import { Clock, MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";
import BookButton, { WhatsAppButton } from "../BookButton";

export default function Location() {
  return (
    <section id="ubicacion" className="scroll-mt-20 bg-paper py-16 md:py-24" aria-labelledby="ubicacion-titulo">
      <div className="container-x grid gap-10 lg:grid-cols-12">
        <div className="reveal lg:col-span-5">
          <p className="eyebrow text-gold">Ubicación y horario</p>
          <h2 id="ubicacion-titulo" className="mt-3 font-display text-4xl leading-[1.05] text-ink md:text-6xl">
            En Madrid, <span className="text-gold">con cita previa.</span>
          </h2>

          <dl className="mt-8 space-y-6">
            <div className="flex gap-4">
              <span className="ring-icon size-10 shrink-0 text-ink/70">
                <MapPin className="size-4" strokeWidth={1.25} aria-hidden />
              </span>
              <div>
                <dt className="eyebrow text-[0.625rem] text-taupe">Dirección</dt>
                <dd className="mt-1 leading-relaxed text-ink">
                  {site.address.street}
                  <br />
                  {site.address.postalCode} {site.address.city} ({site.address.region})
                </dd>
                <a href={site.directions} target="_blank" rel="noopener noreferrer" className="link-underline mt-1.5 inline-block text-sm text-gold">
                  Cómo llegar
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="ring-icon size-10 shrink-0 text-ink/70">
                <Clock className="size-4" strokeWidth={1.25} aria-hidden />
              </span>
              <div className="min-w-0 flex-1">
                <dt className="eyebrow text-[0.625rem] text-taupe">Horario</dt>
                <dd className="mt-1">
                  <table className="w-full max-w-sm text-sm">
                    <tbody>
                      {site.hours.map((h) => (
                        <tr key={h.days} className="border-b border-ink/10 last:border-0">
                          <th scope="row" className="py-1.5 pr-4 text-left font-normal text-ink">
                            {h.days}
                          </th>
                          <td className="py-1.5 text-right text-taupe">{h.time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </dd>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="ring-icon size-10 shrink-0 text-ink/70">
                <Phone className="size-4" strokeWidth={1.25} aria-hidden />
              </span>
              <div>
                <dt className="eyebrow text-[0.625rem] text-taupe">Teléfono y WhatsApp</dt>
                <dd className="mt-1">
                  <a href={site.phoneHref} className="link-underline text-ink">
                    {site.phone}
                  </a>
                </dd>
              </div>
            </div>
          </dl>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <BookButton />
            <WhatsAppButton>WhatsApp</WhatsAppButton>
          </div>
        </div>

        <div className="reveal lg:col-span-7">
          <div className="h-full overflow-hidden rounded-3xl border border-ink/10">
            <iframe
              title={`Mapa: ${site.fullName}, ${site.address.street}, ${site.address.city}`}
              src={site.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block aspect-[4/3] h-full min-h-[20rem] w-full border-0 sepia-[0.2] lg:aspect-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
