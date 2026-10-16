/**
 * JSON-LD builders.
 *
 * Kept out of the templates so company details come from `SITE` rather than
 * being retyped into a schema literal, where drift is invisible to reviewers.
 */

import type { ArticleEntry, ProductEntry } from '../content.config';
import { stripLocale, type Locale } from './i18n/locales';
import { localeHref } from './i18n/url';
import { SITE } from './site';

/** A schema.org PostalAddress built from one of the SITE address entries. */
function postalAddress(address: (typeof SITE.addresses)[keyof typeof SITE.addresses]) {
  return {
    '@type': 'PostalAddress',
    name: address.label.en,
    ...address.en,
  };
}

export function localBusinessSchema(site: URL | undefined) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE.name.th,
    alternateName: SITE.name.en,
    url: site ? site.href : undefined,
    image: site ? new URL('/og-image.png', site).href : undefined,
    telephone: SITE.phone.intl,
    email: SITE.email,
    address: [postalAddress(SITE.addresses.registered), postalAddress(SITE.addresses.sales)],
    areaServed: { '@type': 'Country', name: 'Thailand' },
    knowsLanguage: ['th', 'en', 'zh'],
    sameAs: [SITE.social.facebook],
  };
}

/**
 * Product or Service schema for a product detail page.
 * `meter-calibration` is a service offering rather than a physical product.
 */
export function productSchema(product: ProductEntry, site: URL | undefined, locale: Locale) {
  const isService = product.data.brand === 'Service';
  const slug = stripLocale(product.id);

  return {
    '@context': 'https://schema.org',
    '@type': isService ? 'Service' : 'Product',
    name: product.data.name,
    description: product.data.description,
    category: product.data.category,
    url: new URL(localeHref(locale, `/products/${slug}/`), site).href,
    ...(isService
      ? { provider: { '@type': 'Organization', name: SITE.name.en } }
      : { brand: { '@type': 'Brand', name: product.data.brand } }),
    ...(product.data.image && { image: new URL(product.data.image.src, site).href }),
  };
}

/** Article schema for an /insights detail page. */
export function articleSchema(article: ArticleEntry, site: URL | undefined, locale: Locale) {
  const slug = stripLocale(article.id);

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.data.title,
    description: article.data.metaDescription,
    datePublished: article.data.publishedDate.toISOString(),
    url: new URL(localeHref(locale, `/insights/${slug}/`), site).href,
    author: { '@type': 'Organization', name: SITE.name.en },
    publisher: { '@type': 'Organization', name: SITE.name.en },
  };
}

/** FAQPage schema built from visible Q&A pairs (article frontmatter or page copy). */
export function faqSchema(entries: readonly { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: entries.map((entry) => ({
      '@type': 'Question',
      name: entry.question,
      acceptedAnswer: { '@type': 'Answer', text: entry.answer },
    })),
  };
}

export interface BreadcrumbItem {
  name: string;
  /** Locale-agnostic, root-relative path, e.g. `/products`. Omit on the current page. */
  href?: string;
}

const HOME_LABEL: Record<Locale, string> = { th: 'หน้าแรก', en: 'Home', zh: '首页' };

/** BreadcrumbList for detail pages, including the implicit home root. */
export function breadcrumbSchema(trail: BreadcrumbItem[], site: URL | undefined, locale: Locale) {
  const items: BreadcrumbItem[] = [{ name: HOME_LABEL[locale], href: '/' }, ...trail];

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.href && { item: new URL(localeHref(locale, item.href), site).href }),
    })),
  };
}
