import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    author: z.string().default('Metis GRC Team'),
    category: z.enum(['NIS2', 'ISO 27001', 'AI in GRC', 'Product Updates', 'Industry']),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const legal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/legal' }),
  schema: z.object({
    title: z.string(),
    lastUpdated: z.coerce.date(),
  }),
});

export const collections = { blog, legal };
