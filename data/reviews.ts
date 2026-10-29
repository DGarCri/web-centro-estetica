// Reseñas de ejemplo: el negocio y las clientas son ficticios. Sustitúyelas por reseñas reales
// (con permiso) al adaptar la plantilla.

export type Review = {
  text: string;
  author: string;
  date: string;
  source: "Google" | "Booksy";
  service?: string;
};

export const reviews: Review[] = [
  {
    text: "Lucía te explica cada paso antes de empezar y se nota que sabe lo que hace. Repetiré seguro.",
    author: "Marta G.",
    date: "Hace 2 semanas",
    source: "Google",
  },
  {
    text: "Me hice un Plasma Pen en los párpados y el resultado ha sido mejor de lo que esperaba. El centro está impecable.",
    author: "Carlos M.",
    date: "Hace 8 meses",
    source: "Google",
    service: "Plasma Pen",
  },
  {
    text: "Por fin alguien que entiende mis cejas. El diseño es natural y me lo explicó todo con calma.",
    author: "Laura",
    date: "Octubre 2026",
    source: "Booksy",
    service: "Cejas con hilo",
  },
  {
    text: "Las pestañas me han quedado perfectas y duran muchísimo. Trato muy cercano y puntualidad total.",
    author: "Sara P.",
    date: "Hace un año",
    source: "Google",
    service: "Pestañas",
  },
  {
    text: "Salí encantada del microblading. Muy cuidadosa y con mucho detalle en la forma.",
    author: "Elena R.",
    date: "Hace un año",
    source: "Google",
    service: "Microblading",
  },
  {
    text: "La higiene facial más completa que me han hecho. Te va contando qué hace en cada momento.",
    author: "Nerea",
    date: "Abril 2026",
    source: "Booksy",
    service: "Higiene facial profunda",
  },
  {
    text: "Primera vez que me hago las cejas con hilo y la experiencia ha sido muy buena. Volveré.",
    author: "Javier T.",
    date: "Hace un año",
    source: "Google",
    service: "Cejas con hilo",
  },
  {
    text: "Llevo meses viniendo y siempre salgo contenta. Profesional, amable y muy precisa.",
    author: "Cristina",
    date: "Septiembre 2026",
    source: "Booksy",
    service: "Cejas con hilo",
  },
];

/** Reseñas relacionadas con un tratamiento (para su página). */
export const reviewsByTreatment: Record<string, Review[]> = {
  "plasma-pen-fibroblast": [
    reviews[1],
    {
      text: "Rápido y sin molestias. Muy buenas indicaciones para los cuidados de después.",
      author: "Inés",
      date: "Junio 2026",
      source: "Booksy",
      service: "Fibroblast eliminación",
    },
  ],
  micropigmentacion: [
    reviews[4],
    { text: "Cejas perfectas, como siempre.", author: "Alba", date: "Junio 2026", source: "Booksy", service: "Microblading" },
  ],
  "cejas-y-pestanas": [reviews[2], reviews[3], reviews[7]],
  "tratamientos-faciales": [reviews[5]],
};
