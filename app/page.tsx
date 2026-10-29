import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Featured from "@/components/home/Featured";
import BeforeAfter from "@/components/home/BeforeAfter";
import Centre from "@/components/home/Centre";
import Reviews from "@/components/Reviews";
import Location from "@/components/home/Location";
import FinalCta from "@/components/FinalCta";
import LocalBusinessJsonLd from "@/components/LocalBusinessJsonLd";
import { reviews } from "@/data/reviews";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    title: "Aurea Estética · Estética avanzada en Madrid",
    description:
      "Micropigmentación, HIFU, Plasma Pen, láser, cejas, pestañas y faciales. 5,0 en Booksy con 125 reseñas. Reserva online.",
    url: "/",
  },
};

export default function Home() {
  return (
    <>
      <LocalBusinessJsonLd path="/" />
      <Hero />
      <Featured />
      <BeforeAfter />
      <Reviews reviews={reviews.slice(0, 6)} />
      <Centre />
      <Location />
      <FinalCta />
    </>
  );
}
