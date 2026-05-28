import { Section } from "./Section";
import {
  FileText, MapPin, Bell, Users, ThumbsUp, BarChart3, Smartphone,
  LayoutDashboard, AlertTriangle, Search,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { icon: FileText, title: "Online Complaint Submission", desc: "File complaints in under a minute from web or mobile, with media attachments." },
  { icon: Search, title: "Complaint Tracking", desc: "Real-time status updates from submission to resolution, on every device." },
  { icon: AlertTriangle, title: "Smart Escalation", desc: "Stuck cases auto-escalate up the authority chain — nothing falls through." },
  { icon: Bell, title: "Notifications & Alerts", desc: "Push, SMS, and email keep citizens and officers in sync." },
  { icon: Users, title: "Public Engagement", desc: "Comment, support, and amplify the issues that matter most in your ward." },
  { icon: ThumbsUp, title: "Voting & Feedback", desc: "Upvote complaints and rate resolutions to drive accountability." },
  { icon: MapPin, title: "Geo-located Reporting", desc: "Pin issues on the map so authorities know exactly where to act." },
  { icon: LayoutDashboard, title: "Admin Dashboard", desc: "Built for officials: queues, assignments, SLAs, and audit logs." },
  { icon: BarChart3, title: "Analytics & Reports", desc: "Heatmaps, trends, and KPIs that inform smarter policy decisions." },
  { icon: Smartphone, title: "Mobile Accessibility", desc: "A native Android app for citizens — built for low-bandwidth Nepal." },
];

export function Features() {
  return (
    <Section
      id="features"
      eyebrow="Features"
      title={<>Everything a modern civic platform needs — <span className="text-primary">in one place</span>.</>}
      subtitle="From the first complaint to final feedback, Hamro Awaz covers every step of the civic loop with tools built for citizens and officials alike."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.35, delay: (i % 4) * 0.06 }}
            className="group relative rounded-2xl bg-card border border-border p-5 hover:border-primary/30 hover:shadow-elegant transition-all"
          >
            <div className="grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary group-hover:gradient-primary group-hover:text-primary-foreground transition-all">
              <f.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display font-semibold text-ink">{f.title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}