import type { MetadataRoute } from "next";

const BASE_URL = "https://zomergroup.com";
const LOCALES = ["zh"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/projects", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/news", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/talent-housing", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/industry-park", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/asset-revitalization", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/future-layout", priority: 0.6, changeFrequency: "monthly" as const },
  ];

  const buildDate = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of LOCALES) {
    for (const route of routes) {
      entries.push({
        url: `${BASE_URL}/${locale}${route.path}`,
        lastModified: buildDate,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
      });
    }
  }

  return entries;
}
