import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'email-subject-lines',
  title: 'Email subject line examples: 8 formulas and how to test them',
  metaTitle: 'Email Subject Line Examples',
  description:
    'Email subject line examples built on 8 formulas, with rules on length, preview text and spam wording, and a simple way to A/B test which lines get clicked.',
  publishedAt: '2027-02-26T12:00:00+04:00',
  updatedAt: '2027-02-26T12:00:00+04:00',
  service: 'content',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'The best email subject lines are specific, honest and written for one reader: they say what is inside the email and why it matters to the person opening it. Use one of a handful of formulas (benefit, question, number, curiosity, deadline, personal note, news, plain statement), keep the line short enough to read on a phone, and test two versions against each other. Judge the test by clicks, not opens. Below are email subject line examples for each formula, plus the testing routine.',
    },
    { type: 'h2', text: 'What a subject line has to do' },
    {
      type: 'p',
      text: 'A subject line has one job: get the right person to open an email they would be glad to have opened. Three habits follow from that.',
    },
    {
      type: 'ul',
      items: [
        'Name the thing. "Your March invoice template" beats "Update".',
        'Promise only what the email delivers. A line that tricks someone into opening costs you trust, and the next email.',
        'Write it with the preview text. Mailchimp advises you to "use your subject line and preview text to announce what\'s in your email", so plan the two together: the subject says what, the preview adds one more reason.',
      ],
    },
    { type: 'h2', text: 'Eight formulas with examples' },
    {
      type: 'p',
      text: 'The examples are written for imaginary companies, so adapt the specifics. Each formula suits a different email.',
    },
    {
      type: 'table',
      head: ['Formula', 'Example subject line', 'Use it for'],
      rows: [
        ['Benefit first', 'Cut your month-end reporting from two days to two hours', 'Product or service emails with a clear result'],
        ['Question', 'Is your website losing enquiries on mobile?', 'Educational emails where the reader knows the problem'],
        ['Number', '5 checks before you renew your ad budget', 'Lists and checklists'],
        ['Curiosity gap', 'The one metric we stopped reporting', 'Stories and opinions, only if the email pays it off'],
        ['Deadline', 'Registration for the 12 March workshop closes Friday', 'Real deadlines only'],
        ['Personal note', 'Nino, a quick idea for your Q2 hiring plan', 'One-to-one and small-list emails'],
        ['News', 'New: invoices now export to Excel', 'Product updates and company announcements'],
        ['Plain statement', 'March newsletter: three case notes and a template', 'Regular newsletters, where reliability beats cleverness'],
      ],
    },
    {
      type: 'p',
      text: 'A few of these deserve a caution. Curiosity-gap lines only work when the email delivers the answer, otherwise they teach readers to ignore you. Mailjet\'s subject-line guide makes the same point about avoiding clickbait, and warns that "Overusing time-limited campaigns will backfire on you eventually." Use deadlines only when the deadline is real. For personalisation, Mailjet calls using a name only one form of it, alongside others such as location or past purchases, and recommends testing whether it helps. For automated emails, its advice is to be direct and connect the subject to the action the subscriber just took. Our [welcome email series](/blog/welcome-email-series) shows that in practice.',
    },
    { type: 'h2', text: 'Length, preview text and punctuation' },
    {
      type: 'ul',
      items: [
        'Length: Mailjet says you have around 60 characters to capture attention, and notes that how much of the subject line shows varies by email client. Put the important words first so a cut-off line still makes sense.',
        'Preview text: fill it in on purpose, so the second line in the inbox adds to the subject instead of repeating it.',
        'Capital letters and exclamation marks: Mailchimp notes that "Spam filters look for certain types of content" and recommends avoiding all capital letters, too many exclamation points, and gimmicky words or phrases. Spam placement depends on more than words, though: see [why emails go to spam](/blog/emails-going-to-spam) for authentication and list quality.',
        'Emoji: optional. GetResponse reported in its [email marketing benchmarks](https://www.getresponse.com/blog/8-email-subject-lines-to-increase-your-open-rate) that emoji subject lines had slightly lower open rates, 26.42% against 28.26% without emoji. That is a vendor\'s own study, and the article gives no sample size, so with open rates also an unreliable measure (see below), test emoji on your list instead of assuming.',
      ],
    },
    { type: 'h2', text: 'Test subject lines the right way' },
    {
      type: 'p',
      text: 'Mailchimp\'s A/B testing documentation says you can test 1 of 4 variables: subject line, From name, content or send time, and that the winner can be determined by the highest open or click rate, or total revenue, with revenue available only when an online store is connected. Use these rules:',
    },
    {
      type: 'ol',
      items: [
        'Change one thing between versions: for example, benefit-first against question, with the same email below.',
        'Split a random part of the list in half, send both at the same time, and send the winner to the rest. If the list is small, split it fully and learn for next time.',
        'Choose clicks, or conversions, as the winning measure. Opens are inflated by privacy features that load emails automatically, which is why the [good email open rate](/blog/good-email-open-rate) guide recommends looking beyond them.',
        'Write down every result. A single test proves little; a pattern across several sends tells you what your readers respond to.',
        'Retest when your audience changes. A line that suited a list of customers may not suit a list of leads.',
      ],
    },
    { type: 'h2', text: 'A routine for writing a line in ten minutes' },
    {
      type: 'ol',
      items: [
        'Write the email\'s single purpose in one sentence.',
        'Write five subject lines, using five different formulas from the table.',
        'Delete any that would fit any other email you send.',
        'Read the remaining ones as they would appear on a phone, beside the sender name and preview text.',
        'Pick two and send them as an A/B test.',
      ],
    },
    {
      type: 'p',
      text: 'If your emails are written by several people, keep a short bank of lines that earned clicks and the formula behind each one. WakeUP\'s [content creation service](/services/content-creation) includes copywriting in Georgian and English, covering captions, ad text and articles, and the [free audit](/audit) is a first step if you want an outside view of your email and marketing setup.',
    },
  ],
}
