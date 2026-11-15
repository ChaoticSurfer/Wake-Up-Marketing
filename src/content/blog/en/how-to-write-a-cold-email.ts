import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'how-to-write-a-cold-email',
  title: 'How to write a cold email: a short B2B structure and follow-up sequence',
  metaTitle: 'How to Write a Cold Email (B2B)',
  description:
    'How to write a cold email for B2B: one research line, one offer, one ask, a three-step follow-up sequence, plus notes for the Georgian market.',
  publishedAt: '2027-01-13T12:00:00+04:00',
  updatedAt: '2027-01-13T12:00:00+04:00',
  service: 'content',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To write a cold email, open with one specific line about the recipient’s company, state one offer in terms of their problem, and end with one easy question. Keep it to roughly 50 to 120 words, send it from a real person, add a clear way to opt out, and follow up two or three times with something new each time. A template is below.',
    },
    { type: 'h2', text: 'The structure: research line, offer, ask' },
    {
      type: 'p',
      text: 'Most guides land on the same three-part shape. [Woodpecker’s guide](https://www.woodpecker.co/blog/how-to-write-a-cold-email-that-actually-works/) tells you to begin with the recipient’s situation, choose one benefit connected to it, and use one call to action. [Demand Curve](https://demandcurve.com/blog/how-to-write-a-cold-email) recommends a similar flow and a subject line of 60 characters or less.',
    },
    {
      type: 'ol',
      items: [
        'Subject: short, specific, honest. Something like “Question about your Batumi branch hiring” is more specific than “Quick chat?”, and never use “Re:” when there was no earlier message.',
        'Research line: one fact you can verify about them - a new office, a job ad, a product launch, a post by their director. It proves the email was not sent to a list of thousands.',
        'Offer: one sentence linking that fact to a problem you solve, and one line of proof if you have it (a real result you can name).',
        'Ask: one small question that is easy to answer. “Would it be useful if I sent a two-page example?” is easier to answer than “Can we have a 30-minute call next week?”',
        'Signature: name, role, company, website, and a line saying how to stop receiving emails.',
      ],
    },
    { type: 'h2', text: 'A template you can adapt' },
    {
      type: 'p',
      text: 'Subject: Question about [specific thing at their company]',
    },
    {
      type: 'p',
      text: 'Hello [First name], I saw that [specific, verifiable observation]. Companies at that stage often [problem it usually creates]. We help with [one offer in plain words], and [one line of proof, only if true]. Would it be useful if I sent [small, free next step]? If not, tell me and I will not write again. [Name, role, company, website]',
    },
    {
      type: 'p',
      text: 'Do not stack offers. One email, one offer, one ask. If you have three services, pick the one that fits what you saw on their side and keep the others for the conversation.',
    },
    { type: 'h2', text: 'Length and personalisation' },
    {
      type: 'p',
      text: 'Guides differ on exact numbers: Demand Curve suggests around 80 to 120 words and five to seven sentences, while Woodpecker puts most first emails at 50 to 100 words and calls anything over 200 usually too demanding for a first contact. Treat both as ranges, not rules. Woodpecker also warns that first name, company and industry fields alone are not real personalisation; one genuine observation is. Useful places to find one are the company’s own website, job listings, LinkedIn posts and press releases.',
    },
    {
      type: 'p',
      text: 'AI can help you gather and draft, but a person must check each fact before sending, because a wrong detail in the opening line can end the conversation. See [ChatGPT for marketing](/blog/chatgpt-for-marketing) for what these tools do well.',
    },
    { type: 'h2', text: 'A follow-up sequence that adds something each time' },
    {
      type: 'p',
      text: 'One email rarely gets an answer. Woodpecker suggests two or three follow-ups for most B2B outreach, each adding something new instead of “just checking in”, in the same thread, and stopping as soon as the person replies. A workable sequence:',
    },
    {
      type: 'table',
      head: ['Step', 'When', 'What it adds'],
      rows: [
        ['Email 1', 'Day 0', 'Research line, offer, ask'],
        ['Follow-up 1', 'Day 3 to 4', 'Proof: a short real example or result'],
        ['Follow-up 2', 'Day 8 to 10', 'A different angle or a useful resource, such as a checklist'],
        ['Final note', 'Day 14 to 17', 'Ask whether to close the loop, and say you will stop'],
      ],
    },
    {
      type: 'p',
      text: 'The day gaps are a starting point, not a measured optimum. After the sequence ends, leave the person alone for a few months, and keep a list of anyone who said no or asked to stop.',
    },
    {
      type: 'p',
      text: 'Expect low reply rates. Woodpecker, a cold-email software vendor, reports an average cold email reply rate of around 3.4% in 2026; this is a vendor figure and your result will depend on list quality and offer. Judge the channel on meetings booked, not on opens. See [good email open rate](/blog/good-email-open-rate) for why opens are a weak measure.',
    },
    { type: 'h2', text: 'Opt-out and the rules' },
    {
      type: 'p',
      text: 'Cold B2B email is regulated in many countries, and the strictest regime that applies to your recipient should set your habits. The US CAN-SPAM guide from the FTC states that [“The law makes no exception for business-to-business email.”](https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business) It requires accurate sender information, a clear disclosure that the message is an advertisement, a valid postal address, and that you honour an opt-out request within 10 business days. Europe applies GDPR and ePrivacy rules, which can be stricter. Georgian rules on unsolicited commercial email should be checked with a lawyer for the markets and recipient types you target; until then, follow the CAN-SPAM habits above.',
    },
    {
      type: 'p',
      text: 'Practical rules: write to business addresses tied to the person’s role, send from your own domain and a real name, put an unsubscribe line in every email, honour it at once, and keep a suppression list so nobody on it is emailed again. Avoid bought lists, which are full of people with no connection to you; build lists from your own research instead.',
    },
    { type: 'h2', text: 'Georgian-market notes' },
    {
      type: 'p',
      text: 'These are practical judgments, not measured findings. First, many deals in Georgia start with a personal introduction, so a cold email works better when it names a shared contact, an event you both attended, or a post the person published. Where you have a mutual connection, ask for the introduction first; email second.',
    },
    {
      type: 'p',
      text: 'Second, choose the language by the person. Many managers read English comfortably, but a short Georgian email to a company that works in Georgian can feel more respectful. If you write in Georgian, have it written natively, not machine-translated; a stiff or awkward sentence in the first line does the damage you wanted to avoid. If unsure, send a short email in Georgian with an English line below, or check how the company writes on its website and LinkedIn page.',
    },
    {
      type: 'p',
      text: 'Third, the first meeting is often a call or a coffee rather than a demo, so make the ask a small conversation. For other channels that work better when a relationship already exists, see [LinkedIn lead generation](/blog/linkedin-lead-generation); for how outbound fits with content-led approaches, see [inbound vs outbound marketing](/blog/inbound-vs-outbound-marketing), and for who to contact at all, [how to qualify leads](/blog/how-to-qualify-leads).',
    },
    { type: 'h2', text: 'When to get help with the writing' },
    {
      type: 'p',
      text: 'The hard parts of cold email are the research and the wording in two languages. WakeUP’s [content creation](/services/content-creation) service includes copywriting in Georgian and English (captions, ad text and articles), and the [free marketing audit](/audit) is a way to see which channels to put effort into first. Building a list of people who want to hear from you is a longer game, covered in [how to build an email list](/blog/build-email-list).',
    },
  ],
}
