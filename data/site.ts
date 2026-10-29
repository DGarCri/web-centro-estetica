// Datos del negocio (ficticio). Cambia este archivo para adaptar la plantilla a un centro real.

export const WHATSAPP_NUMBER = "34600000000";

/** Enlace a WhatsApp con el mensaje ya escrito para un tratamiento concreto. */
export function whatsappUrl(topic?: string) {
  const text = topic
    ? `Hola, vengo de la web y quiero información sobre ${topic}`
    : "Hola, vengo de la web y quiero información sobre vuestros tratamientos";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

// Página de reservas (Booksy u otra plataforma): todos los botones de reserva llevan aquí.
export const BOOKSY_URL =
  "https://booksy.com/es-es";

const GOOGLE_MAPS =
  "https://www.google.com/maps/search/?api=1&query=Puerta+del+Sol+Madrid";
const MAPS_QUERY = encodeURIComponent("Puerta del Sol, 28013 Madrid");

export const site = {
  name: "Aurea",
  fullName: "Aurea Estética",
  tagline: "Estética avanzada en Madrid",
    owner: "Lucía",
  // URL pública. Cambiar al dominio definitivo.
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
  booksy: BOOKSY_URL,
  whatsapp: whatsappUrl(),
  phone: "600 00 00 00",
  phoneHref: "tel:+34600000000",
  phoneIntl: "+34 600 00 00 00",
  instagram: "https://www.instagram.com/",
  instagramHandle: "@aurea.estetica",
  facebook: "https://www.facebook.com/",
  googleMaps: GOOGLE_MAPS,
  directions: `https://www.google.com/maps/dir/?api=1&destination=${MAPS_QUERY}`,
  mapEmbed: "https://www.google.com/maps?q=40.4169,-3.7035&z=17&hl=es&output=embed",
  address: {
    street: "Calle de Ejemplo, 1",
    postalCode: "28013",
    city: "Madrid",
    region: "Madrid",
  },
  geo: { lat: 40.4169, lng: -3.7035 },
  // Horario de ejemplo.
  hours: [
    { days: "Lunes a jueves", time: "10:30–13:30 · 16:30–18:00" },
    { days: "Viernes", time: "10:30–13:30 · 16:30–17:00" },
    { days: "Sábados", time: "Con cita por WhatsApp" },
    { days: "Domingos", time: "Cerrado" },
  ],
  // Para JSON-LD (solo los días con horario fijo).
  openingHours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "10:30", closes: "13:30" },
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "16:30", closes: "18:00" },
    { days: ["Friday"], opens: "10:30", closes: "13:30" },
    { days: ["Friday"], opens: "16:30", closes: "17:00" },
  ],
  ratings: {
    booksy: { value: "4,9", count: 96, url: BOOKSY_URL },
    google: { value: "4,8", count: 54, url: GOOGLE_MAPS },
  },
  instagramFollowers: "8.200",
  // Consulta de valoración.
  consultation: { price: "10 €", duration: "30 min" },
  updated: "2026",
};

export const nav = [
  { href: "/tratamientos", label: "Tratamientos" },
  { href: "/#antes-despues", label: "Antes y después" },
  { href: "/#opiniones", label: "Opiniones" },
  { href: "/#centro", label: "El centro" },
  { href: "/#ubicacion", label: "Contacto" },
];
