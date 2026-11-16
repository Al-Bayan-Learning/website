# Website feedback, round 1: implementation plan

This plan comes from the team's review of the preview site (November 2026). It's grouped by page. Each item says what to change. Anything in [square brackets] is still waiting on an answer or a file from the team: leave it as a visible placeholder and don't invent it.

## 0. The big change: donors come first

The team's main point is that the site currently speaks to parents. **The main audience is donors**, then volunteers, partners (non-profits, universities, schools) and job seekers. Parents can visit, but they aren't who the site is for.

What this means across the site:

- Rewrite the headings, intros and CTAs from a donor's point of view: impact, trust, transparency, what support makes possible. Keep every fact from `docs/content.md`, and don't invent new numbers or claims.
- **Use fewer words.** People scroll fast, and the site currently feels text-heavy. Cut most section text to 1–3 short sentences, or turn it into chips, short lists or icons. The About page can stay a little longer.
- **Use more pictures.** Every page should open with a visual. Add a photo slot to the right of each PageHero (tilted frame, like the homepage), and leave room for more photos in each section. Where we don't have a photo yet, use the Placeholder component with a clear label (see section 10).
- Update the audience description in `docs/project-brief.md` to match, and add the new pages and routes.

## 1. Navigation, header and footer

- **New navigation:**
  - About · Academics · Co-curricular · Volunteer · Careers · Contact.
  - A **"Donate"** pill in the header, replacing "Get involved". Use the gold or navy pill; pick whichever passes contrast and stands out.
  - The mobile menu gets the same items.
- **Remove Admissions and News from the navigation** (see sections 4 and 7).
- **Header wordmark:** put "Al-Bayan Learning Initiative" on one line on desktop. On small screens it can wrap if it must.
- **Announcement strip:** the "No admission fee for the first 10 students" offer is aimed at parents, so turn the strip off in `site.json` for now. Keep the component, so it can be switched back on later for a donation campaign.
- **Bug: mobile menu links don't work on iPhone (Safari).**
  - The hamburger opens, but tapping Academics, Admissions and so on does nothing on iPhone Safari. It works in Chrome on Android, and the footer links work.
  - Likely causes: the menu closes on a touch or click event before the link navigates, `preventDefault` on the panel, or a focus-trap or overlay catching the tap.
  - Fix it and test it with Playwright in **WebKit** using an iPhone device profile (`npx playwright install webkit` if needed). Tap each link and check the URL changes.
- **Footer:** apply the contact changes from section 8. Explore links follow the new navigation.
- **What the team liked (keep as it is):** the colours and theme, the nav transitions, and the value pills.

## 2. Homepage

- **Hero intro:**
  - Change "Run by alumni of LUMS" to **"Founded and run by alumni of LUMS"**. The co-founders are alumni too.
  - Apply the same change everywhere this line appears: homepage hero, "Who we are", About hero and footer.
- **Hero buttons:** "Donate now" (primary) and "Volunteer with us" (secondary). Remove "Apply for admission".
- **Stat tile:** replace "50% tuition scholarship for every student" with **"50% fee reduction for every student"**. Never call it a scholarship, because Al-Bayan's merit scholarships are a separate thing. Apply this everywhere: the stat tile, admissions text and `content.md`.
- **CTA band** (on every page): the first button is "Donate now" and the second is "Volunteer with us". Rewrite the band text for donors.
- **Testimonial:**
  - Keep the band, with a slot for a parent photo next to the quote: [Photo: parent who agreed to be shown].
  - The quote will be replaced by a real 1–2 line quote in Roman Urdu: [Parent quote in Roman Urdu, to come]. Until it arrives, keep the current quote.
- **News section on the homepage:** remove it (see section 7).

## 3. About

- Hero and "Who we are": apply "Founded and run by alumni of LUMS" and the donor-focused wording.
- **Our story:**
  - Add two short personal quotes, one from each co-founder, each with a photo and their first name and role, like the team's earlier Instagram posts.
  - Use [Quote: co-founder 1] and [Quote: co-founder 2] with photo placeholders until the text arrives.
- **Then / Now:** the "Now" photo should show the school's scale, such as an assembly or a large group of students: [Photo: assembly or big group].
- **Partners and collaborations:**
  - Change it to a logo grid (logo plus name, with the one-line description on hover or underneath).
  - Use a placeholder logo tile for each partner until the logo files arrive: [Logo: Project Pakistan] and so on. Keep the text list working as a fallback.
- **Value pills:** keep them as they are.

## 4. Admissions: remove the page

- Remove `/admissions` from the navigation, the footer and all buttons.
- Keep the route only as a redirect to `/` (or delete it; either is fine).
- Delete the admission enquiry form.
- Remove the admission-related lines from `content.md`.

## 5. Academics

- Make the text much shorter throughout and add photo slots to each section (computer lab, reading and library, capstone, preschool, science lab).
- **Grade cards:**
  - **Primary:** mention **activity-based learning**.
  - **Middle (Classes 6–8):** mention **project-based learning**.
  - **Secondary (Classes 9–10):** rename the card to **"Matric (Classes 9–10)"**. A reviewer thought "Middle" and "Secondary" meant the same thing.
- **Expert-designed exams:** add that the exams also test **problem-solving and critical thinking**, and that designing the exams in-house keeps Al-Bayan's **merit and educational quality consistent all year**.
- **School timings:** remove them everywhere (Academics, `site.json`, `content.md`). Timings vary by season, government notices and grade.
- Keep the facilities list, without the timings line. Rename the section heading "Facilities".

## 6. Co-curricular

- This page needs lots of pictures: the hero visual, plus a photo or small gallery for each section (Competitions, Saturday Scholars, Summer Camp, Special Days, Highlights).
- **Hero:** shorten the intro to 1–2 lines and add a hero photo on the right.
- **Summer Camp:** change the text to "…run in collaboration with other non-profits, such as Afroz Pakistan and Project Pakistan." It shouldn't sound like the same partners run it every year.
- **Special Days:** change the "Careers" chip to **"Career Day"**.

## 7. News: hide for launch

- The team can't keep up regular news yet.
- Hide `/news` from the navigation, the footer and the homepage, and don't build it into the site (`draft` or a feature flag in `site.json`, e.g. `showNews: false`).
- Keep the code and collection, so it can come back later.
- While it's hidden, still fix the subtitle: "Events, school news, and student stories." (with the Oxford comma).

## 8. Contact

- **Phones** (in `site.json`, on the Contact page and in the footer). Show each one with the WhatsApp icon only, with no extra labels. Remove the "From outside Pakistan: +92…" lines under each number.
  - 0325 1257747 (`+923251257747`)
  - 0331 4422437 (`+923314422437`)
  - 0333 1440976 (`+923331440976`): new
  - Every number links to `tel:` and to WhatsApp (`https://wa.me/<number without +>`).
- **New section, "Education team and collaborations"**, on the Contact page:
  - Email: **education@albayanlearning.pk**
  - WhatsApp only (no calls): **0333 1440976** and **0344 4055253** (`+923444055253`). Show these with the WhatsApp icon and a "WhatsApp only" note.
  - Add `educationEmail` and `educationWhatsapp` to `site.json`.
- **Contact form topics:** add **"Collaborating"**.

## 9. Volunteer, Careers and Donate: replaces "Get involved"

Volunteering, jobs and donations have different audiences, so each gets its own page. Remove `/get-involved` (redirect it to `/volunteer`).

### 9a. `/volunteer`: "Volunteer with us"

- **Hero:** "Volunteer with us", with a photo of volunteers on the right. Don't use the name "Saturday Scholars" in the hero; newcomers won't know what it is.
- **Ways to volunteer** (an overview of three cards: what it is, where, how much time):
  1. **Become a Saturday Scholar** (in person): one-hour sessions on Saturdays, teaching a skill or topic you care about (SDGs, debates, drama, critical thinking, karate…). Minimum commitment: three Saturdays.
  2. **Education team volunteer** (remote): [Short description, to come from the education team].
  3. **Subject expert** (remote, the least commitment): help teachers of one subject think through how to teach it, like the subject meetings on the Academics page. [Confirm the wording].
  - [Possible fourth card: marketing and content volunteer, still to be decided. Leave it out for now.]
- **One sign-up form for all three:**
  - It asks for name, email and phone, then "Which would you like to do?" (the three options).
  - Then show follow-up questions for the chosen option. Use progressive enhancement: plain HTML sections that a small script shows or hides, so it still works without JavaScript.
  - Suggested follow-ups, marked "[draft]" for the team to edit:
    - Saturday Scholar: what you'd like to teach, and which Saturdays you can do.
    - Education team: your background and the hours per week you can give.
    - Subject expert: your subject, your experience, and how often you could join a meeting.
  - The form stays static ("[Form not connected yet]").
- **The email next to the form** is for questions only. Label it "Questions? Email…" and use education@albayanlearning.pk, not info@. Don't present email as a second way to sign up.
- **Collaborate with us** (a separate section on the same page, aimed at non-profits, universities and schools):
  - Say clearly that Al-Bayan is very big on collaborations, and list what to send: tell us about your organisation, and bring a proposal for the idea you'd like to pitch.
  - Contact: education@albayanlearning.pk. Link to the partners on the About page.
- Volunteer photos throughout: [Photo: volunteers at Saturday Scholars].

### 9b. `/careers`: "Work with us"

- Its own page, with a light background. The dark navy job section looked like the footer, and reviewers scrolled past it twice.
- Job openings come from the `jobs` collection, each with its full job description, with the "no openings right now, send your CV to careers@albayanlearning.pk" empty state.
- A short "Why work at Al-Bayan" block: teacher training and subject meetings, taken from the Academics text.

### 9c. `/donate`: "Support Al-Bayan"

Build the page now with clear placeholders. It shows only on the preview until the team approves it.

- **Hero** for donors, with a photo on the right.
- **Ways to give:**
  - Zakat and Sadqa are both accepted. Add one line on each.
  - [Show the Shariah/Zakat compliance certificate image] in a framed card, with a placeholder image for now.
- **Sponsorship packages:**
  - Three cards: [Package name], [Amount per month], [Short description].
  - The team is still finalising them. Ideas include sponsoring a child, a classroom, or a teacher's salary ("sponsor a chair").
- **Current appeal:** "Our new floor for senior grades (Classes 8–10)". Use [Goal amount] and [Progress] placeholders.
- **How to donate:**
  - Bank transfer details: [Bank details, to be added after the account title is confirmed]. **Don't add account numbers yet.**
  - "Online giving is coming soon."

## 10. Privacy page

- Fix the missing spaces around emails ("Emailinfo@…" and "…pkand"). The likely cause is an inline link with no space around it in the source. Check every page for the same problem.

## 11. Photos we're waiting for

Use labelled placeholders for these until the photos arrive. Put each photo in `src/assets/photos/` when it comes.

| Where | What |
| --- | --- |
| Every page hero (About, Academics, Co-curricular, Volunteer, Careers, Donate, Contact) | One strong visual per page, ideally happy children |
| About: "Now" | An assembly or a large group of students, showing scale |
| About: Our story | A photo of each of the two co-founders |
| Homepage testimonial | A parent who has agreed to be shown |
| Academics | Computer lab, library and reading, capstone presentations, preschool, science lab |
| Co-curricular | Several each for competitions, Saturday Scholars, summer camp and special days |
| Volunteer | Volunteers teaching at Saturday Scholars |
| About: Partners | Partner logos, used with permission |
| Donate | The Shariah/Zakat compliance certificate |

## 12. Done when

- All of the above is applied. Placeholders are visible and in [brackets].
- `docs/content.md` and `docs/project-brief.md` match the new structure. The brief lists the new routes: `/volunteer`, `/careers`, `/donate`; it notes that Admissions was removed and that News is hidden.
- The mobile menu works in WebKit (iPhone profile) and Chromium.
- Every page is checked at 390px and 1280px, with no horizontal scroll and AA contrast.
- The coming-soon gate still works on `main`.
