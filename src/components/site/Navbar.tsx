import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./ui";

const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onDark = !scrolled && !open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "bg-background/80 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <Container>
        <nav
          aria-label="Main"
          className={cn(
            "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4 transition-colors duration-500 md:flex md:justify-between",
            onDark ? "text-background" : "text-foreground",
          )}
        >
          <a
            href="#top"
            className="min-w-0 truncate font-[family-name:var(--font-display)] text-[1.05rem] font-semibold tracking-tight"
          >
            afzet<span className="opacity-50">studio</span>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-[0.85rem] opacity-75 transition-opacity duration-300 hover:opacity-100"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex shrink-0 items-center gap-3">
            <a
              href="#contact"
              className={cn(
                "hidden rounded-full px-4 py-2 text-[0.8rem] font-medium transition-colors duration-300 md:inline-flex",
                onDark
                  ? "bg-background/95 text-foreground hover:bg-background"
                  : "bg-foreground text-background hover:bg-foreground/85",
              )}
            >
              Book a Strategy Call
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-full border border-current/20 md:hidden"
            >
              <span
                className={cn(
                  "block h-px w-4 bg-current transition-transform duration-300",
                  open && "translate-y-[3px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "block h-px w-4 bg-current transition-transform duration-300",
                  open && "-translate-y-[3px] -rotate-45",
                )}
              />
            </button>
          </div>
        </nav>
      </Container>

      <div
        className={cn(
          "fixed inset-0 top-0 -z-10 flex flex-col justify-center bg-background px-8 transition-opacity duration-300 md:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <ul className="space-y-5">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-[family-name:var(--font-display)] text-4xl font-medium tracking-tight text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="mt-10 inline-flex w-fit rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background"
        >
          Book a Strategy Call
        </a>
      </div>
    </header>
  );
}
