import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'how-to-switch-seo-agencies',
  title: 'How to switch SEO agencies without losing rankings: a handover plan',
  metaTitle: 'How to Switch SEO Agencies Safely',
  description:
    'How to switch SEO agencies without losing rankings: secure your accounts, record a baseline, overlap the teams, protect redirects and brief the new agency.',
  publishedAt: '2027-02-09T18:00:00+04:00',
  updatedAt: '2027-02-09T18:00:00+04:00',
  service: 'seo',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To switch SEO agencies without losing rankings, change the people and leave the website alone. Move every account into your own name first, record a baseline of rankings and traffic, let the old and new agency overlap for a short handover, keep all redirects and site settings as they are, and give the new team a written brief. An agency leaving does not by itself change rankings; what puts them at risk is a change to the site during the gap.',
    },
    {
      type: 'p',
      text: 'This post is the handover plan only. Whether to leave at all is covered in [how to tell if your SEO agency is doing a good job](/blog/is-my-seo-agency-working) and [SEO agency red flags](/blog/seo-agency-red-flags). Choosing the next agency is in [SEO consultant vs SEO agency](/blog/seo-consultant-vs-seo-agency) and [in-house SEO vs agency](/blog/in-house-seo-vs-agency).',
    },
    { type: 'h2', text: 'Step 1: Read the exit terms before you tell anyone' },
    {
      type: 'p',
      text: 'Open the contract and find three things: the notice period, whether the minimum term has ended, and who owns the content and the accounts. The [SEO contract terms](/blog/seo-contract-terms) post explains these clauses. If notice is 30 or 60 days, plan the handover inside that window instead of asking for a stop on day one. Send notice in writing, politely, and ask for the handover items below in the same message.',
    },
    { type: 'h2', text: 'Step 2: Move every account into your name' },
    {
      type: 'p',
      text: 'Do this first and quietly, before the conversation gets tense. You should be the owner of everything, and the agency should hold only the access it needs until the end date.',
    },
    {
      type: 'table',
      head: ['Asset', 'What to check', 'What to do'],
      rows: [
        [
          'Google Search Console',
          'You are an owner. Google lists two kinds, verified owners (who proved ownership with a token on the site) and delegated owners (appointed by an owner).',
          'Add your own account as owner. When the agency leaves, remove it under Users and permissions and also delete the verification token it added, because [a removed owner can re-verify while the token remains](https://support.google.com/webmasters/answer/7687615).',
        ],
        [
          'Google Analytics',
          'You hold the Administrator role at account level. Google says you must be an Administrator to [assign roles](https://support.google.com/analytics/answer/9305587).',
          'Add your own admin, then reduce the agency to Viewer or Analyst, then remove it on the exit date.',
        ],
        [
          'Google Business Profile',
          'A profile can have several owners but only one primary owner, and the primary owner cannot remove themselves until they [transfer primary ownership to someone else](https://support.google.com/business/answer/3403100).',
          'If the agency is primary owner, ask for the transfer now. The new owner [must wait 7 days](https://support.google.com/business/answer/3415281) before managing all features, so start early.',
        ],
        [
          'Domain, hosting, CMS',
          'The registrar and hosting accounts are registered to your company, not to a person at the agency.',
          'Add a second admin on your side. Change shared passwords on the exit date.',
        ],
        [
          'Tools and files',
          'Rank tracker, crawl tool, backlink tool, Looker Studio reports, shared drives, keyword lists.',
          'Ask for exports or ownership transfer of everything that is yours, in open formats such as CSV.',
        ],
      ],
    },
    {
      type: 'p',
      text: 'If an account is registered to the agency and they will not transfer it, escalate in writing and cite the contract. This is also the strongest reason to put ownership clauses in the next contract.',
    },
    { type: 'h2', text: 'Step 3: Record a baseline before anything moves' },
    {
      type: 'p',
      text: 'You cannot tell afterwards whether the switch hurt unless you saved where you stood. Take the snapshot while the old agency is still working, and date it.',
    },
    {
      type: 'ul',
      items: [
        'Search Console export: queries and pages for the longest period it will show, plus the Pages (indexing) report counts.',
        'Analytics: organic sessions and organic leads by month, using the same definition of a lead the new agency will use.',
        'A rank list for your 20 to 50 most valuable queries, in Georgian and English if you sell in both.',
        'A full crawl of the site: every URL, status code, title, canonical and redirect.',
        'The current backlink list and the list of top linked pages.',
        'The content log: what was published, updated or removed, and when.',
      ],
    },
    {
      type: 'p',
      text: 'This baseline is also the new agency\'s starting point. A fresh [SEO audit](/blog/how-to-do-seo-audit) by the incoming team at the start of their work is normal, and it is worth comparing with what the old agency reported.',
    },
    { type: 'h2', text: 'Step 4: Ask for a change log and a handover meeting' },
    {
      type: 'p',
      text: 'Google\'s own guidance for hiring an SEO suggests asking whether they will [share all the changes they make to your site](https://developers.google.com/search/docs/fundamentals/do-i-need-seo). Use the same standard on the way out. Ask the outgoing agency, in writing, for:',
    },
    {
      type: 'ul',
      items: [
        'A list of site changes made during the contract: redirects, robots.txt and sitemap edits, schema, plugins, scripts and tags added.',
        'The current strategy: target keywords, the pages mapped to them, the content plan and what was already tried.',
        'Open tasks and known problems, including anything waiting for your developer.',
        'Link-building activity: where links came from, and any disavow file submitted.',
        'The last two or three monthly reports, in the form of the [report contents](/blog/what-a-good-seo-report-includes) you agreed.',
      ],
    },
    {
      type: 'p',
      text: 'Then hold one 60 to 90 minute call with both teams, your developer and the person who owns marketing on your side. The outgoing agency walks through the change log; the incoming one asks questions. Keep the notes. Pay for this time if the contract does not cover it - a few hours of handover costs far less than rediscovering undocumented changes.',
    },
    { type: 'h2', text: 'Step 5: Overlap the agencies, but freeze the site' },
    {
      type: 'p',
      text: 'A short overlap, even two to four weeks, keeps work flowing. The rule during overlap is that only one party makes changes to the site at a time, and every change is logged. Until the new agency has finished its audit, avoid:',
    },
    {
      type: 'ul',
      items: [
        'A redesign, a CMS change or a domain change launched in the same month. If one is planned, read [website migration and SEO](/blog/website-migration-seo) and [the redesign checklist](/blog/website-redesign-checklist) first.',
        'Deleting old redirects, plugins or tags the old agency installed before anyone knows what they do.',
        'Mass title, URL or internal-link rewrites to "reset" the work.',
        'Changing hosting or DNS without a plan to keep the same URLs.',
      ],
    },
    {
      type: 'p',
      text: 'Redirects deserve particular care. Google\'s site-move guidance says to keep the redirects "for as long as possible, generally at least 1 year" ([Google Search Central, site moves with URL changes](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes)). Server-side redirects need access to the [server configuration](https://developers.google.com/search/docs/crawling-indexing/301-redirects), so make sure your developer or the new agency knows where the current ones live before the old agency\'s access ends.',
    },
    { type: 'h2', text: 'Step 6: Brief the new agency in writing' },
    {
      type: 'p',
      text: 'Do not rely on the new team to reconstruct the history. Give them a short document with the following, and ask them to reply with a plan for the first 90 days.',
    },
    {
      type: 'ol',
      items: [
        'Business goals in numbers: the enquiries or sales organic search should deliver, and what a lead is worth.',
        'The baseline from Step 3 and the access list from Step 2.',
        'Which pages and services matter most, and which markets and languages.',
        'The old agency\'s change log and strategy, with your own notes on what worked.',
        'What is off limits: pages the business will not change, legal wording, brand rules.',
        'How reporting and approval will work, including who signs off site changes.',
      ],
    },
    {
      type: 'p',
      text: 'Use the first month to agree the reporting method, not only to start work. Compare the new reports against the baseline, not against a number the agency picks.',
    },
    { type: 'h2', text: 'Step 7: Watch the first 90 days' },
    {
      type: 'p',
      text: 'Check the same measures weekly for the first month and monthly after that. Google\'s site-move guide expects traffic on the old site to fall and on the new one to rise, which means watching it; for an agency switch the equivalent is to watch your key queries, indexed page count and organic leads against the baseline. Small ranking wobbles are normal. A sharp drop on many pages at once points to a technical cause such as a changed robots.txt, a noindex tag or broken redirects, so check the change log first. Allow the usual time before judging the new work: see [how long SEO takes](/blog/how-long-does-seo-take).',
    },
    { type: 'h2', text: 'Where WakeUP fits' },
    {
      type: 'p',
      text: 'WakeUP offers SEO as a service, in Georgian and English; see [SEO services](/services/seo). It is one option among several, and the plan above applies whichever agency you pick. If you want an independent view of where your site stands before you decide, the [free audit](/audit) gives you a baseline and a second opinion without any commitment to switch.',
    },
  ],
}
