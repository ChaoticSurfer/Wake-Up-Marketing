import type { Metadata } from "next";
import ChatWidget from "@/components/shared/ChatWidget";
import VersionSwitcher from "@/components/shared/VersionSwitcher";
import { AwContact, AwEngine, AwHero, AwNav, AwProof, AwResults, AwServices } from "@/components/v2/Awaken";
import { FaqSection, FitSection, PricingSection } from "@/components/shared/Sections";

export const metadata: Metadata = { title: "WakeUP Marketing — v2 Awaken" };

export default function AwakenPage() {
  return (
    <div className="relative bg-wu-black text-white">
      <div className="grain" aria-hidden />
      <AwNav />
      <main>
        <AwHero />
        <FitSection />
        <AwEngine />
        <AwServices />
        <AwResults />
        <AwProof />
        <PricingSection />
        <FaqSection />
        <AwContact />
      </main>
      <ChatWidget />
      <VersionSwitcher current="v2" />
    </div>
  );
}
