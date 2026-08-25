import { Container } from "./ui";

const nav = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "About", href: "#about" },
];

export function Footer() {
  return (
    <footer className="grad-surface relative overflow-hidden bg-foreground pt-20">
      <Container>
        <div className="grid gap-12 pb-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-[family-name:var(--font-display)] text-lg text-background">
              afzet<span className="opacity-50">studio</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-background/60">
              Digital growth systems for modern healthcare businesses.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="text-[0.7rem] uppercase tracking-[0.18em] text-background/40">Explore</p>
            <ul className="mt-4 space-y-2">
              {nav.map((n) => (
                <li key={n.label}>
                  <a
                    href={n.href}
                    className="text-sm text-background/70 transition-colors duration-300 hover:text-background"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.18em] text-background/40">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-background/70">
              <li>
                <a
                  href="mailto:hello@afzet.studio"
                  className="transition-colors duration-300 hover:text-background"
                >
                  hello@afzet.studio
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors duration-300 hover:text-background">
                  Book a Strategy Call
                </a>
              </li>
              <li>
                <a href="#about" className="transition-colors duration-300 hover:text-background">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-background/10 py-6 text-[0.75rem] text-background/45">
          <p>&copy; {new Date().getFullYear()} Afzet Studio. All rights reserved.</p>
          <p>Healthcare digital growth studio</p>
        </div>
      </Container>

      <p
        aria-hidden="true"
        className="select-none px-6 pb-4 text-center font-[family-name:var(--font-display)] font-semibold leading-none tracking-tighter text-background/10 [font-size:clamp(4rem,17vw,15rem)]"
      >
        afzet studio
      </p>
    </footer>
  );
}
