import type { Metadata } from "next";
import ChatWidget from "@/components/shared/ChatWidget";
import VersionSwitcher from "@/components/shared/VersionSwitcher";
import { AwContact, AwEngine, AwHero, AwNav, AwProof, AwResults, AwServices, AwTiers } from "@/components/v2/Awaken";

export const metadata: Metadata = { title: "WakeUP Marketing — v2 Awaken" };

export default function AwakenPage() {
  return (
    <div className="relative bg-wu-black text-white">
      <div className="grain" aria-hidden />
      <AwNav />
      <main>
        <AwHero />
        <AwEngine />
        <AwServices />
        <AwResults />
        <AwProof />
        <AwTiers />
        <AwContact />
      </main>
      <ChatWidget />
      <VersionSwitcher current="v2" />
    </div>
  );
}
