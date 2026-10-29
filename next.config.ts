import type { NextConfig } from "next";

const allowIndexing = process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    const security = [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    ];
    // Demo: noindex también para imágenes y recursos, no solo para el HTML.
    const robots = allowIndexing ? [] : [{ key: "X-Robots-Tag", value: "noindex, nofollow" }];
    return [{ source: "/:path*", headers: [...security, ...robots] }];
  },
};

export default nextConfig;
