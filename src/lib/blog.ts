// Blog posts are typed modules in src/content/blog/<locale>/<slug>.ts (the owner's choice, 2026-11-13), listed in
// src/content/blog/index.ts. Each language has its own topics from its own keyword research, so a post exists in
// one language and carries no hreflang twin. Everything that builds a blog URL or date reads this module.
import { blogPosts } from '@/content/blog'
import { enCopy } from '@/lib/copy'
import type { Locale } from '@/lib/copy'
import { kaCopy } from '@/lib/copy-ka'
import { servicePages } from '@/lib/service-pages'
import type { ServiceId } from '@/lib/service-pages'

/** A body block. Text may hold inline links written as [anchor](/path or https://url). */
export type BlogBlock =
  | { type: 'h2'; text: string }
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'table'; head: string[]; rows: string[][] }

export type BlogPost = {
  locale: Locale
  slug: string
  /** The H1. */
  title: string
  /** The <title> before the " | WakeUP Marketing" suffix; starts with the target query. */
  metaTitle: string
  description: string
  /** Instants with the Tbilisi offset (2026-11-13T10:00:00+04:00), so the printed date matches the markup. */
  publishedAt: string
  updatedAt: string
  /** The service page this post supports; that page links back to it. */
  service: ServiceId
  /** llm_reviewed until a person signs it off (human_reviewed, with reviewedBy). */
  reviewState: 'llm_reviewed' | 'human_reviewed'
  reviewedBy?: string
  body: BlogBlock[]
}

const blogPrefix: Record<Locale, string> = { en: enCopy.blogPath, ka: kaCopy.blogPath }

export const blogIndexPath = (locale: Locale) => blogPrefix[locale]
export const blogFeedPath = (locale: Locale) => `${blogPrefix[locale]}/rss.xml`
export const blogAuthorPath = (locale: Locale) => `${blogPrefix[locale]}/author/wakeup-marketing`
export const postPath = (post: BlogPost) => `${blogPrefix[post.locale]}/${post.slug}`
/** A topic hub lists the posts on one service, at that service page's own slug in the language. */
export const blogTopicPath = (locale: Locale, id: ServiceId) => `${blogPrefix[locale]}/topic/${servicePages[id][locale].slug}`

/** Page 1 of a post list is the list's own URL; page 2 and on are <list>/page/<n>. */
export const pagedPath = (listPath: string, page: number) => (page === 1 ? listPath : `${listPath}/page/${page}`)

/** The number in a /page/<n> segment: 2 or more, written without a leading zero. /page/1 would duplicate the list's own
 * URL, so it is not a page. */
export const pageParam = (segment: string) => (/^[1-9]\d*$/.test(segment) && Number(segment) >= 2 ? Number(segment) : undefined)

/** Page 2 and on carry their number in the title, H1 and description, so no two pages of a list share them. */
export const numbered = (text: string, locale: Locale, page: number) =>
  page === 1 ? text : `${text} – ${blogChrome[locale].page} ${page}`

const POSTS_PER_PAGE = 24

/** The posts on one numbered page of a list and the number of pages, or undefined past the last page. */
export const pageOf = (posts: BlogPost[], page: number) => {
  const pages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE))
  return page <= pages ? { posts: posts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE), pages } : undefined
}

/** Page numbers 2 and on of a list, for generateStaticParams. */
export const laterPageParams = (posts: BlogPost[]) =>
  Array.from({ length: Math.max(0, Math.ceil(posts.length / POSTS_PER_PAGE) - 1) }, (_, i) => ({ page: String(i + 2) }))

/** A post goes live at its publishedAt instant. Until then every page, list, feed and the sitemap leave it out. */
const isLive = (post: BlogPost) => Date.parse(post.publishedAt) <= Date.now()

/** Live posts in one language, newest first. */
export const postsIn = (locale: Locale) =>
  blogPosts
    .filter((p) => p.locale === locale && isLive(p))
    .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt))

export const postBySlug = (locale: Locale, slug: string) => postsIn(locale).find((p) => p.slug === slug)

/** The service a topic hub slug names in one language; the free audit has posts too, so it has a hub. */
export const topicBySlug = (locale: Locale, slug: string) =>
  (Object.keys(servicePages) as ServiceId[]).find((id) => servicePages[id][locale].slug === slug)

export const postsOnTopic = (locale: Locale, id: ServiceId) => postsIn(locale).filter((p) => p.service === id)

// A hub with fewer live posts is a thin archive: it stays noindex, follow and nothing links to it.
const MIN_TOPIC_POSTS = 3

export const topicIsIndexable = (locale: Locale, id: ServiceId) => postsOnTopic(locale, id).length >= MIN_TOPIC_POSTS

/** The hubs the index, posts, service pages and sitemap link: the ones with enough live posts. */
export const indexableTopics = (locale: Locale) =>
  (Object.keys(servicePages) as ServiceId[]).filter((id) => topicIsIndexable(locale, id))

/** Up to `count` posts nearest to `post` by date in `list` (newest first, `post` included), one newer then one older
 * at each step, so a post with neighbours on both sides gets two of each and one at the end of the list gets more from
 * the side it has. */
const dateNeighbours = (list: BlogPost[], post: BlogPost, count: number) => {
  const i = list.indexOf(post)
  const near: BlogPost[] = []
  for (let d = 1; near.length < count && (i - d >= 0 || i + d < list.length); d++) {
    if (i - d >= 0) near.push(list[i - d])
    if (near.length < count && i + d < list.length) near.push(list[i + d])
  }
  return near
}

const RELATED_POSTS = 4

/** A post's related posts: its date neighbours on the same service, then the nearest by date on other services, newest
 * first. Every post is a neighbour of the posts around it, so each one gets related links, not only the newest few. */
export const relatedPosts = (post: BlogPost) => {
  const live = postsIn(post.locale)
  const sameService = dateNeighbours(live.filter((p) => p.service === post.service), post, RELATED_POSTS)
  const otherServices = dateNeighbours(live.filter((p) => p === post || p.service !== post.service), post, RELATED_POSTS - sameService.length)
  return [...sameService, ...otherServices].sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt))
}

const SERVICE_PAGE_POSTS = 6

/** Title and path of the newest posts that support one service page, for its "From the blog" links. Its topic hub
 * lists the rest. */
export const blogLinksForService = (id: ServiceId, locale: Locale) =>
  postsOnTopic(locale, id)
    .slice(0, SERVICE_PAGE_POSTS)
    .map((p) => ({ title: p.title, href: postPath(p) }))

const AUTHOR_PAGE_POSTS = 24

/** The newest posts for the author page, which links the index for the rest. */
export const authorPagePosts = (locale: Locale) => postsIn(locale).slice(0, AUTHOR_PAGE_POSTS)

/** The calendar date in Tbilisi, read from the stored instant so it never shifts with the server's time zone. */
export const formatPostDate = (iso: string, locale: Locale) =>
  new Intl.DateTimeFormat(locale === 'ka' ? 'ka-GE' : 'en-GB', { dateStyle: 'long', timeZone: 'UTC' }).format(
    new Date(iso.slice(0, 10)),
  )

/** Labels for the blog index, post and author pages. */
export const blogChrome: Record<
  Locale,
  {
    home: string
    blog: string
    indexMetaTitle: string
    indexMetaDescription: string
    indexH1: string
    indexIntro: string
    published: string
    updated: string
    by: string
    related: string
    serviceLink: string
    cta: string
    authorName: string
    /** The author page's <title>; the byline name alone would repeat the site suffix. */
    authorMetaTitle: string
    authorMetaDescription: string
    authorIntro: string
    authorPosts: string
    /** "page" in a numbered page's title, as in "Marketing blog – page 2". */
    page: string
    pagination: string
    topics: string
    /** The <title> of a topic hub, from the service's name. */
    topicMetaTitle: (service: string) => string
    allPosts: string
  }
> = {
  en: {
    home: 'Home',
    blog: 'Blog',
    indexMetaTitle: 'Marketing Blog for Businesses in Tbilisi',
    indexMetaDescription:
      'Plain guides on AI chatbots, AI voice agents, SEO and advertising for businesses in Georgia: what things cost, how they work and what to ask an agency.',
    indexH1: 'Marketing guides for growing businesses',
    indexIntro: 'What things cost, how they work and what to check before you buy, written by the team that runs these services in Tbilisi.',
    published: 'Published',
    updated: 'Updated',
    by: 'By',
    related: 'More from the blog',
    serviceLink: 'See the service',
    cta: 'Get a free marketing audit',
    authorName: 'WakeUP Marketing',
    authorMetaTitle: 'Articles and Guides',
    authorMetaDescription: 'Articles by WakeUP Marketing, a marketing agency in Tbilisi for mid-sized Georgian companies.',
    authorIntro:
      'WakeUP Marketing is a marketing agency in Tbilisi. One team runs SMM, advertising, SEO, websites, AI chatbots and AI calling for Georgian companies with 20–250 people, and reports results in leads and sales.',
    authorPosts: 'Articles',
    page: 'page',
    pagination: 'Pages',
    topics: 'Topics',
    topicMetaTitle: (service) => `${service} – Blog`,
    allPosts: 'All articles →',
  },
  ka: {
    home: 'მთავარი',
    blog: 'ბლოგი',
    indexMetaTitle: 'მარკეტინგის ბლოგი ბიზნესისთვის',
    indexMetaDescription:
      'გასაგები სტატიები ბიზნესისთვის: რა არის ჩატბოტი, როგორ მუშაობს SEO ოპტიმიზაცია და ლოკალური SEO, რა არის ბრენდინგი და რას უნდა მიაქციოთ ყურადღება.',
    indexH1: 'მარკეტინგი ბიზნესისთვის, გასაგებ ენაზე',
    indexIntro: 'როგორ მუშაობს ესა თუ ის ინსტრუმენტი, რა უნდა იცოდეთ მის შეკვეთამდე და რა სარგებელს მოუტანს თქვენს ბიზნესს.',
    published: 'გამოქვეყნდა',
    updated: 'განახლდა',
    by: 'ავტორი:',
    related: 'სხვა სტატიები',
    serviceLink: 'სერვისის ნახვა',
    cta: 'მიიღეთ უფასო მარკეტინგული აუდიტი',
    authorName: 'WakeUP Marketing',
    authorMetaTitle: 'სტატიები და გზამკვლევები',
    authorMetaDescription: 'WakeUP Marketing-ის სტატიები. მარკეტინგული სააგენტო თბილისში საშუალო ზომის ქართული კომპანიებისთვის.',
    authorIntro:
      'WakeUP Marketing თბილისში მოქმედი მარკეტინგული სააგენტოა. ერთი გუნდი მართავს SMM-ს, რეკლამას, SEO ოპტიმიზაციას, საიტებს, AI ჩატბოტებსა და AI ზარებს ქართული კომპანიებისთვის 20–250 თანამშრომლით, ხოლო შედეგს ლიდებითა და გაყიდვებით ვზომავთ.',
    authorPosts: 'სტატიები',
    page: 'გვერდი',
    pagination: 'გვერდები',
    topics: 'თემები',
    topicMetaTitle: (service) => `${service} – ბლოგი`,
    allPosts: 'ყველა სტატია →',
  },
}
