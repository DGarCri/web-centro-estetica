import { site } from "@/data/site";
import { CONSULTAR, treatments, type Treatment } from "@/data/treatments";

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

function price(p: string) {
  const n = p.replace(/[^\d]/g, "");
  if (p === "Gratis") return { price: "0", priceCurrency: "EUR" };
  return p !== CONSULTAR && n ? { price: n, priceCurrency: "EUR" } : {};
}

function offers(list: Treatment[]) {
  return list.flatMap((t) =>
    t.groups.flatMap((g) =>
      g.services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name, category: t.name },
        ...price(s.price),
      })),
    ),
  );
}

type Props = {
  /** Ruta de la página (p. ej. "/tratamientos/hifu"). */
  path: string;
  /** En la página de un tratamiento: solo sus servicios, con migas y preguntas frecuentes. */
  treatment?: Treatment;
};

// BeautySalon por página. Solo datos comprobados en Booksy y Google Maps. Sin
// aggregateRating: Google no admite reseñas autopublicadas en LocalBusiness.
export default function LocalBusinessJsonLd({ path, treatment }: Props) {
  const url = `${site.url}${path === "/" ? "" : path}`;
  const salon = {
    "@type": "BeautySalon",
    "@id": `${site.url}/#negocio`,
    name: site.fullName,
    url: site.url,
    image: `${site.url}/images/og-aurea.jpg`,
    logo: `${site.url}/images/logo-aurea.webp`,
    telephone: site.phoneIntl,
    priceRange: "5 € – 599 €",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: "ES",
    },
    geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
    areaServed: ["Madrid", "Comunidad de Madrid"],
    hasMap: site.googleMaps,
    sameAs: [site.instagram, site.facebook, site.booksy],
    openingHoursSpecification: site.openingHours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days.filter((d) => DAYS.includes(d)),
      opens: h.opens,
      closes: h.closes,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: treatment ? treatment.name : "Tratamientos",
      itemListElement: offers(treatment ? [treatment] : treatments),
    },
  };

  const graph: object[] = [{ ...salon, mainEntityOfPage: url }];

  if (treatment) {
    graph.push(
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: `${site.url}/` },
          { "@type": "ListItem", position: 2, name: "Tratamientos", item: `${site.url}/tratamientos` },
          { "@type": "ListItem", position: 3, name: treatment.name, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: treatment.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    );
  }

  const data = { "@context": "https://schema.org", "@graph": graph };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
