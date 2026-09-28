import { useEffect, useState } from 'react'
import { nav } from '../content'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('no-scroll', open)
  }, [open])

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="nav__inner container">
        <a href="#top" className="nav__logo" aria-label="WakeUP Marketing — home">
          <img src="/brand/logo-horizontal-light.png" alt="WakeUP Marketing" width={172} height={34} />
        </a>

        <nav className="nav__links" aria-label="Primary">
          {nav.map((l, i) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              <span className="mono">0{i + 1}</span>
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn btn--red nav__cta" onClick={() => setOpen(false)}>
          Start a project
          <span aria-hidden>→</span>
        </a>

        <button
          className="nav__burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
