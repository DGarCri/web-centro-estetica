import type { Metadata, Viewport } from "next";
import { Italiana, Jost } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import { allowIndexing } from "@/lib/indexing";
import DemoBanner from "@/components/DemoBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBookBar from "@/components/MobileBookBar";
import RevealObserver from "@/components/RevealObserver";

const italiana = Italiana({
  subsets: ["latin"],
  variable: "--font-italiana",
  weight: "400",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Aurea Estética · Estética avanzada en Madrid",
    template: "%s · Aurea Estética",
  },
  description:
    "Micropigmentación, HIFU, Plasma Pen, láser Nd:YAG y diodo, cejas, pestañas y faciales en Madrid. 5,0 en Booksy con 125 reseñas. Reserva online.",
  applicationName: site.fullName,
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: site.fullName,
    images: [{ url: "/images/og-aurea.jpg", width: 1200, height: 630, alt: "Aurea Estética" }],
  },
  // Demo: no indexar hasta que la propietaria lo autorice (ver README).
  robots: allowIndexing ? { index: true, follow: true } : { index: false, follow: false, nocache: true },
};

export const viewport: Viewport = {
  themeColor: "#f6f0e8",
};

// El JSON-LD (BeautySalon) lo pone cada página, con su URL y sus servicios.
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${italiana.variable} ${jost.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="min-h-dvh overflow-x-clip">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2 focus:text-cream"
        >
          Saltar al contenido
        </a>
        <DemoBanner />
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
        <MobileBookBar />
        <RevealObserver />
      </body>
    </html>
  );
}
