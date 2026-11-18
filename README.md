# BSRF website

Official website of the **BankSure Scientific Research Forum (BSRF)**, a research platform of faculty members and students of the Department of Banking and Insurance, University of Chittagong.

Built with [Astro](https://astro.build) as a fully static site, with [GSAP](https://gsap.com) and [Lenis](https://lenis.darkroom.engineering) for motion, and hosted for free on [Cloudflare Workers](https://developers.cloudflare.com/workers/static-assets/).

## Editing content

You don't need to touch any component to update the site. Almost everything lives in two places.

### 1. `src/data/site.ts`

Names, links and section text:

| What | Field |
| --- | --- |
| Email address (hidden while empty) | `site.email` |
| Membership form link (the Join button uses Facebook while empty) | `site.joinFormUrl` |
| The four pillars | `pillars` |
| Topics in the scrolling ticker | `researchAreas` |
| Membership steps | `steps` |
| Advisors and committee | `people` |

Search the file for `TODO` to find every placeholder. People with an empty `name` are not shown, so the People section fills in automatically as you add names.

### 2. `src/content/events/`

Each event is one Markdown file. To add an event:

1. Put its photos in `src/assets/photos/` (JPG, up to about 2000px wide is plenty; the site makes smaller copies automatically).
2. Copy `forum-launch.md` to a new file, for example `research-workshop-1.md`. The file name becomes the page address: `/events/research-workshop-1/`.
3. Edit the frontmatter (`title`, `date`, `location`, `summary`, `cover`, `coverAlt`, `gallery`) and write the story below it.

The events page lists events newest first.

Which launch photos appear on the home page is set by `homePicks` in `src/data/photos.ts`.

## Working on the site

Requires Node.js 22 or newer.

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static site in dist/
```

## Deploying

The site deploys to Cloudflare Workers (static assets, free plan). Log in once with `npx wrangler login`, then:

```bash
npm run deploy
```

That builds the site and uploads `dist/`. Settings are in `wrangler.jsonc`.

To deploy automatically on every push to `main`, connect this repository in the Cloudflare dashboard: **Workers & Pages → bsrf-website → Settings → Build → Connect repository**, with build command `npm run build` and deploy command `npx wrangler deploy`.

## Project structure

```
src/
  assets/       logo mark, cover banner and photos (optimized at build time)
  components/   one file per section (Hero, Ticker, About, Pillars, Steps, LaunchReel, People, Footer, Lightbox)
  content/      events as Markdown
  data/         site.ts (content) and photos.ts (home page photo picks)
  layouts/      Base.astro: page shell, SEO tags, fonts
  pages/        home, events list, event pages, 404
  scripts/      motion.ts: smooth scroll and scroll-reveal helpers
  styles/       global.css: colour, type and spacing tokens
```

Motion respects the visitor's "reduce motion" setting: smooth scrolling and animations are switched off and content is shown in its final state.

## Credits

Logo, cover banner and launch photos are from the forum's [official Facebook page](https://www.facebook.com/profile.php?id=61595603985680).
