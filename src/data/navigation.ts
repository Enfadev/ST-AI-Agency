import type { Link, NavigationItem } from '../types';

export const mainNav: NavigationItem[] = [
  { label: 'Vendors', href: '/#vendors' },
  { label: 'Categories', href: '/#categories' },
  { label: 'For vendors', href: '/#vendor-form' },
  { label: 'Insights', href: '/blog', matchPath: '/blog' },
];

export const mobileNav: NavigationItem[] = [...mainNav, { label: 'Contact', href: '/#vendor-form' }];

export interface FooterColumn {
  title: string;
  links: Link[];
}

export const footerColumns: FooterColumn[] = [
  {
    title: 'Directory',
    links: [
      { label: 'All vendors', href: '/#vendors' },
      { label: 'Manufacturing', href: '/#categories' },
      { label: 'Raw materials', href: '/#categories' },
      { label: 'Machinery', href: '/#categories' },
      { label: 'Logistics', href: '/#categories' },
    ],
  },
  {
    title: 'For vendors',
    links: [
      { label: 'Join as a vendor', href: '/#vendor-form' },
      { label: 'Verification process', href: '/#vendor-form' },
      { label: 'Request vendor intro', href: '/#vendor-form' },
      { label: 'Vendor desk', href: '/#vendor-form' },
    ],
  },
  {
    title: 'Platform',
    links: [
      { label: 'How it works', href: '/#categories' },
      { label: 'Featured vendors', href: '/#vendors' },
      { label: 'Insights', href: '/blog' },
      { label: 'Contact', href: '/#vendor-form' },
    ],
  },
];

export const legalLinks: Link[] = [
  { label: 'RSS', href: '/rss.xml' },
  { label: 'Sitemap', href: '/sitemap-index.xml' },
];
