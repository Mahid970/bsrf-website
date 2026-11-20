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

/** Which launch photos (by position in the gallery) appear in the home page gallery. The first one is shown large. */
export const homePicks = {
  gallery: [10, 0, 5, 8, 9],
};
