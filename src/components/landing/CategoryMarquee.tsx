import { Link } from "@tanstack/react-router";
import {
  Smartphone,
  CircuitBoard,
  Tv,
  Cpu,
  Wrench,
  Bot,
  Zap,
  ArrowRight,
  Radio,
} from "lucide-react";
import { useReducedMotion } from "@/lib/motion";

interface CategoryItem {
  slug: string;
  name: string;
  tagline: string;
  icon: typeof Smartphone;
  count: string;
  badge?: string;
}

export function CategoryMarquee() {
  const prefersReduced = useReducedMotion();

  const categories: CategoryItem[] = [
    {
      slug: "iot-and-microcontrollers",
      name: "IoT & Microcontrollers",
      tagline: "Arduino, ESP32, STM32 & Sensors",
      icon: Cpu,
      count: "3,420+ SKUs",
      badge: "High Demand",
    },
    {
      slug: "electronics",
      name: "Electronics & Components",
      tagline: "ICs, Relays, Passives & Modules",
      icon: CircuitBoard,
      count: "6,150+ SKUs",
      badge: "Core Catalog",
    },
    {
      slug: "repair-kits",
      name: "Bench-Grade Repair Tools",
      tagline: "Soldering Stations, ESD & Meters",
      icon: Wrench,
      count: "1,280+ SKUs",
      badge: "Pro Grade",
    },
    {
      slug: "mobile-accessories",
      name: "Mobile & Power Gear",
      tagline: "GaN Chargers, Cables & Li-Ion",
      icon: Smartphone,
      count: "3,890+ SKUs",
    },
    {
      slug: "tv-accessories",
      name: "Audio/Video & TV",
      tagline: "4K HDMI, Converters & Optical",
      icon: Tv,
      count: "1,960+ SKUs",
    },
    {
      slug: "iot-and-microcontrollers",
      name: "Robotics & Actuators",
      tagline: "Stepper Motors, Servos & Drivers",
      icon: Bot,
      count: "1,140+ SKUs",
      badge: "Robotics",
    },
  ];

  // Duplicate array for seamless infinite loop
  const marqueeItems = [...categories, ...categories];

  return (
    <section id="categories" className="py-20 relative overflow-hidden bg-[var(--landing-bg)] transition-colors duration-300">
      {/* Background Section Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#2F6BFF]/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--landing-surface)] border border-[var(--landing-border)] text-xs font-mono-spec text-[#2F6BFF] dark:text-[#22D3EE] mb-3 shadow-xs">
            <Radio className="h-3 w-3 animate-pulse" />
            <span>CATEGORIES ARCHITECTURE</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[var(--landing-text-primary)] tracking-tight">
            Explore 16,700+ Hardware Categories
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[var(--landing-text-secondary)] font-body max-w-xl">
            Everything from surface-mount diodes and ESP32 dev boards to digital soldering stations, organized for rapid discovery.
          </p>
        </div>

        <Link
          to="/shop"
          className="inline-flex items-center gap-1.5 text-xs font-mono-spec text-[#2F6BFF] dark:text-[#22D3EE] hover:underline transition-colors shrink-0 group self-start sm:self-auto"
        >
          <span>View All 16,700+ SKUs in Catalog</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative w-full overflow-hidden group">
        {/* Left & Right Edge Fade Vignettes */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-[var(--landing-bg)] to-transparent z-10 pointer-events-none transition-colors duration-300" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-[var(--landing-bg)] to-transparent z-10 pointer-events-none transition-colors duration-300" />

        {/* Marquee Track */}
        <div
          className={`flex gap-5 w-max ${
            prefersReduced ? "overflow-x-auto px-6 py-2" : "animate-marquee hover:[animation-play-state:paused]"
          }`}
          style={{ willChange: "transform" }}
        >
          {marqueeItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={`${item.name}-${index}`}
                to="/category/$slug"
                params={{ slug: item.slug }}
                className="w-72 sm:w-80 p-5 rounded-2xl bg-[var(--landing-surface)] border border-[var(--landing-border)] hover:border-[#2F6BFF]/40 backdrop-blur-xl shadow-[var(--landing-card-shadow)] transition-all duration-300 hover:-translate-y-1 group/card flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-11 w-11 rounded-xl bg-[var(--landing-surface-subtle)] border border-[var(--landing-border)] flex items-center justify-center group-hover/card:border-[#2F6BFF]/50 group-hover/card:bg-[#2F6BFF]/10 transition-colors">
                      <Icon className="h-5 w-5 text-[#2F6BFF] dark:text-[#22D3EE] group-hover/card:scale-110 transition-transform" />
                    </div>
                    {item.badge ? (
                      <span className="text-[10px] font-mono-spec px-2 py-0.5 rounded-full bg-[#2F6BFF]/15 border border-[#2F6BFF]/30 text-[#2F6BFF] dark:text-[#22D3EE] font-medium">
                        {item.badge}
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono-spec text-[var(--landing-text-muted)]">
                        INTOUCH SYNC
                      </span>
                    )}
                  </div>

                  <h3 className="font-heading text-base font-bold text-[var(--landing-text-primary)] group-hover/card:text-[#2F6BFF] dark:group-hover/card:text-[#22D3EE] transition-colors">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-xs text-[var(--landing-text-muted)] font-body line-clamp-2">
                    {item.tagline}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-[var(--landing-border)] flex items-center justify-between text-xs font-mono-spec">
                  <span className="text-emerald-500 font-semibold">{item.count}</span>
                  <span className="flex items-center gap-1 text-[var(--landing-text-muted)] group-hover/card:text-[var(--landing-text-primary)] transition-colors">
                    Browse <ArrowRight className="h-3 w-3 transition-transform group-hover/card:translate-x-1" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Marquee CSS Keyframes */}
      <style>{`
        @keyframes marqueeScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marqueeScroll 36s linear infinite;
        }
      `}</style>
    </section>
  );
}
