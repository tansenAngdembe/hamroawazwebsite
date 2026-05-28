import { createFileRoute } from "@tanstack/react-router";
import { Features } from "@/components/site/Features";
import { Engagement } from "@/components/site/Engagement";
import { DashboardPreview } from "@/components/site/DashboardPreview";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — Hamro Awaz" },
      { name: "description", content: "Complaint submission, tracking, escalation, analytics, and more — every feature of Hamro Awaz." },
      { property: "og:title", content: "Features — Hamro Awaz" },
      { property: "og:description", content: "All the tools citizens and government bodies need in one civic platform." },
      { property: "og:url", content: "/features" },
    ],
    links: [{ rel: "canonical", href: "/features" }],
  }),
  component: () => (
    <>
      <div className="gradient-hero text-ink-foreground py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-primary-glow font-semibold">Features</p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold">Built for the whole <span className="text-gradient">civic loop</span>.</h1>
        </div>
      </div>
      <Features />
      <Engagement />
      <DashboardPreview />
      <CTA />
    </>
  ),
});