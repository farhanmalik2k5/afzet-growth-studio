import { cn } from "@/lib/utils";
import { Container, Eyebrow, Reveal } from "./ui";
import type { Service } from "./services";

export function ServiceSection({ service, flip }: { service: Service; flip: boolean }) {
  return (
    <section
      id={service.id}
      aria-labelledby={`${service.id}-title`}
      className="grad-surface relative overflow-hidden py-20 lg:py-28"
    >
      <div className={cn("grad-layer", service.gradient)} aria-hidden="true" />
      <Container>
        <div
          className={cn(
            "grid items-center gap-12 lg:grid-cols-2 lg:gap-20",
            flip && "lg:[&>*:first-child]:order-2",
          )}
        >
          <Reveal className="max-w-lg">
            <Eyebrow>
              Service {service.index} — {service.title}
            </Eyebrow>
            <h3
              id={`${service.id}-title`}
              className="mt-5 font-[family-name:var(--font-display)] [font-size:clamp(1.7rem,3.4vw,2.6rem)]"
            >
              {service.tagline}
            </h3>
            <p className="mt-5 text-[0.98rem] leading-relaxed text-ink-soft">{service.body}</p>

            <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
              {service.capabilities.map((c) => (
                <li key={c} className="text-[0.82rem] text-ink-soft/80">
                  {c}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-[0.82rem] font-medium text-background transition-colors duration-300 hover:bg-foreground/85"
            >
              {service.cta}
              <span aria-hidden="true">→</span>
            </a>
          </Reveal>

          <Reveal delay={120} className="relative">
            <figure
              className={cn(
                "group relative overflow-hidden rounded-[26px]",
                flip ? "rounded-bl-[96px] lg:-ml-6" : "rounded-tr-[96px] lg:-mr-6",
              )}
            >
              <img
                src={service.image}
                alt={service.alt}
                width={1100}
                height={1100}
                loading="lazy"
                decoding="async"
                className="h-[340px] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04] sm:h-[460px]"
              />
            </figure>

            <div
              className={cn(
                "absolute bottom-6 w-[200px] rounded-2xl bg-background/92 p-4 shadow-[0_24px_60px_-34px_rgba(0,0,0,0.55)] backdrop-blur",
                flip ? "-right-2 lg:right-4" : "-left-2 lg:left-4",
              )}
            >
              <p className="text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
                {service.card.label}
              </p>
              <p className="mt-1.5 font-[family-name:var(--font-display)] text-xl tracking-tight">
                {service.card.value}
              </p>
              <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-muted">
                <div className="h-full w-2/3 rounded-full bg-lime" />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
