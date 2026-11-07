"use client";

import ChatWidget from "@/components/shared/ChatWidget";
import { useCopy } from "@/components/shared/LocaleProvider";

/** The scripted chat, on pages whose language it speaks. */
export function LocalizedChat() {
  return useCopy().chatEnabled ? <ChatWidget /> : null;
}
