import { useState } from "react";
import caseImage from "@/assets/case-study.jpg";
import { Container, Eyebrow, Reveal } from "./ui";

const tabs = ["Overview", "Key Results", "Full Story"];

const metrics = [
  { value: "+185%", label: "Increase in qualified lead volume" },
  { value: "3.8x", label: "Return on ad spend (ROAS)" },
  { value: "< 5 min", label: "Lead response & intake speed" },
];

export function CaseStudy() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="work" className="relative overflow-hidden bg-[#f7f6f2] py-24 lg:py-36">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <Reveal className="max-w-2xl">
            <Eyebrow>Selected Case Study</Eyebrow>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-[2.2rem] sm:text-[3rem] font-bold tracking-tight text-slate-900">
              Built to create measurable growth
            </h2>
          </Reveal>

          {/* Tab Switcher matching rise4.com reference */}
          <Reveal delay={80}>
            <div className="inline-flex rounded-full bg-slate-200/70 p-1.5 backdrop-blur-sm">
              {tabs.map((tab, idx) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(idx)}
                  className={`rounded-full px-5 py-2 text-xs font-semibold transition-all duration-300 ${
                    activeTab === idx
                      ? "bg-slate-950 text-white shadow-md"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={120} className="mt-12">
          <article className="grid gap-10 overflow-hidden rounded-[32px] border border-slate-200/70 bg-white p-6 sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:p-12 shadow-xl">
            <figure className="group overflow-hidden rounded-[24px] bg-slate-100">
              <img
                src={caseImage}
                alt="Interior of a modern healthcare facility"
                width={1400}
                height={1000}
                loading="lazy"
                decoding="async"
                className="h-[300px] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03] sm:h-[420px]"
              />
            </figure>

            <div className="flex flex-col justify-between">
              <div>
                <span className="inline-block rounded-full bg-[#7bf179]/20 px-3.5 py-1 text-[0.72rem] font-semibold uppercase tracking-wider text-[#2d6a4f]">
                  MedSpa &amp; Wellness Practice
                </span>
                <blockquote className="mt-5 font-[family-name:var(--font-display)] text-[1.4rem] sm:text-[1.6rem] font-medium leading-snug tracking-tight text-slate-900">
                  &ldquo;Afzet Studio transformed our online patient intake. We saw a 185% increase in booked consultations within 90 days.&rdquo;
                </blockquote>
                <p className="mt-3 text-sm font-semibold text-slate-600">
                  Dr. Sarah Chen, <span className="font-normal text-slate-500">Founder &amp; Medical Director</span>
                </p>
              </div>

              <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-slate-100 pt-6">
                {metrics.map((m) => (
                  <div key={m.label}>
                    <dt className="sr-only">{m.label}</dt>
                    <dd className="font-[family-name:var(--font-display)] text-[1.8rem] sm:text-[2.2rem] font-extrabold tracking-tight text-slate-900">
                      {m.value}
                    </dd>
                    <p className="mt-1 text-[0.78rem] leading-snug font-medium text-slate-500">{m.label}</p>
                  </div>
                ))}
              </dl>

              <a
                href="#contact"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-[0.82rem] font-semibold text-white shadow-md transition-all duration-300 hover:bg-slate-800 hover:scale-[1.02]"
              >
                Read Case Study <span aria-hidden="true">→</span>
              </a>
            </div>
          </article>
        </Reveal>
      </Container>
    </section>
  );
}
