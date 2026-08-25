# Afzet Studio — Homepage

A single, long-form editorial homepage for a healthcare-focused digital growth studio, built to match the Rise4 reference's art direction (atmospheric gradient environments, large editorial imagery, restrained typography) with Afzet Studio's own brand, copy and services.

## Scope

Homepage only (`/`). No About, Services, Case Study, Blog, Contact, Pricing, auth, or CMS routes. Nav and footer links point to placeholder anchors so those pages can be added later without rework.

## Page sequence

1. Navbar — wordmark left, minimal links (Work, Services, Approach, About), "Book a Strategy Call" pill right; lightweight, translucent on scroll; mobile full-screen menu.
2. Hero — dark charcoal environment with soft lime/mint glow, editorial headline "Healthcare growth, built around the patient.", supporting copy, two CTAs, large rounded portrait image with layered floating UI chips.
3. Trust strip — "Built for modern healthcare businesses" + category marks (Med Spas, Dental, Dermatology, Physiotherapy, Mental Health, Private Practices). Subtle, easily swapped for real logos.
4. Results / value — large statement headline, supporting paragraph, 3–4 metric blocks using `[RESULT]` placeholders (no invented numbers).
5. Services intro — "More than a website. A complete digital growth system."
6. Six full-width service sections, alternating left/right, each with its own gradient environment: Patient Acquisition (lime), Website & Conversion (cyan), SEO/AEO/GEO (lavender), AI & Automation (coral), Retention & Reputation (peach), Analytics & Optimization (cream). Each: small label, large title, paragraph, capability list, small CTA, art-directed image + floating UI card.
7. Why Afzet — dark green environment, centered statement with a scattered collage of small rounded images/cards around it.
8. Case study — one large featured layout: screenshot, testimonial placeholder, three `[X]%` metric placeholders, "View Case Study".
9. Final CTA — deep green/black, soft glow + noise, large headline, primary + secondary CTA.
10. Footer — minimal: wordmark, one-line description, nav, email, CTA, oversized "afzet" wordmark band.

## Design system

- Tokens in `src/styles.css`: near-black, off-white, warm cream, mint, lime, cyan, lavender, coral, peach — all oklch, semantic names only (no hardcoded color classes in components).
- Gradient utilities (`gradient-green`, `-cyan`, `-purple`, `-coral`, `-peach`, `-cream`, `-dark`) each built from a base linear gradient plus 2–3 oversized blurred radial layers that extend past section bounds, so neighbouring sections blend with no visible banding. Decorative layers are `pointer-events: none` and sit behind content. Optional SVG noise overlay at very low opacity.
- Typography: contemporary geometric sans (heading + body pair loaded via `<link>` in the root route), full `clamp()` scale, tight headline leading, small uppercase labels, constrained measure.
- Buttons: small, restrained radius, two variants (solid dark / outline), no oversized pills.

## Motion

CSS-only: intersection-observer driven fade-up + slight image reveal, gentle hover scale on images, button and nav transitions. Slow easing, no parallax or bouncing. Full `prefers-reduced-motion` opt-out.

## Technical notes

- `src/routes/index.tsx` replaced with the homepage; components in `src/components/site/` (Navbar, Button, Hero, TrustStrip, MetricsSection, ServicesIntro, ServiceSection, ImageComposition, WhyAfzet, CaseStudy, FinalCTA, Footer, Reveal).
- `ServiceSection` is data-driven from one array so services stay editable in one place; metric/case-study placeholders live in the same data file.
- Imagery generated as art-directed healthcare photography (portrait/landscape crops matching the reference proportions), stored in `src/assets/`, lazy-loaded below the fold with explicit dimensions to avoid layout shift.
- SEO: route-level `head()` with title "Afzet Studio | Digital Growth Systems for Healthcare", the given meta description, og/twitter tags, relative canonical, and Organization JSON-LD. Semantic sections, single H1, alt text, keyboard-accessible controls.
- No animation libraries; no giant background images for gradients.

## QA pass

After the build: screenshot the page at 1440, 1024, 768 and 390 and check container width, section rhythm, headline scale, gradient seams, image integration and mobile recomposition against the reference before reporting done.
