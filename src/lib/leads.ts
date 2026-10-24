import { contact } from '@/lib/content'

export type Lead = {
  name: string
  email: string
  phone?: string
  company?: string
  services?: string[]
  budget?: string
  message?: string
  source: 'form' | 'chat'
  /** Honeypot: a hidden field people never see, so any value means a bot filled the form. */
  website?: string
}

export type LeadResult = { id: string }

/** Shown when a lead could not be delivered, so the visitor can still reach us. */
export const LEAD_FAILED_MESSAGE = `We couldn't send that just now. Please try again or call us at ${contact.phone}.`

/** Sends a lead to /api/lead, which emails it to the team. Throws if it was not delivered. */
export async function submitLead(lead: Lead): Promise<LeadResult> {
  const res = await fetch('/api/lead', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...lead, page: location.href }),
  })
  if (!res.ok) throw new Error(`Lead submission failed (${res.status})`)
  return (await res.json()) as LeadResult
}

export const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim())
