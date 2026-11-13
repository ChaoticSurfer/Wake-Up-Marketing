import type { Metadata } from 'next'
import { bilingualAlternates } from '@/lib/alternates'
import { blogAuthorPath, blogChrome, blogFeedPath, blogIndexPath, postPath, postsIn } from '@/lib/blog'
import type { BlogPost } from '@/lib/blog'
import type { Locale } from '@/lib/copy'
import { organization } from '@/lib/organization'
import { breadcrumbJsonLd } from '@/lib/service-routes'
import { SITE_NAME, SITE_URL } from '@/lib/site'

const ogLocale: Record<Locale, string> = { en: 'en_US', ka: 'ka_GE' }

// The site's 1200x630 brand card (app/opengraph-image.tsx), the image every post shares until it has its own.
const POST_IMAGE = `${SITE_URL}/opengraph-image`

export const blogIndexMetadata = (locale: Locale): Metadata => {
  const ui = blogChrome[locale]
  const path = blogIndexPath(locale)
  return {
    title: ui.indexMetaTitle,
    description: ui.indexMetaDescription,
    alternates: { ...bilingualAlternates(path, blogIndexPath('en'), blogIndexPath('ka')), types: { 'application/rss+xml': blogFeedPath(locale) } },
    openGraph: { type: 'website', siteName: SITE_NAME, locale: ogLocale[locale], images: ['/opengraph-image'], url: path, title: ui.indexMetaTitle, description: ui.indexMetaDescription },
  }
}

export const blogAuthorMetadata = (locale: Locale): Metadata => {
  const ui = blogChrome[locale]
  const path = blogAuthorPath(locale)
  return {
    title: ui.authorName,
    description: ui.authorMetaDescription,
    alternates: bilingualAlternates(path, blogAuthorPath('en'), blogAuthorPath('ka')),
    openGraph: { type: 'profile', siteName: SITE_NAME, locale: ogLocale[locale], images: ['/opengraph-image'], url: path, title: ui.authorName, description: ui.authorMetaDescription },
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

/** ProfilePage for the author page: the company is the author of every post. */
export const blogAuthorJsonLd = (locale: Locale) => [
  {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: `${SITE_URL}${blogAuthorPath(locale)}`,
    inLanguage: locale,
    mainEntity: organization,
  },
  breadcrumbJsonLd(locale, [blogCrumb(locale), { name: blogChrome[locale].authorName, path: blogAuthorPath(locale) }]),
]

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
    breadcrumbJsonLd(post.locale, [blogCrumb(post.locale), { name: post.title, path: postPath(post) }]),
  ]
}

const xml = (text: string) => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

/** RSS 2.0 feed of one language's posts, newest first, with absolute links. */
export const blogFeedXml = (locale: Locale) => {
  const ui = blogChrome[locale]
  const items = postsIn(locale)
    .map((p) => {
      const url = `${SITE_URL}${postPath(p)}`
      return `<item><title>${xml(p.title)}</title><link>${url}</link><guid>${url}</guid><description>${xml(p.description)}</description><pubDate>${new Date(p.publishedAt).toUTCString()}</pubDate></item>`
    })
    .join('')
  return `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${xml(`${SITE_NAME}: ${ui.blog}`)}</title><link>${SITE_URL}${blogIndexPath(locale)}</link><description>${xml(ui.indexMetaDescription)}</description><language>${locale}</language>${items}</channel></rss>`
}
