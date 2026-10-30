import { Search, ShoppingBag, Truck, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useInView, useReducedMotion } from "@/lib/motion";

export function HowItWorks() {
  const [containerRef, inView] = useInView<HTMLDivElement>({ threshold: 0.2 });
  const prefersReduced = useReducedMotion();

  const steps = [
    {
      num: "01",
      title: "Search & Verify",
      subtitle: "16,700+ Live Stock in Colombo",
      desc: "Search by part number, chip family, or datasheet spec. Our InTouch POS connection verifies real-time warehouse availability instantly.",
      icon: Search,
      tag: "Live Inventory",
      highlight: "from-[#2F6BFF] to-[#22D3EE]",
    },
    {
      num: "02",
      title: "Order with Zero Friction",
      subtitle: "100% Transparent LKR Pricing",
      desc: "Checkout in under 60 seconds with no forced account creation. Pay via Cash on Delivery (COD), Card, or Direct Bank Transfer.",
      icon: ShoppingBag,
      tag: "Instant Checkout",
      highlight: "from-[#22D3EE] to-emerald-400",
    },
    {
      num: "03",
      title: "Island-Wide Delivered",
      subtitle: "Doorstep in 24-48 Hours",
      desc: "Dispatched promptly from our 1st Cross Street Colombo hub in anti-static, moisture-proof packaging across all 25 districts of Sri Lanka.",
      icon: Truck,
      tag: "Express Courier",
      highlight: "from-[#FF4D2E] to-amber-400",
    },
  ];

  return (
    <section
      id="how-it-works"
      ref={containerRef}
      className="py-24 relative bg-[var(--landing-bg)] overflow-hidden transition-colors duration-300"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 circuit-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--landing-surface)] border border-[var(--landing-border)] text-xs font-mono-spec text-[#2F6BFF] dark:text-[#22D3EE] mb-4 shadow-xs">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>SEAMLESS WORKFLOW</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[var(--landing-text-primary)] tracking-tight">
            How Lasertronics Delivers
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--landing-text-secondary)] font-body">
            Engineered for zero downtime. From component discovery to bench delivery in 3 streamlined steps.
          </p>
        </div>

        {/* Steps Grid with Connecting Circuit Line */}
        <div className="relative">
          
          {/* Desktop SVG Circuit Line Connecting the Steps */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 -translate-y-12 z-0 pointer-events-none">
            <svg
              className="w-full h-24"
              viewBox="0 0 1000 100"
              fill="none"
              preserveAspectRatio="none"
            >
              {/* Background trace line */}
              <path
                d="M 120 50 L 320 50 L 360 50 L 640 50 L 680 50 L 880 50"
                stroke="var(--landing-border)"
                strokeWidth="3"
                strokeLinecap="round"
              />

              {/* Animated glowing drawing circuit line */}
              <path
                d="M 120 50 L 320 50 L 360 50 L 640 50 L 680 50 L 880 50"
                stroke="url(#circuitGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                className="transition-all duration-1000 ease-out"
                style={
                  prefersReduced
                    ? undefined
                    : {
                        strokeDasharray: 1000,
                        strokeDashoffset: inView ? 0 : 1000,
                        transition: "stroke-dashoffset 1.8s cubic-bezier(0.16, 1, 0.3, 1)",
                      }
                }
              />

              {/* Glowing Pulse Signals */}
              <circle cx="200" cy="50" r="4" fill="#22D3EE" className="animate-pulse" />
              <circle cx="500" cy="50" r="4" fill="#2F6BFF" className="animate-pulse" />
              <circle cx="800" cy="50" r="4" fill="#FF4D2E" className="animate-pulse" />

              <defs>
                <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2F6BFF" />
                  <stop offset="50%" stopColor="#22D3EE" />
                  <stop offset="100%" stopColor="#FF4D2E" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* 3 Step Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.num}
                  className="rounded-3xl bg-[var(--landing-surface)] border border-[var(--landing-border)] hover:border-[#2F6BFF]/40 backdrop-blur-xl p-5 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 shadow-[var(--landing-card-shadow)] group"
                >
                  <div>
                    {/* Top Step Number & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--landing-surface-subtle)] border border-[var(--landing-border)] shadow-xs group-hover:scale-110 group-hover:border-[#2F6BFF]/50 transition-all">
                        <Icon className="h-7 w-7 text-[#2F6BFF] dark:text-[#22D3EE]" />
                      </div>
                      <span className="font-mono-spec font-bold text-3xl text-slate-300 dark:text-slate-700 group-hover:text-[#2F6BFF] dark:group-hover:text-[#22D3EE] transition-colors">
                        {step.num}
                      </span>
                    </div>

                    {/* Step Tag */}
                    <div className="text-[10px] font-mono-spec px-2.5 py-1 rounded-full bg-[var(--landing-surface-subtle)] border border-[var(--landing-border)] text-[var(--landing-text-secondary)] inline-block mb-3">
                      {step.tag}
                    </div>

                    {/* Step Title & Subtitle */}
                    <h3 className="font-heading text-xl font-bold text-[var(--landing-text-primary)] group-hover:text-[#2F6BFF] dark:group-hover:text-[#22D3EE] transition-colors">
                      {step.title}
                    </h3>
                    <div className="text-xs font-mono-spec text-[var(--landing-text-muted)] mt-1 mb-3">
                      {step.subtitle}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-[var(--landing-text-secondary)] font-body leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* Bottom confirmation line */}
                  <div className="mt-8 pt-4 border-t border-[var(--landing-border)] flex items-center justify-between text-xs font-mono-spec text-[var(--landing-text-muted)] transition-colors">
                    <span className="flex items-center gap-1.5 text-emerald-500 font-medium">
                      <CheckCircle2 className="h-3.5 w-3.5" /> Verified Stage
                    </span>
                    <span className="text-[#2F6BFF] dark:text-[#22D3EE] font-semibold">100% Guaranteed</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-12 sm:mt-16 text-center">
          <Link
            to="/shop"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl btn-shimmer font-heading text-sm font-semibold text-white shadow-[0_0_30px_rgba(47,107,255,0.45)] group w-full sm:w-auto text-center"
          >
            <span>Start Your Order Now</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}
