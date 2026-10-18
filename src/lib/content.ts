import { getCollection, type CollectionEntry } from 'astro:content';

export type NewsEntry = CollectionEntry<'news'>;
export type NewsCategory = NewsEntry['data']['category'];
export type Palette = 'purple' | 'cyan' | 'gold' | 'green' | 'navy';

/** News categories in display order, with their tag colour (design system → Tag). */
export const newsCategories: { slug: NewsCategory; label: string; colour: Palette }[] = [
  { slug: 'events', label: 'Events', colour: 'gold' },
  { slug: 'school-news', label: 'School news', colour: 'cyan' },
  { slug: 'student-stories', label: 'Student stories', colour: 'green' },
  { slug: 'announcement', label: 'Announcement', colour: 'purple' },
];

export const categoryInfo = (slug: NewsCategory) => newsCategories.find((c) => c.slug === slug)!;

/** Palette colours cycled through timelines, person cards and step numbers. */
export const paletteCycle: Palette[] = ['purple', 'cyan', 'gold', 'green'];

/** A date field may hold a real date or a [bracketed] placeholder. */
export function formatDate(value: Date | string): string {
  if (typeof value === 'string') return value;
  return value.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

export function dateTime(value: Date | string): string | undefined {
  return typeof value === 'string' ? undefined : value.toISOString().slice(0, 10);
}

const sortKey = (value: Date | string) => (typeof value === 'string' ? 0 : value.getTime());

/** Published news, newest first. Placeholder dates sort last, then by file name. */
export async function getNews(): Promise<NewsEntry[]> {
  const entries = await getCollection('news', ({ data }) => !data.draft);
  return entries.sort(
    (a, b) => sortKey(b.data.date) - sortKey(a.data.date) || a.id.localeCompare(b.id),
  );
}

export const NEWS_PAGE_SIZE = 6;
