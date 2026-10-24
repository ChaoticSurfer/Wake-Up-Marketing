import type { Metadata } from "next";
import { designLabMetadata } from "@/lib/design-lab-metadata";
import ChatWidget from "@/components/shared/ChatWidget";
import VersionSwitcher from "@/components/shared/VersionSwitcher";
import { PulsePage } from "@/components/v4/Pulse";

export const metadata: Metadata = designLabMetadata("v4 Pulse");

export default function Page() {
  return (
    <>
      <PulsePage />
      <ChatWidget />
      <VersionSwitcher current="v4" />
    </>
  );
}
