import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setVal(Math.floor(p * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}

const items = [
  { value: 12847, suffix: "+", label: "Complaints filed" },
  { value: 9402, suffix: "+", label: "Issues resolved" },
  { value: 50, suffix: "+", label: "Municipalities" },
  { value: 96, suffix: "%", label: "Citizen satisfaction" },
];

export function Stats() {
  return (
    <section className="relative -mt-10 z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden bg-border shadow-card"
        >
          {items.map((s) => (
            <div key={s.label} className="bg-card p-6 sm:p-8 text-center">
              <p className="font-display text-3xl sm:text-4xl font-bold text-ink">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}