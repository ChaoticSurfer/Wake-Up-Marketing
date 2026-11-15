import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'build-email-list',
  title: 'How to build an email list for a small business, with consent',
  metaTitle: 'How to Build an Email List for Business',
  description:
    'How to build an email list for a small business: offer a clear reason to sign up, collect at your website, shop and social pages, and get consent first.',
  publishedAt: '2027-01-01T12:00:00+04:00',
  updatedAt: '2027-01-01T12:00:00+04:00',
  service: 'automation',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To build an email list for a small business, give people a specific reason to hand over their address (a lead magnet, a discount, a useful guide), put a simple sign-up form wherever they already meet you (your website, your shop, your social profiles), and record clear consent for each address. Start with the people you already deal with, because they are the quickest to join. This article covers collecting addresses only; writing and sending emails is a separate job.',
    },
    { type: 'h2', text: 'Start with consent, not with the form' },
    {
      type: 'p',
      text: 'In Georgia, the Law on Personal Data Protection decides how you may use an address for marketing. Its Article 12 says that [“data may only be processed for direct marketing purposes with the consent of the data subject”](https://matsne.gov.ge/en/document/view/5827307). The same article requires you to tell people, before you obtain consent and while you market to them, that they can withdraw it at any time, in clear and simple language. When someone asks you to stop, processing must end within a reasonable period and [no later than 7 working days](https://matsne.gov.ge/en/document/view/5827307). The law was issued on 14 June 2023; read the current text or ask a lawyer about your case, because this article is not legal advice, and if you also collect addresses from people in the EU, other rules may apply.',
    },
    {
      type: 'p',
      text: 'In practice this gives you four habits:',
    },
    {
      type: 'ul',
      items: [
        'Use an unticked checkbox or an explicit sign-up button next to a sentence that says what the person will receive and how often, for example "Monthly tips and offers from [company]. Unsubscribe at any time."',
        'Keep a record of who agreed, when and through which form, so that you can show consent later.',
        'Put an unsubscribe link in every email and act on it quickly.',
        'Never add people because you have their card, found their address online or bought a list. Buying or scraping lists is one of the mistakes HoneyBook lists in its own [email list building guide](https://www.honeybook.com/blog/email-list-building), and a purchased list also has no consent behind it.',
      ],
    },
    {
      type: 'p',
      text: 'Google applies the same logic to mail that reaches Gmail inboxes. Its sender guidelines tell you to [“Make sure recipients opt in to get messages from you”](https://support.google.com/a/answer/81126) and to confirm each address before subscribing it. The confirmation step is called double opt-in; Mailchimp describes it as [“an extra confirmation step that checks each email address or phone number”](https://mailchimp.com/help/about-double-opt-in/), so a typo cannot subscribe a stranger.',
    },
    { type: 'h2', text: 'Give people a reason to sign up' },
    {
      type: 'p',
      text: 'Few people join a list because "newsletter" sounds attractive. They join for something specific. A lead magnet is a small free item offered in exchange for an address, and the best ones solve one narrow problem fast. The examples below are illustrations of the idea for typical Georgian businesses, not results from any client.',
    },
    {
      type: 'table',
      head: ['Business', 'Lead magnet idea', 'Why it works'],
      rows: [
        ['Dental or medical clinic', 'A one-page checklist for what to prepare before a first visit', 'Answers the question patients already have'],
        ['Language school or training centre', 'A short placement quiz with the result sent by email', 'Gives a personal result and reveals the learner\'s level'],
        ['Accounting or legal firm', 'A calendar of tax and reporting deadlines for the year', 'Useful all year and easy to forward'],
        ['Restaurant, cafe or shop', 'A welcome discount or a first-access list for new menus and sales', 'The reward is immediate and is used in person'],
        ['Real estate or construction', 'A buyer\'s checklist for inspecting an apartment', 'Meets a decision buyers are worried about'],
        ['B2B services', 'A template or calculator the buyer would otherwise build in a spreadsheet', 'Shows competence before the first call'],
      ],
    },
    {
      type: 'p',
      text: 'HoneyBook lists [ebooks, document templates, educational videos and product samples](https://www.honeybook.com/blog/email-list-building) as lead magnet formats. Pick the one you can produce well in a day, and promise only what it contains: vcita warns that if you do not keep your promises, [subscribers may opt out or mark your emails as spam](https://www.vcita.com/blog/small-business-marketing/how-to-build-an-email-list-for-small-businesses). A short video also works as a lead magnet; see [video marketing for small business](/blog/video-marketing-for-small-business) for ideas.',
    },
    { type: 'h2', text: 'Where to collect addresses' },
    {
      type: 'p',
      text: 'On your website: put one form in the places visitors already read: the end of useful articles, the footer and a dedicated page for the lead magnet. Ask for as little as possible, usually a first name and an email address. The same rules for forms that convert apply here, so read [lead generation landing pages](/blog/lead-generation-landing-pages) and [website conversion rate optimization](/blog/website-conversion-rate-optimization) for field count, button wording and mobile layout. Pop-ups can work if they appear for a reason; vcita suggests using them [selectively, matched to why a visitor is on the page](https://www.vcita.com/blog/small-business-marketing/how-to-build-an-email-list-for-small-businesses).',
    },
    {
      type: 'p',
      text: 'In your shop, office or at events: offline collection is easy to forget. Use a tablet or a QR code at the till or reception that opens the same sign-up page, and give the reason on the spot (a welcome discount, the checklist sent to your phone). Campaign Monitor describes asking for addresses [at the point of sale](https://www.campaignmonitor.com/blog/email-marketing/how-to-grow-your-email-list-for-small-businesses), and vcita suggests offline sign-up sheets at stores and events. A paper sheet needs the same consent line as an online form, and someone must type the addresses in correctly, so a QR code is usually cleaner.',
    },
    {
      type: 'p',
      text: 'On social media and in messages: followers belong to the platform, while a list belongs to you. Put the sign-up page in your bio and link it from posts that mention the lead magnet, with a line saying what the person gets. If customers already write to you in Messenger, Instagram or WhatsApp, offer the item there too and ask for the email address in the reply. If you run paid campaigns, point them at the same landing page instead of a general home page; [lead generation strategies for a small business](/blog/lead-generation-strategies) compares the channels.',
    },
    { type: 'h2', text: 'Make the first month of the list work' },
    {
      type: 'ol',
      items: [
        'Write the consent sentence and the lead magnet promise in one line each.',
        'Build one sign-up page and connect the form to a tool that stores the date and the form source with each address.',
        'Add the same form to the website footer, one article and one QR code in your shop or office.',
        'Invite existing customers who have agreed to hear from you; do not import everyone from your phone contacts.',
        'Send the lead magnet automatically within minutes of sign-up, then a short welcome message.',
        'Count new subscribers per source each week. Drop the sources that bring nobody.',
      ],
    },
    {
      type: 'p',
      text: 'Keep the list clean as it grows. Remove bounced and typo addresses, and take out people who never open your emails. If sign-ups also arrive as phone enquiries, decide how a person gets a reply and how a lead is qualified; [how to qualify leads](/blog/how-to-qualify-leads) covers that step.',
    },
    { type: 'h2', text: 'When to automate it' },
    {
      type: 'p',
      text: 'Once forms, shop QR codes and messages all produce sign-ups, copying them by hand into one place becomes the weak link. WakeUP sets up automatic lead routing to a CRM, email or team chat and follow-up automations; see the [AI automation service](/services/ai-automation). If you are not sure whether your site, forms and follow-up are ready to collect addresses, the [free marketing audit](/audit) reviews them.',
    },
  ],
}
