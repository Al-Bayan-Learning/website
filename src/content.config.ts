import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Content lives in src/content/<collection>/*.md and is loaded with the
// Content Layer glob loader. Fields follow the table in docs/project-brief.md.
// Add new entries by adding files here; see CLAUDE.md for the rules.

const loader = (name: string) => glob({ pattern: '**/*.md', base: `./src/content/${name}` });

/** A [bracketed] placeholder, e.g. "[Date]". */
const placeholder = z.string().regex(/^\[.*\]$/, 'Placeholders must be in [square brackets]');

/** A real date, or a [bracketed] placeholder until the date is known. */
const dateOrPlaceholder = z.union([z.coerce.date(), placeholder]);

const photo = z.object({ src: z.string(), alt: z.string() });

const team = defineCollection({
  loader: loader('team'),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    group: z.enum(['founder', 'board', 'admin', 'teacher']),
    photo: photo.optional(),
    bio: z.string().optional(),
    order: z.number(),
  }),
});

const programs = defineCollection({
  loader: loader('programs'),
  schema: z.object({
    name: z.string(),
    grades: z.string(),
    description: z.string(),
    subjects: z.array(z.string()).optional(),
    icon: z.enum(['blocks', 'book', 'flask']),
    order: z.number(),
  }),
});

const activities = defineCollection({
  loader: loader('activities'),
  schema: z.object({
    name: z.enum(['Debate', 'Arts', 'Athletics']),
    intro: z.string(),
    lead: z.string().optional(),
    schedule: z.string().optional(),
    achievements: z.array(
      z.object({ date: dateOrPlaceholder, event: z.string(), result: z.string() }),
    ),
    photos: z.array(photo).optional(),
    colour: z.enum(['cyan', 'gold', 'green']),
  }),
});

const jobs = defineCollection({
  loader: loader('jobs'),
  schema: z.object({
    title: z.string(),
    type: z.enum(['full-time', 'part-time', 'volunteer']),
    requirements: z.array(z.string()),
    howToApply: z.string(),
    closingDate: dateOrPlaceholder,
    open: z.boolean(),
  }),
});

const news = defineCollection({
  loader: loader('news'),
  schema: z.object({
    title: z.string(),
    date: dateOrPlaceholder,
    category: z.enum(['events', 'school-news', 'student-stories', 'announcement']),
    summary: z.string(),
    cover: photo.optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const testimonials = defineCollection({
  loader: loader('testimonials'),
  schema: z.object({
    quote: z.string(),
    role: z.enum(['student', 'parent', 'alumni']),
    name: z.string(),
    photo: photo.optional(),
  }),
});

export const collections = { team, programs, activities, jobs, news, testimonials };
