import { createFileRoute } from "@tanstack/react-router";
import { ContactSection } from "@/components/site/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Hamro Awaz" },
      { name: "description", content: "Get in touch with the Hamro Awaz team — partnerships, support, and feedback." },
      { property: "og:title", content: "Contact — Hamro Awaz" },
      { property: "og:description", content: "Reach out for partnerships, support, or feedback." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: () => (
    <>
      <div className="gradient-hero text-ink-foreground py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-primary-glow font-semibold">Contact</p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold">Let's <span className="text-gradient">talk</span>.</h1>
        </div>
      </div>
      <ContactSection />
    </>
  ),
});