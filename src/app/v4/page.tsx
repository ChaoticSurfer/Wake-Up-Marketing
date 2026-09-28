import type { Metadata } from "next";
import ChatWidget from "@/components/shared/ChatWidget";
import VersionSwitcher from "@/components/shared/VersionSwitcher";
import { TermPage } from "@/components/v4/Terminal";

export const metadata: Metadata = { title: "WakeUP Marketing — v4 Terminal" };

export default function TerminalPage() {
  return (
    <>
      <TermPage />
      <ChatWidget skin="terminal" />
      <VersionSwitcher current="v4" />
    </>
  );
}
