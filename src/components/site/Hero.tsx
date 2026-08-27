import heroMan from "@/assets/hero-man-nobg.png";
import { Container } from "./ui";

/* ── Icon components ── */

function ScanIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
      <circle cx="12" cy="10" r="3" />
      <path d="M7 17a5 5 0 0 1 10 0" />
    </svg>
  );
}

function CloudIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
}

function TargetIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="2" x2="12" y2="4" />
      <line x1="12" y1="20" x2="12" y2="22" />
      <line x1="2" y1="12" x2="4" y2="12" />
      <line x1="20" y1="12" x2="22" y2="12" />
    </svg>
  );
}

function ChartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="6" y1="18" x2="6" y2="14" />
      <line x1="12" y1="18" x2="12" y2="9" />
      <line x1="18" y1="18" x2="18" y2="5" />
    </svg>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen min-h-[100dvh] flex-col overflow-hidden bg-[#070b0a]"
    >
      {/* ── AURORA GLOW ── */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <div
          className="absolute rounded-full"
          style={{
            width: "min(1100px, 140vw)",
            height: "min(1100px, 140vw)",
            top: "42%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle at 50% 50%, rgba(7,11,10,0) 20%, rgba(56,189,248,0.35) 38%, rgba(123,241,121,0.50) 48%, rgba(234,179,8,0.32) 58%, rgba(239,68,68,0.20) 66%, rgba(168,85,247,0.22) 74%, transparent 88%)",
            filter: "blur(50px)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: "min(500px, 65vw)",
            height: "min(500px, 65vw)",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(123,241,121,0.45) 25%, rgba(56,189,248,0.22) 55%, transparent 80%)",
            filter: "blur(50px)",
          }}
        />
      </div>

      {/*
       * ── PERSON (clean PNG cutout, no blend mode needed) ──
       * Positioned centre-right, bottom-anchored, brought down a bit.
       * Bottom edge fades into the section with a linear mask.
       */}
      <img
        src={heroMan}
        alt=""
        fetchPriority="high"
        className="pointer-events-none absolute z-[5] h-auto w-auto max-w-none select-none"
        style={{
          bottom: "-14%",
          left: "50%",
          transform: "translateX(-50%)",
          height: "78%",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 80%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 80%, transparent 100%)",
        }}
      />

      {/* ── ORBITAL ARC + BADGES ── */}
      <div
        className="pointer-events-none absolute z-20 hidden lg:block"
        style={{ left: "64%", top: "29%", width: "200px", height: "58%" }}
      >
        <svg
          className="absolute inset-0 h-full w-full overflow-visible"
          viewBox="0 0 200 460"
          fill="none"
        >
          <path
            d="M 45 10 C 155 65, 178 210, 125 420"
            stroke="rgba(255,255,255,0.22)"
            strokeWidth="1"
          />
        </svg>

        {/* Badge 1 – scan/user + label */}
        <div
          className="absolute flex items-center gap-2.5"
          style={{ left: "18%", top: "2%", transform: "translateY(-50%)" }}
        >
          <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border border-white/20 bg-[#1a2e1a]/60 text-[#7bf179] shadow-lg backdrop-blur-sm">
            <ScanIcon className="h-[18px] w-[18px]" />
          </div>
          <span className="whitespace-nowrap text-[0.74rem] font-medium leading-snug text-white/90 drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)]">
            Patient Acquisition &amp;<br />Marketing
          </span>
        </div>

        {/* Badge 2 – cloud */}
        <div
          className="absolute flex h-[44px] w-[44px] items-center justify-center rounded-full border border-white/20 bg-[#1a3a2a]/70 text-[#7bf179] shadow-lg backdrop-blur-sm"
          style={{ left: "76%", top: "30%", transform: "translate(-50%, -50%)" }}
        >
          <CloudIcon className="h-[20px] w-[20px]" />
        </div>

        {/* Badge 3 – target */}
        <div
          className="absolute flex h-[40px] w-[40px] items-center justify-center rounded-full border border-white/20 bg-[#1a2e1a]/60 text-[#7bf179] shadow-lg backdrop-blur-sm"
          style={{ left: "82%", top: "58%", transform: "translate(-50%, -50%)" }}
        >
          <TargetIcon className="h-[17px] w-[17px]" />
        </div>

        {/* Badge 4 – chart */}
        <div
          className="absolute flex h-[42px] w-[42px] items-center justify-center rounded-full border border-white/20 bg-[#1a3a2a]/70 text-[#7bf179] shadow-lg backdrop-blur-sm"
          style={{ left: "66%", top: "88%", transform: "translate(-50%, -50%)" }}
        >
          <ChartIcon className="h-[18px] w-[18px]" />
        </div>
      </div>

      {/* ── TEXT CONTENT ── */}
      <Container className="relative z-20 flex flex-1 flex-col justify-between">
        <div className="pt-36 sm:pt-40 lg:pt-48">
          <h1
            className="max-w-4xl font-[family-name:var(--font-display)] font-light uppercase leading-[0.96] tracking-[-0.02em] text-white"
            style={{ fontSize: "clamp(2.2rem, 5.5vw, 4.2rem)" }}
          >
            THE HEALTHCARE GROWTH STUDIO{" "}
            BUILT AROUND THE{" "}
            <span className="font-[family-name:var(--font-serif)] font-normal italic tracking-normal text-[#7bf179]">
              PATIENT
            </span>
          </h1>
        </div>

        <div className="max-w-[26rem] pb-14 sm:pb-18 lg:max-w-[28rem] lg:pb-22">
          <p className="text-[0.92rem] leading-relaxed text-white/80 sm:text-[1rem]">
            Afzet Studio combines conversion-focused websites, search visibility, automation, and
            patient experience systems to create a stronger digital growth engine for
            healthcare businesses.
          </p>
          <div className="mt-6">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-[#7bf179] px-6 py-3 text-[0.85rem] font-semibold text-black shadow-[0_0_24px_rgba(123,241,121,0.25)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_36px_rgba(123,241,121,0.45)]"
            >
              Build Your Growth System
            </a>
          </div>
        </div>
      </Container>

      {/* ── White mist fade ── */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-24 sm:h-32"
        style={{
          background:
            "linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.80) 30%, rgba(255,255,255,0.25) 70%, transparent 100%)",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
