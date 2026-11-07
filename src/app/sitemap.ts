import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// English and Georgian versions of the same page, each listing both as hreflang alternates.
const bilingual = (en: string, ka: string, priority: number): MetadataRoute.Sitemap => {
  const languages = { en: `${SITE_URL}${en}`, ka: `${SITE_URL}${ka}` };
  return [
    { url: languages.en, changeFrequency: "monthly", priority, alternates: { languages } },
    { url: languages.ka, changeFrequency: "monthly", priority, alternates: { languages } },
  ];
};

// Public pages only; the design lab (/versions, /v1 … /v4) is noindex.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...bilingual("", "/ka", 1),
    ...bilingual("/contact", "/ka/contact", 0.6),
    { url: `${SITE_URL}/privacy`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
