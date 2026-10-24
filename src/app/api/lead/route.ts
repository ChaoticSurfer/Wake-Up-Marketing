import { Resend } from "resend";
import { isEmail, type Lead } from "@/lib/leads";

// Every lead from the contact forms and the chat is emailed here.
const LEAD_INBOX = "info@wakeup.ge";
// Must be on a domain verified in Resend (wakeup.ge).
const LEAD_SENDER = "WakeUP Website <leads@wakeup.ge>";
const MAX_FIELD_LENGTH = 2000;

type LeadPayload = Lead & { page?: string };

const clip = (v: unknown) => (typeof v === "string" ? v.trim().slice(0, MAX_FIELD_LENGTH) : "");

function parseLead(body: unknown): LeadPayload | null {
  if (typeof body !== "object" || body === null) return null;
  const b = body as Record<string, unknown>;
  const name = clip(b.name);
  const email = clip(b.email);
  if (name.length < 2 || !isEmail(email)) return null;
  return {
    name,
    email,
    phone: clip(b.phone),
    company: clip(b.company),
    services: Array.isArray(b.services) ? b.services.map(clip).filter(Boolean) : [],
    budget: clip(b.budget),
    message: clip(b.message),
    source: b.source === "chat" ? "chat" : "form",
    page: clip(b.page),
  };
}

function leadEmailText(ref: string, lead: LeadPayload): string {
  const rows: [string, string | undefined][] = [
    ["Reference", ref],
    ["Name", lead.name],
    ["Email", lead.email],
    ["Phone", lead.phone],
    ["Company", lead.company],
    ["Services", lead.services?.join(", ")],
    ["Budget", lead.budget],
    ["Source", lead.source === "chat" ? "Chat widget" : "Contact form"],
    ["Page", lead.page],
  ];
  const fields = rows.filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`).join("\n");
  return lead.message ? `${fields}\n\nMessage:\n${lead.message}` : fields;
}

const newLeadRef = () => "WU-" + crypto.randomUUID().slice(0, 5).toUpperCase();

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  // Bots that fill the hidden honeypot get a normal-looking success and no email is sent.
  if (clip((body as Record<string, unknown> | null)?.website)) {
    console.warn("Lead dropped: honeypot filled");
    return Response.json({ id: newLeadRef() });
  }
  const lead = parseLead(body);
  if (!lead) return Response.json({ error: "Name and a valid email are required." }, { status: 400 });

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("RESEND_API_KEY is not set");

  const ref = newLeadRef();
  const { error } = await new Resend(apiKey).emails.send({
    from: LEAD_SENDER,
    to: LEAD_INBOX,
    replyTo: lead.email,
    subject: `New lead ${ref}: ${lead.name}${lead.company ? ` (${lead.company})` : ""}`,
    text: leadEmailText(ref, lead),
  });
  if (error) {
    console.error("Lead email failed", ref, error);
    return Response.json({ error: "Could not send the lead." }, { status: 502 });
  }
  return Response.json({ id: ref });
}
