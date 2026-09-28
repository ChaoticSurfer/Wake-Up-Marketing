export type Lead = {
  name: string
  email: string
  phone?: string
  company?: string
  services?: string[]
  budget?: string
  message?: string
  source: 'form' | 'chat'
}

export type LeadResult = { id: string }

const ENDPOINT = process.env.NEXT_PUBLIC_LEAD_ENDPOINT

const makeId = () => 'WU-' + Math.random().toString(36).slice(2, 7).toUpperCase()

/**
 * Submits a lead. If NEXT_PUBLIC_LEAD_ENDPOINT is set, POSTs JSON there.
 * Otherwise (frontend-only mode) it simulates a request and keeps a copy in localStorage.
 */
export async function submitLead(lead: Lead): Promise<LeadResult> {
  const payload = { ...lead, createdAt: new Date().toISOString(), page: location.href }

  if (ENDPOINT) {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (!res.ok) throw new Error(`Lead submission failed (${res.status})`)
    const data = (await res.json().catch(() => ({}))) as Partial<LeadResult>
    return { id: data.id ?? makeId() }
  }

  await new Promise((r) => setTimeout(r, 1400))
  const id = makeId()
  try {
    const stored = JSON.parse(localStorage.getItem('wu_leads') ?? '[]') as unknown[]
    stored.push({ id, ...payload })
    localStorage.setItem('wu_leads', JSON.stringify(stored))
  } catch {
    // storage unavailable — ignore in demo mode
  }
  return { id }
}

export const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim())
