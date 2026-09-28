import type { Metadata } from "next";
import ChatWidget from "@/components/shared/ChatWidget";
import VersionSwitcher from "@/components/shared/VersionSwitcher";
import {
  EdContact,
  EdFooter,
  EdHero,
  EdManifesto,
  EdNav,
  EdProcess,
  EdServices,
  EdStats,
  EdVoices,
  EdWork,
} from "@/components/v2/Editorial";

export const metadata: Metadata = { title: "WakeUP Marketing — v2 Editorial" };

export default function EditorialPage() {
  return (
    <div className="theme-light min-h-screen bg-white text-wu-black">
      <EdNav />
      <main>
        <EdHero />
        <EdManifesto />
        <EdServices />
        <EdStats />
        <EdProcess />
        <EdWork />
        <EdVoices />
        <EdContact />
      </main>
      <EdFooter />
      <ChatWidget skin="light" />
      <VersionSwitcher current="v2" light />
    </div>
  );
}
