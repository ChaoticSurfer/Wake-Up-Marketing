import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'how-to-shoot-business-videos-with-phone',
  title: 'How to make videos for social media with your phone: a shooting guide for business',
  metaTitle: 'How to Make Social Videos With a Phone',
  description:
    'How to make videos for social media with your phone: camera settings, vertical framing, steady shots, a minimal kit list and a pre-shoot checklist.',
  publishedAt: '2027-02-04T15:00:00+04:00',
  updatedAt: '2027-02-04T15:00:00+04:00',
  service: 'video',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To make videos for social media with your phone, hold it vertically, set 1080p or 4K at 30 frames per second, lock focus and exposure, keep the phone steady on a support, face a window for light and put a clip-on microphone near the speaker. A phone camera is good enough for most business videos. What decides quality is how steady, lit and audible the shot is, not the price of the phone.',
    },
    {
      type: 'p',
      text: 'This guide covers the shooting step. Planning the day is a separate job, and editing comes after it.',
    },
    { type: 'h2', text: 'Set up the phone before you press record' },
    {
      type: 'ul',
      items: [
        'Wipe the lens with a clean cloth. A fingerprint smear makes every shot look soft and cannot be fixed later.',
        'Free up storage and charge the phone. Video files are large.',
        'Turn on Do Not Disturb so a call or notification does not interrupt a take.',
        'Switch on the grid in camera settings so you can keep the horizon level. Apple\'s [camera tools guide](https://support.apple.com/guide/iphone/use-camera-tools-iph3dc593597/ios) explains how to turn on Grid and Level under Settings, Camera.',
        'Use the main rear camera for anything but quick selfie clips, and compare a test clip from both cameras on your own phone.',
      ],
    },
    { type: 'h2', text: 'Choose resolution and frame rate' },
    {
      type: 'p',
      text: 'Apple says an iPhone can record in formats such as HD and 4K, at 24, 25, 30, 60 or 120 frames per second depending on the model, and notes in [Record a video with your iPhone camera](https://support.apple.com/guide/iphone/record-a-video-iph61f49e4bb/ios) that "Faster frame rates and higher resolutions result in larger video files." Google says a Pixel can [record in 4K at up to 60 frames per second](https://support.google.com/pixelcamera/answer/7064897?hl=en) when you switch it on in Video Settings.',
    },
    {
      type: 'table',
      head: ['Setting', 'Good default for business video', 'Why'],
      rows: [
        ['Resolution', '1080p; 4K if you plan to crop in editing', '4K files fill the phone quickly, and 1080p is enough for most feeds'],
        ['Frame rate', '30 fps', 'Looks natural for people talking'],
        ['Slow motion (60 fps and above)', 'Only for product or movement shots you intend to slow down', 'Needs more light and makes bigger files'],
        ['Focus and exposure', 'Locked on your subject', 'Stops the picture pumping brighter and darker mid-take'],
      ],
    },
    {
      type: 'p',
      text: 'On an iPhone, touch and hold the focus area until the screen shows AE/AF Lock, according to Apple\'s camera tools page. Locking stops the camera refocusing when a hand or a car passes through the frame. The 1080p and 30 fps defaults are practical suggestions, not platform rules; check each platform\'s current upload specifications in our guide to [video sizes and export settings](/blog/social-media-video-sizes-and-export-settings).',
    },
    { type: 'h2', text: 'Shoot vertically and leave room at the edges' },
    {
      type: 'p',
      text: 'Reels, TikTok and Stories play full screen on a phone, so film with the phone upright. If you film horizontally and crop later, you throw away most of the picture. Frame your subject in the middle of the screen, because buttons and captions can cover the top, bottom and right-hand edges when the video plays. Leave some space above the head and keep text and important objects away from the borders. The video sizes post above shows the safe zones for each placement.',
    },
    { type: 'h2', text: 'Keep the shot steady' },
    {
      type: 'ul',
      items: [
        'For talking and product shots, put the phone on a small tripod or a clamp. Handheld talking videos tend to look amateur because of constant small movement.',
        'For walking or moving shots, hold the phone with both hands close to your body and bend your knees, and turn on built-in stabilisation.',
        'Use the lens buttons (such as 1x or 2x) instead of pinching to zoom. Pinching often means lower-quality digital zoom; moving closer is better than zooming in.',
      ],
    },
    {
      type: 'p',
      text: 'Phones have software stabilisation. Apple\'s guide says that on supported models Action mode provides improved stabilisation, works best in bright light and has a maximum capture resolution of 2.8K. On Pixel phones, Google lists Standard for light movement and, on Pixel 4a (5G) and later, Locked for still shots and Active for heavy movement. Software cannot rescue a shaky hand, but it helps when you are moving.',
    },
    { type: 'h2', text: 'Light and sound decide whether it looks professional' },
    {
      type: 'p',
      text: 'Do the light and sound first, and the picture will look better than a phone upgrade could make it. Stand facing a window, not with the window behind you, and read [video lighting tips for small business](/blog/video-lighting-tips-for-small-business) for setups from a window to a three-point kit. Poor sound is hard to fix in editing, so a clip-on microphone is the first thing worth buying; [audio quality for business videos](/blog/audio-quality-for-business-videos) compares the options. Record in a quiet room and switch off fans and air conditioners.',
    },
    { type: 'h2', text: 'A minimal kit list' },
    {
      type: 'table',
      head: ['Item', 'What it fixes', 'Priority'],
      rows: [
        ['Small tripod or phone clamp', 'Shaky, tilted shots', 'First'],
        ['Clip-on or lavalier microphone that fits your phone', 'Echo and distant, thin voice', 'First'],
        ['A window, or a ring light for rooms without daylight', 'Dark or uneven faces', 'First'],
        ['Microfiber cloth', 'Smudged lens', 'First'],
        ['Power bank', 'A dead phone halfway through a shoot', 'Second'],
        ['Extra storage or an empty phone', 'Running out of space on location', 'Second'],
      ],
    },
    { type: 'h2', text: 'A two-minute check before every take' },
    {
      type: 'ol',
      items: [
        'Lens clean, phone upright, Do Not Disturb on.',
        'Resolution and frame rate set, focus and exposure locked on the face or product.',
        'Light in front of the subject, not behind.',
        'Microphone connected, and a ten-second test recording played back with headphones.',
        'Eyes at lens height, a clear background and no clutter at the edges.',
        'Say your first line twice and keep the better one; the opening matters most.',
      ],
    },
    {
      type: 'p',
      text: 'Phone footage works well for behind-the-scenes clips, team introductions and quick tips. For ads, product launches and anything that must look polished, a crew with proper lighting and sound makes a visible difference. Video content is king, and [WakeUP scripts, shoots and edits short videos](/services/video-production) for ads, Reels and TikTok, then tests them in campaigns. If you are not sure whether your current content is working, the [free audit](/audit) is a place to start.',
    },
  ],
}
