import type { Metadata } from "next";
import { LocaleProvider } from "@/components/shared/LocaleProvider";
import { AwakenPage } from "@/components/v2/AwakenPage";
import { bilingualAlternates } from "@/lib/alternates";
import { enCopy } from "@/lib/copy";
import { organizationJsonLd } from "@/lib/organization";
import { jsonLdHtml } from "@/lib/service-routes";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: enCopy.homeMeta.title },
  description: enCopy.homeMeta.description,
  alternates: bilingualAlternates("/", "/", "/ka"),
  openGraph: { type: "website", siteName: SITE_NAME, locale: "en_US", images: ["/opengraph-image"], url: "/", title: enCopy.homeMeta.title, description: enCopy.homeMeta.description },
};

// The homepage serves v2 Awaken without the design lab switcher. The Design Lab hub lives at /versions.
export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdHtml(organizationJsonLd)} />
      <LocaleProvider locale="en" alternatePath="/ka">
        <AwakenPage />
      </LocaleProvider>
    </>
  );
}
