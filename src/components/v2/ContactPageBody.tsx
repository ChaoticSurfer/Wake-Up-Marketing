"use client";

import { useCopy } from "@/components/shared/LocaleProvider";
import { AwContact, AwNav } from "@/components/v2/Awaken";
import { contact, contactLinks } from "@/lib/content";
import { LocalizedChat } from "@/components/shared/LocalizedChat";

/** The /contact page in the current language. */
export function ContactPageBody() {
  const c = useCopy();
  return (
    <div className="relative bg-wu-black text-white">
      <AwNav />
      <main className="pt-16">
        <section className="mx-auto max-w-[1120px] px-4 pt-20 md:px-8">
          <p className="hud-label text-wu-red">{c.contactPage.label}</p>
          <h1 className="mt-4 font-display text-[clamp(40px,6vw,84px)] leading-[0.95]">{c.contactPage.title}</h1>
          <p className="mt-6 max-w-[620px] text-lg text-white/65">{c.contactPage.intro}</p>
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
      <LocalizedChat />
    </div>
  );
}
