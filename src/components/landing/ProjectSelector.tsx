import { Bot, Cpu, Home, Wrench, Sparkles } from "lucide-react";

export type ProjectFilter = "all" | "robotics" | "iot" | "automation" | "repair";

interface ProjectSelectorProps {
  activeFilter: ProjectFilter;
  onSelectFilter: (filter: ProjectFilter) => void;
}

export function ProjectSelector({ activeFilter, onSelectFilter }: ProjectSelectorProps) {
  const options: { id: ProjectFilter; label: string; icon: typeof Bot; description: string }[] = [
    {
      id: "all",
      label: "All Components",
      icon: Sparkles,
      description: "Everything for your electronics workbench",
    },
    {
      id: "robotics",
      label: "Robotics & Actuators",
      icon: Bot,
      description: "Motors, servos, chassis & motor drivers",
    },
    {
      id: "iot",
      label: "IoT & Wireless",
      icon: Cpu,
      description: "ESP32, Arduino, Wi-Fi & sensor nodes",
    },
    {
      id: "automation",
      label: "Home Automation",
      icon: Home,
      description: "Relays, AC switching, PIR & smart power",
    },
    {
      id: "repair",
      label: "Bench & Repair Tools",
      icon: Wrench,
      description: "Soldering, precision drivers & ESD tools",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center mb-8 sm:mb-12">
      {/* Category Filter Pills Container - Touch scrollable on mobile, centered wrap on desktop */}
      <div className="w-full max-w-4xl overflow-x-auto touch-scroll-x scrollbar-none pb-2 sm:pb-0 px-2 sm:px-0">
        <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-2xl bg-[var(--landing-surface)] border border-[var(--landing-border)] backdrop-blur-xl shadow-[var(--landing-card-shadow)] w-max sm:w-auto sm:flex-wrap sm:justify-center mx-auto transition-all duration-300">
          {options.map((option) => {
            const Icon = option.icon;
            const isActive = activeFilter === option.id;
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => onSelectFilter(option.id)}
                className={`flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl font-heading text-xs sm:text-sm font-semibold whitespace-nowrap shrink-0 sm:shrink transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F6BFF] ${
                  isActive
                    ? "bg-gradient-to-r from-[#2F6BFF] to-[#1E55E6] text-white shadow-[0_0_20px_rgba(47,107,255,0.4)] border border-white/20 scale-[1.02]"
                    : "bg-transparent text-[var(--landing-text-secondary)] hover:text-[var(--landing-text-primary)] hover:bg-[var(--landing-surface-subtle)] border border-transparent"
                }`}
              >
                <Icon className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${isActive ? "text-white" : "text-[var(--landing-text-muted)]"}`} />
                <span>{option.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
