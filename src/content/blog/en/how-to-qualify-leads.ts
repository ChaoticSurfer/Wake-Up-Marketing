import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'how-to-qualify-leads',
  title: 'How to qualify leads: a step-by-step method for growing companies',
  metaTitle: 'How to Qualify Leads Step by Step',
  description:
    'How to qualify leads in four steps: check fit with your ideal customer, ask BANT-style questions, add a qualifying form, then decide who gets a call.',
  publishedAt: '2026-12-28T15:00:00+04:00',
  updatedAt: '2026-12-28T15:00:00+04:00',
  service: 'automation',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To qualify leads, first check whether the enquiry fits your ideal customer profile, then ask a few questions about budget, decision-making, need and timing, and then decide: book a call, nurture, or politely decline. Put the first screen on your enquiry form so every request is sorted before a salesperson spends time on it. The steps below turn this into a routine for a company of 20 to 250 people.',
    },
    { type: 'h2', text: 'What lead qualification is' },
    {
      type: 'p',
      text: 'Pipedrive defines it as "the process of confirming a buyer has the fit, intent, authority and timing" in its [lead qualification guide](https://www.pipedrive.com/en/blog/lead-qualification). In practice it is a filter between "someone sent a message" and "a salesperson books a meeting".',
    },
    {
      type: 'p',
      text: 'CRMs name the stages along that path. HubSpot\'s [lifecycle stage documentation](https://knowledge.hubspot.com/records/use-lifecycle-stages) defines a marketing qualified lead as "a contact or company that your marketing team has qualified as ready for the sales team", and a sales qualified lead as one "that your sales team has qualified as a potential customer." Agreeing who owns each stage and how the handover works is a separate job, covered in [marketing and sales alignment](/blog/marketing-and-sales-alignment). This post is about the questions that decide which stage a lead reaches.',
    },
    { type: 'h2', text: 'Step 1: Write down your ideal customer profile' },
    {
      type: 'p',
      text: 'You cannot judge fit without a description of a good customer. Pipedrive suggests building it from your best existing customers and asking how they found you, what motivated the purchase, what keeps them buying and what traits they share. For a company in Georgia, a one-page profile usually needs:',
    },
    {
      type: 'ul',
      items: [
        'Company type and size: for example, businesses with 20 to 250 employees in Tbilisi, Batumi or Kutaisi.',
        'The problem you solve, in the words customers use.',
        'Who buys: owner, marketing manager, procurement, and who must approve.',
        'Typical deal size and the smallest project you will take.',
        'Clear mismatches: sectors you do not serve, or jobs you cannot deliver.',
      ],
    },
    {
      type: 'p',
      text: 'Calendly\'s [qualification guide](https://calendly.com/blog/how-to-qualify-leads-in-sales.html) lists reasons to disqualify, including a company that does not match the ideal customer profile (its example is one too small for an enterprise product), a pain point your product cannot address, and a lead who will not commit to a budget even after seeing the value. Turn those into your own list of "no" signals before the first call.',
    },
    { type: 'h2', text: 'Step 2: Ask BANT-style questions' },
    {
      type: 'p',
      text: 'BANT stands for budget, authority, need and timeline. Pipedrive calls BANT "the original framework", still "a strong choice for high-volume SMB sales with short cycles and transactional deals", and says it "works best as a conversation guide" rather than a four-box checklist. Do not read it like an interrogation. Use the questions below in a natural order and note the answers in your CRM.',
    },
    {
      type: 'table',
      head: ['BANT element', 'Question to ask', 'What a good answer sounds like'],
      rows: [
        ['Need', 'What problem are you trying to solve, and what happens if it stays unsolved?', 'Specific, and tied to a result such as more enquiries or fewer manual hours'],
        ['Timeline', 'When would you like this to be live?', 'A date or event, not "sometime"'],
        ['Budget', 'Have you set aside a budget, or a range you are comfortable with?', 'A range, or a clear way the budget will be decided'],
        ['Authority', 'Who else is involved in the decision?', 'The person speaking decides, or can name who does'],
      ],
    },
    {
      type: 'p',
      text: 'Ask about need first. People answer questions about their problem easily and it makes the budget question feel natural. A lead with a real need, a vague budget and a firm deadline is usually worth a call. A lead with a vague need and no timeline belongs in nurturing, which [lead generation vs lead nurturing](/blog/lead-generation-vs-lead-nurturing) explains.',
    },
    { type: 'h2', text: 'Step 3: Build qualifying questions into the form' },
    {
      type: 'p',
      text: 'Calendly suggests placing qualifying questions on a form connected to scheduling, so that only well-matched leads can book a meeting. You can use the same idea without a scheduling tool: add three or four fields to the enquiry form and read them before replying. A short set might be:',
    },
    {
      type: 'ol',
      items: [
        'What do you need help with? (a short choice list plus a free-text box)',
        'Company size: dropdown with ranges.',
        'When do you want to start? (this month, next quarter, just exploring)',
        'Approximate budget range, with "not sure yet" as an option.',
      ],
    },
    {
      type: 'p',
      text: 'Every extra field is one more thing for a visitor to fill in, so keep the list short and ask the rest on the call. The form itself is part of the landing page; see [lead generation landing pages](/blog/lead-generation-landing-pages) for form length and layout. Allow "not sure yet" answers, because forcing a number produces made-up numbers.',
    },
    { type: 'h2', text: 'Step 4: Score, then decide' },
    {
      type: 'p',
      text: 'Pipedrive describes scoring on two layers: fit (who they are) and behaviour (how ready they are to buy). A simple version for a small team is a three-level rule:',
    },
    {
      type: 'table',
      head: ['Outcome', 'When', 'Action'],
      rows: [
        ['Book a call', 'Fits the profile, has a clear need and a timeline within about three months', 'Reply the same working day and offer times'],
        ['Nurture', 'Fits the profile, but no timeline or budget yet', 'Add to a follow-up sequence and re-check in a few weeks'],
        ['Decline politely', 'Outside the profile, or the problem is one you cannot solve', 'Say so, and suggest an alternative if you know one'],
      ],
    },
    {
      type: 'p',
      text: 'Write the rule down and note the reason for every declined or lost lead in the CRM. After a few months those reasons show whether the profile is wrong or the advertising is attracting the wrong people. Cost per qualified lead then becomes a number you can track, as described in [lead generation strategies](/blog/lead-generation-strategies).',
    },
    { type: 'h2', text: 'When BANT is not enough' },
    {
      type: 'p',
      text: 'Pipedrive lists other frameworks for other situations: CHAMP starts from the prospect\'s challenges and suits outbound work or new product categories where budget is not yet defined, while MEDDIC suits complex mid-market and enterprise deals with multi-stakeholder buying committees. If your sales involve committees, long procurement or large contracts, add questions about who the economic buyer is, how the decision will be made and what success is measured by. If most leads are small, repeatable jobs, BANT-style questions are enough.',
    },
    { type: 'h2', text: 'Automating the first screen' },
    {
      type: 'p',
      text: 'The first screen is repetitive, which makes it a candidate for automation: a chatbot or form flow can ask the questions, record the answers in your CRM and route the enquiry by outcome, with a person taking over when the conversation needs one. WakeUP\'s [AI automation and chatbot service](/services/ai-automation) lists lead qualification and bookings with handover to a person, and lead routing to a CRM, among its deliverables. If you want to see where enquiries are lost today, the [free marketing audit](/audit) is a place to start.',
    },
  ],
}
