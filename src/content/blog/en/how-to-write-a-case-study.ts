import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'how-to-write-a-case-study',
  title: 'How to write a case study for a B2B or service company: structure, interview and a skeleton',
  metaTitle: 'How to Write a Case Study',
  description:
    'How to write a case study: pick the client, interview them, tell challenge, solution and results with real numbers, and get approval. Skeleton included.',
  publishedAt: '2027-02-01T09:00:00+04:00',
  updatedAt: '2027-02-01T09:00:00+04:00',
  service: 'content',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To write a case study, pick one client with a clear before and after, interview them for 30-45 minutes, then tell the story in order: who they are, the challenge, what you did, and the results in numbers, with the client\'s own words and written approval. ClickUp\'s guide suggests keeping marketing case studies to about 500-700 words, and for a B2B or service company that plus one photo or chart is usually enough.',
    },
    {
      type: 'p',
      text: 'A case study is proof, and proof is what a buyer who does not know you yet is looking for. In the Content Marketing Institute\'s [2027 B2B Content and Marketing Trends report](https://contentmarketinginstitute.com/b2b-research/b2b-content-marketing-trends-research), "showcasing customer stories and testimonials" was among the top three ways to build audience trust and credibility, chosen by 50% of the B2B marketers surveyed (mostly in North America, fieldwork June to August 2026). The rest of this post is the method.',
    },
    { type: 'h2', text: 'Choose the client and the story first' },
    {
      type: 'p',
      text: 'Do not start with the writing. Start by choosing a client whose situation matches the buyers you want next. A case study about a company 20 times your typical client\'s size answers nobody\'s question.',
    },
    {
      type: 'ul',
      items: [
        'The result is measurable: a number that moved, with a start date and an end date.',
        'The client looks like the next buyer: same size band, same industry or same problem.',
        'A named person at the client will talk to you and let you quote them.',
        'You can explain what you did without breaking a confidentiality agreement.',
      ],
    },
    {
      type: 'p',
      text: 'If the result is only "they were happy", you have a testimonial, not a case study. A short testimonial is still useful on a page, and [how to make a testimonial video](/blog/how-to-make-a-testimonial-video) covers the video version. A case study needs a problem that cost the client something, and a change you can show.',
    },
    { type: 'h2', text: 'Interview the client: questions that produce a story' },
    {
      type: 'p',
      text: 'Smart Blogger\'s [case study guide](https://smartblogger.com/how-to-write-a-case-study/) suggests 30-45 minutes for the interview and paring the list you send ahead down to one or two questions per section, tailored to the client. The split below follows the same logic: one block per part of the story.',
    },
    {
      type: 'table',
      head: ['Part of the story', 'Questions to ask the client'],
      rows: [
        ['Background', 'What does the company do, how big is it, what is your role and what do you own?'],
        ['Challenge', 'What was the situation before? What had you tried? What was the problem costing you, in money, time or leads?'],
        ['Solution', 'What did we do together? How much work did it need from your team? What was hard?'],
        ['Results', 'When did you first notice a change? Which number matters most to you now?'],
        ['Honest feedback', 'What could we have done better? Would you recommend us, and to whom?'],
      ],
    },
    {
      type: 'p',
      text: 'Record the call with permission. The best quotes come from the challenge and honest-feedback answers, because they sound like a person, not a press release. Ask for the numbers in writing afterwards, so you quote them exactly.',
    },
    { type: 'h2', text: 'The skeleton: challenge, solution, results' },
    {
      type: 'p',
      text: '[ClickUp\'s guide](https://clickup.com/blog/how-to-write-a-case-study/) uses a linear order: introduce the client, define the problem and its impact, explain the approach taken, then show measurable results. Use this skeleton and fill it in with the interview.',
    },
    {
      type: 'table',
      head: ['Section', 'What goes in it', 'Length'],
      rows: [
        ['Headline', 'The result, the client\'s name and what you did. Write it last. A pattern such as "Company X cut quote-to-order time in 3 months" (with the real figure) beats "Our work with Company X".', 'One line'],
        ['Summary', 'Challenge, solution and result in three or four sentences, for readers who stop here.', '50-80 words'],
        ['Client', 'Who they are, size, industry, the person you interviewed.', '2-3 sentences'],
        ['Challenge', 'What was wrong, what it cost, what they had tried. Add one quote.', '100-150 words'],
        ['Solution', 'What you did, in order, and what the client contributed. Name the tools and the timeline.', '150-200 words'],
        ['Results', 'Two or three numbers with a time frame and the starting point, plus the client\'s quote about what changed.', '100-150 words'],
        ['Next step', 'One call to action: a call, an audit, a similar-situation page.', 'One line'],
      ],
    },
    { type: 'h2', text: 'Write results readers can trust' },
    {
      type: 'p',
      text: 'The results section is where case studies lose credibility. Three habits fix most of it:',
    },
    {
      type: 'ul',
      items: [
        'Give the baseline and the period: "from [old figure] enquiries a month to [new figure] in the first quarter", not "enquiries doubled".',
        'Say how the number was measured and who measured it: the client\'s CRM, Google Analytics, a sales report.',
        'Separate what you did from what else changed. If the client also launched a new product that quarter, say so.',
      ],
    },
    {
      type: 'p',
      text: 'If the result is a bounce back from a bad month or an unusually good outcome, say that too. The US Federal Trade Commission\'s [endorsement guidance](https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking) says that when an endorser\'s results are exceptional and you cannot show they are typical, you should clearly show what most people can generally expect. It is a US rule, but it is a sensible standard for any market. It also says of a material connection between you and the person speaking, such as a payment or a free service in return for a quote: "Knowing about the connection is important information for anyone evaluating the endorsement."',
    },
    {
      type: 'p',
      text: 'Never invent a number, a name or a quote, and never round a result up. One checked claim is worth more than five vague ones.',
    },
    { type: 'h2', text: 'Get approval before you publish' },
    {
      type: 'ol',
      items: [
        'Ask for permission to write a case study before the project ends, ideally in the contract.',
        'Send the finished draft to the client contact and get written approval of the text, numbers, quote and logo use.',
        'Check whether the client\'s legal or communications team needs to sign off. In larger companies it may, so allow time for it.',
        'If the client prefers to stay unnamed, use "a manufacturing company in Tbilisi" only if every detail is true and the company agrees.',
      ],
    },
    { type: 'h2', text: 'Format and where to use it' },
    {
      type: 'p',
      text: 'A case study works as a page on your website, but it earns more when it is reused. The same material can become a one-page PDF for sales calls, a LinkedIn post, a short client video and a quote on the service page. Put the best one next to the offer it supports, as described in [website trust signals](/blog/website-trust-signals), and measure whether pages with proof convert better using the [marketing KPIs](/blog/marketing-kpis) you already track.',
    },
    {
      type: 'p',
      text: 'Use charts, a photo of the client\'s team or product, and short paragraphs. Avoid jargon the client\'s own buyers would not use.',
    },
    { type: 'h2', text: 'When it helps to get a hand' },
    {
      type: 'p',
      text: 'The hard parts are rarely the typing: it is getting the client\'s time, pulling clean numbers and turning an interview into a short, readable story. WakeUP\'s [content creation service](/services/content-creation) covers copywriting in Georgian and English, design and short video, which is useful once the case study exists and you want to turn it into posts, ad creative and a client video. If you are not sure which proof your site is missing, the [free audit](/audit) is a place to start.',
    },
  ],
}
