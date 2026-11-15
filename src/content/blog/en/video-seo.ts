import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'video-seo',
  title: 'Video SEO: how to get your videos to show in Google',
  metaTitle: 'Video SEO: Get Videos Into Google',
  description:
    'Video SEO means making a video indexable: a watch page, a visible player, a unique title, a fetchable thumbnail, and structured data or a sitemap.',
  publishedAt: '2027-01-10T09:00:00+04:00',
  updatedAt: '2027-01-10T09:00:00+04:00',
  service: 'seo',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Video SEO is the work of making a video eligible to appear in Google results. In practice that means a page whose main purpose is that video (a watch page), a player that is visible when the page loads, a unique title and description, a thumbnail Google can fetch, and metadata in structured data or a video sitemap. Then you check it in Search Console.',
    },
    { type: 'h2', text: 'Start with the watch page, not the video file' },
    {
      type: 'p',
      text: 'Google\'s [video best practices](https://developers.google.com/search/docs/appearance/video) say the page has to be indexed and perform well in Search before its video can be considered, and that indexing the page does not guarantee the video is indexed. They also define a watch page as one whose main purpose is showing a single video. A page where the video is secondary, for example a blog post that reviews a video, does not qualify.',
    },
    {
      type: 'p',
      text: 'This changes how you plan. A blog article with a clip somewhere in the middle is useful for readers, but it is not the page Google will treat as the home of that video. If a video matters for search, give it its own page, with the video near the top and a unique title and description, as Google asks.',
    },
    { type: 'h2', text: 'Where to host: YouTube, your own server, or both' },
    {
      type: 'p',
      text: 'Google does not rank hosting choices, but its rule about watch pages tells you what each choice gives you. A video uploaded to YouTube has a YouTube watch page. A video embedded on your site can be indexed on your page if that page is a watch page. Which one shows is not something you fully control, so decide by goal.',
    },
    {
      type: 'table',
      head: ['Option', 'What it gives you', 'What to watch'],
      rows: [
        ['YouTube only', 'Reach inside YouTube and a ready player. Add chapter timestamps and labels in the description, which Google lists as the way to set key moments for YouTube videos.', 'The watch page is on YouTube, not your site.'],
        ['Self-hosted or third-party player embedded on your page', 'Your own page can be the indexed watch page, with your text and links around it.', 'You must supply the metadata yourself, and the file and player URLs must stay fetchable.'],
        ['YouTube plus an embed on your own watch page', 'Both exist. Use the embed on a page built around that one video.', 'Keep titles and descriptions unique on each page, as Google asks for each watch page.'],
      ],
    },
    {
      type: 'p',
      text: 'Whichever you pick, embed with a standard element. Google lists `<video>`, `<embed>`, `<iframe>` and `<object>`, says it cannot reliably load videos from URL fragments, and warns: "Don\'t rely on user actions (such as swiping, clicking, or typing) to load the video." The Search Console video indexing report names the usual symptom: the player is not present in the page when loaded, which often happens when a screenshot must be clicked before playback.',
    },
    { type: 'h2', text: 'Titles, descriptions and text on the page' },
    {
      type: 'p',
      text: 'Every watch page needs its own title and description. Write the title as a plain description of what the video shows, with the phrase people would search near the front. Below the player, put a short written summary and, where it fits, the transcript or the key points. This is a practical judgement rather than a Google requirement: Google\'s video documentation does not mention transcripts, but text on the page is what lets search understand the page when it cannot watch the clip.',
    },
    {
      type: 'p',
      text: 'Captions are a separate job. On YouTube you can upload a subtitle or caption file, or a transcript that [syncs to the video automatically](https://support.google.com/youtube/answer/2734796), and YouTube says captions help you reach people who are deaf or hard of hearing and people who speak other languages. For caption styles on social clips, see [captions and subtitles for social videos](/blog/captions-subtitles-for-social-videos).',
    },
    { type: 'h2', text: 'Thumbnails Google can use' },
    {
      type: 'p',
      text: 'Google\'s guidance on thumbnails is technical. Supported formats are BMP, GIF, JPEG, PNG, WebP, SVG and AVIF. The minimum size is 60 by 30 pixels, with larger preferred. Googlebot must be able to fetch the file, so do not block it with robots.txt or a login. Use one stable thumbnail URL per video, kept identical wherever you set it.',
    },
    {
      type: 'p',
      text: 'The indexing report lists the failures you will actually see: no thumbnail URL, invalid size, unsupported format, a transparent thumbnail, a thumbnail blocked by robots.txt, or one Google could not reach. Design questions (what makes a viewer click) are covered in [video thumbnail best practices](/blog/video-thumbnails-and-reel-covers).',
    },
    { type: 'h2', text: 'Structured data and the video sitemap' },
    {
      type: 'p',
      text: 'Google reads video metadata from structured data, a video sitemap or Open Graph. The [VideoObject documentation](https://developers.google.com/search/docs/appearance/structured-data/video) requires `name`, `thumbnailUrl` and `uploadDate`, and recommends `description`, `duration`, `contentUrl` and `embedUrl`. Two lines in it prevent common mistakes: `contentUrl` must be the video file itself, and `embedUrl` must be the player itself. Neither should be the page where the video lives. If `contentUrl` is not available, give `embedUrl`. The general method is in [schema markup for small business](/blog/schema-markup-for-small-business).',
    },
    {
      type: 'p',
      text: 'A [video sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/video-sitemaps) is the alternative or addition when you have many videos. Each entry needs the watch page as `<loc>`, plus `<video:thumbnail_loc>`, `<video:title>`, `<video:description>` (up to 2048 characters) and either `<video:content_loc>` or `<video:player_loc>`. Google recommends content_loc when available. You can list several videos under one page.',
    },
    {
      type: 'p',
      text: 'To set key moments yourself, Google points to `Clip` structured data, which gives exact start and end times and labels. Without it Google tries to detect segments automatically but prioritises the moments you specify. For a livestream, `BroadcastEvent` markup is how a page becomes eligible for the LIVE badge.',
    },
    { type: 'h2', text: 'Check it in Search Console' },
    {
      type: 'ol',
      items: [
        'Open the [Video indexing report](https://support.google.com/webmasters/answer/9495631). It marks pages "Video indexed" or "No video indexed" and gives a reason for the latter, such as the video not being on a watch page.',
        'Fix the reason on the page, then validate. Reasons are usually one of three kinds: page structure, thumbnail, or fetch access.',
        'Test pages with VideoObject markup in the Rich Results Test to catch markup problems.',
        'Do not block the URL of the actual video file with noindex or robots.txt.',
      ],
    },
    {
      type: 'p',
      text: 'The report names the cause of each failure, so you do not need to guess. Re-check after each change rather than changing several things at once.',
    },
    { type: 'h2', text: 'Where video SEO sits in the bigger plan' },
    {
      type: 'p',
      text: 'Video SEO only helps if the video is worth finding. Start with the production and the offer: see [video marketing for small business](/blog/video-marketing-for-small-business). Then make sure the site basics hold: [what technical SEO is](/blog/what-is-technical-seo) covers crawling and indexing in general.',
    },
    {
      type: 'p',
      text: 'WakeUP offers [SEO as a service](/services/seo), including technical SEO audits and fixes, and a [video production service](/services/video-production) that scripts, shoots and edits short videos. To see where your site stands before changing anything, request the [free audit](/audit). Settings and Google documentation change, so treat the details here as correct for November 2026.',
    },
  ],
}
