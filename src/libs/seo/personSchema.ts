
/**
 * Canonical Person schema
 * Pretom Areefin Pranto
 *
 * Personal details are based on the resume and GitHub profile.
 * The undergraduate thesis is completed; the degree is in progress.
 */

import {
  PERSON_ID,
  PROFILE_IMAGE,
  PROFILE_IMAGE_HEIGHT,
  PROFILE_IMAGE_WIDTH,
  SITE_AUTHOR,
  SITE_URL
} from '@/libs/constants/site'

export { PERSON_ID }

// Use this lightweight reference from other pages.
// The complete Person object should be emitted on the homepage.
export const PERSON_REFERENCE = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: SITE_AUTHOR.name,
  url: SITE_URL
} as const

// Search engines should receive an absolute image URL.
const PROFILE_IMAGE_URL = new URL(
  PROFILE_IMAGE,
  SITE_URL
).toString()

export const getPersonNode = () => ({
  '@type': 'Person',
  '@id': PERSON_ID,

  name: SITE_AUTHOR.name,
  alternateName: SITE_AUTHOR.githubUsername,
  url: SITE_URL,

  image: {
    '@type': 'ImageObject',
    url: PROFILE_IMAGE_URL,
    contentUrl: PROFILE_IMAGE_URL,
    width: PROFILE_IMAGE_WIDTH,
    height: PROFILE_IMAGE_HEIGHT,
    caption: SITE_AUTHOR.name
  },

  email: SITE_AUTHOR.email,

  description:
    'Computer Science undergraduate at BRAC University, with experience in machine learning engineering, healthcare AI, multimodal machine learning, and full-stack software development. Completed the NeuroVentura undergraduate thesis on Alzheimer’s disease risk and progression prediction. Previously a Machine Learning Engineering Intern at FlyRank AI.',

  // Public profiles listed in the resume.
  sameAs: [
    'https://github.com/pretom26',
    'https://www.linkedin.com/in/pretom-areefin-pranto-a97651290/'
  ],

  // Current academic affiliation.
  // Not listed as alumni because the degree is not yet complete.
  affiliation: {
    '@type': 'CollegeOrUniversity',
    name: 'BRAC University',
    url: 'https://www.bracu.ac.bd/'
  },

  homeLocation: {
    '@type': 'Place',
    name: 'Dhaka, Bangladesh'
  },

  knowsAbout: [
    'Artificial Intelligence',
    'Machine Learning',
    'Deep Learning',
    'Multimodal Machine Learning',
    'Healthcare AI',
    'Medical Image Classification',
    'Computer Vision',
    'Neural Networks',
    'Convolutional Neural Networks',
    'Transfer Learning',
    'ResNet',
    'DenseNet',
    'PyTorch',
    'MONAI',
    'scikit-learn',
    'XGBoost',
    'Pandas',
    'NumPy',
    'Python',
    'JavaScript',
    'PHP',
    'SQL',
    'MongoDB',
    'Express.js',
    'React',
    'Node.js',
    'REST APIs',
    'Full-Stack Web Development',
    'Software Engineering',
    'Data Annotation',
    'Git',
    'GitHub'
  ]
})
