import { motion } from "framer-motion";
import { ArrowRight, Smartphone, ShieldCheck, TrendingUp, Users, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden gradient-hero text-ink-foreground">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute -top-40 -right-40 h-[40rem] w-[40rem] rounded-full bg-primary/30 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-primary-glow/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-28 lg:pt-28 lg:pb-36">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium">
              <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
              Trusted by 50+ municipalities across Nepal
            </div>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
              Your Voice for{" "}
              <span className="text-gradient">Better Governance</span>
            </h1>
            <p className="mt-6 text-lg text-ink-foreground/75 max-w-xl leading-relaxed">
              A digital civic complaint management platform connecting citizens with local
              governments in Nepal — submit, track, and resolve issues with full transparency.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" className="gradient-primary text-primary-foreground shadow-elegant hover:opacity-95">
                Submit Complaint <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 bg-white/5 text-ink-foreground hover:bg-white/10 hover:text-ink-foreground">
                <Smartphone className="mr-2 h-4 w-4" /> Download Mobile App
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-ink-foreground/70">
              {[
                { icon: CheckCircle2, t: "End-to-end tracking" },
                { icon: ShieldCheck, t: "Verified authorities" },
                { icon: Users, t: "Public engagement" },
              ].map(({ icon: Icon, t }) => (
                <div key={t} className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-primary-glow" /> {t}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="relative rounded-2xl glass p-5 shadow-elegant">
              <div className="flex items-center justify-between text-xs text-ink-foreground/70 mb-4">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-destructive/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-warning" />
                  <span className="h-2.5 w-2.5 rounded-full bg-success" />
                </div>
                <span>dashboard.hamroawaz.np</span>
              </div>

              <div className="rounded-xl bg-ink/60 p-5 border border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-ink-foreground/60">Total Complaints</p>
                    <p className="font-display text-3xl font-bold">12,847</p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs text-success">
                    <TrendingUp className="h-3 w-3" /> +18.2%
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3 text-xs">
                  {[
                    { l: "Resolved", v: "9,402", c: "bg-success/20 text-success" },
                    { l: "In Progress", v: "2,318", c: "bg-warning/20 text-warning" },
                    { l: "Pending", v: "1,127", c: "bg-primary/30 text-primary-glow" },
                  ].map((s) => (
                    <div key={s.l} className={`rounded-lg p-3 ${s.c}`}>
                      <p className="opacity-80">{s.l}</p>
                      <p className="font-display font-bold text-base mt-1">{s.v}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5">
                  <p className="text-xs text-ink-foreground/60 mb-2">Resolution rate · last 7 days</p>
                  <div className="flex items-end gap-1.5 h-24">
                    {[40, 65, 50, 80, 72, 90, 78].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 0.8, delay: 0.4 + i * 0.05 }}
                        className="flex-1 rounded-md gradient-primary"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating cards */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-6 -bottom-6 hidden sm:block rounded-xl glass-light text-foreground p-4 shadow-elegant min-w-[180px]"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-success/15 text-success">
                  <CheckCircle2 className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs text-muted-foreground">Resolved today</p>
                  <p className="font-display font-bold text-lg leading-tight">+342</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-4 -top-4 hidden sm:block rounded-xl glass-light text-foreground p-4 shadow-elegant"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg gradient-primary text-primary-foreground">
                  <Users className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs text-muted-foreground">Active citizens</p>
                  <p className="font-display font-bold text-lg leading-tight">48.2K</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}