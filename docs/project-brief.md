# Al-Bayan Learning Initiative Foundation: website brief

This is the build brief for Claude Code, exported from the project plan on 18 Oct 2026, updated on 25 Oct 2026 with the team's answers and on 16 Nov 2026 with the team's review of the preview (`docs/feedback-round-1.md`). **The real page text is in `docs/content.md`; use it wherever this brief or a page has a placeholder.** The full plan lives in a private Claude doc. This file is the copy the repo uses; keep it updated when decisions change.

## What this is

This is the public website of **Al-Bayan Learning Initiative**, a not-for-profit school in Gohawa, Lahore, Pakistan, founded and run by alumni of LUMS. It teaches Playgroup to Matric (PCTB), funded by donations, Zakat and affordable fees. Never mention the old name. Domain: **albayanlearning.pk**.

**Audience:** the site speaks for Al-Bayan as an organisation. Its main audience is **donors**, then volunteers, partners (non-profits, universities, schools) and job seekers. Parents can visit, but they aren't who the site is for.

The site's goals are to:
- build trust with donors: impact, transparency, what support makes possible;
- raise donations (Zakat, Sadqa, sponsorships);
- recruit volunteers and collaborators;
- recruit staff.

Most visitors are on phones with limited data and scroll fast. Use few words (1–3 short sentences per section, or chips and short lists) and plenty of pictures: every page opens with a visual.

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
  - The repo is **public**: no secrets, keys, personal data or bank account numbers. Photos of children only as allowed under Images below.
  - The owner commits straight to `main` before launch. No pull requests.
  - Make small, clear commits. Don't push unless asked.
- **Google split:**
  - Staff and student systems live in Google Workspace for Education.
  - The website has no logins, staff portal, intranet, LMS or student records, and does not rebuild anything Google provides.
- **Images:**
  - Photos in `src/assets/photos/` are approved by the school. Any new photos of children need the school's approval before they're added.
  - Strip photo metadata, blur children's names visible in a photo, and never name children in alt text or captions.
  - Where no approved photo fits, keep the [Photo: ...] placeholder.
- **Placeholders:**
  - Mark every one in [square brackets], for example [Student count] or [Photo: debate team].
  - Never write realistic fake text, names, numbers or quotes.

## Brand

- **Name:** Al-Bayan Learning Initiative on the site (short name: Al-Bayan). The legal name, Al-Bayan Learning Initiative Foundation, appears only in the © line and the privacy page.
- **Colours, fonts and components:** see `docs/design-system.md`. Approved homepage: `design/home-reference.html`.
- **Logo:** `public/images/albayan-logo.png`. Only a full-colour version exists; there's no white or SVG version yet. Use it on white only.
- **Vision, mission, values, about text:** see `docs/content.md`.

## Contact details (keep in `src/data/site.json`)

| Field | Value |
| --- | --- |
| email | info@albayanlearning.pk |
| careersEmail | careers@albayanlearning.pk |
| educationEmail | education@albayanlearning.pk |
| phones | 0325 1257747, 0331 4422437 and 0333 1440976, all on WhatsApp too (WhatsApp icon + number) |
| educationWhatsapp | 0333 1440976 and 0344 4055253, WhatsApp only |
| address | Rohi Nala Link Road, off Airport Road, opposite Toyota Airport Motors, Main Gohawa, Lahore |
| socials | Instagram (albayanschoolpk), Facebook (albayanschoolpk), LinkedIn (company/70905235), TikTok (@albayanschoolpk); full links in `site.json` |
| map | Campus pin by coordinates in `site.json`; loads on request |
| registrationNo | empty for now; hide the line when empty |

## Phase 1 pages (build now)

Navigation: About · Academics · Co-curricular · Volunteer · Careers · Contact, plus a gold **Donate** pill. The footer's Explore links follow it.

| Route | Template | Sections |
| --- | --- | --- |
| `/` | Homepage | Layout from `design/home-reference.html`: hero (Donate now / Volunteer with us); stat tiles; who we are; programs; co-curricular; testimonial with a parent photo slot; CTA band. No news section. |
| `/about` | Content | Hero photo; vision and mission; team (five main members; placeholders until names and photos arrive); Then / Now story with two co-founder quotes; how we work and our focus; core values; partners as a logo grid (placeholder logos); CTA band. |
| `/academics` | Content | Short text with a photo slot per section: grades offered (from `programs`: Preschool, Primary, Middle, Matric); Learning Beyond the Book and concepts to board exams; capstones; computer education; reading and writing; preschool; teachers and assessment; facilities (no timings); CTA |
| `/co-curricular` | Content | Short hero with a photo, then Competitions, Saturday Scholars, Summer Camp, Special Days and Highlights (from `activities`), each with a photo and a small gallery |
| `/volunteer` | Content + form | "Volunteer with us": three ways to volunteer (Saturday Scholar, education team, subject expert); one sign-up form with follow-up questions per option; "Questions?" email (education@); Collaborate with us (non-profits, universities, schools); CTA |
| `/careers` | Content + jobs | "Work with us", light background: openings from `jobs` with full descriptions and a "no openings right now" empty state; why work at Al-Bayan; CTA |
| `/donate` | Content | "Support Al-Bayan": impact stats; ways to give (Zakat, Sadqa, compliance certificate); sponsorship packages; current appeal; how to donate. All amounts, packages and bank details are placeholders. Shown only on previews until the team approves it (`showDonate`). |
| `/contact` | Contact + form | Email, phones (WhatsApp icon + number), education team and collaborations (email, WhatsApp-only numbers), address, socials, map; contact form (name, email, phone optional, topic incl. Collaborating, message) |
| `/privacy` | Simple article | Privacy policy: data use, photo consent, cookies (none) |
| `/404` | Simple | Friendly message and links home |

**Removed or hidden in feedback round 1:**
- **Admissions** (`/admissions`): removed, with the admission enquiry form. The route redirects to `/`.
- **Get involved** (`/get-involved`): split into `/volunteer`, `/careers` and `/donate`. The route redirects to `/volunteer`.
- **News** (`/news`, `/news/[slug]`, category pages): hidden for launch with `showNews: false` in `site.json`. Not built and not linked; the code and collection stay so it can come back.

There are **no form backends yet**. Build the forms as accessible static markup with no working action, and show a visible note on each: "[Form not connected yet]". Cloudflare Functions, D1 and Turnstile come in a later step. Include a Turnstile placeholder box.

## Content collections (`src/content/`, with schemas)

| Collection | Fields |
| --- | --- |
| team | name, role, group (founder, board, admin, teacher), photo?, bio?, order. Rendered as the team section on /about. |
| programs | name, grades, description, subjects?, icon, order |
| activities | name, intro, items[], partners?[], colour, order. The five sections are in `content.md`. |
| jobs | title, type (full-time, part-time, volunteer), requirements, howToApply, closingDate, open (bool); the full job description is the Markdown body |
| news | title, date, category (events, school-news, student-stories, announcement), summary, cover?, featured?, draft? ; body in Markdown |
| testimonials | quote, role (student, parent, alumni), name (first name or initials), photo? |

Use the real content from `content.md` where it exists (programs, activities). Seed the rest (news, testimonials, team) with 2–4 placeholder entries marked with [brackets]. Site-wide settings (contact, socials, registration number, announcement strip text and on/off, impact stats, launchMode, showNews, showDonate) live in `src/data/site.json`. The announcement strip is off for now; it can come back for a donation campaign.

## Later phases (do not build now, but don't block them)

- **Phase 2:**
  - Online giving (bank transfer, SWIFT, PayFast Pakistan via gopayfast.com), after the Foundation is registered. The `/donate` page exists now with placeholders.
  - Final sponsorship packages and the new-floor appeal's goal and progress, once the team confirms them.
  - A full leadership and team page (the About page already has a team section), sponsor logos.
  - This Year's Goal, with a campaign mode (the announcement strip can carry it).
  - Impact and Reports, Events, Gallery, FAQ.
  - Bring News back when the team can keep it up (`showNews`).
  - Form backends (Cloudflare, D1, Turnstile).
- **Phase 3:** Urdu at `/ur/`, right-to-left, using Noto Nastaliq Urdu. This is why the layout uses CSS logical properties.
