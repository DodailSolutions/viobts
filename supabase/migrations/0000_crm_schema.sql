-- CRM TABLES
create table contacts (
  id uuid primary key default gen_random_uuid(),
  first_name text not null,
  last_name text not null,
  email text unique not null,
  phone text,
  company text,
  title text,
  industry text,
  source text, -- 'website', 'referral', 'linkedin', 'calendly'
  tags text[],
  notes text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table deals (
  id uuid primary key default gen_random_uuid(),
  contact_id uuid references contacts(id),
  title text not null,
  value numeric(12,2),
  stage text not null default 'lead',
  -- stages: lead → qualified → proposal → negotiation → won → lost
  service_interest text[], -- from services enum
  industry text,
  expected_close date,
  assigned_to uuid references auth.users(id),
  notes text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table activities (
  id uuid primary key default gen_random_uuid(),
  contact_id uuid references contacts(id),
  deal_id uuid references deals(id),
  type text not null, -- 'call', 'email', 'meeting', 'note', 'calendly'
  subject text,
  body text,
  occurred_at timestamptz default now(),
  created_by uuid references auth.users(id)
);

create table newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  name text,
  subscribed_at timestamptz default now(),
  active boolean default true
);

create table contact_form_submissions (
  id uuid primary key default gen_random_uuid(),
  name text,
  email text,
  phone text,
  company text,
  service text,
  message text,
  crm_contact_id uuid references contacts(id),
  submitted_at timestamptz default now()
);

-- RLS Policies
alter table contacts enable row level security;
alter table deals enable row level security;
alter table activities enable row level security;

-- Only authenticated staff can read/write CRM tables
create policy "staff_only" on contacts for all using (auth.role() = 'authenticated');
create policy "staff_only" on deals for all using (auth.role() = 'authenticated');
create policy "staff_only" on activities for all using (auth.role() = 'authenticated');
