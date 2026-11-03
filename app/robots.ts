import type { MetadataRoute } from "next";
import { createRobots } from "@/src/shared/config/seo";

export default function robots(): MetadataRoute.Robots {
  return createRobots();
}
