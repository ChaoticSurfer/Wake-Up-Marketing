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
  return indexableTopics("en").map((id) => ({ topic: servicePages[id].en.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = topicBySlug("en", (await params).topic);
  return id && postsOnTopic("en", id).length > 0 ? blogTopicMetadata("en", id) : {};
}

export default async function BlogTopicPage({ params }: Props) {
  const id = topicBySlug("en", (await params).topic);
  const posts = id ? postsOnTopic("en", id) : [];
  if (!id || posts.length === 0) notFound();
  return (
    <LocaleProvider locale="en" alternatePath={blogIndexPath("ka")}>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdHtml(blogTopicJsonLd("en", id))} />
      <BlogTopicBody locale="en" id={id} page={1} {...pageOf(posts, 1)!} />
    </LocaleProvider>
  );
}
