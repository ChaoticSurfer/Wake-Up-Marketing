import type { Metadata } from "next";
import { LocaleProvider } from "@/components/shared/LocaleProvider";
import { ServicesIndexBody } from "@/components/v2/ServicePageBody";
import { servicesIndexPath } from "@/lib/service-pages";
import { jsonLdHtml, servicesIndexJsonLd, servicesIndexMetadata } from "@/lib/service-routes";

export const metadata: Metadata = servicesIndexMetadata("ka");

export default function ServicesIndex() {
  return (
    <LocaleProvider locale="ka" alternatePath={servicesIndexPath("en")}>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdHtml(servicesIndexJsonLd("ka"))} />
      <ServicesIndexBody />
    </LocaleProvider>
  );
}
