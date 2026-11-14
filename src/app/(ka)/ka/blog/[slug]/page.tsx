import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocaleProvider } from "@/components/shared/LocaleProvider";
import { BlogPostBody } from "@/components/v2/BlogBody";
import { blogIndexPath, postBySlug, postsIn } from "@/lib/blog";
import { postJsonLd, postMetadata } from "@/lib/blog-routes";
import { jsonLdHtml } from "@/lib/service-routes";

type Props = { params: Promise<{ slug: string }> };

// Live posts are built ahead; a scheduled post renders on its first request after its publish time, and any
// other slug is a 404. Pages are rebuilt hourly so related-post lists pick up new posts.
export const revalidate = 3600;

export function generateStaticParams() {
  return postsIn("ka").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = postBySlug("ka", (await params).slug);
  return post ? postMetadata(post) : {};
}

export default async function KaBlogPostPage({ params }: Props) {
  const post = postBySlug("ka", (await params).slug);
  if (!post) notFound();
  // Posts exist in one language, so the language switch goes to the other blog's index.
  return (
    <LocaleProvider locale="ka" alternatePath={blogIndexPath("en")}>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdHtml(postJsonLd(post))} />
      <BlogPostBody post={post} />
    </LocaleProvider>
  );
}
