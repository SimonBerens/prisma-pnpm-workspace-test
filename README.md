# Prisma Monorepo Next.js ENOENT Bug

### Steps to Reproduce
* Git clone this repo
* run the following:
```bash
pnpm install
cd packages/prisma
pnpx prisma generate
cd ../../apps/frontend
pnpm run dev
```
* send a GET request to `localhost:3000/api/hello`