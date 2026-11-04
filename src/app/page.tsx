import Image from 'next/image'
import { SocialHome } from '@/components/site/common'
import { StarfieldBackground } from '@/components/site/StarfieldBackground'
import { getPersonNode } from '@/libs/seo/personSchema'
import { PROFILE_IMAGE, SITE_AUTHOR, SITE_NAME, SITE_URL } from '@/libs/constants/site'

import type { Metadata } from 'next'

/**
 * Personalized homepage for Pretom Areefin Pranto.
 *
 * This intentionally does not read the template owner's sample blog posts,
 * research entries, news, teaching records, or portfolio data. Add your own
 * MDX content before reconnecting those original dynamic components.
 */

const HOME_TITLE = `${SITE_NAME} | Machine Learning, AI Research & Software Engineering`
const HOME_DESCRIPTION =
  'Pretom Areefin Pranto is a Computer Science undergraduate at BRAC University, working on healthcare AI, multimodal machine learning, and full-stack software development.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  applicationName: `${SITE_NAME} Portfolio`,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: 'profile',
    firstName: 'Pretom',
    lastName: 'Areefin Pranto',
    username: SITE_AUTHOR.githubUsername,
  },
  twitter: {
    card: 'summary',
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
  },
  keywords: [
    'Pretom Areefin Pranto',
    'Machine Learning',
    'Healthcare AI',
    'Multimodal Learning',
    'Deep Learning',
    'Software Engineering',
    'BRAC University',
    'React',
    'Next.js',
    'PyTorch',
    'MONAI',
    'XGBoost',
  ],
}
const research = [
  {
    category: 'Undergraduate Thesis · Completed (2026)',
    title: 'NeuroVentura',
    subtitle: 'A Modern Approach to Predict Alzheimer’s Disease Risk and Progression Through Multimodal Machine Learning Models',
    description:
      'Completed undergraduate research developing a late-fusion framework that combines a frozen MONAI 3D DenseNet-121 for MRI, XGBoost using MMSE, age, and gender, and a residual MLP on a matched cohort.',
    tags: ['Medical Imaging', 'MONAI', 'PyTorch', 'XGBoost', 'Multimodal AI'],
  },
  {
    category: 'Conference project · 2025',
    title: 'LungCare',
    subtitle: 'Multiclass lung cancer image classification',
    description:
      'A deep-learning pipeline for classifying lung cancer subtypes from histopathology images, including preprocessing and prediction visualization.',
    tags: ['Computer Vision', 'Deep Learning', 'Histopathology'],
  },
  {
    category: 'Academic ML Project',
    title: 'Diabetic Retinopathy Severity Classification',
    subtitle: 'Interpretable retinal image classification',
    description:
      'A four-class diabetic retinopathy classifier using ResNet50 transfer learning, class-weighted training, and Grad-CAM visualizations.',
    tags: ['ResNet50', 'Transfer Learning', 'Grad-CAM'],
  },
]

const projects = [
  {
    category: 'Full-Stack Web Application',
    title: 'Abar Nosto!',
    description:
      'Community issue reporting with an activity feed, reputation features, offline drafts, and administrative tools. Built using the MERN stack and deployed on Vercel.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
  },
  {
    category: 'Artificial Intelligence',
    title: 'PretBuddy',
    description:
      'A real-time Python AI voice assistant integrating speech processing and AI-powered responses with AssemblyAI, Groq, and ElevenLabs.',
    tags: ['Python', 'Voice AI', 'API Integration'],
  },
  {
    category: 'Software Engineering',
    title: 'BRACU Student Hub',
    description:
      'A MERN-based platform for academic resources, exam deadlines, calendars, faculty reviews, and administrator-managed content.',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    category: 'Developer Tooling',
    title: 'Weather CLI',
    description:
      'A typed Python command-line application with TTL caching, terminal output, automated tests, and GitHub Actions CI. Reported test coverage: 94%.',
    tags: ['Python', 'Pytest', 'GitHub Actions'],
  },
]

const skills = [
  {
    label: 'Machine Learning & Data',
    items: 'PyTorch, MONAI, scikit-learn, XGBoost, Pandas, NumPy, computer vision',
  },
  {
    label: 'Software Development',
    items: 'Python, JavaScript, React, Node.js, Express, MongoDB, SQL, REST APIs',
  },
  {
    label: 'Engineering Tools',
    items: 'Git, GitHub, VS Code, Google Colab, LaTeX, automated testing',
  },
]

function Tag({ children }: { children: string }) {
  return (
    <span className='rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300'>
      {children}
    </span>
  )
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <div className='mb-7'>
      <p className='mb-2 text-xs font-semibold tracking-[0.2em] text-purple-600 uppercase dark:text-purple-300'>
        {eyebrow}
      </p>
      <h2 className='text-2xl font-bold tracking-tight text-gray-950 md:text-3xl dark:text-white'>
        {title}
      </h2>
      <p className='mt-2 max-w-2xl text-sm leading-7 text-gray-600 md:text-base dark:text-gray-400'>
        {description}
      </p>
    </div>
  )
}


export default function HomePage() {
  return (
    <>
      <StarfieldBackground />


      {/* Structured data for SEO */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            ...getPersonNode(),
            '@context': 'https://schema.org'
          }).replace(/</g, '\\u003c')
        }}
      />


      <main
        className='layout relative'
        itemScope
        itemType='https://schema.org/ProfilePage'
      >
        {/* Personal introduction */}
        <section
          className='flex flex-col border-b border-gray-200 pt-5 pb-12 md:pt-12 md:pb-16 dark:border-gray-800'
          itemScope
          itemType='https://schema.org/Person'
          itemProp='mainEntity'
        >
          <div className='flex flex-col-reverse items-start gap-8 sm:flex-row sm:items-center sm:justify-between'>
            <div className='min-w-0 flex-1'>
              <div className='mb-4 flex flex-wrap items-center gap-2 text-xs font-semibold tracking-[0.12em] text-gray-600 uppercase dark:text-gray-300'>
                <span aria-hidden='true' className='h-2 w-2 rounded-full bg-purple-500' />
                <span>Computer Science</span>
                <span aria-hidden='true'>·</span>
                <span>Machine Learning</span>
                <span aria-hidden='true'>·</span>
                <span>Software Engineering</span>
              </div>

              <h1
                className='name-aberration from-primary-600 dark:from-primary-300 mb-4 bg-gradient-to-br via-purple-600 to-pink-500 bg-clip-text text-4xl leading-tight font-extrabold tracking-tight text-transparent break-words sm:text-5xl md:text-6xl dark:via-purple-300 dark:to-pink-300'
                itemProp='name'
                data-text={SITE_NAME}
              >
                {SITE_NAME}
              </h1>

              <h2 className='text-lg font-medium text-gray-700 md:text-xl dark:text-gray-200' itemProp='jobTitle'>
                Computer Science Undergraduate at{' '}
                <span className='font-bold'>BRAC University</span>
              </h2>

              <p className='mt-5 max-w-2xl text-base leading-8 text-gray-700 dark:text-gray-300'>
                I build intelligent systems and practical software across multimodal
                machine learning, healthcare AI, computer vision, and full-stack
                development. I completed my undergraduate thesis, <strong>NeuroVentura</strong>,
                on Alzheimer&apos;s disease risk and progression prediction using
                multimodal machine learning models.
              </p>

              <p className='mt-3 max-w-2xl text-base leading-8 text-gray-700 dark:text-gray-300'>
                During my Machine Learning Engineering internship at FlyRank AI, I
                developed a search discoverability capstone and improved evaluation
                reliability by adopting client-grouped train/test splits to reduce leakage.
              </p>

              <div className='mt-7 flex flex-wrap gap-3'>
                <a
                  href='#research'
                  className='rounded-lg bg-purple-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-purple-700'
                >
                  Explore research
                </a>
                <a
                  href='#projects'
                  className='rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-900 transition hover:border-purple-400 hover:text-purple-700 dark:border-gray-700 dark:text-white dark:hover:text-purple-300'
                >
                  View projects
                </a>
                <a
                  href='https://github.com/pretom26'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-900 transition hover:border-purple-400 dark:border-gray-700 dark:text-white'
                >
                  GitHub ↗
                </a>
              </div>
            </div>

            {/* Public image: public/pretom-profile.jpg (PROFILE_IMAGE in site.ts). */}
            <div className='relative shrink-0'>
              <Image
                src={PROFILE_IMAGE}
                alt='Portrait of Pretom Areefin Pranto'
                width={800}
                height={800}
                sizes='(max-width: 640px) 112px, 160px'
                priority
                className='h-28 w-28 rounded-full border-4 border-purple-200 object-cover shadow-xl shadow-purple-500/20 transition-transform duration-300 hover:scale-105 sm:h-40 sm:w-40 dark:border-purple-900'
              />
            </div>
          </div>

          <SocialHome className='mt-7 flex-shrink flex-wrap gap-3 self-start' />
        </section>

        {/* Research */}
        <section id='research' className='scroll-mt-24 border-b border-gray-200 py-12 dark:border-gray-800'>
          <SectionHeading
            eyebrow='Academic work'
            title='Research & healthcare AI'
            description='Projects exploring how machine learning can support medical imaging, clinical prediction, and interpretable analysis.'
          />
          <div className='grid gap-5 md:grid-cols-2'>
            {research.map((item, index) => (
              <article
                key={item.title}
                className={`rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-sm backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/50 ${index === 0 ? 'md:col-span-2' : ''}`}
              >
                <p className='text-xs font-semibold tracking-wider text-purple-600 uppercase dark:text-purple-300'>
                  {item.category}
                </p>
                <h3 className='mt-2 text-xl font-bold text-gray-950 dark:text-white'>{item.title}</h3>
                <p className='mt-1 text-sm font-semibold text-gray-700 dark:text-gray-300'>{item.subtitle}</p>
                <p className='mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400'>{item.description}</p>
                {index === 0 && (
                  <p className='mt-3 text-xs leading-6 text-gray-500 dark:text-gray-400'>
                    Supervisor: Md. Saiful Bari Siddiqui · Co-supervisor: Dr. Swakkhar Shatabda
                  </p>
                )}
                <div className='mt-5 flex flex-wrap gap-2'>
                  {item.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id='experience' className='scroll-mt-24 border-b border-gray-200 py-12 dark:border-gray-800'>
          <SectionHeading
            eyebrow='Professional journey'
            title='Experience & education'
            description='Combining academic research, hands-on ML work, and software development.'
          />
          <div className='grid gap-5 md:grid-cols-2'>
            <article className='rounded-2xl border border-gray-200 p-6 dark:border-gray-800'>
              <p className='text-xs font-semibold tracking-wider text-purple-600 uppercase dark:text-purple-300'>
                Jul – Oct 2026
              </p>
              <h3 className='mt-2 text-lg font-bold dark:text-white'>Machine Learning Engineering Intern</h3>
              <p className='font-medium text-gray-700 dark:text-gray-300'>FlyRank AI</p>
              <p className='mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400'>
                Developed a Google Search ranking and discoverability capstone using
                approximately 30,000 Google Search Console/GA4 records. Used
                data wrangling, embeddings, clustering, and opportunity modeling.
                Corrected an optimistic initial evaluation using client-grouped splits;
                out-of-sample Precision@10 was 0.40.
              </p>
            </article>
            <article className='rounded-2xl border border-gray-200 p-6 dark:border-gray-800'>
              <p className='text-xs font-semibold tracking-wider text-purple-600 uppercase dark:text-purple-300'>
                2022 – Jan 2027 (expected)
              </p>
              <h3 className='mt-2 text-lg font-bold dark:text-white'>Bachelor in Computer Science</h3>
              <p className='font-medium text-gray-700 dark:text-gray-300'>BRAC University</p>
              <p className='mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400'>
                Coursework includes machine learning, neural networks, software
                engineering, database management, and computer networks. Undergraduate
                research focuses on multimodal healthcare AI.
              </p>
            </article>
          </div>
        </section>

        {/* Engineering portfolio */}
        <section id='projects' className='scroll-mt-24 border-b border-gray-200 py-12 dark:border-gray-800'>
          <SectionHeading
            eyebrow='Selected builds'
            title='Software & AI projects'
            description='Applications and tools built for real users, practical workflows, and technical exploration.'
          />
          <div className='grid gap-5 md:grid-cols-2'>
            {projects.map((project) => (
              <article key={project.title} className='rounded-2xl border border-gray-200 bg-white/70 p-6 transition hover:border-purple-300 dark:border-gray-800 dark:bg-gray-950/50 dark:hover:border-purple-700'>
                <p className='text-xs font-semibold tracking-wider text-purple-600 uppercase dark:text-purple-300'>{project.category}</p>
                <h3 className='mt-2 text-xl font-bold text-gray-950 dark:text-white'>{project.title}</h3>
                <p className='mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400'>{project.description}</p>
                <div className='mt-5 flex flex-wrap gap-2'>
                  {project.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
                </div>
              </article>
            ))}
          </div>
          <a
            className='mt-6 inline-block text-sm font-semibold text-purple-700 hover:underline dark:text-purple-300'
            href='https://github.com/pretom26?tab=repositories'
            target='_blank'
            rel='noopener noreferrer'
          >
            Explore my GitHub repositories ↗
          </a>
        </section>

        {/* Skills and personal dimension */}
        <section className='border-b border-gray-200 py-12 dark:border-gray-800'>
          <SectionHeading
            eyebrow='Toolbox'
            title='Technical skills'
            description='Tools I use across machine learning research and application development.'
          />
          <div className='grid gap-5 md:grid-cols-3'>
            {skills.map((skill) => (
              <div key={skill.label} className='rounded-2xl border border-gray-200 p-5 dark:border-gray-800'>
                <h3 className='font-bold text-gray-900 dark:text-white'>{skill.label}</h3>
                <p className='mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400'>{skill.items}</p>
              </div>
            ))}
          </div>
        </section>

        <section id='contact' className='scroll-mt-24 py-12'>
          <SectionHeading
            eyebrow='Get in touch'
            title='Let’s build something useful.'
            description='I’m interested in meaningful collaborations around AI, machine learning, research, and software engineering.'
          />
          <div className='flex flex-wrap gap-3'>
            <a
              href={`mailto:${SITE_AUTHOR.email}`}
              className='rounded-lg bg-purple-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-purple-700'
            >
              Email me
            </a>
            <a
              href='https://www.linkedin.com/in/pretom-areefin-pranto-a97651290/'
              target='_blank'
              rel='noopener noreferrer'
              className='rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-900 transition hover:border-purple-400 dark:border-gray-700 dark:text-white'
            >
              LinkedIn ↗
            </a>
          </div>
          <p className='mt-8 text-xs text-gray-500 dark:text-gray-500'>
            Based in Dhaka, Bangladesh · Outside the code: Hip-Hop, Technical Writing and Martial Arts (Kung-Fu).
          </p>
        </section>
      </main>
    </>
  )
}
