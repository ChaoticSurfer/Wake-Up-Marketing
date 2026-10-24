import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Public pages only; the design lab (/versions, /v1 … /v4) is noindex.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/privacy`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
