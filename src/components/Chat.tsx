import { useCallback, useEffect, useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'
import { GREETING, MAIN_CHIPS, reply } from '../lib/chatEngine'
import type { LeadDraft, Stage } from '../lib/chatEngine'
import { submitLead } from '../lib/leads'

type Msg = { id: number; from: 'bot' | 'user'; text: string; time: string }

const stamp = () => new Date().toTimeString().slice(0, 5)
let uid = 0

function EyeMark({ size = 28 }: { size?: number }) {
  return (
    <svg className="eye-mark" width={size} height={size} viewBox="0 0 40 40" aria-hidden>
      <path d="M3 20 Q20 5 37 20 Q20 35 3 20Z" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round" />
      <g className="eye-mark__iris">
        <circle cx="20" cy="20" r="7" fill="#E40613" />
        <circle cx="20" cy="20" r="3.4" fill="#111" />
        <circle cx="21.8" cy="18.2" r="1.2" fill="#fff" />
      </g>
    </svg>
  )
}

export default function Chat() {
  const [open, setOpen] = useState(false)
  const [teaser, setTeaser] = useState(false)
  const [msgs, setMsgs] = useState<Msg[]>([])
  const [chips, setChips] = useState<string[]>([])
  const [typing, setTyping] = useState(false)
  const [input, setInput] = useState('')
  const [unread, setUnread] = useState(1)
  const stage = useRef<Stage>('idle')
  const [stageView, setStageView] = useState<Stage>('idle')
  const lead = useRef<LeadDraft>({})
  const started = useRef(false)
  const listRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const launcherRef = useRef<HTMLButtonElement>(null)
  const queue = useRef(Promise.resolve())

  const botSay = useCallback((lines: string[], nextChips?: string[]) => {
    queue.current = queue.current.then(async () => {
      for (const line of lines) {
        setTyping(true)
        await new Promise((r) => setTimeout(r, Math.min(1400, 380 + line.length * 12)))
        setTyping(false)
        setMsgs((m) => [...m, { id: ++uid, from: 'bot', text: line, time: stamp() }])
        await new Promise((r) => setTimeout(r, 120))
      }
      setChips(nextChips ?? [])
    })
    return queue.current
  }, [])

  const send = useCallback(
    (raw: string) => {
      const text = raw.trim()
      if (!text) return
      setMsgs((m) => [...m, { id: ++uid, from: 'user', text, time: stamp() }])
      setChips([])
      setInput('')
      const turn = reply(text, stage.current, lead.current)
      stage.current = turn.stage
      setStageView(turn.stage)
      if (turn.lead) lead.current = turn.lead
      botSay(turn.messages, turn.chips).then(async () => {
        if (!turn.submit) return
        try {
          const l = lead.current
          const { id } = await submitLead({
            name: l.name ?? '',
            email: l.email ?? '',
            message: l.goal,
            source: 'chat',
          })
          await botSay(
            [
              `Done. Your request ID is ${id}.`,
              `A strategist will email ${l.email} within one business day. Anything else while you wait?`,
            ],
            ['Services', 'How it works', 'Results'],
          )
        } catch {
          await botSay(['Something went wrong sending that. Could you try the form below instead?'], MAIN_CHIPS)
        }
        stage.current = 'idle'
        setStageView('idle')
        lead.current = {}
      })
    },
    [botSay],
  )

  const openPanel = useCallback(
    (prefill?: string) => {
      setOpen(true)
      setTeaser(false)
      setUnread(0)
      if (!started.current) {
        started.current = true
        botSay(GREETING.messages, GREETING.chips)
      }
      if (prefill) queue.current.then(() => send(prefill))
      setTimeout(() => inputRef.current?.focus(), 250)
    },
    [botSay, send],
  )

  const close = () => {
    setOpen(false)
    launcherRef.current?.focus()
  }

  // external open requests (hero button, contact section)
  useEffect(() => {
    const onOpen = (e: Event) => openPanel((e as CustomEvent<{ message?: string }>).detail?.message)
    window.addEventListener('wu:chat-open', onOpen)
    return () => window.removeEventListener('wu:chat-open', onOpen)
  }, [openPanel])

  // teaser bubble once per session
  useEffect(() => {
    let seen = false
    try {
      seen = sessionStorage.getItem('wu_teaser') === '1'
    } catch {
      /* ignore */
    }
    if (seen) return
    const id = setTimeout(() => {
      setTeaser(true)
      try {
        sessionStorage.setItem('wu_teaser', '1')
      } catch {
        /* ignore */
      }
    }, 7000)
    return () => clearTimeout(id)
  }, [])

  useEffect(() => {
    const el = listRef.current
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' })
  }, [msgs, typing, chips])

  useEffect(() => {
    if (!open) return
    const onKey = (e: globalThis.KeyboardEvent) => e.key === 'Escape' && close()
    window.addEventListener('keydown', onKey)
    document.body.classList.add('chat-open')
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.classList.remove('chat-open')
    }
  }, [open])

  const onKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send(input)
    }
  }

  const placeholder =
    stageView === 'ask_email' ? 'you@company.com' : stageView === 'ask_name' ? 'Your name' : 'Type a message…'

  return (
    <>
      {teaser && !open && (
        <div className="chat-teaser" role="status">
          <button className="chat-teaser__x" aria-label="Dismiss" onClick={() => setTeaser(false)}>
            ×
          </button>
          <button className="chat-teaser__body" onClick={() => openPanel()}>
            <span className="mono red">WAKEUP AI</span>
            Need more customers? Ask me anything — I reply instantly.
          </button>
        </div>
      )}

      <button
        ref={launcherRef}
        className={`chat-launcher ${open ? 'is-hidden' : ''}`}
        onClick={() => openPanel()}
        aria-label="Open chat with WakeUP AI"
        aria-expanded={open}
        aria-controls="wu-chat"
      >
        <span className="chat-launcher__ring" aria-hidden />
        <EyeMark size={30} />
        {unread > 0 && <span className="chat-launcher__badge">{unread}</span>}
      </button>

      <section
        id="wu-chat"
        className={`chat ${open ? 'is-open' : ''}`}
        role="dialog"
        aria-modal="false"
        aria-label="WakeUP AI chat"
        aria-hidden={!open}
        inert={!open}
      >
        <header className="chat__head">
          <div className="chat__avatar">
            <EyeMark size={26} />
          </div>
          <div className="chat__who">
            <strong>
              WakeUP <span className="red">AI</span>
            </strong>
            <span className="mono">
              <i className="status-dot" /> online · replies instantly
            </span>
          </div>
          <button className="chat__icon-btn" onClick={close} aria-label="Close chat">
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </header>

        <div className="chat__scan" aria-hidden />

        <div className="chat__list" ref={listRef} aria-live="polite">
          <div className="chat__session mono">
            <span>SESSION · SECURE CHANNEL</span>
          </div>
          {msgs.map((m) => (
            <div key={m.id} className={`msg msg--${m.from}`}>
              <div className="msg__bubble">{m.text}</div>
              <span className="msg__time mono">
                {m.from === 'bot' ? 'WAKEUP AI' : 'YOU'} · {m.time}
              </span>
            </div>
          ))}
          {typing && (
            <div className="msg msg--bot">
              <div className="msg__bubble msg__typing" aria-label="WakeUP AI is typing">
                <i />
                <i />
                <i />
              </div>
            </div>
          )}
          {chips.length > 0 && !typing && (
            <div className="chat__chips">
              {chips.map((c) => (
                <button key={c} className="chip chip--sm" onClick={() => send(c)}>
                  {c}
                </button>
              ))}
            </div>
          )}
        </div>

        <form
          className="chat__composer"
          onSubmit={(e) => {
            e.preventDefault()
            send(input)
          }}
        >
          <textarea
            ref={inputRef}
            rows={1}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder={placeholder}
            aria-label="Message"
            maxLength={600}
          />
          <button className="chat__send" disabled={!input.trim()} aria-label="Send message">
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
              <path d="M4 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </form>
        <p className="chat__foot mono">AI assistant · a human strategist follows up</p>
      </section>
    </>
  )
}
