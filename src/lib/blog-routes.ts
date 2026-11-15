import type { Metadata } from 'next'
import { bilingualAlternates } from '@/lib/alternates'
import { blogAuthorPath, blogChrome, blogFeedPath, blogIndexPath, blogTopicPath, numbered, pagedPath, postPath, postsIn, topicIsIndexable } from '@/lib/blog'
import type { BlogPost } from '@/lib/blog'
import type { Locale } from '@/lib/copy'
import { organization } from '@/lib/organization'
import { servicePages } from '@/lib/service-pages'
import type { ServiceId } from '@/lib/service-pages'
import { breadcrumbJsonLd } from '@/lib/service-routes'
import { SITE_NAME, SITE_URL } from '@/lib/site'

const ogLocale: Record<Locale, string> = { en: 'en_US', ka: 'ka_GE' }

// The site's 1200x630 brand card (app/opengraph-image.tsx), the image every post shares until it has its own.
const POST_IMAGE = `${SITE_URL}/opengraph-image`

/** Page 1 pairs with the other language's index; page 2 and on list different posts in each language, so they
 * canonicalise to themselves with no hreflang. */
export const blogIndexMetadata = (locale: Locale, page = 1): Metadata => {
  const ui = blogChrome[locale]
  const path = pagedPath(blogIndexPath(locale), page)
  const title = numbered(ui.indexMetaTitle, locale, page)
  const description = numbered(ui.indexMetaDescription, locale, page)
  const types = { 'application/rss+xml': blogFeedPath(locale) }
  return {
    title,
    description,
    alternates: page === 1 ? { ...bilingualAlternates(path, blogIndexPath('en'), blogIndexPath('ka')), types } : { canonical: path, types },
    openGraph: { type: 'website', siteName: SITE_NAME, locale: ogLocale[locale], images: ['/opengraph-image'], url: path, title, description },
  }
}

/** A topic hub's intro is its service page's intro. A thin hub (under 3 live posts) is noindex, follow. */
export const blogTopicMetadata = (locale: Locale, id: ServiceId, page = 1): Metadata => {
  const service = servicePages[id][locale]
  const path = pagedPath(blogTopicPath(locale, id), page)
  const title = numbered(blogChrome[locale].topicMetaTitle(service.name), locale, page)
  const description = numbered(service.intro, locale, page)
  return {
    title,
    description,
    alternates: { canonical: path, types: { 'application/rss+xml': blogFeedPath(locale) } },
    robots: topicIsIndexable(locale, id) ? undefined : { index: false, follow: true },
    openGraph: { type: 'website', siteName: SITE_NAME, locale: ogLocale[locale], images: ['/opengraph-image'], url: path, title, description },
  }
}

export const blogAuthorMetadata = (locale: Locale): Metadata => {
  const ui = blogChrome[locale]
  const path = blogAuthorPath(locale)
  return {
    title: ui.authorMetaTitle,
    description: ui.authorMetaDescription,
    alternates: bilingualAlternates(path, blogAuthorPath('en'), blogAuthorPath('ka')),
    openGraph: { type: 'profile', siteName: SITE_NAME, locale: ogLocale[locale], images: ['/opengraph-image'], url: path, title: ui.authorMetaTitle, description: ui.authorMetaDescription },
  }
}

/** A post exists in one language only, so it canonicalises to itself and lists no hreflang twin. */
export const postMetadata = (post: BlogPost): Metadata => ({
  title: post.metaTitle,
  description: post.description,
  alternates: { canonical: postPath(post), types: { 'application/rss+xml': blogFeedPath(post.locale) } },
  openGraph: {
    type: 'article',
    siteName: SITE_NAME,
    locale: ogLocale[post.locale],
    images: ['/opengraph-image'],
    url: postPath(post),
    title: post.title,
    description: post.description,
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
    authors: [`${SITE_URL}${blogAuthorPath(post.locale)}`],
  },
})

const blogCrumb = (locale: Locale) => ({ name: blogChrome[locale].blog, path: blogIndexPath(locale) })

export const blogIndexJsonLd = (locale: Locale) => breadcrumbJsonLd(locale, [blogCrumb(locale)])

const topicCrumb = (locale: Locale, id: ServiceId) => ({ name: servicePages[id][locale].name, path: blogTopicPath(locale, id) })

export const blogTopicJsonLd = (locale: Locale, id: ServiceId) => breadcrumbJsonLd(locale, [blogCrumb(locale), topicCrumb(locale, id)])

/** ProfilePage for the author page: the company is the author of every post. The page dates from its first post and
 * changes whenever a post is added or updated. */
export const blogAuthorJsonLd = (locale: Locale) => {
  const posts = postsIn(locale)
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      url: `${SITE_URL}${blogAuthorPath(locale)}`,
      inLanguage: locale,
      dateCreated: posts.reduce((first, p) => (p.publishedAt < first ? p.publishedAt : first), posts[0].publishedAt),
      dateModified: posts.reduce((last, p) => (p.updatedAt > last ? p.updatedAt : last), posts[0].updatedAt),
      mainEntity: organization,
    },
    breadcrumbJsonLd(locale, [blogCrumb(locale), { name: blogChrome[locale].authorName, path: blogAuthorPath(locale) }]),
  ]
}

export const postJsonLd = (post: BlogPost) => {
  const url = `${SITE_URL}${postPath(post)}`
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      image: [POST_IMAGE],
      datePublished: post.publishedAt,
      dateModified: post.updatedAt,
      inLanguage: post.locale,
      url,
      mainEntityOfPage: url,
      // The company as author. Its url is the author page (ProfilePage), which the byline also links.
      author: {
        '@type': 'Organization',
        name: organization.name,
        url: `${SITE_URL}${blogAuthorPath(post.locale)}`,
        logo: organization.logo,
        sameAs: organization.sameAs,
        contactPoint: organization.contactPoint,
        address: organization.address,
      },
      publisher: { '@id': organization['@id'] },
    },
    // The post sits under its topic hub once that hub is indexable, as the visible breadcrumb shows.
    breadcrumbJsonLd(post.locale, [
      blogCrumb(post.locale),
      ...(topicIsIndexable(post.locale, post.service) ? [topicCrumb(post.locale, post.service)] : []),
      { name: post.title, path: postPath(post) },
    ]),
  ]
}

const xml = (text: string) => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const FEED_ITEMS = 50

/** RSS 2.0 feed of one language's newest posts, with absolute links. The sitemap lists every post. */
export const blogFeedXml = (locale: Locale) => {
  const ui = blogChrome[locale]
  const items = postsIn(locale)
    .slice(0, FEED_ITEMS)
    .map((p) => {
      const url = `${SITE_URL}${postPath(p)}`
      return `<item><title>${xml(p.title)}</title><link>${url}</link><guid>${url}</guid><description>${xml(p.description)}</description><pubDate>${new Date(p.publishedAt).toUTCString()}</pubDate></item>`
    })
    .join('')
  return `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${xml(`${SITE_NAME}: ${ui.blog}`)}</title><link>${SITE_URL}${blogIndexPath(locale)}</link><description>${xml(ui.indexMetaDescription)}</description><language>${locale}</language>${items}</channel></rss>`
}
