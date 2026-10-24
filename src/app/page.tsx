import ChatWidget from "@/components/shared/ChatWidget";
import VersionSwitcher from "@/components/shared/VersionSwitcher";
import { PulsePage } from "@/components/v4/Pulse";

// The homepage serves v4 Pulse. The Design Lab hub lives at /versions.
export default function Home() {
  return (
    <>
      <PulsePage />
      <ChatWidget />
      <VersionSwitcher current="v4" />
    </>
  );
}
