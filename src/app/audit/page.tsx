import type { Metadata } from "next";
import { LocaleProvider } from "@/components/shared/LocaleProvider";
import { ServicePageBody } from "@/components/v2/ServicePageBody";
import { servicePath } from "@/lib/service-pages";
import { jsonLdHtml, serviceJsonLd, serviceMetadata } from "@/lib/service-routes";

export const metadata: Metadata = serviceMetadata("audit", "en");

export default function AuditPage() {
  return (
    <LocaleProvider locale="en" alternatePath={servicePath("audit", "ka")}>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdHtml(serviceJsonLd("audit", "en"))} />
      <ServicePageBody id="audit" />
    </LocaleProvider>
  );
}
