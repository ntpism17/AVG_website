/**
 * Locale-aware URL building.
 *
 * Kept in one place because every internal link in the site (nav, footer,
 * cards, breadcrumbs, JSON-LD) needs to stay within the current locale, and
 * the language switcher / hreflang tags need the inverse operation (given a
 * URL, find its locale-agnostic path). Content-collection entries reuse the
 * same filename across `th/`/`en/`/`zh/` (see `src/content/*`), so both
 * operations are pure string manipulation — no sibling-entry lookup needed.
 */

import { getRelativeLocaleUrl } from 'astro:i18n';
import { LOCALES, type Locale } from './locales';

const NON_DEFAULT = LOCALES.filter((l) => l !== 'th');
const LOCALE_PREFIX_RE = new RegExp(`^/(?:${NON_DEFAULT.join('|')})(?=/|$)`);

/** `/en/products/foo` -> `/products/foo`. `/products/foo` (th, unprefixed) is unchanged. */
export function stripLocaleFromPath(pathname: string): string {
  const stripped = pathname.replace(LOCALE_PREFIX_RE, '');
  return stripped === '' ? '/' : stripped;
}

/** Href for a locale-agnostic `path` (e.g. `/products/foo`) in `locale`. */
export function localeHref(locale: Locale, path: string): string {
  // Astro's getRelativeLocaleUrl appends a trailing slash to the whole input,
  // which would corrupt hash fragments (`services#consulting` -> `services#consulting/`).
  // Split off the hash/query and re-append it after locale resolution.
  const fragmentIndex = path.search(/[?#]/);
  const suffix = fragmentIndex >= 0 ? path.slice(fragmentIndex) : '';
  const cleanPath = fragmentIndex >= 0 ? path.slice(0, fragmentIndex) : path;
  return getRelativeLocaleUrl(locale, cleanPath.replace(/^\//, '')) + suffix;
}

/** One href per locale for the same page — powers the language switcher and hreflang tags. */
export function alternateHrefs(path: string): Record<Locale, string> {
  return Object.fromEntries(LOCALES.map((l) => [l, localeHref(l, path)])) as Record<
    Locale,
    string
  >;
}
