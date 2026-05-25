import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    ogImage: z.string().optional(),
    category: z.string(),
    readingTime: z.number().optional(),
    modDatetime: z.string(),
    title: z.string(),
    pubDatetime: z.string(),
    publishDate: z.string(),
    tags: z.array(z.string()).default([]),
    description: z.string(),

  },
});

export const collections = { articles };
