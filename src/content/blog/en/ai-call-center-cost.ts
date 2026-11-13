import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'ai-call-center-cost',
  title: 'AI call center cost: how to compare it with a human team in Georgia',
  metaTitle: 'AI Call Center Cost vs a Human Team',
  description:
    'AI call center cost vs a human team in Georgia: the cost lines on each side, a worked example with labelled inputs, and where people are still needed.',
  publishedAt: '2026-11-13T17:00:00+04:00',
  updatedAt: '2026-11-13T17:00:00+04:00',
  service: 'calling',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'AI call center cost is mostly a per-minute fee plus a one-off set-up, while a human team costs salaries, taxes, training and extra people for every shift you want covered. The fair comparison is cost per handled call minute, including idle time and after-hours cover. Which side is cheaper depends on your call volume and on how many hours you need covered.',
    },
    {
      type: 'h2',
      text: 'The cost lines on each side',
    },
    {
      type: 'p',
      text: 'Most comparisons online jump straight to a savings percentage. For a business in Georgia it is more useful to list every line and fill in your own numbers. Here is what belongs on each side.',
    },
    {
      type: 'table',
      head: ['Cost line', 'Human call team', 'AI phone agent'],
      rows: [
        ['Pay', 'Gross salary of every agent, plus the employer-side taxes and contributions that apply', 'Per-minute fee for the minutes actually used'],
        ['Shifts and cover', 'More people for evenings, weekends, holidays, sick days and leave', 'Can answer outside office hours'],
        ['Peaks', 'Hire for the busiest hour, pay for idle time in the quiet ones', 'Can take several calls at once, depending on the provider, billed by use'],
        ['Hiring and training', 'Recruiting, onboarding, scripts, product training', 'Writing and testing the scripts and knowledge base'],
        ['Turnover', 'Replacing people and retraining them', 'None, but scripts need updates when prices or services change'],
        ['Equipment and space', 'Desks, headsets, phone lines, software licences', 'Phone number and telephony charges'],
        ['Set-up and integration', 'Mostly CRM access for new staff', 'Connecting the agent to your CRM, calendar and transfer numbers'],
        ['Supervision', 'Team lead, call listening, quality checks', 'Reviewing recordings and transcripts, tuning scripts'],
      ],
    },
    {
      type: 'p',
      text: 'For the per-minute side, including what telephony, speech and language-model charges add up to, see [our breakdown of AI voice agent cost](/blog/ai-voice-agent-cost). This article does not repeat it and focuses on how to set the two options side by side.',
    },
    {
      type: 'h2',
      text: 'What a Georgian wage figure tells you, and what it does not',
    },
    {
      type: 'p',
      text: 'The National Statistics Office of Georgia (Geostat) [reported](https://geostat.ge/media/80106/Average-Monthly-Nominal-Earnings-of-Employees---%28I-Quarter%2C-2026%29.pdf) in its release of 16 June 2026 that average monthly nominal earnings in Georgia were 2,363.8 GEL in the first quarter of 2026, 8.9 percent more than a year earlier. Treat that as a reference point only. It is an average across all sectors, not the going rate for a phone agent, and your own offers and Tbilisi versus regional pay will differ.',
    },
    {
      type: 'p',
      text: 'The same goes for taxes. Salary is withheld for income tax and pension contributions, and some contributions fall on the employer. We did not confirm the current rates from an official Revenue Service page for this article, so no percentages are quoted here. Ask your accountant for the total employer cost of one gross salary and use that number in your own comparison.',
    },
    {
      type: 'h2',
      text: 'A worked comparison with example inputs',
    },
    {
      type: 'p',
      text: 'The figures below are invented example inputs, not market prices and not a quote. Swap in your own. The point is the method.',
    },
    {
      type: 'ul',
      items: [
        'Volume: 1,500 calls a month, 3 minutes each, so 4,500 call minutes.',
        'One agent: 2,000 GEL gross salary, 160 paid hours a month, on the phone 60 percent of that time (96 hours, 5,760 minutes).',
        'Extra employer costs (taxes, training, equipment, supervision): 25 percent on top (a placeholder, not a tax rate), so 2,500 GEL per agent per month.',
        'AI agent: an example all-in rate of 0.30 GEL per call minute.',
      ],
    },
    {
      type: 'table',
      head: ['Scenario', 'Calculation', 'Monthly cost (example)'],
      rows: [
        ['One human agent, office hours only', '2,500 GEL per person, 5,760 minutes of capacity', '2,500 GEL, about 0.43 GEL per available minute'],
        ['Same volume, human cost per minute actually used', '2,500 GEL / 4,500 minutes', 'about 0.56 GEL per minute'],
        ['AI agent, same 4,500 minutes', '4,500 x 0.30 GEL', '1,350 GEL, plus set-up and monthly review'],
        ['One human phone line covered 24/7 (same 4,500 minutes, mostly idle)', '168 hours a week / 40 hours = 4.2, rounded up to 5 people x 2,500 GEL', '12,500 GEL'],
      ],
    },
    {
      type: 'p',
      text: 'Three things stand out. Your 4,500 minutes fill only 78 percent of one agent\'s 5,760 available minutes, and you cannot hire part of a person, so a human team pays for whole people and their idle time. The 24/7 row buys capacity, not extra calls, so most of that cost is idle time. Cost per used minute is higher than cost per available minute whenever agents are not on calls. And the jump to round-the-clock cover is large for people but small for AI. Notice also what the example leaves out: set-up, supervision time and any calls that still need a person.',
    },
    {
      type: 'h2',
      text: 'Why 24/7 cover changes the arithmetic',
    },
    {
      type: 'p',
      text: 'One phone line open all week is 168 hours. A full-time employee works about 40 of them, so a single always-answered line needs roughly four to five people once holidays and sick days are added. Most companies do not do this. They accept missed evening and weekend calls instead, which is a cost too: a lead who calls at 20:00 and reaches voicemail may call a competitor next. When you compare, put a value on those missed calls rather than treating them as free.',
    },
    {
      type: 'h2',
      text: 'Where AI works well and where people are still needed',
    },
    {
      type: 'p',
      text: 'AI phone agents suit calls that follow a pattern. [WakeUP\'s AI calling service](/services/ai-calling) is built around these jobs, in Georgian and English.',
    },
    {
      type: 'ul',
      items: [
        'Answering after hours and during peaks, so no call goes unanswered',
        'Calling back new leads from forms and ads within minutes, to qualify them and book a meeting',
        'Booking, rescheduling and reminders',
        'Frequently asked questions: opening hours, prices, address, availability',
        'Recording, transcribing and summarising each call into the CRM',
      ],
    },
    {
      type: 'p',
      text: 'People are still the better choice for angry or upset customers, complaints with unclear facts, large or unusual deals, negotiation, and any call where a mistake is expensive. The practical model is a hybrid: the AI agent takes the first call and the routine ones, and transfers to a person, or books a callback, when the caller asks or the topic needs judgement. Staff then spend their paid hours on the calls that need them, which reduces the idle time shown in the table.',
    },
    {
      type: 'h2',
      text: 'How to run the comparison for your business',
    },
    {
      type: 'ol',
      items: [
        'Count calls and minutes for a normal month, split by hour of day, and note how many go unanswered.',
        'Sort calls into routine (FAQs, bookings, lead call-backs) and judgement calls. Only the routine share is a candidate for AI.',
        'Get your accountant\'s total monthly employer cost for one agent, and your real occupancy figure from the phone system.',
        'Price the AI side from quotes: set-up, per-minute rate, integrations and review time. Prices change, so ask for them in writing.',
        'Add the value of calls you currently miss, then compare totals for a month and for a year.',
      ],
    },
    {
      type: 'p',
      text: 'If you want a second opinion on your call volume and which share suits automation, the [free audit](/audit) is the place to start. For the other channel, see [what an AI chatbot costs](/blog/ai-chatbot-cost), which uses the same cost-line approach.',
    },
  ],
}
