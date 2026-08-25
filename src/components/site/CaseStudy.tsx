import caseImage from "@/assets/case-study.jpg";
import { Container, Eyebrow, Reveal } from "./ui";

const metrics = [
  { value: "[X]%", label: "Increase in qualified leads" },
  { value: "[X]%", label: "Improvement in conversion" },
  { value: "[X]", label: "Hours saved per month" },
];

export function CaseStudy() {
  return (
    <section id="work" className="grad-surface relative overflow-hidden py-24 lg:py-32">
      <div className="grad-layer grad-green" aria-hidden="true" />
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow>Selected work</Eyebrow>
          <h2 className="mt-5 font-[family-name:var(--font-display)] [font-size:clamp(2rem,4.2vw,3.2rem)]">
            Built to create measurable growth.
          </h2>
        </Reveal>

        <Reveal delay={100} className="mt-14">
          <article className="grid gap-10 overflow-hidden rounded-[30px] bg-background/70 p-6 backdrop-blur-sm sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
            <figure className="group overflow-hidden rounded-[22px]">
              <img
                src={caseImage}
                alt="Interior of a premium med spa treatment room"
                width={1400}
                height={1000}
                loading="lazy"
                decoding="async"
                className="h-[280px] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03] sm:h-[380px]"
              />
            </figure>

            <div className="flex flex-col justify-between">
              <div>
                <p className="text-[0.72rem] uppercase tracking-[0.18em] text-muted-foreground">
                  Client Name
                </p>
                <blockquote className="mt-4 font-[family-name:var(--font-display)] text-[1.35rem] leading-snug tracking-tight">
                  &ldquo;[Short testimonial placeholder — describing the working relationship and
                  the impact on the practice.]&rdquo;
                </blockquote>
                <p className="mt-3 text-sm text-ink-soft">[Name], [Role] — [Practice]</p>
              </div>

              <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-foreground/10 pt-6">
                {metrics.map((m) => (
                  <div key={m.label}>
                    <dt className="sr-only">{m.label}</dt>
                    <dd className="font-[family-name:var(--font-display)] text-[1.6rem] tracking-tight">
                      {m.value}
                    </dd>
                    <p className="mt-1 text-[0.75rem] leading-snug text-ink-soft">{m.label}</p>
                  </div>
                ))}
              </dl>

              <a
                href="#contact"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-[0.82rem] font-medium text-background transition-colors duration-300 hover:bg-foreground/85"
              >
                View Case Study <span aria-hidden="true">→</span>
              </a>
            </div>
          </article>
        </Reveal>
      </Container>
    </section>
  );
}
