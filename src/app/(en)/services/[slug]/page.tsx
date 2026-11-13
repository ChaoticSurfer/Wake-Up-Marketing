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
  return serviceIds.map((id) => ({ slug: servicePages[id].en.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = serviceBySlug("en", (await params).slug);
  return id ? serviceMetadata(id, "en") : {};
}

export default async function ServicePage({ params }: Props) {
  const id = serviceBySlug("en", (await params).slug);
  if (!id) notFound();
  return (
    <LocaleProvider locale="en" alternatePath={servicePath(id, "ka")}>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdHtml(serviceJsonLd(id, "en"))} />
      <ServicePageBody id={id} blogLinks={blogLinksForService(id, "en")} />
    </LocaleProvider>
  );
}
