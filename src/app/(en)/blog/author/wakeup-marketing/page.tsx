import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocaleProvider } from "@/components/shared/LocaleProvider";
import { BlogAuthorBody } from "@/components/v2/BlogBody";
import { blogAuthorPath, postsIn } from "@/lib/blog";
import { blogAuthorJsonLd, blogAuthorMetadata } from "@/lib/blog-routes";
import { jsonLdHtml } from "@/lib/service-routes";

export const metadata: Metadata = blogAuthorMetadata("en");

export default function BlogAuthorPage() {
  const posts = postsIn("en");
  if (posts.length === 0) notFound();
  return (
    <LocaleProvider locale="en" alternatePath={blogAuthorPath("ka")}>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdHtml(blogAuthorJsonLd("en"))} />
      <BlogAuthorBody locale="en" posts={posts} />
    </LocaleProvider>
  );
}
