// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Public URL of the deployed site (used for canonical links and social cards).
  site: 'https://bsrf-website.mmahidujjaman.workers.dev',

  // Fonts are downloaded at build time and served from this site (no Google requests at runtime).
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Bricolage Grotesque',
      cssVariable: '--font-display',
      weights: ['200 800'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Source Serif 4',
      cssVariable: '--font-serif',
      weights: ['300 700'],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
      fallbacks: ['Georgia', 'serif'],
    },
  ],

  image: {
    // Photos come in at up to 2048px; cap generated widths so builds stay fast.
    breakpoints: [480, 768, 1080, 1440, 1920],
  },
});
