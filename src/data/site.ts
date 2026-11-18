/**
 * All editable site content lives here.
 * Anything marked TODO is a placeholder: replace it with the forum's real details.
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

  /** Links */
  facebook: 'https://www.facebook.com/profile.php?id=61595603985680',
  mapUrl: 'https://maps.google.com/?q=Faculty+of+Business+Administration,+University+of+Chittagong',

  /** TODO: add the forum's email address. Leave empty to hide it. */
  email: '',
  /** TODO: add a Google Form (or similar) link for membership. Leave empty to use Facebook instead. */
  joinFormUrl: '',
};

export const nav = [
  { label: 'About', href: '/#about' },
  { label: 'What we do', href: '/#pillars' },
  { label: 'Join', href: '/#join' },
  { label: 'Events', href: '/events/' },
  { label: 'People', href: '/#people' },
];

/** The four pillars shown on the forum's cover banner. */
export const pillars = [
  {
    id: 'research',
    title: 'Research',
    short: 'Research',
    body: 'Members design and run studies on banking, insurance and finance in Bangladesh, with faculty guiding every step.',
    examples: ['Research design workshops', 'Data and methods clinics', 'Faculty-supervised projects'],
  },
  {
    id: 'knowledge',
    title: 'Knowledge sharing',
    short: 'Knowledge',
    body: 'Seminars, reading circles and talks where members present work in progress and learn from each other.',
    examples: ['Paper reading circles', 'Guest talks', 'Higher-study sessions'],
  },
  {
    id: 'collaboration',
    title: 'Collaboration and networking',
    short: 'Collaboration',
    body: 'Students team up with faculty, alumni and researchers from other departments and institutions.',
    examples: ['Mixed student–faculty teams', 'Alumni connections', 'Joint projects'],
  },
  {
    id: 'innovation',
    title: 'Innovation for a better future',
    short: 'Innovation',
    body: 'Ideas that make financial services fairer, safer and easier to reach for more people in Bangladesh.',
    examples: ['Policy briefs', 'Fintech ideas', 'Conference papers'],
  },
];

/**
 * Research areas that scroll in the ticker under the hero.
 * TODO: confirm these with the forum's advisors.
 */
export const researchAreas = [
  'Financial inclusion',
  'Islamic banking',
  'Microinsurance',
  'Digital payments',
  'Credit risk',
  'Climate and green finance',
  'Bank governance',
  'Insurance penetration',
  'Behavioural finance',
  'Mobile financial services',
  'ESG reporting',
  'Capital markets',
];

/** How membership works. This is a real sequence, so it is numbered on the page. */
export const steps = [
  {
    title: 'Join the forum',
    body: 'Send us a message on Facebook or talk to a committee member. Membership is open to students and faculty of the department.',
  },
  {
    title: 'Pick a question',
    body: 'Choose a research area that interests you and join a small team already working on it, or start a new one.',
  },
  {
    title: 'Work with a mentor',
    body: 'A faculty member guides your team through the literature, methods, data and writing.',
  },
  {
    title: 'Share what you find',
    body: 'Present at forum sessions, then shape your work into a paper for a conference or journal.',
  },
];

/**
 * People. Entries with an empty name are not shown.
 * TODO: fill in the advisors and the executive committee.
 */
export type Person = { name: string; role: string; group: 'Advisors' | 'Executive committee' };

export const people: Person[] = [
  { name: '', role: 'Chief Advisor', group: 'Advisors' },
  { name: '', role: 'Advisor', group: 'Advisors' },
  { name: '', role: 'President', group: 'Executive committee' },
  { name: '', role: 'General Secretary', group: 'Executive committee' },
  { name: '', role: 'Research Secretary', group: 'Executive committee' },
];
