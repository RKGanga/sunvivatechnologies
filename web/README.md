# Institutional Training Website (Next.js + Supabase)

This is a Next.js (App Router) site for an institutional training platform featuring Cloud, DevOps, Linux, and Scripting courses. Supabase is used to capture inquiries.

## Tech Stack
- Next.js 14 (App Router)
- React 18
- Tailwind CSS
- Supabase (leads capture)

## Project Structure
- `app/` — App Router pages (`/`, `/courses`, `/courses/[slug]`, `/about`, `/contact`, `not-found`)
- `app/api/inquiries/route.ts` — API route to store inquiries into Supabase `leads` table
- `data/courses.ts` — In-memory course catalog (seed version); can be moved to Supabase later
- `lib/supabase/client.ts` — Supabase browser client
- `supabase/schema.sql` — DDL for `leads` table

## Getting Started
1. Install dependencies
```bash
npm install
```

2. Configure environment variables
- Copy `.env.example` to `.env.local` and set the values:
```
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

3. Create the `leads` table in your Supabase project
- Open your Supabase SQL editor and run the statements from `supabase/schema.sql`.
- Optionally enable Row Level Security (see comments in the SQL file) and set policies as needed.

4. Run the development server
```bash
npm run dev
```

5. Open http://localhost:3000

## Next Steps
- Port full UI components from existing Vite project into `web/` components
- Replace `data/courses.ts` with Supabase-backed data (tables: categories, courses, modules, faqs)
- Add search functionality for courses
- Enhance Course Detail with collapsible module sections

## Notes
- Styling variables are defined in `app/globals.css`. You can paste/port more utilities from your existing `src/index.css` if desired.
- If you need images from remote sources, configure `images.remotePatterns` in `next.config.mjs`.
