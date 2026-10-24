import type { Metadata } from "next";
import ChatWidget from "@/components/shared/ChatWidget";
import VersionSwitcher from "@/components/shared/VersionSwitcher";
import { PulsePage } from "@/components/v4/Pulse";
import { contact } from "@/lib/content";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = { alternates: { canonical: "/" } };

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/brand/logo-stacked-red.png`,
  email: contact.email,
  telephone: contact.phone,
  sameAs: contact.socials.map((s) => s.href).filter((href) => href.startsWith("http")),
};

// The homepage serves v4 Pulse. The Design Lab hub lives at /versions.
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c") }}
      />
      <PulsePage />
      <ChatWidget />
      <VersionSwitcher current="v4" />
    </>
  );
}
