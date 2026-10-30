import { useState, type MouseEvent } from "react";
import {
  RefreshCw,
  Coins,
  Truck,
  Zap,
  WifiOff,
  FileCode2,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  Smartphone,
  Cpu,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useInView } from "@/lib/motion";

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
}

function BentoCard({ children, className = "" }: BentoCardProps) {
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMousePos(null);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`bento-card group p-5 sm:p-8 flex flex-col justify-between overflow-hidden relative ${className}`}
    >
      {/* Dynamic Cursor Spotlight Glare */}
      {mousePos && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-px transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(47, 107, 255, 0.12), rgba(34, 211, 238, 0.05), transparent 70%)`,
          }}
        />
      )}
      {children}
    </div>
  );
}

export function BentoFeatures() {
  const [containerRef, inView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      id="features"
      ref={containerRef}
      className="py-24 relative bg-[var(--landing-bg)] overflow-hidden transition-colors duration-300"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#22D3EE]/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-[#2F6BFF]/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--landing-surface)] border border-[var(--landing-border)] text-xs font-mono-spec text-[#2F6BFF] dark:text-[#22D3EE] mb-4 shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-[#2F6BFF] dark:text-[#22D3EE]" />
            <span>ENGINEERED FOR SRI LANKA</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[var(--landing-text-primary)] tracking-tight">
            Built Like an Operating System for Electronics
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--landing-text-secondary)] font-body">
            Combining Colombo's largest brick-and-mortar hardware stock with automated InTouch POS syncing and precision engineering specs.
          </p>
        </div>

        {/* Bento Grid: 6 Mixed Size Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Card 1: 2-Columns Span - Live Inventory Synced with Physical Store */}
          <BentoCard className="md:col-span-2 lg:col-span-2 min-h-[340px]">
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono-spec text-emerald-500 mb-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span>AUTOMATED POS SYNC • 15s POLLING</span>
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--landing-text-primary)]">
                    Live Inventory Synced with Physical Store
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-[var(--landing-text-secondary)] font-body max-w-lg">
                    Never order an out-of-stock component again. Our central database synchronizes in real time with our physical warehouse on 1st Cross Street, Colombo 01.
                  </p>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--landing-surface-subtle)] border border-[var(--landing-border)] text-[#2F6BFF] dark:text-[#22D3EE] shadow-xs group-hover:scale-110 transition-transform">
                  <RefreshCw className="h-6 w-6 group-hover:rotate-180 transition-transform duration-700" />
                </div>
              </div>

              {/* High-Tech Telemetry Status Bar Simulation */}
              <div className="rounded-2xl bg-[var(--landing-bg-secondary)] border border-[var(--landing-border)] p-4 font-mono-spec text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-[var(--landing-border)]">
                  <div className="flex items-center gap-2">
                    <Cpu className="h-4 w-4 text-[#2F6BFF] dark:text-[#22D3EE]" />
                    <span className="text-[var(--landing-text-primary)] font-semibold">InTouch POS Terminal Bus</span>
                  </div>
                  <span className="text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded text-[11px] font-bold border border-emerald-500/20">
                    CONNECTED • 18ms
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 text-[11px] text-[var(--landing-text-secondary)]">
                  <div>
                    <span className="block text-[var(--landing-text-muted)]">Live SKUs</span>
                    <strong className="text-[var(--landing-text-primary)]">16,748</strong>
                  </div>
                  <div>
                    <span className="block text-[var(--landing-text-muted)]">Warehouse</span>
                    <strong className="text-[var(--landing-text-primary)]">Colombo 01</strong>
                  </div>
                  <div>
                    <span className="block text-[var(--landing-text-muted)]">Last Synced</span>
                    <strong className="text-emerald-500">Just Now</strong>
                  </div>
                  <div>
                    <span className="block text-[var(--landing-text-muted)]">Accuracy</span>
                    <strong className="text-[#2F6BFF] dark:text-[#22D3EE]">99.8%</strong>
                  </div>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Card 2: Transparent LKR Pricing */}
          <BentoCard className="min-h-[340px]">
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--landing-surface-subtle)] border border-[var(--landing-border)] text-[#FF4D2E] shadow-xs group-hover:scale-110 transition-transform">
                    <Coins className="h-6 w-6" />
                  </div>
                  <span className="text-[10px] font-mono-spec px-2.5 py-1 rounded-full bg-[#FF4D2E]/15 border border-[#FF4D2E]/30 text-[#FF4D2E] font-medium">
                    No FX Surprise
                  </span>
                </div>

                <h3 className="font-heading text-xl font-bold text-[var(--landing-text-primary)]">
                  Transparent LKR Pricing
                </h3>
                <p className="mt-2 text-sm text-[var(--landing-text-secondary)] font-body">
                  Zero foreign exchange risk or unexpected import clearance fees. Every single price is quoted in Sri Lankan Rupees (Rs.) exactly as you will pay at checkout.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[var(--landing-border)] flex items-center justify-between text-xs font-mono-spec text-[var(--landing-text-muted)]">
                <span className="flex items-center gap-1.5 text-[var(--landing-text-primary)] font-medium">
                  <ShieldCheck className="h-4 w-4 text-emerald-500" />
                  Guaranteed Rate
                </span>
                <span className="text-emerald-500 font-bold">100% LKR</span>
              </div>
            </div>
          </BentoCard>

          {/* Card 3: Island-Wide Delivery */}
          <BentoCard className="min-h-[340px]">
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--landing-surface-subtle)] border border-[var(--landing-border)] text-[#2F6BFF] shadow-xs group-hover:scale-110 transition-transform">
                    <Truck className="h-6 w-6" />
                  </div>
                  <span className="text-[10px] font-mono-spec px-2.5 py-1 rounded-full bg-[#2F6BFF]/15 border border-[#2F6BFF]/30 text-[#2F6BFF] dark:text-[#22D3EE] font-medium">
                    All 25 Districts
                  </span>
                </div>

                <h3 className="font-heading text-xl font-bold text-[var(--landing-text-primary)]">
                  Island-Wide Doorstep Delivery
                </h3>
                <p className="mt-2 text-sm text-[var(--landing-text-secondary)] font-body">
                  From Jaffna to Matara, Kandy to Batticaloa. Standard 24–48 hour dispatch via tracked express couriers with moisture-proof, ESD-safe component packaging.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[var(--landing-border)] flex items-center justify-between text-xs font-mono-spec text-[var(--landing-text-muted)]">
                <span className="text-[var(--landing-text-primary)] font-medium">Colombo Metro:</span>
                <span className="text-[#2F6BFF] dark:text-[#22D3EE] font-bold">Next-Day Dispatch</span>
              </div>
            </div>
          </BentoCard>

          {/* Card 4: Instant "Buy Now" Checkout */}
          <BentoCard className="min-h-[340px]">
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--landing-surface-subtle)] border border-[var(--landing-border)] text-amber-500 shadow-xs group-hover:scale-110 transition-transform">
                    <Zap className="h-6 w-6" />
                  </div>
                  <span className="text-[10px] font-mono-spec px-2.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-600 dark:text-amber-300 font-medium">
                    60-Second Flow
                  </span>
                </div>

                <h3 className="font-heading text-xl font-bold text-[var(--landing-text-primary)]">
                  Instant "Buy Now" Checkout
                </h3>
                <p className="mt-2 text-sm text-[var(--landing-text-secondary)] font-body">
                  No mandatory accounts or tedious registration walls. Complete your order in seconds with Cash on Delivery (COD), Card, or Direct Bank Transfer.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[var(--landing-border)] flex items-center justify-between text-xs font-mono-spec text-[var(--landing-text-muted)]">
                <span className="text-[var(--landing-text-primary)] font-medium">Payment Options:</span>
                <span className="text-amber-500 font-semibold">COD • Bank • Card</span>
              </div>
            </div>
          </BentoCard>

          {/* Card 5: Offline Catalog Browsing (PWA) */}
          <BentoCard className="min-h-[340px]">
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--landing-surface-subtle)] border border-[var(--landing-border)] text-[#2F6BFF] dark:text-[#22D3EE] shadow-xs group-hover:scale-110 transition-transform">
                    <WifiOff className="h-6 w-6" />
                  </div>
                  <span className="text-[10px] font-mono-spec px-2.5 py-1 rounded-full bg-[#2F6BFF]/15 border border-[#2F6BFF]/30 text-[#2F6BFF] dark:text-[#22D3EE] font-medium">
                    Service Worker PWA
                  </span>
                </div>

                <h3 className="font-heading text-xl font-bold text-[var(--landing-text-primary)]">
                  Offline Catalog Browsing (PWA)
                </h3>
                <p className="mt-2 text-sm text-[var(--landing-text-secondary)] font-body">
                  Engineered as an installable Progressive Web App. Browse specs, pinouts, and product pricing even in areas with spotty cellular or lab signal.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[var(--landing-border)] flex items-center justify-between text-xs font-mono-spec text-[var(--landing-text-muted)]">
                <span className="text-[var(--landing-text-primary)] font-medium">Field Ready:</span>
                <span className="text-[#2F6BFF] dark:text-[#22D3EE] font-semibold">IndexedDB Cached</span>
              </div>
            </div>
          </BentoCard>

          {/* Card 6: 2-Columns Span - Datasheet-Grade Product Specs */}
          <BentoCard className="md:col-span-2 lg:col-span-3 min-h-[300px]">
            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 h-full">
              <div className="max-w-xl">
                <div className="flex items-center gap-2 text-xs font-mono-spec text-[#2F6BFF] dark:text-[#22D3EE] mb-2 font-medium">
                  <FileCode2 className="h-4 w-4" />
                  <span>TECHNICAL PRECISION DOCUMENTATION</span>
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--landing-text-primary)]">
                  Datasheet-Grade Product Specs & Pinouts
                </h3>
                <p className="mt-2 text-sm sm:text-base text-[var(--landing-text-secondary)] font-body">
                  No vague one-liners. Every IC, sensor, and microcontroller includes full operating voltage parameters, package dimensions, logic levels, and pin diagrams so engineers build with confidence.
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs font-mono-spec">
                  <span className="px-2.5 py-1 rounded-md bg-[var(--landing-surface-subtle)] border border-[var(--landing-border)] text-[var(--landing-text-secondary)]">
                    Operating Temp: -40°C to +85°C
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-[var(--landing-surface-subtle)] border border-[var(--landing-border)] text-[var(--landing-text-secondary)]">
                    Logic: 3.3V / 5.0V Tolerant
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-[var(--landing-surface-subtle)] border border-[var(--landing-border)] text-[var(--landing-text-secondary)]">
                    Package: DIP / SMD / QFN
                  </span>
                </div>
              </div>

              {/* Interactive Spec Code Block Simulation */}
              <div className="w-full lg:w-96 rounded-2xl bg-[#0B1120] text-slate-200 border border-slate-800 p-4 font-mono-spec text-xs shadow-xl">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-slate-400 text-[11px]">
                  <span>ESP32-WROOM-32D.spec</span>
                  <span className="text-[#22D3EE]">VERIFIED</span>
                </div>
                <pre className="text-slate-300 text-[11px] leading-relaxed overflow-x-auto">
{`Core: Xtensa Dual-Core 32-bit LX6
Clock: Up to 240 MHz
RAM: 520 KB SRAM | Flash: 4MB
Wireless: Wi-Fi 802.11 b/g/n + BT 4.2 BR/EDR
ADC: 12-bit SAR ADC (18 channels)
Sleep Current: < 5 µA (Deep Sleep)`}
                </pre>
              </div>
            </div>
          </BentoCard>

        </div>
      </div>
    </section>
  );
}
