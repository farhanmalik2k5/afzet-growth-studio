import { cn } from "@/lib/utils";
import { Container, Eyebrow, Reveal } from "./ui";
import type { Service } from "./services";

function ServiceCardOverlay({ serviceId }: { serviceId: string }) {
  if (serviceId === "patient-acquisition") {
    return (
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#7bf179]/20 text-[#2d6a4f]">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <polyline points="16 11 18 13 22 9" />
          </svg>
        </div>
        <div>
          <p className="text-[0.65rem] uppercase tracking-wider text-slate-500 font-semibold">QUALIFIED PATIENT LEADS</p>
          <p className="text-sm font-bold text-slate-900">+148 leads this month</p>
        </div>
      </div>
    );
  }

  if (serviceId === "website-conversion") {
    return (
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-[0.68rem] font-semibold text-slate-600">
          <span>Booking Funnel Conversion</span>
          <span className="text-[#2d6a4f]">4.8% (Top 1%)</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
          <div className="h-full w-[82%] rounded-full bg-[#7bf179]" />
        </div>
      </div>
    );
  }

  if (serviceId === "seo-aeo-geo") {
    return (
      <div className="flex items-center gap-2.5">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600">
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>
        <div>
          <p className="text-[0.65rem] uppercase tracking-wider text-slate-500 font-semibold">SEARCH DISCOVERY</p>
          <p className="text-xs font-bold text-slate-900">#1 Rank — Local &amp; AI Search</p>
        </div>
      </div>
    );
  }

  if (serviceId === "ai-automation") {
    return (
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          <span className="text-xs font-semibold text-slate-800">Auto Intake Active</span>
        </div>
        <span className="rounded bg-slate-100 px-2 py-0.5 text-[0.65rem] font-bold text-slate-600">
          Instant Response
        </span>
      </div>
    );
  }

  return (
    <div>
      <p className="text-[0.65rem] uppercase tracking-wider text-slate-500 font-semibold">RETENTION IMPACT</p>
      <p className="text-sm font-bold text-slate-900">94% Patient Satisfaction</p>
    </div>
  );
}

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
                <li key={c} className="text-[0.82rem] text-ink-soft/80 flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#7bf179]" />
                  {c}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-[0.82rem] font-semibold text-white shadow-md transition-all duration-300 hover:bg-slate-800 hover:scale-[1.02]"
            >
              Explore Solution
              <span aria-hidden="true">→</span>
            </a>
          </Reveal>

          <Reveal delay={120} className="relative">
            <figure
              className={cn(
                "group relative overflow-hidden rounded-[32px] shadow-2xl border border-slate-200/50 bg-white",
                flip ? "lg:-ml-4" : "lg:-mr-4",
              )}
            >
              <img
                src={service.image}
                alt={service.alt}
                width={1100}
                height={1100}
                loading="lazy"
                decoding="async"
                className="h-[360px] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04] sm:h-[480px]"
              />

              {/* Glassmorphism UI Badge overlay matching rise4.com reference */}
              <div
                className={cn(
                  "absolute bottom-6 w-[260px] sm:w-[280px] rounded-2xl border border-white/80 bg-white/92 p-4 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.4)] backdrop-blur-md transition-transform duration-300 group-hover:translate-y-[-4px]",
                  flip ? "right-6" : "left-6",
                )}
              >
                <ServiceCardOverlay serviceId={service.id} />
              </div>
            </figure>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
