import { Container, Reveal } from "./ui";

function ApolloLogo() {
  return (
    <div className="flex items-center gap-1.5 opacity-65 grayscale transition-all hover:opacity-100 hover:grayscale-0">
      <svg className="h-6 w-6 text-slate-700" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C9 5 5 7 5 12c0 3.5 2 6 5 7-2-2-3-4-3-7 0-3.5 2-6 5-10z" />
        <path d="M12 2c3 3 7 5 7 10 0 3.5-2 6-5 7 2-2 3-4 3-7 0-3.5-2-6-5-10z" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="font-serif text-lg font-bold tracking-tight text-slate-800">apollo</span>
        <span className="text-[0.55rem] tracking-widest text-slate-500 uppercase">TMS therapy</span>
      </div>
    </div>
  );
}

function CloudTmsLogo() {
  return (
    <div className="flex items-center gap-1.5 opacity-65 grayscale transition-all hover:opacity-100 hover:grayscale-0">
      <span className="font-sans text-sm font-extrabold tracking-tight text-slate-800 uppercase">CLOUD</span>
      <svg className="h-5 w-5 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        <path d="M12 11v4m-2-2h4" strokeWidth="1.8" />
      </svg>
      <span className="text-[0.65rem] font-bold text-slate-600 uppercase">TMS</span>
    </div>
  );
}

function MagstimLogo() {
  return (
    <div className="opacity-65 grayscale transition-all hover:opacity-100 hover:grayscale-0">
      <span className="font-sans text-base font-black tracking-tighter text-slate-800 lowercase">
        magstim
      </span>
    </div>
  );
}

function MagVentureLogo() {
  return (
    <div className="opacity-65 grayscale transition-all hover:opacity-100 hover:grayscale-0">
      <span className="font-sans text-base font-black text-slate-800">
        Mag<span className="font-normal italic">Venture</span>
      </span>
    </div>
  );
}

function NextSimLogo() {
  return (
    <div className="flex flex-col leading-none opacity-65 grayscale transition-all hover:opacity-100 hover:grayscale-0">
      <span className="font-sans text-base font-bold text-slate-800">NextSim</span>
      <span className="text-[0.45rem] tracking-tight text-slate-500">Next generation of behavioral health</span>
    </div>
  );
}

function JnjLogo() {
  return (
    <div className="opacity-65 grayscale transition-all hover:opacity-100 hover:grayscale-0">
      <span className="font-serif text-lg font-bold tracking-wider text-slate-800">J&amp;J</span>
    </div>
  );
}

export function TrustStrip() {
  return (
    <section className="bg-white py-10 border-b border-slate-100" aria-label="Preferred Growth Partners">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <p className="max-w-[180px] text-[0.8rem] font-medium leading-snug text-slate-500">
            Preferred Growth Partners by the Industry's Best
          </p>
          <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-6 lg:gap-x-12 flex-1 max-w-4xl">
            <ApolloLogo />
            <CloudTmsLogo />
            <MagstimLogo />
            <MagVentureLogo />
            <NextSimLogo />
            <JnjLogo />
          </div>
        </div>
      </Container>
    </section>
  );
}

export function MetricsSection() {
  return (
    <section id="approach" className="relative overflow-hidden bg-[#f4faf5] py-24 lg:py-36">
      {/* Background Geometric Helix/Star Pattern on Left */}
      <div 
        className="pointer-events-none absolute top-0 bottom-0 left-0 w-1/2 opacity-30 select-none" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 15 C25 20, 20 25, 15 30 C20 35, 25 40, 30 45 C35 40, 40 35, 45 30 C40 25, 35 20, 30 15 Z M15 30 C20 25, 25 20, 30 15 C25 10, 20 5, 15 0 C10 5, 5 10, 0 15 C5 20, 10 25, 15 30 Z M45 30 C50 25, 55 20, 60 15 C55 10, 50 5, 45 0 C40 5, 35 10, 30 15 C35 20, 40 25, 45 30 Z' fill='none' stroke='%25232d6a4f' stroke-width='1.2' stroke-opacity='0.25'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          maskImage: 'linear-gradient(to right, black 0%, black 50%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, black 0%, black 50%, transparent 100%)',
        }}
      />

      <Container className="relative z-10">
        <Reveal className="max-w-4xl">
          <h2 className="font-[family-name:var(--font-display)] text-[2.2rem] sm:text-[3rem] lg:text-[4rem] font-bold leading-[1.12] tracking-tight text-slate-900">
            <span className="font-[family-name:var(--font-serif)] font-normal italic text-[#2d6a4f] pr-2">
              Attract
            </span>
            more patients,{" "}
            <span className="font-[family-name:var(--font-serif)] font-normal italic text-[#2d6a4f] px-2">
              optimize
            </span>
            operations, and{" "}
            <span className="font-[family-name:var(--font-serif)] font-normal italic text-[#2d6a4f] px-2">
              achieve
            </span>
            measurable growth with HIPAA-compliant systems
          </h2>
        </Reveal>

        {/* 150% Stat Callout matching reference */}
        <Reveal delay={120} className="mt-16 sm:mt-20">
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-6 border-t border-emerald-900/10 pt-10">
            <span className="font-[family-name:var(--font-display)] text-[3.8rem] sm:text-[4.5rem] font-extrabold leading-none tracking-tight text-slate-900">
              150%
            </span>
            <div className="flex flex-col">
              <span className="text-[0.78rem] font-semibold uppercase tracking-wider text-[#2d6a4f]">
                AVERAGE INCREASE
              </span>
              <span className="text-[0.9rem] font-medium leading-snug text-slate-600 max-w-[240px]">
                in patient inquiry-to-consultation conversion rate
              </span>
            </div>
          </div>
        </Reveal>
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
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[#2d6a4f]">Services</p>
          <h2 className="mt-5 font-[family-name:var(--font-display)] [font-size:clamp(2rem,4.4vw,3.4rem)]">
            More than a website. A complete digital growth system.
          </h2>
          <p className="mt-6 max-w-xl text-[1rem] leading-relaxed text-ink-soft">
            From the first Google search to the booked appointment, we build the digital
            infrastructure that helps healthcare businesses attract, convert, and retain patients.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
