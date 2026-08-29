import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/custom-homes", "/inspiration", "/floor-plans", "/about", "/contact", "/privacy"];
  return pages.map((path) => ({
    url: `${site.siteUrl}${path}`,
    lastModified: new Date(),
  }));
}
