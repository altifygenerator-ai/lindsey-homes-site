import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: site.siteUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${site.siteUrl}/custom-homes`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.siteUrl}/floor-plans`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.siteUrl}/inspiration`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.siteUrl}/about`, lastModified, changeFrequency: "yearly", priority: 0.7 },
    { url: `${site.siteUrl}/contact`, lastModified, changeFrequency: "yearly", priority: 0.7 },
  ];
}
