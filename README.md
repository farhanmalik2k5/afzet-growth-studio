# Afzet Growth Studio

ROLE

Act as a senior creative director, UX/UI designer, conversion-focused web designer, and frontend engineer.

I am building the new homepage for Afzet Studio, a healthcare-focused digital growth studio.

I am providing you with:

A screenshot of the website I want to use as the primary visual reference.

The live reference website: https://rise4.com/

Your task is to build the Afzet Studio homepage using the reference website as the visual and structural inspiration.

The screenshot is the primary visual source of truth. The live Rise4 website is the secondary source of truth for understanding layout behavior, spacing, interactions, animations, section sequencing, image treatment, typography hierarchy, navigation behavior, and responsive behavior.

Do NOT simply create a generic healthcare agency website.

I want the final result to feel extremely close to the reference in terms of:

Overall visual language

Layout

Section composition

Typography hierarchy

Spacing

Grid system

Image positioning

Rounded corners

Button treatment

Navigation

Gradient transitions

Background effects

Section rhythm

Visual density

Animations

Scroll experience

Mobile behavior

However, do not copy Rise4’s brand identity, proprietary copy, testimonials, logos, claims, or company-specific content. Replace all of those with Afzet Studio’s own content and positioning.

1. PROJECT SCOPE — IMPORTANT

For this first iteration:

BUILD ONLY THE HOMEPAGE.

Do NOT create:

About page

Services pages

Case study pages

Blog

Contact page

Pricing page

Dashboard

CMS

Authentication

Ecommerce

Other unnecessary routes

The homepage should be built in a way that makes those pages easy to add later, but do not build them now.

Focus the majority of effort on making the homepage exceptionally polished.

2. BRAND

Company

Afzet Studio

Positioning

Afzet Studio is a healthcare-focused digital growth studio helping healthcare businesses attract, convert, and retain more patients through better websites, automation, SEO, AI-powered systems, and conversion-focused digital infrastructure.

The positioning should feel:

Premium

Modern

Clinical

Intelligent

Trustworthy

Technology-forward

Human

Sophisticated

Conversion-focused

Avoid making it look like:

A generic SaaS company

A generic marketing agency

A cheap web-design freelancer

A stereotypical medical website

An overly corporate healthcare company

The visual identity should sit somewhere between premium healthcare + modern technology + high-end creative studio.

3. CORE VISUAL DIRECTION

Use the attached screenshot as the strongest visual reference.

I want a long-form editorial landing page with large sections flowing vertically into each other.

The page should NOT feel like a collection of isolated white cards.

Instead, it should feel like one continuous visual experience, with large full-width gradient environments transitioning from one section to the next.

The design should use:

Large typography

Generous whitespace

Very clean layouts

Soft organic gradients

Large editorial imagery

Rounded image containers

Subtle floating UI elements

Minimal borders

Very subtle shadows

Strong contrast

Large visual sections

Small, restrained buttons

Premium micro-interactions

4. COLOR SYSTEM

Use the reference site’s overall color philosophy.

The background should primarily use:

Near-black / deep charcoal

Off-white

Soft mint

Lime / neon green

Pale green

Cyan

Soft blue

Lavender

Pink

Coral

Peach

Warm cream

Do NOT use harsh saturated gradients.

The gradients must feel:

soft + atmospheric + premium + slightly organic.

Avoid the typical AI-generated gradient look.

Do NOT make gradients look like simple:

linear-gradient(red, blue)

Instead, create layered gradients using combinations of:

radial-gradient

linear-gradient

multiple background layers

very large blurred gradient shapes

pseudo-elements

subtle opacity

soft color transitions

optional subtle grain/noise

The gradients should have large, slow transitions across the entire viewport width.

5. VERY IMPORTANT — GRADIENT IMPLEMENTATION

This is one of the most important parts of the website.

Do NOT create each background as a flat rectangle.

The reference has an atmospheric feeling where colors appear to blend naturally.

Implement the backgrounds using reusable CSS gradient systems.

For example, use multiple oversized blurred radial gradients positioned outside/around the viewport combined with a base linear gradient.

The gradient should:

Extend beyond the section boundaries

Blend naturally into neighboring colors

Avoid obvious hard edges

Avoid visible horizontal bands

Avoid repeating patterns

Maintain smooth color interpolation

Look good at different screen sizes

Not interfere with text readability

Use pseudo-elements or absolutely positioned decorative gradient blobs where appropriate.

Keep them behind the content.

Use:

pointer-events: none

for purely decorative elements.

The gradients must remain performant.

Do NOT use huge background images just to simulate gradients.

Prefer CSS gradients.

6. TYPOGRAPHY

Inspect the reference website and screenshot carefully before choosing typography.

Match the typographic personality and proportions of the reference rather than simply choosing a random modern font.

Use a clean contemporary sans-serif.

Typography should have:

Tight large headlines

Strong hierarchy

Medium/semibold headings

Comfortable body text

Small uppercase labels where appropriate

Restrained line lengths

The hero headline should be large and editorial.

Avoid excessive font weights.

Avoid excessive text.

The page should feel visually spacious.

Use clamp() for responsive typography rather than fixed desktop sizes.

Example philosophy:

Huge desktop hero headline

Scaled tablet headline

Controlled mobile headline

Comfortable body copy

Tight heading line-height

7. NAVIGATION

Create a navigation closely inspired by the reference.

Desktop:

Afzet Studio logo/wordmark on the left

Minimal navigation links in the center/right

Primary CTA on the right

Very clean spacing

No bulky navbar

No unnecessary icons

Suggested navigation:

Work
Services
Approach
About

Primary CTA:

Book a Strategy Call

The navbar should feel lightweight and premium.

Make it responsive.

On mobile, convert it into a clean hamburger/menu interaction.

The navbar should remain visually unobtrusive while scrolling.

8. HERO SECTION

The hero should follow the reference composition very closely.

Large visual opening section.

Suggested headline:

Healthcare growth, built around the patient.

Alternative direction if the visual composition requires it:

We build the digital systems that help healthcare businesses grow.

Supporting copy:

Websites, patient acquisition, automation, SEO, and AI-powered systems designed to turn more of your digital traffic into real patients.

Primary CTA:

Build Your Growth System

Secondary CTA:

See How We Work

The hero should contain a strong visual composition rather than simply text floating in empty space.

Use high-quality healthcare imagery and/or abstract digital UI elements.

The hero image should be treated similarly to the reference:

Subject positioned intentionally

Large image

Rounded edges where appropriate

Layered composition

Subtle floating elements

Gradient environment behind the image

Strong integration between image and background

Do NOT use generic stock-photo collage layouts.

9. TRUST / SOCIAL PROOF STRIP

Immediately below the hero, create a section inspired by the reference’s partner/logo strip.

For Afzet Studio, do not invent partnerships.

Instead, create a credibility section that can use:

“Built for modern healthcare businesses”

Healthcare categories

Technology/tool ecosystem

Client logos if actual assets are later provided

For now, use tasteful placeholder partner/category marks only if necessary and clearly structure the section so they can easily be replaced.

Potential categories:

Med Spas · Dental · Dermatology · Physiotherapy · Mental Health · Private Practices

Keep this section visually subtle.

10. RESULTS / VALUE SECTION

Create a large statement section inspired by the reference’s metrics section.

Headline direction:

Attract more patients. Convert more of them. Build systems that keep working.

Supporting copy:

Afzet Studio combines conversion-focused websites, search visibility, automation, and patient experience systems to create a stronger digital growth engine for healthcare businesses.

Then show 3–4 large metrics/value statements.

IMPORTANT:

Do NOT invent fake performance claims.

Do not write things like:

“150% more patients”

or

“23x ROI”

unless I provide actual verified Afzet Studio data.

Instead use editable placeholders such as:

[RESULT]
Patient acquisition improvement

[RESULT]
Conversion improvement

[RESULT]
Hours saved through automation

These should be extremely easy to replace later.

11. SERVICES INTRODUCTION

Create a section similar in visual hierarchy to the reference’s:

“More than marketing…” section.

Suggested headline:

More than a website. A complete digital growth system.

Supporting copy:

From the first Google search to the booked appointment, we build the digital infrastructure that helps healthcare businesses attract, convert, and retain patients.

Then introduce the services.

12. SERVICE SECTIONS

This is one of the most important sections.

Use the reference website’s approach of giving each service its own large visual environment.

Instead of creating six generic service cards, create large full-width editorial service sections.

Each section should contain:

Small service label

Large service title

Short paragraph

Small CTA

Large visual/image/UI composition

Distinct soft gradient background

Generous vertical spacing

The visual composition should alternate left/right as the user scrolls.

Use the following services:

SERVICE 01

Patient Acquisition

Bring more of the right patients through the door.

Build digital acquisition systems that connect your healthcare business with people actively looking for the services you provide.

Include:

Search

Paid acquisition

Landing pages

Conversion strategy

Lead capture

Campaign optimization

CTA:

Explore Patient Acquisition

Visual direction:

Healthcare professional/patient imagery combined with subtle lead-generation UI.

Background:

Soft green / lime gradient.

SERVICE 02

Website & Conversion Systems

Turn your website into your best-performing front desk.

We design and develop premium healthcare websites that communicate trust, answer patient questions, and turn attention into action.

Include:

Website design

Development

Conversion UX

Mobile optimization

Speed optimization

Lead capture

CTA:

Build Your Website

Visual direction:

Show a premium healthcare website interface on desktop/mobile devices.

Background:

Soft cyan / aqua gradient.

SERVICE 03

SEO, AEO & GEO

Be visible wherever patients search.

Build long-term search visibility across traditional search engines, answer engines, and AI-powered discovery.

Include:

Technical SEO

Local SEO

AEO

GEO

Structured content

Schema

Google Business optimization

CTA:

Improve Your Visibility

Visual direction:

Search interface / content / analytics composition.

Background:

Soft lavender / purple / blue gradient.

SERVICE 04

AI & Workflow Automation

Give your team fewer things to manage.

Automate repetitive administrative and patient communication workflows so your team can spend more time doing higher-value work.

Include:

Lead response

Follow-ups

Appointment reminders

Intake workflows

AI assistants

Internal automation

CRM workflows

CTA:

Automate Your Practice

Visual direction:

Healthcare workflow UI with connected nodes, messages, forms, or automation interface.

Background:

Soft coral / pink gradient.

SERVICE 05

Patient Retention & Reputation

Turn great patient experiences into long-term growth.

Build systems that improve follow-up, reviews, referrals, retention, and patient communication.

Include:

Review requests

Reputation systems

Follow-ups

Reactivation

Patient education

Retention workflows

CTA:

Improve Retention

Visual direction:

Patient interaction / review / communication UI.

Background:

Warm peach / orange gradient.

SERVICE 06

Analytics & Optimization

Know what is working. Then make it better.

Connect your digital systems with meaningful analytics so decisions are based on actual patient and business behavior.

Include:

Conversion tracking

Funnel analytics

Performance reporting

UX optimization

A/B testing

Growth insights

CTA:

Optimize Your Growth

Visual direction:

Clean analytics dashboard integrated into healthcare imagery.

Background:

Soft warm cream / pale yellow.

13. SERVICE IMAGE TREATMENT

Images should NOT simply sit inside rectangular cards.

Follow the reference’s editorial treatment.

Use:

Large rounded image containers

Images overlapping the gradient environment

Subtle floating UI cards

Layered screenshots

Slight offsets

Controlled shadows

Organic positioning

Some visuals can extend outside their normal grid slightly.

The result should feel art-directed rather than template-generated.

14. “WHY AFZET” SECTION

Create a section inspired by the reference’s philosophy/partner section.

Headline:

Partners in growth. Built for healthcare.

Copy:

Healthcare businesses don’t need another disconnected marketing vendor. They need a digital partner who understands the patient journey, the business behind the practice, and the systems connecting the two.

Then create a visual collage.

Use small rounded images/cards distributed around the central content.

The composition should feel dynamic and editorial.

Do not make it look like a standard “Why choose us” three-column section.

15. CASE STUDIES / SOCIAL PROOF

Create a case-study section inspired by the reference.

Headline:

Built to create measurable growth.

Include one primary featured case study area.

IMPORTANT:

Do not invent client names, testimonials, revenue figures, or results.

Use placeholders such as:

Client Name

[X]% increase in qualified leads

[X]% improvement in conversion

[X] hours saved per month

These should be clearly editable.

Design it as a large visual case study rather than a standard card grid.

Include:

Client image/screenshot

Short testimonial placeholder

Metrics

Case study CTA

CTA:

View Case Study

16. FINAL CTA

Create a large dark section inspired by the reference’s closing CTA.

Use:

Deep green/black background

Very subtle pattern/noise

Soft green glow

Large white headline

Strong CTA

Headline:

Ready to build a better growth system?

Supporting copy:

Let’s turn your website, marketing, and patient journey into one connected system.

CTA:

Book a Strategy Call

Secondary:

See Our Work

The CTA section should feel like a strong visual ending rather than another ordinary section.

17. FOOTER

Create a minimal premium footer.

Include:

Afzet Studio

Short description:

Digital growth systems for modern healthcare businesses.

Navigation:

Work

Services

Approach

About

Contact:

Email

Book a Strategy Call

Social links can be included as placeholders if needed.

Keep the footer visually minimal.

18. ANIMATION & INTERACTION

The reference has a polished, modern scrolling experience.

Implement subtle animations.

Use:

Fade-up on scroll

Slight image reveal

Gentle image movement

Gradient movement where appropriate

Subtle button hover

Navigation transitions

Image scale on hover

Small floating UI animations

Animations should be:

slow + subtle + premium

Do NOT use:

Excessive bouncing

Aggressive parallax

Constant movement

Overly dramatic text animations

Distracting effects

Use CSS transitions and lightweight animation wherever possible.

Respect:

prefers-reduced-motion

19. SCROLL EXPERIENCE

The entire homepage should feel like a continuous story:

Hero

Credibility

Results/value

Services introduction

Patient Acquisition

Website & Conversion

SEO/AEO/GEO

AI & Automation

Retention/Reputation

Analytics/Optimization

Why Afzet

Case Study

Final CTA

Footer

The transition between sections is extremely important.

Avoid making each section look like an independent webpage.

20. RESPONSIVE DESIGN

Desktop is the primary design reference, but the site must be excellent on:

1440px+

1280px

1024px

768px

390px

375px

On mobile:

Maintain the same visual identity

Do not simply shrink the desktop layout

Recompose image/text layouts intelligently

Stack service sections naturally

Preserve gradient environments

Maintain generous spacing

Prevent text from becoming too small

Ensure buttons are easy to tap

Keep images visually impactful

The mobile version should feel intentionally designed.

21. IMAGE / ASSET INSTRUCTIONS

You have access to the reference URL:

https://rise4.com/

Inspect the reference site to understand:

Image composition

Image proportions

Image placement

Image cropping

Image treatment

UI mockup style

Visual hierarchy

If the reference site contains assets that are publicly accessible and appropriate to use as inspiration, analyze them to understand the intended visual treatment.

However:

Do not copy Rise4’s company logos, testimonials, proprietary graphics, or branding into Afzet Studio.

For Afzet Studio, use:

Any assets I provide.

Appropriate high-quality healthcare imagery.

Original UI mockups created for the site.

Abstract visual elements where photography is unnecessary.

Do not use low-quality generic stock imagery.

Avoid obvious cliché healthcare stock photos.

22. COMPONENT ARCHITECTURE

Keep the code clean and reusable.

Create reusable components such as:

Navbar

Button

Hero

TrustStrip

MetricsSection

ServicesIntro

ServiceSection

ImageComposition

WhyAfzet

CaseStudy

FinalCTA

Footer

Create a reusable gradient system rather than manually creating unrelated CSS for every section.

For example:

gradient-green

gradient-cyan

gradient-purple

gradient-coral

gradient-peach

gradient-cream

gradient-dark

But make each gradient sophisticated rather than a simple two-color gradient.

23. PERFORMANCE

This must remain a high-performance website.

Prioritize:

Optimized images

Lazy loading below-the-fold images

Responsive image sizing

Minimal JavaScript

CSS-based effects where possible

No unnecessary libraries

No giant background images for gradients

No excessive animation libraries

Good Core Web Vitals

Avoid layout shift

Do not sacrifice performance for visual effects.

24. SEO FOUNDATION

Even though we are only building the homepage, make it technically SEO-friendly.

Include:

Proper semantic HTML

One clear H1

Logical H2/H3 hierarchy

Descriptive image alt text

Metadata

Open Graph metadata

Proper title

Meta description

Canonical URL placeholder

Organization/LocalBusiness schema where appropriate

Clean URLs

Accessible buttons/links

Keyboard navigation

Good color contrast

Suggested title:

Afzet Studio | Digital Growth Systems for Healthcare

Suggested meta description:

Afzet Studio builds websites, acquisition systems, AI automation, SEO, and patient growth infrastructure for modern healthcare businesses.

25. CONVERSION UX

This is not just a visual clone.

The website needs to convert visitors.

The main CTA throughout the website should be:

Book a Strategy Call

Use CTA repetition strategically.

Do not put a CTA on every line.

The page should naturally answer:

What does Afzet Studio do?

Who is it for?

Why should I trust them?

What can they actually help me with?

What makes them different?

What results can they create?

What should I do next?

26. VERY IMPORTANT — DO NOT GENERATE GENERIC AI DESIGN

Avoid common Lovable/AI-generated website patterns:

❌ Huge rounded cards everywhere
❌ Glassmorphism everywhere
❌ Excessive shadows
❌ Generic blue healthcare palette
❌ Purple SaaS gradients
❌ 3-column feature grids everywhere
❌ Giant floating dashboard mockups without purpose
❌ Excessive pills
❌ Excessive icons
❌ Every section on a white background
❌ Generic centered hero
❌ Stock-photo collage
❌ Overly rounded buttons
❌ Excessive borders
❌ Random decorative blobs

The reference design is editorial, art-directed, minimal and spatial.

Match that.

27. REFERENCE FIDELITY

Before writing the final code, carefully inspect the attached screenshot and the reference website.

Analyze:

Navbar height

Container width

Horizontal margins

Typography scale

Headline width

Paragraph width

Button dimensions

Section heights

Image sizes

Image corner radius

Spacing between sections

Gradient behavior

Position of decorative elements

Alignment

Visual rhythm

Desktop/mobile behavior

Then reproduce those proportions for Afzet Studio.

Do NOT interpret the reference as merely “a colorful healthcare website.”

I want the same design philosophy and composition quality, adapted to Afzet Studio.

28. ITERATIVE QUALITY CONTROL

After the first implementation, do a visual QA pass.

Check the website against the provided screenshot.

Specifically inspect:

Layout

Is the container width correct?

Are sections too compressed?

Is there enough whitespace?

Are images positioned correctly?

Does the page have the same visual rhythm?

Typography

Are headlines large enough?

Are line lengths similar?

Is the hierarchy strong?

Is the typography too generic?

Gradients

Are gradients smooth?

Are there hard horizontal edges?

Do they look artificial?

Do neighboring sections transition naturally?

Images

Do images feel integrated?

Are they too small?

Are they generic?

Are their crops intentional?

Animation

Is it subtle?

Does it improve the experience?

Is anything distracting?

Mobile

Does the layout remain premium?

Are gradients still attractive?

Are images properly recomposed?

Is the typography readable?

29. MOST IMPORTANT PRIORITY ORDER

When making design decisions, prioritize in this exact order:

Visual fidelity to the provided reference

Premium art direction

Typography and spacing

Gradient quality

Image composition

Responsive behavior

Conversion UX

Accessibility

SEO

Code cleanliness

Do not compromise the visual quality by trying to add unnecessary functionality.

30. FINAL INSTRUCTION

Start by building ONLY the homepage.

Do not ask me to approve every section individually.

Use the attached screenshot and reference website to make the design decisions yourself.

Do not produce a generic approximation.

Build a polished, production-quality homepage for Afzet Studio that feels like the same caliber of design as the reference, while using Afzet Studio’s own:

Brand

Copy

Services

Positioning

Healthcare focus

CTAs

Content

Future scalability

The final result should look like a premium healthcare growth studio that could confidently charge premium prices.

Make the first version visually ambitious, but keep the implementation clean, performant, responsive, and easy to iterate on.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/9694fd67-747e-4589-a42a-5d2cb819011a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
