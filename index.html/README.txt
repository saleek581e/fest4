DarussalamFest.com - separated project structure

Files:
- index.html
- css/style.css
- js/db.js      (offline fallback database — IndexedDB)
- js/app.js     (app logic — Supabase first, local fallback second)
- assets/ (for future images/media)

=====================================================================
SUPABASE SETUP (REQUIRED FOR SHARED/LIVE DATA) — NEW PROJECT
=====================================================================
The app saves all data (events, schedule, points, results, highlights,
settings) to a Supabase table called `kv_store`, and uploads
photos/videos to a Storage bucket called `media`.

STEP 1 — Put your project's values into js/app.js
  Supabase Dashboard → Settings → API:
    - "Project URL"       → SUPABASE_URL      (top of js/app.js)
    - "anon public" key   → SUPABASE_ANON_KEY (top of js/app.js)

STEP 2 — Run this SQL ONCE
  Supabase Dashboard → SQL Editor → New query → paste ALL of the
  block below → Run.

---------------------------------------------------------------------
-- A) Create the key/value table the app stores everything in
CREATE TABLE IF NOT EXISTS public.kv_store (
  key        text PRIMARY KEY,
  value      jsonb,
  updated_at timestamptz DEFAULT now()
);

-- B) Allow the app (anon key) to read & write it
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE public.kv_store TO anon, authenticated;

ALTER TABLE public.kv_store ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "kv_anon_all" ON public.kv_store;
CREATE POLICY "kv_anon_all" ON public.kv_store FOR ALL TO anon USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "kv_auth_all" ON public.kv_store;
CREATE POLICY "kv_auth_all" ON public.kv_store FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- C) Let live-sync (realtime) push changes to all open browsers
DO $$ BEGIN
  ALTER PUBLICATION supabase_realtime ADD TABLE public.kv_store;
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

-- D) Make the 'media' Storage bucket public & writable (uploads)
INSERT INTO storage.buckets (id, name, public) VALUES ('media', 'media', true)
ON CONFLICT (id) DO UPDATE SET public = true;

DROP POLICY IF EXISTS "media_public_read" ON storage.objects;
CREATE POLICY "media_public_read" ON storage.objects
  FOR SELECT TO anon, authenticated USING (bucket_id = 'media');

DROP POLICY IF EXISTS "media_upload" ON storage.objects;
CREATE POLICY "media_upload" ON storage.objects
  FOR INSERT TO anon, authenticated WITH CHECK (bucket_id = 'media');

DROP POLICY IF EXISTS "media_update" ON storage.objects;
CREATE POLICY "media_update" ON storage.objects
  FOR UPDATE TO anon, authenticated USING (bucket_id = 'media');

DROP POLICY IF EXISTS "media_delete" ON storage.objects;
CREATE POLICY "media_delete" ON storage.objects
  FOR DELETE TO anon, authenticated USING (bucket_id = 'media');
---------------------------------------------------------------------

STEP 3 — Reload the site. Done!
  Every visitor now reads/writes the same live database, and admin
  changes appear on all devices within about a second.

=====================================================================
ADMIN LOGIN (BUILT-IN — NO SUPABASE AUTH NEEDED)
=====================================================================
- Default: admin@gmail.com / Admin@123
- Change it in js/app.js (constants ADMIN_EMAIL / ADMIN_PASSWORD).

=====================================================================
OFFLINE FALLBACK
=====================================================================
If Supabase is unreachable (wrong URL/key or SQL not run yet), the
app keeps working by saving to the browser's local IndexedDB
database (js/db.js) and shows a one-time notice. Nothing uses
localStorage. Once Supabase is set up, the shared database is used
again automatically.
=====================================================================
