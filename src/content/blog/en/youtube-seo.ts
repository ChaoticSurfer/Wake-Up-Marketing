import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'youtube-seo',
  title: 'YouTube SEO: how to rank videos in YouTube search',
  metaTitle: 'YouTube SEO: Rank Videos in Search',
  description:
    'YouTube SEO means matching a video to one search query and keeping viewers watching. Keyword, title, description, thumbnail, chapters and what to measure.',
  publishedAt: '2027-01-13T15:00:00+04:00',
  updatedAt: '2027-01-13T15:00:00+04:00',
  service: 'seo',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'YouTube SEO is making each video match one search query and then keeping the people who click on it watching. YouTube’s help page says its search looks at relevance, engagement signals and quality. In practice: pick one keyword per video, put it in the title and description, make a thumbnail that earns the click, and open and structure the video so viewers stay.',
    },
    { type: 'h2', text: 'How YouTube search decides what to show' },
    {
      type: 'p',
      text: 'YouTube’s help page on search names the factors. Relevance is judged by [“how well the title, tags, description, and video content match your search query”](https://support.google.com/youtube/answer/16090438?hl=en). Engagement counts too: the same page says [“Engagement signals are a valuable way to determine relevance.”](https://support.google.com/youtube/answer/16090438?hl=en) The third factor is quality, meaning which channels show expertise, authoritativeness and trustworthiness on a topic. Results can also differ by viewer, because the system may use a person’s search and watch history.',
    },
    {
      type: 'p',
      text: 'Two consequences. You cannot optimise a video with metadata alone, because what happens inside the video counts. And because the quality factor looks at which channels show expertise on a given topic, it makes sense for a company channel to stay close to the subjects it knows. This post covers YouTube’s own search. Getting a video found in Google results, or on your own pages, is a different job, covered in [video SEO](/blog/video-seo).',
    },
    { type: 'h2', text: 'One keyword per video' },
    {
      type: 'p',
      text: 'Start from the question a customer types, not from your product name. Type the beginning of the phrase into the YouTube search box and note the suggestions; [Ahrefs](https://ahrefs.com/blog/youtube-seo/) suggests putting an asterisk before or after the keyword as a wildcard to see more variations. Then search the phrase and open the top three to five results. They show what viewers expect for that query: a step-by-step tutorial, a list, a comparison or a different meaning of the term. If every top result is a 10-minute tutorial and you plan a 90-second ad, you have the wrong format for that keyword.',
    },
    {
      type: 'p',
      text: 'Choose one main keyword per video, and use one video for one question. For ways to find specific searches that are easier to win, see [long-tail keywords](/blog/long-tail-keywords) and [keyword research for SEO](/blog/keyword-research-for-seo). If your audience searches in Georgian, check the suggestions in Georgian and in English separately; they are different searches.',
    },
    { type: 'h2', text: 'Title, description and tags' },
    {
      type: 'p',
      text: 'YouTube’s help page on metadata says that [“Your video’s title, thumbnail, and description are more important pieces of metadata for your video’s discovery”](https://support.google.com/youtube/answer/146402) than tags. Briggsby’s study, as cited by [Ahrefs](https://ahrefs.com/blog/youtube-seo/), found that more than 90% of top-ranking videos included at least part of a target keyword in their title. Work through the fields in this order:',
    },
    {
      type: 'ul',
      items: [
        'Title: the keyword near the start, short enough not to be cut off, written for a person. A title that reads like a keyword list loses clicks.',
        'Description: the keyword and related terms in plain sentences, with the key information in the first lines, then links to your site and the next video. Do not stuff terms.',
        'Tags: add them if people misspell your topic or brand. YouTube says tags are useful when the content is commonly misspelled and otherwise [“play a minimal role in your video’s discovery.”](https://support.google.com/youtube/answer/146402)',
        'Captions and transcript: upload accurate captions in the video’s language. They help viewers who watch without sound and give YouTube clean text to read.',
        'Language: write the title and description in the language your viewers search in.',
      ],
    },
    { type: 'h2', text: 'The thumbnail and title work as a pair' },
    {
      type: 'p',
      text: 'The same YouTube page puts the thumbnail alongside the title and description as a key piece of metadata, and the title and thumbnail are what a viewer sees before clicking. The thumbnail should show the topic at a glance, with a few words at most, and add to the title instead of repeating it. Design rules are in [video thumbnails and reel covers](/blog/video-thumbnails-and-reel-covers). The promise must be kept: a click followed by a quick exit is a sign that the video did not match what was promised.',
    },
    { type: 'h2', text: 'Keep viewers watching' },
    {
      type: 'p',
      text: 'Because engagement is a ranking input, structure matters as much as keywords. [Ahrefs](https://ahrefs.com/blog/youtube-seo/) calls the first 10 to 15 seconds critical for a video’s success, and points to the audience retention report in YouTube analytics for finding where people leave. Practical steps:',
    },
    {
      type: 'ol',
      items: [
        'Open with the answer or the result, then say what the video will cover. Cut introductions and logos.',
        'Script how-to videos, and cut pauses, repeats and detours.',
        'Look at the retention graph after a week. A steep drop in the first seconds means the hook or the promise is wrong; a drop at one point means that section should be cut or moved.',
        'Reply to comments, especially early, and ask a specific question to start a discussion.',
        'Point to a related video with cards and end screens, and build series, so a viewer who finishes one video moves to the next.',
      ],
    },
    {
      type: 'p',
      text: 'Chapters help longer videos. YouTube’s help page says to [“add a list of timestamps and titles”](https://support.google.com/youtube/answer/9884579?hl=en) in the description, with the first timestamp at 00:00, at least three timestamps in ascending order, and a minimum chapter length of 10 seconds. Chapters let a viewer jump to the part they want, which suits a search-led video. For hook ideas, see [short-form video hooks](/blog/short-form-video-hooks), and for Shorts, [YouTube Shorts for business](/blog/youtube-shorts-for-business).',
    },
    { type: 'h2', text: 'Study what already ranks, then do something useful' },
    {
      type: 'p',
      text: 'Before filming, list the top five results for your keyword and note: their length, how they open, which subtopics they cover, what is missing, and what their comments ask for. Comments are free research: unanswered questions are your outline. The goal is not to copy them but to be the clearest and most complete answer, with something only your company can show, such as your process, your product in use or a real customer situation. [Behind-the-scenes video ideas](/blog/behind-the-scenes-video-ideas) and [video marketing for small business](/blog/video-marketing-for-small-business) cover formats that carry that.',
    },
    { type: 'h2', text: 'What to measure' },
    {
      type: 'table',
      head: ['Metric in YouTube Studio', 'What it tells you', 'What to change'],
      rows: [
        ['Impressions and click-through rate', 'Whether people who see the video click it', 'Title and thumbnail'],
        ['Average view duration and retention graph', 'Whether the video keeps its promise', 'Hook, pacing, length'],
        ['Traffic sources: YouTube search', 'Which queries bring viewers', 'Keywords for the next video'],
        ['Link clicks and enquiries', 'Whether the video produces business', 'Description links, spoken call to action'],
      ],
    },
    {
      type: 'p',
      text: 'Give a video a few weeks before judging it, and compare it with your other videos rather than with big channels. Views are not the goal for a company; enquiries are. Tie them to your [marketing KPIs](/blog/marketing-kpis).',
    },
    { type: 'h2', text: 'Where YouTube fits in your SEO plan' },
    {
      type: 'p',
      text: 'YouTube search is a second search engine alongside Google, and a video can serve both. For companies that need both worked together, WakeUP offers [SEO as a service](/services/seo) for site, content and local search, and short videos for ads and social through its [video production](/services/video-production) service. A [free marketing audit](/audit) is a way to see where search could bring you more enquiries.',
    },
  ],
}
