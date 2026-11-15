import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'how-to-start-a-business-blog',
  title: 'How to start a business blog: what to set up and what to write first',
  metaTitle: 'How to Start a Business Blog',
  description:
    'How to start a business blog: decide what it is for, set up the basics, write your first ten posts and know how long results take.',
  publishedAt: '2027-01-08T12:00:00+04:00',
  updatedAt: '2027-01-08T12:00:00+04:00',
  service: 'content',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To start a business blog, decide first what job it does (for example, answering the questions buyers ask before they enquire), then set up a blog on your own website, write ten useful posts that answer real customer questions, and publish them on a schedule you can keep. A blog works slowly. Google says changes can take from a few hours to several months to show in search, so judge it over quarters, not weeks.',
    },
    { type: 'h2', text: 'What a business blog is for' },
    {
      type: 'p',
      text: 'A company blog is not a diary. It is a set of pages that answer questions your customers have, so they find you in search, trust you before they call, and arrive at the sales conversation better informed. That gives it three practical jobs:',
    },
    {
      type: 'ul',
      items: [
        'Be found. A page that answers a question can appear when someone searches it. Google’s SEO Starter Guide says that [creating content people find compelling and useful will likely influence your site’s presence in search results](https://developers.google.com/search/docs/fundamentals/seo-starter-guide).',
        'Build trust. Showing how you work and what you know is easier in a 1,000-word answer than in a slogan.',
        'Support sales. Every question your sales team answers three times a week is a post. Send the link instead of repeating the explanation.',
      ],
    },
    {
      type: 'p',
      text: 'It is not the fastest source of leads. If you need enquiries this month, ads work faster; see [lead generation strategies](/blog/lead-generation-strategies). A blog is the slow channel you build beside them.',
    },
    { type: 'h2', text: 'Step 1: Pick one job and one reader' },
    {
      type: 'p',
      text: 'Write down who the blog is for (the person who buys, or the person who recommends the purchase) and the one action you want after they read: ask for a quote, book a call, subscribe. Two sentences are enough. This stops the blog drifting into company news that nobody searches for.',
    },
    {
      type: 'p',
      text: 'Google’s guidance for helpful content gives the test to apply to every post: people-first content is [created primarily for people, and not to manipulate search engine rankings](https://developers.google.com/search/docs/fundamentals/creating-helpful-content). The same page asks you to consider who created the content, how, and why, and calls "why" perhaps the most important question. If the honest answer is "to fill a keyword list", do not publish it.',
    },
    { type: 'h2', text: 'Step 2: Set up the basics' },
    {
      type: 'ul',
      items: [
        'Put the blog on your own site. A blog at yourcompany.ge/blog keeps readers, links and enquiries on the site you own, while a blog on another platform belongs to that platform. Choose a platform you can update without a developer; see [Wix vs WordPress](/blog/wix-vs-wordpress) for a comparison of two common options.',
        'Make every post a page with its own descriptive address (URL). Google advises including words in the URL that may be useful for users.',
        'Add an author or company name and a date to every post, so readers know who wrote it and when.',
        'Link every post to the service or product page it supports, and the blog index from your main menu. Google says it [primarily finds pages through links from other pages it already crawled](https://developers.google.com/search/docs/fundamentals/seo-starter-guide), so a post nobody links to is hard to find.',
        'Put one clear next step at the end of a post: a contact form, a call, or a relevant guide. Do not stack five.',
        'Set up analytics and Search Console before the first post so you have a baseline.',
        'A sitemap is optional for a small blog. Google calls submitting one something you can do if you are open to a little technical challenge, but not required.',
      ],
    },
    { type: 'h2', text: 'Step 3: Write the first ten posts' },
    {
      type: 'p',
      text: 'Do not start with "10 trends in our industry". Start with the questions people ask before they buy. Collect them from your sales team, your inbox, your reviews and the questions your customers type into search; the methods are in [keyword research for SEO](/blog/keyword-research-for-seo) and [search intent types](/blog/search-intent-types). Specific, longer questions are easier to answer well than broad topics; see [long-tail keywords](/blog/long-tail-keywords). A mix like this covers the buying journey:',
    },
    {
      type: 'table',
      head: ['Post type', 'Reader question it answers', 'Number in the first ten'],
      rows: [
        ['Price and cost explainer', '"How much does X cost?"', '2'],
        ['How to choose', '"How do I pick a supplier or option?"', '2'],
        ['Process explained', '"What happens after I contact you?"', '1'],
        ['Comparison', '"X or Y: which is better for me?"', '2'],
        ['Common mistakes', '"What goes wrong with X?"', '1'],
        ['Definition or beginner guide', '"What is X?"', '1'],
        ['Customer story or example', '"Has this worked for someone like me?"', '1'],
      ],
    },
    {
      type: 'p',
      text: 'The last type needs a real customer and their permission. Never invent one. Each post should show something a general summary cannot: your process, your real numbers, your photos, your decisions. Google’s helpful-content page asks whether content demonstrates first-hand expertise and depth of knowledge, and lists as warning signs using extensive automation to produce content on many topics and making content primarily to attract visits from search engines.',
    },
    { type: 'h2', text: 'Step 4: Decide who writes and how often' },
    {
      type: 'p',
      text: 'The best writer is usually someone who talks to customers: a sales manager, an engineer, a consultant. They know the answer; an editor can make it readable. Ask them for a 20-minute recorded conversation per topic and turn that into a draft. Whoever writes, one person must own the calendar.',
    },
    {
      type: 'p',
      text: 'Pick a rhythm you can keep for a year. Two good posts a month beat eight in January and none in March. Plan the next 90 days with [a content strategy](/blog/content-strategy-for-small-business). If you cannot spare the time, outsourcing the content work is a normal choice. WakeUP’s [content creation service](/services/content-creation) covers monthly photos, short videos, design and copy in Georgian and English for social media and ads; it is the place to start if you also need the visuals that go with your posts.',
    },
    { type: 'h2', text: 'Step 5: How long results take and what to measure' },
    {
      type: 'p',
      text: 'Google’s starter guide states that [every change you make will take some time to be reflected on Google’s end](https://developers.google.com/search/docs/fundamentals/seo-starter-guide), from a few hours to several months, and suggests waiting a few weeks before judging a change. A new blog on a young site should expect the long end. Judge it by leading signals first, results later:',
    },
    {
      type: 'ul',
      items: [
        'First weeks: are the posts indexed? (Search Console shows this.)',
        'First months: impressions and clicks for the queries you targeted.',
        'After that: enquiries that mention or follow a post, and the questions sales no longer has to answer by hand.',
      ],
    },
    {
      type: 'p',
      text: 'Use email to bring readers back; see [how to build an email list](/blog/build-email-list). For the wider search plan around the blog, read [SEO for small business](/blog/seo-for-small-business).',
    },
    { type: 'h2', text: 'When a blog is not the right first move' },
    {
      type: 'p',
      text: 'If your website has no clear service pages, or does not load properly on a phone, fix those first: a blog sends visitors to pages that must then do their job. If nobody on your team can commit a few hours a month, or you need leads right now, start with ads or sales outreach and add the blog when you can sustain it. If you are unsure where you stand, the [free marketing audit](/audit) looks at your website, ads and sales process and tells you what to fix first.',
    },
  ],
}
