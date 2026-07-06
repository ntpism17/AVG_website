import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: z.object({
    name: z.string(),
    brand: z.enum(['CEWE', 'SECURE', 'EDMI', 'Service']),
    category: z.string(),
    tagline: z.string(),
    description: z.string(),
    specs: z.array(z.string()),
    order: z.number(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    location: z.string(),
    capacity: z.string(),
    status: z.enum(['published', 'pending']),
    stats: z.array(z.object({ label: z.string(), value: z.string() })).optional(),
    order: z.number(),
  }),
});

const brands = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/brands' }),
  schema: z.object({
    name: z.string(),
    origin: z.string(),
    founded: z.string(),
    highlightLabel: z.string(),
    highlightValue: z.string(),
    description: z.string(),
    order: z.number(),
  }),
});

export const collections = { products, projects, brands };
