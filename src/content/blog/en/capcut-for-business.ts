import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'capcut-for-business',
  title: 'CapCut for business: templates, music and which plan',
  metaTitle: 'CapCut for Business: Rules and Setup',
  description:
    'CapCut for business is fine for company videos if you check the licence: which templates, which music and which platforms are allowed, and free vs Pro.',
  publishedAt: '2026-12-22T15:00:00+04:00',
  updatedAt: '2026-12-22T15:00:00+04:00',
  service: 'video',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Yes, a business can use CapCut for company videos and ads, but only within its licence. Templates and effects must carry a commercial mark, and ordinary CapCut music is for personal use only. Brands should use CapCut\'s Commercial Sounds, which are cleared for CapCut and TikTok but not automatically for Instagram, YouTube or other places your ad may run.',
    },
    { type: 'h2', text: 'Can a business use CapCut?' },
    {
      type: 'p',
      text: 'CapCut\'s [Terms of Service](https://www.capcut.com/clause/terms-of-service) say that if you use the services on behalf of a business, your business is legally and financially responsible for that use. The rules for what you can put in a commercial video sit in a separate document, the [CapCut Materials License Agreement](https://www.capcut.com/clause/materials-license-agreement) (its last update is dated 22 January 2026). It covers templates, effects, filters, stickers and music. Read it before your team starts making ads.',
    },
    {
      type: 'p',
      text: 'For the wider question of which editing apps suit a company, see [the best video editing apps for business](/blog/best-video-editing-apps-for-business). This post stays on CapCut.',
    },
    { type: 'h2', text: 'Free or paid?' },
    {
      type: 'p',
      text: 'As listed on [CapCut\'s pricing page](https://www.capcut.com/pricing) in November 2026, there is a Free plan at $0, a Pro plan at $14 a month or $89.99 a year for one seat, and a Teams plan priced per seat for two or more people. Pro adds all premium templates, monthly AI credits and 1 TB of storage; Free includes free templates and basic editing tools. The page notes a 7-day Pro trial, with availability varying by region and platform, and says prices shown are for reference only. Prices change, so confirm at checkout.',
    },
    {
      type: 'p',
      text: 'The pricing page does not say whether the free plan carries a watermark or what export quality it allows, and it does not address commercial use by plan. Test one export before you commit a campaign to it. The licence, not the plan, decides what you may do commercially, so a paid plan does not by itself make every template or track safe for an ad.',
    },
    {
      type: 'table',
      head: ['Situation', 'Reasonable starting point'],
      rows: [
        ['One person trimming and captioning short clips', 'Free plan, after checking an export'],
        ['You want premium templates or more AI features', 'Pro, after reading which materials are commercial'],
        ['Two or more people editing for the same brand', 'Teams, which the pricing page lists with a brand kit and shared Pro features'],
        ['A campaign with a fixed brief, several formats and tight brand rules', 'Consider a production partner rather than more app seats'],
      ],
    },
    { type: 'h2', text: 'Templates: what the licence allows' },
    {
      type: 'p',
      text: 'The Materials License Agreement says that Platform Materials "may be used for commercial or non-commercial purposes", that certain ones "may be used for limited commercial purposes", and that materials usable for both are shown with marks such as "commercial use" or "commercial". Two practical rules follow:',
    },
    {
      type: 'ul',
      items: [
        'Look for the commercial mark before you use a template, effect or sticker in an ad or promotional post.',
        'Do not mix. If a video combines commercial-mark material with non-commercial material, the agreement says you can use that video only for personal and non-commercial purposes.',
      ],
    },
    {
      type: 'p',
      text: 'Templates also make videos look alike. A template is fine for a quick product teaser or a text-over-footage clip. If your brand depends on a recognisable look, build your own layout once, save it and reuse it.',
    },
    { type: 'h2', text: 'Music: where businesses get caught' },
    {
      type: 'p',
      text: 'The agreement separates two libraries. Ordinary Sounds are for video "only for personal entertainment and non-commercial purposes", and it states "You shouldn\'t use a Sound for any commercial purpose" without the necessary rights. Commercial Sounds are "made available to brands, businesses, commercial entities, advertisers or other Platform users", with a limit on where: the agreement names CapCut, TikTok and TikTok for Business as the permitted platforms, and says use of Commercial Sounds outside them needs separate permission.',
    },
    {
      type: 'p',
      text: 'In practice, a video using a Commercial Sound is cleared for CapCut and TikTok. It is not cleared by that agreement for a Facebook or Instagram ad, a YouTube video or your website. TikTok says the same about its own catalogue: its [Commercial Music Library](https://ads.tiktok.com/help/article/commercial-music-library?lang=en) is "a pre-cleared global music library of 1 million songs", and "Businesses cannot use the general music library for commercial usage."',
    },
    {
      type: 'ul',
      items: [
        'For ads outside TikTok, use music you have licensed for that use, or a commissioned track, and keep the licence.',
        'A voiceover you record yourself avoids the question for that layer of sound.',
        'Export a separate version for each platform if the music differs.',
        'Keep a record of where each track came from. If a platform claims copyright, a licence record settles it quickly.',
      ],
    },
    { type: 'h2', text: 'A workable setup for company videos' },
    {
      type: 'ol',
      items: [
        'Write a short script first. [A video script template](/blog/marketing-video-script-template) helps; editing is quicker when you know the hook, the point and the call to action.',
        'Film vertically with good light and clean sound, on a phone if you must.',
        'Edit in CapCut using your own layout, brand colours and captions in the language of the audience.',
        'Choose music last, from a source cleared for the platform where the video will run.',
        'Export one file per platform and keep the project for the next video.',
      ],
    },
    { type: 'h2', text: 'When CapCut is not enough' },
    {
      type: 'p',
      text: 'CapCut edits what you give it. It does not decide what to say, film it well or learn which version sells. If you need a steady flow of ad videos, Reels and TikTok videos, with scripts, filming and editing handled and tested in campaigns, that is what WakeUP\'s [video production service](/services/video-production) is for. It sits well next to an in-house CapCut workflow: your team makes the quick posts, a production team makes the pieces that carry a campaign. [Marketing video cost](/blog/marketing-video-cost) explains what those budgets are made of, and the [free marketing audit](/audit) is a way to see where video would fit in your marketing.',
    },
  ],
}
