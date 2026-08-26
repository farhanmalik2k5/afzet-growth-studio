import { Container, Reveal } from "./ui";

export function FinalCTA() {
  return (
    <section id="contact" className="grad-dark grain relative overflow-hidden py-28 lg:py-40">
      <div
        className="pointer-events-none absolute inset-[-30%_-12%] z-[-1]"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(55% 55% at 18% 20%, oklch(0.88 0.14 128 / 0.22), transparent 65%), " +
            "radial-gradient(50% 50% at 85% 78%, oklch(0.92 0.06 165 / 0.16), transparent 65%)",
          filter: "blur(80px)",
        }}
      />
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-[family-name:var(--font-display)] text-background [font-size:clamp(2.2rem,5vw,3.8rem)]">
            Ready to build a better growth system?
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-[1rem] leading-relaxed text-background/70">
            Let's turn your website, marketing, and patient journey into one connected system.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:hello@afzet.studio"
              className="rounded-full bg-background px-6 py-3 text-[0.85rem] font-medium text-foreground transition-opacity duration-300 hover:opacity-85"
            >
              Book a Strategy Call
            </a>
            <a
              href="#work"
              className="rounded-full border border-background/25 px-6 py-3 text-[0.85rem] font-medium text-background/85 transition-colors duration-300 hover:border-background/60"
            >
              See Our Work
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
