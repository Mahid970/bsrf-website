# BSRF website

Official website of the **BankSure Scientific Research Forum (BSRF)**, a research platform of faculty members and students of the Department of Banking and Insurance, University of Chittagong.

Built with [Astro](https://astro.build) as a fully static site, with [GSAP](https://gsap.com) and [Lenis](https://lenis.darkroom.engineering) for smooth scrolling and light motion, and hosted for free on [Cloudflare Workers](https://developers.cloudflare.com/workers/static-assets/). Type is Source Serif 4 (headings) and IBM Plex Sans (text), self-hosted at build time.

## Editing content

You don't need to touch any component to update the site. Almost everything lives in two places.

Entries marked `SAMPLE` are dummy content that shows how the design looks when filled in. Search for `SAMPLE` to find them all and replace them with real details.

### 1. `src/data/site.ts`

| What | Field |
| --- | --- |
| Email address (hidden while empty) | `site.email` |
| Membership form link (the apply button uses Facebook while empty) | `site.joinFormUrl` |
| The four aims shown under About | `pillars` |
| Research areas | `researchAreas` |
| Publications (home page and Publications page) | `publications` |
| Membership steps | `steps` |
| Advisors and executive committee | `people` |

To show a photo for a person, put a square image in `src/assets/people/`, import it at the top of `site.ts`, and set it as that person's `photo`.

### 2. `src/content/events/`

Each event is one Markdown file, and the file name becomes its address (`/events/<file-name>/`). To add one, copy an existing file and edit the frontmatter:

- `title`, `kind` (Seminar, Workshop, Reading circle...), `date`, `time`, `location`, `summary`
- `cover` and `gallery` are optional. Put photos in `src/assets/photos/` and refer to them with paths like `../../assets/photos/my-photo.jpg`.

Events dated today or later appear as upcoming, older ones as past. Because the site is static, that split is decided when the site is built, so redeploy after an event has taken place.

Which launch photos appear in the home page gallery is set by `homePicks` in `src/data/photos.ts`.

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
  components/   Header, Hero, About, ResearchAreas, Latest, Gallery, People, Join, Footer,
                PageHeader, Lightbox, Icon
  content/      events as Markdown
  data/         site.ts (content) and photos.ts (home gallery picks)
  layouts/      Base.astro: page shell, SEO tags, fonts
  pages/        home, events list, event pages, publications, 404
  scripts/      motion.ts: smooth scroll and scroll reveals
  styles/       global.css: colour, type, spacing and button styles
  utils/        date formatting and upcoming/past event helpers
```

Motion respects the visitor's "reduce motion" setting: smooth scrolling and animations are switched off and content is shown in its final state.

## Credits

Logo, cover banner and launch photos are from the forum's [official Facebook page](https://www.facebook.com/profile.php?id=61595603985680).
