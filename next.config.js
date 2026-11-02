
const { withAxiom } = require('next-axiom')

const isDev = process.env.NODE_ENV === 'development'
const isStaticExport = process.env.STATIC_EXPORT === 'true'
const basePath = process.env.BASE_PATH || ''

// ============================================
// SECURITY HEADERS
// ============================================

// Preserve existing security and third-party
// compatibility settings.

const ContentSecurityPolicy = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' *.youtube.com *.twitter.com *.vercel-scripts.com giscus.app *.giscus.app *.googletagmanager.com cdn.jsdelivr.net pagead2.googlesyndication.com *.googlesyndication.com *.google.com *.googleadservices.com adservice.google.com *.gstatic.com *.doubleclick.net *.clarity.ms;
    child-src *.youtube.com *.google.com *.twitter.com giscus.app *.giscus.app;
    style-src 'self' 'unsafe-inline' *.googleapis.com *.unpkg.com *.giscus.app;
    img-src * blob: data:;
    frame-src *.youtube.com *.google.com *.twitter.com giscus.app *.giscus.app *.googlesyndication.com *.doubleclick.net;
    media-src 'none';
    connect-src *;
    font-src 'self' fonts.gstatic.com;
`

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, '')
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload'
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()'
  }
]

// ============================================
// PWA SUPPORT
// ============================================

// Preserve the existing progressive web app
// behavior and Workbox caching configuration.

const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  register: true,
  disable: isDev,
  extendDefaultRuntimeCaching: true,
  workboxOptions: {
    skipWaiting: true,
    buildExcludes: [
      /chunks\/images\/.*$/,
      /chunks\/pages\/api\/.*/
    ]
  }
})

// ============================================
// NEXT.JS CONFIGURATION
// ============================================

/** @type {import('next').NextConfig} */
const config = {
  // Preserve optional static export support.
  ...(isStaticExport && {
    output: 'export',
    trailingSlash: true,
    ...(basePath && {
      basePath,
      assetPrefix: basePath
    })
  }),

  // ==========================================
  // IMAGE OPTIMIZATION
  // ==========================================

  images: {
    ...(isStaticExport && {
      unoptimized: true
    }),

    // Original author's personal domains removed.
    // Other existing image providers retained.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io'
      },
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io'
      },
      {
        protocol: 'https',
        hostname: 'og-image.vercel.app'
      },
      {
        protocol: 'https',
        hostname: 'media3.giphy.com'
      },
      {
        protocol: 'https',
        hostname: 'media0.giphy.com'
      },
      {
        protocol: 'https',
        hostname: 'github.com'
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com'
      },
      {
        protocol: 'https',
        hostname: 'img.shields.io'
      },
      {
        protocol: 'https',
        hostname: 'mermaid.live'
      }
    ],

    qualities: [
      25,
      50,
      60,
      70,
      75,
      90,
      100
    ],

    formats: [
      'image/webp',
      'image/avif'
    ],

    deviceSizes: [
      640,
      750,
      828,
      1080,
      1200,
      1920,
      2048,
      3840
    ],

    imageSizes: [
      16,
      32,
      48,
      64,
      96,
      128,
      256,
      384
    ],

    minimumCacheTTL: 31536000,

    dangerouslyAllowSVG: true,

    contentSecurityPolicy:
      "default-src 'self'; script-src 'none'; sandbox;"
  },

  // ==========================================
  // COMPILER
  // ==========================================

  compiler: {
    removeConsole: !isDev,
    styledComponents: true
  },

  compress: true,
  poweredByHeader: false,
  generateEtags: true,

  transpilePackages: [
    'mermaid',
    'stylis'
  ],

  // Preserve Open Graph font tracing.
  outputFileTracingIncludes: {
    '/api/og': [
      './src/app/api/og/fonts/*.ttf'
    ]
  },

  // ==========================================
  // TURBOPACK AND EXPERIMENTAL SETTINGS
  // ==========================================

  turbopack: {},

  experimental: {
    optimizePackageImports: [
      '@vercel/analytics',
      '@vercel/speed-insights',
      'react-icons',
      'lucide-react',
      'next-themes',
      'mermaid',
      'stylis',
      'shiki'
    ],

    webVitalsAttribution: [
      'CLS',
      'LCP',
      'INP',
      'FCP',
      'TTFB'
    ],

    scrollRestoration: true
  },

  // ==========================================
  // HTTP RESPONSE HEADERS
  // ==========================================

  async headers() {
    if (isStaticExport) {
      return []
    }

    return [
      {
        source: '/(.*)',
        headers: securityHeaders
      },
      {
        source:
          '/(.*).(jpg|jpeg|png|gif|ico|svg|webp|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value:
              'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/(.*).(js|css)',
        headers: [
          {
            key: 'Cache-Control',
            value:
              'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Content-Type',
            value:
              'application/xml; charset=utf-8'
          },
          {
            key: 'Cache-Control',
            value:
              'public, max-age=86400'
          }
        ]
      }
    ]
  },

  // ==========================================
  // PERSONALIZED REDIRECTS
  // ==========================================

  async redirects() {
    // Next.js does not support server redirects
    // in a fully static export.
    if (isStaticExport) {
      return []
    }

    return [
      // Old shorthand URL for projects.
      {
        source: '/projects',
        destination: '/portfolio',
        permanent: true
      },

      // Short CV URL points to Pretom's PDF.
      {
        source: '/cv',
        destination: '/Resume_2026.pdf',
        permanent: true
      },

      // Personal GitHub shorthand.
      {
        source: '/github',
        destination:
          'https://github.com/pretom26',
        permanent: true
      },

      // Personal LinkedIn shorthand.
      {
        source: '/linkedin',
        destination:
          'https://www.linkedin.com/in/pretom-areefin-pranto-a97651290/',
        permanent: true
      }
    ]
  }
}

// ============================================
// EXPORT CONFIGURATION
// ============================================

// Preserve Axiom and PWA integration.

module.exports = withAxiom(withPWA(config))
