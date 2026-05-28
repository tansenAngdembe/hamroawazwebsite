import { createFileRoute } from "@tanstack/react-router";
import { AboutSystem } from "@/components/site/AboutSystem";
import { AboutDeveloper } from "@/components/site/AboutDeveloper";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Hamro Awaz" },
      { name: "description", content: "Why Hamro Awaz was built, who it serves, and the developer behind the project." },
      { property: "og:title", content: "About — Hamro Awaz" },
      { property: "og:description", content: "The story, mission, and team behind Nepal's civic complaint platform." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <div className="gradient-hero text-ink-foreground py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-primary-glow font-semibold">About us</p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold">Civic governance, <span className="text-gradient">reimagined</span>.</h1>
          <p className="mt-4 max-w-2xl text-ink-foreground/75">A platform built independently to make Nepal's local government more transparent, accountable, and citizen-driven.</p>
        </div>
      </div>
      <AboutSystem />
      <AboutDeveloper />
      <CTA />
    </>
  );
}