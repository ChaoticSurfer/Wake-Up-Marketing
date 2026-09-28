import { useState } from 'react'
import type { FormEvent, ReactNode } from 'react'
import { budgetOptions, contact, serviceOptions } from '../content'
import { isEmail, submitLead } from '../lib/leads'
import { openChat } from '../lib/hooks'

type Fields = {
  name: string
  email: string
  phone: string
  company: string
  message: string
  services: string[]
  budget: string
  consent: boolean
}

const empty: Fields = {
  name: '',
  email: '',
  phone: '',
  company: '',
  message: '',
  services: [],
  budget: '',
  consent: false,
}

type Errors = Partial<Record<keyof Fields, string>>

function validate(f: Fields): Errors {
  const e: Errors = {}
  if (f.name.trim().length < 2) e.name = 'Tell us your name.'
  if (!isEmail(f.email)) e.email = 'Enter a valid email address.'
  if (f.phone && !/^[+\d][\d\s()-]{6,}$/.test(f.phone.trim())) e.phone = 'This phone number looks off.'
  if (f.services.length === 0) e.services = 'Pick at least one area.'
  if (!f.consent) e.consent = 'We need your consent to reply.'
  return e
}

export default function LeadForm() {
  const [f, setF] = useState<Fields>(empty)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')
  const [ticket, setTicket] = useState('')

  const set = <K extends keyof Fields>(k: K, v: Fields[K]) => {
    setF((p) => ({ ...p, [k]: v }))
    if (errors[k]) setErrors((p) => ({ ...p, [k]: undefined }))
  }

  const toggleService = (s: string) =>
    set('services', f.services.includes(s) ? f.services.filter((x) => x !== s) : [...f.services, s])

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const errs = validate(f)
    setErrors(errs)
    if (Object.keys(errs).length) {
      const first = Object.keys(errs)[0]
      document.getElementById(`lf-${first}`)?.focus()
      return
    }
    setStatus('sending')
    try {
      const { id } = await submitLead({
        name: f.name.trim(),
        email: f.email.trim(),
        phone: f.phone.trim() || undefined,
        company: f.company.trim() || undefined,
        services: f.services,
        budget: f.budget || undefined,
        message: f.message.trim() || undefined,
        source: 'form',
      })
      setTicket(id)
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  const progress =
    [f.name.trim().length > 1, isEmail(f.email), f.services.length > 0, !!f.budget, f.message.trim().length > 0, f.consent].filter(
      Boolean,
    ).length / 6

  return (
    <section className="section contact" id="contact">
      <div className="contact__bg" aria-hidden />
      <div className="container contact__grid">
        <div className="contact__intro" data-reveal>
          <p className="section-head__label mono">
            <span className="red">[04]</span> Start a project
          </p>
          <h2 className="section-head__title display">
            Ready to <span className="red">wake up</span> your brand?
          </h2>
          <p className="contact__lead">
            Tell us where you are and where you want to be. We’ll come back within one business day
            with a free mini-audit and a clear next step.
          </p>

          <ol className="next-steps">
            <li>
              <span className="mono red">01</span> We review your brand, ads and site.
            </li>
            <li>
              <span className="mono red">02</span> 30-minute strategy call — no fluff.
            </li>
            <li>
              <span className="mono red">03</span> You get a proposal with KPIs and budget.
            </li>
          </ol>

          <div className="contact__direct">
            <a href={`mailto:${contact.email}`} className="mono">
              {contact.email}
            </a>
            <button className="link-btn mono" onClick={() => openChat()}>
              or chat with WakeUP AI →
            </button>
          </div>
        </div>

        <div className="terminal" data-reveal>
          <div className="terminal__bar mono">
            <span className="terminal__dots" aria-hidden>
              <i />
              <i />
              <i />
            </span>
            <span>new_lead.form</span>
            <span className="terminal__pct">{Math.round(progress * 100)}%</span>
          </div>
          <div className="terminal__progress" aria-hidden>
            <span style={{ transform: `scaleX(${progress})` }} />
          </div>

          {status === 'done' ? (
            <div className="lead-done" role="status">
              <div className="lead-done__icon" aria-hidden>
                <svg viewBox="0 0 48 48">
                  <path d="M12 25l8 8 16-18" />
                </svg>
              </div>
              <p className="mono red">TRANSMISSION RECEIVED · {ticket}</p>
              <h3 className="display">You’re awake now.</h3>
              <p>
                Thanks, {f.name.split(' ')[0]}. We’ll be in touch at <strong>{f.email}</strong> within
                one business day.
              </p>
              <button
                className="btn btn--ghost"
                onClick={() => {
                  setF(empty)
                  setStatus('idle')
                }}
              >
                Send another request
              </button>
            </div>
          ) : (
            <form className="lead-form" onSubmit={onSubmit} noValidate>
              <div className="field-row">
                <Field id="name" label="Full name" error={errors.name} required>
                  <input
                    id="lf-name"
                    autoComplete="name"
                    value={f.name}
                    onChange={(e) => set('name', e.target.value)}
                    placeholder="Jane Doe"
                    aria-invalid={!!errors.name}
                  />
                </Field>
                <Field id="email" label="Email" error={errors.email} required>
                  <input
                    id="lf-email"
                    type="email"
                    autoComplete="email"
                    value={f.email}
                    onChange={(e) => set('email', e.target.value)}
                    placeholder="jane@company.com"
                    aria-invalid={!!errors.email}
                  />
                </Field>
              </div>
              <div className="field-row">
                <Field id="phone" label="Phone" error={errors.phone}>
                  <input
                    id="lf-phone"
                    type="tel"
                    autoComplete="tel"
                    value={f.phone}
                    onChange={(e) => set('phone', e.target.value)}
                    placeholder="+1 555 000 000"
                    aria-invalid={!!errors.phone}
                  />
                </Field>
                <Field id="company" label="Company / website">
                  <input
                    id="lf-company"
                    autoComplete="organization"
                    value={f.company}
                    onChange={(e) => set('company', e.target.value)}
                    placeholder="company.com"
                  />
                </Field>
              </div>

              <fieldset className="field" aria-describedby={errors.services ? 'lf-services-err' : undefined}>
                <legend className="field__label mono">
                  What do you need? <span className="red">*</span>
                </legend>
                <div className="chips" id="lf-services" tabIndex={-1}>
                  {serviceOptions.map((s) => (
                    <button
                      type="button"
                      key={s}
                      className={`chip ${f.services.includes(s) ? 'is-on' : ''}`}
                      aria-pressed={f.services.includes(s)}
                      onClick={() => toggleService(s)}
                    >
                      {s}
                    </button>
                  ))}
                </div>
                {errors.services && (
                  <p className="field__err mono" id="lf-services-err">
                    {errors.services}
                  </p>
                )}
              </fieldset>

              <fieldset className="field">
                <legend className="field__label mono">Monthly budget</legend>
                <div className="chips" role="radiogroup">
                  {budgetOptions.map((b) => (
                    <button
                      type="button"
                      key={b}
                      role="radio"
                      aria-checked={f.budget === b}
                      className={`chip ${f.budget === b ? 'is-on' : ''}`}
                      onClick={() => set('budget', f.budget === b ? '' : b)}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </fieldset>

              <Field id="message" label="Tell us about your goals">
                <textarea
                  id="lf-message"
                  rows={4}
                  value={f.message}
                  onChange={(e) => set('message', e.target.value)}
                  placeholder="We want to double online sales before Q4…"
                />
              </Field>

              <label className={`consent ${errors.consent ? 'has-err' : ''}`}>
                <input
                  id="lf-consent"
                  type="checkbox"
                  checked={f.consent}
                  onChange={(e) => set('consent', e.target.checked)}
                />
                <span className="consent__box" aria-hidden />
                <span>I agree to be contacted about my request.</span>
              </label>
              {errors.consent && <p className="field__err mono">{errors.consent}</p>}

              {status === 'error' && (
                <p className="field__err mono" role="alert">
                  Transmission failed. Please try again or email us directly.
                </p>
              )}

              <button className="btn btn--red btn--lg btn--block" disabled={status === 'sending'}>
                {status === 'sending' ? (
                  <>
                    <span className="spinner" aria-hidden /> Transmitting…
                  </>
                ) : (
                  <>
                    Send request <span aria-hidden>→</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Field({
  id,
  label,
  error,
  required,
  children,
}: {
  id: string
  label: string
  error?: string
  required?: boolean
  children: ReactNode
}) {
  return (
    <div className={`field ${error ? 'has-err' : ''}`}>
      <label className="field__label mono" htmlFor={`lf-${id}`}>
        {label} {required && <span className="red">*</span>}
      </label>
      {children}
      {error && <p className="field__err mono">{error}</p>}
    </div>
  )
}
