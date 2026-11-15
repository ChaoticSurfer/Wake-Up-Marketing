import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'marketing-video-script-template',
  title: 'How to write a video script: a marketing template and structure',
  metaTitle: 'How to Write a Video Script (Template)',
  description:
    'How to write a video script for marketing: a five-part structure, a two-column template, word counts by runtime and an explainer variant.',
  publishedAt: '2026-12-20T18:00:00+04:00',
  updatedAt: '2026-12-20T18:00:00+04:00',
  service: 'video',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To write a video script, decide the one action you want the viewer to take, then write five parts in order: hook, problem, solution, proof and call to action. Lay it out in two columns (what is said, what is seen), plan for about 125 to 150 spoken words a minute, and read it aloud before anyone films. A fill-in template is below.',
    },
    { type: 'h2', text: 'Start with one goal and one viewer' },
    {
      type: 'p',
      text: 'A script that tries to sell, explain and recruit at once does none of them well. Before writing a line, finish this sentence: “This video helps [who] to [do what] by showing [what].” If you cannot, the idea is probably two videos. Google’s guidance for video ads says the same about focus: [“Avoid doing too much in your ad. Keep messaging and language focused and simple.”](https://support.google.com/google-ads/answer/14783551?hl=en)',
    },
    {
      type: 'p',
      text: 'The goal also decides the format. A video meant to reach new people, a video that answers a buyer’s doubts and a video that walks through a product need different scripts. For matching the type of video to the goal, see [video marketing for small business](/blog/video-marketing-for-small-business).',
    },
    { type: 'h2', text: 'The five parts of a marketing video script' },
    {
      type: 'p',
      text: 'Most marketing scripts, including those in [Lemonlight’s script guide](https://www.lemonlight.com/blog/marketing-video-script/), use the same five parts. Write them in this order, then trim.',
    },
    {
      type: 'table',
      head: ['Part', 'Its job', 'Line to aim for'],
      rows: [
        ['Hook', 'Stop the scroll and name the viewer', 'A question, claim or scene that the right person recognises in a second'],
        ['Problem', 'Show you understand what is going wrong', 'One concrete, specific situation, not a general complaint'],
        ['Solution', 'Say what you offer and how it helps', 'One sentence for what it is, one for the main benefit'],
        ['Proof', 'Give a reason to believe it', 'A real number, a real customer line, a demonstration on screen'],
        ['Call to action', 'Tell the viewer the next step', 'One action, said aloud and shown as text'],
      ],
    },
    {
      type: 'p',
      text: 'These parts map loosely onto the ABCD principles Google gives for YouTube ads: Attention, Branding, Connection and Direction. Google’s principle for branding is [“Brand early, often, and richly,”](https://support.google.com/google-ads/answer/14783551?hl=en) so put the brand name or logo into the hook, not only the final frame. Google and Kantar report that ads following the ABCDs delivered [“as much as a 30% lift in short-term sales likelihood and a 17% lift in long-term brand contribution”](https://support.google.com/google-ads/answer/14783551?hl=en) (Google and Kantar study, April 2021, YouTube ads). That is the vendor’s own study of its own platform, so treat it as a reason to follow the structure, not as a promise for your video.',
    },
    {
      type: 'p',
      text: 'The hook has a hard deadline on skippable YouTube ads, because [viewers can skip the ad after 5 seconds](https://support.google.com/google-ads/answer/2375464?hl=en). Everything the viewer needs to decide to stay should land before that. On Reels and TikTok there is no skip button, but the same logic holds because the viewer can swipe away at any moment.',
    },
    { type: 'h2', text: 'A two-column script template you can copy' },
    {
      type: 'p',
      text: 'Production guides such as [Biteable’s](https://biteable.com/blog/video-script/) recommend a table: [“A simple table with two columns is an easy way to format your script.”](https://biteable.com/blog/video-script/) One column holds what the viewer hears, the other what they see. Add a time column so you can check the runtime. Copy the table below and replace each bracket. The example timings fit a 30-second video.',
    },
    {
      type: 'table',
      head: ['Time', 'Voice-over (what is said)', 'On screen (what is seen)'],
      rows: [
        ['0 to 3 s - Hook', '[Question or claim that names the viewer and their problem]', '[Close-up of the problem happening. Brand name or logo on screen]'],
        ['3 to 10 s - Problem', '[One specific situation your viewer knows. One or two sentences]', '[Real setting or a person acting it out. Text: the problem in four words]'],
        ['10 to 20 s - Solution', '[What it is, who it is for, the main benefit]', '[Product or service in use. Show the result, not the logo]'],
        ['20 to 26 s - Proof', '[One number, one customer line, or one thing shown working]', '[Screen recording, result, or the customer on camera]'],
        ['26 to 30 s - Call to action', '[One action: message us, book, visit the page]', '[Button, phone number or link as text. Brand name again]'],
      ],
    },
    {
      type: 'p',
      text: 'Write the on-screen text as its own line, not as an afterthought. Meta’s ads guide lists video captions as [“Optional, but recommended”](https://www.facebook.com/business/ads-guide/video), and planning the text in the script means the captions, supers and call-to-action button are decided before the edit rather than during it.',
    },
    { type: 'h2', text: 'How many words fit in 15, 30, 60 and 90 seconds' },
    {
      type: 'p',
      text: 'Two production guides give the same speaking rate. Biteable says to [“Plan for 125 to 150 words of dialogue per minute,”](https://biteable.com/blog/video-script/) and Raka Creative notes that [people speak at about 125 to 150 words a minute](https://www.rakacreative.com/blog/video-marketing/marketing-video-script-how-to), which leaves only 60 to 75 words for a 30-second video. The table applies that range to common lengths.',
    },
    {
      type: 'table',
      head: ['Runtime', 'Spoken words (125 to 150 a minute)', 'What fits'],
      rows: [
        ['15 seconds', 'About 31 to 38', 'Hook, one benefit, call to action. Show the proof instead of saying it'],
        ['30 seconds', 'About 62 to 75', 'All five parts, one line each, with the problem and solution slightly longer'],
        ['60 seconds', 'About 125 to 150', 'All five parts, with room for one example or a short demonstration'],
        ['90 seconds', 'About 188 to 225', 'An explainer or a customer story with a clear middle'],
      ],
    },
    {
      type: 'p',
      text: 'These are ceilings, not targets. Scenes with no speech still use seconds, and a pause before the call to action lands better than a rushed one. The range comes from English-language guides, so time a Georgian read-through yourself instead of assuming the same word count fits. For how long a video should run on each platform, see [how long a marketing video should be](/blog/how-long-should-a-marketing-video-be).',
    },
    { type: 'h2', text: 'How to write an explainer video script' },
    {
      type: 'p',
      text: 'An explainer script follows the same five parts but spends its time differently. The viewer has usually opted in (they clicked, searched or were sent the link), so the hook can be shorter and the middle longer. Lemonlight says most marketing video scripts should run 30 to 90 seconds and that longer scripts suit explainers, where the viewer has already opted in. At the speaking rate above, the 60 to 90 second end is roughly 125 to 225 words. Build it from these beats.',
    },
    {
      type: 'ol',
      items: [
        'Name the problem in the viewer’s own words (hook and problem together, 5 to 10 seconds).',
        'Say what happens if it stays unsolved, in one sentence.',
        'Introduce the product or service in one sentence: what it is and who it is for.',
        'Walk through how it works in three steps or fewer, and show each step on screen while you say it.',
        'Give one piece of proof: a result, a screen recording of it working, or a customer line you have permission to use.',
        'End with one next step, spoken and written.',
      ],
    },
    {
      type: 'p',
      text: 'Keep the language plain. If a term would need explaining to a new customer, replace it, or show it. The most common explainer failure is describing features in the order the company thinks of them rather than in the order the viewer’s problem unfolds. If you plan to draft the script with an AI tool, read [where AI video fits in a marketing workflow](/blog/ai-video-for-marketing) first, and have a person check every claim in the final text.',
    },
    { type: 'h2', text: 'Check the script before anyone films' },
    {
      type: 'ol',
      items: [
        'Read it aloud with a timer. Biteable’s advice is [“Read your script out loud,”](https://biteable.com/blog/video-script/) because spoken lines often read differently than they look on the page.',
        'Cut every sentence that does not serve the one goal from the first section.',
        'Check that the brand appears in the first few seconds, not only at the end.',
        'Check that every claim, number and customer line has a source you can show if asked.',
        'Check that the call to action asks for one thing only.',
        'Write a second hook. Two openings tested against the same body show you which one stops the scroll.',
      ],
    },
    {
      type: 'p',
      text: 'Changing a line in a script costs nothing; reshooting costs crew time, which is why the script is worth the extra hour. If you want to see how scripts feed into a production quote, read [how much a marketing video costs](/blog/marketing-video-cost).',
    },
    {
      type: 'p',
      text: 'WakeUP scripts, shoots and edits short videos for ads, Reels and TikTok and tests them in campaigns. See the [video production service](/services/video-production), or start with the [free marketing audit](/audit) if you are not sure which videos your business needs first.',
    },
  ],
}
