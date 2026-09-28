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
  {
    slug: 'v2',
    name: 'Editorial',
    tagline: 'Swiss kinetic, light',
    direction: 'White ground, giant moving Swiss type, strict grid rules, red floods and an index-style services list.',
    status: 'alt',
  },
  {
    slug: 'v3',
    name: 'Spatial',
    tagline: 'WebGL + glass + 3D eye',
    direction: 'Live red shader backdrop, a 3D eyeball built from QR cubes, frosted glass panels, tilt cards and a pinned horizontal process.',
    status: 'alt',
  },
  {
    slug: 'v4',
    name: 'Terminal',
    tagline: 'Red-phosphor CRT',
    direction: 'Boot sequence, ASCII QR eye, block-letter type and command-line sections. Keys 1–4 navigate.',
    status: 'alt',
  },
]

/** Relative href to a version page — works in `next dev` and in the flat static export. */
export const versionHref = (slug: string) => (process.env.NODE_ENV === 'production' ? `${slug}.html` : `/${slug}`)
export const hubHref = () => (process.env.NODE_ENV === 'production' ? 'index.html' : '/')
