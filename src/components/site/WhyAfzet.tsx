import collage1 from "@/assets/collage-1.jpg";
import collage2 from "@/assets/collage-2.jpg";
import collage3 from "@/assets/collage-3.jpg";
import collage4 from "@/assets/collage-4.jpg";
import { Button, Container, Eyebrow, Reveal } from "./ui";

const tiles = [
  { src: collage2, alt: "Dentist smiling in a modern practice", cls: "top-2 left-0 w-32 xl:w-40" },
  {
    src: collage1,
    alt: "Handshake between a clinician and a patient",
    cls: "bottom-6 left-16 w-28 xl:w-32",
  },
  { src: collage3, alt: "Calm clinic reception interior", cls: "top-10 right-0 w-32 xl:w-40" },
  {
    src: collage4,
    alt: "Healthcare practitioner in a bright treatment room",
    cls: "bottom-2 right-20 w-28 xl:w-32",
  },
];

export function WhyAfzet() {
  return (
    <section id="about" className="grad-surface grain relative overflow-hidden py-24 lg:py-36">
      <div className="grad-layer grad-dark" aria-hidden="true" />
      <Container className="relative">
        <div className="relative">
          {tiles.map((t) => (
            <img
              key={t.alt}
              src={t.src}
              alt={t.alt}
              width={700}
              height={700}
              loading="lazy"
              decoding="async"
              className={`pointer-events-none absolute hidden rounded-2xl object-cover opacity-90 shadow-[0_30px_70px_-40px_rgba(0,0,0,0.8)] lg:block ${t.cls}`}
              style={{ aspectRatio: "1 / 1" }}
            />
          ))}

          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <Eyebrow className="text-background/60">Why Afzet</Eyebrow>
              <h2 className="mt-5 font-[family-name:var(--font-display)] text-background [font-size:clamp(2rem,4.4vw,3.3rem)]">
                Partners in growth. Built for healthcare.
              </h2>
              <p className="mx-auto mt-6 max-w-lg text-[1rem] leading-relaxed text-background/70">
                Healthcare businesses don't need another disconnected marketing vendor. They need a
                digital partner who understands the patient journey, the business behind the
                practice, and the systems connecting the two.
              </p>
              <div className="mt-9 flex justify-center">
                <Button href="#contact" variant="light">
                  Book a Strategy Call
                </Button>
              </div>
            </Reveal>
          </div>
        </div>


        <ul className="mt-16 grid grid-cols-2 gap-6 lg:hidden">
          {tiles.map((t) => (
            <li key={`m-${t.alt}`}>
              <img
                src={t.src}
                alt={t.alt}
                width={700}
                height={700}
                loading="lazy"
                decoding="async"
                className="aspect-square w-full rounded-2xl object-cover"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
