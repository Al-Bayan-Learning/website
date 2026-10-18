# Al-Bayan Learning Initiative Foundation: website brief

This is the build brief for Claude Code, exported from the project plan on 18 Oct 2026. The full plan lives in a private Claude doc. This file is the copy the repo uses; keep it updated when decisions change.

## What this is

This is the public website of **Al-Bayan Learning Initiative Foundation** (formerly Al-Bayan School System), a not-for-profit school in Lahore, Pakistan. Students and alumni of LUMS started it. It teaches pre-school to middle school at a reasonable cost, funded partly by donors and partly by fees. Domain: **albayanlearning.pk**.

The site's goals are to:
- build trust;
- show impact;
- get admission enquiries;
- recruit volunteers and staff;
- share news;
- later, raise donations.

Most visitors are on phones with limited data.

## Stack and rules

- **Stack:**
  - Astro (static output) with Tailwind CSS, hosted on Cloudflare.
  - Content lives in the repo as content collections. D1 + Functions come later, for forms only.
  - Keep the existing Cloudflare deploy setup as it is.
- **Coming-soon gate:**
  - `launchMode` in `src/data/site.json` together with the branch build variable keeps production showing only the coming-soon page until launch.
  - Never break or remove this.
  - Placeholders must never reach albayanlearning.pk.
- **Repo and commits:**
  - The repo is **public**: no secrets, keys, personal data, bank account numbers, or photos of children.
  - The owner commits straight to `main` before launch. No pull requests.
  - Make small, clear commits. Don't push unless asked.
- **Google split:**
  - Staff and student systems live in Google Workspace for Education.
  - The website has no logins, staff portal, intranet, LMS or student records, and does not rebuild anything Google provides.
- **Images:**
  - Children appear only with written guardian consent; until consent exists, use placeholders.
  - Use first names or initials only.
- **Placeholders:**
  - Mark every one in [square brackets], for example [Student count] or [Photo: debate team].
  - Never write realistic fake text, names, numbers or quotes.

## Brand

- **Name:** Al-Bayan Learning Initiative Foundation. Short name: Al-Bayan.
- **Colours, fonts and components:** see `docs/design-system.md`. Approved homepage: `design/home-reference.html`.
- **Logo:** `public/images/albayan-logo.png`. Only a full-colour version exists; there's no white or SVG version yet. Use it on white only.
- **Vision:** To develop well-rounded, confident and responsible individuals who can compete and succeed in the ever-changing environment of the world.
- **Mission:** Al-Bayan aspires to empower the disenfranchised within our community and help them achieve their potential by providing better access to education. Given the current state of the education system in the country, we hope to play our part in uplifting society through subsidised educational facilities.
- **Core values:** Tolerance, Discipline, Equality, Merit, Character Building.
- **About (short):** Al-Bayan Learning Initiative Foundation is a not-for-profit school started by students and alumni of LUMS. We provide good-quality education from pre-school to middle school at a reasonable cost, funded partly by donors and partly by student fees. Alongside the classroom, we focus on dynamic, activity-based learning rather than only traditional methods.

## Contact details (keep in `src/data/site.json`)

| Field | Value |
| --- | --- |
| email | info@albayanlearning.pk |
| careersEmail | careers@albayanlearning.pk |
| phone | 0325 1257747 (international +92 325 1257747); this is the only valid number |
| address | [Campus address, to confirm] |
| socials | [Instagram], [Facebook], [LinkedIn], all placeholders |
| registrationNo | [Registration no.] |

## Phase 1 pages (build now)

| Route | Template | Sections |
| --- | --- | --- |
| `/` | Homepage | Exactly as `design/home-reference.html`. The latest 3 news items come from the collection. |
| `/about` | Content | Story and origin; vision and mission; core values; milestones timeline; leadership and team grid (from `team`); registration line; CTA band |
| `/academics` | Content | Grades offered (from `programs`); curriculum and teaching approach; facilities; daily timings; academic calendar link; CTA |
| `/admissions` | Content + form | Who can apply; documents needed; steps; FAQs; admission enquiry form (guardian name, phone, child's age, area, message); CTA |
| `/co-curricular` | Content | Debate, Arts, Athletics sections (from `activities`): intro, lead, achievements, photos |
| `/get-involved` | Content + form + jobs | Volunteer roles; volunteer form (name, email, phone, role, availability); current job openings (from `jobs`), applying by email to careersEmail; a short "Support the school" block saying online giving is coming soon |
| `/news` and `/news/[slug]` | Listing + detail | Category filter, featured story, card grid, pagination; single story page |
| `/contact` | Contact + form | Email, phone, address, socials, map placeholder; contact form (name, email, phone optional, topic, message) |
| `/privacy` | Simple article | [Privacy policy text]: data use, photo consent, cookies (none) |
| `/404` | Simple | Friendly message and links home |

There are **no form backends yet**. Build the forms as accessible static markup with no working action, and show a visible note on each: "[Form not connected yet]". Cloudflare Functions, D1 and Turnstile come in a later step. Include a Turnstile placeholder box.

## Content collections (`src/content/`, with schemas)

| Collection | Fields |
| --- | --- |
| team | name, role, group (founder, board, admin, teacher), photo?, bio?, order |
| programs | name, grades, description, subjects?, icon, order |
| activities | name (Debate, Arts, Athletics), intro, lead?, schedule?, achievements[] (date, event, result), photos?, colour |
| jobs | title, type (full-time, part-time, volunteer), requirements, howToApply, closingDate, open (bool) |
| news | title, date, category (events, school-news, student-stories, announcement), summary, cover?, featured?, draft? ; body in Markdown |
| testimonials | quote, role (student, parent, alumni), name (first name or initials), photo? |

Seed each collection with 2–4 placeholder entries, all marked with [brackets]. Site-wide settings (contact, socials, registration number, announcement strip text and on/off, impact stats, launchMode) live in `src/data/site.json`.

## Later phases (do not build now, but don't block them)

- **Phase 2:**
  - Donate (bank transfer, SWIFT, PayFast Pakistan via gopayfast.com).
  - This Year's Goal, with a campaign mode.
  - Sponsor a Child, Impact and Reports, Events, Gallery, FAQ, Partners.
  - The header "Get involved" button later becomes "This Year's Goal" or "Donate".
- **Phase 3:** Urdu at `/ur/`, right-to-left, using Noto Nastaliq Urdu. This is why the layout uses CSS logical properties.
