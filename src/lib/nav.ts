/** Navigation structure for the header and footer. */

export interface NavItem {
  href: string;
  th: string;
  en: string;
  /** Renders in the accent colour — used to highlight the flagship product. */
  accent?: boolean;
}

export const MAIN_NAV: NavItem[] = [
  { href: '/about', th: 'เกี่ยวกับเรา', en: 'About' },
  { href: '/services', th: 'บริการ', en: 'Services' },
  { href: '/products', th: 'ผลิตภัณฑ์', en: 'Products' },
  {
    href: '/solutions/solar-smart-bill',
    th: 'Solar Smart Bill',
    en: 'Solar Smart Bill',
    accent: true,
  },
  { href: '/projects', th: 'โครงการ', en: 'Projects' },
  { href: '/contact', th: 'ติดต่อ', en: 'Contact' },
];

export interface FooterLink {
  href: string;
  label: string;
}

/**
 * The company column. Products and services columns are generated from the
 * products collection and `lib/services.ts`, so they cannot drift from content.
 */
export const FOOTER_COMPANY_LINKS: FooterLink[] = [
  { href: '/about', label: 'เกี่ยวกับเรา' },
  { href: '/projects', label: 'โครงการของเรา' },
  { href: '/solutions/solar-smart-bill', label: 'Solar Smart Bill' },
  { href: '/contact', label: 'ติดต่อ' },
];
