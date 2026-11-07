import type { Metadata } from "next";
import { LocaleProvider } from "@/components/shared/LocaleProvider";
import { ContactPageBody } from "@/components/v2/ContactPageBody";
import { bilingualAlternates } from "@/lib/alternates";
import { enCopy } from "@/lib/copy";

export const metadata: Metadata = {
  title: enCopy.contactPage.metaTitle,
  description: enCopy.contactPage.metaDescription,
  alternates: bilingualAlternates("/contact", "/contact", "/ka/contact"),
};

export default function ContactPage() {
  return (
    <LocaleProvider locale="en" alternatePath="/ka/contact">
      <ContactPageBody />
    </LocaleProvider>
  );
}
