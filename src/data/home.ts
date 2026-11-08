import type { HeroStat, SectionHeading } from '../types';

/** Copy for the homepage hero. Line breaks in the headline are intentional. */
export const hero = {
  eyebrow: 'Verified Indonesian industrial suppliers',
  /** Each entry is one line of the headline; `tint` lines use the light-peach accent. */
  headline: [
    { text: 'Discover trusted', tint: false },
    { text: 'B2B industrial', tint: false },
    { text: 'vendors in', tint: true },
    { text: 'Indonesia.', tint: true },
  ],
  lead: 'Source verified manufacturers, raw material suppliers and logistics partners across the archipelago — with clear capabilities, locations and direct contacts.',
  search: {
    label: 'Search the vendor directory',
    placeholder: 'Search vendors, products or services',
    allCategories: 'All categories',
    submitLabel: 'Search',
    note: 'Preview only — full vendor search is launching soon.',
  },
  primaryCta: { label: 'Browse vendors', href: '/#vendors' },
  secondaryCta: { label: 'Join as a vendor', href: '/#vendor-form' },
  image: '/images/sector-freight.webp',
  credentials: [
    { icon: 'shield-check', label: 'Manually verified' },
    { icon: 'pin', label: 'Nationwide coverage' },
    { icon: 'clock', label: 'One business day response' },
  ] as const,
};

/** The four figures pinned to the bottom of the hero. Demo numbers — replace with your own. */
export const heroStats: HeroStat[] = [
  { value: '9', label: 'Verified vendor profiles' },
  { value: '6', label: 'Industry categories' },
  { value: '1 day', label: 'Typical response time' },
  { value: '100%', label: 'Manually reviewed applications' },
];

export const clients = {
  label: 'Nationwide coverage',
  names: ['Jabodetabek', 'Jawa Timur', 'Sumatera', 'Kalimantan', 'Sulawesi', 'Bali & Nusa Tenggara'],
};

export const sections: Record<
  | 'categories'
  | 'vendors'
  | 'solutions'
  | 'platform'
  | 'process'
  | 'work'
  | 'sectors'
  | 'testimonial'
  | 'team'
  | 'pricing'
  | 'insights'
  | 'faq'
  | 'contact',
  SectionHeading
> = {
  categories: {
    kicker: 'Browse by industry',
    title: 'Six categories,<br>one trusted directory.',
    lead: 'Every category is curated for industrial buyers, with verified capabilities, plant locations and direct commercial contacts.',
  },
  vendors: {
    kicker: 'Featured vendors',
    title: 'Verified suppliers<br>across Indonesia.',
    lead: 'A focused list of manufacturers, raw material suppliers and logistics partners reviewed by our vendor desk.',
  },
  solutions: {
    kicker: 'What we build',
    title: 'Five agents. One operating standard.',
    lead: 'Each one ships with its own evaluation set, spend cap and escalation rule. You get the agent, the harness around it, and the screen your team runs it from.',
  },
  platform: {
    kicker: 'How it holds up',
    title: 'Built to be handed<br>over, not rented.',
    lead: 'You own the code, the prompts, the test set and the infrastructure definitions from day one. We are the team that runs it until your team wants to.',
  },
  process: {
    kicker: 'How we work',
    title: 'Six weeks from<br>workshop to live.',
    lead: 'The order matters. We will not build before we have watched the work done by hand, and we will not launch before the test set passes.',
  },
  work: {
    kicker: 'Selected work',
    title: 'Twelve months<br>of receipts.',
    lead: 'Every number below is measured against the manual baseline we recorded in week one — not against a vendor benchmark.',
  },
  sectors: {
    kicker: 'Where we work',
    title: 'Sectors with rules worth respecting',
    lead: 'We take work in regulated and operationally heavy industries, because that is exactly where supervision earns its keep.',
  },
  testimonial: { kicker: 'Client voice', title: '' },
  team: {
    kicker: 'The team',
    title: 'Small on purpose',
    lead: 'Nine people. The person who scopes your engagement is the person who writes the test set and answers the pager.',
  },
  pricing: {
    kicker: 'Engagements',
    title: 'Priced by the agent, not by the seat',
    lead: 'A fixed monthly fee covering build, supervision and on-call. Model and infrastructure costs pass through at cost, itemised on every invoice.',
  },
  insights: {
    kicker: 'Insights',
    title: 'Notes from the run log',
    lead: 'What we learned shipping agents into places where a wrong answer costs real money.',
  },
  faq: {
    kicker: 'Questions',
    title: 'Before you<br>get in touch',
    lead: 'If yours is not here, ask it in the form below. We answer in writing before any call.',
  },
  contact: {
    kicker: 'For vendors',
    title: 'Join the directory.<br>Reach serious buyers.',
    lead: 'Tell us about your business. Our vendor desk reviews every application, verifies the company details and publishes approved profiles to procurement teams.',
  },
};

export const platformImage = {
  src: '/images/platform-operations-lead.webp',
  alt: 'An operations lead working at a desktop computer',
  tag: 'Handover in 4 weeks',
};

/** Orange call-to-action band above the footer. */
export const finalCta = {
  kicker: 'For Indonesian industrial suppliers',
  title: 'Put your business in front of serious buyers.',
  lead: 'Create a verified vendor profile and receive qualified enquiries from procurement teams across Indonesia.',
};

export const vendorForm = {
  submitLabel: 'Submit vendor application',
  note: 'Manual review. One reply from our vendor desk within two business days.',
};

export const newsletter = {
  title: 'Sourcing notes, monthly',
  description: 'One email a month with new vendors, category updates and practical sourcing notes for Indonesian industry.',
  submitLabel: 'Subscribe',
};
