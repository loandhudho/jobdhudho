-- Job Dhudho: initial MVP schema
-- Apply this migration in a Supabase project after reviewing the policies.

create extension if not exists pgcrypto;

create type public.user_role as enum ('job_seeker', 'employer', 'admin');
create type public.job_status as enum ('draft', 'pending', 'published', 'paused', 'closed', 'rejected');
create type public.application_status as enum ('submitted', 'viewed', 'shortlisted', 'interview', 'rejected', 'hired');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  phone text,
  role public.user_role not null default 'job_seeker',
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.companies (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references public.profiles(id) on delete restrict,
  name text not null,
  slug text unique not null,
  description text,
  website text,
  logo_url text,
  industry text,
  company_size text,
  headquarters text,
  verification_status text not null default 'pending' check (verification_status in ('pending','verified','rejected')),
  created_at timestamptz not null default now()
);

create table public.jobs (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies(id) on delete cascade,
  created_by uuid not null references public.profiles(id) on delete restrict,
  title text not null,
  slug text not null,
  description text not null,
  location text,
  work_mode text not null default 'onsite' check (work_mode in ('onsite','hybrid','remote')),
  employment_type text not null default 'full_time',
  experience_min integer check (experience_min is null or experience_min >= 0),
  experience_max integer check (experience_max is null or experience_max >= experience_min),
  salary_min numeric(12,2),
  salary_max numeric(12,2),
  currency text not null default 'INR',
  status public.job_status not null default 'pending',
  published_at timestamptz,
  expires_at timestamptz,
  created_at timestamptz not null default now(),
  unique(company_id, slug)
);

create table public.applications (
  id uuid primary key default gen_random_uuid(),
  job_id uuid not null references public.jobs(id) on delete cascade,
  candidate_id uuid not null references public.profiles(id) on delete cascade,
  resume_path text,
  cover_letter text,
  status public.application_status not null default 'submitted',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(job_id, candidate_id)
);

create table public.saved_jobs (
  candidate_id uuid not null references public.profiles(id) on delete cascade,
  job_id uuid not null references public.jobs(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key(candidate_id, job_id)
);

create index jobs_status_published_idx on public.jobs(status, published_at desc);
create index jobs_location_idx on public.jobs(location);
create index applications_candidate_idx on public.applications(candidate_id, created_at desc);
create index applications_job_idx on public.applications(job_id, created_at desc);

alter table public.profiles enable row level security;
alter table public.companies enable row level security;
alter table public.jobs enable row level security;
alter table public.applications enable row level security;
alter table public.saved_jobs enable row level security;

-- Users can read and update only their own profile.
create policy "profiles_select_own" on public.profiles for select to authenticated using (id = auth.uid());
create policy "profiles_update_own" on public.profiles for update to authenticated using (id = auth.uid()) with check (id = auth.uid());

-- Public can view verified company profiles.
create policy "companies_public_verified" on public.companies for select using (verification_status = 'verified');
create policy "companies_owner_manage" on public.companies for all to authenticated using (owner_id = auth.uid()) with check (owner_id = auth.uid());

-- Published jobs are public. Employer writes are limited to their own company.
create policy "jobs_public_published" on public.jobs for select using (status = 'published');
create policy "jobs_employer_manage" on public.jobs for all to authenticated
using (exists (select 1 from public.companies c where c.id = company_id and c.owner_id = auth.uid()))
with check (exists (select 1 from public.companies c where c.id = company_id and c.owner_id = auth.uid()));

-- Candidates can read their own applications; job owners can read applications to their jobs.
create policy "applications_candidate_read" on public.applications for select to authenticated using (candidate_id = auth.uid());
create policy "applications_candidate_insert" on public.applications for insert to authenticated with check (candidate_id = auth.uid());
create policy "applications_candidate_update" on public.applications for update to authenticated using (candidate_id = auth.uid()) with check (candidate_id = auth.uid());
create policy "applications_employer_read" on public.applications for select to authenticated using (
  exists (select 1 from public.jobs j join public.companies c on c.id = j.company_id where j.id = job_id and c.owner_id = auth.uid())
);

create policy "saved_jobs_owner_manage" on public.saved_jobs for all to authenticated
using (candidate_id = auth.uid()) with check (candidate_id = auth.uid());

-- Production hardening still required before launch:
-- 1. Add a trusted server-side admin authorization mechanism.
-- 2. Restrict application status updates to employer owners via dedicated RPC/server action.
-- 3. Add profile creation trigger and updated_at triggers.
-- 4. Create private resume storage bucket and storage policies.
-- 5. Validate company verification and job moderation server-side.
