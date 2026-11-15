import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'get-business-recommended-by-chatgpt',
  title: 'How to get your business recommended by ChatGPT, and how to check if it is',
  metaTitle: 'Your Business Recommended by ChatGPT',
  description:
    'How to get your business recommended by ChatGPT: test what ChatGPT, Gemini and Perplexity say today, then fix access, facts, mentions and pages.',
  publishedAt: '2027-02-05T12:00:00+04:00',
  updatedAt: '2027-02-05T12:00:00+04:00',
  service: 'seo',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To get your business recommended by ChatGPT, first find out what ChatGPT, Gemini and Perplexity already say about you, then fix what they get wrong. There is no form to submit and nobody can guarantee a mention. What you can do is let the search crawlers in, keep your company facts identical everywhere, earn mentions on other sites and publish pages that answer buyers\' questions directly.',
    },
    { type: 'h2', text: 'There is no setting to switch on' },
    {
      type: 'p',
      text: 'AI assistants write answers from what they learned in training and, for questions that need fresh or local information, from pages they find on the web at that moment. You cannot pay or apply to be included, and the answer for the same question can differ between tools and between runs. That is why the useful first step is a test, not a tactic.',
    },
    {
      type: 'p',
      text: 'It is also worth knowing how widely these tools are used before you spend time on them. Pew Research Center found that [34% of U.S. adults had used ChatGPT](https://www.pewresearch.org/short-reads/2025/06/25/34-of-us-adults-have-used-chatgpt-about-double-the-share-in-2023/), in a survey of 5,123 adults fielded in late February and early March 2025. That is a U.S. figure and says nothing about Georgia, so measure your own market: ask a few recent customers whether they use an AI assistant to shortlist companies like yours.',
    },
    { type: 'h2', text: 'Test what the tools say about you today' },
    {
      type: 'p',
      text: 'Spend an hour on this before changing anything. Open ChatGPT, Gemini and Perplexity (in a private window or a fresh chat, so earlier chats do not colour the answer) and ask the questions a buyer would ask. Write each prompt as a customer would, not as a marketer would.',
    },
    {
      type: 'table',
      head: ['Prompt type', 'Example for a company in Tbilisi', 'What it tells you'],
      rows: [
        ['Category plus place', 'Which companies in Tbilisi build corporate websites?', 'Whether you are on the shortlist at all'],
        ['Problem', 'Our office needs to cut support calls. What can a company in Georgia do?', 'Whether you appear for the problem, not only the service name'],
        ['Comparison', 'Compare your company and a competitor for a company of 50 people', 'What the tools say about you next to a rival'],
        ['Alternatives', 'Alternatives to a named competitor in Georgia', 'Whether you are named as a substitute'],
        ['Brand name', 'What does your company do and where is it based?', 'Whether basic facts are right'],
        ['Reputation', 'Is your company good? What do customers say?', 'Which reviews and sources the tools lean on'],
      ],
    },
    {
      type: 'p',
      text: 'Run each prompt in English, Georgian and, if your buyers use it, Russian. Run each one two or three times, because the wording of answers changes. Record the result in a simple sheet with one row per prompt and tool:',
    },
    {
      type: 'ul',
      items: [
        'Were you mentioned? Where in the list?',
        'Which sources were cited, and were any of them yours?',
        'Were the facts right: services, city, size, languages, prices?',
        'Which competitors were named, and what pages did their mentions come from?',
        'Which site did the tool trust for the claim (your site, a directory, a review site, a news article)?',
      ],
    },
    {
      type: 'p',
      text: 'Keep the date on the sheet. You will repeat the same test once a month, and the changes between runs are the real result. How well a tool handles Georgian is something to test, not assume, so your own results are the best evidence you will have.',
    },
    { type: 'h2', text: 'Read the results' },
    {
      type: 'table',
      head: ['What you find', 'Likely cause', 'First fix'],
      rows: [
        ['Not mentioned anywhere', 'Little content or few outside sources that describe what you do', 'Add clear service pages, then earn mentions (below)'],
        ['Mentioned with wrong facts', 'An old directory listing, an outdated page or inconsistent details', 'Correct the source the tool cited, then your own About page'],
        ['Competitors named, you are not', 'They have more third-party coverage, reviews or clearer pages', 'Compare the pages the tool cited and fill the gap on your side'],
        ['Named, but never with a link', 'Pages hard to cite: vague, no facts, behind scripts', 'Rewrite the key page to answer the question in the first lines'],
        ['Appears in one tool only', 'Different sources and crawlers behind each tool', 'Check crawler access for the tool where you are missing'],
      ],
    },
    { type: 'h2', text: 'Let the search crawlers in' },
    {
      type: 'p',
      text: 'The cheapest fix is a technical one. OpenAI\'s [crawler documentation](https://developers.openai.com/api/docs/bots) says OAI-SearchBot "is used to surface websites in search results in ChatGPT\'s search features" and that sites opted out of it "will not be shown in ChatGPT search answers," though they can still appear as navigational links. It also says it can take about 24 hours from a robots.txt update for its systems to adjust. Perplexity\'s [bot documentation](https://docs.perplexity.ai/guides/bots) gives the same advice for PerplexityBot, which it says is designed to surface and link websites in Perplexity search results, and also quotes up to 24 hours for a change to take effect.',
    },
    {
      type: 'p',
      text: 'Ask your developer to check three things: robots.txt does not block these two crawlers by accident, a firewall or bot-protection service is not rejecting them, and key pages load without needing a login or a script that crawlers do not run. Both vendors say that bots which act on a user\'s request (ChatGPT-User and Perplexity-User) may not follow robots.txt, so it is not a way to control every visit. Decide whether to allow the training crawlers on purpose; that choice is separate from search visibility. The background is in our post on [SEO vs GEO](/blog/seo-vs-geo).',
    },
    { type: 'h2', text: 'Make your facts match everywhere' },
    {
      type: 'p',
      text: 'When tools describe a company they combine several sources, so a mismatch between them shows up as a wrong or missing answer. Write one fact sheet: legal and trading name, address, phone, opening hours, services, languages you work in, year founded, number of staff. Then make these places agree with it:',
    },
    {
      type: 'ul',
      items: [
        'Your own About and Contact pages, written in plain sentences rather than only in images or sliders.',
        'Your Google Business Profile. Google\'s guide says generative AI responses can include information about local businesses and that [using Business Profiles can help visibility](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) in AI responses and other Search results. Our [local SEO tips](/blog/local-seo-tips) cover the profile itself.',
        'Facebook, LinkedIn and any industry or chamber-of-commerce directory you appear in.',
        'Review sites, covered below.',
      ],
    },
    {
      type: 'p',
      text: 'Add the fact sheet to your site as ordinary text, and update it on a date you write down. An old phone number on a directory you forgot is a common reason for a wrong answer.',
    },
    { type: 'h2', text: 'Earn mentions on other sites' },
    {
      type: 'p',
      text: 'Google\'s own guide notes that its generative AI features "can show what\'s being said about products and services across the web", which is why what other people write about you matters. The same guide says that seeking inauthentic mentions "isn\'t as helpful as it might seem", so this is about real coverage, not purchased lists. Sources worth working on, from easiest to hardest:',
    },
    {
      type: 'ol',
      items: [
        'Real customer reviews on Google, plus the review sites your buyers use. Our guide to [getting more Google reviews](/blog/how-to-get-more-google-reviews) shows how to ask without breaking platform rules.',
        'Listings in business directories and associations that a human would trust.',
        'Partner and supplier pages that name you and say what you did together.',
        'Press mentions, interviews or guest articles in industry media, written because you have something specific to say.',
        'Answers in industry communities where you can be useful without advertising.',
      ],
    },
    {
      type: 'p',
      text: 'This is slow work and cannot be rushed. Our post on [online reputation management](/blog/online-reputation-management) has a weekly routine for keeping listings and reviews in order.',
    },
    { type: 'h2', text: 'Give the tools answer-ready pages' },
    {
      type: 'p',
      text: 'Compare the answers from your test with your own site. For each question that matters, there should be a page that answers it in the first lines, in the words a customer uses, with facts a reader can check.',
    },
    {
      type: 'ul',
      items: [
        'One page per service, naming the city, who it is for and what is included.',
        'A short FAQ on each key page, written from questions customers really ask your sales team.',
        'Specific facts with their sources: dates, numbers, certifications, named tools.',
        'Pages in the languages your buyers use, with each version complete (see [multilingual SEO](/blog/multilingual-seo)).',
        'Ordinary structured data where it fits, such as the [schema markup](/blog/schema-markup-for-small-business) that describes your business and services.',
      ],
    },
    {
      type: 'p',
      text: 'Do not rewrite everything for machines. Google\'s guide to generative AI search treats this as ordinary SEO and says there are no special files or markup to add; the same pages that serve readers and Google are the ones other tools can quote. For Google\'s own summaries, see [how to optimize for AI Overviews](/blog/optimize-for-ai-overviews).',
    },
    { type: 'h2', text: 'Track it monthly' },
    {
      type: 'p',
      text: 'Repeat the prompt test on the same day each month and note what changed and what you did in between. In analytics, look for visits from AI tools as a referral source; our [GA4 guide](/blog/ga4-for-small-business) explains the reports. Expect small numbers, because many people read an answer and never click. The measure that counts is whether buyers who mention an AI tool in the first call name you correctly.',
    },
    {
      type: 'p',
      text: 'Treat any vendor that promises guaranteed placement in ChatGPT answers with suspicion: no outside party controls what a model writes, and the tactics are still young.',
    },
    { type: 'h2', text: 'Where WakeUP fits' },
    {
      type: 'p',
      text: 'WakeUP offers [SEO as a service](/services/seo), including the technical checks, local profiles and content that this work depends on. It is one option among several; the test above costs nothing and you can run it yourself first. If you would like the crawl access, listings and key pages looked over, the [free audit](/audit) is the place to start.',
    },
  ],
}
