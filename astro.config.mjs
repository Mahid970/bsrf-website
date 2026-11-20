// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Public URL of the deployed site (used for canonical links and social cards).
  site: 'https://bsrf-website.mmahidujjaman.workers.dev',

  // Fonts are downloaded at build time and served from this site (no Google requests at runtime).
  fonts: [
    {
      // Headings: an academic, journal-like serif.
      provider: fontProviders.fontsource(),
      name: 'Source Serif 4',
      cssVariable: '--font-serif',
      weights: ['400 700'],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
      fallbacks: ['Georgia', 'serif'],
    },
    {
      // Body text and interface: precise, finance/data-flavoured sans.
      provider: fontProviders.fontsource(),
      name: 'IBM Plex Sans',
      cssVariable: '--font-sans',
      weights: ['400', '500', '600'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
  ],

  image: {
    // Photos come in at up to 2048px; cap generated widths so builds stay fast.
    breakpoints: [480, 768, 1080, 1440, 1920],
  },
});
