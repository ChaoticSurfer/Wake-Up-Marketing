import { contact, nav } from "@/lib/content";

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="overflow-hidden border-t border-white/10 pb-24 pt-10">
      <div className="mx-auto max-w-[1320px] px-4 md:px-8">
        <a href="#contact" className="group flex items-start py-6 font-display text-[clamp(80px,21vw,330px)] leading-[0.82] tracking-[-0.05em]">
          Wake<span className="text-wu-red">UP</span>
          <span className="ml-[0.08em] text-[0.3em] text-wu-red transition-transform duration-500 group-hover:-translate-y-2 group-hover:translate-x-2">↗</span>
        </a>
        <div className="grid gap-8 border-t border-white/10 py-9 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.3fr]">
          <div className="grid content-start gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="brand/logo-horizontal-light.png" alt="WakeUP Marketing" className="h-9 w-auto self-start justify-self-start" />
            <p className="text-white/55">Marketing that doesn’t let your brand sleep.</p>
          </div>
          <FooterCol title="Navigate" items={nav.map((n) => [n.label, n.href])} />
          <FooterCol title="Social" items={contact.socials.map((s) => [s.label, s.href])} />
          <div className="grid content-start gap-2.5">
            <p className="hud-label mb-1 text-wu-red">Contact</p>
            <span className="text-white/60">{contact.email}</span>
            <span className="text-white/60">{contact.phone}</span>
          </div>
        </div>
        <div className="hud-label flex flex-wrap justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/35">
          <span>© {YEAR} WakeUP Marketing</span>
          <span>Built to be noticed.</span>
          <a href="#top" className="inline-flex min-h-11 items-center hover:text-white">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[][] }) {
  return (
    <nav className="grid content-start gap-2.5" aria-label={title}>
      <p className="hud-label mb-1 text-wu-red">{title}</p>
      {items.map(([label, href]) => (
        <a key={label} href={href} className="inline-flex min-h-11 w-fit items-center text-white/60 transition-colors hover:text-white">
          {label}
        </a>
      ))}
    </nav>
  );
}
