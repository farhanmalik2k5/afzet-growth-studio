import heroPortrait from "@/assets/hero-portrait.jpg";
import { Button, Container } from "./ui";

export function Hero() {
  return (
    <section id="top" className="grad-surface grain relative overflow-hidden">
      <div className="grad-layer grad-dark" aria-hidden="true" />

      <Container className="relative pb-24 pt-36 sm:pt-40 lg:pb-32 lg:pt-44">
        <div className="grid items-end gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div className="max-w-xl">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-background/20 px-3 py-1 text-[0.7rem] uppercase tracking-[0.16em] text-background/70">
              <span className="h-1.5 w-1.5 rounded-full bg-lime" />
              Healthcare digital growth studio
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-background [font-size:clamp(2.6rem,6.4vw,4.6rem)] [line-height:0.98]">
              Healthcare growth,
              <br />
              built around the
              <span className="text-lime"> patient</span>.
            </h1>
            <p className="mt-7 max-w-md text-[1.02rem] leading-relaxed text-background/70">
              Websites, patient acquisition, automation, SEO, and AI-powered systems designed to
              turn more of your digital traffic into real patients.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button href="#contact" variant="light">
                Build Your Growth System
              </Button>
              <a
                href="#approach"
                className="rounded-full border border-background/25 px-5 py-2.5 text-[0.82rem] font-medium text-background/85 transition-colors duration-300 hover:border-background/60"
              >
                See How We Work
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[28px] rounded-tr-[110px]">
              <img
                src={heroPortrait}
                alt="Healthcare professional in a modern clinic"
                width={1000}
                height={1200}
                fetchPriority="high"
                className="h-[420px] w-full object-cover object-top sm:h-[520px]"
              />
            </div>

            <div className="absolute -left-3 bottom-10 w-[190px] rounded-2xl bg-background/95 p-4 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.6)] backdrop-blur sm:-left-8">
              <p className="text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
                New patient enquiry
              </p>
              <div className="mt-3 space-y-2">
                <div className="h-1.5 w-full rounded-full bg-muted" />
                <div className="h-1.5 w-2/3 rounded-full bg-muted" />
              </div>
              <div className="mt-3 inline-flex rounded-full bg-lime px-2.5 py-1 text-[0.65rem] font-medium text-foreground">
                Booked
              </div>
            </div>

            <div className="absolute -right-2 top-8 hidden w-[160px] rounded-2xl bg-background/95 p-4 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.6)] backdrop-blur sm:block">
              <p className="text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
                Response time
              </p>
              <p className="mt-1 font-[family-name:var(--font-display)] text-2xl">&lt; 2 min</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
