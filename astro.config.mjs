// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Public URL of the deployed site (used for canonical links and social cards).
  site: 'https://bsrf-website.mmahidujjaman.workers.dev',

  // One family for headings and text, downloaded at build time and served from this site.
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Schibsted Grotesk',
      cssVariable: '--font-sans',
      weights: ['400 800'],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
  ],

  image: {
    // Photos come in at up to 2048px; cap generated widths so builds stay fast.
    breakpoints: [480, 768, 1080, 1440, 1920],
  },
});
