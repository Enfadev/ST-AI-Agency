import type { SiteConfig } from '../types';

export const siteConfig: SiteConfig = {
  name: 'VendorNesia',
  brand: { prefix: 'Vendor', accent: 'Nesia', suffix: '' },
  tagline: 'Discover trusted B2B industrial vendors in Indonesia.',
  description:
    'VendorNesia is a curated B2B directory of Indonesian manufacturers, raw material suppliers, machine builders and logistics partners.',
  lang: 'en',
  locale: 'en_US',

  email: 'vendor@vendornesia.example',
  phone: '+62 21 555 0100',
  phoneHref: '+62215550100',
  location: {
    label: 'Vendor desk',
    lines: ['Jl. Jend. Sudirman Kav. 52-53', 'Jakarta Selatan 12190, Indonesia'],
  },
  responseTime: 'Within one business day',

  footerBlurb:
    'A curated directory of Indonesian industrial vendors, built for procurement teams that need verified suppliers and direct contacts.',
  copyright: `© ${new Date().getFullYear()} VendorNesia. All rights reserved.`,

  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: 'linkedin' },
    { label: 'RSS feed', href: '/rss.xml', icon: 'rss' },
  ],

  seo: {
    titleSeparator: ' — ',
    defaultTitle: 'VendorNesia — Trusted B2B industrial vendors in Indonesia',
    ogImage: '/preview.jpg',
    ogImageAlt: 'VendorNesia directory homepage showing verified Indonesian industrial vendors.',
    twitterHandle: undefined,
    themeColor: '#EC5A11',
  },

  cta: { label: 'Join as a vendor', shortLabel: 'Join directory', href: '/#vendor-form' },

  forms: {
    vendorAction: '[MASUKKAN URL WEBHOOK N8N ANDA DI SINI]',
    newsletterAction: '',
    netlify: false,
  },
};
