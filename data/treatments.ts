// Tratamientos principales: cada uno tiene su propia página en /tratamientos/[slug].
// Servicios, precios y duraciones de ejemplo. Lo que no tiene precio va como «Consultar».
// Para actualizar precios basta con editar este archivo.

export const CONSULTAR = "Consultar";

export type Service = {
  name: string;
  price: string;
  duration?: string;
  note?: string;
};

export type ServiceGroup = { title?: string; services: Service[] };

export type Faq = { q: string; a: string };

export type Photo = { src: string; alt: string; caption: string; width: number; height: number };

export type Treatment = {
  slug: string;
  /** Nombre corto (menús y tarjetas). */
  name: string;
  /** Nombre con guiones opcionales (&shy;) para tarjetas estrechas en móvil. */
  cardName?: string;
  /** Título SEO local: va en el <h1> y en el <title>. */
  seoTitle: string;
  metaDescription: string;
  kicker: string;
  /** Texto del mensaje de WhatsApp: «… información sobre {whatsapp}». */
  whatsapp: string;
  summary: string;
  from: string;
  /** Tratamiento con aparatología o efecto en la piel: muestra el aviso de valoración previa. */
  needsAssessment: boolean;
  what: string[];
  forWho: string[];
  sessions: string;
  groups: ServiceGroup[];
  faqs: Faq[];
  photos: Photo[];
  /** Si no hay foto propia publicada: texto del placeholder. */
  placeholder?: string;
  icon: "brow" | "wave" | "spark" | "beam" | "lash" | "drop";
};

const portrait = { width: 360, height: 640 };
const square = { width: 1080, height: 1080 };

export const treatments: Treatment[] = [
  {
    slug: "micropigmentacion",
    name: "Micropigmentación",
    cardName: "Micro­pigmen­tación",
    seoTitle: "Micropigmentación en Madrid",
    metaDescription:
      "Microblading y micropigmentación de cejas, labios y eyeliner en Madrid. También capilar, areolas y neutralización. Precios desde 95 €. Reserva en Booksy.",
    kicker: "Cejas · labios · eyeliner",
    whatsapp: "micropigmentación",
    summary: "Microblading, shading, labios y eyeliner. Diseño a medida y resultado natural.",
    from: "desde 95 €",
    needsAssessment: false,
    what: [
      "La micropigmentación deposita pigmento en la capa más superficial de la piel para dibujar o rellenar cejas, definir labios o marcar la línea de las pestañas. No es un tatuaje convencional: el pigmento y la profundidad son distintos y el resultado se va aclarando con el tiempo.",
      "Antes de empezar se diseña la forma sobre tu cara y se elige el tono contigo. En cejas trabajamos pelo a pelo (microblading) o con efecto sombreado (shading) según tu piel y lo que buscas.",
    ],
    forWho: [
      "Si tienes cejas escasas, con huecos o asimétricas.",
      "Si quieres labios con más color o un contorno más definido sin maquillaje.",
      "Si te maquillas el ojo a diario y quieres una línea fija y fina.",
      "Si quieres corregir o neutralizar una micropigmentación anterior.",
    ],
    sessions:
      "Algunos servicios incluyen 2 sesiones (shading de cejas, labios, eyeliner superior y eyeliner fino); el resto se reservan por sesión. En la valoración te decimos qué necesita tu caso.",
    groups: [
      {
        title: "Cejas",
        services: [
          { name: "Microblading media zona de cejas · 1 sesión", price: "95 €", duration: "30 min" },
          { name: "Microblading en cejas · 1 sesión", price: "130 €", duration: "1 h" },
          { name: "Micropigmentación / neutralización de cejas · 1 sesión", price: "175 €", duration: "1 h 30 min" },
          { name: "Shading de cejas · 2 sesiones", price: "320 €", duration: "1 h 30 min" },
        ],
      },
      {
        title: "Labios",
        services: [
          { name: "Delineado de labios", price: "100 €", duration: "1 h" },
          { name: "Contorno de labios · 1 sesión", price: "165 €", duration: "1 h" },
          { name: "Labios · 1 sesión", price: "205 €", duration: "1 h 30 min" },
          { name: "Labios · 2 sesiones", price: "310 €", duration: "1 h 30 min" },
        ],
      },
      {
        title: "Ojos",
        services: [
          { name: "Eyeliner · 1 sesión", price: "150 €", duration: "1 h 30 min" },
          { name: "Eyeliner fino sin final · 2 sesiones", price: "175 €", duration: "1 h 30 min" },
          { name: "Eyeliner superior · 2 sesiones", price: "215 €", duration: "1 h 30 min" },
        ],
      },
      {
        title: "Capilar, areolas y correcciones",
        services: [
          { name: "Micropigmentación capilar", price: "385 €", duration: "1 h 30 min" },
          { name: "Micropigmentación de areolas", price: "275 €", duration: "1 h 30 min" },
          { name: "Micropigmentación oncológica", price: "Gratis", duration: "1 h 30 min" },
          { name: "Neutralización y cover up", price: "385 €", duration: "1 h 30 min" },
        ],
      },
    ],
    faqs: [
      {
        q: "¿Microblading o shading?",
        a: "El microblading dibuja trazos finos como pelos; el shading da un efecto de sombra más empolvado. Depende de tu tipo de piel y del resultado que buscas: lo vemos juntas en la valoración.",
      },
      {
        q: "¿Cuánto dura el resultado?",
        a: "Depende de tu piel, del cuidado posterior y de la exposición al sol. El pigmento se va aclarando poco a poco; en la cita te explicamos qué esperar en tu caso y cuándo conviene revisarlo.",
      },
      {
        q: "Ya tengo una micropigmentación antigua, ¿se puede corregir?",
        a: "Hay un servicio de neutralización y cover up, y otro de eliminación de microblading con láser. Mándanos una foto por WhatsApp y te decimos qué opción encaja.",
      },
      {
        q: "¿Qué es la micropigmentación oncológica?",
        a: "Es la reconstrucción visual de areola, cejas u otras zonas tras un tratamiento oncológico. Es un servicio gratuito; escríbenos para coordinarlo.",
      },
    ],
    photos: [
      { src: "/images/cejas-antes-despues-microblading.webp", alt: "Cejas antes y después de la micropigmentación en Aurea", caption: "Cejas · antes y después", ...square },
      { src: "/images/labios-antes-despues-color.webp", alt: "Labios antes y después de la micropigmentación en Aurea", caption: "Labios · antes y después", ...square },
      { src: "/images/labios-antes-despues-contorno.webp", alt: "Contorno de labios antes y después en Aurea", caption: "Contorno de labios · antes y después", ...square },
    ],
    icon: "brow",
  },
  {
    slug: "hifu",
    name: "HIFU",
    seoTitle: "HIFU en Madrid",
    metaDescription:
      "HIFU facial y corporal en Madrid: ultrasonido focalizado no invasivo. Packs Glow, Contour, Lift, Platinum y Premium desde 110 €. Valoración previa personalizada.",
    kicker: "Ultrasonido focalizado · sin cirugía",
    whatsapp: "el HIFU",
    summary: "Ultrasonido focalizado no invasivo. Cinco packs según la zona, desde 110 €.",
    from: "desde 110 €",
    needsAssessment: true,
    what: [
      "El HIFU (High-Intensity Focused Ultrasound, ultrasonido focalizado de alta intensidad) es un tratamiento estético no invasivo que usa ultrasonidos para estimular el colágeno y tensar la piel.",
      "No hay cortes ni agujas. Se trabaja por zonas: cada pack incluye unas zonas concretas de cara, cuello o escote.",
    ],
    forWho: [
      "Si notas la piel de la cara o el cuello menos firme y buscas una opción no quirúrgica.",
      "Si quieres trabajar zonas concretas: ojeras y párpado inferior, óvalo y papada, o cuello y escote.",
      "No es para todo el mundo: antes de reservar una sesión hacemos una valoración personalizada.",
    ],
    sessions:
      "Cada pack es una sesión. Cuántas sesiones necesitas y cada cuánto depende de tu piel: te lo decimos en la valoración.",
    groups: [
      {
        services: [
          { name: "HIFU Glow", note: "Párpado inferior, ojeras y pómulo superior", price: "110 €", duration: "40 min" },
          { name: "HIFU Contour", note: "Contorno mandibular y papada", price: "140 €", duration: "1 h" },
          { name: "HIFU Lift", note: "Pómulo, mentón, contorno mandibular y papada", price: "210 €", duration: "1 h" },
          { name: "HIFU Platinum", note: "Papada, cuello y escote", price: "220 €", duration: "1 h 15 min" },
          {
            name: "HIFU Premium",
            note: "Frente, párpado inferior, ojeras, pómulo, contorno mandibular, mentón, papada, cuello y escote",
            price: "330 €",
            duration: "2 h",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "¿Qué pack es para mí?",
        a: "Depende de la zona que quieras trabajar. Si dudas, reserva la consulta de valoración o escríbenos por WhatsApp y te orientamos.",
      },
      {
        q: "¿Duele?",
        a: "La sensación cambia según la persona y la zona. En la valoración te explicamos qué vas a notar durante la sesión.",
      },
      {
        q: "¿Cuándo se ven los resultados?",
        a: "Cada piel responde a su ritmo y los resultados no son iguales en todas las personas. En la valoración te contamos qué es realista esperar en tu caso.",
      },
      {
        q: "¿Puede hacérselo cualquiera?",
        a: "No. Antes de la primera sesión revisamos contigo tu salud, tu medicación y tus tratamientos previos para decidir si el HIFU es adecuado para ti.",
      },
    ],
    photos: [
      { src: "/images/hifu-resultado-una-sesion.webp", alt: "Antes y después de una sesión de HIFU ", caption: "Resultado tras 1 sesión · los resultados varían", ...portrait },
      { src: "/images/hifu-cabezales.webp", alt: "Equipo de HIFU de Aurea Estética", caption: "El equipo de HIFU del centro", ...portrait },
    ],
    icon: "wave",
  },
  {
    slug: "plasma-pen-fibroblast",
    name: "Plasma Pen",
    seoTitle: "Plasma Pen (fibroblast) en Madrid",
    metaDescription:
      "Plasma Pen o fibroblast en Madrid: párpados, ojeras, rostro completo y eliminación de lunares, verrugas y manchas desde 70 €. Valoración previa personalizada.",
    kicker: "Fibroblast · láser de plasma",
    whatsapp: "el Plasma Pen (fibroblast)",
    summary: "Fibroblast para párpados, ojeras o rostro completo, y retirada de pequeñas lesiones.",
    from: "desde 70 €",
    needsAssessment: true,
    what: [
      "El fibroblast (también llamado Plasma Pen o lifting con plasma) es un tratamiento estético no quirúrgico que utiliza una descarga de plasma para estimular la producción natural de colágeno y elastina en la piel.",
      "Se usa para reafirmar zonas como párpados u ojeras, suavizar líneas de expresión y mejorar la textura y el tono. Con la misma técnica se retiran lunares, manchas y verrugas con cauterización inmediata.",
    ],
    forWho: [
      "Si buscas una alternativa no quirúrgica para párpados u ojeras.",
      "Si quieres trabajar la textura y la firmeza de todo el rostro.",
      "Si tienes un lunar, una verruga o una mancha que quieres retirar (siempre tras valorarlo).",
    ],
    sessions:
      "Cada reserva es una sesión. Cuántas sesiones necesitas y los cuidados posteriores te los explicamos en la valoración.",
    groups: [
      {
        services: [
          { name: "Fibroblast eliminación", note: "Lunar, verruga o mancha", price: "70 €", duration: "30 min" },
          { name: "Fibroblast párpados u ojeras · 1 sesión", price: "275 €", duration: "1 h 30 min" },
          { name: "Fibroblast full face", price: "660 €", duration: "2 h" },
        ],
      },
    ],
    faqs: [
      {
        q: "¿Es lo mismo Plasma Pen que fibroblast?",
        a: "Sí, son nombres distintos para la misma técnica de plasma.",
      },
      {
        q: "¿Cómo es la recuperación?",
        a: "Depende de la zona y de tu piel. Antes de la sesión te damos por escrito los cuidados y te explicamos cómo evoluciona la piel los días siguientes.",
      },
      {
        q: "¿Puedo retirar cualquier lunar?",
        a: "No. Cualquier lesión se valora antes. Si hay dudas sobre un lunar o una mancha, lo primero es que lo vea tu médico.",
      },
    ],
    photos: [],
    placeholder: "Foto pendiente · antes/después de Plasma Pen de Aurea",
    icon: "spark",
  },
  {
    slug: "laser",
    name: "Láser",
    seoTitle: "Láser Nd:YAG y diodo en Madrid",
    metaDescription:
      "Láser en Madrid: Hollywood carbon peel, eliminación de tatuajes y microblading, tratamientos vasculares, aclaramiento de axilas y depilación con diodo desde 5 €.",
    kicker: "Nd:YAG · diodo",
    whatsapp: "los tratamientos de láser",
    summary: "Carbon peel, eliminación de tatuajes y microblading, vascular y depilación con diodo.",
    from: "desde 5 €",
    needsAssessment: true,
    what: [
      "En el centro trabajamos con láser Nd:YAG y con láser de diodo. Cada tecnología tiene su uso: el diodo para la depilación y el resto de tratamientos según la zona y lo que haya que tratar.",
      "El Hollywood carbon peel es un tratamiento facial con láser y una mascarilla de carbón. También eliminamos tatuajes y micropigmentaciones antiguas, y tratamos pequeñas lesiones vasculares.",
    ],
    forWho: [
      "Si quieres dar luz y uniformidad a la piel de la cara (carbon peel).",
      "Si quieres aclarar o eliminar un tatuaje o un microblading que ya no te gusta.",
      "Si buscas depilación con diodo en zonas pequeñas: axilas, labio superior o cara completa.",
    ],
    sessions:
      "Los precios son por sesión. En eliminación de tatuajes y depilación suelen hacer falta varias; cuántas, depende de cada caso y te lo decimos en la valoración.",
    groups: [
      {
        title: "Láser",
        services: [
          { name: "Hollywood carbon peel", price: "65 €", duration: "45 min" },
          { name: "Eliminación de tatuaje", price: "75 €", duration: "1 h" },
          { name: "Eliminación de microblading", price: "75 €", duration: "45 min" },
          { name: "Tratamientos vasculares", price: "85 €", duration: "45 min" },
          { name: "Aclaramiento de axilas", price: "55 €", duration: "45 min" },
        ],
      },
      {
        title: "Depilación con diodo",
        services: [
          { name: "Labio superior", price: "5 €", duration: "30 min" },
          { name: "Axilas", price: "7 €", duration: "30 min" },
          { name: "Cara completa", price: "35 €", duration: "30 min" },
          { name: "Otras zonas", price: CONSULTAR },
        ],
      },
    ],
    faqs: [
      {
        q: "¿Qué es el Hollywood carbon peel?",
        a: "Un tratamiento facial en el que se aplica una mascarilla de carbón y después se pasa el láser. Es uno de los más pedidos del centro.",
      },
      {
        q: "¿Se puede quitar cualquier tatuaje?",
        a: "Depende del color, la profundidad y la antigüedad. Mándanos una foto por WhatsApp y te orientamos antes de la valoración.",
      },
      {
        q: "¿Hay que preparar la piel antes?",
        a: "Sí, en algunos casos (por ejemplo, con la exposición al sol). Te damos las indicaciones al reservar y en la valoración.",
      },
    ],
    photos: [
      { src: "/images/hollywood-carbon-peel.webp", alt: "Hollywood carbon peel en Aurea Estética", caption: "Hollywood carbon peel", ...portrait },
      { src: "/images/laser-eliminacion-microblading.webp", alt: "Eliminación de microblading con láser en Aurea", caption: "Eliminación de microblading", ...portrait },
    ],
    icon: "beam",
  },
  {
    slug: "cejas-y-pestanas",
    name: "Cejas y pestañas",
    seoTitle: "Cejas con hilo y pestañas en Madrid",
    metaDescription:
      "Depilación de cejas con hilo, tinte y extensiones de pestañas (clásicas, mixtas y volumen) en Madrid. Cejas desde 10 €, pestañas desde 45 €. Reserva en Booksy.",
    kicker: "Diseño de mirada",
    whatsapp: "cejas y pestañas",
    summary: "Cejas con hilo, tinte y extensiones de pestañas pelo a pelo. Lo más reservado.",
    from: "desde 5 €",
    needsAssessment: false,
    what: [
      "La depilación con hilo limpia la ceja pelo a pelo y respeta su forma natural. Es el servicio más reservado del centro y el que más se repite en las reseñas.",
      "Las extensiones de pestañas se colocan pelo a pelo, con fibras de seda: clásicas, mixtas o de volumen, con reposiciones a las 3 semanas.",
    ],
    forWho: [
      "Si quieres unas cejas limpias y con forma sin perder naturalidad.",
      "Si quieres levantarte con la mirada hecha y olvidarte de la máscara.",
      "Si buscas un mantenimiento rápido y frecuente: las citas de cejas son de 15 minutos.",
    ],
    sessions:
      "Cejas: cuando vuelva a crecer el pelo; muchas clientas repiten cada pocas semanas. Pestañas: reposición a las 3 semanas. Ven sin máscara de pestañas.",
    groups: [
      {
        title: "Cejas con hilo",
        services: [
          { name: "Depilación de cejas", price: "10 €", duration: "15 min" },
          { name: "Depilación de labio", price: "5 €", duration: "15 min" },
          { name: "Cejas y labio", price: "15 €", duration: "25 min" },
          { name: "Cara completa", price: "35 €", duration: "30 min" },
          { name: "Tinte de cejas", price: "10 €", duration: "15 min" },
        ],
      },
      {
        title: "Extensiones de pestañas",
        services: [
          { name: "Pestañas clásicas", price: "45 €", duration: "1 h" },
          { name: "Pestañas mixtas", price: "50 €", duration: "1 h" },
          { name: "Pestañas volumen", price: "60 €", duration: "1 h 15 min" },
          { name: "Reposición 3 semanas · clásicas", price: "40 €", duration: "40 min" },
          { name: "Reposición 3 semanas · mixtas", price: "40 €", duration: "1 h" },
          { name: "Reposición 3 semanas · volumen", price: "50 €", duration: "1 h" },
          { name: "Retirada de pestañas", price: "30 €", duration: "1 h" },
        ],
      },
    ],
    faqs: [
      {
        q: "¿Duele la depilación con hilo?",
        a: "Se nota un tirón leve. La cita es rápida: 15 minutos para las cejas.",
      },
      {
        q: "¿Clásicas, mixtas o volumen?",
        a: "Las clásicas son más naturales (una extensión por pestaña); las de volumen dan más densidad. Las mixtas están en medio. Te aconsejamos según tus pestañas naturales.",
      },
      {
        q: "¿Cómo tengo que venir?",
        a: "Sin máscara de pestañas ni maquillaje en los ojos. Así la cita es más rápida y las extensiones aguantan mejor.",
      },
    ],
    photos: [
      { src: "/images/cejas-antes-despues-mirada.webp", alt: "Cejas antes y después en Aurea Estética", caption: "Cejas · antes y después", ...portrait },
      { src: "/images/cejas-diseno-pinza.webp", alt: "Diseño de cejas en cabina en Aurea", caption: "Diseño de cejas en cabina", ...portrait },
    ],
    icon: "lash",
  },
  {
    slug: "tratamientos-faciales",
    name: "Faciales",
    seoTitle: "Tratamientos faciales en Madrid",
    metaDescription:
      "Higiene facial básica y profunda, Dermapen (microneedling) y peeling en Madrid. Faciales desde 50 €. Diagnóstico de piel y reserva en Booksy.",
    kicker: "Higiene · Dermapen · peeling",
    whatsapp: "los tratamientos faciales",
    summary: "Higiene facial básica o profunda y Dermapen. Piel limpia, luminosa y cuidada.",
    from: "desde 50 €",
    needsAssessment: false,
    what: [
      "La higiene facial limpia la piel en profundidad, adaptada a tu tipo de piel. La básica dura 1 h 10 min y la profunda, 1 h 30 min.",
      "El Dermapen (microneedling) hace microperforaciones controladas en la piel. Antes de hacerlo valoramos tu piel y te explicamos cada paso.",
    ],
    forWho: [
      "Si tienes la piel apagada, con poros obstruidos o puntos negros.",
      "Si quieres empezar a cuidarte con un mantenimiento periódico.",
      "Si buscas trabajar textura o marcas (Dermapen), siempre tras valorar tu piel.",
    ],
    sessions:
      "La higiene se suele repetir como mantenimiento; el Dermapen se plantea en varias sesiones. La frecuencia la decidimos contigo según tu piel.",
    groups: [
      {
        services: [
          { name: "Higiene facial básica", price: "50 €", duration: "1 h 10 min" },
          { name: "Higiene facial profunda", price: "70 €", duration: "1 h 30 min" },
          { name: "Dermapen (microneedling)", price: "85 €", duration: "1 h" },
          { name: "Peeling químico", price: CONSULTAR },
          { name: "Consulta · diagnóstico · revisión", price: "10 €", duration: "30 min" },
        ],
      },
    ],
    faqs: [
      {
        q: "¿Básica o profunda?",
        a: "Si es tu primera vez o tu piel tiene muchas impurezas, la profunda. Para mantenimiento, la básica suele ser suficiente.",
      },
      {
        q: "¿El Dermapen deja marcas?",
        a: "Cada piel reacciona de una forma. Antes de la sesión te explicamos qué esperar y te damos los cuidados para después.",
      },
      {
        q: "¿Y el Hollywood carbon peel?",
        a: "Es un facial con láser: lo tienes en la página de láser.",
      },
    ],
    photos: [
      { src: "/images/higiene-facial-cabina.webp", alt: "Higiene facial en la cabina de Aurea Estética", caption: "Higiene facial en cabina", ...portrait },
      { src: "/images/dermapen-profundidades.webp", alt: "Mapa de profundidades del Dermapen por zonas del rostro", caption: "Dermapen · profundidad por zonas", ...portrait },
    ],
    icon: "drop",
  },
];

export function getTreatment(slug: string) {
  return treatments.find((t) => t.slug === slug);
}

/** Antes y después para la portada (composiciones publicadas por Aurea: arriba, antes). */
export const beforeAfter: (Photo & { treatment: string })[] = [
  { src: "/images/cejas-antes-despues-microblading.webp", alt: "Cejas antes y después de la micropigmentación", caption: "Cejas", treatment: "micropigmentacion", ...square },
  { src: "/images/labios-antes-despues-color.webp", alt: "Labios antes y después de la micropigmentación", caption: "Labios", treatment: "micropigmentacion", ...square },
  { src: "/images/cejas-antes-despues-senior.webp", alt: "Cejas de una clienta madura antes y después", caption: "Cejas", treatment: "micropigmentacion", ...square },
  { src: "/images/labios-antes-despues-contorno.webp", alt: "Contorno de labios antes y después", caption: "Contorno de labios", treatment: "micropigmentacion", ...square },
];
