/**
 * Collection query helpers.
 *
 * Every collection in this project is ordered by an explicit `order` field
 * maintained in frontmatter. These wrappers keep that sort in one place so
 * listing pages, the homepage teaser and the footer cannot disagree.
 *
 * Every collection is also nested into `th/`/`en/`/`zh/` subfolders (see
 * `src/content/*`), so every query here takes a `lang` and filters on the
 * entry id's locale prefix.
 */

import { getCollection } from 'astro:content';
import type { ArticleEntry, BrandEntry, ProductEntry, ProjectEntry } from '../content.config';
import type { Locale } from './i18n/locales';
import type { SegmentId } from './segments';

function byOrder<T extends { data: { order: number } }>(a: T, b: T): number {
  return a.data.order - b.data.order;
}

export async function getSortedProducts(lang: Locale): Promise<ProductEntry[]> {
  return (await getCollection('products', ({ id }) => id.startsWith(`${lang}/`))).sort(byOrder);
}

/** Featured subset for the homepage teaser. */
export async function getFeaturedProducts(lang: Locale, limit = 3): Promise<ProductEntry[]> {
  return (await getSortedProducts(lang)).slice(0, limit);
}

/** Smart / TOU meter products (flagged `smartMeter: true`) — powers the /solutions/smart-meter page. */
export async function getSmartMeterProducts(lang: Locale): Promise<ProductEntry[]> {
  return (await getSortedProducts(lang)).filter((p) => p.data.smartMeter);
}

/** All projects, including `pending` ones — the listing renders those as placeholders. */
export async function getSortedProjects(lang: Locale): Promise<ProjectEntry[]> {
  return (await getCollection('projects', ({ id }) => id.startsWith(`${lang}/`))).sort(byOrder);
}

/**
 * Only projects cleared for publication. Pending customer stories are unverified
 * (see CLAUDE.md) and must not get their own routes.
 */
export async function getPublishedProjects(lang: Locale): Promise<ProjectEntry[]> {
  return (
    await getCollection('projects', ({ id, data }) => id.startsWith(`${lang}/`) && data.status === 'published')
  ).sort(byOrder);
}

export async function getSortedBrands(lang: Locale): Promise<BrandEntry[]> {
  return (await getCollection('brands', ({ id }) => id.startsWith(`${lang}/`))).sort(byOrder);
}

/** All articles, including `pending` ones — the listing renders those as placeholders. */
export async function getSortedArticles(lang: Locale): Promise<ArticleEntry[]> {
  return (await getCollection('articles', ({ id }) => id.startsWith(`${lang}/`))).sort(byOrder);
}

/** Only articles cleared for publication. */
export async function getPublishedArticles(lang: Locale): Promise<ArticleEntry[]> {
  return (
    await getCollection('articles', ({ id, data }) => id.startsWith(`${lang}/`) && data.status === 'published')
  ).sort(byOrder);
}

/** Products tagged for a given industry segment — powers `/industries/[segment]`. */
export async function getProductsBySegment(lang: Locale, id: SegmentId): Promise<ProductEntry[]> {
  return (await getSortedProducts(lang)).filter((p) => p.data.segments.includes(id));
}

/** Published customer stories tagged for a given industry segment. */
export async function getPublishedProjectsBySegment(
  lang: Locale,
  id: SegmentId
): Promise<ProjectEntry[]> {
  return (await getPublishedProjects(lang)).filter((p) => p.data.segments.includes(id));
}

/** Published articles tagged for a given industry segment (excludes 'general'). */
export async function getPublishedArticlesBySegment(
  lang: Locale,
  id: SegmentId
): Promise<ArticleEntry[]> {
  return (await getPublishedArticles(lang)).filter((a) => a.data.segment === id);
}
