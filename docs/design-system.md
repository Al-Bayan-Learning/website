# Al-Bayan website: design system

Approved direction: **bold colour**. The homepage reference is `design/home-reference.html`; open it in a browser. Every other page reuses its header, footer, buttons, cards and section styles, following the patterns below. Look matters more than pixel-perfect matching, but colours, fonts, shapes and spacing should feel identical across pages.

## Colour tokens (put these in the Tailwind theme)

| Token | Hex | Use |
| --- | --- | --- |
| purple | #6552A1 | Page heroes, headings on white, links, primary buttons (white text) |
| purple-dark | #4A3B7E | Text on white buttons that sit on purple; link hover |
| purple-soft | #7E6DB8 | Decorative circles on purple |
| cyan | #05C5DA | Stat tile, tags, borders, headings **on navy only**. Never text on white (2.1:1) |
| cyan-light | #9BEAF2 | Highlight text on purple or navy (4.7:1 on purple) |
| blue-mid | #3F8FB8 | Big decorative circle on the purple hero (opacity 0.55) |
| navy | #242038 | Body text, footer, dark sections, "Get involved" header pill |
| gold | #FCC05E | Announcement strip, testimonial band, tags, CTA button (navy text) |
| green | #C2D6A0 | Programs band, tags, stat tile (navy text) |
| surface | #F6F5FB | Light card / section background |
| placeholder | #E6F9FB | Image placeholder fill |
| ink-2 | #3B3654 | Secondary body text on light backgrounds |
| muted | #5A5670 | Dates, captions, breadcrumbs on light backgrounds |
| on-navy | #D9D6E6 | Body text on navy |
| on-navy-muted | #B9B5CC | Small print in the footer |
| on-purple | #F1EEFA | Body text on purple |
| border | #ECEAF4 / #DDD8EE / #CFCADF | Card borders / chip borders / input borders |

**Contrast rules**
- Text on cyan, gold or green is always navy.
- Don't put purple text on green (4.1:1). Use navy there.
- Focus rings use purple `#6552A1` (on light) or white (on purple/navy). Never cyan on white.

## Type

- **Poppins** (self-hosted via @fontsource/poppins): weights 400, 500, 600, 700 and 800. Use 800 for h1/h2 and 700 for h3, buttons and nav.
- **Bebas Neue** (self-hosted via @fontsource/bebas-neue) is only for:
  - eyebrow labels above headings (22px, letter-spacing 0.08em);
  - big stat numbers (64px);
  - co-curricular names;
  - the hero badge;
  - the footer wordmark.
- Sizes: h1 `clamp(38px, 5.4vw, 66px)`, line-height 1.05. h2 `clamp(28px, 3.4vw, 42px)`, line-height 1.15. Body 16px, line-height 1.6.
- Noto Nastaliq Urdu: later, Phase 3. Don't add it now.

## Shapes and motifs

- Radius: cards and panels 24px. Buttons, pills, tags and chips are fully round (999px). Icon squares are 16px.
- **Decorative circles** on purple and navy/gradient bands use blue-mid, purple-soft, a small green dot, and cyan or gold on the CTA band. Mark them `aria-hidden`.
- **Wave** SVG at the bottom of the purple hero, filled with the colour of the next section.
- **Squiggle** underline (white) under one highlighted phrase in the hero h1.
- **Slight tilts** (−3° to 3°) on value pills, photo frames and the "Since [Year]" sticker. Keep tilts out of body text, forms and nav. Respect `prefers-reduced-motion` for any hover motion.
- Photo frames: rounded 24px, a 4–6px border in a palette colour, or an offset navy block behind them.

## Shared components (build once, use everywhere)

1. **AnnouncementStrip**: gold, navy text, 14px/600, centred. The text and link come from `site.json`. It can be switched off there.
2. **Header**: white background with the logo (58px tall) and "Al-Bayan Learning / Initiative Foundation" (700, 15px, two lines).
   - Nav: About, Academics, Admissions, Co-curricular, News, Contact, plus a navy "Get involved" pill.
   - The current page gets a 3px cyan underline and purple text.
   - **Mobile (< 900px):** a hamburger button (44×44, `aria-expanded`). It opens a full-width navy panel with large white links and a gold "Get involved" pill. Close it with Esc.
3. **PageHero** (all inner pages): a purple band with decorative circles and the wave at the bottom.
   - Content: breadcrumb (`#E6E1F5`, 14px), Bebas eyebrow in cyan-light, h1 in white at weight 800, and an intro in on-purple with max-width 640px.
   - It's shorter than the homepage hero: padding about 64px top, 110px bottom. There's no photo, or an optional small tilted photo on the right.
4. **SectionHeading**: Bebas eyebrow plus an h2 at weight 800. Optionally a right-aligned "All …" link.
5. **Button**: pill, min-height 52px (44px in the header), weight 700. Variants:
   - `primary` (purple bg, white text);
   - `dark` (navy, white);
   - `gold` (gold, navy);
   - `light` (white, purple-dark text);
   - `outline-light` (2px white border, white text) for dark bands.
6. **Card**: white or surface background, radius 24px. Variants:
   - news card: cover image, coloured tag, title, date;
   - program card: coloured icon square, title, purple grade line, text;
   - person card;
   - job card.
7. **Tag**: a pill coloured by category. Events = gold, School news = cyan, Student stories = green, Announcement = purple with white text. Text is navy unless the background is purple.
8. **StatTile**: cyan, gold, green or navy tiles with a Bebas number and a 600 label.
9. **CTABand**: navy→purple gradient (100deg) with cyan and gold circles, an h2, a line of text and two buttons (gold + white).
10. **Footer**: navy, three columns.
    - Columns: the Bebas wordmark (second line in cyan) with a one-line about; Explore links; Contact (email, phone, address, socials).
    - Column headings are gold.
    - The bottom bar has the © line, the registration number and a Privacy link.
11. **Placeholder**: a block with the placeholder fill and centred navy text in [square brackets]. Use it for every image that isn't real yet.

## Section rhythm

Pages alternate full-bleed bands so they never feel all-white: white, then a coloured band (green, navy or gold), then white, then the CTA band, then the footer. Use at most one gold band and one green band per page. Content width is max 1200px with a 24px side gutter (16px under 480px). Section padding is 72–88px on desktop and 48–56px on mobile.

## Page patterns

**Content page** (About, Academics, Admissions, Co-curricular, Get involved, Privacy)
- PageHero, then sections built from these blocks:
  - text and photo split;
  - a two-card pair (purple card with white text and a cyan-light eyebrow, next to a cyan card with navy text). Use it for vision and mission.
  - tilted value pills;
  - a timeline (vertical line in cyan, coloured dots cycling through the palette, Bebas years in purple);
  - a person grid (square photo placeholder, a coloured 6px top bar cycling through the palette, name at 700, role muted);
  - an FAQ accordion (`<details>`, surface background, purple + icon);
  - a steps list (big Bebas numbers in palette colours).
- End every content page with the CTABand.
- Privacy is a simple single-column article (max 720px) with PageHero, and has no CTA band.

**Co-curricular**: one section each for Debate, Arts and Athletics, on alternating backgrounds (navy, white, green).
- Each has a Bebas title in that activity's colour (Debate = cyan, Arts = gold, Athletics = green), a tilted photo frame, intro, lead, and an achievements list.
- On white sections, put the title in a coloured pill with navy text instead of coloured text.

**Listing (News)**
- PageHero.
- Filter chips: active chip is navy with white text; inactive chips are white with a #DDD8EE border. Filtering is plain links to `/news/category/[slug]` or query-free static pages.
- A featured story card on navy (white text, gold tag) with a big image.
- A grid of news cards.
- Numbered pagination: the active page is purple with white text.

**Detail (single news story)**
- A short PageHero with the tag, date and title.
- The article column is max 720px with comfortable prose styles.
- Images get radius 24px and a caption. Blockquotes have a 4px gold left border.
- After the article: a "Back to news" link, then "More stories" (3 cards).

**Contact and forms** (Contact, Admissions enquiry, Volunteer)
- PageHero.
- Two columns on desktop, stacked on mobile.
  - Left: info cards, each with a coloured icon square (email = cyan, phone = gold, campus = green, socials = purple), plus a map placeholder.
  - Right: a white form card with a soft shadow on a surface-coloured band.
- Inputs: 48px min-height, radius 12px, 1.5px #CFCADF border, purple focus ring. Labels sit above the fields.
- Error text in #B42318 with an icon. Don't rely on colour alone.
- Spam-check placeholder box.
- Privacy line with a link.
- Purple pill submit button.

## Accessibility and performance (non-negotiable)

- WCAG AA contrast (see the rules above).
- Every image has alt text; decorative shapes are `aria-hidden`.
- Tap targets are at least 44px. Keyboard-usable menu, visible focus, and a skip link.
- Use CSS logical properties (`ms-`, `me-`, `ps-`, `pe-`, `text-start`) so Urdu RTL can be added later.
- Use Astro `<Image>` for real images later. No autoplay. Keep pages light; the site must work on a mid-range Android phone.
- It must look right at 390px and 1280px wide, with no horizontal scroll.
