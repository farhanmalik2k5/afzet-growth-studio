import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { TrustStrip, MetricsSection, ServicesIntro } from "@/components/site/Sections";
import { ServiceSection } from "@/components/site/ServiceSection";
import { services } from "@/components/site/services";
import { WhyAfzet } from "@/components/site/WhyAfzet";
import { CaseStudy } from "@/components/site/CaseStudy";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";

const title = "Afzet Studio | Digital Growth Systems for Healthcare";
const description =
  "Afzet Studio builds websites, acquisition systems, AI automation, SEO, and patient growth infrastructure for modern healthcare businesses.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Afzet Studio",
          description,
          email: "hello@afzet.studio",
          areaServed: "Healthcare",
          knowsAbout: [
            "Patient acquisition",
            "Healthcare website design",
            "SEO",
            "Workflow automation",
            "Patient retention",
          ],
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Full-page gradient backdrop — absolute so it spans the entire document height
          and reveals different colour zones as the user scrolls */}
      <div id="gradient-backdrop" aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10" />
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <MetricsSection />
        <ServicesIntro />
        {services.map((service, i) => (
          <ServiceSection key={service.id} service={service} flip={i % 2 === 1} />
        ))}
        <WhyAfzet />
        <CaseStudy />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
