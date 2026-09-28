import { contact, nav } from '../content'

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__cta" data-reveal>
          <a href="#contact" className="footer__big display">
            Wake<span className="red">UP</span>
            <span className="footer__arrow" aria-hidden>
              ↗
            </span>
          </a>
        </div>
        <div className="footer__grid">
          <div>
            <img src="/brand/logo-horizontal-light.png" alt="WakeUP Marketing" width={190} height={37} loading="lazy" />
            <p className="footer__tag">Marketing that doesn’t let your brand sleep.</p>
          </div>
          <nav aria-label="Footer">
            <p className="mono footer__h">Navigate</p>
            {nav.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>
          <div>
            <p className="mono footer__h">Social</p>
            {contact.socials.map((s) => (
              <a key={s.label} href={s.href}>
                {s.label}
              </a>
            ))}
          </div>
          <div>
            <p className="mono footer__h">Contact</p>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>
          </div>
        </div>
        <div className="footer__bottom mono">
          <span>© {YEAR} WakeUP Marketing</span>
          <span>Built to be noticed.</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  )
}
