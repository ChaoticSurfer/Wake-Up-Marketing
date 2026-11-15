import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocaleProvider } from "@/components/shared/LocaleProvider";
import { BlogIndexBody } from "@/components/v2/BlogBody";
import { blogIndexPath, laterPageParams, pageOf, pageParam, postsIn } from "@/lib/blog";
import { blogIndexJsonLd, blogIndexMetadata } from "@/lib/blog-routes";
import { jsonLdHtml } from "@/lib/service-routes";

type Props = { params: Promise<{ page: string }> };

// Rebuilt hourly: posts move down the pages as new ones go live, and a new last page renders on its first request.
// /page/1 and any page past the last are a 404.
export const revalidate = 3600;

export function generateStaticParams() {
  return laterPageParams(postsIn("ka"));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = pageParam((await params).page);
  return page && pageOf(postsIn("ka"), page) ? blogIndexMetadata("ka", page) : {};
}

export default async function KaBlogIndexPage({ params }: Props) {
  const page = pageParam((await params).page);
  const listing = page ? pageOf(postsIn("ka"), page) : undefined;
  if (!page || !listing) notFound();
  return (
    <LocaleProvider locale="ka" alternatePath={blogIndexPath("en")}>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdHtml(blogIndexJsonLd("ka"))} />
      <BlogIndexBody locale="ka" page={page} {...listing} />
    </LocaleProvider>
  );
}
