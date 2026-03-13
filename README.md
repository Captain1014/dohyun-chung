# Portfolio — Dohyun Chung

A minimal portfolio site built with Next.js and deployable on Vercel.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy on Vercel

1. Push this repo to GitHub (or GitLab/Bitbucket).
2. Go to [vercel.com](https://vercel.com) and sign in.
3. **Add New** → **Project** → Import your repository.
4. Leave framework preset as **Next.js** and click **Deploy**.

Vercel will build and deploy automatically. Future pushes to the main branch will trigger new deployments.

## Customize

- **Content**: Edit `src/data/updates.ts` and `src/data/social.ts` for home page updates and social links.
- **About**: Edit `src/app/about/page.tsx` for intro, hobbies, Yes/No, countries, EDC, and contact.
- **Other pages**: Add your real content in `src/app/work`, `blog`, `ta2shira`, `reads`, and `impossible-list`.
- **Header image**: Replace the placeholder on the home page with an image (e.g. use `next/image` and your photo).
- **Site name / meta**: Change "Omar El-Etr" and metadata in `src/app/layout.tsx` to your name and description.
