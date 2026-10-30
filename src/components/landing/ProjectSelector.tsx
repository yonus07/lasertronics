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
    <div className="w-full flex flex-col items-center mb-12">
      {/* Category Filter Pills Container */}
      <div className="flex flex-wrap items-center justify-center gap-2 p-2 rounded-2xl bg-[var(--landing-surface)] border border-[var(--landing-border)] backdrop-blur-xl shadow-[var(--landing-card-shadow)] max-w-4xl transition-all duration-300">
        {options.map((option) => {
          const Icon = option.icon;
          const isActive = activeFilter === option.id;
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onSelectFilter(option.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-heading text-xs sm:text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F6BFF] ${
                isActive
                  ? "bg-gradient-to-r from-[#2F6BFF] to-[#1E55E6] text-white shadow-[0_0_20px_rgba(47,107,255,0.4)] border border-white/20 scale-[1.02]"
                  : "bg-transparent text-[var(--landing-text-secondary)] hover:text-[var(--landing-text-primary)] hover:bg-[var(--landing-surface-subtle)] border border-transparent"
              }`}
            >
              <Icon className={`h-4 w-4 ${isActive ? "text-white" : "text-[var(--landing-text-muted)]"}`} />
              <span>{option.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
