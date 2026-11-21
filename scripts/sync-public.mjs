// Copies the Astro build (dist/) into public/, the asharm8.github.io repo.
// Everything in public/ is replaced except the entries in KEEP, so the
// nested git repo survives every build.
import { cpSync, existsSync, mkdirSync, readdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';
const PUBLIC = 'public';
const KEEP = new Set(['.git', 'CNAME', 'README.md']);

if (!existsSync(DIST)) {
  console.error('dist/ not found. Run `astro build` first.');
  process.exit(1);
}
mkdirSync(PUBLIC, { recursive: true });

for (const entry of readdirSync(PUBLIC)) {
  if (!KEEP.has(entry)) rmSync(join(PUBLIC, entry), { recursive: true, force: true });
}
for (const entry of readdirSync(DIST)) {
  cpSync(join(DIST, entry), join(PUBLIC, entry), { recursive: true });
}
console.log('Synced dist/ into public/ (kept: ' + [...KEEP].filter((k) => existsSync(join(PUBLIC, k))).join(', ') + ')');
