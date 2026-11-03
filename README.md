# Job Dhudho

A Pan-India job marketplace connecting job seekers with verified employers.

## Stack
- Next.js App Router + TypeScript
- Tailwind CSS
- Supabase (PostgreSQL, Auth, Storage)
- Vercel deployment

## Local setup
1. Install Node.js 20.9+.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local` and add Supabase credentials.
4. Run `npm run dev`.
5. Open http://localhost:3000.

## Project status
Foundation / MVP Sprint 1. The current homepage is a UI foundation; authentication, live job data, employer workflows and admin controls are not yet connected.

## Planned MVP
- Public job search and job detail pages
- Job seeker accounts and applications
- Employer profiles and job publishing
- Admin moderation and employer verification
- Secure resume storage
- Search-engine-friendly job pages


## PostgreSQL + Prisma setup

1. Create a PostgreSQL database (Supabase PostgreSQL is supported).
2. Copy `.env.example` to `.env.local` and set `DATABASE_URL` and `DIRECT_URL`.
3. Install dependencies with `npm install`.
4. Generate Prisma Client: `npm run db:generate`.
5. Create and apply the first local migration: `npm run db:migrate -- --name init`.
6. Inspect data with `npm run db:studio`.

For production, apply committed migrations with `npm run db:deploy`. Never commit real database URLs, passwords, API keys, or provider secrets.

## WhatsApp notifications

WhatsApp is planned through a server-side provider adapter (initial provider selection: Gupshup, subject to account and template approval). Store explicit opt-in/opt-out state in `whatsapp_consents`; send only to opted-in users and use approved WhatsApp templates where required. Provider credentials must remain server-side. Delivery attempts and provider message IDs are recorded in `notifications`.
