import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className,
  dark,
}: {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-20 lg:py-28",
        dark ? "bg-ink text-ink-foreground" : "bg-background",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          {eyebrow && (
            <p className={cn(
              "text-xs font-semibold uppercase tracking-[0.18em] mb-3",
              dark ? "text-primary-glow" : "text-primary"
            )}>
              {eyebrow}
            </p>
          )}
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className={cn(
              "mt-4 text-base lg:text-lg leading-relaxed",
              dark ? "text-ink-foreground/70" : "text-muted-foreground"
            )}>
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}