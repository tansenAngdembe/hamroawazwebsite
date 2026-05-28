import { Section } from "./Section";
import { Code2, Database, Container, Smartphone, Server, Atom } from "lucide-react";

const stack = [
  { icon: Atom, name: "React.js" },
  { icon: Server, name: "Spring Boot" },
  { icon: Database, name: "PostgreSQL" },
  { icon: Container, name: "Docker" },
  { icon: Smartphone, name: "Android" },
  { icon: Code2, name: "TypeScript" },
];

export function AboutDeveloper() {
  return (
    <Section
      eyebrow="About the project"
      title={<>Built independently. <span className="text-primary">End to end.</span></>}
      subtitle="This system was independently designed and developed entirely by me as a solo project — covering product, backend, frontend, mobile, and deployment."
    >
      <div className="grid lg:grid-cols-5 gap-6">
        <div className="lg:col-span-2 rounded-2xl bg-card border border-border p-6 shadow-card">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-2xl gradient-primary grid place-items-center text-primary-foreground font-display text-2xl font-bold shadow-glow">
              HA
            </div>
            <div>
              <p className="font-display text-lg font-semibold text-ink">Your Name</p>
              <p className="text-sm text-muted-foreground">Full Stack Developer · Nepal</p>
            </div>
          </div>
          <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
            Designed and engineered the entire Hamro Awaz platform — from system architecture and
            database schema to UI/UX, Android app, and CI/CD pipelines.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-3">
            {stack.map((s) => (
              <div key={s.name} className="rounded-xl border border-border bg-background p-3 text-center">
                <s.icon className="h-5 w-5 mx-auto text-primary" />
                <p className="mt-1.5 text-xs font-medium text-foreground">{s.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3 grid sm:grid-cols-2 gap-5">
          <div className="rounded-2xl bg-ink text-ink-foreground p-6 shadow-elegant">
            <p className="text-xs uppercase tracking-widest text-primary-glow font-semibold">Mission</p>
            <p className="mt-3 leading-relaxed">
              Make local government in Nepal more responsive, transparent, and trusted by giving
              citizens a real voice and officials better tools.
            </p>
          </div>
          <div className="rounded-2xl bg-card border border-border p-6 shadow-card">
            <p className="text-xs uppercase tracking-widest text-primary font-semibold">Vision</p>
            <p className="mt-3 text-foreground leading-relaxed">
              A Nepal where every civic issue is heard, tracked, and resolved through a single
              transparent platform — from the smallest ward to the federal level.
            </p>
          </div>
          <div className="sm:col-span-2 rounded-2xl bg-card border border-border p-6 shadow-card">
            <p className="text-xs uppercase tracking-widest text-primary font-semibold">Problem we solve</p>
            <p className="mt-3 text-foreground leading-relaxed">
              Today, civic issues vanish into paper forms, phone trees, and ungoverned inboxes.
              Hamro Awaz creates a single, auditable source of truth — so citizens know their
              complaint is in motion and officials know exactly what's on their plate.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}