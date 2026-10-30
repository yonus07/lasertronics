import { useInView, useCountUp } from "@/lib/motion";
import { Package, RefreshCw, Truck, ShieldCheck, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function StatsStrip() {
  const [containerRef, inView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  // 16,700+ Products count up
  const productsCount = useCountUp(16700, 1800, inView);
  const storesCount = useCountUp(25, 1400, inView);
  const satisfactionCount = useCountUp(99, 1600, inView);

  const stats = [
    {
      icon: Package,
      value: `${productsCount.toLocaleString()}+`,
      label: "Live Catalog Products",
      detail: "Components, ICs & Hardware",
      accent: "from-[#2F6BFF] to-[#22D3EE]",
      badge: "InTouch Sync",
    },
    {
      icon: RefreshCw,
      value: "< 15s",
      label: "Real-Time Stock Sync",
      detail: "Colombo 1st Cross St Store",
      accent: "from-[#22D3EE] to-emerald-400",
      badge: "Physical POS",
    },
    {
      icon: Truck,
      value: `${storesCount} Districts`,
      label: "Island-Wide Delivery",
      detail: "24-48h Doorstep Courier",
      accent: "from-[#2F6BFF] to-indigo-400",
      badge: "Express Tracked",
    },
    {
      icon: ShieldCheck,
      value: `${satisfactionCount}.4%`,
      label: "100% LKR Pricing",
      detail: "Zero Forex Hidden Fees",
      accent: "from-[#FF4D2E] to-amber-400",
      badge: "Price Guaranteed",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative z-10 -mt-8 sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      aria-label="Key Platform Statistics"
    >
      <div className="rounded-3xl bg-[var(--landing-surface)] border border-[var(--landing-border)] backdrop-blur-2xl p-6 sm:p-8 shadow-[var(--landing-card-shadow)] relative overflow-hidden transition-all duration-300">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 circuit-grid opacity-30 pointer-events-none" />

        {/* Ambient Top Glow Line */}
        <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#22D3EE]/60 to-transparent" />

        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[var(--landing-border)]">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`flex flex-col justify-between ${
                  idx > 0 ? "pt-6 sm:pt-0 sm:pl-8" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--landing-surface-subtle)] border border-[var(--landing-border)] shadow-xs">
                      <Icon className="h-5 w-5 text-[#2F6BFF] dark:text-[#22D3EE]" />
                    </div>
                    <span className="text-[10px] font-mono-spec px-2 py-0.5 rounded-full bg-[var(--landing-chip-bg)] border border-[var(--landing-border)] text-[var(--landing-chip-text)]">
                      {stat.badge}
                    </span>
                  </div>

                  <div className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight flex items-baseline">
                    <span className={`bg-gradient-to-r ${stat.accent} bg-clip-text text-transparent`}>
                      {stat.value}
                    </span>
                  </div>

                  <div className="font-heading text-sm font-semibold text-[var(--landing-text-primary)] mt-1">
                    {stat.label}
                  </div>
                </div>

                <div className="text-xs font-mono-spec text-[var(--landing-text-muted)] mt-2 flex items-center justify-between">
                  <span>{stat.detail}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom micro-strip banner linking to shop */}
        <div className="relative z-10 mt-8 pt-6 border-t border-[var(--landing-border)] flex flex-wrap items-center justify-between gap-4 text-xs font-mono-spec text-[var(--landing-text-muted)]">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Hardware database live status: <strong className="text-emerald-500 dark:text-emerald-400">All 16,700+ SKUs active & verified</strong></span>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center gap-1 text-[#2F6BFF] dark:text-[#22D3EE] hover:underline transition-colors group"
          >
            <span>Explore live inventory catalogue</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
