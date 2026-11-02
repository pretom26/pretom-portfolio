
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
// SECURITY POLICY CONFIGURATION
// ============================================

const BASE_URL = SITE_URL.replace(/\/+$/, '')
const PAGE_URL = `${BASE_URL}/security-policy`

const PAGE_TITLE = `Security Policy | ${SITE_NAME}`

const PAGE_DESCRIPTION =
  'Security reporting and responsible disclosure information for the personal portfolio of Pretom Areefin Pranto.'

const LINKEDIN_URL =
  'https://www.linkedin.com/in/pretom-areefin-pranto-a97651290/'

const OG_IMAGE = generateOgImage({
  title: 'Security Policy',
  subTitle: 'Responsible Vulnerability Reporting',
  type: 'page'
})

const GMAIL_URL = (() => {
  const params = new URLSearchParams({
    view: 'cm',
    fs: '1',
    to: SITE_AUTHOR.email,
    su: 'Portfolio Security Report'
  })

  return `https://mail.google.com/mail/?${params.toString()}`
})()

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
// SECURITY POLICY PAGE
// ============================================

export default function SecurityPolicyPage() {
  return (
    <>
      <StarfieldBackground />

      <main className='layout'>
        <div className='mx-auto max-w-4xl py-10 md:py-14'>

          <header className='border-b border-gray-200 pb-8 dark:border-gray-800'>

            <p className='text-xs font-semibold tracking-[0.2em] text-purple-600 uppercase dark:text-purple-300'>
              WEBSITE INFORMATION / SECURITY
            </p>

            <h1 className='mt-4 text-3xl font-extrabold tracking-tight text-gray-950 md:text-5xl dark:text-white'>
              Security Policy
            </h1>

            <p className='mt-5 max-w-3xl text-base leading-8 text-gray-600 dark:text-gray-300'>
              Information about reporting potential
              security issues affecting the personal
              portfolio of {SITE_AUTHOR.name}.
            </p>

            <p className='mt-4 text-sm text-gray-500 dark:text-gray-400'>
              Last updated: November 2, 2026
            </p>

          </header>

          <div className='prose prose-gray dark:prose-invert mt-10 max-w-none'>

            <section>
              <h2>1. Reporting a Security Issue</h2>

              <p>
                If you notice a potential security
                vulnerability or other security
                concern affecting this website,
                you are welcome to report it.
              </p>

              <p>
                Please use the contact information
                below and provide enough detail
                to help identify and understand
                the issue.
              </p>

              <p>
                Avoid sharing vulnerability details
                publicly before allowing a reasonable
                opportunity to review the report.
              </p>
            </section>

            <section className='mt-10'>
              <h2>2. How to Contact Me</h2>

              <p>
                The preferred reporting method
                is email. You may also use my
                LinkedIn profile for an initial
                contact message.
              </p>

              <div className='not-prose mt-5 rounded-xl border border-purple-200 bg-purple-50 p-5 dark:border-purple-900 dark:bg-purple-950/20'>

                <p className='font-semibold text-gray-950 dark:text-white'>
                  {SITE_AUTHOR.name}
                </p>

                <p className='mt-2 break-all text-sm text-gray-700 dark:text-gray-300'>
                  {SITE_AUTHOR.email}
                </p>

                <div className='mt-5 flex flex-wrap gap-3'>

                  <a
                    href={GMAIL_URL}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex rounded-lg bg-purple-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-purple-700'
                  >
                    Report via Gmail
                  </a>

                  <a
                    href={LINKEDIN_URL}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-900 hover:border-purple-400 dark:border-gray-700 dark:text-white'
                  >
                    LinkedIn
                  </a>

                </div>

              </div>
            </section>

            <section className='mt-10'>
              <h2>3. What to Include in a Report</h2>

              <p>
                When possible, please include:
              </p>

              <ul>
                <li>A description of the suspected issue</li>
                <li>The affected webpage or endpoint</li>
                <li>Steps that demonstrate the issue without causing harm</li>
                <li>The potential security impact</li>
                <li>Relevant screenshots or diagnostic details</li>
                <li>A contact method for follow-up</li>
              </ul>

              <p>
                Please do not send passwords,
                access tokens, or private user
                information belonging to
                someone else.
              </p>
            </section>

            <section className='mt-10'>
              <h2>4. Scope</h2>

              <p>
                This page concerns the public
                pages and first-party functionality
                of this personal portfolio at
                its official deployed address.
              </p>

              <p>
                External services, third-party
                websites, and repositories linked
                from this portfolio are not
                automatically covered by this
                policy.
              </p>

              <p>
                Vulnerabilities in those services
                should be reported through their
                respective security channels.
              </p>
            </section>

            <section className='mt-10'>
              <h2>5. Responsible Reporting</h2>

              <p>
                Please avoid actions that could
                interfere with the website,
                its hosting services, or other
                users.
              </p>

              <ul>
                <li>Do not conduct denial-of-service or disruptive testing</li>
                <li>Do not attempt to access another person&apos;s private data</li>
                <li>Do not modify, delete, or download unauthorized information</li>
                <li>Do not use social engineering or phishing</li>
                <li>Do not perform intrusive automated testing without permission</li>
              </ul>

              <p>
                This page is not blanket
                authorization to conduct
                penetration testing or other
                intrusive security activities.
              </p>
            </section>

            <section className='mt-10'>
              <h2>6. Report Review and Follow-Up</h2>

              <p>
                Security reports may be reviewed
                based on available information,
                severity, and practical
                remediation requirements.
              </p>

              <p>
                Follow-up may be requested if
                more information is necessary.
              </p>

              <p>
                This personal portfolio does
                not publish guaranteed response
                or remediation deadlines.
              </p>
            </section>

            <section className='mt-10'>
              <h2>7. Disclosure and Recognition</h2>

              <p>
                If you would like to discuss
                public disclosure of a reported
                issue, please contact me first.
              </p>

              <p>
                Any public acknowledgment or
                recognition would be considered
                individually and would require
                the reporter&apos;s permission.
              </p>

              <p>
                This page does not establish
                a paid bug-bounty program or
                promise a monetary reward.
              </p>
            </section>

            <section className='mt-10'>
              <h2>8. Additional Information</h2>

              <p>
                General questions can also
                be submitted through my
                Contact page.
              </p>

              <p>
                For information about website
                data handling, please read
                the Privacy Policy.
              </p>

              <div className='not-prose mt-5 flex flex-wrap gap-3'>

                <Link
                  href='/contact'
                  className='inline-flex rounded-lg bg-purple-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-purple-700'
                >
                  Contact Page
                </Link>

                <Link
                  href='/privacy-policy'
                  className='inline-flex rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-900 hover:border-purple-400 dark:border-gray-700 dark:text-white'
                >
                  Privacy Policy
                </Link>

              </div>
            </section>

          </div>

        </div>
      </main>
    </>
  )
}
