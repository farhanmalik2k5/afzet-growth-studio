import acquisition from "@/assets/service-acquisition.jpg";
import website from "@/assets/service-website.jpg";
import seo from "@/assets/service-seo.jpg";
import automation from "@/assets/service-automation.jpg";
import retention from "@/assets/service-retention.jpg";
import analytics from "@/assets/service-analytics.jpg";

export type Service = {
  id: string;
  index: string;
  title: string;
  tagline: string;
  body: string;
  capabilities: string[];
  cta: string;
  image: string;
  alt: string;
  gradient: string;
  card: { label: string; value: string };
};

export const services: Service[] = [
  {
    id: "patient-acquisition",
    index: "01",
    title: "Patient Acquisition",
    tagline: "Bring more of the right patients through the door.",
    body: "Build digital acquisition systems that connect your healthcare business with people actively looking for the services you provide.",
    capabilities: [
      "Search",
      "Paid acquisition",
      "Landing pages",
      "Conversion strategy",
      "Lead capture",
      "Campaign optimization",
    ],
    cta: "Explore Patient Acquisition",
    image: acquisition,
    alt: "Patient being welcomed at a modern clinic front desk",
    gradient: "grad-green",
    card: { label: "Qualified enquiries", value: "[RESULT]" },
  },
  {
    id: "website-conversion",
    index: "02",
    title: "Website & Conversion Systems",
    tagline: "Turn your website into your best-performing front desk.",
    body: "We design and develop premium healthcare websites that communicate trust, answer patient questions, and turn attention into action.",
    capabilities: [
      "Website design",
      "Development",
      "Conversion UX",
      "Mobile optimization",
      "Speed optimization",
      "Lead capture",
    ],
    cta: "Build Your Website",
    image: website,
    alt: "Patient using a laptop in a bright clinic waiting area",
    gradient: "grad-cyan",
    card: { label: "Booking flow", value: "3 steps" },
  },
  {
    id: "seo-aeo-geo",
    index: "03",
    title: "SEO, AEO & GEO",
    tagline: "Be visible wherever patients search.",
    body: "Build long-term search visibility across traditional search engines, answer engines, and AI-powered discovery.",
    capabilities: [
      "Technical SEO",
      "Local SEO",
      "AEO",
      "GEO",
      "Structured content",
      "Schema",
      "Google Business optimization",
    ],
    cta: "Improve Your Visibility",
    image: seo,
    alt: "Clinician and patient reviewing information on a tablet",
    gradient: "grad-purple",
    card: { label: "Local visibility", value: "[RESULT]" },
  },
  {
    id: "ai-automation",
    index: "04",
    title: "AI & Workflow Automation",
    tagline: "Give your team fewer things to manage.",
    body: "Automate repetitive administrative and patient communication workflows so your team can spend more time doing higher-value work.",
    capabilities: [
      "Lead response",
      "Follow-ups",
      "Appointment reminders",
      "Intake workflows",
      "AI assistants",
      "Internal automation",
      "CRM workflows",
    ],
    cta: "Automate Your Practice",
    image: automation,
    alt: "Clinic coordinator handling patient communication",
    gradient: "grad-coral",
    card: { label: "Admin hours saved", value: "[RESULT]" },
  },
  {
    id: "retention-reputation",
    index: "05",
    title: "Patient Retention & Reputation",
    tagline: "Turn great patient experiences into long-term growth.",
    body: "Build systems that improve follow-up, reviews, referrals, retention, and patient communication.",
    capabilities: [
      "Review requests",
      "Reputation systems",
      "Follow-ups",
      "Reactivation",
      "Patient education",
      "Retention workflows",
    ],
    cta: "Improve Retention",
    image: retention,
    alt: "Physiotherapist and patient sharing a laugh after a session",
    gradient: "grad-peach",
    card: { label: "Review requests sent", value: "Automated" },
  },
  {
    id: "analytics-optimization",
    index: "06",
    title: "Analytics & Optimization",
    tagline: "Know what is working. Then make it better.",
    body: "Connect your digital systems with meaningful analytics so decisions are based on actual patient and business behavior.",
    capabilities: [
      "Conversion tracking",
      "Funnel analytics",
      "Performance reporting",
      "UX optimization",
      "A/B testing",
      "Growth insights",
    ],
    cta: "Optimize Your Growth",
    image: analytics,
    alt: "Practice manager reviewing performance data on a screen",
    gradient: "grad-cream",
    card: { label: "Conversion rate", value: "[RESULT]" },
  },
];
