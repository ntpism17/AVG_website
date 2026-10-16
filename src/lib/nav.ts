/** Navigation structure for the header and footer, resolved per locale. */

import type { Locale } from './i18n/locales';
import { UI } from './i18n/ui';
import { SEGMENTS } from './segments';

export interface NavChild {
  /** Locale-agnostic, root-relative path — callers apply `localeHref`. */
  href: string;
  label: string;
}

export interface NavItem {
  /** Omit when the item is a dropdown trigger only — see `children`. */
  href?: string;
  label: string;
  /** Renders in the accent colour — used to highlight the flagship section. */
  accent?: boolean;
  /** Sub-items shown in a dropdown (desktop) / nested list (mobile). */
  children?: NavChild[];
}

/**
 * Top-level slots, kept intentionally short for a B2B header:
 * Industries and Products are dropdowns; Customer Stories, Insights (Blog) and
 * About are single links so key sections stay visible without hovering.
 * Services is NOT a top-level item anymore — it lives inside the Products
 * dropdown (alongside AMR/Billing) because the /products page already carries
 * the service offering, and the footer keeps its dedicated Services column.
 * Contact is deliberately NOT here — the persistent "Request Quote" button in
 * the header already covers it; it still appears in the footer via
 * `getFooterCompanyLinks`.
 */
export function getMainNav(locale: Locale): NavItem[] {
  const t = UI[locale].nav;

  return [
    {
      label: t.industries,
      accent: true,
      children: [
        { href: '/industries', label: t.allIndustries },
        ...SEGMENTS.map((s) => ({ href: `/industries/${s.id}`, label: s[locale] })),
      ],
    },
    {
      label: t.products,
      children: [
        { href: '/products', label: t.allProducts },
        { href: '/solutions/smart-meter', label: t.smartMeter },
        { href: '/services', label: t.services },
        { href: '/solutions/amr', label: t.amr },
        { href: '/solutions/billing', label: t.billing },
      ],
    },
    // Customer Stories nav entry hidden on request — page and content stay in place,
    // just not linked from nav/footer for now. Re-add this line to bring it back.
    // { href: '/projects', label: t.customerStories },
    { href: '/insights', label: t.insights },
    { href: '/about', label: t.about },
  ];
}

/**
 * The footer's company column. Derived from `getMainNav` so it cannot drift
 * from the header — Products and Services are excluded since they already
 * get dedicated footer columns generated live from the products collection
 * and `lib/services.ts`. Contact is appended explicitly since it's
 * deliberately absent from the header nav (see `getMainNav`) but should
 * still be reachable from the footer.
 */
export function getFooterCompanyLinks(locale: Locale): NavChild[] {
  const fromNav = getMainNav(locale)
    .flatMap((item) =>
      item.children ? item.children : item.href ? [{ href: item.href, label: item.label }] : []
    )
    .filter((link) => link.href !== '/products' && link.href !== '/services');

  return [...fromNav, { href: '/contact', label: UI[locale].nav.contact }];
}
