import type { ImageMetadata } from 'astro';

/**
 * All editable site content lives here.
 *
 * Entries marked SAMPLE are dummy content that shows how the design looks
 * when filled in. Replace them with the forum's real details.
 */

export const site = {
  name: 'BankSure Scientific Research Forum',
  short: 'BSRF',
  tagline: 'Research. Collaborate. Innovate.',
  description:
    'BankSure Scientific Research Forum (BSRF) is a research platform of faculty members and students of the Department of Banking and Insurance, University of Chittagong.',
  department: 'Department of Banking and Insurance',
  faculty: 'Faculty of Business Administration',
  university: 'University of Chittagong',
  city: 'Chattogram 4331, Bangladesh',
  founded: '2026-11-15',
  foundedLabel: '15 November 2026',
  firstVenue: 'Room 120',

  facebook: 'https://www.facebook.com/profile.php?id=61595603985680',
  mapUrl: 'https://maps.google.com/?q=Faculty+of+Business+Administration,+University+of+Chittagong',

  /** SAMPLE: replace with the forum's real email address. Leave empty to hide it. */
  email: 'bsrf@example.org',
  /** Add a Google Form (or similar) link for membership. Leave empty to send people to Facebook. */
  joinFormUrl: '',
};

export const nav = [
  { label: 'About', href: '/#about' },
  { label: 'Research', href: '/#research' },
  { label: 'Publications', href: '/publications/' },
  { label: 'Events', href: '/events/' },
  { label: 'People', href: '/#people' },
];

/** The four aims shown on the forum's cover banner. */
export const pillars = [
  {
    icon: 'research',
    title: 'Research',
    body: 'Faculty-guided studies on banking, insurance and finance in Bangladesh.',
  },
  {
    icon: 'knowledge',
    title: 'Knowledge sharing',
    body: 'Seminars, reading circles and talks where members present work in progress.',
  },
  {
    icon: 'network',
    title: 'Collaboration and networking',
    body: 'Teams of students, faculty and alumni, and links with other institutions.',
  },
  {
    icon: 'innovation',
    title: 'Innovation for a better future',
    body: 'Ideas that make financial services fairer, safer and easier to reach.',
  },
] as const;

/** SAMPLE: research areas. Confirm these with the forum's advisors. */
export const researchAreas = [
  {
    title: 'Banking and financial stability',
    body: 'Capital adequacy, non-performing loans and the health of the banking sector.',
  },
  {
    title: 'Insurance and risk management',
    body: 'Life and non-life insurance markets, microinsurance and household risk.',
  },
  {
    title: 'Financial inclusion',
    body: 'Access to accounts, credit and mobile financial services for underserved people.',
  },
  {
    title: 'Islamic banking and finance',
    body: 'Shariah-based products, governance and the performance of Islamic banks.',
  },
  {
    title: 'Fintech and digital payments',
    body: 'Mobile banking, digital lending and how new financial technology is regulated.',
  },
  {
    title: 'Sustainable finance',
    body: 'Green banking, climate risk and ESG disclosure in financial institutions.',
  },
];

/** SAMPLE: publications and working papers. */
export type Publication = {
  title: string;
  authors: string;
  type: 'Working paper' | 'Conference paper' | 'Journal article' | 'Policy brief';
  year: number;
  area: string;
  url?: string;
};

export const publications: Publication[] = [
  {
    title: 'Determinants of non-performing loans in Bangladeshi commercial banks',
    authors: 'BSRF banking stability group',
    type: 'Working paper',
    year: 2026,
    area: 'Banking and financial stability',
  },
  {
    title: 'Microinsurance uptake among rural households in Chattogram',
    authors: 'BSRF insurance group',
    type: 'Working paper',
    year: 2026,
    area: 'Insurance and risk management',
  },
  {
    title: 'Mobile financial services and the saving habits of university students',
    authors: 'BSRF financial inclusion group',
    type: 'Conference paper',
    year: 2026,
    area: 'Financial inclusion',
  },
  {
    title: 'Green banking disclosure in listed banks of Bangladesh',
    authors: 'BSRF sustainable finance group',
    type: 'Policy brief',
    year: 2026,
    area: 'Sustainable finance',
  },
  {
    title: 'Profitability of Islamic and conventional banks: a panel study',
    authors: 'BSRF Islamic finance group',
    type: 'Working paper',
    year: 2026,
    area: 'Islamic banking and finance',
  },
];

/** How membership works. This is a real sequence, so it is numbered on the page. */
export const steps = [
  {
    title: 'Apply',
    body: 'Message us on Facebook or fill in the membership form. Open to students and faculty of the department.',
  },
  {
    title: 'Join a research group',
    body: 'Pick an area that interests you and join a small team working on it.',
  },
  {
    title: 'Work with a mentor',
    body: 'A faculty advisor guides your group through methods, data and writing.',
  },
  {
    title: 'Present and publish',
    body: 'Share your work at forum seminars, then develop it into a paper.',
  },
];

/**
 * SAMPLE: people. Replace names and add details.
 * `photo` is optional: put a square photo in src/assets/people/ and import it here.
 */
export type Person = {
  name: string;
  role: string;
  detail: string;
  group: 'Advisors' | 'Executive committee';
  photo?: ImageMetadata;
};

export const people: Person[] = [
  { name: 'Advisor name', role: 'Chief Advisor', detail: 'Professor, Department of Banking and Insurance', group: 'Advisors' },
  { name: 'Advisor name', role: 'Advisor', detail: 'Associate Professor, Department of Banking and Insurance', group: 'Advisors' },
  { name: 'Advisor name', role: 'Advisor', detail: 'Assistant Professor, Department of Banking and Insurance', group: 'Advisors' },
  { name: 'Member name', role: 'President', detail: 'BBA, Session 2021–22', group: 'Executive committee' },
  { name: 'Member name', role: 'Vice President', detail: 'BBA, Session 2021–22', group: 'Executive committee' },
  { name: 'Member name', role: 'General Secretary', detail: 'BBA, Session 2022–23', group: 'Executive committee' },
  { name: 'Member name', role: 'Research Secretary', detail: 'BBA, Session 2022–23', group: 'Executive committee' },
  { name: 'Member name', role: 'Publication Secretary', detail: 'BBA, Session 2022–23', group: 'Executive committee' },
  { name: 'Member name', role: 'Event Secretary', detail: 'BBA, Session 2023–24', group: 'Executive committee' },
];
