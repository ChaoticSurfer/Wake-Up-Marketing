import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocaleProvider } from "@/components/shared/LocaleProvider";
import { BlogIndexBody } from "@/components/v2/BlogBody";
import { blogIndexPath, postsIn } from "@/lib/blog";
import { blogIndexJsonLd, blogIndexMetadata } from "@/lib/blog-routes";
import { jsonLdHtml } from "@/lib/service-routes";

// Rebuilt hourly so a scheduled post appears within an hour of its publish time.
export const revalidate = 3600;

export const metadata: Metadata = blogIndexMetadata("en");

export default function BlogIndex() {
  const posts = postsIn("en");
  // An empty blog is a thin page: it stays a 404 until the first post ships.
  if (posts.length === 0) notFound();
  return (
    <LocaleProvider locale="en" alternatePath={blogIndexPath("ka")}>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdHtml(blogIndexJsonLd("en"))} />
      <BlogIndexBody locale="en" posts={posts} />
    </LocaleProvider>
  );
}
