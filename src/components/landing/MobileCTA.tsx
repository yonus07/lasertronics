import { Link } from "@tanstack/react-router";
import { ShoppingCart, ArrowRight, Sparkles } from "lucide-react";
import { useCart } from "@/lib/cart";

export function MobileCTA() {
  const { count } = useCart();

  return (
    <aside
      aria-label="Quick Mobile Actions"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[var(--landing-surface)]/95 backdrop-blur-2xl border-t border-[var(--landing-border)] px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-[var(--landing-card-shadow)] transition-colors duration-300"
    >
      <div className="flex items-center gap-3 max-w-md mx-auto">
        {/* Cart Quick Button */}
        <Link
          to="/cart"
          aria-label={`Shopping Cart (${count} items)`}
          className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--landing-surface-subtle)] border border-[var(--landing-border)] text-[var(--landing-text-primary)] shrink-0 active:scale-95 shadow-xs transition-transform"
        >
          <ShoppingCart className="h-5 w-5 text-[var(--landing-text-primary)]" />
          {count > 0 && (
            <span className="absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#FF4D2E] px-1 text-[10px] font-bold text-white shadow-[0_0_8px_rgba(255,77,46,0.8)]">
              {count > 99 ? "99+" : count}
            </span>
          )}
        </Link>

        {/* Primary Shop Now Button */}
        <Link
          to="/shop"
          className="flex-1 flex items-center justify-center gap-2 h-12 rounded-xl btn-shimmer font-heading text-xs sm:text-sm font-semibold tracking-wide text-white shadow-[0_0_20px_rgba(47,107,255,0.6)] active:scale-[0.98] transition-transform"
        >
          <Sparkles className="h-4 w-4 text-[#22D3EE]" />
          <span>Shop 16,700+ Products</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </aside>
  );
}
