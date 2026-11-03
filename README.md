# Job Dhudho

A Pan-India job marketplace connecting job seekers with verified employers.

## Stack
- Next.js App Router + TypeScript
- Tailwind CSS
- PostgreSQL hosted on Supabase
- Prisma ORM (schema and migrations are the source of truth)
- Supabase Auth / Storage (planned integrations)
- Vercel deployment
- WhatsApp Business messaging (provider integration planned)

## Local setup
1. Install Node.js 20.9+.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local`.
4. Set `DATABASE_URL` to the Supabase Transaction Pooler URL and `DIRECT_URL` to the Supabase Direct connection URL.
5. Run `npm run db:validate` and `npm run db:generate`.
6. Create the first migration with `npm run db:migrate -- --name init`.
7. Start the app with `npm run dev`.
8. Open http://localhost:3000.

Use `npm run db:studio` to inspect the local database schema. In production, apply committed migrations with `npm run db:deploy`.

## Database conventions
- `prisma/schema.prisma` is the canonical schema.
- Prisma Migrate owns all application-table migrations. Do not apply legacy SQL migrations through the Supabase SQL editor or Supabase CLI.
- Use the pooled URL for normal application traffic and the direct URL for Prisma migrations.
- Never commit `.env.local`, real database URLs, passwords, API keys, or provider secrets.

## WhatsApp notifications
WhatsApp will be integrated through a server-side provider adapter. Gupshup is the initial candidate, subject to account setup and template approval. Send messages only to users with recorded opt-in consent, respect opt-outs, and record provider delivery events in the notifications table.

## Project status
The project is in the foundation stage. The homepage is a UI foundation; authentication, live job data, employer workflows, admin controls, database migrations and WhatsApp delivery are not yet connected or production-tested.
