import { defineCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      brand: z.enum(['CEWE', 'SECURE', 'EDMI', 'Service']),
      category: z.string(),
      tagline: z.string(),
      description: z.string(),

      // Short marketing tags — drive the pills on cards and detail pages.
      specs: z.array(z.string()),

      // Datasheet-grade specifications, rendered as grouped tables on the
      // detail page only. Optional: products without a supplied datasheet
      // fall back to the pills above.
      specTable: z
        .array(
          z.object({
            group: z.string(),
            rows: z.array(z.object({ label: z.string(), value: z.string() })),
          })
        )
        .optional(),

      // Where specTable values came from, so claims stay traceable.
      specSource: z.string().optional(),

      image: image().optional(),
      imageAlt: z.string().optional(),

      // Which industry segments this product serves — drives the "relevant
      // products" grid on each /industries/[segment] page. A product may
      // serve more than one (e.g. Prometer 100 is used at both solar-farm
      // and utility interconnect points).
      segments: z.array(z.enum(['solar-renewable', 'utility', 'industrial'])).min(1),

      // Whether this is a smart / TOU meter — drives the product grid on the
      // /solutions/smart-meter page. Keep in sync with what that page promises.
      smartMeter: z.boolean().optional(),

      order: z.number(),
    }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),

    // One-line summary, used as the page meta description. Required so a
    // project page can never fall back to shipping its title twice.
    summary: z.string(),

    location: z.string(),
    capacity: z.string(),
    status: z.enum(['published', 'pending']),
    stats: z.array(z.object({ label: z.string(), value: z.string() })).optional(),

    // Same segment tagging as products — see the comment there.
    segments: z.array(z.enum(['solar-renewable', 'utility', 'industrial'])).min(1),

    order: z.number(),
  }),
});

const brands = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/brands' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      origin: z.string(),
      founded: z.string(),
      highlightLabel: z.string(),
      highlightValue: z.string(),
      description: z.string(),
      logo: image().optional(),
      logoAlt: z.string().optional(),
      order: z.number(),
    }),
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    metaDescription: z.string(),

    // Reference only for content QA against the keyword research — never rendered.
    targetKeywords: z.array(z.string()),

    // The industry segment this article targets, or 'general' for
    // audience-neutral regulatory explainers. Matches `lib/segments.ts`'s
    // SegmentId, plus 'general' for content with no single target segment.
    segment: z.enum(['solar-renewable', 'utility', 'industrial', 'general']),

    // Doubles as the visible on-page FAQ block and the FAQPage JSON-LD source,
    // so the answer can never drift between what's shown and what's marked up.
    faq: z.array(z.object({ question: z.string(), answer: z.string() })).min(1),

    // Cross-links into the matching solutions page section, e.g. relatedSolution:
    // 'billing', relatedAnchor: 'ppa-billing' → /solutions/billing#ppa-billing.
    relatedSolution: z.enum(['amr', 'billing']).optional(),
    relatedAnchor: z.string().optional(),

    publishedDate: z.coerce.date(),
    order: z.number(),
    status: z.enum(['published', 'pending']),
  }),
});

export const collections = { products, projects, brands, articles };

// Entry types, so pages and helpers can annotate props instead of relying on
// inference from getStaticPaths.
export type ProductEntry = CollectionEntry<'products'>;
export type ProjectEntry = CollectionEntry<'projects'>;
export type BrandEntry = CollectionEntry<'brands'>;
export type ArticleEntry = CollectionEntry<'articles'>;
