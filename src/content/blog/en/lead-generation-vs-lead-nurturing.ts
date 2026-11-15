import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'lead-generation-vs-lead-nurturing',
  title: 'Lead Generation vs Lead Nurturing: What Each Does and How to Use Both',
  metaTitle: 'Lead Generation vs Lead Nurturing',
  description:
    'Lead generation vs lead nurturing: one gets people to raise a hand, the other keeps them warm until they buy. How to run both in Georgia, with consent.',
  publishedAt: '2026-12-17T09:00:00+04:00',
  updatedAt: '2026-12-17T09:00:00+04:00',
  service: 'advertising',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Lead generation vs lead nurturing is a difference of job. Lead generation gets a stranger to leave their contact details. Lead nurturing is everything you do afterwards, with permission, to keep that person informed and ready until they are able to buy or you know they will not. You need both: generation without nurturing wastes the leads you paid for, and nurturing without generation has no one to talk to.',
    },
    { type: 'h2', text: 'What each one means' },
    {
      type: 'p',
      text: 'Lead generation is the work that produces new enquiries: ads, search, content, referrals, a form, a call or a message. Its output is a name and a way to reach the person. The channels are covered in [lead generation strategies](/blog/lead-generation-strategies), so this article does not repeat them.',
    },
    {
      type: 'p',
      text: 'Lead nurturing starts the moment a lead exists. It is the sequence of useful contacts between "I asked a question" and "I am ready to decide": an answer to the question they asked, a price explanation, a case-relevant example, a reminder before a quote expires, a call to check whether the timing has changed. Many leads are not ready the day they enquire. A company with a buying cycle of weeks or months, such as B2B services, clinics, education or construction, risks losing those leads if nobody follows up after the first reply.',
    },
    {
      type: 'p',
      text: 'Do not confuse either one with demand generation, which creates interest among people who have not yet raised a hand. That difference is explained in [lead generation vs demand generation](/blog/lead-generation-vs-demand-generation).',
    },
    { type: 'h2', text: 'Lead generation vs lead nurturing at a glance' },
    {
      type: 'table',
      head: ['', 'Lead generation', 'Lead nurturing'],
      rows: [
        ['Goal', 'Get new contacts who want to hear from you', 'Move existing contacts towards a decision'],
        ['Starts with', 'A stranger', 'A person who already gave you their details'],
        ['Typical tools', 'Ads, landing pages, SEO, forms, referrals', 'Replies, email, WhatsApp, calls, retargeting, content'],
        ['Main metric', 'Cost per lead, cost per qualified lead', 'Share of leads that reach a meeting, quote or sale; time to first reply'],
        ['Main risk', 'Cheap leads that never buy', 'Messaging people who did not agree to it'],
        ['Who owns it', 'Marketing (and the ad budget)', 'Shared: marketing builds the sequence, sales makes the calls'],
      ],
    },
    {
      type: 'p',
      text: 'The two share one weak point: the handover. If a lead from an ad waits two days for a first reply, no later nurturing fixes that. Treat the first answer as the first nurturing step, and measure the minutes between enquiry and reply for every channel. How marketing and sales share that handover is covered in [marketing and sales alignment](/blog/marketing-and-sales-alignment).',
    },
    { type: 'h2', text: 'Nurturing channels that fit companies in Georgia' },
    {
      type: 'p',
      text: 'Choose channels by where your leads already talk to you, not by what a US article lists. For a company of 20 to 250 people in Georgia, four channels cover most cases.',
    },
    {
      type: 'table',
      head: ['Channel', 'Works well for', 'Watch out for'],
      rows: [
        ['Email', 'B2B buyers, longer decisions, sending documents and offers', 'Needs consent to marketing messages; keep a clear unsubscribe'],
        ['WhatsApp', 'Customers who first wrote to you on WhatsApp or gave their number for it', 'Platform opt-in rules; outside a customer service window you can only send an approved template'],
        ['Retargeting ads', 'Visitors who saw a price page or started a form and left', 'Do not use it to chase people who asked you to stop'],
        ['Phone calls', 'High-value deals, quotes, booking a visit', 'A marketing call is also direct marketing under the personal data law'],
      ],
    },
    {
      type: 'p',
      text: 'WhatsApp deserves care because mistakes there are very visible to the customer. Meta\'s [WhatsApp Business Messaging Policy](https://whatsappbusiness.com/policy/) says: "You may only initiate conversations using an approved Message Template." Outside a customer service window, as Meta\'s [template documentation](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview) puts it, "Template messages are the only type of message that can be sent to WhatsApp users outside of a customer service window." Each template is categorised as authentication, marketing or utility, so a promotional follow-up must be sent as a marketing template, not disguised as a utility one. The same policy requires that you have received opt-in permission from the person confirming that they wish to receive subsequent messages, and that you honour requests to opt out. Policies change, so check the current text before you build a flow. For the automated side of chat, see [AI chatbot benefits](/blog/ai-chatbot-benefits).',
    },
    {
      type: 'p',
      text: 'Retargeting is the quietest nurturing channel. Google Ads Help describes the idea as using your own data to [re-engage people who have previously interacted with your brand](https://support.google.com/google-ads/answer/2453998), and Meta offers custom audiences for similar purposes. Useful sequences are short: show a visitor the answer to the objection that usually stops buyers, then a clear offer such as a quote or consultation. The [Advertising service](/services/advertising) covers Meta and Google campaigns, including remarketing on Google, and conversion tracking.',
    },
    { type: 'h2', text: 'Consent under Georgia\'s personal data law' },
    {
      type: 'p',
      text: 'Nurturing is where companies most often cross a legal line, because the contact details are already in your CRM and sending a message feels harmless. The Law of Georgia on Personal Data Protection treats it as direct marketing. This is a plain-language reading of the English consolidated text on [matsne.gov.ge](https://matsne.gov.ge/en/document/view/5827307), not legal advice, and the law has been amended since it was passed, so have a lawyer confirm the current wording for your case.',
    },
    {
      type: 'ul',
      items: [
        'What counts: Article 3(y) defines direct marketing as the direct and immediate delivery of information to a person "by telephone, mail, email or other electronic means" to generate and maintain interest in, or sell, a product or service. That covers emails, messenger messages and marketing calls.',
        'Consent first: Article 12 says that, irrespective of how you obtained the data, it may only be processed for direct marketing with the person\'s consent. A number you found, bought or were given for another purpose is not enough on its own.',
        'Beyond basic contact data: for data other than name, surname, address, telephone number and email address (for example purchase history or interests used to personalise a message), the law asks for written consent.',
        'Tell people how to leave: before you collect consent and during the marketing, you must explain in clear, simple language that they can withdraw consent at any time and how.',
        'Stopping on request: you must end the processing within a reasonable period after a request, and no later than 7 working days. The way to opt out must be simple, usually through the same channel as the marketing (for example replying STOP to a message or an unsubscribe link in an email), and no fee may be charged for it.',
        'Proof and records: the burden of proof for consent lies with the company. Keep the date and fact of each consent and each withdrawal for as long as the marketing continues and for 1 year after it ends.',
      ],
    },
    {
      type: 'p',
      text: 'In practice this means an unticked checkbox on every form ("I agree to receive offers by email and WhatsApp"), stored with a timestamp and the page it came from, and a separate line for phone contact if your sales team will call. Whether a bare enquiry ("please call me") also allows later marketing messages is a question for your lawyer; the safe route is to answer the enquiry, ask for consent to further contact, and record the answer. Service messages about an order someone placed are a different matter from promotional follow-up.',
    },
    { type: 'h2', text: 'A simple nurturing sequence to start with' },
    {
      type: 'ol',
      items: [
        'Minute 0 to 60: answer what the person asked, by the channel they used, with a real person or a clearly labelled assistant.',
        'Same day: ask one qualifying question (budget range, timing, size) and, if appropriate, ask for consent to send offers.',
        'Day 2 to 3: send one useful piece that fits their question, such as a price explanation or a checklist. Not a brochure.',
        'Day 7: a call or message from sales to ask whether anything has changed, and offer a next step.',
        'Day 14 onward: only to people who agreed. A monthly note or a retargeting ad with a specific offer. Remove anyone who opts out the same day.',
      ],
    },
    {
      type: 'p',
      text: 'These intervals are a starting point, not a rule. Shorten them for urgent purchases such as a booking and lengthen them where decisions take months. The landing page that feeds this sequence matters too; see [lead generation landing pages](/blog/lead-generation-landing-pages) for what to put on it.',
    },
    { type: 'h2', text: 'Which to fix first and what to measure' },
    {
      type: 'p',
      text: 'If you pay for leads and fewer than half get a reply within a day, fix nurturing first, because those leads are already paid for. If your leads are well handled but there are too few, fix generation. Track three numbers per source: the share of leads contacted within one day, the share that reach a quote or meeting, and the share that become customers. Without the source recorded in your CRM, you cannot tell a good ad from a good follow-up.',
    },
    {
      type: 'p',
      text: 'If you are unsure where the leak is, the free [marketing audit](/audit) looks at your ads, your website and what happens to a lead after it arrives, and returns three changes within one business day.',
    },
  ],
}
