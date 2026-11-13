import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocaleProvider } from "@/components/shared/LocaleProvider";
import { ServicePageBody } from "@/components/v2/ServicePageBody";
import { blogLinksForService } from "@/lib/blog";
import { serviceBySlug, serviceIds, servicePages, servicePath } from "@/lib/service-pages";
import { jsonLdHtml, serviceJsonLd, serviceMetadata } from "@/lib/service-routes";

type Props = { params: Promise<{ slug: string }> };

// Only the listed services exist; any other slug is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return serviceIds.map((id) => ({ slug: servicePages[id].ka.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = serviceBySlug("ka", (await params).slug);
  return id ? serviceMetadata(id, "ka") : {};
}

export default async function ServicePage({ params }: Props) {
  const id = serviceBySlug("ka", (await params).slug);
  if (!id) notFound();
  return (
    <LocaleProvider locale="ka" alternatePath={servicePath(id, "en")}>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdHtml(serviceJsonLd(id, "ka"))} />
      <ServicePageBody id={id} blogLinks={blogLinksForService(id, "ka")} />
    </LocaleProvider>
  );
}
