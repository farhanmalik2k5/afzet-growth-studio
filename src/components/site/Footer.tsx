import { Container } from "./ui";

const nav = [
  { label: "Approach", href: "#approach" },
  { label: "Solutions", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Work", href: "#work" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-[#061009] pt-24 text-white">
      {/* ── Geometric dark background grid pattern at top ── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-15 select-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 15 C25 20, 20 25, 15 30 C20 35, 25 40, 30 45 C35 40, 40 35, 45 30 C40 25, 35 20, 30 15 Z' fill='none' stroke='%25237bf179' stroke-width='1.2'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
        aria-hidden="true"
      />

      {/* ── Intense Luminous Green Aurora Glow at Bottom (illuminating giant logo) ── */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[480px] select-none" aria-hidden="true">
        <div
          className="h-full w-full opacity-80"
          style={{
            background:
              "radial-gradient(ellipse at 50% 100%, rgba(123,241,121,0.65) 0%, rgba(45,138,78,0.45) 45%, rgba(12,40,22,0.1) 75%, transparent 100%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      <Container className="relative z-10">
        {/* ── Top Pill Badge ── */}
        <div className="flex justify-center">
          <div className="inline-block rounded-full bg-[#7bf179] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#051c0e] shadow-[0_0_20px_rgba(123,241,121,0.4)]">
            Get Started Today
          </div>
        </div>

        {/* ── Footer Navigation Grid matching reference layout ── */}
        <div className="mt-16 grid gap-10 pb-16 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Agency Links */}
          <div>
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#7bf179]">Agency</p>
            <ul className="mt-4 space-y-2.5">
              {nav.map((n) => (
                <li key={n.label}>
                  <a
                    href={n.href}
                    className="text-sm font-medium text-white/80 transition-colors duration-300 hover:text-white"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#7bf179]">Solutions</p>
            <ul className="mt-4 space-y-2.5 text-sm font-medium text-white/80">
              <li>
                <a href="#patient-acquisition" className="transition-colors hover:text-white">
                  Patient Acquisition
                </a>
              </li>
              <li>
                <a href="#website-conversion" className="transition-colors hover:text-white">
                  Website &amp; Conversion
                </a>
              </li>
              <li>
                <a href="#seo-aeo-geo" className="transition-colors hover:text-white">
                  SEO &amp; Discovery
                </a>
              </li>
              <li>
                <a href="#ai-automation" className="transition-colors hover:text-white">
                  AI &amp; Automation
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#7bf179]">Contact</p>
            <ul className="mt-4 space-y-2.5 text-sm font-medium text-white/80">
              <li>
                <a
                  href="mailto:hello@afzet.studio"
                  className="transition-colors duration-300 hover:text-white"
                >
                  hello@afzet.studio
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors duration-300 hover:text-white">
                  Book a Strategy Call
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Compliance Badge */}
          <div className="space-y-3 lg:text-right">
            <span className="inline-block rounded-md border border-[#7bf179]/40 bg-[#7bf179]/10 px-3 py-1 text-xs font-semibold text-[#7bf179]">
              100% HIPAA-Compliant
            </span>
            <p className="text-xs leading-relaxed text-white/70 max-w-xs lg:ml-auto">
              Digital growth infrastructure built exclusively for modern healthcare practice operators.
            </p>
          </div>
        </div>

        {/* ── Sub-footer Bar matching reference ── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/15 py-6 text-xs text-white/70">
          <p>&copy; {new Date().getFullYear()} Afzet Studio. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-6">
            {nav.map((n) => (
              <a key={n.label} href={n.href} className="transition-colors hover:text-white">
                {n.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2 text-xs font-bold text-slate-950 shadow-md backdrop-blur-sm transition-all hover:bg-slate-100 hover:scale-105"
          >
            Book a Demo
          </a>
        </div>
      </Container>

      {/* ── Giant Illuminated Green Watermark Brand Logo matching rise4.com reference ── */}
      <div
        aria-hidden="true"
        className="relative z-10 select-none overflow-hidden px-2 pt-6 pb-2 text-center"
      >
        <p
          className="font-[family-name:var(--font-display)] font-extrabold leading-none tracking-tighter text-white drop-shadow-[0_0_60px_rgba(123,241,121,0.6)] [font-size:clamp(5rem,21vw,18rem)]"
          style={{
            maskImage: "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
          }}
        >
          afzet<span className="font-light text-[#7bf179]">studio</span>
        </p>
      </div>
    </footer>
  );
}
