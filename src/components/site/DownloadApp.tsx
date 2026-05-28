import { Section } from "./Section";
import { Smartphone, QrCode, Star, Bell, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DownloadApp() {
  return (
    <Section
      id="download"
      eyebrow="Mobile app"
      title={<>Report civic issues directly from your <span className="text-primary">smartphone</span>.</>}
      subtitle="The Hamro Awaz Android app lets you file, track, and engage with complaints anytime — even on slow connections."
    >
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-5">
          <ul className="space-y-3">
            {[
              { icon: MapPin, t: "One-tap geo-location reporting" },
              { icon: Bell, t: "Real-time push notifications" },
              { icon: Star, t: "Vote, comment, and follow updates" },
            ].map(({ icon: Icon, t }) => (
              <li key={t} className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-foreground">{t}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button size="lg" className="gradient-primary text-primary-foreground shadow-elegant">
              <Smartphone className="mr-2 h-4 w-4" /> Download for Android
            </Button>
            <div className="flex items-center gap-3 p-3 rounded-xl border border-border bg-card shadow-card">
              <div className="grid h-16 w-16 place-items-center rounded-lg bg-ink text-ink-foreground">
                <QrCode className="h-10 w-10" />
              </div>
              <div className="text-xs">
                <p className="font-semibold text-ink">Scan to download</p>
                <p className="text-muted-foreground">Point your camera here</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute inset-0 gradient-primary blur-3xl opacity-20 rounded-full" />
          <div className="relative w-64 sm:w-72 h-[34rem] rounded-[2.5rem] bg-ink border-[10px] border-ink shadow-elegant overflow-hidden">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 h-5 w-24 bg-black rounded-full z-10" />
            <div className="h-full w-full bg-background p-4 pt-10 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground">Good morning</p>
                  <p className="font-display font-bold text-ink">Aarav</p>
                </div>
                <div className="h-9 w-9 rounded-full gradient-primary" />
              </div>
              <div className="rounded-2xl gradient-primary text-primary-foreground p-4">
                <p className="text-xs opacity-80">Your active complaint</p>
                <p className="font-display font-bold mt-1">Pothole on Ring Road</p>
                <div className="mt-3 h-1.5 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-white rounded-full" />
                </div>
                <p className="text-xs mt-2 opacity-80">Step 3 of 5 · In review</p>
              </div>
              <p className="text-xs font-semibold text-muted-foreground mt-2">Nearby issues</p>
              {[
                { t: "Garbage not collected", c: "Sanitation" },
                { t: "Street light broken", c: "Electricity" },
                { t: "Water leakage", c: "Water" },
              ].map((x) => (
                <div key={x.t} className="rounded-xl bg-card border border-border p-3">
                  <p className="text-xs text-primary font-medium">{x.c}</p>
                  <p className="text-sm font-medium text-ink mt-0.5">{x.t}</p>
                </div>
              ))}
              <button className="mt-auto rounded-xl gradient-primary text-primary-foreground py-3 font-semibold text-sm">
                + New Complaint
              </button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}