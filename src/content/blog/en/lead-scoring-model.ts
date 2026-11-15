import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'lead-scoring-model',
  title: 'Lead scoring model: how to build a simple points system',
  metaTitle: 'Lead Scoring Model: Build a Simple One',
  description:
    'Build a lead scoring model in a spreadsheet: fit points, engagement points, negative points and a threshold that tells sales when to call. With example.',
  publishedAt: '2027-01-05T15:00:00+04:00',
  updatedAt: '2027-01-05T15:00:00+04:00',
  service: 'automation',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'A lead scoring model gives every lead a number so your sales team knows who to call first. The simplest version has three parts: points for fit (who the lead is), points for engagement (what they did), and negative points for signs they will not buy. Add them up in a spreadsheet or CRM, and set one threshold that means "call today".',
    },
    { type: 'h2', text: 'What a lead score is for' },
    {
      type: 'p',
      text: 'Scoring answers one question: which enquiries deserve a person\'s time now? Without it, leads are worked in the order they arrive, or by whoever shouted loudest. HubSpot\'s documentation describes lead scores as ones that ["assign numerical scores to records based on property values and event actions important to you."](https://knowledge.hubspot.com/scoring/build-lead-scores) The property values are fit, the event actions are engagement.',
    },
    {
      type: 'p',
      text: 'Scoring is not the same as qualifying. [Qualifying a lead](/blog/how-to-qualify-leads) means asking about need, budget and timeline in a conversation. Scoring uses the data you already hold to decide who gets that conversation first, and it works best once you and sales agree on [what a qualified lead is](/blog/marketing-and-sales-alignment). It also does not replace [nurturing](/blog/lead-generation-vs-lead-nurturing); it tells you which leads to nurture and which to call.',
    },
    { type: 'h2', text: 'Before you set any points' },
    {
      type: 'ul',
      items: [
        'Collect the last 30 to 50 deals you won and a similar number of leads that went nowhere. Clay\'s [lead scoring guide](https://www.clay.com/guides/how-to-build-a-lead-scoring-model) recommends this comparison as the basis for weights. A company with few deals can start with fewer and say so.',
        'Look for what the winners share: company size, industry, role of the contact, how they found you, how fast they replied, what they asked for.',
        'Look for what the losers share: free email addresses, students, wrong city, no reply after the first call.',
        'Check that your form and CRM actually capture those fields. A rule you cannot fill from data is useless.',
      ],
    },
    { type: 'h2', text: 'Build the score in three columns' },
    {
      type: 'p',
      text: 'Set up a spreadsheet with one row per lead and three score columns: fit, engagement and negative. The total is their sum. Keep the table of rules on a second sheet so anyone can read and change it.',
    },
    {
      type: 'table',
      head: ['Type', 'Rule (example)', 'Points'],
      rows: [
        ['Fit', 'Company has 20 to 250 employees', '+20'],
        ['Fit', 'Contact is an owner, director or marketing/sales head', '+15'],
        ['Fit', 'Industry is one you have served or know well', '+10'],
        ['Engagement', 'Requested a call, quote or audit', '+30'],
        ['Engagement', 'Visited the pricing or service page twice or more', '+10'],
        ['Engagement', 'Opened or clicked three emails in 30 days', '+5'],
        ['Negative', 'Free email address with no company name', '-10'],
        ['Negative', 'Asked about jobs, internships or partnerships', '-30'],
        ['Negative', 'Outside the cities or countries you serve', '-20'],
        ['Negative', 'No activity in 60 days', '-15'],
      ],
    },
    {
      type: 'p',
      text: 'These numbers are an illustration, not a benchmark. Your own deals decide what is worth 10 and what is worth 30. Give the biggest weights to the signs that most clearly predict a sale, usually a direct request for a call or quote, and fit attributes such as company size and the contact\'s role.',
    },
    { type: 'h2', text: 'Add negative points and decay' },
    {
      type: 'p',
      text: 'Negative points keep a lot of clicking from hiding a poor fit. HubSpot\'s scoring tool lets each rule add or subtract points, and lets you cap the points a repeated event can add, so one person opening ten emails does not outrank a decision-maker who asked for a quote. It also offers optional decay, which reduces a score by a set percentage over a set period after the scored event. The same idea works by hand: in a spreadsheet, score engagement only from the last 60 or 90 days, and subtract points for silence.',
    },
    { type: 'h2', text: 'Set the threshold that triggers a call' },
    {
      type: 'p',
      text: 'A score is only useful when it leads to an action. Pick two cut-offs and write down what happens at each one.',
    },
    {
      type: 'table',
      head: ['Score', 'Label', 'Action'],
      rows: [
        ['60 and above', 'Hot', 'Sales calls within one working day'],
        ['30 to 59', 'Warm', 'Add to a nurturing sequence and re-score weekly'],
        ['Below 30', 'Cold', 'Newsletter only; no sales time'],
      ],
    },
    {
      type: 'p',
      text: 'A worked example: a marketing director at a 90-person company requests an audit (+20 +15 +30 = 65) and has viewed the service page twice (+10), so 75 and a call today. A visitor from a free email address with no company who opened three emails scores +5 -10, so below zero and stays on the newsletter. If your leads arrive through a form, the [landing page guide](/blog/lead-generation-landing-pages) covers which fields to ask for so that fit can be scored at all.',
    },
    { type: 'h2', text: 'Test it against closed deals' },
    {
      type: 'ol',
      items: [
        'Score your past won and lost leads with the new rules.',
        'Check where the won deals land. Most should be above the "hot" line, and most lost ones below it.',
        'If winners and losers overlap, change one weight at a time and re-score.',
        'Move the threshold to where the separation is clearest, not to a round number.',
        'After a month of live use, ask sales which "hot" leads were poor and which "cold" leads they would have called.',
      ],
    },
    {
      type: 'p',
      text: 'Clay\'s guide makes a point worth copying: early point values are guesses, and they should be checked against outcomes before you trust them. Mailchimp, in its [lead scoring models](https://mailchimp.com/resources/lead-scoring-models) guide, adds that lead scoring is "not a set-it-and-forget-it process". Put a review in the calendar for every quarter.',
    },
    { type: 'h2', text: 'Common mistakes' },
    {
      type: 'ul',
      items: [
        'Scoring only clicks and opens. Engagement without fit gives you busy people who never buy.',
        'Too many rules. Ten to fifteen rules a person can explain beat fifty nobody trusts.',
        'No owner. Name one person who changes the rules and records why.',
        'No feedback from sales. If they ignore the score, the model is wrong or they do not trust it; ask which.',
        'Sending messages to people who did not agree to receive them. Scoring is about prioritising your effort; marketing consent rules, such as those described in [lead generation vs lead nurturing](/blog/lead-generation-vs-lead-nurturing), still apply.',
      ],
    },
    { type: 'h2', text: 'From a spreadsheet to automation' },
    {
      type: 'p',
      text: 'Start in a spreadsheet for a month. Once the rules hold, move them into your CRM so scores update by themselves and a hot lead creates a task or a message to the salesperson. WakeUP\'s [AI automation and chatbot service](/services/ai-automation) covers lead qualification and routing to a CRM. To see where your current enquiries come from and where they stall before you set up scoring, ask for a [free marketing audit](/audit).',
    },
  ],
}
