import { getCollection, type CollectionEntry } from 'astro:content';

export type EventEntry = CollectionEntry<'events'>;

/** Start of today (UTC). The site is static, so "upcoming" is decided when it is built. */
const today = () => {
  const d = new Date();
  return Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
};

export async function getEvents() {
  const all = await getCollection('events');
  const now = today();
  const upcoming = all
    .filter((e) => e.data.date.valueOf() >= now)
    .sort((a, b) => a.data.date.valueOf() - b.data.date.valueOf());
  const past = all
    .filter((e) => e.data.date.valueOf() < now)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return { upcoming, past };
}
