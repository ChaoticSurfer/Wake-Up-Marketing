import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'how-to-plan-a-video-shoot',
  title: 'How to plan a video shoot: a pre-production checklist for business',
  metaTitle: 'How to Plan a Video Shoot (Checklist)',
  description:
    'How to plan a video shoot for a business: goal, script, locations, permits, release forms, schedule and shot list, in the order to do them.',
  publishedAt: '2027-01-12T15:00:00+04:00',
  updatedAt: '2027-01-12T15:00:00+04:00',
  service: 'video',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To plan a video shoot, write down one goal and one viewer, finish the script, choose locations and check what permission they need, collect signed releases from anyone on camera, turn the script into a shot list, and build a schedule with spare time. Share it all in a one-page call sheet before the day. Each step is below, in order.',
    },
    { type: 'h2', text: 'Start with one goal, one viewer, one place it will run' },
    {
      type: 'p',
      text: 'A shoot with no written goal is hard to plan and hard to judge afterwards. Decide what a viewer should do after watching (book a call, ask for a quote, follow the account), who that viewer is, and where the video will be seen. The place matters because it sets the frame: a Reel or TikTok is shot vertically, a website video is usually horizontal, and a paid ad may need both.',
    },
    {
      type: 'p',
      text: 'Keep the message narrow. Google’s guidance for video ads says: [“Keep messaging and language focused and simple.”](https://support.google.com/google-ads/answer/14783551?hl=en) If your goal sentence needs the word “and” twice, you probably have two videos, and two videos can share one shoot day. Which kind of video fits which goal is covered in [video marketing for small business](/blog/video-marketing-for-small-business).',
    },
    { type: 'h2', text: 'Name an owner and work backwards from the date' },
    {
      type: 'p',
      text: 'Give the shoot one person who decides. [Vidyard’s pre-production guide](https://www.vidyard.com/video-production-guide/video-pre-production/) recommends nominating a producer who owns the process, and building the timeline backwards from the release date. It also suggests overestimating the time you need for travel, shooting and editing by 20%.',
    },
    {
      type: 'p',
      text: 'In a company of 20 to 250 people the usual failure is not a missing camera but a missing decision: three people each assume someone else approves the script. Write the names of the person who approves the script, the person who approves the final edit, and the person who is on set, and agree that nobody else changes the plan on the day. Approvals belong before the shoot; Lemonlight’s checklist puts it plainly: [“Confirm final approvals on the script and plan before the shoot, not during it.”](https://www.lemonlight.com/blog/video-production-checklist/)',
    },
    { type: 'h2', text: 'Script first, then the shot list' },
    {
      type: 'p',
      text: 'The script fixes what is said and shown. How to write one, with a template and word counts, is in [how to write a video script](/blog/marketing-video-script-template); how to draw it out frame by frame is in [how to storyboard a marketing video](/blog/how-to-storyboard-a-marketing-video). For the shoot itself you need one more document, the shot list.',
    },
    {
      type: 'p',
      text: 'A shot list is a plain list of every shot you need, in the order you will film them (which is not always the order they appear in the video). Vidyard’s advice is to [“make a bullet-point list of every shot you need to shoot”](https://www.vidyard.com/video-production-guide/video-pre-production/) and to double-check the list so that you do not reach the edit and find you need reshoots. Group shots by location and by who is on camera, so nobody waits around.',
    },
    {
      type: 'table',
      head: ['Shot', 'Where', 'Who or what', 'Framing', 'Notes'],
      rows: [
        ['1. Founder to camera, hook', 'Office, window side', 'Founder', 'Vertical, close', 'Film three takes of the first line'],
        ['2. Product on desk', 'Office', 'Product, hands', 'Vertical, overhead', 'Clean the desk first'],
        ['3. Team at work (B-roll)', 'Open-plan floor', 'Two staff, with release', 'Wide, then close', 'Ask staff a day ahead'],
        ['4. Customer line', 'Customer site', 'Customer, with release', 'Horizontal and vertical', 'Record clean audio separately'],
      ],
    },
    { type: 'h2', text: 'Locations: scout, book and check permission' },
    {
      type: 'p',
      text: 'Visit each location at the hour you plan to film, because light and noise change through the day. [Descript’s checklist](https://descript.com/blog/article/shooting-video-heres-a-handy-11-point-checklist-for-a-smooth-video-shoot) tells you to consider weather and time of day for lighting and to check whether permits are needed. On the visit, look at four things: natural light and where it falls, background noise (traffic, air conditioning, a lift), power sockets, and where the crew can park and leave equipment.',
    },
    {
      type: 'p',
      text: 'Permission depends on the place. Filming inside your own office usually needs nobody else’s agreement, but a shop, restaurant, hotel, or any space you do not own needs the owner’s agreement, ideally in writing. Lemonlight notes that filming in public or private spaces [often requires a license or a signed location release](https://www.lemonlight.com/blog/video-production-checklist/). Rules for public streets, historic sites and drones differ by city and country and change, so ask the venue, the municipality and the aviation authority directly before the day rather than relying on a blog post, including this one. If a permit is slow, move that shot to a location you control.',
    },
    { type: 'h2', text: 'Release forms for people on camera' },
    {
      type: 'p',
      text: 'Anyone recognisable in the video should agree to it, in writing, before you film. A short release states who is on screen, where the video will appear, for how long, and that the person can ask for removal. Collect one from employees too: a staff member who appears in an ad and later leaves the company may ask for the footage to be removed, and a signed release shows what was agreed.',
    },
    {
      type: 'p',
      text: 'If a customer speaks about your product, the words must be theirs. The US Federal Trade Commission, a useful benchmark even outside the US, states in its endorsement guidance: [“Endorsements must reflect the honest opinions or experiences of the endorser.”](https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking) The same page says a connection between the endorser and the company that viewers would not expect should be disclosed clearly and conspicuously. Customer stories are covered step by step in [how to make a testimonial video](/blog/how-to-make-a-testimonial-video). This is not legal advice; check the rules for your market, and for music and logos you do not own.',
    },
    { type: 'h2', text: 'Schedule the day and send a call sheet' },
    {
      type: 'p',
      text: 'Build the day from the shot list: set up lights and sound at the first location, film everything there, move once. Put the people with the least free time first, and leave a buffer after each move. Vidyard’s 20% rule applies to the shoot day as much as to the timeline; so does its reminder to leave time for reshoots.',
    },
    {
      type: 'p',
      text: 'Then write a call sheet, a one-page schedule everyone receives the day before. Descript lists what it holds: contact details, locations, times, gear and the order of the day. Add the address with parking, a phone number for the person on set, the weather forecast for outdoor shots, and the shot list as an attachment.',
    },
    { type: 'h2', text: 'The pre-shoot checklist' },
    {
      type: 'ol',
      items: [
        'Goal, viewer and where the video will run, in one sentence each.',
        'Owner named; approver of script and edit named.',
        'Script approved in writing.',
        'Shot list grouped by location and person.',
        'Locations visited at the planned hour; permission obtained where needed.',
        'Releases signed by everyone recognisable on camera.',
        'People confirmed, with their time reserved.',
        'Gear checked: batteries, memory cards, a microphone for each speaker, lights, a backup of everything.',
        'Props, wardrobe and any product samples packed.',
        'Call sheet sent the day before, with a contact number.',
        'Spare time left for reshoots.',
      ],
    },
    { type: 'h2', text: 'When to plan it yourself and when to hand it over' },
    {
      type: 'p',
      text: 'A single phone-shot talking video can be planned in an afternoon with this list. A multi-location day, several speakers, or a set of ad cuts is where planning errors get expensive. WakeUP scripts, shoots and edits short videos for ads, Reels and TikTok and tests them in campaigns; see [video production](/services/video-production) for what is included. What drives the cost of a shoot is in [the marketing video cost guide](/blog/marketing-video-cost), and a [free marketing audit](/audit) is a way to find out whether video is where your marketing needs help first.',
    },
  ],
}
