import { Section } from "./Section";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Who can use Hamro Awaz?", a: "Any citizen of Nepal can register and submit complaints. Local government bodies use the admin dashboard to manage them." },
  { q: "Is it free to use?", a: "Yes — the platform is free for citizens. Municipalities partner with Hamro Awaz to deploy it across their wards." },
  { q: "What happens after I submit a complaint?", a: "It's automatically routed to the right unit, acknowledged within the SLA, and tracked through resolution with full transparency." },
  { q: "Can complaints be escalated?", a: "Yes. Unresolved complaints auto-escalate up the chain so nothing is forgotten." },
  { q: "Does it work in Nepali?", a: "The platform supports English and Nepali, with more local languages on the roadmap." },
  { q: "Is my data safe?", a: "All data is encrypted in transit and at rest, and only authorized officials can access complaint details." },
];

export function FAQ() {
  return (
    <Section
      id="faq"
      eyebrow="FAQ"
      title={<>Questions, <span className="text-primary">answered</span>.</>}
      subtitle="The most common things citizens and officials ask before getting started."
    >
      <div className="max-w-3xl">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-xl border border-border bg-card px-5 shadow-card"
            >
              <AccordionTrigger className="text-left font-display font-semibold text-ink hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}