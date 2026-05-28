import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { AboutSystem } from "@/components/site/AboutSystem";
import { Features } from "@/components/site/Features";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Engagement } from "@/components/site/Engagement";
import { DashboardPreview } from "@/components/site/DashboardPreview";
import { DownloadApp } from "@/components/site/DownloadApp";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hamro Awaz – Civic Complaint Management System" },
      { name: "description", content: "Your voice for better governance. A digital civic complaint platform connecting citizens with local governments in Nepal." },
      { property: "og:title", content: "Hamro Awaz – Civic Complaint Management System" },
      { property: "og:description", content: "Submit, track, and engage with civic complaints across Nepal — transparent, accountable, faster." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutSystem />
      <Features />
      <HowItWorks />
      <Engagement />
      <DashboardPreview />
      <DownloadApp />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
