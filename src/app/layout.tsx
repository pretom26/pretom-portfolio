
import { ShootingStarOverlay } from '@/components/site/ShootingStarOverlay'
import { Footer, Header } from '@/components/site/common'
import { Toaster } from '@/components/ui/sonner'

import {
  PERSON_ID,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL
} from '@/libs/constants/site'

import type { Viewport } from 'next'
import { ThemeProvider } from 'next-themes'

import '@/styles/globals.css'
import '@/styles/prism-themes.css'
import 'katex/dist/katex.min.css'

const GOOGLE_FONTS_HREF =
  'https://fonts.googleapis.com/css2?family=Google+Sans:ital,wght@0,400..700;1,400..700&display=swap'

export const viewport: Viewport = {
  themeColor: [
    {
      media: '(prefers-color-scheme: light)',
      color: '#ffffff'
    },
    {
      media: '(prefers-color-scheme: dark)',
      color: '#171717'
    }
  ],
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light dark'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    author: {
      '@id': PERSON_ID
    }
  }

  const navigationJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SiteNavigationElement',
        '@id': `${SITE_URL}/#navigation`,
        name: 'Main Navigation',
        hasPart: [
          {
            '@type': 'SiteNavigationElement',
            name: 'Home',
            url: SITE_URL
          },
          {
            '@type': 'SiteNavigationElement',
            name: 'Research',
            url: `${SITE_URL}/research`
          },
          {
            '@type': 'SiteNavigationElement',
            name: 'Portfolio',
            url: `${SITE_URL}/portfolio`
          },
          {
            '@type': 'SiteNavigationElement',
            name: 'Resume',
            url: `${SITE_URL}/resume`
          }
        ]
      }
    ]
  }

  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        {/* Google Sans Text */}
        <link
          rel='preconnect'
          href='https://fonts.googleapis.com'
        />

        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />

        <link
          rel='stylesheet'
          href={GOOGLE_FONTS_HREF}
        />

        {/* Identity links */}
        <link
          rel='me'
          href='https://github.com/pretom26'
        />

        <link
          rel='me'
          href='https://www.linkedin.com/in/pretom-areefin-pranto-a97651290/'
        />

        <link
          rel='me'
          href='https://scholar.google.com/citations?user=u15DO0cAAAAJ&hl=en'
        />

        <link
          rel='me'
          href='https://orcid.org/0009-0000-9363-4536'
        />

        <link
          rel='author'
          href={`${SITE_URL}/resume`}
        />
      </head>

      <body suppressHydrationWarning>
        {/* Structured data */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd)
          }}
        />

        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(navigationJsonLd)
          }}
        />

        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
        >
          {/* Decorative shooting stars */}
          <ShootingStarOverlay />

          {/* Website content remains above the stars */}
          <div className='relative z-10 flex min-h-dvh flex-col'>
            <Header />

            <div className='flex-1'>
              {children}
            </div>

            <Footer />
          </div>

          {/* Existing notifications */}
          <Toaster
            position='bottom-center'
            richColors
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
