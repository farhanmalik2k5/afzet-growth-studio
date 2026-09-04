import collage1 from "@/assets/collage-1.jpg";
import collage2 from "@/assets/collage-2.jpg";
import collage3 from "@/assets/collage-3.jpg";
import collage4 from "@/assets/collage-4.jpg";
import serviceAcquisition from "@/assets/service-acquisition.jpg";
import serviceWebsite from "@/assets/service-website.jpg";
import serviceSeo from "@/assets/service-seo.jpg";
import serviceAutomation from "@/assets/service-automation.jpg";
import serviceRetention from "@/assets/service-retention.jpg";
import serviceAnalytics from "@/assets/service-analytics.jpg";
import { Container, Reveal } from "./ui";

const floatingCards = [
  // Top Left Outer
  { src: collage1, alt: "Clinician consulting patient", cls: "top-[9%] left-[2%] w-[130px] h-[98px]" },
  // Top Left Inner
  { src: collage2, alt: "Team members celebrating at desk", cls: "top-[18%] left-[20%] w-[145px] h-[108px]" },
  // Mid Left Outer
  { src: serviceAcquisition, alt: "Smiling patient in waiting area", cls: "top-[40%] left-[8.5%] w-[138px] h-[102px]" },
  // Bottom Left Far Edge
  { src: serviceWebsite, alt: "Clinician outdoors smiling", cls: "bottom-[21%] left-[0.5%] w-[132px] h-[98px]" },
  // Bottom Left Inner
  { src: collage3, alt: "Two women discussing treatment", cls: "bottom-[11%] left-[16%] w-[145px] h-[106px]" },

  // Top Right Far Edge
  { src: serviceAnalytics, alt: "Doctor gesturing during consultation", cls: "top-[9%] right-[2%] w-[138px] h-[106px]" },
  // Top Right Inner
  { src: serviceSeo, alt: "Two specialists reviewing results on laptop", cls: "top-[18%] right-[20%] w-[145px] h-[108px]" },
  // Mid Right Inner
  { src: serviceAutomation, alt: "Healthcare specialists collaborating", cls: "top-[46%] right-[8.5%] w-[138px] h-[102px]" },
  // Bottom Right Inner
  { src: collage4, alt: "Patient smiling warmly", cls: "bottom-[10%] right-[15%] w-[142px] h-[106px]" },
  // Bottom Right Far Edge
  { src: serviceRetention, alt: "Clinician with clipboard consulting patient", cls: "bottom-[21%] right-[0.5%] w-[132px] h-[98px]" },
];

export function WhyAfzet() {
  return (
    <section 
      id="about" 
      className="relative overflow-x-clip bg-gradient-to-b from-[#10271c] via-[#143627] to-[#1a6e3e] py-28 lg:py-40 text-white min-h-[760px] flex flex-col justify-center"
    >
      {/* Smooth top edge transition overlay */}
      <div 
        className="pointer-events-none absolute inset-x-0 top-0 h-24 z-10"
        style={{
          background: "linear-gradient(to bottom in oklab, transparent 0%, rgba(16,39,28,0.7) 60%, rgba(16,39,28,1) 100%)"
        }}
        aria-hidden="true"
      />

      {/* Radiant bottom green aura light */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <div
          className="absolute rounded-full opacity-60"
          style={{
            width: "min(1000px, 130vw)",
            height: "min(600px, 90vw)",
            bottom: "-10%",
            left: "50%",
            transform: "translateX(-50%)",
            background: "radial-gradient(ellipse at 50% 100% in oklab, rgba(132,240,130,0.55) 0%, rgba(30,179,87,0.3) 50%, transparent 80%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      {/* Floating Squircle Photo Cards matching reference screenshot */}
      <div className="pointer-events-none absolute inset-0 z-10 hidden xl:block select-none overflow-hidden" aria-hidden="true">
        {floatingCards.map((card, idx) => (
          <div
            key={idx}
            className={`absolute rounded-[20px] overflow-hidden border border-white/20 shadow-xl transition-transform duration-700 hover:scale-105 ${card.cls}`}
          >
            <img
              src={card.src}
              alt={card.alt}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <Container className="relative z-20">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            {/* Pill Badge matching reference */}
            <div className="inline-block rounded-md bg-[#7bf179] px-3.5 py-1 text-[0.75rem] font-semibold text-[#082015] shadow-sm">
              Why Afzet Studio
            </div>

            {/* Headline matching reference (medium weight, smaller font size) */}
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-white text-[1.9rem] sm:text-[2.4rem] lg:text-[2.9rem] font-medium leading-[1.12] tracking-[-0.02em]">
              Partners in{" "}
              <span className="font-[family-name:var(--font-serif)] font-normal italic text-[#7bf179]">
                growth.
              </span>
              <br />
              Experts in{" "}
              <span className="font-[family-name:var(--font-serif)] font-normal italic text-[#7bf179]">
                care.
              </span>
            </h2>

            {/* Body Copy matching reference typography & width */}
            <div className="mx-auto mt-6 max-w-[560px] space-y-4 text-[0.88rem] sm:text-[0.95rem] leading-[1.65] text-white/85 font-normal">
              <p>
                As clinic operators ourselves, we go beyond the expertise of a traditional marketing agency; we've seen first hand what patients and clinics need to succeed. We built Afzet Studio to help other clinics achieve our collective mission — to create a world where patients have better access to the life-changing healthcare that they need.
              </p>
              <p>
                By combining our clinical experience, marketing know-how, and deep passion for healthcare, we've built the industry's smartest, HIPAA-compliant system to deliver long-term success for clinics.
              </p>
            </div>

            {/* Our Approach Button matching reference */}
            <div className="mt-8 flex justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-[#52be7f]/60 bg-[#236843]/80 px-7 py-3 text-sm font-semibold text-white shadow-xl backdrop-blur-md transition-all duration-300 hover:bg-[#2a7b50] hover:scale-105"
              >
                Our Approach
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
