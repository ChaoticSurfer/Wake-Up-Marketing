import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocaleProvider } from "@/components/shared/LocaleProvider";
import { BlogTopicBody } from "@/components/v2/BlogBody";
import { blogIndexPath, indexableTopics, laterPageParams, pageOf, pageParam, postsOnTopic, topicBySlug } from "@/lib/blog";
import { blogTopicJsonLd, blogTopicMetadata } from "@/lib/blog-routes";
import { servicePages } from "@/lib/service-pages";
import { jsonLdHtml } from "@/lib/service-routes";

type Props = { params: Promise<{ topic: string; page: string }> };

// Rebuilt hourly, like page 1. /page/1 and any page past the last are a 404.
export const revalidate = 3600;

export function generateStaticParams() {
  return indexableTopics("ka").flatMap((id) =>
    laterPageParams(postsOnTopic("ka", id)).map(({ page }) => ({ topic: servicePages[id].ka.slug, page })),
  );
}

/** The hub and the posts on its numbered page, or undefined for an unknown topic or page. */
const hubPage = async (params: Props["params"]) => {
  const { topic, page: segment } = await params;
  const id = topicBySlug("ka", topic);
  const page = pageParam(segment);
  const listing = id && page ? pageOf(postsOnTopic("ka", id), page) : undefined;
  return id && page && listing ? { id, page, listing } : undefined;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const hub = await hubPage(params);
  return hub ? blogTopicMetadata("ka", hub.id, hub.page) : {};
}

export default async function KaBlogTopicNumberedPage({ params }: Props) {
  const hub = await hubPage(params);
  if (!hub) notFound();
  return (
    <LocaleProvider locale="ka" alternatePath={blogIndexPath("en")}>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdHtml(blogTopicJsonLd("ka", hub.id))} />
      <BlogTopicBody locale="ka" id={hub.id} page={hub.page} {...hub.listing} />
    </LocaleProvider>
  );
}
