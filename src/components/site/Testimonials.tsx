import { Section } from "./Section";
import { Quote } from "lucide-react";

const items = [
  { q: "Hamro Awaz turned our ward office into a transparent, citizen-first operation. Resolution times dropped by half in three months.", n: "Sita Sharma", r: "Ward Chairperson, Lalitpur" },
  { q: "I reported a pothole in two minutes and watched it get fixed in five days — with photo evidence. This is what governance should feel like.", n: "Rajan Thapa", r: "Citizen, Kathmandu" },
  { q: "The analytics dashboard tells us exactly where to focus. We've shifted resources to the wards that need them most.", n: "Bibek Adhikari", r: "Municipal Officer, Bharatpur" },
];

export function Testimonials() {
  return (
    <Section
      eyebrow="Voices"
      title={<>Trusted by citizens and <span className="text-primary">municipalities</span>.</>}
    >
      <div className="grid md:grid-cols-3 gap-5">
        {items.map((t) => (
          <div key={t.n} className="rounded-2xl bg-card border border-border p-6 shadow-card flex flex-col">
            <Quote className="h-7 w-7 text-primary/40" />
            <p className="mt-4 text-foreground leading-relaxed">"{t.q}"</p>
            <div className="mt-6 pt-4 border-t border-border">
              <p className="font-display font-semibold text-ink">{t.n}</p>
              <p className="text-sm text-muted-foreground">{t.r}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}