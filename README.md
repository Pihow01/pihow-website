# Pihow Services — Website

Next.js (App Router) + TypeScript + Tailwind CSS rebuild of pihowservices.xyz, implementing
Phase 1 ("Core English rebuild") of the Global Relaunch Blueprint.

## Getting started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## What's real vs. demo content

Real content already carried over from the live site: the founder's name and role, the mission
and vision statements, core values, the Premium Subscription "what's included" list, the
One-Time Development lifecycle, subscription terms and pricing factors, and the contact details
(email, phone, address, social links) in `src/lib/site.ts`.

Everything wrapped in an amber "Demo placeholder" box is invented and must be replaced before
launch — proof-strip stats, the three case studies, and the four testimonials. Search the
codebase for `isDemo` and `DemoPlaceholder` to find every instance.

## Before going live

- Add a `RESEND_API_KEY` (or similar) and wire it into `src/app/api/contact/route.ts` — it
  currently only logs submissions server-side.
- Add a real Cal.com/Calendly link to `siteConfig.booking` in `src/lib/site.ts` and to the
  placeholder note on `/contact`.
- Replace every item in the Demo Placeholder Checklist (Section 12 of the blueprint).
- Register `pihowservices.com`, point `siteConfig.domain`, and 301 the `.xyz` domain to it.
- Have `/legal/privacy` and `/legal/terms` reviewed by a lawyer.
- Add Google Analytics 4 and Google Search Console verification.

## Not yet built (later phases per the blueprint's roadmap)

Multilingual routing (`next-intl`, the 11 non-English locales, RTL for Arabic) is intentionally
out of scope for this pass — it's Phase 2–3 in the roadmap and needs real translations, not
placeholder ones. The codebase (single `siteConfig`/content modules, no hardcoded English strings
scattered through markup) is structured so that layer can be added without a rewrite.
