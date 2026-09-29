"use client";

import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { GREETING, reply } from "@/lib/chatEngine";
import type { LeadDraft, Stage } from "@/lib/chatEngine";
import { submitLead } from "@/lib/leads";
import { cn } from "@/lib/utils";

type Msg = { id: number; from: "bot" | "user"; text: string; time: string };
const stamp = () => new Date().toTimeString().slice(0, 5);
let uid = 0;

export type ChatSkin = "dark" | "light" | "terminal";

function EyeMark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden>
      <path d="M3 20 Q20 5 37 20 Q20 35 3 20Z" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round" />
      <g className="eye-look">
        <circle cx="20" cy="20" r="7" fill="#E40613" />
        <circle cx="20" cy="20" r="3.4" fill="#111" />
        <circle cx="21.8" cy="18.2" r="1.2" fill="#fff" />
      </g>
    </svg>
  );
}

/** Floating "WakeUP AI" chat. Scripted locally (see lib/chatEngine) — swap `reply` for a real API later. */
export default function ChatWidget({ skin = "dark" }: { skin?: ChatSkin }) {
  const [open, setOpen] = useState(false);
  const [teaser, setTeaser] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [chips, setChips] = useState<string[]>([]);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState("");
  const [stageView, setStageView] = useState<Stage>("idle");
  const [unread, setUnread] = useState(true);
  const stage = useRef<Stage>("idle");
  const lead = useRef<LeadDraft>({});
  const started = useRef(false);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const queue = useRef(Promise.resolve());

  const light = skin === "light";
  const term = skin === "terminal";

  const botSay = useCallback((lines: string[], next?: string[]) => {
    queue.current = queue.current.then(async () => {
      for (const line of lines) {
        setTyping(true);
        await new Promise((r) => setTimeout(r, Math.min(1300, 360 + line.length * 11)));
        setTyping(false);
        setMsgs((m) => [...m, { id: ++uid, from: "bot", text: line, time: stamp() }]);
        await new Promise((r) => setTimeout(r, 120));
      }
      setChips(next ?? []);
    });
    return queue.current;
  }, []);

  const send = useCallback(
    (raw: string) => {
      const text = raw.trim();
      if (!text) return;
      setMsgs((m) => [...m, { id: ++uid, from: "user", text, time: stamp() }]);
      setChips([]);
      setInput("");
      const turn = reply(text, stage.current, lead.current);
      stage.current = turn.stage;
      setStageView(turn.stage);
      if (turn.lead) lead.current = turn.lead;
      botSay(turn.messages, turn.chips).then(async () => {
        if (!turn.submit) return;
        const l = lead.current;
        const { id } = await submitLead({ name: l.name ?? "", email: l.email ?? "", message: l.goal, source: "chat" });
        await botSay([`Done. Your request ID is ${id}.`, `A strategist will email ${l.email} within one business day.`], ["Services", "Results"]);
        stage.current = "idle";
        setStageView("idle");
        lead.current = {};
      });
    },
    [botSay],
  );

  const openPanel = useCallback(
    (prefill?: string) => {
      setOpen(true);
      setTeaser(false);
      setUnread(false);
      if (!started.current) {
        started.current = true;
        botSay(GREETING.messages, GREETING.chips);
      }
      if (prefill) queue.current.then(() => send(prefill));
      setTimeout(() => inputRef.current?.focus(), 250);
    },
    [botSay, send],
  );

  useEffect(() => {
    const on = (e: Event) => openPanel((e as CustomEvent<{ message?: string }>).detail?.message);
    window.addEventListener("wu:chat-open", on);
    const t = setTimeout(() => setTeaser(true), 8000);
    return () => {
      window.removeEventListener("wu:chat-open", on);
      clearTimeout(t);
    };
  }, [openPanel]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, typing, chips]);

  useEffect(() => {
    if (!open) return;
    const k = (e: globalThis.KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open]);

  const onKey = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  };

  const panel = cn(
    "fixed bottom-0 right-0 z-[80] flex h-[100svh] w-full flex-col overflow-hidden sm:bottom-5 sm:right-5 sm:h-[min(640px,calc(100svh-40px))] sm:w-[400px]",
    term
      ? "border border-wu-red/60 bg-black font-mono shadow-[0_0_60px_-10px_rgba(228,6,19,.6)] sm:rounded-none"
      : light
        ? "border border-black/10 bg-white/95 text-black shadow-[0_40px_100px_-20px_rgba(0,0,0,.35)] backdrop-blur-xl sm:rounded-3xl"
        : "border border-white/15 bg-[#0e0e0e]/95 shadow-[0_40px_120px_-20px_rgba(0,0,0,.9),0_0_80px_-30px_rgba(228,6,19,.6)] backdrop-blur-2xl sm:rounded-3xl",
  );
  const muted = light ? "text-black/45" : "text-white/40";

  return (
    <>
      <AnimatePresence>
        {teaser && !open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8 }}
            className="fixed bottom-24 right-5 z-[75] max-w-[260px]"
          >
            <button
              onClick={() => setTeaser(false)}
              aria-label="Dismiss"
              className={cn("absolute -left-2.5 -top-2.5 grid size-6 place-items-center rounded-full border text-sm", light ? "border-black/15 bg-white" : "border-white/20 bg-black")}
            >
              ×
            </button>
            <button
              onClick={() => openPanel()}
              className={cn(
                "grid gap-1 rounded-2xl rounded-br-sm px-4 py-3 text-left text-[14.5px] leading-snug shadow-2xl",
                light ? "bg-wu-black text-white" : "bg-white text-black",
              )}
            >
              <span className="hud-label text-xs text-wu-red">WakeUP AI</span>
              Need more customers? Ask me anything. I reply instantly.
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => openPanel()}
        aria-label="Open chat with WakeUP AI"
        animate={{ scale: open ? 0.4 : 1, opacity: open ? 0 : 1 }}
        className={cn(
          "fixed bottom-5 right-5 z-[75] grid size-16 place-items-center text-white shadow-[0_14px_40px_-8px_rgba(228,6,19,.8)]",
          term ? "rounded-none border border-wu-red bg-black" : "rounded-full bg-wu-red",
          open && "pointer-events-none",
        )}
      >
        {!term && <span className="absolute -inset-1.5 animate-spin-slow rounded-full border border-dashed border-wu-red/80" aria-hidden />}
        <EyeMark size={30} />
        {unread && <span className="absolute -right-0.5 -top-0.5 grid size-5 place-items-center rounded-full bg-white text-xs font-bold text-wu-red">1</span>}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.section
            role="dialog"
            aria-label="WakeUP AI chat"
            initial={{ opacity: 0, y: 24, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.94 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            style={{ transformOrigin: "bottom right" }}
            className={panel}
          >
            <header
              className={cn(
                "flex items-center gap-3 border-b px-4 py-3.5",
                light ? "border-black/10" : "border-white/10 bg-gradient-to-b from-wu-red/15 to-transparent",
              )}
            >
              <div className={cn("grid size-11 place-items-center border", term ? "border-wu-red" : "rounded-xl border-wu-red/60 shadow-[0_0_20px_-4px_rgba(228,6,19,.6)]", light ? "bg-wu-black text-white" : "bg-black")}>
                <EyeMark size={26} />
              </div>
              <div className="flex-1">
                <p className="font-display text-lg leading-none">
                  {term ? "wakeup@ai:~$" : <>WakeUP <span className="text-wu-red">AI</span></>}
                </p>
                <p className={cn("hud-label mt-1.5 flex items-center gap-1.5 text-xs", muted)}>
                  <i className="size-1.5 rounded-full bg-wu-amber shadow-[0_0_8px_#ffa800]" /> online · replies instantly
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className={cn("grid size-9 place-items-center rounded-lg border transition-colors", light ? "border-black/10 hover:bg-black/5" : "border-white/10 hover:bg-white/5")}
              >
                ✕
              </button>
            </header>
            {!light && <div className="h-px animate-shine bg-[linear-gradient(90deg,transparent,#e40613,transparent)] bg-[length:50%_100%] bg-no-repeat" />}

            <div
              ref={listRef}
              aria-live="polite"
              className={cn(
                "flex flex-1 flex-col gap-3.5 overflow-y-auto overscroll-contain px-4 py-5",
                light ? "bg-[radial-gradient(rgba(0,0,0,.05)_1px,transparent_1px)]" : "bg-[radial-gradient(rgba(255,255,255,.05)_1px,transparent_1px)]",
                "[background-size:18px_18px]",
              )}
            >
              <p className={cn("hud-label flex items-center gap-2.5 self-center text-xs", muted)}>
                <i className="h-px w-8 bg-current opacity-40" /> Secure channel <i className="h-px w-8 bg-current opacity-40" />
              </p>
              {msgs.map((m) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn("grid max-w-[86%] gap-1", m.from === "user" ? "justify-items-end self-end" : "self-start")}
                >
                  <div
                    className={cn(
                      "whitespace-pre-line px-3.5 py-2.5 text-[15px] leading-snug",
                      m.from === "user"
                        ? cn("bg-wu-red text-white", term ? "" : "rounded-2xl rounded-tr-sm")
                        : term
                          ? "border-l-2 border-wu-red pl-3 text-[#ff8a8f]"
                          : light
                            ? "rounded-2xl rounded-tl-sm border border-black/10 bg-black/[.03]"
                            : "rounded-2xl rounded-tl-sm border border-white/10 border-l-2 border-l-wu-red bg-white/[.04]",
                    )}
                  >
                    {m.text}
                  </div>
                  <span className={cn("font-mono text-xs uppercase tracking-wider", muted)}>
                    {m.from === "bot" ? "WakeUP AI" : "You"} · {m.time}
                  </span>
                </motion.div>
              ))}
              {typing && (
                <div className={cn("flex h-10 items-end gap-1 self-start px-3.5 py-2.5", term ? "" : "rounded-2xl border", light ? "border-black/10" : "border-white/10")}>
                  {[0, 1, 2].map((i) => (
                    <motion.i
                      key={i}
                      className="w-1 bg-wu-red"
                      animate={{ height: [8, 18, 8] }}
                      transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
                    />
                  ))}
                </div>
              )}
              {chips.length > 0 && !typing && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-wrap gap-1.5">
                  {chips.map((c) => (
                    <button
                      key={c}
                      onClick={() => send(c)}
                      className={cn(
                        "border border-wu-red/50 px-3 py-1.5 text-[13px] transition-colors hover:bg-wu-red hover:text-white",
                        term ? "" : "rounded-full",
                      )}
                    >
                      {c}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className={cn("flex items-end gap-2 border-t p-3", light ? "border-black/10" : "border-white/10")}
            >
              <textarea
                ref={inputRef}
                rows={1}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKey}
                aria-label="Message"
                placeholder={stageView === "ask_email" ? "you@company.com" : stageView === "ask_name" ? "Your name" : term ? "> type a command…" : "Type a message…"}
                className={cn(
                  "max-h-28 min-h-11 flex-1 resize-none border px-3.5 py-2.5 text-base outline-none transition-colors focus:border-wu-red",
                  term ? "border-wu-red/40 bg-black" : "rounded-xl",
                  light ? "border-black/10 bg-black/[.03]" : !term && "border-white/10 bg-white/[.04]",
                )}
              />
              <button
                disabled={!input.trim()}
                aria-label="Send message"
                className={cn("grid size-11 shrink-0 place-items-center bg-wu-red text-white transition-opacity disabled:opacity-35", term ? "" : "rounded-xl")}
              >
                →
              </button>
            </form>
            <p className={cn("pb-2.5 text-center font-mono text-xs uppercase tracking-wider", muted)}>AI assistant · a human strategist follows up</p>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
}

