# Lindsey Homes — luxury lead-generation build

Next.js App Router site for Lindsey Homes LLC, positioned around high-end custom residential work in North Texas.

## Current direction

The public site is intentionally business-first rather than family/story-first. The design uses Lindsey Homes' black/gold identity with deep navy, crisp white, restrained gold, editorial typography, large residential photography, and direct consultation paths.

Primary routes:

- `/` — luxury lead-generation homepage
- `/custom-homes` — residential capabilities and project scale
- `/inspiration` — design inspiration gallery
- `/floor-plans` — customer-facing floor-plan page ready for the plan collection
- `/about` — company and leadership overview
- `/contact` — qualified project inquiry form
- `/privacy`

## Images

The current build uses free Pexels photography as licensed design inspiration. Source records are in `PHOTO-SOURCES.md`. The public site clearly states that inspiration images may not represent Lindsey Homes projects.

As Lindsey Homes completes and supplies project photography, those images should replace stock photography selectively without changing the layout structure.

## Lead form

The form posts to `/api/contact` and sends the inquiry to Whitney through Resend.

Required environment variables:

```env
NEXT_PUBLIC_SITE_URL=https://www.lindseyhomes.com
RESEND_API_KEY=
LEAD_TO_EMAIL=whitney@lindseyhomesllc.com
RESEND_FROM_EMAIL="Lindsey Homes <website@your-verified-domain.com>"
```

The form currently collects:

- name
- phone
- email
- build location
- project investment range
- property status
- preferred timing
- project details
- contact consent

## Automation expansion

The current route sends the internal lead notification only. A customer auto-response can be added cleanly to the same route once approved. More advanced follow-up, lead storage, inbound-email automation, SMS, or an admin/CRM layer should be scoped separately.

## Run locally

```bash
npm install
npm run dev
```
