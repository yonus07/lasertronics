import { useState, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import {
  ShoppingCart,
  Check,
  Star,
  Package,
  Layers,
  ArrowRight,
  AlertCircle,
  RefreshCw,
} from "lucide-react";
import { useCart } from "@/lib/cart";
import {
  products as fallbackProducts,
  getRegisteredLiveProducts,
  type Product,
} from "@/data/products";
import { ProjectSelector, type ProjectFilter } from "./ProjectSelector";
import { toast } from "sonner";

export function FeaturedProducts() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("all");
  const [addedMap, setAddedMap] = useState<Record<string, boolean>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { add } = useCart();

  // Retrieve products from the live catalog store
  const allProducts = useMemo(() => {
    try {
      const live = getRegisteredLiveProducts();
      return live.length > 0 ? live : fallbackProducts;
    } catch {
      return fallbackProducts;
    }
  }, []);

  // Filter products based on active project category
  const filteredProducts = useMemo(() => {
    if (isError) return [];
    let list = [...allProducts];

    if (activeFilter === "robotics") {
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes("motor") ||
          p.name.toLowerCase().includes("servo") ||
          p.name.toLowerCase().includes("robot") ||
          p.slug.includes("dcmotor") ||
          p.slug.includes("servo")
      );
      if (list.length === 0) list = allProducts.filter((p) => p.category === "electronics");
    } else if (activeFilter === "iot") {
      list = list.filter((p) => p.category === "iot-and-microcontrollers");
    } else if (activeFilter === "automation") {
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes("relay") ||
          p.name.toLowerCase().includes("sensor") ||
          p.name.toLowerCase().includes("wifi") ||
          p.category === "iot-and-microcontrollers"
      );
    } else if (activeFilter === "repair") {
      list = list.filter((p) => p.category === "repair-kits");
    }

    // Always deliver exactly 6 featured cards
    return list.slice(0, 6);
  }, [allProducts, activeFilter, isError]);

  const handleQuickAdd = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    e.stopPropagation();

    add(product.slug, 1);
    setAddedMap((prev) => ({ ...prev, [product.slug]: true }));
    toast.success(`Added ${product.name} to cart`, {
      description: `Rs. ${product.price.toLocaleString("en-LK")} • Colombo Hub In Stock`,
    });

    setTimeout(() => {
      setAddedMap((prev) => ({ ...prev, [product.slug]: false }));
    }, 2000);
  };

  return (
    <section className="py-24 relative bg-[var(--landing-bg)] overflow-hidden transition-colors duration-300">
      {/* Background soft glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#2F6BFF]/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--landing-surface)] border border-[var(--landing-border)] text-xs font-mono-spec text-[#2F6BFF] dark:text-[#22D3EE] mb-4 shadow-xs">
            <Layers className="h-3.5 w-3.5 text-[#2F6BFF] dark:text-[#22D3EE]" />
            <span>REAL-TIME INVENTORY STREAM</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[var(--landing-text-primary)] tracking-tight">
            Featured Components & Kits
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--landing-text-secondary)] font-body">
            Handpicked hardware directly from our 16,700+ live catalog. Instant availability with transparent LKR pricing.
          </p>
        </div>

        {/* 7. "Build your project" selector */}
        <ProjectSelector
          activeFilter={activeFilter}
          onSelectFilter={(filter) => {
            setIsLoading(true);
            setActiveFilter(filter);
            setTimeout(() => setIsLoading(false), 200);
          }}
        />

        {/* Loading Skeleton State */}
        {isLoading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="rounded-3xl bg-[var(--landing-surface)] border border-[var(--landing-border)] p-5 h-96 animate-pulse flex flex-col justify-between"
              >
                <div className="aspect-square w-full rounded-2xl bg-black/5 dark:bg-white/5" />
                <div className="space-y-2 mt-4">
                  <div className="h-4 bg-black/10 dark:bg-white/10 rounded w-3/4" />
                  <div className="h-3 bg-black/5 dark:bg-white/5 rounded w-1/2" />
                </div>
                <div className="h-8 bg-black/10 dark:bg-white/10 rounded-xl mt-4" />
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {!isLoading && isError && (
          <div className="p-12 text-center rounded-3xl bg-[var(--landing-surface)] border border-red-500/20 max-w-md mx-auto my-8">
            <AlertCircle className="h-10 w-10 text-red-500 mx-auto mb-4" />
            <h3 className="font-heading text-lg font-bold text-[var(--landing-text-primary)] mb-2">
              Unable to Load Products
            </h3>
            <p className="text-sm text-[var(--landing-text-muted)] mb-6 font-body">
              There was a momentary hiccup communicating with the catalog database.
            </p>
            <button
              onClick={() => setIsError(false)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl btn-shimmer font-heading text-xs font-semibold text-white"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              <span>Retry Catalog Stream</span>
            </button>
          </div>
        )}

        {/* Empty State */}
        {!isLoading && !isError && filteredProducts.length === 0 && (
          <div className="p-12 text-center rounded-3xl bg-[var(--landing-surface)] border border-[var(--landing-border)] max-w-md mx-auto my-8">
            <Package className="h-10 w-10 text-slate-400 mx-auto mb-4" />
            <h3 className="font-heading text-lg font-bold text-[var(--landing-text-primary)] mb-2">
              No Items Found in this Category
            </h3>
            <p className="text-sm text-[var(--landing-text-muted)] mb-6 font-body">
              Try switching project filters or search across all 16,700+ live components.
            </p>
            <button
              onClick={() => setActiveFilter("all")}
              className="px-5 py-2.5 rounded-xl bg-[var(--landing-surface-subtle)] text-[var(--landing-text-primary)] font-heading text-xs font-semibold border border-[var(--landing-border)] hover:bg-[var(--landing-surface)] transition-colors"
            >
              View All Components
            </button>
          </div>
        )}

        {/* 8. 6 Featured Product Cards */}
        {!isLoading && !isError && filteredProducts.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {filteredProducts.map((product) => {
              const isAdded = !!addedMap[product.slug];

              return (
                <div
                  key={product.slug}
                  className="group rounded-3xl bg-[var(--landing-surface)] border border-[var(--landing-border)] hover:border-[#2F6BFF]/40 backdrop-blur-xl p-4 sm:p-5 flex flex-col justify-between shadow-[var(--landing-card-shadow)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div>
                    {/* Image Area with Smooth Hover Zoom */}
                    <div className="relative aspect-square w-full rounded-2xl bg-[var(--landing-surface-subtle)] border border-[var(--landing-border)] overflow-hidden flex items-center justify-center p-3 sm:p-4 mb-4 sm:mb-5">
                      <Link
                        to="/product/$slug"
                        params={{ slug: product.slug }}
                        className="w-full h-full flex items-center justify-center"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          width={400}
                          height={400}
                          loading="lazy"
                          className="max-h-full max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-110"
                        />
                      </Link>

                      {/* Stock Badge with Animated Green Pulse Dot */}
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[var(--landing-surface)]/95 border border-[var(--landing-border)] backdrop-blur-md shadow-xs text-[10px] font-mono-spec">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                        </span>
                        <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                          In Stock ({product.stock})
                        </span>
                      </div>

                      {/* Optional Badge */}
                      {product.badge && (
                        <div className="absolute top-3 right-3 text-[10px] font-mono-spec px-2 py-0.5 rounded-full bg-[#2F6BFF]/15 border border-[#2F6BFF]/30 text-[#2F6BFF] dark:text-[#22D3EE] font-medium">
                          {product.badge}
                        </div>
                      )}
                    </div>

                    {/* Product Meta */}
                    <div className="flex items-center gap-1 mb-1.5 text-amber-500 text-xs font-mono-spec">
                      <Star className="h-3.5 w-3.5 fill-amber-400" />
                      <span className="font-bold">{product.rating}</span>
                      <span className="text-[var(--landing-text-muted)]">({product.reviews} reviews)</span>
                    </div>

                    {/* Product Name */}
                    <Link
                      to="/product/$slug"
                      params={{ slug: product.slug }}
                      className="block font-heading text-base font-bold text-[var(--landing-text-primary)] group-hover:text-[#2F6BFF] dark:group-hover:text-[#22D3EE] transition-colors line-clamp-2 min-h-[3rem]"
                    >
                      {product.name}
                    </Link>

                    {/* Subtitle / Blurb */}
                    <p className="mt-1.5 text-xs text-[var(--landing-text-muted)] font-body line-clamp-1">
                      {product.blurb}
                    </p>
                  </div>

                  {/* Card Bottom: Price in LKR + Quick-Add CTA */}
                  <div className="mt-6 pt-4 border-t border-[var(--landing-border)] flex items-center justify-between gap-3">
                    <div>
                      <div className="text-[10px] font-mono-spec text-[var(--landing-text-muted)] uppercase">
                        Transparent LKR Price
                      </div>
                      <div className="font-heading text-xl font-extrabold text-[var(--landing-text-primary)] tracking-tight">
                        Rs. {product.price.toLocaleString("en-LK")}
                      </div>
                    </div>

                    {/* Hover Quick Add to Cart Button */}
                    <button
                      type="button"
                      onClick={(e) => handleQuickAdd(e, product)}
                      aria-label={`Add ${product.name} to cart`}
                      className={`flex h-11 px-4 items-center justify-center gap-2 rounded-xl font-heading text-xs font-semibold transition-all duration-200 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F6BFF] ${
                        isAdded
                          ? "bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.5)]"
                          : "btn-shimmer text-white shadow-md hover:shadow-[0_0_25px_rgba(47,107,255,0.7)]"
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="h-4 w-4" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="h-4 w-4" />
                          <span>Add to Cart</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* View All CTAs */}
        <div className="mt-14 text-center">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl btn-shimmer font-heading text-sm font-semibold text-white shadow-[0_0_30px_rgba(47,107,255,0.45)] group"
          >
            <span>Explore Entire 16,700+ InTouch Catalog</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}
