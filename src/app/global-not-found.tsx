import type { Metadata } from "next";
import Link from "next/link";
import { contact } from "@/lib/content";
import { SITE_NAME } from "@/lib/site";
import { RootDocument, rootMetadata, rootViewport } from "./root-document";

export const metadata: Metadata = { ...rootMetadata, title: `Page not found | ${SITE_NAME}` };
export const viewport = rootViewport;

// Served for any URL that matches no page, in English or Georgian, outside both root layouts.
export default function GlobalNotFound() {
  return (
    <RootDocument lang="en">
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
    </RootDocument>
  );
}
