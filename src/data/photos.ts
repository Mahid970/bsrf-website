import type { ImageMetadata } from 'astro';
import { getEntry } from 'astro:content';

export type Photo = { src: ImageMetadata; alt: string; caption?: string };

/**
 * Launch photos come from the launch event's gallery
 * (src/content/events/forum-launch.md), so captions are edited in one place.
 */
export async function getLaunchPhotos(): Promise<Photo[]> {
  const entry = await getEntry('events', 'forum-launch');
  if (!entry) throw new Error('Missing src/content/events/forum-launch.md');
  return entry.data.gallery;
}

/** Which launch photos (by position in the gallery) appear where on the home page. */
export const homePicks = {
  about: 3,
  people: 16,
  reel: [3, 0, 4, 5, 9, 10, 16, 8],
};
