import type { Metadata } from "next";
import { LocaleProvider } from "@/components/shared/LocaleProvider";
import { AwakenPage } from "@/components/v2/AwakenPage";
import { bilingualAlternates } from "@/lib/alternates";
import { kaCopy } from "@/lib/copy-ka";
import { organizationJsonLd } from "@/lib/organization";
import { jsonLdHtml } from "@/lib/service-routes";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: kaCopy.homeMeta.title },
  description: kaCopy.homeMeta.description,
  alternates: bilingualAlternates("/ka", "/", "/ka"),
  openGraph: { type: "website", siteName: SITE_NAME, locale: "ka_GE", images: ["/opengraph-image"], url: "/ka", title: kaCopy.homeMeta.title, description: kaCopy.homeMeta.description },
};

export default function KaHome() {
  return (
    <LocaleProvider locale="ka" alternatePath="/">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdHtml(organizationJsonLd)} />
      <AwakenPage />
    </LocaleProvider>
  );
}
