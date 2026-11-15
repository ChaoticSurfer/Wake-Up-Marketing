import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'google-ads-negative-keywords',
  title: 'Negative keywords in Google Ads: how to find them, add them and avoid over-blocking',
  metaTitle: 'Negative Keywords in Google Ads',
  description:
    'Negative keywords in Google Ads stop your ads showing for unwanted searches. How to find them in the search terms report, match types and starter lists.',
  publishedAt: '2027-01-26T12:00:00+04:00',
  updatedAt: '2027-01-26T12:00:00+04:00',
  service: 'advertising',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Negative keywords in Google Ads tell Google which searches your ads must not appear for. Find them by opening the search terms report, picking searches that have nothing to do with what you sell, and adding them as negatives at the right match type, ideally in a shared list. Check the report weekly at first. Done well, the same budget reaches more buyers; done carelessly, it blocks good searches.',
    },
    { type: 'h2', text: 'What negative keywords do' },
    {
      type: 'p',
      text: 'Google\'s help page says [negative keywords let you exclude search terms from your campaigns](https://support.google.com/google-ads/answer/2453972), so ads stop showing for terms that do not match what you offer. The page also warns that if you use too many, your ads might reach fewer customers. Negatives are a filter, not a growth lever: they save money you would have spent on irrelevant clicks. Which searches trigger your ads in the first place depends on your keywords and their match types, covered in [Google Ads match types](/blog/google-ads-match-types).',
    },
    { type: 'h2', text: 'Step 1: find negatives in the search terms report' },
    {
      type: 'p',
      text: 'The [search terms report](https://support.google.com/google-ads/answer/2472708) shows how your ads performed when triggered by actual searches on the Search Network, including which of your keywords each search matched and the match type. Google\'s own guidance is to add a search term as a negative when it is not relevant enough to the products or services you offer. Its example: if you sell eyeglasses and "wine glasses" triggers your ads, add "wine".',
    },
    {
      type: 'ol',
      items: [
        'Open the search terms report for the last 30 days (or longer if clicks are few).',
        'Sort by cost, then by clicks. Start with the searches that spent the most.',
        'Mark each as relevant, irrelevant or unsure. Look at the words around your keyword: job, free, how to, course, repair, used, cheap, a competitor\'s name.',
        'For irrelevant searches, decide the smallest negative that blocks the whole group (often one word) rather than the full search.',
        'For unsure ones, check the search on Google yourself and see what a buyer would find. Do not block what you have not understood.',
        'Add the negatives, note the date, and review again in a week.',
      ],
    },
    {
      type: 'p',
      text: 'One practical limit: Google notes that when you view the report through the Report editor, you cannot add keywords or negative keywords directly from it, so use the regular search terms view for this work.',
    },
    { type: 'h2', text: 'Step 2: choose the match type' },
    {
      type: 'p',
      text: 'Negative match types behave differently from normal ones. Per Google\'s [negative match type documentation](https://support.google.com/google-ads/answer/12437241):',
    },
    {
      type: 'table',
      head: ['Type', 'Blocks', 'Example with "running shoes"'],
      rows: [
        ['Broad negative', 'Searches containing all the terms, in any order', 'Blocks "shoes running"; does not block "blue tennis shoes"'],
        ['Phrase negative', 'Searches containing the terms together, in that order', 'Blocks "blue running shoes"; does not block "shoes running"'],
        ['Exact negative', 'Only that exact search', 'Blocks "running shoes"; does not block "blue running shoes"'],
      ],
    },
    {
      type: 'ul',
      items: [
        'Negatives do not expand to close variants. Google\'s example: excluding "flowers" does not block "red flower", so add singular and plural forms separately.',
        'Capitalisation changes and misspellings that Google corrects in the results are covered.',
        'In Search campaigns you choose the type with symbols around the keyword; on Display and Video, all negatives are broad and cannot be changed.',
        'A one-word negative that is not exact blocks every search containing that word, so check it against your own keywords. Google says your negatives should not overlap with your regular keywords, because overlap prevents your ad from showing.',
      ],
    },
    {
      type: 'p',
      text: 'Use broad for single words that never apply to you ("free", "jobs"), phrase for multi-word patterns ("how to"), and exact for a single bad search whose words also appear in good searches.',
    },
    { type: 'h2', text: 'Step 3: put them in lists, not in a pile' },
    {
      type: 'p',
      text: 'Google says a list created at the account level applies automatically to all eligible search and Shopping inventory in relevant campaign types. For a small account, that makes one shared list for everything that never applies to your business ("jobs", "free", "pdf") the simplest start. Keep campaign-specific negatives for conflicts between your own campaigns, for example stopping a brand campaign and a generic campaign from both showing for the same search. Name lists by their purpose, so the next person knows what each does.',
    },
    { type: 'h2', text: 'Starter lists by business type' },
    {
      type: 'p',
      text: 'These are practical starting points, not an official Google list. Treat every word as a candidate: check it against your search terms report before adding it, because a word that is irrelevant for one business is a customer for another.',
    },
    {
      type: 'table',
      head: ['Business', 'Candidate negatives', 'Check before adding'],
      rows: [
        ['B2B services (agency, consulting, IT)', 'jobs, vacancy, salary, internship, free, template, course, definition', 'Whether "template" or "course" buyers are part of your offer'],
        ['Clinics and local services', 'jobs, salary, how to, DIY, pdf, video, home remedy', 'Do not block "price" or "cost" if you want enquiries from comparers'],
        ['E-commerce', 'used, second hand, repair, manual, wholesale, free, review, jobs', 'Whether you sell used or wholesale'],
        ['Real estate and hotels', 'jobs, salary, rent (if you sell), sale (if you rent), hostel, free', 'Rent vs sale direction'],
        ['Education and training', 'free, pdf, jobs, exam answers, torrent', 'Whether you offer free sessions'],
      ],
    },
    { type: 'h2', text: 'Georgian-language and mixed-script searches' },
    {
      type: 'p',
      text: 'Google Ads [does not list Georgian](https://support.google.com/google-ads/answer/6333734) among the languages for ads language targeting, and ads created in a language not supported for targeting will be disapproved. Campaigns in Georgia are therefore run with ads in a supported language, and your search terms report may still show how people actually type: in Georgian script, in Russian, in English or in Latin letters spelling Georgian words. Because negatives do not match variants, each spelling needs its own entry.',
    },
    {
      type: 'ul',
      items: [
        'Read your own report for Georgian-script and transliterated searches that spend money without enquiries, and add what you see rather than a guessed list.',
        'Add Georgian words with the same meaning as your English negatives only when they actually appear in your terms. Typical candidates are words for jobs, free and cheap, but test them against your offer first.',
        'Add the Latin-letter spelling and the Georgian-script spelling as separate negatives if both appear.',
        'Ask a Georgian speaker to read the terms: a meaning that is irrelevant in English may be a valid buying search in Georgian.',
      ],
    },
    { type: 'h2', text: 'Mistakes that cost sales' },
    {
      type: 'ul',
      items: [
        'Blocking a word that also appears in your best searches, such as "price" or "buy". Check conversions on the search first.',
        'Adding negatives from a generic list online without looking at your own terms.',
        'Forgetting singular and plural forms, or other spellings.',
        'Judging a search by cost alone. A search that spent a lot but produced an enquiry is not a negative.',
        'Never reviewing again. New searches appear all the time, and your own keyword changes shift what is matched.',
      ],
    },
    { type: 'h2', text: 'A weekly routine' },
    {
      type: 'p',
      text: 'Spend 20 minutes a week on the search terms report for the first two months, then monthly. Record each batch of negatives with the date, so that a drop in impressions can be traced back to a change. How this fits with budget, bidding and ad copy is in [Google Ads optimization tips](/blog/google-ads-optimization-tips) and the setup steps in [how to run Google Ads](/blog/how-to-run-google-ads); what budgets can look like is in [Google Ads cost](/blog/google-ads-cost).',
    },
    {
      type: 'p',
      text: 'If you would rather have someone review your account, WakeUP\'s [advertising service](/services/advertising) covers campaign management, and the [free marketing audit](/audit) looks at where your ad budget goes.',
    },
  ],
}
