import type { Metadata } from "next";
import { designLabMetadata } from "@/lib/design-lab-metadata";
import VersionSwitcher from "@/components/shared/VersionSwitcher";
import { AwakenPage } from "@/components/v2/AwakenPage";

export const metadata: Metadata = designLabMetadata("v2 Awaken");

export default function Page() {
  return (
    <>
      <AwakenPage />
      <VersionSwitcher current="v2" />
    </>
  );
}
