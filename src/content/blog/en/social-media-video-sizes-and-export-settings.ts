import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'social-media-video-sizes-and-export-settings',
  title: 'Social media video aspect ratios and sizes, with export settings',
  metaTitle: 'Social Media Video Aspect Ratios & Sizes',
  description:
    'Social media video aspect ratios and sizes for Reels, TikTok, Facebook and Stories, with safe zones and export settings from the platforms\' own docs.',
  publishedAt: '2027-01-03T12:00:00+04:00',
  updatedAt: '2027-01-03T12:00:00+04:00',
  service: 'video',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'For social media video, export vertical 9:16 at 1080 x 1920 pixels (or higher), as an MP4 with H.264 video and AAC audio, and keep text and logos away from the top and bottom of the frame. That one file works for Reels, Stories, TikTok and Shorts. Facebook Feed is the main exception: Meta lists 4:5 as its feed ratio. The tables below give the numbers each platform publishes.',
    },
    {
      type: 'p',
      text: 'Most published numbers come from advertising specs, which are stricter than organic uploads. Where a limit is for organic posts, the table says so. Platforms change these limits, so check the linked page before a large production.',
    },
    { type: 'h2', text: 'Size, ratio and limits by placement' },
    {
      type: 'table',
      head: ['Placement', 'Ratio', 'Recommended size', 'Length and file limit', 'Source'],
      rows: [
        [
          'Instagram Reels ad',
          '9:16',
          '1440 x 2560 px',
          'Up to 15 minutes, 4 GB, MP4 or MOV',
          '[Meta Ads Guide](https://www.facebook.com/business/ads-guide/update/video/instagram-reels)',
        ],
        [
          'Instagram Reel (organic)',
          '9:16 (as for Reels ads)',
          'Not stated on Instagram\'s page; the Reels ad size is a safe master',
          '3 seconds to 3 minutes',
          '[Instagram](https://about.instagram.com/blog/tips-and-tricks/how-to-make-instagram-reels)',
        ],
        [
          'Instagram Stories ad',
          '9:16',
          '1440 x 2560 px',
          '1 second to 60 minutes, 4 GB; clips of 16 seconds or more may be split into up to three cards',
          '[Meta Ads Guide](https://en-gb.facebook.com/business/ads-guide/update/video/instagram-story)',
        ],
        [
          'Facebook Feed video ad',
          '4:5',
          '1440 x 1800 px',
          '1 second to 241 minutes, 4 GB, MP4, MOV or GIF',
          '[Meta Ads Guide](https://www.facebook.com/business/ads-guide/video)',
        ],
        [
          'TikTok in-feed ad (not Spark)',
          '9:16 recommended; 1:1 and 16:9 accepted',
          'At least 540 x 960 px for 9:16',
          'Up to 10 minutes, 500 MB',
          '[TikTok Ads Help](https://ads.tiktok.com/help/article/video-ads-specifications)',
        ],
        [
          'YouTube Shorts',
          'Vertical',
          'Up to 1080p',
          'Up to 3 minutes',
          '[YouTube Help](https://support.google.com/youtube/answer/10059070)',
        ],
      ],
    },
    {
      type: 'p',
      text: 'The TikTok page was last updated in June 2026. It also lists .mp4, .mov, .mpeg, .3gp and .avi as accepted formats and a bitrate of at least 516 kbps. Meta\'s minimum widths vary by placement and sometimes by video length (for Reels ads, 250 pixels under 30 seconds and 500 pixels for longer ones), so a file at the recommended size clears them easily.',
    },
    {
      type: 'p',
      text: 'How long a video should be for the job it does is a separate question; see [how long a marketing video should be](/blog/how-long-should-a-marketing-video-be). The limits above are maximums, not targets.',
    },
    { type: 'h2', text: '9:16 or 4:5?' },
    {
      type: 'p',
      text: 'Use 9:16 for anything that fills the phone screen: Reels, Stories, TikTok and Shorts. Meta\'s [Reels ads page](https://www.facebook.com/business/ads/facebook-instagram-reels-ads) recommends 9:16 video with audio and key messages inside the safe zone. Use 4:5 when the main place is the Facebook feed, where Meta\'s spec page lists it as the feed ratio.',
    },
    {
      type: 'ul',
      items: [
        'If one video must serve both, shoot with the subject in the centre, export 9:16, and make a 4:5 version by cropping, checking that nothing important is lost at the sides.',
        'Avoid putting 16:9 footage into a vertical frame with black bars. It leaves the subject small on a phone.',
        'Shoot a little wider than you need and keep the action in the middle, so both crops work.',
      ],
    },
    { type: 'h2', text: 'Safe zones: where text should not go' },
    {
      type: 'p',
      text: 'Apps put buttons, captions and profile names on top of your video. Meta\'s Ads Guide says to keep about 14 percent of the top, 35 percent of the bottom and 6 percent on each side free of text, logos or key creative for Reels and Stories ads. On a 1080 x 1920 frame that is roughly 270 pixels at the top, 670 at the bottom and 65 at each side (calculated from the percentages).',
    },
    {
      type: 'p',
      text: 'TikTok publishes safe zone templates rather than one percentage, and says the safe zone depends on orientation, caption length and extra formats, so download its current file from the [specifications page](https://ads.tiktok.com/help/article/video-ads-specifications) for ads. A cautious rule for any platform is to keep subtitles and logos in the middle band and test the video on a phone before posting.',
    },
    { type: 'h2', text: 'Export settings that work almost everywhere' },
    {
      type: 'p',
      text: 'The platforms re-compress what you upload, so give them a clean, standard file. YouTube\'s [recommended upload encoding settings](https://support.google.com/youtube/answer/1722171) are a good general baseline, and Meta\'s feed spec asks for the same family of settings.',
    },
    {
      type: 'table',
      head: ['Setting', 'Use', 'Why'],
      rows: [
        ['Container', 'MP4', 'Accepted on every platform above'],
        ['Video codec', 'H.264, progressive scan', 'Named by YouTube and Meta'],
        ['Frame rate', 'Same as recorded (often 24, 25 or 30), constant', 'YouTube says to upload at the rate the video was recorded; Meta asks for a fixed frame rate'],
        ['Resolution', '1080 x 1920 for 9:16 (1440 x 2560 for a Meta ad master)', 'See the table above'],
        ['Bitrate', 'About 8 Mbps for 1080p at 24 to 30 fps, 12 Mbps at 48 to 60 fps', 'YouTube\'s SDR guidance; TikTok requires at least 516 kbps'],
        ['Audio', 'AAC, stereo', 'Meta asks for stereo AAC at 128 kbps or higher; YouTube lists 384 kbps for stereo'],
        ['File container', 'No edit lists or special boxes', 'Meta states videos should not contain them'],
      ],
    },
    {
      type: 'p',
      text: 'Most editing apps can export to this with a "high quality" or "YouTube" preset. [Instagram Reels editing tips](/blog/instagram-reels-editing-tips) covers the editing steps before export, and [capturing a cover image](/blog/video-thumbnails-and-reel-covers) covers thumbnails, which have their own size rules.',
    },
    { type: 'h2', text: 'A check before you publish' },
    {
      type: 'ol',
      items: [
        'Open the exported file, not the project, and play it on a phone with sound on and off.',
        'Check that the first frame makes sense, because it may be used as the cover.',
        'Check that subtitles and logos are inside the safe zone.',
        'Check the file size and length against the placement table.',
        'Keep a master file at the highest size and export platform versions from it.',
      ],
    },
    {
      type: 'p',
      text: 'Video content is king, and getting the format right is the easy part. WakeUP scripts, shoots and edits short videos for ads, Reels and TikTok and tests them in campaigns; see the [video production service](/services/video-production). To see how your current videos and channels perform, ask for a [free audit](/audit).',
    },
  ],
}
