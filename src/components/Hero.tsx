import { useEffect, useState } from 'react'
import QrEye from './QrEye'
import { openChat } from '../lib/hooks'

function Clock() {
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])
  return <>{now.toISOString().slice(11, 19)} UTC</>
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__grid" aria-hidden />
      <div className="hero__glow" aria-hidden />

      <div className="hud hud--tl mono" aria-hidden>
        <span className="hud__dot" /> SYS://WAKEUP — ONLINE
      </div>
      <div className="hud hud--tr mono" aria-hidden>
        <Clock />
      </div>
      <div className="hud hud--bl mono" aria-hidden>
        SIGNAL 100% / NOISE 0%
      </div>
      <div className="hud hud--br mono" aria-hidden>
        SCROLL ↓
      </div>

      <div className="hero__inner container">
        <div className="hero__eye" data-reveal>
          <span className="corner corner--tl" />
          <span className="corner corner--tr" />
          <span className="corner corner--bl" />
          <span className="corner corner--br" />
          <QrEye />
        </div>

        <p className="kicker mono" data-reveal>
          <span className="kicker__bar" /> Marketing agency · Brand · Performance · Content
        </p>

        <h1 className="hero__title display" data-reveal>
          <span className="line">Your audience</span>
          <span className="line">is asleep.</span>
          <span className="line">
            We <span className="glitch" data-text="wake">wake</span> them <span className="red">UP.</span>
          </span>
        </h1>

        <div className="hero__bottom" data-reveal>
          <p className="hero__lead">
            Strategy, creative and performance marketing engineered to stop the scroll — and turn
            attention into revenue.
          </p>
          <div className="hero__ctas">
            <a href="#contact" className="btn btn--red btn--lg">
              Get a free growth audit <span aria-hidden>→</span>
            </a>
            <button className="btn btn--ghost btn--lg" onClick={() => openChat()}>
              <span className="pulse-dot" aria-hidden /> Talk to WakeUP AI
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
