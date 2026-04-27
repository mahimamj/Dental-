# SEO Migration Plan

## Goal
Rework the current brochure-style orthodontic website into a scalable, SEO-friendly, conversion-first structure for Delhi-focused search intent without creating thin pages.

## Current Project Inventory

### Existing root pages
- `index.html`
- `about.html`
- `contact.html`
- `gallery.html`
- `testimonials.html`

### Existing service pages
- `services/invisible-braces.html`
- `services/invisalign.html`
- `services/smile-makeover.html`
- `services/dental-implants.html`

### Shared assets
- `assets/css/styles.css`
- `assets/js/main.js`
- `sitemap.xml`
- `robots.txt`

## Target SEO Structure For This Project

### Keep and rewrite
- `index.html`
- `about.html`
- `contact.html`

### Add new high-intent landing pages
- `orthodontist-delhi.html`
- `invisalign-delhi.html`
- `braces-treatment-delhi.html`
- `adult-orthodontics-delhi.html`
- `children-orthodontist-delhi.html`
- `problems.html`
- `braces-cost-delhi.html`
- `retainers-delhi.html`
- `emergency-orthodontist-delhi.html`

### Add supporting local and blog pages
- `locations/south-delhi.html`
- `blog/index.html`
- `blog/invisalign-vs-braces-delhi.html`
- `blog/braces-cost-factors-delhi.html`
- `blog/best-age-for-braces.html`

### Retain as trust/support pages
- `gallery.html`
- `testimonials.html`

## Mapping: Existing -> New

### `index.html`
Current role:
- Generic home page
- Mixed service summary
- Trust and reviews

New role:
- Conversion-first home page
- Internal linking hub to all money pages
- Stronger keyword targeting around `Orthodontist in Delhi`

### `about.html`
Current role:
- Doctor authority page

New role:
- Keep as authority and trust page
- Add stronger links to service pages and consultation booking

### `contact.html`
Current role:
- Appointment page

New role:
- Keep as lead capture page
- Strengthen local SEO, directions, emergency CTA, and service CTA paths

### `gallery.html`
Current role:
- Generic smile gallery

New role:
- Keep as support/trust page
- Link into Invisalign, braces, smile makeover, and contact pages

### `testimonials.html`
Current role:
- Review page

New role:
- Keep as trust page
- Link into money pages and contact page

### `services/invisible-braces.html`
Current role:
- Standalone invisible braces page

New role:
- Retire as primary SEO target
- Replace intent with:
  - `invisalign-delhi.html`
  - `braces-treatment-delhi.html`
  - `adult-orthodontics-delhi.html`

### `services/invisalign.html`
Current role:
- Narrow Invisalign page

New role:
- Replace with stronger money page:
  - `invisalign-delhi.html`

### `services/smile-makeover.html`
Current role:
- Smile makeover page

New role:
- Can remain temporarily
- Not in primary keyword cluster for current build phase

### `services/dental-implants.html`
Current role:
- Dental implants page

New role:
- Keep temporarily as auxiliary service page
- Not part of current orthodontic keyword priority

## Keyword-to-Page Execution Map

- `Orthodontist in Delhi` -> `orthodontist-delhi.html`
- `Invisalign treatment in Delhi` -> `invisalign-delhi.html`
- `Clear aligners in Delhi` -> `invisalign-delhi.html`
- `Invisible braces in Delhi` -> `invisalign-delhi.html` and `braces-treatment-delhi.html`
- `Braces treatment in Delhi` -> `braces-treatment-delhi.html`
- `Ceramic braces in Delhi` -> section inside `braces-treatment-delhi.html`
- `Lingual braces in Delhi` -> section inside `braces-treatment-delhi.html`
- `Self ligating braces in Delhi` -> section inside `braces-treatment-delhi.html`
- `Braces for adults in Delhi` -> `adult-orthodontics-delhi.html`
- `Teeth straightening in Delhi` -> `orthodontist-delhi.html` and `adult-orthodontics-delhi.html`
- `Pediatric orthodontist in Delhi` -> `children-orthodontist-delhi.html`
- `Teeth gap treatment in Delhi` -> `problems.html#teeth-gap`
- `Crowded teeth treatment in Delhi` -> `problems.html#crowded-teeth`
- `Overbite treatment in Delhi` -> `problems.html#overbite`
- `Jaw alignment treatment in Delhi` -> `problems.html#jaw-alignment`
- `Teeth retainers in Delhi` -> `retainers-delhi.html`
- `Smile makeover in Delhi` -> existing `services/smile-makeover.html` for now
- `Braces cost in Delhi` -> `braces-cost-delhi.html`
- `Emergency orthodontist in Delhi` -> `emergency-orthodontist-delhi.html`
- `Orthodontist in South Delhi` -> `locations/south-delhi.html`

## Execution Order

1. Update shared site architecture
   - revise navigation
   - reposition homepage messaging
   - add internal links to future landing pages

2. Build core money pages
   - `orthodontist-delhi.html`
   - `invisalign-delhi.html`
   - `braces-treatment-delhi.html`
   - `adult-orthodontics-delhi.html`
   - `children-orthodontist-delhi.html`

3. Build problem and conversion support pages
   - `problems.html`
   - `braces-cost-delhi.html`
   - `retainers-delhi.html`
   - `emergency-orthodontist-delhi.html`

4. Build local and blog support pages
   - `locations/south-delhi.html`
   - blog hub and initial articles

5. Final SEO plumbing
   - update `sitemap.xml`
   - update internal links
   - keep `robots.txt`
   - verify no orphan pages

## Important Implementation Notes

- Do not delete current service pages immediately; keep them live until replacement pages and navigation are in place.
- Avoid duplicate intent between `invisalign-delhi.html`, `braces-treatment-delhi.html`, and `adult-orthodontics-delhi.html`.
- Keep the design system and CSS shared to minimize maintenance.
- Use trust elements on every landing page:
  - contact CTA
  - WhatsApp CTA
  - credentials
  - local location cues
  - FAQ section
