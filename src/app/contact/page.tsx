import type { Metadata } from "next";
import ChatWidget from "@/components/shared/ChatWidget";
import { AwContact, AwNav } from "@/components/v2/Awaken";
import { contact, contactLinks } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact a marketing agency in Tbilisi",
  description: `Call ${contact.phone} or email ${contact.email}, or send a short brief for a free growth audit. WakeUP Marketing works with mid-sized businesses across Georgia.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="relative bg-wu-black text-white">
      <AwNav />
      <main className="pt-16">
        <section className="mx-auto max-w-[1120px] px-4 pt-20 md:px-8">
          <p className="hud-label text-wu-red">Contact</p>
          <h1 className="mt-4 font-display text-[clamp(40px,6vw,84px)] leading-[0.95]">Talk to WakeUP Marketing</h1>
          <p className="mt-6 max-w-[620px] text-lg text-white/65">
            We work with mid-sized businesses across Georgia. Call or email us, or send the short form below and we reply within one business day.
          </p>
          <div className="mt-8 flex flex-col gap-2 font-mono text-white/80 sm:flex-row sm:gap-8">
            <a href={contactLinks.phone} className="inline-flex min-h-11 w-fit items-center hover:text-white">
              {contact.phone}
            </a>
            <a href={contactLinks.email} className="inline-flex min-h-11 w-fit items-center hover:text-white">
              {contact.email}
            </a>
          </div>
        </section>
        <AwContact />
      </main>
      <ChatWidget />
    </div>
  );
}
