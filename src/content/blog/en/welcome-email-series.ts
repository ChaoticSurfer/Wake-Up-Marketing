import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'welcome-email-series',
  title: 'Welcome Email Series: A 5-Email First-Week Plan for Small Businesses',
  metaTitle: 'Welcome Email Series: 5-Email Plan',
  description:
    'A welcome email series for a small business: five emails in the first week, when to send each, what to write and how to keep it deliverable.',
  publishedAt: '2027-01-17T15:00:00+04:00',
  updatedAt: '2027-01-17T15:00:00+04:00',
  service: 'automation',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'A good welcome email series for a small business is three to five emails sent over the first week after someone signs up: one immediately, one a day later, then one every one to two days. Each email does one job - confirm and deliver what was promised, introduce you, show proof, answer the main doubt, then make one clear offer. The plan below gives the timing and a copy outline for each.',
    },
    { type: 'h2', text: 'What a welcome series is and how many emails to send' },
    {
      type: 'p',
      text: 'A welcome series is a short run of automatic emails that starts when a person joins your list: a newsletter signup, a downloaded guide, a first purchase or an enquiry. It matters because the person has just shown interest and is paying more attention than they will in a month. Yet many companies skip it. ActiveCampaign, citing the Ciceron "First Impressions Email Marketing Study", reports that [only 39% of brands send a welcome email](https://activecampaign.com/blog/welcome-email-series).',
    },
    {
      type: 'p',
      text: 'On length, two vendor guides broadly agree. AWeber says [most small businesses should send a series of three to five emails over the first week](https://blog.aweber.com/learn/welcome-email-campaigns.htm). ActiveCampaign suggests four to six emails and calls one a day a perfectly fine rule of thumb, while warning that gaps of around four days feel disconnected. These are vendor recommendations, not measured laws, so treat them as a sensible starting point and adjust to your own results.',
    },
    {
      type: 'p',
      text: 'This series is different from a sales sequence for people who already enquired. For that, see [lead generation vs lead nurturing](/blog/lead-generation-vs-lead-nurturing). A welcome series comes first and is gentler: it earns the right to be read.',
    },
    { type: 'h2', text: 'The five-email plan' },
    {
      type: 'table',
      head: ['Email', 'When to send', 'Job', 'One call to action'],
      rows: [
        ['1. Welcome and delivery', 'Immediately after signup', 'Confirm they are in, deliver what you promised (guide, discount, confirmation)', 'Use the thing you just gave them'],
        ['2. Who we are', '24 hours later', 'Say who you are, what you do and who you do it for, in plain words', 'Reply with one question about their situation'],
        ['3. Proof', '48 hours after signup', 'Show one real result, review or before-and-after that you have permission to use', 'Read the full story or see the work'],
        ['4. Answer the main doubt', 'Day 4', 'Take the one objection you hear most (price, timing, trust) and answer it honestly', 'Book a call or ask a question'],
        ['5. The offer', 'Day 6 or 7', 'Make one specific offer with a clear next step and a reason to act now, if it is true', 'Buy, book or request a quote'],
      ],
    },
    {
      type: 'p',
      text: 'The first three timings follow the AWeber framework (immediately, 24 hours, 48 hours). Emails 4 and 5 use a suggested spacing for a one-week series, not a figure from either vendor. If your sale takes longer, such as B2B services or a high-value purchase, stretch emails 4 and 5 and do not push the offer before the person knows who you are.',
    },
    { type: 'h2', text: 'What to write in each email' },
    {
      type: 'ol',
      items: [
        'Welcome and delivery: open with the thing they came for, not your history. If you promised a guide, the link is on the first screen. Say how often you will write and about what, and ask them to reply to the address.',
        'Who we are: three or four sentences on what you do, who it is for and where you are based, plus one detail that makes you a real company. Use only facts you can stand behind. End with a question the reader can answer in one line.',
        'Proof: one customer story, review or example of work in a few lines - the problem, what was done, the result. Use only results and names you have permission to share; with no case yet, show how you work instead of inventing one.',
        'Answer the main doubt: take the question your calls or messages hear most often and answer it directly, including the unflattering part. Keep it readable on a phone in a minute and offer a conversation, not a pitch.',
        'The offer: one offer, one button. Say what happens after the click and what it costs in time or money. A deadline must be real. After this email, move the person to your regular newsletter and stop the series.',
      ],
    },
    { type: 'h2', text: 'Sender name and subject lines' },
    {
      type: 'p',
      text: 'Send from a person or a recognisable brand name, not from "noreply". Keep subject lines plain and specific, and write them in the language your list reads. For a Georgian audience that usually means a Georgian subject and body, with Latin script only for names such as Google or WhatsApp. A subject like "Your guide is inside" does more than a clever one that hides the content. Testing two subject lines on email 1 only makes sense once enough people sign up for the difference to be more than chance.',
    },
    { type: 'h2', text: 'Consent, unsubscribe and delivery basics' },
    {
      type: 'p',
      text: 'Send the series only to people who agreed to hear from you, and say so on the signup form. A welcome email is only welcome if the person remembers signing up. Put a clearly visible unsubscribe link in every email.',
    },
    {
      type: 'p',
      text: 'If you send in volume to Gmail addresses, Google sets technical rules. For senders of more than 5,000 messages a day to Gmail accounts, Google’s sender guidelines say marketing messages must [support one-click unsubscribe and include a clearly visible unsubscribe link](https://support.google.com/a/answer/81126), spam rates in Postmaster Tools must stay below 0.30%, and the domain needs SPF, DKIM and DMARC authentication. Most small companies send far less than that, but setting up authentication on your sending domain is cheap and protects your welcome emails from landing in spam.',
    },
    { type: 'h2', text: 'Check the results after week one' },
    {
      type: 'ul',
      items: [
        'Open and click rates for each email: a sharp drop at one email shows where interest ends.',
        'Replies: count them, since each one is a person who read the email and answered.',
        'Unsubscribes and spam complaints after each email: a spike points to a mismatch between the signup promise and the content.',
        'Conversions from email 5, tracked with a tagged link, so you know whether the series earns its keep.',
      ],
    },
    {
      type: 'p',
      text: 'Once the series works, the same logic can run on its own for every new signup. Setting up the trigger, the sending schedule and the handover of replies to your team is automation work: see [AI automation and chatbots](/services/ai-automation) for what WakeUP builds, or request a [free marketing audit](/audit) to see where a welcome flow would help most. The page that collects the signup matters just as much, and [landing pages for lead generation](/blog/lead-generation-landing-pages) covers it. How marketing hands warm contacts to sales is in [marketing and sales alignment](/blog/marketing-and-sales-alignment).',
    },
  ],
}
