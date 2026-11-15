import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'copywriting-formulas',
  title: 'Copywriting formulas: AIDA, PAS, BAB and FAB with examples',
  metaTitle: 'Copywriting Formulas: AIDA, PAS, BAB',
  description:
    'Copywriting formulas explained: AIDA, PAS, BAB and FAB, each with a worked example and a rule for when to use it. Includes AIDA vs PAS.',
  publishedAt: '2027-02-14T18:00:00+04:00',
  updatedAt: '2027-02-14T18:00:00+04:00',
  service: 'content',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Copywriting formulas are repeatable structures for persuasive text. AIDA (Attention, Interest, Desire, Action) suits longer pages and emails. PAS (Problem, Agitation, Solution) suits short, direct copy. BAB (Before, After, Bridge) suits transformations. FAB (Features, Advantages, Benefits) suits product descriptions. Pick the one that matches how much your reader already knows.',
    },
    { type: 'h2', text: 'What a copywriting formula is for' },
    {
      type: 'p',
      text: '[Mailchimp](https://mailchimp.com/resources/copwriting-formulas) describes copywriting formulas as "proven structures that make your message clear, persuasive, and easy to follow." A formula does not give you ideas or a good offer. It gives order: what the reader meets first, what comes next, and where the request goes. That helps most when you are staring at a blank page, or when a draft has the right facts in the wrong sequence.',
    },
    {
      type: 'p',
      text: 'It also helps readers who skim. In Jakob Nielsen\'s 1997 study for Nielsen Norman Group, [How Users Read on the Web](https://www.nngroup.com/articles/how-users-read-on-the-web/), 79 percent of test users always scanned any new page. Versions of a text that were concise, scannable and objective scored better on measured usability (58, 47 and 27 percent better respectively, and 124 percent better combined). The study is old and was run on web pages, but a clear order and short paragraphs are exactly what these formulas give you.',
    },
    {
      type: 'p',
      text: 'To compare them, the examples below use one invented offer: a Tbilisi accounting firm that handles monthly bookkeeping and tax filing for companies with 20 to 100 employees. The firm and its numbers are made up for illustration.',
    },
    { type: 'h2', text: 'AIDA: Attention, Interest, Desire, Action' },
    {
      type: 'p',
      text: 'AIDA walks the reader from noticing to acting. Adrijan Arsovski, writing for Crazy Egg on 6 May 2025, credits Elias St. Elmo Lewis with first outlining it in 1898 and calls it a formula "which can be traced back to the golden days of print marketing" ([AIDA vs PAS](https://www.crazyegg.com/blog/aida-vs-pas/)). Some guides, including [Buffer\'s](https://buffer.com/resources/copywriting-formulas/), write the first step as Awareness rather than Attention; the job is the same.',
    },
    {
      type: 'ul',
      items: [
        'Attention: a headline or opening line that makes the right reader stop.',
        'Interest: facts or a story that keep them reading and show you understand their situation.',
        'Desire: the benefits, proof and detail that make the outcome feel real and likely.',
        'Action: one clear request, with the next step made easy.',
      ],
    },
    {
      type: 'p',
      text: 'Example (illustrative): "Month-end shouldn\'t take your finance team a week." (Attention) "Month-end drags when invoices, bank data and payroll sit in different places." (Interest) "With one monthly routine, your reports arrive by the fifth working day and tax filings are prepared before the deadline, so your director sees real numbers while they can still change decisions." (Desire) "Book a 20-minute call and we will list what is slowing your close." (Action)',
    },
    {
      type: 'p',
      text: 'Use it for longer copy where the reader has to be taken through several steps: landing pages, sales emails, long ads. Crazy Egg recommends it for longer, more complex copy.',
    },
    { type: 'h2', text: 'PAS: Problem, Agitation, Solution' },
    {
      type: 'p',
      text: 'PAS names a pain, makes its cost felt, then offers the fix. Crazy Egg calls it a "newer" formula suited to brief, quick-turnaround copy, and notes it can be cut down to Problem and Solution alone. Agitation means spelling out the consequences, not exaggerating them; a reader who feels manipulated leaves.',
    },
    {
      type: 'p',
      text: 'Example (illustrative): "Your tax filing is due in six days and the numbers are still in three spreadsheets." (Problem) "A late or wrong filing can mean fines, a stressful call with the revenue service and a month of fixing mistakes instead of running the company." (Agitation) "We take over bookkeeping and filing, with a named accountant who answers within one working day. Send us your documents today." (Solution)',
    },
    {
      type: 'p',
      text: 'Use it when the reader already feels the problem: search ads, short social ads, email subject and first lines. It is weaker when buyers do not yet know they have a problem; AIDA gives room to build that awareness.',
    },
    { type: 'h2', text: 'BAB: Before, After, Bridge' },
    {
      type: 'p',
      text: 'BAB contrasts the reader\'s current situation with a better one, then presents your offer as the bridge. Both [Mailchimp](https://mailchimp.com/resources/copwriting-formulas) and Buffer describe it this way.',
    },
    {
      type: 'p',
      text: 'Example (illustrative): "Before: every month you chase receipts and wait for the accountant\'s call. After: on the fifth working day you open a one-page report and know your cash position. Bridge: a fixed monthly routine run by one named accountant, with documents collected through a shared folder."',
    },
    {
      type: 'p',
      text: 'Use it for services and products that change a state of affairs: renovations, training, software, fitness, finance. It suits case-study headlines too, as long as the "after" is something you can actually deliver and, if you quote results, you can prove them.',
    },
    { type: 'h2', text: 'FAB: Features, Advantages, Benefits' },
    {
      type: 'p',
      text: 'FAB moves from what a thing is, to what it does, to what the reader gains. Buffer notes it suits audiences who already know your product but have not yet bought. Its value is in forcing the translation from a specification into a reason to care.',
    },
    {
      type: 'table',
      head: ['Step', 'Question it answers', 'Example (illustrative)'],
      rows: [
        ['Feature', 'What is it?', 'A shared online folder where you drop invoices and bank statements'],
        ['Advantage', 'What does that let it do?', 'Documents are sorted and matched to transactions without anyone re-typing them'],
        ['Benefit', 'What does the reader get?', 'Your books close days earlier and your team stops chasing paperwork'],
      ],
    },
    {
      type: 'p',
      text: 'Use it for product pages, spec sheets, comparison tables and sales decks. Always finish on the benefit; copy that stops at features reads like a catalogue.',
    },
    { type: 'h2', text: 'Which formula for which job' },
    {
      type: 'table',
      head: ['Situation', 'Formula', 'Why'],
      rows: [
        ['Long landing page, sales email, long-form ad', 'AIDA', 'Gives space to build interest and desire before asking'],
        ['Short ad, search ad, email opener, reader already feels the problem', 'PAS', 'Gets to the pain and the fix fast'],
        ['Service or product that changes something visibly', 'BAB', 'Makes the result concrete'],
        ['Product page, spec sheet, reader knows the product', 'FAB', 'Turns details into reasons'],
        ['Skeptical reader who needs evidence', 'Add proof (testimonials, data) to any of them, or use Mailchimp\'s PPPP: Promise, Picture, Proof, Push', 'Claims need support'],
      ],
    },
    {
      type: 'p',
      text: 'For channel specifics, see [SEO copywriting](/blog/seo-copywriting) for pages that must rank, [Facebook ad copy examples](/blog/facebook-ad-copy-examples) for ads, and the [marketing video script template](/blog/marketing-video-script-template) for video, where the opening seconds do the work of Attention.',
    },
    { type: 'h2', text: 'Mistakes that break any formula' },
    {
      type: 'ul',
      items: [
        'Following the steps without an offer worth reading. A formula cannot rescue a weak proposition.',
        'Writing the same steps in the same words every time. Readers recognise templates.',
        'Agitating a problem you cannot then solve.',
        'Several requests at the end. One page, one action.',
        'Promotional wording in place of facts. Nielsen recommends "neutral rather than subjective, boastful, or exaggerated language".',
        'Copy in a voice that does not match the rest of the brand; fix that first with a [brand voice guide](/blog/how-to-define-brand-voice).',
      ],
    },
    {
      type: 'p',
      text: 'Write in the language your buyer reads. For Georgian-language copy that means writing it natively rather than translating English, so the structure carries over but the phrasing does not. WakeUP plans and writes copy in Georgian and English as part of its [content creation service](/services/content-creation). To see how your existing website and ad copy read to a first-time visitor, request the [free audit](/audit).',
    },
  ],
}
