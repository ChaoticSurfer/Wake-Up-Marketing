import type { Metadata } from "next";
import ChatWidget from "@/components/shared/ChatWidget";
import VersionSwitcher from "@/components/shared/VersionSwitcher";
import { FaqSection, FitSection, PricingSection } from "@/components/shared/Sections";
import { SpBackground, SpContact, SpHero, SpNav, SpProcess, SpServices, SpStats, SpWork } from "@/components/v3/Spatial";

export const metadata: Metadata = { title: "WakeUP Marketing — v3 Spatial" };

export default function SpatialPage() {
  return (
    <div className="relative isolate min-h-screen text-white">
      <SpBackground />
      <SpNav />
      <main>
        <SpHero />
        <FitSection look="glass" />
        <SpServices />
        <SpStats />
        <SpProcess />
        <SpWork />
        <PricingSection look="glass" />
        <FaqSection look="glass" />
        <SpContact />
      </main>
      <ChatWidget />
      <VersionSwitcher current="v3" />
    </div>
  );
}
