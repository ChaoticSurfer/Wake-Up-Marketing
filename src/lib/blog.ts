// Blog posts are typed modules in src/content/blog/<locale>/<slug>.ts (the owner's choice, 2026-11-13), listed in
// src/content/blog/index.ts. Each language has its own topics from its own keyword research, so a post exists in
// one language and carries no hreflang twin. Everything that builds a blog URL or date reads this module.
import { blogPosts } from '@/content/blog'
import { enCopy } from '@/lib/copy'
import type { Locale } from '@/lib/copy'
import { kaCopy } from '@/lib/copy-ka'
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

/** Posts in one language, newest first. */
export const postsIn = (locale: Locale) =>
  blogPosts.filter((p) => p.locale === locale).sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt))

export const postBySlug = (locale: Locale, slug: string) => postsIn(locale).find((p) => p.slug === slug)

/** The other posts in the same language, the ones on the same service first. */
export const relatedPosts = (post: BlogPost) => {
  const others = postsIn(post.locale).filter((p) => p !== post)
  return [...others.filter((p) => p.service === post.service), ...others.filter((p) => p.service !== post.service)]
}

/** Title and path of the posts that support one service page, for its "From the blog" links. */
export const blogLinksForService = (id: ServiceId, locale: Locale) =>
  postsIn(locale)
    .filter((p) => p.service === id)
    .map((p) => ({ title: p.title, href: postPath(p) }))

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
    authorMetaDescription: string
    authorIntro: string
    authorPosts: string
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
    authorMetaDescription: 'Articles by WakeUP Marketing, a marketing agency in Tbilisi for mid-sized Georgian companies.',
    authorIntro:
      'WakeUP Marketing is a marketing agency in Tbilisi. One team runs SMM, advertising, SEO, websites, AI chatbots and AI calling for Georgian companies with 20–250 people, and reports results in leads and sales.',
    authorPosts: 'Articles',
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
    authorMetaDescription: 'WakeUP Marketing-ის სტატიები. მარკეტინგული სააგენტო თბილისში საშუალო ზომის ქართული კომპანიებისთვის.',
    authorIntro:
      'WakeUP Marketing თბილისში მოქმედი მარკეტინგული სააგენტოა. ერთი გუნდი მართავს SMM-ს, რეკლამას, SEO ოპტიმიზაციას, საიტებს, AI ჩატბოტებსა და AI ზარებს ქართული კომპანიებისთვის 20–250 თანამშრომლით, ხოლო შედეგს ლიდებითა და გაყიდვებით ვზომავთ.',
    authorPosts: 'სტატიები',
  },
}
