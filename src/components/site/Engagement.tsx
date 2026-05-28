import { Section } from "./Section";
import { MessageSquare, ThumbsUp, Users2, Eye } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  { icon: MessageSquare, title: "Commenting", desc: "Discuss issues openly — citizens, officials, and observers in one thread." },
  { icon: ThumbsUp, title: "Voting & Support", desc: "Upvote pressing issues to push them up the priority queue." },
  { icon: Users2, title: "Community", desc: "Form ward-level groups to coordinate action and follow-up." },
  { icon: Eye, title: "Transparency", desc: "A public dashboard shows what's being fixed — and what isn't." },
];

export function Engagement() {
  return (
    <Section
      id="engagement"
      eyebrow="Public engagement"
      title={<>Civic life, made <span className="text-primary">participatory</span>.</>}
      subtitle="Hamro Awaz turns isolated complaints into a public conversation — so issues get heard, supported, and solved together."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-transparent border border-border p-6 hover:shadow-elegant transition"
          >
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
              <c.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display font-semibold text-ink">{c.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}