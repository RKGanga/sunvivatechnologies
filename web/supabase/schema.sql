-- Leads table for inquiry form submissions
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamp with time zone default now(),
  name text not null,
  email text not null,
  phone text,
  course text,
  message text
);

-- RLS policies (optional: enable if you want to restrict access)
-- alter table public.leads enable row level security;
-- create policy "Allow inserts from anon" on public.leads
--   for insert to anon
--   with check (true);
