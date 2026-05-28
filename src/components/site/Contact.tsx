import { useState } from "react";
import { Section } from "./Section";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export function ContactSection() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent", { description: "We'll get back to you shortly." });
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <Section
      id="contact"
      eyebrow="Get in touch"
      title={<>Let's build a more accountable <span className="text-primary">Nepal</span>.</>}
      subtitle="Have a question, a partnership proposal, or feedback? We'd love to hear from you."
    >
      <div className="grid lg:grid-cols-5 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {[
            { icon: MapPin, label: "Office", value: "Kathmandu, Nepal" },
            { icon: Mail, label: "Email", value: "hello@hamroawaz.np" },
            { icon: Phone, label: "Phone", value: "+977 98-0000-0000" },
          ].map((x) => (
            <div key={x.label} className="flex items-start gap-3 rounded-xl bg-card border border-border p-4 shadow-card">
              <span className="grid h-10 w-10 place-items-center rounded-lg gradient-primary text-primary-foreground">
                <x.icon className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs text-muted-foreground">{x.label}</p>
                <p className="font-medium text-ink">{x.value}</p>
              </div>
            </div>
          ))}
          <div className="aspect-video rounded-xl border border-border bg-ink grid-bg grid place-items-center text-ink-foreground/70 text-sm">
            Google Maps placeholder
          </div>
        </div>

        <form onSubmit={onSubmit} className="lg:col-span-3 rounded-2xl bg-card border border-border p-6 sm:p-8 shadow-card space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" required placeholder="Your full name" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required placeholder="you@example.com" />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" required placeholder="How can we help?" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" required rows={6} placeholder="Tell us more..." />
          </div>
          <Button type="submit" disabled={sending} className="gradient-primary text-primary-foreground shadow-elegant w-full sm:w-auto">
            {sending ? "Sending..." : (<><Send className="h-4 w-4 mr-2" /> Send Message</>)}
          </Button>
        </form>
      </div>
    </Section>
  );
}