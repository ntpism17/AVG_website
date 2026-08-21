/**
 * Single source of truth for company data.
 *
 * Every value here is authoritative per CLAUDE.md. Do not reformat, retranslate,
 * or "tidy" these strings — the phone number, addresses and registration number
 * are legal/contact details that must render exactly as written.
 *
 * The phone number is stored in three shapes on purpose: `display` for visible
 * text, `href` for `tel:` links, and `intl` for schema.org. One definition,
 * three legitimate consumers.
 */

export const SITE = {
  name: {
    th: 'บริษัท แอดวานซ์ กริด จำกัด',
    en: 'Advanced Grid Co., Ltd.',
  },

  /** Corporate registration number (เลขทะเบียนนิติบุคคล). */
  registration: '0125563021024',

  phone: {
    display: '099-226-8000',
    href: 'tel:+66992268000',
    intl: '+66-99-226-8000',
  },

  email: 'advancedgrid@gmail.com',

  social: {
    facebook: 'https://www.facebook.com/profile.php?id=100078060450011',
  },

  /** Short link from the legacy site; the embedded map is built from `addresses.sales.en`. */
  maps: 'https://goo.gl/maps/p8PFbQjK14TDUXtX8',

  addresses: {
    registered: {
      label: { th: 'ที่อยู่จดทะเบียน', en: 'Registered office', zh: '注册地址' },
      th: '99/6116 หมู่ 2 ต.ท่าอิฐ อ.ปากเกร็ด จ.นนทบุรี 11120',
      en: {
        streetAddress: '99/6116 Moo 2, Tha It',
        addressLocality: 'Pak Kret',
        addressRegion: 'Nonthaburi',
        postalCode: '11120',
        addressCountry: 'TH',
      },
    },
    sales: {
      label: { th: 'สำนักงานขาย (MRV Building)', en: 'Sales office', zh: '销售办公室' },
      th: 'อาคาร MRV, 38/5 หมู่ 4 ต.บางพลับ อ.ปากเกร็ด จ.นนทบุรี 11120',
      en: {
        streetAddress: 'MRV Building, 38/5 Moo 4, Bang Phlap',
        addressLocality: 'Pak Kret',
        addressRegion: 'Nonthaburi',
        postalCode: '11120',
        addressCountry: 'TH',
      },
    },
  },
} as const;

/** Appended to page titles by BaseLayout so the suffix is defined once. */
export const TITLE_SUFFIX = ` | ${SITE.name.en}`;

/** Flattens a PostalAddress into the single-line form Google Maps expects. */
export function formatAddressEn(address: {
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
}): string {
  return [
    address.streetAddress,
    address.addressLocality,
    address.addressRegion,
    address.postalCode,
  ].join(', ');
}

/**
 * Company legal name for visible copy, by locale. There is no Chinese legal
 * name on file — per CLAUDE.md, never invent company data — so `zh` pages
 * reuse the English legal name, same as `en`.
 */
export function legalName(locale: 'th' | 'en' | 'zh'): string {
  return locale === 'th' ? SITE.name.th : SITE.name.en;
}

/**
 * Visible address text by locale. `th` uses the authoritative Thai string;
 * `en`/`zh` render the existing structured English address (already part of
 * `SITE`, not a new translation) via `formatAddressEn`.
 */
export function addressText(
  locale: 'th' | 'en' | 'zh',
  address: (typeof SITE.addresses)[keyof typeof SITE.addresses]
): string {
  return locale === 'th' ? address.th : formatAddressEn(address.en);
}
