import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import {
  ShoppingCart,
  Menu,
  X,
  ArrowRight,
  Sun,
  Moon,
  CircuitBoard,
  Sparkles,
} from "lucide-react";
import { useCart } from "@/lib/cart";
import { useTheme } from "@/lib/theme";
import { useMagnetic } from "@/lib/motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { count } = useCart();
  const { theme, toggleTheme } = useTheme();
  const { ref: magneticRef, style: magneticStyle, handleMouseMove, handleMouseLeave } = useMagnetic<HTMLAnchorElement>(0.25);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Categories", href: "#categories" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Solutions", href: "#solutions" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-out ${
        isScrolled
          ? "bg-[var(--landing-nav-bg)] backdrop-blur-xl border-b border-[var(--landing-border)] py-3 shadow-[var(--landing-card-shadow)]"
          : "bg-transparent py-5 sm:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between gap-2 sm:gap-4" aria-label="Main Navigation">
          {/* Logo & ValGrow attribution */}
          <Link
            to="/landing"
            className="flex items-center gap-2 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F6BFF] rounded-lg p-1 min-w-0"
          >
            <div className="relative flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-[var(--landing-surface)] border border-[var(--landing-border)] shadow-md group-hover:border-[#22D3EE]/50 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300 shrink-0">
              <CircuitBoard className="h-5 w-5 sm:h-6 sm:w-6 text-[#2F6BFF] dark:text-[#22D3EE] group-hover:scale-110 transition-transform duration-300" />
              <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full bg-[#FF4D2E]" />
            </div>

            <div className="flex flex-col min-w-0">
              <div className="font-heading text-base sm:text-xl font-bold tracking-tight text-[var(--landing-text-primary)] flex items-center gap-1 sm:gap-1.5 truncate">
                <span>LASERTRONICS</span>
                <span className="text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded-full bg-[#FF4D2E]/15 text-[#FF4D2E] font-mono-spec border border-[#FF4D2E]/30 uppercase font-semibold">
                  LK
                </span>
              </div>
              <span className="text-[9px] sm:text-[10px] text-[var(--landing-text-muted)] font-mono-spec tracking-wider truncate">
                ENGINEERED BY <span className="text-[#2F6BFF] dark:text-[#22D3EE] font-medium">VALGROW LABS</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 px-4 py-1.5 rounded-full bg-[var(--landing-surface)]/80 border border-[var(--landing-border)] backdrop-blur-md shadow-xs">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-[var(--landing-text-secondary)] hover:text-[var(--landing-text-primary)] hover:bg-[var(--landing-surface-subtle)] rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F6BFF]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Action Stack */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Live InTouch Sync Pill (Desktop) */}
            <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--landing-surface)] border border-[var(--landing-border)] text-[11px] font-mono-spec text-[var(--landing-text-secondary)] shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[var(--landing-text-muted)]">InTouch ERP:</span>
              <span className="text-emerald-500 font-semibold">16.7k Live</span>
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              type="button"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-[var(--landing-surface)] border border-[var(--landing-border)] text-[var(--landing-text-primary)] hover:border-[#2F6BFF]/40 shadow-xs transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F6BFF]"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4 text-amber-300" />
              ) : (
                <Moon className="h-4 w-4 text-blue-600" />
              )}
            </button>

            {/* Cart Icon with Live Count */}
            <Link
              to="/cart"
              aria-label={`Shopping cart with ${count} items`}
              className="relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-[var(--landing-surface)] border border-[var(--landing-border)] text-[var(--landing-text-primary)] hover:border-[#2F6BFF]/40 shadow-xs transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F6BFF]"
            >
              <ShoppingCart className="h-4 w-4 text-[var(--landing-text-primary)]" />
              {count > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#FF4D2E] px-1 text-[10px] font-bold text-white shadow-[0_0_10px_rgba(255,77,46,0.8)] animate-pulse">
                  {count > 99 ? "99+" : count}
                </span>
              )}
            </Link>

            {/* Primary Magnetic CTA */}
            <Link
              ref={magneticRef}
              to="/shop"
              style={magneticStyle}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl btn-shimmer font-heading text-xs font-semibold tracking-wide text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2F6BFF]"
            >
              <span>Shop Now</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
              className="lg:hidden flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-[var(--landing-surface)] border border-[var(--landing-border)] text-[var(--landing-text-primary)] hover:border-slate-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F6BFF]"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-x-0 top-[65px] bottom-0 bg-[var(--landing-bg)]/98 backdrop-blur-2xl border-t border-[var(--landing-border)] p-6 flex flex-col justify-between overflow-y-auto animate-fade-in"
          style={{ animationDuration: "200ms" }}
        >
          <div className="space-y-4">
            {/* Live Status on Mobile */}
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[var(--landing-surface)] border border-[var(--landing-border)]">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-xs font-mono-spec text-[var(--landing-text-secondary)]">InTouch POS Live Sync</span>
              </div>
              <span className="text-xs font-mono-spec text-emerald-500 font-semibold">16,700+ SKUs</span>
            </div>

            {/* Navigation links */}
            <div className="flex flex-col space-y-2 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between min-h-[48px] px-4 rounded-xl text-base font-heading font-medium text-[var(--landing-text-secondary)] hover:text-[var(--landing-text-primary)] hover:bg-[var(--landing-surface-subtle)] transition-colors"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="h-4 w-4 text-[var(--landing-text-muted)]" />
                </a>
              ))}
              <Link
                to="/shop"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between min-h-[48px] px-4 rounded-xl text-base font-heading font-medium text-[#2F6BFF] hover:bg-[var(--landing-surface-subtle)] transition-colors"
              >
                <span>Browse Full Catalog</span>
                <ArrowRight className="h-4 w-4 text-[#2F6BFF]" />
              </Link>
            </div>
          </div>

          {/* Bottom Mobile Drawer CTAs */}
          <div className="pt-6 border-t border-[var(--landing-border)] flex flex-col gap-3">
            <Link
              to="/shop"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 min-h-[48px] rounded-xl btn-shimmer font-heading text-sm font-semibold text-white"
            >
              <Sparkles className="h-4 w-4 text-[#22D3EE]" />
              <span>Explore 16,700+ Products</span>
            </Link>
            <div className="text-center text-[11px] font-mono-spec text-[var(--landing-text-muted)]">
              Colombo 01 • Island-wide Dispatch • 100% LKR
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
