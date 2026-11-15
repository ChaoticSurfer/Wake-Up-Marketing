import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'how-to-repurpose-content',
  title: 'How to repurpose content: one article into a week of posts, step by step',
  metaTitle: 'How to Repurpose Content (Workflow)',
  description:
    'How to repurpose content: pick one strong article, video or webinar, split it into ideas, and rewrite each for a channel, with a worked example.',
  publishedAt: '2027-01-24T12:00:00+04:00',
  updatedAt: '2027-01-24T12:00:00+04:00',
  service: 'content',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To repurpose content, start with one piece that already works, pull out its separate ideas, and turn each idea into a new post shaped for one channel: a carousel, a short video, an email, a post for LinkedIn. Change the angle and the format each time, not just the size, so no two posts say the same thing the same way. A worked example follows the steps.',
    },
    { type: 'h2', text: 'Choose the source: what is worth repurposing' },
    {
      type: 'p',
      text: 'Not everything deserves a second life. Shopify’s guide to [repurposing content](https://www.shopify.com/blog/repurpose-content) starts with content that already performs: strong traffic, engagement or clicks. For a company in Georgia the best sources are usually:',
    },
    {
      type: 'ul',
      items: [
        'A blog article that ranks or gets shared. It is already structured in sections, so each section can become a post.',
        'A webinar, a talk or a recorded call with a customer. The transcript gives you quotes and questions.',
        'A video you filmed for one channel. Short clips can be cut for others.',
        'Questions your sales team hears every week. They are the cheapest source of ideas, and the answer to each one is a post.',
      ],
    },
    {
      type: 'p',
      text: 'If you have no source yet, write or film one first. A plan for what to make is in [content strategy for small business](/blog/content-strategy-for-small-business).',
    },
    { type: 'h2', text: 'Step 1: split the source into single ideas' },
    {
      type: 'p',
      text: 'Read or watch the source and list every idea that can stand alone: a claim, a number, a step, a mistake, a story, a question. A typical 1,200-word article holds several. Write each as one sentence. These sentences are the raw material, and the sentence, not the article, is what you repurpose.',
    },
    { type: 'h2', text: 'Step 2: give each idea a different job and channel' },
    {
      type: 'p',
      text: 'The same idea can do different jobs: attract people who do not know you, teach, or move someone toward asking for a quote. Shopify’s advice is to match the repurposed format to the goal: short social posts for awareness, SEO articles for organic traffic, product pages or email for conversions. Decide the job first, then the format.',
    },
    {
      type: 'table',
      head: ['Idea from the source', 'Job', 'New format', 'What changes'],
      rows: [
        ['The main claim', 'Awareness', 'Short vertical video (see [short-form video hooks](/blog/short-form-video-hooks))', 'Opens with the surprising part, 20 to 40 seconds'],
        ['A five-step process', 'Teaching', 'Carousel (see [carousel vs Reels](/blog/instagram-carousel-vs-reels))', 'One step per slide, no intro'],
        ['A common mistake', 'Awareness', 'Text post for LinkedIn or Facebook', 'First person, one lesson, no link in the first line'],
        ['A customer question', 'Trust', 'Short answer video or FAQ post', 'Spoken in plain words, with captions'],
        ['The whole article', 'Conversion', 'Email to existing contacts', 'Two-sentence summary and one link'],
      ],
    },
    { type: 'h2', text: 'Step 3: rewrite, do not copy and paste' },
    {
      type: 'p',
      text: 'Each channel has a different reader in a different mood, so rewrite the idea for the channel. Cutting the article into pieces and pasting them as posts is the weak version. It also has an SEO risk if you republish the article itself elsewhere. Google’s spam policies list [“Republishing content from other sites without adding any original content or value, or even citing the original source”](https://developers.google.com/search/docs/essentials/spam-policies) as an example of scraping. That policy is about copying other sites, but the lesson applies to your own repurposing too: put the original on your site and make everything else a new version, with a link back.',
    },
    {
      type: 'p',
      text: 'AI tools can help with drafts of captions and summaries from a transcript, and Shopify lists this as a step. Treat the output as a first draft. Check the facts, replace generic phrases with your own examples, and read it aloud in the language of your audience. Georgian-language posts need to be written for Georgian readers, not translated word for word.',
    },
    { type: 'h2', text: 'Worked example: one article, one week' },
    {
      type: 'p',
      text: 'Say a furniture company publishes an article titled “How to choose a sofa for a small flat.” It has six sections. One week of repurposing could look like this:',
    },
    {
      type: 'ol',
      items: [
        'Monday: the article goes on the website, with a short email to existing contacts.',
        'Tuesday: a 30-second video of a showroom employee giving the single most useful tip (measure the doorway first).',
        'Wednesday: a carousel of the six sections, one tip per slide, with the article link on the last slide.',
        'Thursday: a text post about the most common mistake, written as a short story from the showroom.',
        'Friday: a reply to a real customer question from the comments, as a video with captions (see [captions and subtitles for social videos](/blog/captions-subtitles-for-social-videos)).',
        'Saturday: a Story or poll asking which sofa shape people prefer, whose answers feed the next article.',
      ],
    },
    {
      type: 'p',
      text: 'Six pieces came out of one article, and none of them repeats another. One of them also generated a question for the next article, which is how a repurposing loop keeps going.',
    },
    { type: 'h2', text: 'Schedule it and measure what works' },
    {
      type: 'p',
      text: 'Put the pieces into your calendar before you publish the first one ([how to build a content calendar](/blog/how-to-build-a-content-calendar) shows how). Then track the result per format. Shopify suggests tracking clicks, views, saves, follows and conversions, with tools such as Google Analytics, to decide where to put more effort. After a month you will know whether your audience prefers video, carousels or text, and you can repurpose into that format first.',
    },
    {
      type: 'p',
      text: 'Shopify quotes Muammar Reed, co-founder of the children’s bookstore MiJa Books, on the volume that is possible:[“Now with AI, there’s no excuse for you not to be able to turn one piece of content into four or five other posts on different platforms.”](https://www.shopify.com/blog/repurpose-content)',
    },
    { type: 'h2', text: 'If you do not have the time or the camera' },
    {
      type: 'p',
      text: 'Repurposing needs someone to cut, design and write for each channel. WakeUP’s [content creation service](/services/content-creation) covers photo shoots, Reels and short video, post and carousel design and copy in Georgian and English, and the [video production service](/services/video-production) covers scripting, shooting and editing. If you are not sure which of your existing content has the most to give, ask for the [free audit](/audit).',
    },
  ],
}
