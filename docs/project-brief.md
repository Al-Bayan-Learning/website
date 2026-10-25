# Al-Bayan Learning Initiative Foundation: website brief

This is the build brief for Claude Code, exported from the project plan on 18 Oct 2026 and updated on 25 Oct 2026 with the team's answers. **The real page text is in `docs/content.md`; use it wherever this brief or a page has a placeholder.** The full plan lives in a private Claude doc. This file is the copy the repo uses; keep it updated when decisions change.

## What this is

This is the public website of **Al-Bayan Learning Initiative**, a not-for-profit school in Gohawa, Lahore, Pakistan. LUMS alumni run it. It teaches Playgroup to Matric (PCTB), funded by donations, Zakat and affordable fees. The site speaks for Al-Bayan as an organisation, for donors, volunteers, partners and staff; parents aren't the main audience. Never mention the old name. Domain: **albayanlearning.pk**.

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
| phones | 0325 1257747 (+92 325 1257747) and 0331 4422437 (+92 331 4422437), both on WhatsApp too |
| address | Rohi Nala Link Road, off Airport Road, opposite Toyota Airport Motors, Main Gohawa, Lahore |
| socials | [Instagram], [Facebook], [LinkedIn], all placeholders |
| registrationNo | empty for now; hide the line when empty |

## Phase 1 pages (build now)

| Route | Template | Sections |
| --- | --- | --- |
| `/` | Homepage | Exactly as `design/home-reference.html`. The latest 3 news items come from the collection. |
| `/about` | Content | Short about; vision and mission; Then / Now story; how we work and our focus; core values; partners and collaborations (text only); CTA band. No team section yet. |
| `/academics` | Content | Intro; grades offered (from `programs`); Learning Beyond the Book; concepts to board exams; Capstones; computer education; reading and writing; preschool; teachers and assessment; facilities; timings; CTA |
| `/admissions` | Content + form | Short page: who can apply; the no-admission-fee offer; admission enquiry form (guardian name, phone, child's age, area, message); CTA. No documents, steps or FAQs. |
| `/co-curricular` | Content | Intro, then Competitions, Saturday Scholars, Summer Camp, Special Days and Highlights (from `activities`) |
| `/get-involved` | Content + form + jobs | Volunteer for Saturday Scholars; volunteer form (name, email, phone, what you'd like to teach, which Saturdays); jobs from `jobs` with a "no openings right now" empty state; a short "Support the school" block saying online giving is coming soon |
| `/news` and `/news/[slug]` | Listing + detail | Category filter, featured story, card grid, pagination; single story page |
| `/contact` | Contact + form | Email, phone, address, socials, map placeholder; contact form (name, email, phone optional, topic, message) |
| `/privacy` | Simple article | [Privacy policy text]: data use, photo consent, cookies (none) |
| `/404` | Simple | Friendly message and links home |

There are **no form backends yet**. Build the forms as accessible static markup with no working action, and show a visible note on each: "[Form not connected yet]". Cloudflare Functions, D1 and Turnstile come in a later step. Include a Turnstile placeholder box.

## Content collections (`src/content/`, with schemas)

| Collection | Fields |
| --- | --- |
| team | name, role, group (founder, board, admin, teacher), photo?, bio?, order. Keep the schema, but don't render it yet. |
| programs | name, grades, description, subjects?, icon, order |
| activities | name, intro, items[], partners?[], colour, order. The five sections are in `content.md`. |
| jobs | title, type (full-time, part-time, volunteer), requirements, howToApply, closingDate, open (bool) |
| news | title, date, category (events, school-news, student-stories, announcement), summary, cover?, featured?, draft? ; body in Markdown |
| testimonials | quote, role (student, parent, alumni), name (first name or initials), photo? |

Use the real content from `content.md` where it exists (programs, activities). Seed the rest (news, testimonials, team) with 2–4 placeholder entries marked with [brackets]. Site-wide settings (contact, socials, registration number, announcement strip text and on/off, impact stats, launchMode) live in `src/data/site.json`.

## Later phases (do not build now, but don't block them)

- **Phase 2:**
  - Donate (bank transfer, SWIFT, PayFast Pakistan via gopayfast.com), after the Foundation is registered.
- Sponsor a Child (Rs 7,000 a month), and a fundraising cause: the new floor for senior grades 8–10.
- Leadership and team, sponsor logos, the Shariah compliance certificate.
  - This Year's Goal, with a campaign mode.
  - Sponsor a Child, Impact and Reports, Events, Gallery, FAQ, Partners.
  - The header "Get involved" button later becomes "This Year's Goal" or "Donate".
- **Phase 3:** Urdu at `/ur/`, right-to-left, using Noto Nastaliq Urdu. This is why the layout uses CSS logical properties.
