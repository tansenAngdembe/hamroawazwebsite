import { Link } from "@tanstack/react-router";
import { Megaphone, Facebook, Twitter, Github, Linkedin, Mail, MapPin, Phone, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/30 blur-3xl pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl gradient-primary shadow-glow">
                <Megaphone className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-bold">Hamro Awaz</span>
            </Link>
            <p className="mt-4 text-sm text-ink-foreground/70 leading-relaxed">
              A digital civic complaint management platform connecting citizens with local
              governments across Nepal — transparent, accountable, faster.
            </p>
            <div className="mt-5 flex gap-2">
              {[Facebook, Twitter, Github, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-lg glass hover:bg-primary/30 transition-colors">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-ink-foreground/70">
              {["Home","About","Features","How It Works","Contact"].map((l) => (
                <li key={l}><a href="#" className="hover:text-primary-glow">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-ink-foreground/70">
              {["Submit Complaint","Track Status","Public Dashboard","Analytics","API"].map((l) => (
                <li key={l}><a href="#" className="hover:text-primary-glow">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-ink-foreground/70">
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary-glow shrink-0" /> Kathmandu, Nepal</li>
              <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-primary-glow shrink-0" /> hello@hamroawaz.np</li>
              <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-primary-glow shrink-0" /> +977 98-0000-0000</li>
            </ul>
            <Button className="mt-5 w-full gradient-primary text-primary-foreground shadow-elegant">
              <Smartphone className="h-4 w-4 mr-2" /> Download App
            </Button>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3 justify-between items-center text-xs text-ink-foreground/60">
          <p>© {new Date().getFullYear()} Hamro Awaz. All rights reserved.</p>
          <p>Built for transparent, accountable governance in Nepal.</p>
        </div>
      </div>
    </footer>
  );
}