import { Section } from "./Section";
import { TrendingUp, Clock, CheckCircle2, AlertTriangle, FileText, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { icon: FileText, label: "Total complaints", value: "12,847", delta: "+8.2%", tone: "text-primary-glow" },
  { icon: Clock, label: "Pending", value: "1,127", delta: "-3.1%", tone: "text-warning" },
  { icon: CheckCircle2, label: "Resolved", value: "9,402", delta: "+12.4%", tone: "text-success" },
  { icon: AlertTriangle, label: "Escalated", value: "318", delta: "+1.8%", tone: "text-destructive" },
];

const categories = [
  { name: "Sanitation", v: 82 },
  { name: "Roads & Transport", v: 68 },
  { name: "Water Supply", v: 54 },
  { name: "Electricity", v: 42 },
  { name: "Public Safety", v: 36 },
];

export function DashboardPreview() {
  return (
    <Section
      id="dashboard"
      dark
      eyebrow="Admin dashboard"
      title={<>A control room for <span className="text-primary-glow">local government</span>.</>}
      subtitle="A live, data-driven view of civic activity — built so every official knows what's happening, what's pending, and what needs attention now."
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl glass p-4 sm:p-6 shadow-elegant"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl bg-ink/60 border border-white/10 p-5">
              <div className="flex items-center justify-between">
                <span className={`grid h-9 w-9 place-items-center rounded-lg bg-white/5 ${s.tone}`}>
                  <s.icon className="h-4 w-4" />
                </span>
                <span className={`text-xs font-medium ${s.tone}`}>{s.delta}</span>
              </div>
              <p className="mt-4 text-xs text-ink-foreground/60">{s.label}</p>
              <p className="font-display text-2xl font-bold mt-1">{s.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 grid lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 rounded-2xl bg-ink/60 border border-white/10 p-5">
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="font-display font-semibold">Complaints over time</p>
                <p className="text-xs text-ink-foreground/60">Last 30 days</p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs text-success">
                <TrendingUp className="h-3 w-3" /> Resolution +18%
              </span>
            </div>
            <div className="flex items-end gap-1.5 h-44">
              {Array.from({ length: 24 }).map((_, i) => {
                const h = 25 + ((i * 37) % 70);
                return (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.02 }}
                    className="flex-1 rounded-md gradient-primary opacity-90"
                  />
                );
              })}
            </div>
          </div>

          <div className="rounded-2xl bg-ink/60 border border-white/10 p-5">
            <div className="flex items-center justify-between mb-5">
              <p className="font-display font-semibold">Top categories</p>
              <BarChart3 className="h-4 w-4 text-ink-foreground/60" />
            </div>
            <div className="space-y-4">
              {categories.map((c, i) => (
                <div key={c.name}>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-ink-foreground/80">{c.name}</span>
                    <span className="text-ink-foreground/60">{c.v}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${c.v}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.1 + i * 0.08 }}
                      className="h-full gradient-primary rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}