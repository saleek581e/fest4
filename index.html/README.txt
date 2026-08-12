DarussalamFest.com - separated project structure

Files:
- index.html
- css/style.css
- js/app.js
- assets/ (for future images/media)

Open index.html in a browser. The Supabase CDN script remains external as in the original file.

=====================================================================
SUPABASE DATABASE SETUP (REQUIRED FOR SHARED/LIVE DATA)
=====================================================================
The app saves all data (events, schedule, points, results, highlights,
settings) to a Supabase table called `kv_store`, and uploads photos/videos
to a Storage bucket called `media`.

If saves "don't stick" or other users can't see changes, the database is
blocking the public key. Fix it ONCE by running the SQL below in your
Supabase project:

  Supabase Dashboard -> SQL Editor -> New query -> paste -> Run

--- Part 1: allow the app to read & write the kv_store table ---
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE public.kv_store TO anon, authenticated;

ALTER TABLE public.kv_store ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "kv_anon_all" ON public.kv_store;
CREATE POLICY "kv_anon_all" ON public.kv_store FOR ALL TO anon USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "kv_auth_all" ON public.kv_store;
CREATE POLICY "kv_auth_all" ON public.kv_store FOR ALL TO authenticated USING (true) WITH CHECK (true);

--- Part 2: let live-sync (realtime) push changes to open browsers ---
DO $$ BEGIN
  ALTER PUBLICATION supabase_realtime ADD TABLE public.kv_store;
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

--- Part 3: make the 'media' Storage bucket public & writable (uploads) ---
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

=====================================================================
OFFLINE / LOCAL-ONLY MODE
=====================================================================
Until the SQL above is run, the app automatically falls back to saving
data in the browser's localStorage (a one-time notice is shown). This
keeps the site usable, but each browser keeps its own separate data, so
changes will NOT appear for other users. Once the SQL has been run, the
shared live database works for everyone with no code changes.
=====================================================================

ADMIN LOGIN
- Default: admin@gmail.com / Admin@123
- Change it in js/app.js (constants ADMIN_EMAIL / ADMIN_PASSWORD).
- Real Supabase Auth accounts also work (Authentication -> Users).
