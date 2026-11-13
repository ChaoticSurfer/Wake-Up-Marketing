import type { MetadataRoute } from "next";
import { blogPosts } from "@/content/blog";
import { blogAuthorPath, blogIndexPath, postPath, postsIn } from "@/lib/blog";
import { serviceIds, servicePath, servicesIndexPath } from "@/lib/service-pages";
import { SITE_URL } from "@/lib/site";

// English and Georgian versions of the same page, each listing both as hreflang alternates.
const bilingual = (en: string, ka: string, priority: number): MetadataRoute.Sitemap => {
  const languages = { en: `${SITE_URL}${en}`, ka: `${SITE_URL}${ka}` };
  return [
    { url: languages.en, changeFrequency: "monthly", priority, alternates: { languages } },
    { url: languages.ka, changeFrequency: "monthly", priority, alternates: { languages } },
  ];
};

// The blog index and author pages are listed only while both languages have posts (an empty one is a 404).
// A post exists in one language, so it has no alternates; its lastmod is its own last change.
const blogPages = (): MetadataRoute.Sitemap =>
  postsIn("en").length > 0 && postsIn("ka").length > 0
    ? [
        ...bilingual(blogIndexPath("en"), blogIndexPath("ka"), 0.6),
        ...bilingual(blogAuthorPath("en"), blogAuthorPath("ka"), 0.3),
        ...blogPosts.map((p) => ({ url: `${SITE_URL}${postPath(p)}`, lastModified: new Date(p.updatedAt), changeFrequency: "monthly" as const, priority: 0.6 })),
      ]
    : [];

// Public pages only; the design lab (/versions, /v1 … /v4) is noindex.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...bilingual("", "/ka", 1),
    ...bilingual(servicePath("audit", "en"), servicePath("audit", "ka"), 0.8),
    ...bilingual(servicesIndexPath("en"), servicesIndexPath("ka"), 0.8),
    ...serviceIds.flatMap((id) => bilingual(servicePath(id, "en"), servicePath(id, "ka"), 0.8)),
    ...bilingual("/contact", "/ka/contact", 0.6),
    ...blogPages(),
    { url: `${SITE_URL}/privacy`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
