import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'audio-quality-for-business-videos',
  title: 'Audio quality for business videos: why sound matters and which mic to use',
  metaTitle: 'Audio Quality for Business Videos',
  description:
    'Audio quality for business videos affects how much viewers trust them. Compare lavalier, shotgun and phone mics for talking-head and event video.',
  publishedAt: '2027-01-26T18:00:00+04:00',
  updatedAt: '2027-01-26T18:00:00+04:00',
  service: 'video',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Audio quality for business videos deserves as much attention as the picture, because viewers rate what is hard to hear less favourably. For one person talking to camera, a lavalier (clip-on) microphone close to the mouth is the safest choice. For events and moving subjects, use a shotgun mic on a boom or a separate recorder. A phone mic is a backup, not a plan.',
    },
    { type: 'h2', text: 'Why sound decides how a video is judged' },
    {
      type: 'p',
      text: 'This has been tested. In a study by Newman and Schwarz published in the journal Science Communication in 2018, as [reported by USC Dornsife](https://dornsife.usc.edu/news/stories/norbert-schwarz-research-links-sound-quality-belief/), people who watched conference talks and listened to radio science interviews rated the talks, the speakers and the research lower when the audio was hard to hear. The authors link it to how easily information is processed. Schwarz put it this way: "Anything that makes you stumble, makes the information seem less true."',
    },
    {
      type: 'p',
      text: 'The experiments used conference talks and science interviews, not company videos, so treat them as a strong hint rather than proof about your own audience. The practical point is the same: if a viewer has to work to understand your founder, your product demo or your customer, the message loses force. Echo, hiss and a speaker who drifts in and out cannot be fixed by a better camera.',
    },
    { type: 'h2', text: 'The microphone options, compared' },
    {
      type: 'p',
      text: 'Wistia, the video platform, notes that a camera\'s built-in microphone often gives "roomy audio" because the camera is too far from the speaker, and advises [keeping the mic as close to the speaker as possible without it appearing in frame](https://wistia.com/blog/recording-audio-for-business-video). The four options below follow from that rule: how close can you get, and how much does the speaker move.',
    },
    {
      type: 'table',
      head: ['Option', 'Best for', 'Strength', 'Watch out for'],
      rows: [
        ['Lavalier (clip-on), wired', 'One seated speaker, interviews, testimonials', 'Close to the mouth, out of shot, usually the cheaper choice', 'The cable limits movement; rustle if clothing rubs the mic'],
        ['Lavalier, wireless', 'A presenter who walks, demos, small events', 'Free movement', 'Batteries, radio interference, a receiver to monitor'],
        ['Shotgun on a boom or stand', 'Event moments, moving subjects, shots where nothing may clip on the speaker', 'Isolates one voice and stays out of the shot', 'Needs an operator or stand; the speaker must stay in the pickup zone'],
        ['Phone or camera mic', 'A scratch track, quick updates, backup audio', 'Always with you', 'Picks up the whole room; quality depends entirely on distance'],
      ],
    },
    {
      type: 'p',
      text: 'These strengths and weaknesses match what [Wistia](https://wistia.com/blog/recording-audio-for-business-video) and [Small Business Trends](https://smallbiztrends.com/lavalier-microphone/) describe: wired lavs usually sound a little better and cost less, wireless ones allow free movement, and shotgun mics keep out of the shot but need a boom pole or stand. Prices change often and depend on the shop, so check current listings rather than relying on a number in an article.',
    },
    { type: 'h2', text: 'Lavalier vs shotgun: how to choose' },
    {
      type: 'p',
      text: 'Videomaker advises that a lavalier is [usually the best choice for interviews](https://www.videomaker.com/article/c4/1225-sound-reasoning-interview-audio/) because it records good sound without being visible, while a boom gets almost as good a sound without attaching anything to the speaker but needs an extra crew member to hold it. That gives a simple rule.',
    },
    {
      type: 'ul',
      items: [
        'One person, one location, time to set up: lavalier.',
        'Several short interviews in one day, speakers who dislike wearing a mic, or a look where nothing may show: shotgun on a boom with an operator.',
        'A speaker who walks between stations or presents to a room: wireless lavalier, plus a recorder as backup.',
        'A panel or round table: a lavalier on each person, or a shotgun on a boom above the table, never one phone in the middle.',
      ],
    },
    { type: 'h2', text: 'Place the mic correctly' },
    {
      type: 'p',
      text: 'Fstoppers advises clipping a lavalier [about six to eight inches from the speaker\'s mouth](https://fstoppers.com/audio/how-use-lavalier-microphones-interview-video-production-168250), on the neckline of a shirt or the edge of a jacket. Clipped right at the neck it gives a deeper, guttural tone that is usually unwanted. If the mic is not omnidirectional, point its front towards the mouth.',
    },
    {
      type: 'p',
      text: 'For a boom, Videomaker describes the operator holding the mic as close to the subject as possible without letting it into the frame, usually above and in front of the speaker and aimed at the mouth, standing still so the movement does not become noise. With a phone as the mic, the only lever you have is distance: put it a hand\'s width from the speaker, not on a table across the room.',
    },
    { type: 'h2', text: 'Check the sound before you roll' },
    {
      type: 'p',
      text: 'Most audio failures are found in the edit, when it is too late. Videomaker\'s check is simple: after placing the mic, wear headphones and record a short test where the speaker says and spells their name. Thin sound suggests the mic is not aimed at the mouth. Pops or breathiness suggest it is too close. Echo or background noise suggests it is too far away.',
    },
    {
      type: 'ol',
      items: [
        'Choose the quietest room available and switch off fans, air conditioning and notifications. Soft furnishings such as curtains and rugs reduce echo.',
        'Place the mic, put on headphones and record the name test.',
        'Set the level so the loudest line does not clip (distort). Wistia suggests setting gain around 75% using the speaker\'s real speaking volume as the test.',
        'Record a few seconds of silence for the editor, and run a phone or recorder as a second track if the shot matters.',
        'Listen to the first minute of the real take on headphones before continuing.',
      ],
    },
    { type: 'h2', text: 'What editing can and cannot fix' },
    {
      type: 'p',
      text: 'Editing can level volume, trim breaths and reduce steady hiss. It cannot remove room echo, bring back words lost to clipping or separate one voice from another at the same volume. Subtitles help viewers who watch with the sound off, but they do not replace clean audio; see [captions and subtitles for social videos](/blog/captions-subtitles-for-social-videos) and [video editing basics for business](/blog/video-editing-basics-for-business).',
    },
    { type: 'h2', text: 'Where to go next' },
    {
      type: 'p',
      text: 'For framing, light and delivery on camera, read [talking head video tips](/blog/talking-head-video-tips). To prepare locations, release forms and call sheets, see [how to plan a video shoot](/blog/how-to-plan-a-video-shoot). For customer interviews specifically, [how to make a testimonial video](/blog/how-to-make-a-testimonial-video) covers the questions and set-up.',
    },
    {
      type: 'p',
      text: 'If you would rather not manage microphones, scripts and edits yourself, WakeUP scripts, shoots and edits short videos for ads, Reels and TikTok and tests them in campaigns: see [video production](/services/video-production). Not sure what your current marketing needs first? Ask for the [free marketing audit](/audit).',
    },
  ],
}
