import type { Metadata } from "next";
import { LocaleProvider } from "@/components/shared/LocaleProvider";
import { ServicesIndexBody } from "@/components/v2/ServicePageBody";
import { servicesIndexPath } from "@/lib/service-pages";
import { jsonLdHtml, servicesIndexJsonLd, servicesIndexMetadata } from "@/lib/service-routes";

export const metadata: Metadata = servicesIndexMetadata("en");

export default function ServicesIndex() {
  return (
    <LocaleProvider locale="en" alternatePath={servicesIndexPath("ka")}>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdHtml(servicesIndexJsonLd("en"))} />
      <ServicesIndexBody />
    </LocaleProvider>
  );
}
