import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'how-to-create-buyer-persona',
  title: 'How to create a buyer persona from real customer data',
  metaTitle: 'How to Create a Buyer Persona',
  description:
    'How to create a buyer persona in five steps: use your own customer data, interview five to eight buyers, write a one-page card. Includes Georgian examples.',
  publishedAt: '2027-01-11T12:00:00+04:00',
  updatedAt: '2027-01-11T12:00:00+04:00',
  service: 'content',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To create a buyer persona, decide what decision it will inform, collect what your sales and support teams already know, interview five to eight real customers about the last time they bought, find the patterns, and write them on a one-page card with only the details that change what you do. A persona is a summary of research, not a character you invent.',
    },
    { type: 'h2', text: 'What a buyer persona is' },
    {
      type: 'p',
      text: 'Nielsen Norman Group defines a persona as [a fictional, yet realistic, description of a typical or target user](https://www.nngroup.com/articles/persona/), and says it must be based on user research. The fictional part is the name and the face. The substance, what the person needs, fears and does before buying, has to come from real customers. Without that, you have a mascot.',
    },
    {
      type: 'p',
      text: 'The same article says each detail should have a purpose and advises dropping details that would not help make a decision. Use that as your test. If knowing that the buyer has two children changes nothing about your offer or your ads, leave it out. That rule keeps a persona short enough to use.',
    },
    { type: 'h2', text: 'Step 1: decide what the persona is for' },
    {
      type: 'p',
      text: 'A persona for choosing Instagram content is different from one for writing a sales script. Write one sentence before you start: "We need this persona to decide ___." Examples: which questions our blog should answer, which offer to put in ads, what the first call with a lead should cover. If you cannot finish the sentence, you are not ready to build one.',
    },
    {
      type: 'p',
      text: 'Most companies need two or three personas, not ten. Group buyers by what they are trying to get done and what holds them back, not by age or job title alone. Two people of the same age can buy for opposite reasons.',
    },
    { type: 'h2', text: 'Step 2: collect what you already own' },
    {
      type: 'p',
      text: 'Before you ask anyone anything, mine the records you have. In many Georgian companies the best material sits in places nobody has organised:',
    },
    {
      type: 'ul',
      items: [
        'WhatsApp, Facebook Messenger and Instagram chats: the exact words buyers use for the problem, and the questions they ask first.',
        'Call notes or recordings: price objections, what they compared you with, why they hesitated.',
        'Your CRM or spreadsheet of won and lost deals: who closed fast, who dragged on, who never bought, and the reasons recorded.',
        'Reviews and support tickets: what people praise and what they complain about, in their words.',
        'Google Analytics and Search Console: which pages and search phrases bring the people who later enquire. Analytics shows what people did, which interviews cannot.',
      ],
    },
    {
      type: 'p',
      text: 'Copy 20 to 30 real phrases into a sheet. This is the raw material, and it is also what your ad and content copy should sound like. For turning those questions into topics, see [content strategy for a small business](/blog/content-strategy-for-small-business) and [search intent types](/blog/search-intent-types).',
    },
    { type: 'h2', text: 'Step 3: interview five to eight real customers' },
    {
      type: 'p',
      text: 'Records tell you what happened. Interviews tell you why. Aim for five to eight people from the group you want more of: recent customers, plus one or two who enquired and did not buy. Offer a short call of about 20 minutes.',
    },
    {
      type: 'p',
      text: 'Nielsen Norman Group\'s guidance on [user interviews](https://www.nngroup.com/articles/user-interviews/) is a good rulebook. Ask open questions about a specific event, such as "Tell me about the last time you looked for a supplier like us", rather than general habits. Authors Maria Rosala and Kara Pernice warn that if an interviewer asks many leading questions, [the validity of the data will be compromised](https://www.nngroup.com/articles/user-interviews/). Do not ask "Was our price fair?". Ask what they compared and what made them decide.',
    },
    {
      type: 'ol',
      items: [
        'What was happening in your business or life when you started looking for this?',
        'What did you try first? Who did you ask?',
        'Where did you search, and what did you type or say?',
        'Who else had a say in the decision, and what did each person worry about?',
        'What nearly stopped you from buying?',
        'What made you choose us, or someone else?',
        'What happened in the first month after buying?',
      ],
    },
    {
      type: 'p',
      text: 'The same source notes that interviews collect reported behaviour, not observed behaviour, and that memory is flawed and people may present themselves favourably. So check what people say against your records from Step 2. Where the two disagree, trust the records for what happened and the interview for why.',
    },
    { type: 'h2', text: 'Step 4: find the patterns and write the card' },
    {
      type: 'p',
      text: 'Put every interview and record on one sheet and mark what repeats. A pattern is something you saw in at least three sources. One vivid story is a lead for the next interview, not a persona trait. Then write one card per persona on a single page.',
    },
    {
      type: 'table',
      head: ['Field', 'What to write', 'Where it comes from'],
      rows: [
        ['Name and role', 'A working name and the job or situation, e.g. "Nino, office manager"', 'Your CRM and interviews'],
        ['Goal', 'What they are trying to get done, in their words', 'Interviews, chat history'],
        ['Trigger', 'The event that starts the search', 'Interview question 1'],
        ['Where they look', 'Channels and search phrases, in Georgian, English or Russian as they use them', 'Search Console, chats, interviews'],
        ['Worries and objections', 'What nearly stops them', 'Call notes, lost deals'],
        ['Who else decides', 'Other people involved and what they care about', 'Interviews'],
        ['What convinces them', 'Proof they ask for: price, references, a sample, a call', 'Won deals'],
        ['What we do with this', 'One line each for offer, message and channel', 'Your decision'],
      ],
    },
    {
      type: 'p',
      text: 'The last row matters most. A persona with no "what we do with this" is decoration.',
    },
    { type: 'h2', text: 'Two filled examples for Georgia' },
    {
      type: 'p',
      text: 'Both examples are invented to show the format. They are not statistics and do not describe a real customer. Replace every line with what your own research shows.',
    },
    {
      type: 'table',
      head: ['Field', 'B2B: office fit-out supplier', 'B2C: private dental clinic'],
      rows: [
        ['Persona', 'Nino, administrative director at a company of about 80 people, moving to a new Tbilisi office', 'Giorgi, 34, has had a toothache for a week and has put off the dentist twice'],
        ['Goal', 'Finish the move on a fixed date without the CEO complaining about cost or delays', 'Stop the pain and know the price before he arrives'],
        ['Trigger', 'Lease signed for a new floor, move date set', 'Pain at night, a friend mentions a clinic'],
        ['Where they look', 'Asks two colleagues, searches in Georgian and English, checks the supplier\'s site and Facebook page for finished projects', 'Searches in Georgian on his phone, opens the clinic\'s Instagram and Google reviews, writes on WhatsApp'],
        ['Objections', 'Missed deadlines, quote that grows later, nobody to call after delivery', 'Fear of pain, fear of an unexpected bill'],
        ['Who else decides', 'Finance director approves the budget; CEO approves the look', 'His wife, who has used the clinic'],
        ['What convinces', 'Photos of finished offices, a fixed quote with a delivery date, a named project manager', 'Reviews that mention no pain, a clear price range, an evening slot booked in a message'],
        ['What we do', 'Project page with before and after, a quote template that shows the date, content aimed at the finance director too', 'Short video of the clinic and the team, price ranges on the site, WhatsApp reply within the hour'],
      ],
    },
    {
      type: 'p',
      text: 'Notice that the B2B card has three decision makers and the B2C card has one person plus one influencer. That alone changes the content: the B2B company needs material the finance director can forward, the clinic needs reassurance for one nervous person.',
    },
    { type: 'h2', text: 'Step 5: use it, check it, update it' },
    {
      type: 'p',
      text: 'Put the card where people work: the top of the content calendar, the briefing for ad creative, the sales script. Give the persona\'s name to the team so that "would Nino forward this?" becomes a real review question. Nielsen Norman Group notes that a persona\'s name works as shorthand for the user\'s needs, and that personas are best built as a team because the people involved are more likely to use them, so involve sales and support in Step 4.',
    },
    {
      type: 'p',
      text: 'Then test it. If the persona says buyers fear hidden costs, publish a page with a clear price range and see whether enquiries improve. If you run paid social, the persona also helps you pick a source for a [lookalike audience](/blog/facebook-lookalike-audiences) and judge which leads are worth calling first; see [how to qualify leads](/blog/how-to-qualify-leads). Review the card every six to twelve months, or when a new product, price or competitor changes why people buy.',
    },
    { type: 'h2', text: 'Where WakeUP fits' },
    {
      type: 'p',
      text: 'The persona only pays off when it shapes what you publish. WakeUP plans and produces photos, short videos, design and copy in Georgian and English; see [content creation](/services/content-creation) for what is included. If you want an outside look at who your marketing currently speaks to, the [free marketing audit](/audit) is a place to start.',
    },
  ],
}
