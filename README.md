# Muhammad Shoaban — Portfolio

Personal portfolio and freelance client inquiry site for **Muhammad Shoaban**, an independent Full-Stack Developer building Laravel + React web apps, SaaS platforms, APIs, and business automation.

Live site: https://muhammadshoaban.vercel.app

## What is included

- Freelance-first portfolio positioning, services, projects, experience, and availability
- Project inquiry form with server-side validation, spam protection, UTM/source capture, and analytics conversion events
- Email notifications through Resend
- Submission storage through Supabase
- Vercel Analytics and Speed Insights, with optional Google Analytics 4
- SEO metadata, Open Graph/Twitter cards, Person schema, sitemap, and robots rules

## Tech stack

- Next.js 16 / React 19
- Tailwind CSS 4 with custom CSS
- Vercel Analytics and Speed Insights
- Resend for inquiry email notifications
- Supabase Postgres for inquiry storage
- Cloudflare Turnstile for optional spam verification

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Useful checks:

```bash
npm run lint
npm run build
```

## Environment variables

Copy the variable names from `.env.example` into Vercel Environment Variables. Never commit real secret values.

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Sends inquiry email notifications |
| `RESEND_FROM_EMAIL` | Verified sender used by Resend |
| `INQUIRY_NOTIFICATION_EMAIL` | Inbox that receives new inquiries |
| `SUPABASE_URL` | Supabase project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Server-only key used to insert inquiries |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Public Turnstile site key |
| `TURNSTILE_SECRET_KEY` | Server-only Turnstile verification secret |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Optional GA4 measurement ID |

In local development, the inquiry API returns a dry-run success when neither Resend nor Supabase is configured. In production, at least one delivery method must be configured.

## Supabase setup

Run `supabase/schema.sql` in the Supabase SQL editor. It creates `public.project_inquiries` with row-level security enabled and no public policies. The Next.js API route inserts rows server-side with the service-role key.

## Deployment

The site is deployed on Vercel from this GitHub repository. Configure the environment variables in Vercel before sending production traffic to the inquiry form, then redeploy so the new values are available to the serverless API route.

## Contact

- Portfolio: https://muhammadshoaban.vercel.app
- LinkedIn: https://www.linkedin.com/in/muhammad-shoaban/
- GitHub: https://github.com/mshoaban
