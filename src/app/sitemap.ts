import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://leozhang2056.github.io";

  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/projects`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/research`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/chat`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}
