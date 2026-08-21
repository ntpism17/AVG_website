/** Supported locales, in the order they should render in the language switcher. */
export const LOCALES = ['th', 'en', 'zh'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'th';

/**
 * Strip a collection entry's locale prefix, e.g. `en/prometer-100` -> `prometer-100`.
 * Every content collection is nested into `th/`/`en/`/`zh/` subfolders (see
 * `src/content/*`), so entry ids always carry this prefix.
 */
export function stripLocale(id: string): string {
  return id.replace(/^(?:th|en|zh)\//, '');
}
