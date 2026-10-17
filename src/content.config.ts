import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Content lives in src/content/<collection>/*.md and is loaded with the
// Content Layer glob loader. Add new entries by adding files here — see
// CLAUDE.md for the content collection rules.

const team = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/team' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    bio: z.string(),
    image: z.string().optional(),
    order: z.number().default(0),
  }),
});

const programs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/programs' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    ageGroup: z.string(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

const activities = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/activities' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    date: z.coerce.date().optional(),
  }),
});

const jobs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/jobs' }),
  schema: z.object({
    title: z.string(),
    location: z.string(),
    type: z.enum(['full-time', 'part-time', 'contract', 'volunteer']),
    description: z.string(),
    postedDate: z.coerce.date(),
    open: z.boolean().default(true),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    author: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/testimonials' }),
  schema: z.object({
    name: z.string(),
    relation: z.string(),
    quote: z.string(),
    order: z.number().default(0),
  }),
});

export const collections = { team, programs, activities, jobs, news, testimonials };
