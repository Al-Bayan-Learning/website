# Database migrations

All database schema changes live here as ordered migration files — never apply
schema changes by hand against a live database.

- One migration per change, named with an incrementing prefix, e.g.
  `0001_create_contacts.sql`.
- Migrations are forward-only: once a migration has been applied, never edit it —
  add a new migration instead.

No database is wired up yet; this directory establishes where migrations go.
