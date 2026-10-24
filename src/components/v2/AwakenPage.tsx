import ChatWidget from "@/components/shared/ChatWidget";
import { FaqSection, FitSection, PricingSection } from "@/components/shared/Sections";
import { AwContact, AwEngine, AwHero, AwNav, AwProof, AwResults, AwServices } from "@/components/v2/Awaken";

/** The full v2 Awaken page, served on the homepage and at /v2. */
export function AwakenPage() {
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
    </div>
  );
}
