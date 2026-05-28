import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", to: "/" },
  { label: "Features", to: "/features" },
  { label: "How It Works", to: "/#how" },
  { label: "About", to: "/about" },
  { label: "Download", to: "/#download" },
  { label: "Contact", to: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-card"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="grid h-9 w-9 place-items-center rounded-xl gradient-primary text-primary-foreground shadow-glow transition-transform group-hover:scale-105">
            <Megaphone className="h-5 w-5" />
          </span>
          <span className="font-display text-lg font-bold text-ink">
            Hamro <span className="text-primary">Awaz</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.to}
              className="px-3 py-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Button variant="ghost" size="sm" className="text-foreground">
            Login
          </Button>
          <Button size="sm" className="gradient-primary text-primary-foreground shadow-elegant hover:opacity-95">
            Register
          </Button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden grid h-10 w-10 place-items-center rounded-lg border border-border bg-card text-ink"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl animate-fade-in">
          <div className="px-4 py-4 space-y-1">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.to}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-lg text-base font-medium text-foreground hover:bg-accent"
              >
                {l.label}
              </a>
            ))}
            <div className="flex gap-2 pt-3">
              <Button variant="outline" className="flex-1">Login</Button>
              <Button className="flex-1 gradient-primary text-primary-foreground">Register</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}