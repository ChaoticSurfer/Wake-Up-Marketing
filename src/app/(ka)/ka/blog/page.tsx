import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocaleProvider } from "@/components/shared/LocaleProvider";
import { BlogIndexBody } from "@/components/v2/BlogBody";
import { blogIndexPath, postsIn } from "@/lib/blog";
import { blogIndexJsonLd, blogIndexMetadata } from "@/lib/blog-routes";
import { jsonLdHtml } from "@/lib/service-routes";

export const metadata: Metadata = blogIndexMetadata("ka");

export default function KaBlogIndex() {
  const posts = postsIn("ka");
  // An empty blog is a thin page: it stays a 404 until the first post ships.
  if (posts.length === 0) notFound();
  return (
    <LocaleProvider locale="ka" alternatePath={blogIndexPath("en")}>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdHtml(blogIndexJsonLd("ka"))} />
      <BlogIndexBody locale="ka" posts={posts} />
    </LocaleProvider>
  );
}
