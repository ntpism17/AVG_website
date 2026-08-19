/**
 * JSON-LD builders.
 *
 * Kept out of the templates so company details come from `SITE` rather than
 * being retyped into a schema literal, where drift is invisible to reviewers.
 */

import type { ProductEntry } from '../content.config';
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
    telephone: SITE.phone.intl,
    email: SITE.email,
    address: [postalAddress(SITE.addresses.registered), postalAddress(SITE.addresses.sales)],
    sameAs: [SITE.social.facebook],
  };
}

/**
 * Product or Service schema for a product detail page.
 * `meter-calibration` is a service offering rather than a physical product.
 */
export function productSchema(product: ProductEntry, site: URL | undefined) {
  const isService = product.data.brand === 'Service';

  return {
    '@context': 'https://schema.org',
    '@type': isService ? 'Service' : 'Product',
    name: product.data.name,
    description: product.data.description,
    category: product.data.category,
    url: new URL(`/products/${product.id}/`, site).href,
    ...(isService
      ? { provider: { '@type': 'Organization', name: SITE.name.en } }
      : { brand: { '@type': 'Brand', name: product.data.brand } }),
    ...(product.data.image && { image: new URL(product.data.image.src, site).href }),
  };
}

export interface BreadcrumbItem {
  name: string;
  /** Root-relative path, e.g. `/products`. Omit on the current page. */
  href?: string;
}

/** BreadcrumbList for detail pages, including the implicit home root. */
export function breadcrumbSchema(trail: BreadcrumbItem[], site: URL | undefined) {
  const items: BreadcrumbItem[] = [{ name: 'หน้าแรก', href: '/' }, ...trail];

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.href && { item: new URL(item.href, site).href }),
    })),
  };
}
