import { ArrowRight, Sparkles, Cpu, ShieldCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useMagnetic } from "@/lib/motion";

export function FinalCTA() {
  const {
    ref: magneticRef,
    style: magneticStyle,
    handleMouseMove,
    handleMouseLeave,
  } = useMagnetic<HTMLAnchorElement>(0.25);

  return (
    <section className="py-20 relative bg-[var(--landing-bg)] overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Animated Gradient Border Card Container */}
        <div className="relative rounded-[2.5rem] p-[1.5px] overflow-hidden shadow-[0_20px_60px_rgba(47,107,255,0.25)]">
          {/* Animated Sweeping Gradient Border */}
          <div
            aria-hidden="true"
            className="absolute -inset-[100%] animate-spin-slow pointer-events-none opacity-80"
            style={{
              background:
                "conic-gradient(from 0deg, #2F6BFF, #22D3EE, #FF4D2E, #2F6BFF)",
              animationDuration: "10s",
            }}
          />

          {/* Inner Content Card */}
          <div className="relative rounded-[2.4rem] bg-[var(--landing-surface)]/95 backdrop-blur-2xl px-5 py-12 sm:px-16 sm:py-20 text-center flex flex-col items-center justify-center overflow-hidden shadow-[var(--landing-card-shadow)]">
            
            {/* Background Aurora Mesh inside the banner */}
            <div className="absolute inset-0 circuit-grid opacity-30 pointer-events-none" />
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#2F6BFF]/25 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#22D3EE]/20 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl flex flex-col items-center w-full">
              {/* Top micro badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 rounded-full bg-[var(--landing-surface-subtle)] border border-[var(--landing-border)] text-[11px] sm:text-xs font-mono-spec text-[#2F6BFF] dark:text-[#22D3EE] mb-5 sm:mb-6 shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-[#2F6BFF] dark:text-[#22D3EE] shrink-0" />
                <span className="truncate">INTOUCH POS • 16,748 SKUs READY TO SHIP</span>
              </div>

              {/* Headline */}
              <h2 className="font-heading text-3xl xs:text-4xl sm:text-6xl font-extrabold text-[var(--landing-text-primary)] tracking-tight leading-[1.12] sm:leading-[1.08]">
                Start Building Today.
              </h2>

              {/* Subheading */}
              <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-[var(--landing-text-secondary)] font-body leading-relaxed max-w-xl">
                Every sensor, microcontroller, passive component and repair tool in one trusted platform. 
                100% transparent LKR pricing with next-day dispatch across Sri Lanka.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
                <Link
                  ref={magneticRef}
                  to="/shop"
                  style={magneticStyle}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl btn-shimmer font-heading text-sm font-semibold tracking-wide text-white shadow-[0_0_35px_rgba(47,107,255,0.7)] group w-full sm:w-auto text-center"
                >
                  <span>Explore 16,700+ Products</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3.5 sm:py-4 rounded-2xl bg-[var(--landing-surface-subtle)] border border-[var(--landing-border)] hover:bg-[var(--landing-surface)] text-sm font-heading font-medium text-[var(--landing-text-primary)] backdrop-blur-md shadow-xs transition-colors w-full sm:w-auto text-center"
                >
                  <Cpu className="h-4 w-4 text-[#2F6BFF] dark:text-[#22D3EE]" />
                  <span>Contact Central Store</span>
                </Link>
              </div>

              {/* Key Guarantees Strip */}
              <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-[var(--landing-border)] grid grid-cols-1 xs:grid-cols-3 gap-3 sm:gap-6 text-xs font-mono-spec text-[var(--landing-text-muted)] w-full">
                <div className="flex items-center justify-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>100% Authentic Stock</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#2F6BFF] shrink-0" />
                  <span>24-48h Tracked Courier</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#FF4D2E] shrink-0" />
                  <span>Zero Forex Hidden Fees</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Embedded slow spin animation */}
      <style>{`
        @keyframes spinSlow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spinSlow 12s linear infinite;
        }
      `}</style>
    </section>
  );
}
