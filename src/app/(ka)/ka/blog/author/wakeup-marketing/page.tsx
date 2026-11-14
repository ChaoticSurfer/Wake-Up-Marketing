import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocaleProvider } from "@/components/shared/LocaleProvider";
import { BlogAuthorBody } from "@/components/v2/BlogBody";
import { blogAuthorPath, postsIn } from "@/lib/blog";
import { blogAuthorJsonLd, blogAuthorMetadata } from "@/lib/blog-routes";
import { jsonLdHtml } from "@/lib/service-routes";

// Rebuilt hourly so a scheduled post appears within an hour of its publish time.
export const revalidate = 3600;

export const metadata: Metadata = blogAuthorMetadata("ka");

export default function KaBlogAuthorPage() {
  const posts = postsIn("ka");
  if (posts.length === 0) notFound();
  return (
    <LocaleProvider locale="ka" alternatePath={blogAuthorPath("en")}>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdHtml(blogAuthorJsonLd("ka"))} />
      <BlogAuthorBody locale="ka" posts={posts} />
    </LocaleProvider>
  );
}
