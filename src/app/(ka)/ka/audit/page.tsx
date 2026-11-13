import type { Metadata } from "next";
import { LocaleProvider } from "@/components/shared/LocaleProvider";
import { ServicePageBody } from "@/components/v2/ServicePageBody";
import { servicePath } from "@/lib/service-pages";
import { jsonLdHtml, serviceJsonLd, serviceMetadata } from "@/lib/service-routes";

export const metadata: Metadata = serviceMetadata("audit", "ka");

export default function KaAuditPage() {
  return (
    <LocaleProvider locale="ka" alternatePath={servicePath("audit", "en")}>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdHtml(serviceJsonLd("audit", "ka"))} />
      <ServicePageBody id="audit" />
    </LocaleProvider>
  );
}
