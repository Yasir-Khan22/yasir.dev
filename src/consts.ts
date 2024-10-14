export type Site = {
  TITLE: string
  DESCRIPTION: string
  EMAIL: string
  NUM_POSTS_ON_HOMEPAGE: number
  POSTS_PER_PAGE: number
  SITEURL: string
}

export type Link = {
  href: string
  label: string
}

export const SITE: Site = {
  TITLE: 'yasir',
  DESCRIPTION:
    'astro-erudite is a opinionated, no-frills blogging template—built with Astro, Tailwind, and shadcn/ui.',
  EMAIL: 'yasirkhanone22@gmail.com',
  NUM_POSTS_ON_HOMEPAGE: 2,
  POSTS_PER_PAGE: 3,
  SITEURL: 'https://astro-erudite.vercel.app',
}

export const NAV_LINKS: Link[] = [
  { href: '/blog', label: 'blog' },
  { href: '/authors', label: 'authors' },
  { href: '/about', label: 'about' },
  { href: '/tags', label: 'tags' },
  { href: '/learn git', label: 'learn git' },
]

export const SOCIAL_LINKS: Link[] = [
  { href: 'https://github.com/yasir-khan22', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/khanzada22/', label: 'LinkedIn' },
  { href: 'yasirkhanone22@gmail.com', label: 'Email' },
  { href: '/rss.xml', label: 'RSS' },
]
