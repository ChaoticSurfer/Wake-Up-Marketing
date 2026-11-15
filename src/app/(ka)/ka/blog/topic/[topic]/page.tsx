import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocaleProvider } from "@/components/shared/LocaleProvider";
import { BlogTopicBody } from "@/components/v2/BlogBody";
import { blogIndexPath, indexableTopics, pageOf, postsOnTopic, topicBySlug } from "@/lib/blog";
import { blogTopicJsonLd, blogTopicMetadata } from "@/lib/blog-routes";
import { servicePages } from "@/lib/service-pages";
import { jsonLdHtml } from "@/lib/service-routes";

type Props = { params: Promise<{ topic: string }> };

// Rebuilt hourly so a scheduled post joins its hub within an hour. A hub with no live posts is a 404; one with
// fewer than 3 renders as noindex, follow.
export const revalidate = 3600;

export function generateStaticParams() {
  return indexableTopics("ka").map((id) => ({ topic: servicePages[id].ka.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = topicBySlug("ka", (await params).topic);
  return id && postsOnTopic("ka", id).length > 0 ? blogTopicMetadata("ka", id) : {};
}

export default async function KaBlogTopicPage({ params }: Props) {
  const id = topicBySlug("ka", (await params).topic);
  const posts = id ? postsOnTopic("ka", id) : [];
  if (!id || posts.length === 0) notFound();
  return (
    <LocaleProvider locale="ka" alternatePath={blogIndexPath("en")}>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdHtml(blogTopicJsonLd("ka", id))} />
      <BlogTopicBody locale="ka" id={id} page={1} {...pageOf(posts, 1)!} />
    </LocaleProvider>
  );
}
