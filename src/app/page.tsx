import type { Metadata } from "next";
import { LocaleProvider } from "@/components/shared/LocaleProvider";
import { AwakenPage } from "@/components/v2/AwakenPage";
import { bilingualAlternates } from "@/lib/alternates";
import { enCopy } from "@/lib/copy";
import { contact } from "@/lib/content";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: enCopy.homeMeta.title },
  description: enCopy.homeMeta.description,
  alternates: bilingualAlternates("/", "/", "/ka"),
  openGraph: { type: "website", siteName: SITE_NAME, locale: "en_US", images: ["/opengraph-image"], url: "/", title: enCopy.homeMeta.title, description: enCopy.homeMeta.description },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/brand/logo-stacked-red.png`,
  email: contact.email,
  telephone: contact.phone,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: contact.email,
    telephone: contact.phone,
    areaServed: "GE",
    availableLanguage: ["Georgian", "English"],
  },
  address: { "@type": "PostalAddress", addressLocality: "Tbilisi", addressCountry: "GE" },
  areaServed: { "@type": "Country", name: "Georgia" },
  sameAs: contact.socials.map((s) => s.href).filter((href) => href.startsWith("http")),
};

// The homepage serves v2 Awaken without the design lab switcher. The Design Lab hub lives at /versions.
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c") }}
      />
      <LocaleProvider locale="en" alternatePath="/ka">
        <AwakenPage />
      </LocaleProvider>
    </>
  );
}
