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
  return indexableTopics("en").flatMap((id) =>
    laterPageParams(postsOnTopic("en", id)).map(({ page }) => ({ topic: servicePages[id].en.slug, page })),
  );
}

/** The hub and the posts on its numbered page, or undefined for an unknown topic or page. */
const hubPage = async (params: Props["params"]) => {
  const { topic, page: segment } = await params;
  const id = topicBySlug("en", topic);
  const page = pageParam(segment);
  const listing = id && page ? pageOf(postsOnTopic("en", id), page) : undefined;
  return id && page && listing ? { id, page, listing } : undefined;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const hub = await hubPage(params);
  return hub ? blogTopicMetadata("en", hub.id, hub.page) : {};
}

export default async function BlogTopicNumberedPage({ params }: Props) {
  const hub = await hubPage(params);
  if (!hub) notFound();
  return (
    <LocaleProvider locale="en" alternatePath={blogIndexPath("ka")}>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdHtml(blogTopicJsonLd("en", hub.id))} />
      <BlogTopicBody locale="en" id={hub.id} page={hub.page} {...hub.listing} />
    </LocaleProvider>
  );
}
