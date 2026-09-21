DarussalamFest.com - separated project structure

Files:
- index.html
- css/style.css
- js/db.js      (local database layer — IndexedDB)
- js/app.js     (app logic — reads/writes through js/db.js)
- assets/ (for future images/media)

Open index.html in a browser. No server, no account and no internet
connection are needed — everything runs and saves locally.

=====================================================================
LOCAL DATABASE (NO SETUP NEEDED)
=====================================================================
All data (events, schedule, points, results, highlights, settings,
members) is stored in a real local database in the browser using
IndexedDB — the browser's built-in database. js/db.js opens/creates
the database "darussalamfest_db" automatically on first load and
seeds it with sample data.

- Data persists across page reloads and browser restarts.
- Photos, videos and songs uploaded by the admin are stored in the
  local database too (as data URLs).
- Admin login session is stored in the local database as well.
- All open tabs/windows stay in sync automatically (live sync).

Nothing uses localStorage and there is no cloud/backend service.

=====================================================================
USEFUL TO KNOW
=====================================================================
- Data is stored per-browser (per browser profile), which is the
  nature of a local database. Different browsers or devices keep
  their own copy.
- To wipe all data: delete the site data for this page in your
  browser settings, or run this in the browser console:
      indexedDB.deleteDatabase('darussalamfest_db')
  then reload. The app re-seeds sample data on next load.
- Admin login: admin@gmail.com / Admin@123
  (change ADMIN_EMAIL / ADMIN_PASSWORD at the top of js/app.js)
