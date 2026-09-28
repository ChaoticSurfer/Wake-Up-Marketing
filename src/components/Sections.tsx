import { useEffect, useState } from 'react'
import type { CSSProperties, ReactNode } from 'react'
import { cases, manifesto, marquee, process, services, stats, testimonials } from '../content'
import { prefersReducedMotion, useInView, useScrollProgress } from '../lib/hooks'

function SectionHead({ index, label, title }: { index: string; label: string; title: ReactNode }) {
  return (
    <div className="section-head" data-reveal>
      <p className="section-head__label mono">
        <span className="red">[{index}]</span> {label}
      </p>
      <h2 className="section-head__title display">{title}</h2>
    </div>
  )
}

export function Marquee() {
  const row = [...marquee, ...marquee]
  return (
    <div className="marquee" aria-label={marquee.join(', ')}>
      <div className="marquee__track" aria-hidden>
        {row.map((m, i) => (
          <span key={i} className="marquee__item display">
            {m}
            <span className="marquee__sep">✕</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export function Manifesto() {
  const [ref, p] = useScrollProgress<HTMLDivElement>()
  const words = manifesto.split(' ')
  const plain = manifesto.replace(/\*/g, '')
  const lit = Math.round(p * words.length * 1.15)
  return (
    <section className="manifesto section">
      <div className="container" ref={ref}>
        <p className="section-head__label mono" data-reveal>
          <span className="red">[00]</span> Manifesto
        </p>
        <p className="manifesto__text display" aria-label={plain}>
          {words.map((w, i) => (
            <span
              key={i}
              aria-hidden
              className={`${i < lit ? 'is-lit' : ''} ${w.startsWith('*') ? 'is-em' : ''}`}
            >
              {w.replace(/^\*/, '')}{' '}
            </span>
          ))}
        </p>
      </div>
    </section>
  )
}

export function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <SectionHead
          index="01"
          label="Services"
          title={
            <>
              Everything you need to be <span className="red">seen.</span>
            </>
          }
        />
        <div className="services">
          {services.map((s, i) => (
            <article
              key={s.code}
              className="service card"
              data-reveal
              style={{ '--d': `${(i % 3) * 80}ms` } as CSSProperties}
              onPointerMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect()
                e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
                e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
              }}
            >
              <div className="service__top mono">
                <span>{s.code}</span>
                <span className="service__arrow" aria-hidden>
                  ↗
                </span>
              </div>
              <h3 className="service__title">{s.title}</h3>
              <p className="service__text">{s.text}</p>
              <ul className="tags">
                {s.tags.map((t) => (
                  <li key={t} className="tag mono">
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Counter({ value, decimals = 0, run }: { value: number; decimals?: number; run: boolean }) {
  const [v, setV] = useState(0)
  useEffect(() => {
    if (!run) return
    const duration = prefersReducedMotion() ? 1 : 1600
    let raf = 0
    const start = performance.now()
    const tick = (t: number) => {
      const k = Math.min(1, (t - start) / duration)
      setV(value * (1 - Math.pow(1 - k, 4)))
      if (k < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [run, value])
  return <>{v.toFixed(decimals)}</>
}

export function Stats() {
  const [ref, inView] = useInView<HTMLDivElement>(0.4)
  return (
    <section className="stats-wrap">
      <div className="container stats" ref={ref}>
        {stats.map((s) => (
          <div key={s.label} className="stat" data-reveal>
            <div className="stat__value display">
              <Counter value={s.value} decimals={s.decimals} run={inView} />
              <span className="red">{s.suffix}</span>
            </div>
            <div className="stat__label mono">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export function Process() {
  const [ref, p] = useScrollProgress<HTMLOListElement>()
  return (
    <section className="section" id="process">
      <div className="container">
        <SectionHead
          index="02"
          label="Process"
          title={
            <>
              Four steps from <span className="red">silent</span> to sold out.
            </>
          }
        />
        <ol className="process" ref={ref} style={{ '--p': p } as CSSProperties}>
          <span className="process__rail" aria-hidden>
            <span className="process__fill" />
          </span>
          {process.map((s, i) => (
            <li
              key={s.step}
              className={`process__step ${p * 1.25 > i / process.length ? 'is-active' : ''}`}
              data-reveal
            >
              <span className="process__node" aria-hidden />
              <span className="process__num display">{s.step}</span>
              <h3 className="process__title">{s.title}</h3>
              <p className="process__text">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function Work() {
  return (
    <section className="section" id="work">
      <div className="container">
        <SectionHead
          index="03"
          label="Selected work"
          title={
            <>
              Results, not <span className="red">noise.</span>
            </>
          }
        />
        <div className="work">
          {cases.map((c, i) => (
            <article key={c.id} className={`case case--${i + 1}`} data-reveal>
              <div className="case__visual" aria-hidden>
                <div className="case__scan" />
                <span className="case__big display">{c.metric}</span>
              </div>
              <div className="case__body">
                <div className="case__meta mono">
                  <span className="red">{c.id}</span>
                  <span>{c.client}</span>
                </div>
                <h3 className="case__title">{c.title}</h3>
                <p className="case__metric">
                  <strong className="display">{c.metric}</strong> {c.metricLabel}
                </p>
                <ul className="tags">
                  {c.tags.map((t) => (
                    <li key={t} className="tag mono">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Testimonials() {
  return (
    <section className="section section--tight">
      <div className="container testimonials">
        {testimonials.map((t, i) => (
          <figure
            key={i}
            className="quote card"
            data-reveal
            style={{ '--d': `${i * 90}ms` } as CSSProperties}
          >
            <span className="quote__mark display red" aria-hidden>
              “
            </span>
            <blockquote>{t.quote}</blockquote>
            <figcaption className="mono">
              {t.name} — {t.company}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
