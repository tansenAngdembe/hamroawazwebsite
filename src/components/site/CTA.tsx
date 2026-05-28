import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl gradient-hero text-ink-foreground p-10 sm:p-14 shadow-elegant">
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-primary/40 blur-3xl" />
          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
                Ready to make your voice <span className="text-gradient">count</span>?
              </h2>
              <p className="mt-4 text-ink-foreground/75 max-w-lg">
                Join thousands of citizens and dozens of municipalities already building a more
                accountable Nepal — one complaint at a time.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Button size="lg" className="gradient-primary text-primary-foreground shadow-elegant">
                Submit a Complaint <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 bg-white/5 text-ink-foreground hover:bg-white/10 hover:text-ink-foreground">
                <Smartphone className="mr-2 h-4 w-4" /> Get the App
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}