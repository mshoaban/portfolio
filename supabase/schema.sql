create extension if not exists pgcrypto;

create table if not exists public.project_inquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  company text,
  country text,
  project_type text not null,
  budget_range text,
  timeline text,
  message text not null,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_term text,
  utm_content text,
  referrer text,
  landing_page text,
  status text not null default 'new'
);

alter table public.project_inquiries enable row level security;

-- No public policies are created. The portfolio API uses the Supabase
-- service-role key on the server only, which bypasses RLS for inserts.
