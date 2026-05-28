import { Section } from "./Section";
import { FileText, Building2, Search, Wrench, CheckCircle2, Star } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  { icon: FileText, title: "Submit", desc: "Citizen files complaint via web or mobile, with location and media." },
  { icon: Building2, title: "Assign", desc: "Complaint is routed to the right administrative unit automatically." },
  { icon: Search, title: "Review", desc: "Authority verifies the issue and acknowledges within the SLA." },
  { icon: Wrench, title: "Resolve", desc: "Field teams act on the issue with status updates at each stage." },
  { icon: CheckCircle2, title: "Close", desc: "Complaint is marked resolved with evidence and timestamp." },
  { icon: Star, title: "Feedback", desc: "Citizen rates the resolution — keeping the loop transparent." },
];

export function HowItWorks() {
  return (
    <Section
      id="how"
      dark
      eyebrow="How it works"
      title={<>From complaint to resolution — <span className="text-primary-glow">in six clear steps</span>.</>}
      subtitle="A transparent, auditable workflow that respects every citizen's time and every official's responsibility."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="relative rounded-2xl glass p-6 hover:bg-white/[0.08] transition-colors"
          >
            <div className="absolute -top-4 -left-4 grid h-12 w-12 place-items-center rounded-2xl gradient-primary text-primary-foreground shadow-elegant font-display font-bold">
              {String(i + 1).padStart(2, "0")}
            </div>
            <s.icon className="h-7 w-7 text-primary-glow mt-2" />
            <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-ink-foreground/70 leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}