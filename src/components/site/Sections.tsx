import { Button, Container, Eyebrow, Reveal } from "./ui";

const categories = [
  "Med Spas",
  "Dental",
  "Dermatology",
  "Physiotherapy",
  "Mental Health",
  "Private Practices",
];

export function TrustStrip() {
  return (
    <section className="grad-surface relative overflow-hidden py-14" aria-label="Who we work with">
      <div className="grad-layer grad-cream" aria-hidden="true" />
      <Container>
        <Reveal>
          <p className="text-center text-[0.72rem] uppercase tracking-[0.2em] text-muted-foreground">
            Built for modern healthcare businesses
          </p>
          <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {categories.map((c) => (
              <li
                key={c}
                className="font-[family-name:var(--font-display)] text-[0.95rem] tracking-tight text-foreground/55 transition-colors duration-300 hover:text-foreground"
              >
                {c}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}

const metrics = [
  { value: "[RESULT]", label: "Patient acquisition improvement" },
  { value: "[RESULT]", label: "Conversion improvement" },
  { value: "[RESULT]", label: "Hours saved through automation" },
  { value: "[RESULT]", label: "Return visits & referrals" },
];

export function MetricsSection() {
  return (
    <section id="approach" className="grad-surface relative overflow-hidden py-24 lg:py-32">
      <div className="grad-layer grad-green" aria-hidden="true" />
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal>
            <h2 className="max-w-[15ch] font-[family-name:var(--font-display)] [font-size:clamp(2rem,4.2vw,3.3rem)]">
              Attract more patients. Convert more of them. Build systems that keep working.
            </h2>
          </Reveal>
          <Reveal delay={120} className="self-end">
            <p className="max-w-md text-[1rem] leading-relaxed text-ink-soft">
              Afzet Studio combines conversion-focused websites, search visibility, automation, and
              patient experience systems to create a stronger digital growth engine for healthcare
              businesses.
            </p>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-x-10 gap-y-10 border-t border-foreground/10 pt-12 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <Reveal as="li" key={m.label} delay={i * 90}>
              <p className="font-[family-name:var(--font-display)] text-[1.9rem] tracking-tight">
                {m.value}
              </p>
              <p className="mt-2 max-w-[22ch] text-sm leading-relaxed text-ink-soft">{m.label}</p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function ServicesIntro() {
  return (
    <section id="services" className="grad-surface relative overflow-hidden py-24 lg:py-32">
      <div className="grad-layer grad-cream" aria-hidden="true" />
      <Container>
        <Reveal className="max-w-3xl">
          <Eyebrow>Services</Eyebrow>
          <h2 className="mt-5 font-[family-name:var(--font-display)] [font-size:clamp(2rem,4.4vw,3.4rem)]">
            More than a website. A complete digital growth system.
          </h2>
          <p className="mt-6 max-w-xl text-[1rem] leading-relaxed text-ink-soft">
            From the first Google search to the booked appointment, we build the digital
            infrastructure that helps healthcare businesses attract, convert, and retain patients.
          </p>
          <div className="mt-8">
            <Button href="#contact" variant="outline">
              Book a Strategy Call
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
