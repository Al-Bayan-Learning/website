# Al-Bayan website: approved content (Phase 1)

This file holds the real text for the site, from the team's answers (October 2026), updated with the team's review of the preview (feedback round 1, November 2026: `docs/feedback-round-1.md`). Use it in place of the [bracket] placeholders. Where something still says [brackets] here, it's not decided yet and stays a placeholder.

**Audience:** the site is mainly for **donors**, then volunteers, partners (non-profits, universities, schools) and job seekers. Parents can visit, but they aren't who the site is for. Write headings, intros and buttons from a donor's point of view (impact, trust, transparency), and keep text short: 1–3 short sentences per section, or chips and short lists. The About page can be a little longer. Every page opens with a visual.

Keep the wording close to what's here. You can shorten text to fit a layout, but don't add facts, numbers, names or quotes that aren't in this file.

## Name

- **Name on the website:** Al-Bayan Learning Initiative. Short name: Al-Bayan.
- **Legal name:** Al-Bayan Learning Initiative Foundation. Use it only in the © line in the footer and in the privacy page.
- Never mention the old name ("Al-Bayan School System").
- Header wordmark: "Al-Bayan Learning Initiative" on one line on wide screens; it wraps onto two lines on smaller screens.
- Always "Founded and run by alumni of LUMS" (the co-founders are alumni too), never just "Run by alumni of LUMS".

## Key facts and numbers

Use these on the homepage stats and wherever numbers appear. Don't use any other numbers.

| Fact | Text to use |
| --- | --- |
| Founded | Since 2019 (write "Since 2019", not a count of years, so it doesn't go out of date) |
| Students | 300+ students |
| Staff | 17–20 teachers and staff |
| Grades | Playgroup to Matric, adding a new grade each year |
| Board | Punjab Curriculum and Textbook Board (PCTB) |
| Campus | 1.5-kanal purpose-built campus in Gohawa, Lahore |
| Fee reduction | Every student has received a 50% fee reduction since 2019. Never call it a scholarship: Al-Bayan's merit scholarships are a separate thing. |
| Zakat support | About 20% of students receive Zakat-based financial assistance |
| Merit | The top 3–5% of students receive additional merit scholarships |
| Graduates | None yet. Don't mention graduates or alumni of the school. |

Suggested homepage stat tiles: "300+ students", "Since 2019", "50% fee reduction for every student", "PG to Matric".

## Homepage text

`design/home-reference.html` sets the layout. Use these words in it:

- **Announcement strip:** off (`announcement.enabled: false` in `site.json`). The old admission-fee offer was aimed at parents. Keep the component so it can come back, for example for a donation campaign: [Announcement text].
- **Hero intro:** "Founded and run by alumni of LUMS, Al-Bayan teaches children from Playgroup to Matric in Gohawa, Lahore, with learning that goes beyond the book and tarbiyat at its heart."
- **Hero buttons:** "Donate now" (→ /donate) and "Volunteer with us" (→ /volunteer).
- **"Since" sticker:** Since 2019
- **Stat tiles:**

  | Tile | Number | Label |
  | --- | --- | --- |
  | cyan | 300+ | students learning with us |
  | gold | 50% | fee reduction for every student |
  | green | 20% | of students supported through Zakat |
  | navy | PG–MATRIC | on one campus, growing each year |

- **Programs band:** heading "From first letters to Matric", with four cards from `programs` (Preschool, Primary, Middle, Matric). The reference has three cards; make it four.
- **Co-curricular band:** keep the heading "Debate. Create. Compete." Show three cards: Competitions (cyan), Saturday Scholars (gold) and Summer Camp (green), each with one line from the Co-curricular section below. Photos stay placeholders.
- **News:** removed from the homepage (News is hidden for launch; see News below).
- **Testimonial (26 Oct 2026):** a parent's quote, shown as "A parent" with no name (the team asked for no name; the child isn't named either). The full quote is in `src/content/testimonials/parent.md`. It will be replaced by a 1–2 line quote in Roman Urdu: [Parent quote in Roman Urdu, to come]; keep the current quote until it arrives. Next to the quote: [Photo: parent who agreed to be shown].
- **CTA band (every page):** "Help us reach more children" · "Your donation, Zakat or time helps more children get a quality education." · buttons "Donate now" and "Volunteer with us".

## About

**Short about (homepage and footer)**
Al-Bayan Learning Initiative is a not-for-profit school in Lahore, founded and run by alumni of LUMS and supported by co-founders and donors who believe quality education should not be a privilege.

Footer line: "A not-for-profit school in Lahore, founded and run by alumni of LUMS."

**Vision**
Our vision is an education system where academic learning goes hand in hand with tarbiyat: where children develop not just knowledge, but the character, values, manners and understanding to think clearly, act responsibly and contribute meaningfully to society.

**Mission**
Al-Bayan Learning Initiative Foundation exists to make quality education accessible without compromising on its quality or affordability. We are building an alternative to rote-based learning through strong teaching practices, meaningful learning experiences and a commitment to developing the whole child.

**Hero photo:** the page opens with a photo on the right of the hero.

**Our story (then and now)**
Use a simple "Then / Now" block instead of a long timeline; there are only two milestones so far.
- **Then (2019):** We started in a 5-marla building with 20 children.
- **Now:** We serve 300+ students on a 1.5-kanal purpose-built campus. We add a new grade each year, so our students can stay with us all the way to Matric. Photo: [Photo: assembly or big group], to show the school's scale.
- **Co-founder quotes:** two short personal quotes, one from each co-founder, each with a photo, first name and role (like the team's earlier Instagram posts): [Quote: co-founder 1] and [Quote: co-founder 2], with [Photo: co-founder 1], [Photo: co-founder 2] and [First name], [Role].

**How we work**
Al-Bayan is a not-for-profit school offering education from Playgroup to Matric. We operate through a combination of donations, Zakat and affordable student fees, to ensure both access and sustainability. We serve 300+ students with 17–20 trained teachers and staff in an underserved community on Bedian Road, Lahore (Gohawa village).

**Our focus**
- Tarbiyat-led learning alongside academics
- Critical thinking over rote learning
- Teacher development through consistent training
- Co-curricular exposure through collaborations with universities and schools, including debates, storytelling, experiments, music and skill-based activities

**Our values** (tilted value pills; each opens a popup with its full text). Final wording from the team, 26 Oct 2026.
- **Tolerance:** We live in a diverse country and for that we need to be tolerant individuals, who understand that some people will differ from you in opinions, gender, income and religion. We emphasize the ability to listen to differing opinions and keep an open mind.
- **Discipline:** We will use positive and negative reinforcement to reward good behaviour and punish bad behaviour. At Al-Bayan, our focus is not only to educate the children but also to create good citizens of the country.
- **Equality:** All decisions will be free of any discrimination based on gender, income, religion, or social status. We believe all people are created equal and everyone deserves an equal opportunity. This is one of the values we will be instilling in the students as well for a more inclusive future.
- **Merit:** Merit is the sole criterion in Al-Bayan's decision making. This applies to all aspects of its operations, from selection of faculty and staff, to admission and evaluation of students.
- **Character building:** We consider character building to be an integral part of our project because we are grooming the next generation of this country. They will be individuals who always put humanity first and respect others.

**Leadership and team:** the About page shows a team section with five main team members (owner's decision, 9 Nov 2026). Names, roles and photos aren't ready yet, so each card stays a [Name] / [Role] placeholder with a photo placeholder.

**Registration number:** not available yet. Leave `registrationNo` empty in `site.json` and hide the registration line wherever it's empty.

## Academics

Keep the text on this page much shorter than the full versions below, and give each section a photo: [Photo: computer lab], [Photo: reading and library], [Photo: capstone presentations], [Photo: preschool] (approved photo in use). The Facilities section shows a computer lab photo instead of the science lab (team's decision, Nov 2026).

**Intro**
At Al-Bayan, we want children to understand what they learn, not just memorise it for exams. We follow the Punjab Curriculum and Textbook Board (PCTB) from Playgroup to Matric.

**Learning Beyond the Book**
"Learning Beyond the Book" is built into our syllabus. Teachers go beyond completing textbook chapters and connect each concept to everyday life, real-world examples and activities, so students understand not only what they are learning, but why it matters and how to use it.

**From concepts to board exams**
In the younger and middle grades, we focus on conceptual understanding rather than memorisation. As students move towards Matric, we gradually introduce the structure of Punjab Board exams (board-style questions, past papers and formal exam formats) so there's no sudden jump from understanding to exam preparation.

**Capstone projects**
Once a year, students bring together what they've learned across a subject in one substantial group project, then present and defend their decisions. In Islamiyat, students design an ideal society based on Islamic principles, working through justice, honesty, cleanliness and cooperation. In Science, they take on roles as researchers, designers, engineers and science communicators to tackle problems like water use, energy, pollution and waste.

**Computer education**
Students learn coding and computational thinking, Microsoft Word, PowerPoint and Excel, digital citizenship and online safety. In the Computer Capstone, they develop a business idea, with flowcharts, budgets, pricing and digital marketing, and adapt their plan when given new scenarios such as a reduced budget or a customer complaint.

**Reading and writing**
We are building a reading culture through library use, storytelling, reading challenges, book clubs and book reports, along with English and Urdu creative writing and short-story competitions.

**Preschool**
Our preschool follows a developmental, Montessori-influenced approach: play-based, practical learning, with progress tracked through observation and developmental milestones rather than only written exams.

**Teachers and assessment** (one section, two cards)
- **Subject meetings:** teachers of each subject meet regularly with our Education Team and experts in that field to discuss how to teach it: difficult concepts, common misconceptions, activities and assessment. Science teachers are supported by a doctor; Computer Science teachers by a software engineer and a data scientist; English teachers by a former newspaper editor and textbook author; and Islamiyat teachers by an Alima.
- **Year-round training and expert-designed exams:** teachers get training, classroom feedback and office hours throughout the year, not just one annual workshop. Our exams are designed in-house by a dedicated Education Team, with backgrounds that include postgraduate study in Education at LUMS and a PhD in Educational Technology. They test understanding, application, problem-solving and critical thinking, not memorisation, and designing them in-house keeps Al-Bayan's merit and educational quality consistent all year.

**Facilities** (icon list; section heading "Facilities")
Library · Computer lab · Science lab · Playground · Air-conditioning in selected areas

**School timings:** don't show them anywhere. They vary by season, government notices and grade.

**Academic calendar link:** not available. Remove it.

The `programs` collection: one entry each for Preschool (Playgroup, Nursery, Prep), Primary (Classes 1–5), Middle (Classes 6–8) and Matric (Classes 9–10). Short descriptions can come from the sections above. Primary mentions **activity-based learning**; Middle mentions **project-based learning**. Don't call the last card "Secondary": a reviewer thought "Middle" and "Secondary" meant the same thing.

## Admissions

The Admissions page and the admission enquiry form were removed in feedback round 1. `/admissions` redirects to the homepage. Parents can still reach the school through the Contact page.

## Co-curricular

Replace the old Debate / Arts / Athletics structure. The page now has these sections, alternating backgrounds as in the design system:

This page needs lots of pictures: a hero photo, plus a main photo and a small gallery for each section ([Photo: <section> 2], [Photo: <section> 3]).

**Intro** (hero, 1–2 lines)
Debates, competitions, Saturday sessions and summer camps: learning that goes beyond the classroom.

Longer version, for reference: Learning at Al-Bayan extends beyond the classroom. Students take part in debates, public speaking, art, creative writing, science fairs and reading competitions. Our Saturday Scholars Programme and summer camps introduce them to new interests, from game design and storytelling to money management and performing arts.

**Competitions**
Art · Mathematics · Naat · English creative writing · Urdu creative writing · Poetry slam · Public speaking · Reading · Science fair · Spelling bee

**Saturday Scholars**
A Saturday programme for learning beyond the regular timetable: enrichment, guest speakers, practical activities and extra support where needed. Sessions have included chess, guitar, karate, Urdu poetry, story writing, game design, women's empowerment and the UN Sustainable Development Goals. (Link to /volunteer: volunteers teach these sessions.)

**Summer Camp**
An intensive daily programme each summer, run in collaboration with other non-profits, such as Afroz Pakistan and Project Pakistan, covering problem-solving, money management, public speaking, debates, technology, confidence-building and performing arts.

**Special Days**
Each year we use special days to explore topics beyond the textbook and connect them back to learning: International Girls in Science Day, Women's Day, Earthquake Awareness Day and drill, Road Safety, Pollution Awareness Day, National Clean Up Day, health and hygiene, and Career Day.

**Highlights**
Our students have taken part in a debate competition organised by Idara-e-Kalam and in PsiFi at LUMS, through SPADES. Students also performed a play at LUMUN at LUMS.

Change the `activities` collection to fit this: name, intro, items[] (list), partners? (list), colour, order. Seed it with the five sections above (Competitions, Saturday Scholars, Summer Camp, Special Days, Highlights). These have real text, so don't put brackets in them.

## Partners and collaborations

Show this on the About page as a logo grid: each partner's logo, name and the one line about the collaboration underneath. Logos live in `src/assets/partners/` (used with permission). CMH and LMDC show a generated "Dental Camps" image and Vision screening a generated "Free eye test" image, since neither has a logo. Sada Haq is still a placeholder: [Logo: Sada Haq]. The name and line always show, so it still works as a text list.

- **Project Pakistan:** debates, game-design classes, planting activities and summer camps
- **Afroz Pakistan:** summer camps
- **Science Fuse:** Science teacher training and hands-on experiments with students
- **SPADES at LUMS:** student participation in PsiFi
- **LUMUN at LUMS:** a student play performed at LUMUN
- **Beej Education:** spoken-English support for our teachers
- **Kitabi Pulao:** storytelling sessions with our preschool students
- **Sada Haq:** an age-appropriate child-safety awareness session
- **CMH and LMDC:** dental camps for students
- **Vision screening:** a school-wide eye test, after which we arranged glasses for children who needed them

## Volunteer (`/volunteer`)

Replaces the old "Get involved" page (`/get-involved` redirects here). Volunteer photos throughout: [Photo: volunteers at Saturday Scholars] (approved Saturday Scholars photos are in use).

- **Hero:** "Volunteer with us". Don't use the name "Saturday Scholars" in the hero; newcomers won't know what it is.
- **Ways to volunteer** (three cards: what it is, where, how much time):
  1. **Become a Saturday Scholar** (in person): one-hour sessions on Saturdays, teaching a skill or topic you care about: the UN Sustainable Development Goals (such as climate change and gender equality), debates, drama, critical thinking, karate, or any other informative or activity-based session. Minimum commitment: three Saturdays.
  2. **Education team volunteer** (remote): [Short description, to come from the education team]. Time: [Time commitment, to come].
  3. **Subject expert** (remote, the smallest time commitment): help teachers of one subject think through how to teach it, like the subject meetings on the Academics page. [Confirm the wording]
  - [Possible fourth card: marketing and content volunteer, still to be decided. Not shown.]
- **Sign-up form** (one form for all three, still static, "[Form not connected yet]"): name, email, phone, then "Which would you like to do?". Then only the chosen option's follow-up questions, marked [draft] for the team to edit:
  - Saturday Scholar: what you'd like to teach, and which Saturdays you can do.
  - Education team: your background, and the hours per week you can give.
  - Subject expert: your subject, your experience, and how often you could join a meeting.
- **Email next to the form:** questions only: "Questions? Email education@albayanlearning.pk". Don't present email as a second way to sign up.
- **Collaborate with us** (for non-profits, universities and schools): collaborations are a big part of how we work. To pitch an idea, send a short introduction to your organisation and a proposal for the idea. Contact: education@albayanlearning.pk. Link to the partners on the About page.

## Careers (`/careers`)

"Work with us", on a light background (the old dark jobs section looked like the footer).

- Openings come from the `jobs` collection, each with its full job description (the entry's Markdown body). With no open jobs, show: "We don't have any openings right now. You're welcome to send your CV to careers@albayanlearning.pk." Keep one example entry marked `open: false` (so it isn't shown), to show the format.
- **Why work at Al-Bayan:** year-round training, subject meetings and expert-designed exams, from the Academics text.

## Donate (`/donate`)

"Support Al-Bayan". Built with placeholders; it shows only on previews until the team approves it (`showDonate` in `site.json`). **Never add bank account numbers to the repo.**

- **Ways to give:** Zakat and Sadqa are both accepted. Zakat: about 20% of our students receive Zakat-based financial assistance. Sadqa: Sadqa and general donations support the school, alongside Zakat and affordable student fees. Next to them: [Show the Shariah/Zakat compliance certificate image].
- **Sponsorship packages:** three cards: [Package name], [Amount per month], [Short description]. The team is still finalising them (ideas include sponsoring a child, a classroom, or a teacher's salary).
- **Current appeal:** "Our new floor for senior grades (Classes 8–10)", with [Goal amount], [Progress] and [Photo: the new floor for senior grades].
- **How to donate:** bank transfer: [Bank details, to be added after the account title is confirmed]. "Online giving is coming soon."

## News

Hidden for launch (`showNews: false` in `site.json`): not built, and not linked from the navigation, footer or homepage. The code and the `news` collection stay, so it can come back. Subtitle: "Events, school news, and student stories."

## Contact

| Field | Value |
| --- | --- |
| email | info@albayanlearning.pk |
| careersEmail | careers@albayanlearning.pk |
| educationEmail | education@albayanlearning.pk (education team and collaborations) |
| phones | 0325 1257747 (`+923251257747`), 0331 4422437 (`+923314422437`) and 0333 1440976 (`+923331440976`). All on WhatsApp too. Show each with the WhatsApp icon (→ `https://wa.me/<number without +>`) and the number (→ `tel:`), with no extra labels and no "From outside Pakistan" lines. |
| educationWhatsapp | 0333 1440976 and 0344 4055253 (`+923444055253`): WhatsApp only, no calls. Show with the WhatsApp icon and a "WhatsApp only" note. |
| address | Rohi Nala Link Road, off Airport Road, opposite Toyota Airport Motors, Main Gohawa, Lahore |
| map | Campus pin at 31.4954205, 74.425348 (from the school's Google Business Profile). Link by coordinates: the Google listing still uses the old name. The map loads only when the visitor presses "Show the map". |
| socials | Instagram https://www.instagram.com/albayanschoolpk, Facebook https://www.facebook.com/albayanschoolpk, LinkedIn https://www.linkedin.com/company/70905235, TikTok https://www.tiktok.com/@albayanschoolpk (shown with their logos) |

`phones` in `site.json` is a list, each with `display`, `tel` and `whatsapp` (true or false). The coming-soon page still shows **no** phone numbers, address or WhatsApp.

The Contact page has a section **"Education team and collaborations"** with the education email and the WhatsApp-only numbers. Contact form topics: Supporting the school, Volunteering, Collaborating, Careers, Admissions, Something else.

## Not in Phase 1 (don't build or mention yet)

- A separate leadership and team page (the About page has a team section; see About)
- New photos of children without the school's approval (the approved photos in `src/assets/photos/` are fine; see CLAUDE.md)
- Online payments, and bank account numbers anywhere in the repo (the Donate page shows placeholders only)
