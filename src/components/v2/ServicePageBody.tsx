"use client";

import { useCopy } from "@/components/shared/LocaleProvider";
import { LocalizedChat } from "@/components/shared/LocalizedChat";
import { AwContact, AwNav } from "@/components/v2/Awaken";
import { serviceChrome, serviceIds, servicePages, servicePath, servicesIndexPath } from "@/lib/service-pages";
import type { ServiceId } from "@/lib/service-pages";

function Breadcrumbs({ trail }: { trail: { name: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-white/55">
      <ol className="flex flex-wrap gap-2">
        {trail.map((t, i) => (
          <li key={t.name} className="flex gap-2">
            {i > 0 && <span aria-hidden>/</span>}
            {t.href ? (
              <a href={t.href} className="hover:text-white">
                {t.name}
              </a>
            ) : (
              <span aria-current="page" className="text-white/80">
                {t.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** One service page (/services/<slug> or /ka/services/<slug>) in the current language. */
export function ServicePageBody({ id }: { id: ServiceId }) {
  const c = useCopy();
  const ui = serviceChrome[c.locale];
  const s = servicePages[id][c.locale];
  const others = serviceIds.filter((o) => o !== id);
  return (
    <div className="relative bg-wu-black text-white">
      <AwNav />
      <main className="pt-16">
        <section className="mx-auto max-w-[1120px] px-4 pt-14 md:px-8">
          <Breadcrumbs trail={[{ name: ui.home, href: c.home }, { name: ui.services, href: servicesIndexPath(c.locale) }, { name: s.name }]} />
          <h1 className="mt-8 font-display text-[clamp(38px,6vw,80px)] leading-[0.95]">{s.h1}</h1>
          <p className="mt-6 max-w-[680px] text-lg text-white/70">{s.intro}</p>
          <a href="#contact" className="mt-8 inline-flex h-14 items-center rounded-full bg-wu-red px-8 font-semibold shadow-[0_14px_40px_-10px_rgba(228,6,19,.9)]">
            {ui.cta} →
          </a>
        </section>

        <section className="mx-auto grid max-w-[1120px] gap-10 px-4 py-20 md:grid-cols-2 md:px-8">
          <div>
            <h2 className="font-display text-3xl">{ui.included}</h2>
            <ul className="mt-6 grid gap-3 text-white/80">
              {s.included.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-wu-red" aria-hidden>
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid content-start gap-10">
            <div>
              <h2 className="font-display text-3xl">{ui.fit}</h2>
              <p className="mt-4 text-white/70">{s.fit}</p>
            </div>
            <div>
              <h2 className="font-display text-3xl">{ui.pricing}</h2>
              <p className="mt-4 text-white/70">{s.pricing}</p>
              <a href={`${c.home}#pricing`} className="mt-3 inline-flex min-h-11 items-center text-wu-red hover:text-white">
                {ui.seePlans} →
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1120px] px-4 md:px-8">
          <h2 className="font-display text-3xl">{ui.process}</h2>
          <ol className="mt-6 grid gap-4 md:grid-cols-4">
            {ui.processSteps.map((step, i) => (
              <li key={step.t} className="rounded-2xl border border-white/10 bg-[#141414] p-6">
                <span className="font-mono text-xs text-wu-red">0{i + 1}</span>
                <h3 className="mt-2 font-display text-xl">{step.t}</h3>
                <p className="mt-2 text-sm text-white/65">{step.d}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mx-auto max-w-[1120px] px-4 py-20 md:px-8">
          <h2 className="font-display text-3xl">{ui.faq}</h2>
          <div className="mt-6 grid gap-3">
            {s.faq.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-white/10 bg-[#141414] open:border-wu-red/50">
                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-6 px-6 py-4 text-lg font-semibold">
                  {f.q}
                  <span className="grid size-8 shrink-0 place-items-center rounded-full border border-white/20 transition-transform group-open:rotate-45" aria-hidden>
                    +
                  </span>
                </summary>
                <p className="px-6 pb-5 text-white/70">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1120px] px-4 md:px-8">
          <h2 className="font-display text-3xl">{ui.related}</h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {others.map((o) => (
              <li key={o}>
                <a href={servicePath(o, c.locale)} className="inline-flex min-h-11 items-center rounded-full border border-white/15 px-5 hover:bg-white/10">
                  {servicePages[o][c.locale].name}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <AwContact />
      </main>
      <LocalizedChat />
    </div>
  );
}

/** The services index (/services or /ka/services) in the current language. */
export function ServicesIndexBody() {
  const c = useCopy();
  const ui = serviceChrome[c.locale];
  return (
    <div className="relative bg-wu-black text-white">
      <AwNav />
      <main className="pt-16">
        <section className="mx-auto max-w-[1120px] px-4 pt-14 md:px-8">
          <Breadcrumbs trail={[{ name: ui.home, href: c.home }, { name: ui.services }]} />
          <h1 className="mt-8 font-display text-[clamp(38px,6vw,80px)] leading-[0.95]">{ui.indexH1}</h1>
          <p className="mt-6 max-w-[680px] text-lg text-white/70">{ui.indexIntro}</p>
          <a href={servicePath("audit", c.locale)} className="mt-8 inline-flex h-14 items-center rounded-full bg-wu-red px-8 font-semibold shadow-[0_14px_40px_-10px_rgba(228,6,19,.9)]">
            {ui.cta} →
          </a>
        </section>
        <ul className="mx-auto grid max-w-[1120px] gap-4 px-4 py-16 sm:grid-cols-2 lg:grid-cols-3 md:px-8">
          {serviceIds.map((id) => {
            const s = servicePages[id][c.locale];
            return (
              <li key={id}>
                <a href={servicePath(id, c.locale)} className="group block h-full rounded-2xl border border-white/10 bg-[#141414] p-7 transition-colors hover:border-wu-red/60">
                  <h2 className="font-display text-2xl">{s.name}</h2>
                  <p className="mt-3 text-white/60">{s.intro}</p>
                  <span className="mt-6 inline-block text-wu-red group-hover:translate-x-1">→</span>
                </a>
              </li>
            );
          })}
        </ul>
        <AwContact />
      </main>
      <LocalizedChat />
    </div>
  );
}
