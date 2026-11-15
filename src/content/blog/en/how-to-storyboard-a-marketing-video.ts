import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'how-to-storyboard-a-marketing-video',
  title: 'How to make a video storyboard before you shoot',
  metaTitle: 'How to Make a Video Storyboard',
  description:
    'How to make a video storyboard: break the script into shots, sketch each frame, add notes and review before filming. Includes a template.',
  publishedAt: '2027-01-08T15:00:00+04:00',
  updatedAt: '2027-01-08T15:00:00+04:00',
  service: 'video',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To make a video storyboard, start from the script, split it into scenes and then into single shots, and draw one simple frame for each shot with a line of notes underneath: what is in view, what moves, and what is said. Stick figures are fine. Then review the sequence on paper, fix what does not fit, and only then book the day to film.',
    },
    { type: 'h2', text: 'What a storyboard is and what it saves' },
    {
      type: 'p',
      text: 'A storyboard is a row of small panels, like a comic, each showing one planned shot. Videomaker describes it as [a series of simple sketches in which each panel shows a planned shot and its composition](https://www.videomaker.com/article/f8/2313-how-to-create-a-storyboard/), with arrows for camera movement and a short written description under each panel. Rough drawings are enough as long as they show the shot.',
    },
    {
      type: 'p',
      text: 'The saving comes from deciding on paper. The same article says that reviewing the sequence lets you make changes before you shoot, sometimes removing the need for a reshoot, and that planned shots help you avoid filming footage you will not use. Its summary: "By investing time up front, you can potentially save time and money later." Paper changes cost minutes; changes on a shoot day cost the crew, the location and the actors’ time. For what a shoot costs in the first place, see [marketing video cost](/blog/marketing-video-cost).',
    },
    { type: 'h2', text: 'Before you draw: finish the script' },
    {
      type: 'p',
      text: 'A storyboard shows the script; it cannot replace it. Write the goal, the viewer and the lines first (the [marketing video script template](/blog/marketing-video-script-template) covers this, including how many words fit in each length). A storyboard drawn before the script is guesswork, and drawn after the shoot is useless.',
    },
    { type: 'h2', text: 'Steps to storyboard a video' },
    {
      type: 'p',
      text: 'The steps below combine TechSmith’s script-to-shots approach with StudioBinder’s five stages: start with an idea, build the board, draw, add details, revise.',
    },
    {
      type: 'ol',
      items: [
        'Divide the script into scenes. A scene is one place and one moment: the office, the product on the table, the customer at the counter.',
        'Break each scene into shots, and add a new frame whenever the view changes. A close-up after a wide shot is two frames.',
        'Make a blank board. Draw a row of rectangles in the shape of your final video. Print the grid or use squared paper; you do not need software.',
        'Sketch each frame. Show where the person or product sits in the frame. Boxes and stick figures are enough.',
        'Mark the focus and the movement. Note what the viewer should look at, whether the subject moves, and whether the camera pans, tilts or stays still. Use arrows.',
        'Write the line under the frame. Add the spoken words, on-screen text and sound for that shot.',
        'Note transitions and inserts. Mark where you cut, and where you drop in extra footage, a screen recording or a logo.',
        'Revise. Read the board from start to finish and remove frames that repeat. Then turn it into a shot list in filming order.',
      ],
    },
    { type: 'h2', text: 'A storyboard template you can copy' },
    {
      type: 'p',
      text: 'Draw this as a row of panels or paste it into a sheet. One row per shot:',
    },
    {
      type: 'table',
      head: ['Shot', 'Frame (sketch)', 'Framing', 'Action and movement', 'Line or on-screen text', 'Length'],
      rows: [
        ['1', 'Person facing camera, product on table', 'Medium close-up', 'Still; person lifts product', '"Most people choose X for the wrong reason."', '3 s'],
        ['2', 'Product in hand', 'Close-up', 'Slow turn', 'Text: the one reason that matters', '2 s'],
        ['3', 'Customer using it at work', 'Wide', 'Handheld, follows hands', 'Voice-over: how it helps', '5 s'],
        ['4', 'Logo and contact on plain background', 'Full frame', 'Static', 'Call to action', '3 s'],
      ],
    },
    {
      type: 'p',
      text: 'The example is a pattern, not a recipe. The columns are the useful part: they cover what TechSmith asks you to note for each shot: the focus, the people and objects, camera movement and framing, plus the cuts you need.',
    },
    { type: 'h2', text: 'Draw the frame you will publish' },
    {
      type: 'p',
      text: 'If the video is for Reels, TikTok or Shorts, draw tall rectangles for vertical video, not wide ones. These details save the most trouble:',
    },
    {
      type: 'ul',
      items: [
        'Make the first panel the hook. The opening frame should show the point or the problem, not a logo. See [short-form video hooks](/blog/short-form-video-hooks).',
        'Leave room for text. Mark the area where captions and platform buttons will sit and keep faces and products out of it.',
        'Plan cutaway shots in the board. Extra shots of hands, product and place give the editor options; see [what B-roll is](/blog/what-is-b-roll).',
        'Add a panel for each spoken-to-camera section and note when you cut away; see [talking-head video tips](/blog/talking-head-video-tips).',
      ],
    },
    { type: 'h2', text: 'Review the board before the shoot' },
    {
      type: 'ul',
      items: [
        'Read it aloud against a timer. Do the lengths add up to the target?',
        'Check each frame against the real location. Can you actually get that angle in that room?',
        'Count the setups. Each change of place or lighting costs time on the day; combine shots that share one.',
        'Show it to the person who approves the video now, so they do not ask for changes after filming.',
        'Mark must-have shots. If the day runs short, these get filmed first.',
      ],
    },
    {
      type: 'p',
      text: 'Videomaker adds that knowing the shot order ahead of time makes editing faster, since the editor works from a plan, not from hours of unplanned clips.',
    },
    { type: 'h2', text: 'Do it yourself or hand it over' },
    {
      type: 'p',
      text: 'For one short video with one location and one speaker, a sketched board in an hour is enough. For ads, several locations, actors or a video that must run in a paid campaign, a production team can write the script, board the shots, film, edit and test the result. WakeUP’s [video production service](/services/video-production) covers scripts, filming and editing of short videos for ads, Reels and TikTok. If you want an outside view of your current marketing before you plan a shoot, the [free marketing audit](/audit) is open to companies in Georgia.',
    },
  ],
}
