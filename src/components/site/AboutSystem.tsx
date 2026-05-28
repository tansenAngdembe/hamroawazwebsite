import { Section } from "./Section";
import { Eye, Scale, Zap, Globe2 } from "lucide-react";
import { motion } from "framer-motion";

const pillars = [
  { icon: Eye, title: "Transparency", desc: "Every complaint is visible, timestamped, and trackable end-to-end." },
  { icon: Scale, title: "Accountability", desc: "Authorities are assigned, monitored, and held responsible publicly." },
  { icon: Zap, title: "Faster Resolution", desc: "Smart routing and escalation cut response times dramatically." },
  { icon: Globe2, title: "Digital Governance", desc: "Bringing local government into the modern, connected era." },
];

export function AboutSystem() {
  return (
    <Section
      id="about-system"
      eyebrow="About the system"
      title={<>Reimagining how citizens and government <span className="text-primary">work together</span>.</>}
      subtitle="Hamro Awaz was built to close the gap between everyday civic problems and the authorities who can solve them — eliminating paperwork, opacity, and delay."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="group relative rounded-2xl bg-card border border-border p-6 shadow-card hover:shadow-elegant transition-all hover:-translate-y-1"
          >
            <div className="grid h-12 w-12 place-items-center rounded-xl gradient-primary text-primary-foreground shadow-glow mb-5">
              <p.icon className="h-6 w-6" />
            </div>
            <h3 className="font-display text-lg font-semibold text-ink">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}