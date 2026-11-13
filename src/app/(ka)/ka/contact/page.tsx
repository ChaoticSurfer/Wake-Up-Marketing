import type { Metadata } from "next";
import { LocaleProvider } from "@/components/shared/LocaleProvider";
import { ContactPageBody } from "@/components/v2/ContactPageBody";
import { bilingualAlternates } from "@/lib/alternates";
import { kaCopy } from "@/lib/copy-ka";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: kaCopy.contactPage.metaTitle,
  description: kaCopy.contactPage.metaDescription,
  alternates: bilingualAlternates("/ka/contact", "/contact", "/ka/contact"),
  openGraph: { type: "website", siteName: SITE_NAME, locale: "ka_GE", images: ["/opengraph-image"], url: "/ka/contact" },
};

export default function KaContactPage() {
  return (
    <LocaleProvider locale="ka" alternatePath="/contact">
      <ContactPageBody />
    </LocaleProvider>
  );
}
