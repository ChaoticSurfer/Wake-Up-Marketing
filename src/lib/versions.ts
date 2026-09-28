// Registry of design directions. Each lives at /<slug> and in the static export as <slug>.html.
export type Version = {
  slug: string
  name: string
  tagline: string
  direction: string
  status: 'flagship' | 'alt'
}

export const versions: Version[] = [
  {
    slug: 'v1',
    name: 'Signal',
    tagline: 'Cyber-brutalist HUD',
    direction: 'Black ground, live QR-eye, HUD labels, decrypting type, bento services with micro-animations.',
    status: 'flagship',
  },
]

/** Relative href to a version page — works in `next dev` and in the flat static export. */
export const versionHref = (slug: string) => (process.env.NODE_ENV === 'production' ? `${slug}.html` : `/${slug}`)
export const hubHref = () => (process.env.NODE_ENV === 'production' ? 'index.html' : '/')
