import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'social-media-audit',
  title: 'How to do a social media audit: a six-step checklist for your company',
  metaTitle: 'How to Do a Social Media Audit',
  description:
    'How to do a social media audit: list every account, check branding, find top posts, review replies and competitors, then write an action plan.',
  publishedAt: '2027-01-25T18:00:00+04:00',
  updatedAt: '2027-01-25T18:00:00+04:00',
  service: 'audit',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To do a social media audit, list every account your company owns, check that branding and links match, pull the results of the last six months, find what your best posts have in common, review how fast you answer people, compare yourself with three to five competitors, and finish with a short action plan. One person can do it in a day with a spreadsheet.',
    },
    { type: 'h2', text: 'Start with one question' },
    {
      type: 'p',
      text: 'An audit without a question becomes a pile of screenshots. Write down what you want to learn, for example "Which accounts are worth keeping, and what should we post more of?" or "Why do we get likes but no enquiries?". Everything below feeds that answer. If you then need a plan for the next quarter, the [social media marketing strategy guide](/blog/social-media-marketing-strategy) takes over where the audit ends.',
    },
    { type: 'h2', text: 'Step 1: inventory every account' },
    {
      type: 'p',
      text: 'Make a sheet with one row per profile, including old, half-abandoned and employee-created ones. Search your company name on each platform to find duplicates and fan pages.',
    },
    {
      type: 'table',
      head: ['Column', 'What to write'],
      rows: [
        ['Platform and link', 'Facebook, Instagram, LinkedIn, TikTok, YouTube and so on'],
        ['Owner', 'Who has admin access, and is it a named company account or one person\'s login'],
        ['Last post', 'The date; anything silent for months is a candidate to close or revive'],
        ['Purpose', 'Sales, recruiting, support or none'],
        ['Decision', 'Keep, fix, merge or close'],
      ],
    },
    {
      type: 'p',
      text: 'Access is the finding that most often matters. If the only admin is a former employee or an agency you no longer use, fix that first.',
    },
    { type: 'h2', text: 'Step 2: check branding and profile basics' },
    {
      type: 'ul',
      items: [
        'Same logo, name and short description everywhere, matching your website and brand rules. [What is branding](/blog/what-is-branding) explains why consistency matters.',
        'A bio that says in one line who you serve and what to do next.',
        'The link in the bio goes to a page that fits the goal, not just the home page, and it works.',
        'Contact details, opening hours and phone number are current.',
        'Cover images and pinned posts are not about an event that ended last year.',
      ],
    },
    { type: 'h2', text: 'Step 3: pull results and find your best posts' },
    {
      type: 'p',
      text: 'Export or copy the numbers for the last six months from each platform\'s own analytics. Do this early: Meta\'s developer documentation says that [user metrics data is stored for up to 90 days](https://developers.facebook.com/docs/instagram-platform/insights/) in its API, so save a monthly copy in your sheet from now on. Also note that Meta defines reach as the number of unique accounts that have seen a post, which differs from impressions or views that can count the same person more than once, and that some metrics are unavailable on accounts with fewer than 100 followers.',
    },
    {
      type: 'p',
      text: 'Then list your 10 best and 10 worst posts by the measure that matches your goal: clicks, messages, saves or shares if you want enquiries, reach if you want awareness. Likes are the weakest signal. For each post record:',
    },
    {
      type: 'ul',
      items: [
        'Format (Reel, carousel, single image, text, story).',
        'Topic and how the first line or first second opens.',
        'Whether a person appears on screen.',
        'Posting day and time.',
        'Whether it was paid for or organic.',
      ],
    },
    {
      type: 'p',
      text: 'Patterns appear quickly: one format dominates, one topic always flops, or the best posts are all the ones with a clear offer. The numbers to track every month are in [marketing KPIs](/blog/marketing-kpis), and format specifics in the [Instagram marketing strategy](/blog/instagram-marketing-strategy) post.',
    },
    { type: 'h2', text: 'Step 4: check your audience and your replies' },
    {
      type: 'p',
      text: 'Look at the audience data each platform gives you: country and city, age range and language. Ask whether the people following you are the people who buy. A large following in the wrong country is a finding, not an achievement.',
    },
    {
      type: 'p',
      text: 'Then read the last 30 comments and messages on each account. How long does a reply take? Are questions about price or availability left unanswered? Are complaints answered in public in a calm way? An unanswered question about price or availability is a lost enquiry, and the routines for fixing them are in [social media community management](/blog/social-media-community-management).',
    },
    { type: 'h2', text: 'Step 5: compare with three to five competitors' },
    {
      type: 'p',
      text: 'Pick competitors your buyers really consider, not the biggest brand in your industry. For each, note on public pages only: which platforms they use, how often they post, which formats they use, how many people respond to them and what offers they push. You are looking for gaps, such as a format nobody uses, or a question customers ask that nobody answers, not for ideas to copy. Do not judge by follower counts alone; compare how often their posts get a response.',
    },
    { type: 'h2', text: 'Step 6: turn it into an action plan' },
    {
      type: 'p',
      text: 'Score each account and each area from 1 to 5, then sort the gaps by effort and effect.',
    },
    {
      type: 'table',
      head: ['Area', 'Typical finding', 'Typical action'],
      rows: [
        ['Accounts', 'Duplicates, no company admin', 'Close, merge, add a second admin'],
        ['Branding', 'Different logos and bios', 'Update in one afternoon'],
        ['Content', 'One format carries the results', 'Plan more of it in a content calendar'],
        ['Replies', 'Hours or days to answer', 'Set an owner and a target reply time'],
        ['Audience', 'Followers outside your market', 'Adjust topics, language and targeting'],
        ['Competitors', 'A gap nobody fills', 'Test it with three posts'],
      ],
    },
    {
      type: 'p',
      text: 'End with no more than five actions, each with an owner and a date, and put them into a [content calendar](/blog/social-media-content-calendar) where they involve posting. Repeat the audit every six months. Keep the sheet: next time you compare, rather than start from zero.',
    },
    { type: 'h2', text: 'When an outside view helps' },
    {
      type: 'p',
      text: 'A self-run audit shows what is happening on social, but not how it connects to your ads, website and sales process. WakeUP Marketing\'s [free marketing audit](/audit) looks at your ads, website and sales process and returns a short written summary with the three changes that would help most, within one business day. It is free and carries no obligation.',
    },
  ],
}
