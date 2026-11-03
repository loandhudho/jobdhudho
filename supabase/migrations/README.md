# Database migrations

Prisma is the single source of truth for the Job Dhudho application database.

- Define tables and relations in `/prisma/schema.prisma`.
- Generate and commit migrations with `npm run db:migrate -- --name <migration_name>`.
- Deploy committed migrations with `npm run db:deploy`.

Do not apply application schema migrations manually in the Supabase SQL Editor or with Supabase CLI. Supabase is used as the managed PostgreSQL host; Prisma Migrate owns the application schema.

Authentication/storage integration may later use Supabase services, but those integrations must not create a second competing set of application tables.
