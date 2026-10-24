import type { Metadata } from "next";
import { designLabMetadata } from "@/lib/design-lab-metadata";
import ChatWidget from "@/components/shared/ChatWidget";
import VersionSwitcher from "@/components/shared/VersionSwitcher";
import Bento from "@/components/v1/Bento";
import { FaqSection, FitSection, PricingSection } from "@/components/shared/Sections";
import Contact from "@/components/v1/Contact";
import Footer from "@/components/v1/Footer";
import Hero from "@/components/v1/Hero";
import Intro from "@/components/v1/Intro";
import Nav from "@/components/v1/Nav";
import { Manifesto, Process, Stats, Ticker, Voices, Work } from "@/components/v1/Sections";

export const metadata: Metadata = designLabMetadata("v1 Signal");

export default function SignalPage() {
  return (
    <div className="relative bg-wu-black text-white">
      <Intro />
      <div className="grain" aria-hidden />
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Manifesto />
        <FitSection look="hud" />
        <Bento />
        <Stats />
        <Process />
        <Work />
        <Voices />
        <PricingSection look="hud" />
        <FaqSection look="hud" />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
      <VersionSwitcher current="v1" />
    </div>
  );
}
