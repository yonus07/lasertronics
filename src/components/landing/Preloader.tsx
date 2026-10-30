import { useEffect, useState } from "react";
import { Cpu, CheckCircle2 } from "lucide-react";
import { useScrollProgress, useReducedMotion } from "@/lib/motion";

interface PreloaderProps {
  onComplete?: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [bootStep, setBootStep] = useState("INITIALIZING HARDWARE BUS...");
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    // If user prefers reduced motion or already booted this session, finish immediately
    const hasBooted = typeof window !== "undefined" && sessionStorage.getItem("lt_booted");
    if (prefersReduced || hasBooted) {
      setIsDone(true);
      onComplete?.();
      return;
    }

    const startTime = performance.now();
    const duration = 900; // Under 1.2s total

    const interval = setInterval(() => {
      const elapsed = performance.now() - startTime;
      const current = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(current);

      if (current > 30 && current <= 70) {
        setBootStep("SYNCING INTOUCH POS (16,700+ SKUs)...");
      } else if (current > 70) {
        setBootStep("SYSTEM READY • COLOMBO HUB ONLINE");
      }

      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsDone(true);
          try {
            sessionStorage.setItem("lt_booted", "true");
          } catch {
            /* ignore */
          }
          onComplete?.();
        }, 180);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [prefersReduced, onComplete]);

  if (isDone) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#05070D] transition-opacity duration-500 ease-out"
      style={{
        opacity: progress >= 100 ? 0 : 1,
        pointerEvents: progress >= 100 ? "none" : "auto",
      }}
    >
      {/* Background ambient glow */}
      <div className="absolute h-72 w-72 rounded-full bg-[#2F6BFF]/15 blur-3xl pointer-events-none" />
      <div className="absolute h-60 w-60 rounded-full bg-[#22D3EE]/10 blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center">
        {/* Animated Chip Logo Badge */}
        <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#2F6BFF]/40 bg-[#0B0F1A] shadow-[0_0_30px_rgba(47,107,255,0.35)]">
          <Cpu className="h-8 w-8 text-[#22D3EE] animate-pulse" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22D3EE] opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#2F6BFF]" />
          </span>
        </div>

        {/* Wordmark */}
        <div className="font-heading text-xl font-bold tracking-tight text-white mb-1">
          LASERTRONICS<span className="text-[#FF4D2E]">.LK</span>
        </div>
        <p className="text-xs uppercase tracking-widest text-[#22D3EE] font-mono-spec mb-6">
          ENGINEERED BY VALGROW LABS
        </p>

        {/* Progress Bar Container */}
        <div className="w-full bg-[#111827] rounded-full h-1.5 overflow-hidden border border-white/10 mb-3 relative">
          <div
            className="h-full bg-gradient-to-r from-[#2F6BFF] via-[#22D3EE] to-[#FF4D2E] transition-all duration-75 ease-out rounded-full shadow-[0_0_12px_rgba(34,211,238,0.8)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Boot Telemetry Log */}
        <div className="flex items-center justify-between w-full text-[11px] font-mono-spec text-slate-400">
          <span className="flex items-center gap-1.5 truncate text-left">
            {progress >= 100 && <CheckCircle2 className="h-3 w-3 text-emerald-400 shrink-0" />}
            {bootStep}
          </span>
          <span className="text-[#22D3EE] font-semibold pl-2">{progress}%</span>
        </div>
      </div>
    </div>
  );
}

/**
 * Top viewport scroll progress indicator.
 */
export function ScrollProgressBar() {
  const progress = useScrollProgress();

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 h-[2.5px] bg-transparent pointer-events-none"
    >
      <div
        className="h-full bg-gradient-to-r from-[#2F6BFF] via-[#22D3EE] to-[#FF4D2E] transition-all duration-75 ease-out shadow-[0_0_10px_rgba(34,211,238,0.6)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

