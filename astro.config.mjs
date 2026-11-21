import { defineConfig } from 'astro/config';

// Static assets live in ./static (./public is the separate asharm8.github.io repo).
// Astro builds to ./dist; `npm run build` then syncs dist/ into public/ without touching public/.git.
export default defineConfig({
  site: 'https://asharm8.github.io',
  publicDir: './static',
  outDir: './dist',
});
