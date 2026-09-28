import { useEffect, useState } from 'react'
import { prefersReducedMotion } from '../lib/hooks'

/** Short boot sequence with the glitching logo. Runs once per session. */
export default function Preloader() {
  const [phase, setPhase] = useState<'on' | 'out' | 'off'>(() => {
    try {
      if (sessionStorage.getItem('wu_booted') === '1' || prefersReducedMotion()) return 'off'
    } catch {
      /* ignore */
    }
    return 'on'
  })
  const [pct, setPct] = useState(0)

  useEffect(() => {
    if (phase !== 'on') return
    document.body.classList.add('no-scroll')
    const start = performance.now()
    let raf = 0
    const tick = (t: number) => {
      const k = Math.min(1, (t - start) / 1500)
      setPct(Math.round(100 * (1 - Math.pow(1 - k, 3))))
      if (k < 1) raf = requestAnimationFrame(tick)
      else {
        setPhase('out')
        try {
          sessionStorage.setItem('wu_booted', '1')
        } catch {
          /* ignore */
        }
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [phase])

  useEffect(() => {
    if (phase !== 'out') return
    document.body.classList.remove('no-scroll')
    const id = setTimeout(() => setPhase('off'), 700)
    return () => clearTimeout(id)
  }, [phase])

  if (phase === 'off') return null
  return (
    <div className={`preloader ${phase === 'out' ? 'is-out' : ''}`} aria-hidden>
      <div className="preloader__logo">
        <img src="/brand/logo-stacked-red.png" alt="" />
        <img src="/brand/logo-stacked-red.png" alt="" className="preloader__ghost preloader__ghost--a" />
        <img src="/brand/logo-stacked-red.png" alt="" className="preloader__ghost preloader__ghost--b" />
      </div>
      <div className="preloader__bar">
        <span style={{ transform: `scaleX(${pct / 100})` }} />
      </div>
      <p className="mono preloader__txt">
        WAKING UP <span className="red">{String(pct).padStart(3, '0')}%</span>
      </p>
    </div>
  )
}
