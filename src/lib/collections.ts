/**
 * Collection query helpers.
 *
 * Every collection in this project is ordered by an explicit `order` field
 * maintained in frontmatter. These wrappers keep that sort in one place so
 * listing pages, the homepage teaser and the footer cannot disagree.
 */

import { getCollection } from 'astro:content';
import type { BrandEntry, ProductEntry, ProjectEntry } from '../content.config';

function byOrder<T extends { data: { order: number } }>(a: T, b: T): number {
  return a.data.order - b.data.order;
}

export async function getSortedProducts(): Promise<ProductEntry[]> {
  return (await getCollection('products')).sort(byOrder);
}

/** Featured subset for the homepage teaser. */
export async function getFeaturedProducts(limit = 3): Promise<ProductEntry[]> {
  return (await getSortedProducts()).slice(0, limit);
}

/** All projects, including `pending` ones — the listing renders those as placeholders. */
export async function getSortedProjects(): Promise<ProjectEntry[]> {
  return (await getCollection('projects')).sort(byOrder);
}

/**
 * Only projects cleared for publication. Pending case studies are unverified
 * (see CLAUDE.md) and must not get their own routes.
 */
export async function getPublishedProjects(): Promise<ProjectEntry[]> {
  return (await getCollection('projects', ({ data }) => data.status === 'published')).sort(byOrder);
}

export async function getSortedBrands(): Promise<BrandEntry[]> {
  return (await getCollection('brands')).sort(byOrder);
}
