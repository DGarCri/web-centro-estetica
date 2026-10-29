import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { allowIndexing } from "@/lib/indexing";

export default function robots(): MetadataRoute.Robots {
  if (!allowIndexing) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
