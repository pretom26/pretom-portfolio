
import type { Metadata } from 'next'
import Link from 'next/link'

import { StarfieldBackground } from '@/components/site/StarfieldBackground'

import {
  SITE_AUTHOR,
  SITE_NAME,
  SITE_URL
} from '@/libs/constants/site'

import { generateOgImage } from '@/libs/metapage'

// ============================================
// PRIVACY POLICY CONFIGURATION
// ============================================

const BASE_URL = SITE_URL.replace(/\/+$/, '')
const PAGE_URL = `${BASE_URL}/privacy-policy`

const PAGE_TITLE = `Privacy Policy | ${SITE_NAME}`

const PAGE_DESCRIPTION =
  'Privacy information for the personal portfolio of Pretom Areefin Pranto, including technical data, external services, and contact information.'

const OG_IMAGE = generateOgImage({
  title: 'Privacy Policy',
  subTitle: 'Pretom Areefin Pranto',
  type: 'page'
})

// ============================================
// SEO METADATA
// ============================================

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,

  alternates: {
    canonical: PAGE_URL
  },

  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: SITE_NAME,
    type: 'website',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 600,
        alt: PAGE_TITLE
      }
    ]
  },

  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [OG_IMAGE]
  }
}

// ============================================
// PRIVACY POLICY PAGE
// ============================================

export default function PrivacyPolicyPage() {
  return (
    <>
      <StarfieldBackground />

      <main className='layout'>
        <div className='mx-auto max-w-4xl py-10 md:py-14'>

          <header className='border-b border-gray-200 pb-8 dark:border-gray-800'>

            <p className='text-xs font-semibold tracking-[0.2em] text-purple-600 uppercase dark:text-purple-300'>
              WEBSITE INFORMATION / PRIVACY
            </p>

            <h1 className='mt-4 text-3xl font-extrabold tracking-tight text-gray-950 md:text-5xl dark:text-white'>
              Privacy Policy
            </h1>

            <p className='mt-5 max-w-3xl text-base leading-8 text-gray-600 dark:text-gray-300'>
              This page explains how information may
              be handled when you visit the personal
              portfolio of {SITE_AUTHOR.name}.
            </p>

            <p className='mt-4 text-sm text-gray-500 dark:text-gray-400'>
              Last updated: November 2, 2026
            </p>

          </header>

          <div className='prose prose-gray dark:prose-invert mt-10 max-w-none'>

            <section>
              <h2>1. About This Website</h2>

              <p>
                This website is a personal academic
                and professional portfolio maintained
                by {SITE_AUTHOR.name}.
              </p>

              <p>
                It presents academic background,
                research interests, software projects,
                professional experience, and contact
                information.
              </p>

              <p>
                Browsing the portfolio does not require
                creating a visitor account.
              </p>
            </section>

            <section className='mt-10'>
              <h2>2. Information You Provide</h2>

              <p>
                If you contact me through email,
                LinkedIn, or another external service,
                I may receive the information you
                choose to share.
              </p>

              <p>
                This may include your name, email
                address, message content, professional
                details, or other information you
                voluntarily provide.
              </p>

              <p>
                I use correspondence to understand
                and respond to your inquiry, discuss
                collaborations, or communicate about
                relevant opportunities.
              </p>
            </section>

            <section className='mt-10'>
              <h2>3. Technical Information</h2>

              <p>
                As with most websites, hosting
                infrastructure may process technical
                information needed to deliver pages
                and maintain service reliability.
              </p>

              <p>
                Depending on the hosting configuration,
                this can include:
              </p>

              <ul>
                <li>Requested pages and request times</li>
                <li>Browser and device information</li>
                <li>IP addresses and network information</li>
                <li>Error logs and performance measurements</li>
                <li>Referring pages or traffic information</li>
              </ul>

              <p>
                Such information may be used for
                website delivery, troubleshooting,
                security, and understanding technical
                performance.
              </p>
            </section>

            <section className='mt-10'>
              <h2>4. Analytics and Performance Tools</h2>

              <p>
                Website hosting, analytics, or
                performance-monitoring integrations
                may process usage and diagnostic
                information when those services
                are enabled.
              </p>

              <p>
                The specific information processed,
                storage methods, and retention periods
                depend on the services configured
                for the deployed website.
              </p>

              <p>
                Optional analytics or tracking
                providers should be identified in
                this policy before they are enabled
                on the published site.
              </p>
            </section>

            <section className='mt-10'>
              <h2>5. Cookies and Local Storage</h2>

              <p>
                Browser storage may be used to
                remember interface preferences,
                such as the selected appearance
                or color theme.
              </p>

              <p>
                Some hosting or third-party services
                may also use cookies or similar
                technologies, depending on their
                configuration.
              </p>

              <p>
                You can manage or clear cookies
                and website storage through
                your browser settings.
              </p>
            </section>

            <section className='mt-10'>
              <h2>6. External Websites and Services</h2>

              <p>
                This portfolio links to external
                platforms such as GitHub, LinkedIn,
                Google Colab, and deployed project
                demonstrations.
              </p>

              <p>
                Some contact buttons open Gmail
                to help visitors compose messages.
              </p>

              <p>
                When you visit an external platform,
                its own privacy practices and terms
                apply. I do not control how those
                providers collect or process data.
              </p>

              <p>
                Third-party resources, if embedded
                or loaded on a page, may also
                receive standard browser requests.
              </p>
            </section>

            <section className='mt-10'>
              <h2>7. Data Retention</h2>

              <p>
                Information voluntarily sent
                through correspondence may be
                retained as needed to respond to
                inquiries and maintain relevant
                communication records.
              </p>

              <p>
                Technical data retained by hosting
                or external services is subject
                to those providers&apos; applicable
                settings and retention policies.
              </p>
            </section>

            <section className='mt-10'>
              <h2>8. Your Privacy Choices</h2>

              <p>
                You may choose not to share personal
                information when browsing this
                portfolio.
              </p>

              <p>
                You may also adjust browser privacy
                settings, manage stored website
                information, and contact me regarding
                information you have sent directly.
              </p>

              <p>
                Requests concerning personal data
                will be considered in accordance
                with applicable obligations and
                available technical capabilities.
              </p>
            </section>

            <section className='mt-10'>
              <h2>9. Children&apos;s Privacy</h2>

              <p>
                This portfolio is intended to
                present academic and professional
                information. It is not designed
                as a service directed specifically
                toward children.
              </p>
            </section>

            <section className='mt-10'>
              <h2>10. Changes to This Policy</h2>

              <p>
                This policy may be updated as
                the portfolio changes or as new
                features and service providers
                are introduced.
              </p>

              <p>
                Material changes will be reflected
                on this page together with an
                updated revision date.
              </p>
            </section>

            <section className='mt-10'>
              <h2>11. Contact</h2>

              <p>
                If you have questions about this
                policy or information shared
                directly with me, please contact:
              </p>

              <div className='not-prose mt-5 rounded-xl border border-purple-200 bg-purple-50 p-5 dark:border-purple-900 dark:bg-purple-950/20'>

                <p className='font-semibold text-gray-950 dark:text-white'>
                  {SITE_AUTHOR.name}
                </p>

                <p className='mt-2 break-all text-sm text-gray-700 dark:text-gray-300'>
                  {SITE_AUTHOR.email}
                </p>

                <Link
                  href='/contact'
                  className='mt-4 inline-flex text-sm font-semibold text-purple-700 hover:underline dark:text-purple-300'
                >
                  Visit Contact Page
                </Link>

              </div>
            </section>

          </div>

        </div>
      </main>
    </>
  )
}
