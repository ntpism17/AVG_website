/** Navigation structure for the header and footer. */

export interface NavChild {
  href: string;
  th: string;
  en: string;
}

export interface NavItem {
  /** Omit when the item is a dropdown trigger only — see `children`. */
  href?: string;
  th: string;
  en: string;
  /** Renders in the accent colour — used to highlight the flagship product. */
  accent?: boolean;
  /** Sub-items shown in a dropdown (desktop) / nested list (mobile). */
  children?: NavChild[];
}

export const MAIN_NAV: NavItem[] = [
  { href: '/about', th: 'เกี่ยวกับเรา', en: 'About' },
  { href: '/services', th: 'บริการ', en: 'Services' },
  { href: '/products', th: 'ผลิตภัณฑ์', en: 'Products' },
  {
    th: 'โซลูชัน',
    en: 'Solutions',
    accent: true,
    children: [
      { href: '/solutions/amr', th: 'AMR', en: 'AMR' },
      { href: '/solutions/billing', th: 'ระบบคิดเงิน (Billing)', en: 'Billing' },
    ],
  },
  { href: '/insights', th: 'บทความ', en: 'Insights' },
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
  { href: '/insights', label: 'บทความ' },
  { href: '/solutions/amr', label: 'AMR' },
  { href: '/solutions/billing', label: 'ระบบคิดเงิน (Billing)' },
  { href: '/contact', label: 'ติดต่อ' },
];
