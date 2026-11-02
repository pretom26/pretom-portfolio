import Link from 'next/link'

import Image from 'next/image'

import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Brain,
  Code2,
  ExternalLink,
  GraduationCap,
  Mail,
  type LucideIcon
} from 'lucide-react'

import { StarfieldBackground } from '@/components/site/StarfieldBackground'
import { AppLayoutPage } from '@/components/site/templates/AppLayoutPage'

import {
  PERSON_ID,
  SITE_AUTHOR,
  SITE_NAME,
  SITE_URL
} from '@/libs/constants/site'

import { generateOgImage } from '@/libs/metapage'

import type { Metadata } from 'next'

// ============================================
// PAGE SETTINGS AND SEARCH METADATA
// ============================================

const BASE_URL = SITE_URL.replace(/\/$/, '')
const RESUME_URL = `${BASE_URL}/resume`
const PDF_URL = '/Resume_2026.pdf'

const GITHUB_URL = 'https://github.com/pretom26'

const LINKEDIN_URL =
  'https://www.linkedin.com/in/pretom-areefin-pranto-a97651290/'

const PAGE_TITLE = `Resume | ${SITE_NAME}`

const PAGE_DESCRIPTION =
  'Resume of Pretom Areefin Pranto, a BRAC University Computer Science undergraduate with experience in machine learning engineering, multimodal healthcare AI research, and software development.'

const OG_IMAGE = generateOgImage({
  title: 'Resume',
  subTitle:
    'Computer Science · Machine Learning · Software Engineering',
  type: 'resume'
})

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,

  alternates: {
    canonical: RESUME_URL
  },

  keywords: [
    'Pretom Areefin Pranto',
    'Resume',
    'BRAC University',
    'Machine Learning Engineering',
    'NeuroVentura',
    'Healthcare AI',
    'Software Engineering'
  ],

  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: RESUME_URL,
    siteName: SITE_NAME,
    type: 'profile',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `Resume of ${SITE_NAME}`
      }
    ]
  },

  twitter: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    card: 'summary_large_image',
    images: [OG_IMAGE]
  }
}

// ============================================
// RESUME CONTENT TYPES
// ============================================

type Experience = {
  role: string
  organization: string
  period: string
  points: string[]
  url?: string
  linkLabel?: string
}

type ResumeProject = {
  name: string
  context: string
  summary: string
  researchId: string
  url?: string
  linkLabel?: string
}

// ============================================
// RELEVANT PROFESSIONAL EXPERIENCE
// ============================================

const professionalExperience: Experience[] = [
  {
    role: 'Machine Learning Engineering Intern',
    organization: 'FlyRank AI',
    period: 'Jul – Oct 2026',

    points: [
      'Completed a Google Search Ranking & Discoverability capstone using approximately 30,000 Google Search Console and GA4 records; the lead track mentor accepted the final project.',

      'Identified overly optimistic initial Precision@10 of 0.70; introduced client-grouped train/test splits to reduce leakage and reported out-of-sample Precision@10 of 0.40.',

      'Worked with data wrangling, embeddings, clustering, and opportunity modeling; completed 118 internship program hours and 14 verified Anthropic Academy courses.'
    ],

    url:
      'https://github.com/pretom26/ml_internship_flyrankAI',

    linkLabel: 'Capstone repository'
  },

  {
    role: 'AI Data Trainer',
    organization: 'Genmorphics AI, Bangladesh',
    period: '2024',

    points: [
      'Annotated textual and graphical media for AI workflows and developed localized prompts for AI-related tasks.'
    ]
  }
]

// ============================================
// ADDITIONAL EXPERIENCE
// ============================================

const additionalExperience: Experience[] = [
  {
    role: 'Tech Writer & Researcher (Freelance)',
    organization: 'Upwork and Fiverr',
    period: '2024 – Present',

    points: [
      'Produced research-based academic and technology articles with supporting visual content created in Canva.'
    ]
  },

  {
    role: 'Social Media Executive',
    organization: 'G17 UAC Bangladesh',
    period: '2024 – 2026',

    points: [
      'Managed campaigns aligned with United Nations Sustainable Development Goals and represented BRAC University.'
    ]
  },

  {
    role: 'News Writer & Researcher',
    organization: 'The Papyrus · Online News Media',
    period: '2024 – 2025',

    points: [
      'Researched and wrote technology and social-interest articles, supported SEO, and created editorial graphics.'
    ]
  },

  {
    role: 'Senior Martial Arts Instructor and Martial Artist',
    organization: 'Dragon Council Bangladesh',
    period: '2019 – 2024',

    points: [
      'Taught Shaolin Kung Fu and supported structured training and formal practice.'
    ]
  }
]

// ============================================
// TECHNICAL SKILLS
// ============================================

const skillGroups = [
  {
    title: 'Programming',

    skills: [
      'Python',
      'JavaScript',
      'PHP',
      'SQL / MySQL',
      'HTML',
      'CSS'
    ]
  },

  {
    title: 'Machine Learning & Data',

    skills: [
      'PyTorch',
      'MONAI',
      'scikit-learn',
      'XGBoost',
      'Pandas',
      'NumPy',
      'CNNs',
      'ResNet',
      'DenseNet',
      'Clustering',
      'Embeddings',
      'Feature Engineering',
      'Model Evaluation'
    ]
  },

  {
    title: 'Web Development',

    skills: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'MERN',
      'REST APIs'
    ]
  },

  {
    title: 'AI & Annotation',

    skills: [
      'Text Annotation',
      'Image Annotation',
      'Prompt Engineering'
    ]
  },

  {
    title: 'Tools & Platforms',

    skills: [
      'Git',
      'GitHub',
      'Google Colab',
      'VS Code',
      'LaTeX',
      'Canva',
      'Spyder',
      'Flex'
    ]
  }
]

// ============================================
// MACHINE LEARNING AND AI PROJECTS
// ============================================

const mlProjects: ResumeProject[] = [
  {
    name: 'LungCare — Multiclass Lung Cancer Detection',
    context:
      'International Biotechnology Conference · 2025',

    summary:
      'Developed a deep learning pipeline for lung cancer subtype classification from histopathology images, including preprocessing and prediction visualization.',

    researchId: 'lungcare'
  },

  {
    name: 'Diabetic Retinopathy Severity Classification',
    context: 'CSE427 · Machine Learning',

    summary:
      'Built a four-class classifier using ResNet50 transfer learning, class-weighted training, and Grad-CAM.',

    researchId: 'retinopathy',

    url:
      'https://github.com/pretom26/Automated-Diabetic-Retinopathy-Severity-Classification-Using-Retinal-Fundus-Images',

    linkLabel: 'Repository'
  },

  {
    name: 'Music Generation Using Unsupervised Learning',
    context: 'CSE425 · Neural Networks',

    summary:
      'Compared LSTM autoencoder, VAE, and Transformer models on MAESTRO v3.0.0 MIDI sequences and piano-roll representations.',

    researchId: 'music-generation',

    url:
      'https://github.com/pretom26/CSE425-Neural-Network-Project-Music-Generation-Using-Unsupervised-Learning',

    linkLabel: 'Repository'
  },

  {
    name: 'Mice Protein Expression Classifier',
    context: 'CSE422 · Machine Learning',

    summary:
      'Built Python classification workflows for mouse protein-expression data, including preprocessing and feature engineering.',

    researchId: 'mice-protein',

    url:
      'https://colab.research.google.com/drive/1lE0DurX6ReGAsOw1PTHVa3rryiqlcn3e',

    linkLabel: 'Colab notebook'
  },

  {
    name: 'PretBuddy — Real-Time AI Voice Assistant',
    context: 'Personal project',

    summary:
      'Developed a Python AI voice assistant using AssemblyAI, Groq-powered web search, and ElevenLabs.',

    researchId: 'pretbuddy',

    url:
      'https://github.com/pretom26/PretBuddy_Realtime_AI_Chat_Voice_Assistant',

    linkLabel: 'Repository'
  }
]

// ============================================
// SOFTWARE ENGINEERING PROJECTS
// ============================================

const softwareProjects: ResumeProject[] = [
  {
    name: 'Abar Nosto! — Community Issue Monitoring',
    context: 'CSE471 · MERN',

    summary:
      'Built and deployed a community issue reporting platform with an activity feed, reputation system, offline drafts, and administrative tools.',

    researchId: 'abar-nosto',

    url:
      'https://abar-nosto-a-community-issue-monito.vercel.app/login',

    linkLabel: 'Live application'
  },

  {
    name: 'BRACU Student Hub',
    context: 'CSE470 · Software Engineering',

    summary:
      'Developed a MERN platform for resources, exam deadlines, calendars, faculty reviews, and administrator-managed content.',

    researchId: 'student-hub',

    url:
      'https://github.com/sora-rara/bracu-student-hub',

    linkLabel: 'Team repository'
  },

  {
    name: 'AidTrack — Healthcare Management Platform',
    context: 'CSE370 · Database Management',

    summary:
      'Developed a PHP and database-backed platform supporting appointments, patient records, and doctor–patient communication.',

    researchId: 'aidtrack'
  },

  {
    name: 'Weather CLI — Python Package',
    context: 'Personal project',

    summary:
      'Created a typed Python CLI with TTL caching, rich terminal output, pytest (94% reported coverage), and GitHub Actions CI.',

    researchId: 'weather-cli',

    url:
      'https://github.com/pretom26/weather-cli',

    linkLabel: 'Repository'
  }
]

// ============================================
// GMAIL CONTACT HELPER
// ============================================

function gmailComposeUrl(
  subject = 'Portfolio and resume inquiry'
) {
  const params = new URLSearchParams({
    view: 'cm',
    fs: '1',
    to: SITE_AUTHOR.email,
    su: subject,

    body:
      'Hi Pretom,\n\n' +
      'I came across your resume and would like to connect.\n\n' +
      'Best regards,'
  })

  return `https://mail.google.com/mail/?${params.toString()}`
}

// ============================================
// REUSABLE SECTION HEADING
// ============================================

function SectionHeading({
  id,
  number,
  title,
  subtitle,
  icon: Icon
}: {
  id: string
  number: string
  title: string
  subtitle?: string
  icon: LucideIcon
}) {
  return (
    <div
      id={id}
      className='mb-6 scroll-mt-28'
    >
      <div className='flex items-start gap-3'>
        <span className='mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-purple-200 bg-purple-50 text-purple-700 dark:border-purple-900 dark:bg-purple-950/40 dark:text-purple-300'>
          <Icon
            size={20}
            aria-hidden='true'
          />
        </span>

        <div>
          <p className='text-[11px] font-semibold tracking-[.16em] text-purple-600 uppercase dark:text-purple-300'>
            {number}
          </p>

          <h2 className='text-2xl font-bold tracking-tight text-gray-950 dark:text-white'>
            {title}
          </h2>

          {subtitle && (
            <p className='mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400'>
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

// ============================================
// REUSABLE EXPERIENCE CARD
// ============================================

function ExperienceCard({
  item
}: {
  item: Experience
}) {
  return (
    <article className='rounded-2xl border border-gray-200 bg-white/80 p-5 shadow-sm md:p-6 dark:border-gray-800 dark:bg-gray-950/65'>

      <div className='flex flex-wrap items-start justify-between gap-3'>
        <div>
          <h3 className='text-base font-bold text-gray-950 dark:text-white'>
            {item.role}
          </h3>

          <p className='mt-1 text-sm font-medium text-purple-700 dark:text-purple-300'>
            {item.organization}
          </p>
        </div>

        <span className='rounded-full border border-gray-200 px-3 py-1 text-xs font-semibold text-gray-600 dark:border-gray-700 dark:text-gray-300'>
          {item.period}
        </span>
      </div>

      <ul className='mt-4 space-y-2'>
        {item.points.map((point) => (
          <li
            key={point}
            className='flex items-start gap-2 text-sm leading-7 text-gray-600 dark:text-gray-300'
          >
            <span
              aria-hidden='true'
              className='mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500'
            />

            <span>{point}</span>
          </li>
        ))}
      </ul>

      {item.url && (
        <a
          href={item.url}
          target='_blank'
          rel='noopener noreferrer'
          className='mt-4 inline-flex items-center gap-1 text-sm font-semibold text-purple-700 hover:underline dark:text-purple-300'
        >
          {item.linkLabel || 'View work'}

          <ArrowUpRight
            size={15}
            aria-hidden='true'
          />
        </a>
      )}
    </article>
  )
}

// ============================================
// REUSABLE PROJECT CARD
// ============================================

function ProjectRow({
  project
}: {
  project: ResumeProject
}) {
  return (
    <article className='rounded-xl border border-gray-200 bg-white/75 p-4 dark:border-gray-800 dark:bg-gray-950/60'>

      <p className='text-[11px] font-semibold tracking-wide text-purple-700 dark:text-purple-300'>
        {project.context}
      </p>

      <h3 className='mt-1 text-base font-bold text-gray-950 dark:text-white'>
        {project.name}
      </h3>

      <p className='mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300'>
        {project.summary}
      </p>

      <div className='mt-3 flex flex-wrap items-center gap-4'>
        <Link
          href={`/research#${project.researchId}`}
          className='inline-flex items-center gap-1 text-xs font-semibold text-purple-700 hover:underline dark:text-purple-300'
        >
          Project details

          <ArrowRight
            size={13}
            aria-hidden='true'
          />
        </Link>

        {project.url && (
          <a
            href={project.url}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-1 text-xs font-semibold text-gray-700 hover:underline dark:text-gray-200'
          >
            {project.linkLabel || 'Open project'}

            <ArrowUpRight
              size={13}
              aria-hidden='true'
            />
          </a>
        )}
      </div>
    </article>
  )
}

// ============================================
// PERSONALIZED SEO STRUCTURED DATA
// ============================================

const profileJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${RESUME_URL}#profile`,

  url: RESUME_URL,

  name: `Resume — ${SITE_NAME}`,
  description: PAGE_DESCRIPTION,
  inLanguage: 'en-US',

  mainEntity: {
    '@type': 'Person',
    '@id': PERSON_ID,

    name: SITE_NAME,
    jobTitle: 'Computer Science Undergraduate',

    affiliation: {
      '@type': 'CollegeOrUniversity',
      name: 'BRAC University'
    }
  },

  isPartOf: {
    '@type': 'WebSite',
    url: BASE_URL
  }
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',

  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: BASE_URL
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Resume',
      item: RESUME_URL
    }
  ]
}

// ============================================
// MAIN RESUME PAGE
// ============================================

export default function ResumePage() {
  return (
    <>
      <StarfieldBackground />

      <AppLayoutPage className='pt-6 md:pt-10'>

        {/* SEO JSON-LD */}

        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              profileJsonLd
            ).replace(/</g, '\\u003c')
          }}
        />

        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              breadcrumbJsonLd
            ).replace(/</g, '\\u003c')
          }}
        />

        {/* ====================================
            HERO SECTION
        ==================================== */}

        <header className='border-b border-gray-200 pb-10 dark:border-gray-800'>

          <p className='text-xs font-semibold tracking-[.2em] text-purple-600 uppercase dark:text-purple-300'>
            PROFESSIONAL PROFILE / 2026
          </p>

          <div className='mt-5 grid items-center gap-7 md:grid-cols-[1fr_180px]'>

            <div>
              <h1 className='from-primary-600 dark:from-primary-300 bg-gradient-to-br via-purple-600 to-pink-500 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-5xl dark:via-purple-300 dark:to-pink-300'>
                Pretom Areefin Pranto
              </h1>

              <p className='mt-3 text-base font-semibold text-gray-900 dark:text-gray-100'>
                Computer Science · Machine Learning · Software Engineering
              </p>

              <p className='mt-2 text-sm text-gray-600 dark:text-gray-400'>
                Dhaka, Bangladesh · BRAC University
              </p>

              <p className='mt-4 max-w-3xl text-sm leading-7 text-gray-600 md:text-base dark:text-gray-300'>
                Computer Science undergraduate with hands-on
                experience in machine learning engineering,
                multimodal AI research, data annotation,
                and full-stack development. Completed a FlyRank
                AI internship and developed academic projects
                in healthcare imaging, biological data, and
                web applications.
              </p>
            </div>

            {/* Profile photo */}

            <div className='mx-auto w-fit rounded-3xl border border-purple-200 bg-purple-50 p-2 shadow-lg dark:border-purple-900 dark:bg-purple-950/30'>
              <Image
                src='/pretom-profile.jpg'
                width={180}
                height={180}
                alt='Portrait of Pretom Areefin Pranto'
                className='h-40 w-40 rounded-2xl object-cover'
                priority
              />
            </div>

          </div>

          {/* Primary action buttons */}

          <div className='mt-7 flex flex-wrap gap-3'>

            <a
              href={PDF_URL}
              download='Resume_2026.pdf'
              className='inline-flex items-center gap-2 rounded-lg bg-purple-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-purple-700'
            >
              Download PDF Resume

              <ArrowRight
                size={16}
                aria-hidden='true'
              />
            </a>

            <a
              href={gmailComposeUrl()}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-800 transition hover:border-purple-400 dark:border-gray-700 dark:text-white'
            >
              <Mail
                size={16}
                aria-hidden='true'
              />

              Email via Gmail
            </a>

            <a
              href={LINKEDIN_URL}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-800 transition hover:border-purple-400 dark:border-gray-700 dark:text-white'
            >
              LinkedIn

              <ExternalLink
                size={15}
                aria-hidden='true'
              />
            </a>

            <a
              href={GITHUB_URL}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-800 transition hover:border-purple-400 dark:border-gray-700 dark:text-white'
            >
              <Code2
                size={16}
                aria-hidden='true'
              />

              GitHub
            </a>

          </div>

          <p className='mt-3 text-xs text-gray-500 dark:text-gray-400'>
            Direct email: {SITE_AUTHOR.email}
          </p>

        </header>

        {/* ====================================
            QUICK NAVIGATION
        ==================================== */}

        <nav
          aria-label='Resume sections'
          className='flex flex-wrap gap-2 py-7'
        >
          {[
            ['experience', 'Experience'],
            ['research', 'Research'],
            ['education', 'Education'],
            ['skills', 'Skills'],
            ['projects', 'Projects'],
            ['additional', 'Additional experience']
          ].map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className='rounded-lg border border-gray-200 bg-white/70 px-3 py-2 text-xs font-semibold text-gray-700 hover:border-purple-400 dark:border-gray-700 dark:bg-gray-900/70 dark:text-gray-200'
            >
              {label}
            </a>
          ))}
        </nav>

        {/* ====================================
            PROFESSIONAL EXPERIENCE
        ==================================== */}

        <section className='border-t border-gray-200 py-10 dark:border-gray-800'>

          <SectionHeading
            id='experience'
            number='01 / CAREER'
            title='Relevant Professional Experience'
            subtitle='Machine learning engineering and AI data training.'
            icon={BarChart3}
          />

          <div className='grid gap-4'>
            {professionalExperience.map((item) => (
              <ExperienceCard
                key={item.role}
                item={item}
              />
            ))}
          </div>

        </section>

        {/* ====================================
            UNDERGRADUATE THESIS
        ==================================== */}

        <section className='border-t border-gray-200 py-10 dark:border-gray-800'>

          <SectionHeading
            id='research'
            number='02 / RESEARCH'
            title='Undergraduate Thesis'
            subtitle='Completed in 2026 at BRAC University.'
            icon={Brain}
          />

          <article className='rounded-2xl border border-purple-200 bg-purple-50/60 p-6 dark:border-purple-900 dark:bg-purple-950/20'>

            <p className='text-xs font-semibold tracking-wider text-purple-700 uppercase dark:text-purple-300'>
              NeuroVentura · Multimodal Healthcare AI
            </p>

            <h3 className='mt-3 text-xl font-bold leading-snug text-gray-950 dark:text-white'>
              A Modern Approach to Predict Alzheimer’s Disease
              Risk and Progression Through Multimodal Machine
              Learning Models
            </h3>

            <p className='mt-4 text-sm leading-7 text-gray-700 dark:text-gray-300'>
              Developed a late-fusion framework combining a
              frozen MONAI 3D DenseNet-121 MRI branch, XGBoost
              on MMSE, age, and gender, and a residual multilayer
              perceptron on a matched cohort.
            </p>

            <div className='mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-300'>

              <p>
                <strong>Supervisor:</strong>{' '}
                Md. Saiful Bari Siddiqui, Senior Lecturer
              </p>

              <p>
                <strong>Co-supervisor:</strong>{' '}
                Dr. Swakkhar Shatabda, Professor
              </p>

              <p>
                <strong>Affiliation:</strong>{' '}
                Department of Computer Science and Engineering,
                BRAC University
              </p>

            </div>

            <div className='mt-5 flex flex-wrap gap-3'>
              <Link
                href='/research#neuroventura'
                className='inline-flex items-center gap-1 text-sm font-semibold text-purple-700 hover:underline dark:text-purple-300'
              >
                Explore research overview

                <ArrowUpRight
                  size={15}
                  aria-hidden='true'
                />
              </Link>
            </div>

            <p className='mt-4 text-xs text-gray-500 dark:text-gray-400'>
              Thesis completed in 2026. No academic publication
              is claimed.
            </p>

          </article>

        </section>

        {/* ====================================
            EDUCATION
        ==================================== */}

        <section className='border-t border-gray-200 py-10 dark:border-gray-800'>

          <SectionHeading
            id='education'
            number='03 / ACADEMICS'
            title='Education'
            icon={GraduationCap}
          />

          <div className='rounded-2xl border border-gray-200 bg-white/80 p-6 dark:border-gray-800 dark:bg-gray-950/65'>

            <div className='flex flex-wrap justify-between gap-3'>

              <div>
                <h3 className='text-lg font-bold text-gray-950 dark:text-white'>
                  BRAC University
                </h3>

                <p className='mt-1 text-sm font-medium text-purple-700 dark:text-purple-300'>
                  Bachelor in Computer Science
                </p>
              </div>

              <span className='h-fit rounded-full border border-gray-200 px-3 py-1 text-xs font-semibold text-gray-600 dark:border-gray-700 dark:text-gray-300'>
                2022 – Jan 2027 (expected)
              </span>

            </div>

            <p className='mt-4 text-sm leading-7 text-gray-600 dark:text-gray-300'>
              <strong>Relevant coursework:</strong>{' '}
              Machine Learning, Neural Networks, Software
              Engineering, Database Management, and Computer
              Networks.
            </p>

          </div>

        </section>

        {/* ====================================
            TECHNICAL SKILLS
        ==================================== */}

        <section className='border-t border-gray-200 py-10 dark:border-gray-800'>

          <SectionHeading
            id='skills'
            number='04 / CAPABILITIES'
            title='Technical Skills'
            icon={Code2}
          />

          <div className='grid gap-4 md:grid-cols-2'>

            {skillGroups.map((group) => (
              <div
                key={group.title}
                className='rounded-2xl border border-gray-200 bg-white/80 p-5 dark:border-gray-800 dark:bg-gray-950/65'
              >

                <h3 className='text-sm font-bold text-gray-950 dark:text-white'>
                  {group.title}
                </h3>

                <div className='mt-4 flex flex-wrap gap-2'>

                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className='rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300'
                    >
                      {skill}
                    </span>
                  ))}

                </div>

              </div>
            ))}

          </div>

        </section>

        {/* ====================================
            ACADEMIC AND PERSONAL PROJECTS
        ==================================== */}

        <section className='border-t border-gray-200 py-10 dark:border-gray-800'>

          <SectionHeading
            id='projects'
            number='05 / SELECTED BUILDS'
            title='Academic & Personal Projects'
            subtitle='Resume summaries with links to project descriptions and available work.'
            icon={Brain}
          />

          <h3 className='mb-4 text-lg font-bold text-gray-950 dark:text-white'>
            Machine Learning & AI
          </h3>

          <div className='grid gap-4 md:grid-cols-2'>

            {mlProjects.map((project) => (
              <ProjectRow
                key={project.researchId}
                project={project}
              />
            ))}

          </div>

          <h3 className='mb-4 mt-9 text-lg font-bold text-gray-950 dark:text-white'>
            Software Engineering
          </h3>

          <div className='grid gap-4 md:grid-cols-2'>

            {softwareProjects.map((project) => (
              <ProjectRow
                key={project.researchId}
                project={project}
              />
            ))}

          </div>

        </section>

        {/* ====================================
            ADDITIONAL EXPERIENCE
        ==================================== */}

        <section className='border-t border-gray-200 py-10 dark:border-gray-800'>

          <SectionHeading
            id='additional'
            number='06 / BEYOND ENGINEERING'
            title='Additional Experience'
            subtitle='Writing, outreach, communications, and instruction.'
            icon={GraduationCap}
          />

          <div className='grid gap-4 md:grid-cols-2'>

            {additionalExperience.map((item) => (
              <ExperienceCard
                key={item.role}
                item={item}
              />
            ))}

          </div>

        </section>

        {/* ====================================
            FOOTER
        ==================================== */}

        <footer className='border-t border-gray-200 py-9 dark:border-gray-800'>

          <h2 className='text-lg font-bold text-gray-950 dark:text-white'>
            Explore the complete portfolio
          </h2>

          <p className='mt-2 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400'>
            For project illustrations, technologies, and live
            links, visit my Portfolio or Research page.
            To contact me, use Gmail or LinkedIn.
          </p>

          <div className='mt-5 flex flex-wrap gap-3'>

            <Link
              href='/portfolio'
              className='inline-flex items-center gap-2 rounded-lg bg-purple-600 px-4 py-3 text-sm font-semibold text-white hover:bg-purple-700'
            >
              View Portfolio

              <ArrowRight
                size={16}
                aria-hidden='true'
              />
            </Link>

            <Link
              href='/research'
              className='inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-800 hover:border-purple-400 dark:border-gray-700 dark:text-white'
            >
              Research & Projects

              <ArrowUpRight
                size={16}
                aria-hidden='true'
              />
            </Link>

          </div>

        </footer>

      </AppLayoutPage>
    </>
  )
}
