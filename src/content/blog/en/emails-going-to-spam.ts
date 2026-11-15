import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'emails-going-to-spam',
  title: 'Why do my emails go to spam? Fixing SPF, DKIM, DMARC and sender reputation',
  metaTitle: 'Why Do My Emails Go to Spam?',
  description:
    'Why do my emails go to spam? Usually missing SPF, DKIM or DMARC records, a poor sender reputation or a weak list. Here is how to check and fix each one.',
  publishedAt: '2027-02-21T15:00:00+04:00',
  updatedAt: '2027-02-21T15:00:00+04:00',
  service: 'websites',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Emails from a company domain go to spam for three main reasons: the domain is not authenticated with SPF, DKIM and DMARC records, the sending domain or IP has a poor reputation, or recipients mark the messages as spam. Check authentication first, because it is the quickest to fix and the easiest to verify. Then look at your list and your content.',
    },
    { type: 'h2', text: 'Start by finding out which of the three problems you have' },
    {
      type: 'p',
      text: 'Send a test message from the affected address to a Gmail account you control, open it, choose "Show original" and look at the authentication results for SPF, DKIM and DMARC. Google\'s guide to [fixing spam problems](https://support.google.com/mail/answer/81126) says unauthenticated messages "might be marked as spam" or rejected with a 5.7.26 error, so a fail or "none" there is your first lead. If all three pass and mail still lands in spam, the cause is reputation or content.',
    },
    {
      type: 'table',
      head: ['Symptom', 'Likely cause', 'Where to look'],
      rows: [
        ['Everything from your domain goes to spam, even one-to-one replies', 'Missing or broken authentication', 'The message headers; your DNS records'],
        ['Mail was fine, then dropped after a newsletter or bulk send', 'Complaints or a bad list', 'Spam rate in Google Postmaster Tools; your list source'],
        ['Only mail from the website contact form is lost', 'The form sends from an unauthenticated server', 'The form plugin\'s mail settings'],
        ['A new domain, new mailbox, no history', 'No reputation yet', 'Volume and consistency over the first weeks'],
      ],
    },
    { type: 'h2', text: 'SPF, DKIM and DMARC: what each one does' },
    {
      type: 'p',
      text: 'All three are records that sit in your domain\'s DNS settings, the same place you manage the records covered in [domain vs hosting](/blog/domain-vs-hosting). They prove to the receiving server that mail claiming to be from your domain really is.',
    },
    {
      type: 'ul',
      items: [
        'SPF lists the servers allowed to send mail for your domain.',
        'DKIM adds a signature to each message that the receiver checks against a public key in your DNS.',
        'DMARC tells receivers what to do when a message fails both checks, and sends you reports about it.',
      ],
    },
    {
      type: 'p',
      text: 'Google\'s [sender guidelines](https://support.google.com/a/answer/81126) set the minimum. Every sender must "Set up SPF or DKIM email authentication for your sending domains", use a TLS connection and keep reported spam rates below 0.3%. A sender of more than 5,000 messages a day to Gmail accounts must also set up DMARC and make sure the domain in the From header is aligned with the SPF or DKIM domain, and marketing messages must support one-click unsubscribe. A company with 20 to 250 people usually sends far less than 5,000 a day, but receivers apply the same checks to everyone, so set up all three anyway.',
    },
    { type: 'h2', text: 'How to set them up' },
    {
      type: 'p',
      text: 'The exact steps depend on who hosts your mailboxes. The examples below are from Google Workspace; Microsoft 365 and other providers publish their own versions, and their values differ.',
    },
    {
      type: 'ol',
      items: [
        'SPF. Add a TXT record at your DNS host. For Google Workspace only, [Google\'s SPF guide](https://knowledge.workspace.google.com/admin/security/set-up-spf) gives the value "v=spf1 include:_spf.google.com ~all". If you also send through a newsletter tool, a CRM or your website, those services must be in the same record: Google tells senders to make sure the record includes every service that sends mail for the domain. The guide notes an SPF record can hold up to 10 include tags, and that changes can take up to two days.',
        'DKIM. In Google Workspace you generate a key in the Admin console, then add a TXT record named with your selector followed by "._domainkey". [Google recommends](https://knowledge.workspace.google.com/admin/security/set-up-dkim) 2048-bit keys if your DNS host supports them, says the record may take up to 48 hours to work, and you must then click "Start authentication". Repeat the setup for each service that sends mail as your domain.',
        'DMARC. Start with a monitoring policy. [Google\'s DMARC guide](https://knowledge.workspace.google.com/admin/security/set-up-dmarc) recommends setting the policy (p) to none when you begin, adding a reporting address with the rua tag, and tightening to quarantine or reject once you have confirmed that all your legitimate mail passes. A message passes DMARC if it passes either SPF or DKIM with alignment.',
        'Check again. Send a fresh test message and confirm all three show as pass before you change anything else.',
      ],
    },
    {
      type: 'p',
      text: 'Do not jump straight to a reject policy. If a tool you forgot about sends invoices or form notifications as your domain, a strict policy will block it. The reports from the monitoring stage are how you find those senders.',
    },
    { type: 'h2', text: 'Sender reputation: the part you cannot configure' },
    {
      type: 'p',
      text: 'Authentication proves who you are. Reputation decides whether receivers like what you send. For Gmail, the signal is the share of recipients who mark your mail as spam. Google\'s guidelines say to "Keep spam rates reported in Postmaster Tools below 0.10% and avoid ever reaching a spam rate of 0.30% or higher." In other words, about one complaint per thousand messages is already the target ceiling.',
    },
    {
      type: 'ul',
      items: [
        'Set up Google Postmaster Tools for your sending domain to see the spam rate, authentication status and domain reputation. Google recommends it for getting information about the mail you send to Gmail users.',
        'Send consistently. Google\'s advice is to increase sending volume slowly, send at a consistent rate and avoid bursts. A brand-new mailbox that suddenly sends hundreds of messages looks like abuse.',
        'Use your own domain. Google also says not to use an @gmail.com address as the display name for bulk email, because that counts as spoofing.',
        'Watch shared IPs. If your provider sends your mail from a shared IP, other senders on it affect your reputation.',
      ],
    },
    { type: 'h2', text: 'List hygiene and content' },
    {
      type: 'p',
      text: 'Most complaint spikes trace back to who is on the list. Google\'s guidance for senders is to send only to people who opted in, confirm addresses before subscribing them, avoid pre-checked opt-in boxes and never buy email lists. It also suggests considering unsubscribing recipients who never open or read your messages. How to collect a good list is covered in [how to build an email list](/blog/build-email-list), and what to send first in the [welcome email series](/blog/welcome-email-series). If your open rates look low, [what a good email open rate is](/blog/good-email-open-rate) will help you read them.',
    },
    {
      type: 'p',
      text: 'Content matters less than authentication and list quality, but Google lists several things to avoid: misleading subjects or fake "Re:" and "Fwd:" prefixes, emojis or symbols imitating graphics, content hidden with HTML or CSS, and unclear links. Cold outreach has extra rules and risks; see [how to write a cold email](/blog/how-to-write-a-cold-email).',
    },
    { type: 'h2', text: 'If the problem is your website\'s forms' },
    {
      type: 'p',
      text: 'A common pattern is that staff email is fine but notifications from the website\'s contact form go to spam or vanish. The form is often sending as your domain from the web server, which is not listed in SPF and has no DKIM signature. The usual fix is to send form email through your mail provider or a transactional email service, with that service added to SPF and DKIM. Our guide to [contact form best practices](/blog/contact-form-best-practices) covers what the form itself should do, including a confirmation so no lead is silently lost.',
    },
    {
      type: 'p',
      text: 'WakeUP builds premium, complex websites and landing pages, and the form-to-inbox path is part of what has to work; see the [website development service](/services/website-development). If you are not sure where your leads are going, the [free marketing audit](/audit) looks at the path from enquiry to your sales process.',
    },
  ],
}
