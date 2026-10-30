import { useState, type FormEvent } from "react";
import { useNavigate, Link } from "@tanstack/react-router";
import {
  Search,
  ArrowRight,
  Sparkles,
  Layers,
  Cpu,
  Truck,
  ShieldCheck,
  CheckCircle2,
  Zap,
} from "lucide-react";
import { useTilt, useMagnetic, useReducedMotion } from "@/lib/motion";

export function Hero() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const prefersReduced = useReducedMotion();

  const {
    ref: tiltRef,
    style: tiltStyle,
    handleMouseMove: handleTiltMove,
    handleMouseLeave: handleTiltLeave,
    tilt,
  } = useTilt<HTMLDivElement>({ maxRotation: 12, scale: 1.02 });

  const {
    ref: magneticCtaRef,
    style: magneticCtaStyle,
    handleMouseMove: handleMagneticMove,
    handleMouseLeave: handleMagneticLeave,
  } = useMagnetic<HTMLAnchorElement>(0.2);

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    const query = searchQuery.trim();
    if (query) {
      navigate({
        to: "/shop",
        search: { q: query },
      });
    } else {
      navigate({ to: "/shop" });
    }
  };

  const handleChipClick = (keyword: string) => {
    navigate({
      to: "/shop",
      search: { q: keyword },
    });
  };

  const popularChips = [
    { label: "Arduino", query: "arduino" },
    { label: "ESP32", query: "esp32" },
    { label: "Sensors", query: "sensor" },
    { label: "Batteries", query: "battery" },
    { label: "Soldering", query: "solder" },
  ];

  // Headline words for staggered reveal
  const headlineWords = [
    { text: "Every", highlight: false },
    { text: "Electronic", highlight: "cyan" },
    { text: "Component.", highlight: "cyan" },
    { text: "One", highlight: false },
    { text: "Store.", highlight: false },
    { text: "Island-Wide.", highlight: "laser" },
  ];

  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden flex items-center bg-[var(--landing-bg)] transition-colors duration-300">
      {/* Background Aurora / Gradient Mesh */}
      <div className="aurora-mesh-container" aria-hidden="true">
        <div className="aurora-blob aurora-1" />
        <div className="aurora-blob aurora-2" />
        <div className="aurora-blob aurora-3" />
      </div>

      {/* Faint Circuit-Board Grid & Noise Overlay */}
      <div className="absolute inset-0 circuit-grid opacity-60 pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 noise-texture pointer-events-none" aria-hidden="true" />

      {/* Radial vignette mask for seamless blending */}
      <div
        className="absolute inset-0 pointer-events-none transition-colors duration-300"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 20%, transparent 40%, var(--landing-vignette-stop) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines, Search, and CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[var(--landing-surface)] border border-[var(--landing-border)] backdrop-blur-md shadow-sm mb-6 group cursor-default">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22D3EE] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22D3EE]" />
              </span>
              <span className="text-xs font-mono-spec text-[var(--landing-text-secondary)]">
                16,700+ InTouch POS Synced SKUs
              </span>
              <span className="text-slate-400 dark:text-slate-600">|</span>
              <span className="text-xs font-mono-spec text-[#FF4D2E] font-medium flex items-center gap-1">
                <Zap className="h-3 w-3" /> Colombo 01 Hub
              </span>
            </div>

            {/* Word-by-word Staggered Reveal Headline */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-6xl xl:text-7xl tracking-[-0.03em] leading-[1.08] text-[var(--landing-text-primary)] max-w-2xl">
              {headlineWords.map((item, index) => {
                let colorClass = "text-[var(--landing-text-primary)]";
                if (item.highlight === "cyan") {
                  colorClass = "text-gradient-cyan";
                } else if (item.highlight === "laser") {
                  colorClass = "text-gradient-laser";
                }

                return (
                  <span
                    key={index}
                    className={`inline-block mr-[0.28em] transition-all duration-700 ${colorClass}`}
                    style={
                      prefersReduced
                        ? undefined
                        : {
                            animation: `fadeUpWord 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${index * 80}ms backwards`,
                          }
                    }
                  >
                    {item.text}
                  </span>
                );
              })}
            </h1>

            {/* Subheading with InTouch, LKR pricing, and Island-wide delivery */}
            <p className="mt-6 text-base sm:text-lg text-[var(--landing-text-secondary)] font-body leading-relaxed max-w-xl">
              Sri Lanka’s most comprehensive electronics & hardware hub. 
              <strong className="text-[var(--landing-text-primary)] font-semibold"> 16,700+ live products</strong> directly synchronized with our Colombo physical store inventory, 
              <strong className="text-[#2F6BFF] dark:text-[#22D3EE] font-semibold"> 100% LKR transparent pricing</strong>, and fast island-wide doorstep delivery.
            </p>

            {/* Live Search Bar */}
            <form
              onSubmit={handleSearchSubmit}
              className="mt-8 w-full max-w-xl relative group"
            >
              <div className="relative flex items-center rounded-2xl bg-[var(--landing-surface)] border border-[var(--landing-border)] backdrop-blur-xl shadow-[var(--landing-card-shadow)] focus-within:border-[#2F6BFF] focus-within:shadow-[0_0_30px_rgba(47,107,255,0.35)] transition-all duration-300">
                <Search className="h-5 w-5 text-[var(--landing-text-muted)] ml-4 shrink-0 transition-colors group-focus-within:text-[#2F6BFF] dark:group-focus-within:text-[#22D3EE]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search 16,700+ components, ICs, sensors, Arduino, tools..."
                  className="w-full bg-transparent px-4 py-4 text-sm sm:text-base text-[var(--landing-text-primary)] placeholder-[var(--landing-text-subtle)] focus:outline-none"
                />
                <button
                  type="submit"
                  className="mr-2 px-5 py-2.5 rounded-xl btn-shimmer font-heading text-xs font-semibold text-white tracking-wide shrink-0 transition-transform active:scale-95 shadow-sm"
                >
                  Search
                </button>
              </div>

              {/* Popular Search Chips */}
              <div className="mt-3.5 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono-spec text-[var(--landing-text-muted)] mr-1">Popular:</span>
                {popularChips.map((chip) => (
                  <button
                    key={chip.label}
                    type="button"
                    onClick={() => handleChipClick(chip.query)}
                    className="px-3 py-1 rounded-lg bg-[var(--landing-chip-bg)] border border-[var(--landing-border)] text-xs font-medium text-[var(--landing-chip-text)] hover:border-[#2F6BFF]/40 hover:text-[#2F6BFF] transition-all duration-200"
                  >
                    {chip.label}
                  </button>
                ))}
              </div>
            </form>

            {/* CTAs */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                ref={magneticCtaRef}
                to="/shop"
                style={magneticCtaStyle}
                onMouseMove={handleMagneticMove}
                onMouseLeave={handleMagneticLeave}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl btn-shimmer font-heading text-sm font-semibold tracking-wide text-white shadow-[0_0_30px_rgba(47,107,255,0.45)] group"
              >
                <span>Browse Catalog</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <a
                href="#categories"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[var(--landing-surface)] border border-[var(--landing-border)] hover:border-[#2F6BFF]/30 text-sm font-heading font-medium text-[var(--landing-text-primary)] backdrop-blur-md shadow-xs transition-all duration-200 hover:bg-[var(--landing-surface-subtle)]"
              >
                <Layers className="h-4 w-4 text-[#2F6BFF] dark:text-[#22D3EE]" />
                <span>View Categories</span>
              </a>
            </div>

            {/* Social Proof Trust Strip */}
            <div className="mt-10 pt-6 border-t border-[var(--landing-border)] flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="h-8 w-8 rounded-full border-2 border-[var(--landing-surface)] bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-[10px] font-bold text-white shadow-xs">
                  LK
                </div>
                <div className="h-8 w-8 rounded-full border-2 border-[var(--landing-surface)] bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-[10px] font-bold text-white shadow-xs">
                  VG
                </div>
                <div className="h-8 w-8 rounded-full border-2 border-[var(--landing-surface)] bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center text-[10px] font-bold text-white shadow-xs">
                  UoM
                </div>
              </div>
              <div className="text-xs text-[var(--landing-text-muted)] font-mono-spec">
                <span className="text-[var(--landing-text-primary)] font-semibold">4.9/5 Rating</span> • Trusted by 3,200+ Sri Lankan Engineers & Technicians
              </div>
            </div>

          </div>

          {/* Right Column: Floating 3D-Style PCB/Chip Visual with Parallax & Tilt */}
          <div className="lg:col-span-5 flex justify-center relative perspective-[1200px]">
            <div
              ref={tiltRef}
              style={tiltStyle}
              onMouseMove={handleTiltMove}
              onMouseLeave={handleTiltLeave}
              className="relative w-full max-w-md sm:max-w-lg aspect-square rounded-3xl p-6 sm:p-8 flex items-center justify-center select-none"
            >
              {/* Outer Cyber Glow Halo */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#2F6BFF]/25 via-transparent to-[#FF4D2E]/20 blur-2xl pointer-events-none" />

              {/* Main Silicon Chip Carrier / Motherboard Substrate */}
              <div className="relative w-full h-full rounded-3xl bg-[var(--landing-surface)] border border-[var(--landing-border)] backdrop-blur-2xl p-6 flex flex-col items-center justify-center overflow-hidden shadow-[var(--landing-card-shadow)]">
                
                {/* Circuit Grid Background inside substrate */}
                <div className="absolute inset-0 circuit-grid-dense opacity-40 pointer-events-none" />

                {/* Laser Holographic Glare based on tilt spotlight */}
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                  style={{
                    opacity: tilt.isHovered ? 0.75 : 0.3,
                    background: `radial-gradient(circle 280px at ${tilt.spotlightX}% ${tilt.spotlightY}%, rgba(34, 211, 238, 0.25) 0%, rgba(47, 107, 255, 0.1) 40%, transparent 70%)`,
                  }}
                />

                {/* Microcontroller Heat Spreader Package (Centerpiece) */}
                <div className="relative z-10 w-52 h-52 sm:w-60 sm:h-60 rounded-2xl bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#0B0F19] dark:from-[#1A2338] dark:via-[#0E1524] dark:to-[#0A0E17] border-2 border-white/20 p-5 flex flex-col justify-between shadow-2xl">
                  {/* Gold Corner Alignment Markers */}
                  <div className="absolute top-2 left-2 w-2 h-2 rounded-sm bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
                  <div className="absolute top-2 right-2 w-2 h-2 rounded-sm bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
                  <div className="absolute bottom-2 left-2 w-2 h-2 rounded-sm bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
                  <div className="absolute bottom-2 right-2 w-2 h-2 rounded-sm bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />

                  {/* Header chip telemetry */}
                  <div className="flex items-center justify-between text-[10px] font-mono-spec text-[#22D3EE]">
                    <span className="flex items-center gap-1">
                      <Cpu className="h-3.5 w-3.5 text-[#22D3EE]" /> LT-2026-X
                    </span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                      16.7k SYNC
                    </span>
                  </div>

                  {/* Laser-etched silicon center logo */}
                  <div className="flex flex-col items-center justify-center my-auto text-center">
                    <div className="h-14 w-14 rounded-xl bg-gradient-to-tr from-[#2F6BFF]/40 to-[#22D3EE]/30 border border-[#22D3EE]/50 flex items-center justify-center mb-2 shadow-[0_0_20px_rgba(34,211,238,0.35)]">
                      <Sparkles className="h-7 w-7 text-[#22D3EE] animate-pulse" />
                    </div>
                    <div className="font-heading font-bold text-sm text-white tracking-wider">
                      LASERTRONICS
                    </div>
                    <div className="text-[9px] font-mono-spec text-slate-400 tracking-widest uppercase">
                      INVENTRON BUS v4
                    </div>
                  </div>

                  {/* Bottom specs */}
                  <div className="flex items-center justify-between text-[9px] font-mono-spec text-slate-400 pt-2 border-t border-white/10">
                    <span>100% LKR CORE</span>
                    <span>LK-COLOMBO-01</span>
                  </div>
                </div>

                {/* Floating Telemetry HUD Card 1: InTouch ERP Live */}
                <div
                  className="absolute -top-4 -right-2 sm:-right-4 z-20 px-3.5 py-2.5 rounded-xl bg-[var(--landing-surface)]/98 border border-[var(--landing-border)] backdrop-blur-xl shadow-lg flex items-center gap-3 transition-transform duration-300"
                  style={{
                    transform: `translate3d(${tilt.rotateY * -0.6}px, ${tilt.rotateX * -0.6}px, 20px)`,
                  }}
                >
                  <div className="h-7 w-7 rounded-lg bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono-spec text-[var(--landing-text-muted)] uppercase">
                      InTouch POS ERP
                    </div>
                    <div className="text-xs font-mono-spec font-bold text-emerald-500 flex items-center gap-1.5">
                      <span>16,748 SKUs Online</span>
                    </div>
                  </div>
                </div>

                {/* Floating Telemetry HUD Card 2: Island-Wide Delivery */}
                <div
                  className="absolute -bottom-3 -left-2 sm:-left-4 z-20 px-3.5 py-2.5 rounded-xl bg-[var(--landing-surface)]/98 border border-[var(--landing-border)] backdrop-blur-xl shadow-lg flex items-center gap-3 transition-transform duration-300"
                  style={{
                    transform: `translate3d(${tilt.rotateY * 0.8}px, ${tilt.rotateX * 0.8}px, 25px)`,
                  }}
                >
                  <div className="h-7 w-7 rounded-lg bg-[#2F6BFF]/15 border border-[#2F6BFF]/40 flex items-center justify-center shrink-0">
                    <Truck className="h-4 w-4 text-[#2F6BFF]" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono-spec text-[var(--landing-text-muted)] uppercase">
                      Island-Wide Delivery
                    </div>
                    <div className="text-xs font-mono-spec font-bold text-[var(--landing-text-primary)]">
                      Doorstep in 24-48 Hours
                    </div>
                  </div>
                </div>

                {/* Floating Telemetry HUD Card 3: 100% LKR Pricing */}
                <div
                  className="absolute bottom-6 right-2 sm:right-0 z-20 px-3 py-2 rounded-xl bg-[var(--landing-surface)]/98 border border-[#FF4D2E]/40 backdrop-blur-xl shadow-lg flex items-center gap-2.5 transition-transform duration-300"
                  style={{
                    transform: `translate3d(${tilt.rotateY * -0.5}px, ${tilt.rotateX * 0.5}px, 30px)`,
                  }}
                >
                  <div className="h-6 w-6 rounded-lg bg-[#FF4D2E]/15 border border-[#FF4D2E]/40 flex items-center justify-center shrink-0">
                    <ShieldCheck className="h-3.5 w-3.5 text-[#FF4D2E]" />
                  </div>
                  <div className="text-[11px] font-mono-spec font-bold text-[#FF4D2E]">
                    100% LKR Guarantee
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Embedded keyframe for staggered words animation */}
      <style>{`
        @keyframes fadeUpWord {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.96);
            filter: blur(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }
      `}</style>
    </section>
  );
}
