import type { Metadata } from "next";
import Link from "next/link";
import { contact } from "@/lib/content";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy notice",
  description: `How ${SITE_NAME} handles the details you send through this website.`,
  alternates: { canonical: "/privacy" },
};

const sections: { heading: string; body: string[] }[] = [
  {
    heading: "What we collect",
    body: [
      "When you send the contact form or leave your details in the chat, we receive what you enter: your name, email, and any company, service, budget or message details you add, plus the page you sent it from.",
      "We also count visits with Vercel Web Analytics, which does not use cookies and does not identify you personally.",
    ],
  },
  {
    heading: "Why we use it",
    body: ["Only to reply to your request and, if you become a client, to work with you. We do not sell your details or add you to mailing lists."],
  },
  {
    heading: "Who processes it for us",
    body: [
      "Vercel hosts this website. Resend delivers form submissions to our inbox by email. Our email is hosted by Google.",
    ],
  },
  {
    heading: "How long we keep it",
    body: ["As long as we need it to handle your request or our work together. Ask us and we will delete it sooner."],
  },
  {
    heading: "Your choices",
    body: [`You can ask to see, correct or delete your details at any time by emailing ${contact.email} or calling ${contact.phone}.`],
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-wu-black px-4 pb-24 pt-16 text-white md:px-8">
      <article className="mx-auto max-w-[720px]">
        <Link href="/" className="hud-label text-wu-red">
          ← {SITE_NAME}
        </Link>
        <h1 className="mt-6 font-display text-[clamp(40px,6vw,72px)] leading-[0.95]">Privacy notice</h1>
        {sections.map((s) => (
          <section key={s.heading} className="mt-10">
            <h2 className="font-display text-2xl">{s.heading}</h2>
            {s.body.map((p) => (
              <p key={p} className="mt-3 text-lg text-white/65">
                {p}
              </p>
            ))}
          </section>
        ))}
      </article>
    </main>
  );
}
