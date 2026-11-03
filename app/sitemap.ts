import type { MetadataRoute } from "next";
import { createSitemap } from "@/src/shared/config/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return createSitemap();
}
