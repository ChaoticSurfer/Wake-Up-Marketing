import type { Metadata } from "next";
import Link from "next/link";
import { contact } from "@/lib/content";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-wu-black px-4 text-center text-white">
      <div>
        <p className="hud-label text-wu-red">404</p>
        <h1 className="mt-4 font-display text-[clamp(40px,7vw,96px)] leading-[0.95]">This page is asleep.</h1>
        <p className="mt-5 text-lg text-white/60">It doesn&apos;t exist or has moved. Call us at {contact.phone} or head back home.</p>
        <Link href="/" className="mt-8 inline-flex h-14 items-center rounded-xl bg-wu-red px-8 font-semibold">
          Back to the homepage →
        </Link>
      </div>
    </main>
  );
}
