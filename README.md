# asharm8.github.io

Personal site for Abhi Sharma, built with [Astro](https://astro.build).

## Layout

| Path | What it is |
| --- | --- |
| `src/data/site.ts` | Nearly all page content: hero, projects, experience, skills, education, certifications |
| `src/components/`, `src/styles/` | Layout and styling |
| `static/` | Files copied as-is: images, favicon, `.well-known` |
| `public/` | **Separate git repo** (asharm8/asharm8.github.io). Generated output only; don't edit by hand |
| `hugo-backup/` | The previous Hugo site, kept for reference |

Project screenshots go in `static/images/projects/` (1200×754 JPG works well).
Link to the insurance side of the hero with `https://asharm8.github.io/?for=insurance`.

## Running locally

```sh
npm install
npm run dev       # http://localhost:4321
```

## Publishing

```sh
npm run build                 # builds to dist/, then syncs it into public/ (public/.git is kept)
cd public
git add -A && git commit -m "Update site" && git push
```

`npm run build:only` builds to `dist/` without touching `public/`.

### Optional: deploy automatically

`deploy-astro.yml` builds and pushes to asharm8.github.io on every push to `main`.
Move it to `.github/workflows/deploy-astro.yml`, then:

1. `ssh-keygen -t ed25519 -C "deploy" -f deploy_key -N ""`
2. asharm8/asharm8.github.io → Settings → Deploy keys → add `deploy_key.pub` with **write access**.
3. This repo → Settings → Secrets and variables → Actions → new secret `ACTIONS_DEPLOY_KEY` = contents of `deploy_key`.
4. Delete both key files.

If you use the workflow, you don't need to push `public/` by hand.
