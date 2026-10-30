import { useEffect, useState, useRef, useCallback, createElement, type MouseEvent, type RefObject } from "react";

/**
 * Hook to detect if user has requested reduced motion.
 */
export function useReducedMotion(): boolean {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);

    const handler = (event: MediaQueryListEvent) => setReducedMotion(event.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return reducedMotion;
}

/**
 * Intersection Observer hook for scroll reveals.
 */
export interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: UseInViewOptions = {}
): [RefObject<T | null>, boolean] {
  const { threshold = 0.15, rootMargin = "0px 0px -50px 0px", triggerOnce = true } = options;
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) {
      setInView(true);
      return;
    }

    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting) {
          setInView(true);
          if (triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else if (!triggerOnce) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce, prefersReduced]);

  return [ref, inView];
}

/**
 * Smooth 60fps count-up hook using requestAnimationFrame and easeOutExpo curve.
 */
export function useCountUp(
  target: number,
  duration = 2000,
  start = true
): number {
  const [count, setCount] = useState(0);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (!start) return;
    if (prefersReduced) {
      setCount(target);
      return;
    }

    let startTime: number | null = null;
    let animationFrameId: number;

    const easeOutExpo = (t: number): number => {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    };

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutExpo(progress);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [target, duration, start, prefersReduced]);

  return count;
}

/**
 * Magnetic button hook for cursor gravity effect.
 */
export function useMagnetic<T extends HTMLElement = HTMLButtonElement>(strength = 0.35) {
  const ref = useRef<T | null>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const prefersReduced = useReducedMotion();

  const handleMouseMove = useCallback(
    (e: MouseEvent<T>) => {
      if (prefersReduced || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;
      setPosition({ x: deltaX, y: deltaY });
    },
    [strength, prefersReduced]
  );

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 });
  }, []);

  return {
    ref,
    x: position.x,
    y: position.y,
    handleMouseMove,
    handleMouseLeave,
    style: prefersReduced
      ? undefined
      : {
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          transition: position.x === 0 && position.y === 0 ? "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)" : "none",
        },
  };
}

/**
 * 3D Parallax tilt hook with cursor spotlight coordinates.
 */
export interface UseTiltOptions {
  maxRotation?: number;
  scale?: number;
  perspective?: number;
}

export function useTilt<T extends HTMLElement = HTMLDivElement>(options: UseTiltOptions = {}) {
  const { maxRotation = 14, scale = 1.02, perspective = 1000 } = options;
  const ref = useRef<T | null>(null);
  const [tilt, setTilt] = useState<{
    rotateX: number;
    rotateY: number;
    spotlightX: number;
    spotlightY: number;
    isHovered: boolean;
  }>({
    rotateX: 0,
    rotateY: 0,
    spotlightX: 50,
    spotlightY: 50,
    isHovered: false,
  });

  const prefersReduced = useReducedMotion();

  const handleMouseMove = useCallback(
    (e: MouseEvent<T>) => {
      if (prefersReduced || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const normX = (x / rect.width - 0.5) * 2;
      const normY = (y / rect.height - 0.5) * 2;

      const rotateY = normX * maxRotation;
      const rotateX = -normY * maxRotation;

      setTilt({
        rotateX,
        rotateY,
        spotlightX: (x / rect.width) * 100,
        spotlightY: (y / rect.height) * 100,
        isHovered: true,
      });
    },
    [maxRotation, prefersReduced]
  );

  const handleMouseLeave = useCallback(() => {
    setTilt((prev) => ({
      ...prev,
      rotateX: 0,
      rotateY: 0,
      isHovered: false,
    }));
  }, []);

  return {
    ref,
    tilt,
    handleMouseMove,
    handleMouseLeave,
    style: prefersReduced
      ? undefined
      : {
          transform: tilt.isHovered
            ? `perspective(${perspective}px) rotateX(${tilt.rotateX.toFixed(2)}deg) rotateY(${tilt.rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, 1)`
            : `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
          transition: tilt.isHovered
            ? "transform 0.1s cubic-bezier(0.2, 0, 0.3, 1)"
            : "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
          willChange: "transform",
        },
  };
}

/**
 * Hook to track window scroll progress percentage (0 - 100).
 */
export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (totalHeight > 0) {
            const current = (window.scrollY / totalHeight) * 100;
            setProgress(Math.min(100, Math.max(0, current)));
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return progress;
}

/**
 * Interactive desktop cursor glow trail component.
 * Subtle ambient blue/cyan light that follows the mouse across dark surfaces.
 */
export function CursorGlowTrail() {
  const [coords, setCoords] = useState<{ x: number; y: number } | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced || typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return; // Touch devices

    const handleMouseMove = (e: globalThis.MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible, prefersReduced]);

  if (!coords || !isVisible || prefersReduced) return null;

  return createElement("div", {
    "aria-hidden": true,
    className: "pointer-events-none fixed z-30 transition-opacity duration-300 ease-out",
    style: {
      left: `${coords.x}px`,
      top: `${coords.y}px`,
      transform: "translate(-50%, -50%)",
      width: "500px",
      height: "500px",
      background: "radial-gradient(circle, rgba(47, 107, 255, 0.08) 0%, rgba(34, 211, 238, 0.03) 40%, transparent 70%)",
      filter: "blur(20px)",
    },
  });
}
