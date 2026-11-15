import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'seo-copywriting',
  title: 'SEO copywriting: how to write for the reader and the query',
  metaTitle: 'SEO Copywriting: A Practical Guide',
  description:
    'SEO copywriting means writing for the reader and the query: match intent, write the headline, structure the page and place keywords naturally.',
  publishedAt: '2027-01-14T18:00:00+04:00',
  updatedAt: '2027-01-14T18:00:00+04:00',
  service: 'content',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'SEO copywriting is writing a page so that a person gets the answer they came for and a search engine can tell what the page is about. In practice that means five habits: know the intent behind the search, write a clear headline and title, open with the answer, structure the page for scanning, and use the keyword where it fits naturally. This guide takes them in order and ends with a worked example.',
    },
    { type: 'h2', text: 'What SEO copywriting is, and is not' },
    {
      type: 'p',
      text: 'Google states the principle in its guidance on helpful content: “People-first content means content that’s created primarily for people, and not to manipulate search engine rankings.” (Google Search Central, [creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)). So SEO copywriting is not a formula of keyword counts. It is ordinary good writing with some extra care about the words people type into a search box.',
    },
    { type: 'h2', text: 'Step 1: know the intent before you write' },
    {
      type: 'p',
      text: 'Before the first sentence, decide what the searcher wants: an answer, a comparison, a price, a place to buy. The same words can mean different things, and a page that does not fit the intent will not satisfy anyone, however well it is written. Look at the results page for your phrase, see what kind of page ranks, and write that kind of page, better. [Search intent in SEO](/blog/search-intent-types) shows how to read the results, and [keyword research for SEO](/blog/keyword-research-for-seo) covers finding the phrase in the first place. Write down one sentence before you start: “The reader wants to ___, and after this page they can ___.”',
    },
    { type: 'h2', text: 'Step 2: write the headline, title and description' },
    {
      type: 'p',
      text: 'The H1 headline is for the reader on the page. The title element is what shows in search results. They can be the same or close, and both should contain the main phrase, described plainly. Google’s documentation on [title links](https://developers.google.com/search/docs/appearance/title-link) advises descriptive, concise text in every title element, says there is no limit on length but that results are truncated to fit the device width, and warns that Google may change the title link it shows if the title does not describe the page well.',
    },
    {
      type: 'ul',
      items: [
        'Put the main phrase first, then the benefit or the angle.',
        'Say what the page is. A clever title that hides the topic is a poor title.',
        'Do not repeat the phrase twice in one title.',
        'Give every page its own title.',
      ],
    },
    {
      type: 'p',
      text: 'The meta description is a short summary that Google [sometimes uses as the snippet](https://developers.google.com/search/docs/appearance/snippet). The same page advises descriptions that accurately describe the specific page and warns that identical descriptions across a site are not helpful. Treat it as a small advertisement for the click: state the answer or the promise honestly.',
    },
    { type: 'h2', text: 'Step 3: open with the answer' },
    {
      type: 'p',
      text: 'The first paragraph should answer the query in two to four sentences, with the main phrase in it. A reader who wants a quick answer gets it, and a reader who wants more knows they are in the right place. Skip the history of the topic and the line about how important it is. Then spend the rest of the page on detail, examples and caveats the quick answer cannot hold.',
    },
    { type: 'h2', text: 'Step 4: structure the page for scanning' },
    {
      type: 'p',
      text: 'People do not read web pages from the top. In Jakob Nielsen’s study published by Nielsen Norman Group in [1997](https://www.nngroup.com/articles/how-users-read-on-the-web/), 79% of test users always scanned a new page and only 16% read word by word. The study is old and the tools have changed, but the habit is familiar to anyone who has watched someone read on a phone. Write for the scanner as well as the reader:',
    },
    {
      type: 'ul',
      items: [
        'Use plain, descriptive H2 headings that tell the reader what each section answers. Google’s [SEO starter guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) says to “break up long content into paragraphs and sections, and provide headings to help users navigate your pages”.',
        'Keep one idea in each paragraph.',
        'Use a list for steps or items, and a table when comparing options.',
        'Make link text descriptive. “Our guide to search intent” tells the reader and Google more than “click here”.',
        'Cut. Half the words with the same facts usually reads better.',
      ],
    },
    { type: 'h2', text: 'Step 5: place keywords naturally' },
    {
      type: 'p',
      text: 'Use the main phrase where a reader would expect it: the title, the H1, the first paragraph, one or two headings and the link text of internal links pointing to the page. Beyond that, use the words people actually use, including the related phrases and questions that surround the topic. The starter guide advises to “think about the words that a user might search for to find a piece of your content”, and notes that people with different levels of knowledge use different terms.',
    },
    {
      type: 'p',
      text: 'Do not count repetitions. The same guide says that excessively repeating the same words, even in variations, is tiring for users, and that it can violate Google’s spam policies. If you read the page aloud and a sentence sounds odd because of the keyword, rewrite the sentence.',
    },
    { type: 'h2', text: 'Before and after: an illustrative example' },
    {
      type: 'p',
      text: 'The example below is invented to show the method; it is not a real client page. A company that cleans offices in Tbilisi wants a page for the phrase “office cleaning prices”.',
    },
    {
      type: 'table',
      head: ['Element', 'Before', 'After'],
      rows: [
        ['Title', 'Best Office Cleaning | Cleaning Services | Office Cleaning Company', 'Office Cleaning Prices: What Affects the Cost'],
        ['H1', 'Welcome to our cleaning company', 'Office cleaning prices: what you pay for and why'],
        ['Opening', 'We are a leading company with years of experience, offering high-quality cleaning at the best prices.', 'Office cleaning prices depend on floor area, how often we clean, the type of floor and which tasks are included. This page shows how a quote is built, so you can compare offers like for like.'],
        ['Headings', 'Our services', 'What changes the price; What a quote should list; How to compare two offers'],
        ['Body', 'Cleaning cleaning for offices, office cleaning, cheap office cleaning, office cleaning company in Tbilisi.', 'A table of the factors, a checklist of questions to put to any supplier, and a link to a request form.'],
      ],
    },
    {
      type: 'p',
      text: 'The after version is not longer because it is padded. It is more specific. It names the topic in the title, answers the question in the opening and gives the reader something to do next. The phrase appears where a person would say it, and nowhere else.',
    },
    { type: 'h2', text: 'A final edit checklist' },
    {
      type: 'ol',
      items: [
        'Does the first paragraph answer the query on its own?',
        'Do the title and H1 name the topic plainly, and is each page’s title different from the others?',
        'Could a reader who only reads the headings tell what the page covers?',
        'Is every claim something you can support, with a source where it is a number or a rule?',
        'Does the page offer something a competitor’s does not: an example, your own data, a clearer table?',
        'Is there a next step, with a link that has a descriptive anchor?',
        'Read it aloud. Does any sentence sound written for a robot?',
      ],
    },
    {
      type: 'p',
      text: 'Writing at this standard is slow, and many teams find it easier to share the work with a specialist. WakeUP’s [content creation](/services/content-creation) service covers writing and production, and the [free audit](/audit) shows which of your existing pages are worth rewriting first.',
    },
  ],
}
