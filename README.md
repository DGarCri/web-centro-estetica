# Web para centro de estética (plantilla)

Web completa para un centro de estética: inicio, catálogo de tratamientos con precios y una página por tratamiento
pensada para SEO local. Reservas por Booksy (o cualquier otra plataforma) y por WhatsApp con el mensaje ya escrito.

> **Aurea Estética es un negocio ficticio.** Los datos, las reseñas y las imágenes son de ejemplo. Parto de esta base
> para las webs que hago para centros de estética de Madrid.

## Páginas

- **Inicio** (`/`): prueba social (valoraciones e Instagram), tratamientos destacados, antes/después, reseñas, el centro,
  ubicación con mapa y horario.
- **Tratamientos** (`/tratamientos`): todos los servicios con precio y duración.
- **Una página por tratamiento** (`/tratamientos/[slug]`, generada de forma estática): título SEO local, en qué consiste,
  para quién es, sesiones, precios, fotos, reseñas y preguntas frecuentes.
- **Aviso legal** y **Privacidad** (plantillas por completar).

En móvil hay una barra fija con «Reservar» y «WhatsApp»; en la página de un tratamiento, el WhatsApp ya lleva su nombre.

## Tecnología

Next.js 15 (App Router, generación estática) · React 19 · TypeScript · Tailwind CSS 4 · `next/image` · `next/font` ·
`lucide-react`. Sin backend, formularios, cookies propias ni analítica.

## SEO

- `<title>`, `description` y `canonical` propios en cada página.
- JSON-LD `BeautySalon` en cada página (dirección, coordenadas, horario, teléfono, servicios con precio) y, en las páginas
  de tratamiento, `BreadcrumbList` y `FAQPage`.
- `sitemap.xml` con todas las páginas.
- Modo demo: mientras `NEXT_PUBLIC_ALLOW_INDEXING` no sea `true`, la web envía `noindex` (meta y cabecera) y un
  `robots.txt` con `Disallow: /`.

## Adaptarla a un centro

Todo el contenido está en `data/`:

- `data/site.ts`: nombre, dirección, teléfono, horario, enlaces y valoraciones.
- `data/treatments.ts`: tratamientos, servicios, precios, preguntas frecuentes y fotos.
- `data/reviews.ts`: reseñas.

Las imágenes van en `public/images/`.

## Ejecutar en local

```bash
npm install
npm run dev
```

Comprobaciones: `npm run lint`, `npx tsc --noEmit` y `npm run build`.
