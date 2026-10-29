import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { treatments } from "@/data/treatments";

// Preparado para cuando se active la indexación (robots.txt lo enlaza solo entonces).
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${site.url}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/tratamientos`, changeFrequency: "monthly", priority: 0.9 },
    ...treatments.map((t) => ({
      url: `${site.url}/tratamientos/${t.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${site.url}/aviso-legal`, changeFrequency: "yearly", priority: 0.1 },
    { url: `${site.url}/privacidad`, changeFrequency: "yearly", priority: 0.1 },
  ];
}
