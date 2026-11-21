// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Public URL of the deployed site (used for canonical links and social cards).
  site: 'https://bsrf-website.mmahidujjaman.workers.dev',

  // Inter for everything, downloaded at build time and served from this site.
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Inter',
      cssVariable: '--font-sans',
      weights: ['400 700'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['Helvetica Neue', 'Arial', 'sans-serif'],
    },
  ],

  image: {
    // Photos come in at up to 2048px; cap generated widths so builds stay fast.
    breakpoints: [480, 768, 1080, 1440, 1920],
  },
});
