
/**
 * Pretom Areefin Pranto
 * Personalized portfolio sitemap configuration
 */

const isStaticExport =
  process.env.STATIC_EXPORT === 'true'

// Set SITE_URL and NEXT_PUBLIC_SITE_URL
// to your actual deployment URL before publishing.

const siteUrl = (
  process.env.SITE_URL ||
  process.env.NEXT_PUBLIC_SITE_URL ||
  'http://localhost:3000'
)
  .trim()
  .replace(/\/+$/, '')

// Validate the canonical URL.

const url = new URL(siteUrl)

if (!['http:', 'https:'].includes(url.protocol)) {
  throw new Error('Invalid sitemap site URL')
}

// Only include verified, personalized pages.

const approvedPages = {
  '/': {
    priority: 1.0,
    changefreq: 'monthly'
  },

  '/about': {
    priority: 0.8,
    changefreq: 'monthly'
  },

  '/portfolio': {
    priority: 0.9,
    changefreq: 'monthly'
  },

  '/research': {
    priority: 0.9,
    changefreq: 'monthly'
  },

  '/resume': {
    priority: 0.9,
    changefreq: 'monthly'
  },

  '/contact': {
    priority: 0.8,
    changefreq: 'monthly'
  }
}

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl,

  generateRobotsTxt: !isStaticExport,

  generateIndexSitemap: false,

  sitemapSize: 10000,

  autoLastmod: false,

  changefreq: 'monthly',

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',

        allow: [
          '/',
          '/api/og'
        ],

        disallow: [
          '/api/',
          '/_next/',
          '/static/'
        ]
      }
    ]
  },

  exclude: [
    '/api/*',
    '/_next/*',
    '/static/*',
    '/.well-known/*',

    '/offline',

    // Blog was intentionally removed.
    '/blog',
    '/blog/*',
    '/rss.xml',
    '/rss-full.xml',

    // Old template metadata endpoints.
    '/meta/*'
  ],

  transform: async (_config, urlPath) => {
    const page = approvedPages[urlPath]

    // Exclude original-template and unreviewed pages.
    if (!page) {
      return null
    }

    return {
      loc: urlPath,
      priority: page.priority,
      changefreq: page.changefreq
    }
  }
}
