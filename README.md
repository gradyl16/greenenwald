# greenenwald.com

Personal site and blog, built with Nuxt 4, Nuxt Content, Nuxt UI and
Tailwind CSS v4. Deployed to Cloudflare Pages.

## Development

```sh
bun install
bun run dev          # http://localhost:3000
```

## Checks

These run in CI on every pull request and before every deploy:

```sh
bun run format:check # prettier (use `bun run format` to fix)
bun run lint         # eslint  (use `bun run lint:fix` to fix)
bun run typecheck    # vue-tsc via nuxi
bun run build
```

## Writing a post

Add a Markdown file under `content/blog/`. Frontmatter:

```yaml
---
title: My Post
description: One-sentence summary shown on the blog index.
date: "2026-01-31"
---
```

The post is served at `/blog/<filename>`, and the blog index lists posts
newest first.

## Layout

- `app/components/content/` overrides how Markdown renders (`Prose*`).
- `app/components/Home/` holds the homepage sections. News items and
  publications are defined inline in `News.vue` and `Publications.vue`.
- `app/assets/css/main.css` holds the fonts and the Dracula colour tokens.
- `public/` holds static files (CV, paper PDFs, fonts, images).
