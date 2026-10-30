import { Link } from "@tanstack/react-router";
import {
  CircuitBoard,
  MapPin,
  Clock,
  Phone,
  Mail,
  ArrowUpRight,
  ShieldCheck,
  CreditCard,
  Truck,
} from "lucide-react";

export function Footer() {
  const categoriesLinks = [
    { label: "IoT & Microcontrollers", href: "/category/iot-and-microcontrollers" },
    { label: "Electronic Components", href: "/category/electronics" },
    { label: "Repair Toolkits & ESD", href: "/category/repair-kits" },
    { label: "Mobile & GaN Power", href: "/category/mobile-accessories" },
    { label: "TV & Display Audio", href: "/category/tv-accessories" },
  ];

  const platformLinks = [
    { label: "Browse Full Catalog", href: "/shop" },
    { label: "Shopping Cart", href: "/cart" },
    { label: "About Lasertronics", href: "/about" },
    { label: "Contact Store & Support", href: "/contact" },
  ];

  return (
    <footer className="bg-[var(--landing-bg-secondary)] border-t border-[var(--landing-border)] text-[var(--landing-text-secondary)] font-body relative overflow-hidden pt-16 pb-28 sm:pb-16 transition-colors duration-300">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[250px] bg-[#2F6BFF]/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-[var(--landing-border)]">
          
          {/* Col 1 & 2: Brand & ValGrow Attribution */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/landing" className="flex items-center gap-3 group">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--landing-surface)] border border-[var(--landing-border)] shadow-sm group-hover:border-[#22D3EE]/50 transition-all">
                <CircuitBoard className="h-6 w-6 text-[#2F6BFF] dark:text-[#22D3EE]" />
              </div>
              <div className="flex flex-col">
                <div className="font-heading text-xl font-bold text-[var(--landing-text-primary)] tracking-tight flex items-center gap-1.5">
                  <span>LASERTRONICS</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-[#FF4D2E]/15 text-[#FF4D2E] font-mono-spec border border-[#FF4D2E]/30 uppercase font-semibold">
                    PVT LTD
                  </span>
                </div>
                <span className="text-[11px] text-[var(--landing-text-muted)] font-mono-spec">
                  E-COMMERCE & HARDWARE SOLUTIONS
                </span>
              </div>
            </Link>

            <p className="text-sm text-[var(--landing-text-secondary)] max-w-sm leading-relaxed">
              Sri Lanka's full-stack electronics e-commerce platform with 16,700+ live products synchronized in real time with our physical Colombo store. 100% LKR pricing and island-wide delivery.
            </p>

            {/* ValGrow Labs Attribution Badge */}
            <div className="p-3.5 rounded-2xl bg-[var(--landing-surface)] border border-[var(--landing-border)] shadow-xs inline-flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center font-heading font-extrabold text-xs text-white">
                VG
              </div>
              <div>
                <div className="text-[10px] font-mono-spec text-[var(--landing-text-muted)]">ENGINEERED & POWERED BY</div>
                <div className="text-xs font-heading font-bold text-[var(--landing-text-primary)] tracking-wide">
                  VALGROW LABS (PVT) LTD
                </div>
              </div>
            </div>
          </div>

          {/* Col 3: Categories */}
          <div>
            <div className="font-heading text-sm font-bold text-[var(--landing-text-primary)] tracking-wide uppercase mb-4">
              Categories
            </div>
            <ul className="space-y-2.5 text-xs font-mono-spec">
              {categoriesLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-[var(--landing-text-muted)] hover:text-[#2F6BFF] dark:hover:text-[#22D3EE] transition-colors flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Quick Links */}
          <div>
            <div className="font-heading text-sm font-bold text-[var(--landing-text-primary)] tracking-wide uppercase mb-4">
              Navigation
            </div>
            <ul className="space-y-2.5 text-xs font-mono-spec">
              {platformLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-[var(--landing-text-muted)] hover:text-[#2F6BFF] dark:hover:text-[#22D3EE] transition-colors flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Physical Store & Contact */}
          <div>
            <div className="font-heading text-sm font-bold text-[var(--landing-text-primary)] tracking-wide uppercase mb-4">
              Colombo Store
            </div>
            <div className="space-y-3 text-xs font-body text-[var(--landing-text-secondary)]">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[#2F6BFF] dark:text-[#22D3EE] shrink-0 mt-0.5" />
                <span>1st Cross Street, Pettah, Colombo 01, Sri Lanka</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Mon – Sat: 9:00 AM – 6:00 PM<br /><span className="text-[var(--landing-text-muted)]">(Closed on Sundays & Poya Days)</span></span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="h-4 w-4 text-[#2F6BFF] shrink-0 mt-0.5" />
                <span>+94 11 234 5678 / +94 77 123 4567</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="h-4 w-4 text-[#FF4D2E] shrink-0 mt-0.5" />
                <span>support@lasertronics.lk</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Payment Badges */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-spec text-[var(--landing-text-muted)] text-center sm:text-left">
          <div>
            © 2026 LASERTRONICS PVT LTD. All Rights Reserved. Engineered by <span className="text-[#2F6BFF] dark:text-[#22D3EE] font-medium">ValGrow Labs</span>.
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2 sm:gap-3">
            <span className="px-2.5 py-1 rounded bg-[var(--landing-surface)] border border-[var(--landing-border)] text-[11px] text-[var(--landing-text-secondary)] shadow-xs">
              Cash on Delivery (COD)
            </span>
            <span className="px-2.5 py-1 rounded bg-[var(--landing-surface)] border border-[var(--landing-border)] text-[11px] text-[var(--landing-text-secondary)] shadow-xs">
              Visa / Mastercard
            </span>
            <span className="px-2.5 py-1 rounded bg-[var(--landing-surface)] border border-[var(--landing-border)] text-[11px] text-[var(--landing-text-secondary)] shadow-xs">
              Direct Bank Transfer
            </span>
            <span className="px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
              100% LKR
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
