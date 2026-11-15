import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'google-tag-manager-basics',
  title: 'Google Tag Manager for beginners: tags, triggers, variables and when you need it',
  metaTitle: 'Google Tag Manager for Beginners',
  description:
    'Google Tag Manager for beginners: what tags, triggers and variables are, and when a small company needs it instead of pasting the GA4 snippet.',
  publishedAt: '2027-02-27T12:00:00+04:00',
  updatedAt: '2027-02-27T12:00:00+04:00',
  service: 'websites',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Google Tag Manager is a tool for adding and managing tracking code on your website from one web interface, without editing the site each time. A small company needs it when it wants to track more than page views, such as form submissions, button clicks or phone-number taps, or when several tracking tools must be added. If all you want is GA4 page views, pasting the GA4 snippet is enough.',
    },
    { type: 'h2', text: 'What Tag Manager is, in one example' },
    {
      type: 'p',
      text: 'Imagine you want to know how many people click "Call us" on your site. Without Tag Manager, a developer adds code to the button, publishes the site, and does it again each time you want to track something else. With Tag Manager, the site carries one snippet, installed once. After that, you add the rule "when someone clicks this button, send an event to GA4" inside Tag Manager, test it, and publish it, with no change to the website itself.',
    },
    {
      type: 'p',
      text: 'Google describes it as [a tag management system that allows you to set up and manage tags on your site](https://support.google.com/tagmanager/answer/6102821). Measure School, a GA4 training company, adds that it is most useful when manually inserting tracking code on every page becomes impractical, such as on larger sites or when tags are added often, and that it keeps a version history ([Measure School](https://measureschool.com/google-tag-manager-tutorial)).',
    },
    { type: 'h2', text: 'Tags, triggers and variables' },
    {
      type: 'p',
      text: 'Everything in Tag Manager is built from three pieces, held in a container. Google defines the container as a collection of tags, triggers, variables and related configurations installed on a website or app.',
    },
    {
      type: 'table',
      head: ['Piece', 'In plain words', 'Example'],
      rows: [
        ['Tag', 'The tracking code that does something: sends data to GA4, Google Ads or Meta', 'A GA4 event called phone_click'],
        ['Trigger', 'The rule for when the tag fires. Google says triggers cause a tag to fire when certain events occur', 'A click on a link that starts with tel:'],
        ['Variable', 'A value the tag or trigger can use. Google says variables simplify and automate tag configuration', 'The address of the page where the click happened'],
      ],
    },
    {
      type: 'p',
      text: 'Google lists trigger types including page view, click, element visibility, form submission, scroll depth, YouTube video, custom event, history change, JavaScript error and timer ([trigger types](https://support.google.com/tagmanager/answer/7679219)). For most small sites, three do almost all the work: page view, click and form submission. The worked example for forms, including the setting that fires the trigger only when a form is really sent, is in [how to track form submissions in GA4](/blog/track-form-submissions-ga4).',
    },
    { type: 'h2', text: 'Tag Manager or the GA4 snippet?' },
    {
      type: 'p',
      text: 'Google\'s help page on adding the Google tag to a site lists several routes: use your website platform\'s built-in field for the Measurement ID, paste the full tag through your platform\'s custom HTML feature, add the tag to each page by hand, or use Tag Manager ([GA4 help](https://support.google.com/analytics/answer/9304153)). It also says data collection may take up to 30 minutes to begin and can be checked in the Realtime report. Choose by what you need.',
    },
    {
      type: 'table',
      head: ['Your situation', 'Better choice', 'Why'],
      rows: [
        ['You want GA4 page views and standard reports only', 'The GA4 snippet or your platform\'s GA4 field', 'Fewest moving parts. Nothing else to maintain'],
        ['You also want forms, calls, clicks or scrolling tracked', 'Tag Manager', 'You can add and change events without touching the site'],
        ['You run Google Ads, Meta ads and GA4 together', 'Tag Manager', 'One place for all tags, with one test and publish routine'],
        ['Developers release the site slowly, and marketing changes often', 'Tag Manager', 'Marketing does not wait for a site release'],
        ['A single-page site with one form and one goal', 'Either; the snippet is enough if the form shows a thank-you page', 'Count visits to the thank-you page, as the form-tracking post explains'],
      ],
    },
    {
      type: 'p',
      text: 'One rule matters more than the choice: use one route for GA4, not two. If the GA4 tag is both pasted into the site and fired from Tag Manager, a visit can be recorded twice. If you move to Tag Manager, remove the old snippet at the same moment and check that one visit produces one page view.',
    },
    { type: 'h2', text: 'Setting up a container' },
    {
      type: 'ol',
      items: [
        'Go to tagmanager.google.com, sign in, and create an account with your company name.',
        'Create a container. Google says to use the top-most URL of your website as the container name, to choose the Web type for a website, and to create one container per website or app, not one per page ([Google](https://support.google.com/tagmanager/answer/6103696)).',
        'Install the snippet Tag Manager shows. Google tells you to place the first code block [as high in the head tag as possible](https://support.google.com/tagmanager/answer/14847097); follow the installation instructions on screen for the rest. Ask your developer or website platform to do this, or use the platform\'s Tag Manager field if it has one.',
        'Create your first tag, a Google tag or GA4 configuration with your Measurement ID, and trigger it on all pages.',
        'Test it, then publish (see the next section).',
        'Add the next tag only when you know what question it answers. Page views first, then one conversion, then the rest.',
      ],
    },
    { type: 'h2', text: 'Test before you publish' },
    {
      type: 'p',
      text: 'Tag Manager has a preview mode for exactly this. Google says it lets you test a container configuration before it is published, that the debug interface appears only in the browser where you enabled it, and that Tag Assistant shows which tags fired and in which order ([preview and debug](https://support.google.com/tagmanager/answer/6107056)). So other visitors never see your test.',
    },
    {
      type: 'ul',
      items: [
        'Click through the page as a visitor would, and check that each tag fires on the action you meant, and only then.',
        'Open GA4\'s Realtime or DebugView report and look for the event.',
        'Publish a version, with a short name that says what changed. Measure School notes that changes only reach all users once submitted as a version and published, and that you can return to an earlier version if something breaks.',
      ],
    },
    { type: 'h2', text: 'Rules that keep a container safe' },
    {
      type: 'ul',
      items: [
        'Own the account. Create the Tag Manager account under a company-controlled Google login, and give agencies and freelancers user access rather than ownership. If a vendor leaves, your tracking stays.',
        'Keep write access small. Anyone who can publish can run code on your site. Give publish rights only to people you trust.',
        'Name things clearly: "GA4 event - phone click", not "Tag 7".',
        'Never send names, emails or phone numbers to analytics tools in event values. It puts your customers\' data in a third-party tool, and a form field is easy to capture by mistake.',
        'Check consent. If your site uses a cookie banner, tags that set cookies need to respect it. Raise this with whoever manages your consent setup.',
        'Review once a quarter. Remove tags for tools you no longer use.',
      ],
    },
    {
      type: 'p',
      text: 'Tag Manager is the base for more than GA4. The conversion actions you send to Google Ads, covered in [Google Ads conversion tracking](/blog/google-ads-conversion-tracking), and the Meta side explained in [Meta Pixel vs Conversions API](/blog/meta-pixel-vs-conversions-api), are often managed from the same container. Tagged links, covered in [UTM parameters, explained](/blog/utm-parameters-guide), tell GA4 where the visitor came from. The wider GA4 setup is in [GA4 for a small business](/blog/ga4-for-small-business).',
    },
    {
      type: 'p',
      text: 'If your site is complex, with several forms, multiple languages or a shop, plan the tracking before the build. WakeUP builds premium, complex websites and landing pages, and its [website development service](/services/website-development) includes analytics and conversion tracking from day one. If you already have a site and are not sure what it records, the [free marketing audit](/audit) is a place to start.',
    },
  ],
}
