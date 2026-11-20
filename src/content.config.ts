import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Events and news. Add a Markdown file to src/content/events/ to publish one.
 * Photos are listed in the frontmatter with paths relative to the Markdown file.
 */
const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** Seminar, Workshop, Reading circle, Launch... */
      kind: z.string().default('Event'),
      date: z.coerce.date(),
      /** Free text such as "2:30 PM – 4:30 PM". */
      time: z.string().optional(),
      location: z.string(),
      summary: z.string(),
      cover: image().optional(),
      coverAlt: z.string().default(''),
      gallery: z
        .array(
          z.object({
            src: image(),
            alt: z.string(),
            caption: z.string().optional(),
          }),
        )
        .default([]),
    }),
});

export const collections = { events };
