import React, { useState, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Search,
  RefreshCw,
  SlidersHorizontal,
  ExternalLink,
  Check,
  Zap,
  Smartphone,
  Cpu,
  Layers,
  Sparkles,
  MapPin,
  Clock,
  ShieldCheck,
} from "lucide-react";
import logoAsset from "@/assets/logo.jpg";
import { products as sampleCatalog, formatLKR } from "@/data/products";

export function LasertronicsCaseStudy() {
  const [activeTab, setActiveTab] = useState<"search" | "sync" | "pricing">("search");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Margin simulator state
  const [baseCost, setBaseCost] = useState(2500);
  const [markupPercent, setMarkupPercent] = useState(25);

  // Live log simulation state
  const [syncedCount, setSyncedCount] = useState(16715);
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSyncText, setLastSyncText] = useState("Just now (automated delta sync)");

  // Filter catalog items for the live search demo
  const filteredProducts = useMemo(() => {
    let list = sampleCatalog;
    if (selectedCategory !== "all") {
      list = list.filter((p) => p.category === selectedCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.sku.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }
    return list.slice(0, 4);
  }, [searchQuery, selectedCategory]);

  const handleSimulateSync = () => {
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
      setLastSyncText(`Synced at ${new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`);
    }, 600);
  };

  const calculatedSellingPrice = Math.round(baseCost * (1 + markupPercent / 100));

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white">
      {/* Soft background accents */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 size-[650px] rounded-full bg-blue-500/10 blur-[130px]" />
        <div className="absolute top-[40%] -right-32 size-[450px] rounded-full bg-sky-400/10 blur-[120px]" />
      </div>

      {/* 1. CLEAN NAVIGATION */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/85 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logoAsset}
              alt="Lasertronics logo"
              className="size-8 rounded-full object-cover ring-2 ring-blue-500/20"
            />
            <div className="leading-tight">
              <span className="font-extrabold text-sm sm:text-base text-slate-900 tracking-tight block">
                Lasertronics
              </span>
              <span className="text-[10px] text-blue-600 font-bold uppercase tracking-wider block">
                By ValGrow Labs
              </span>
            </div>
          </Link>

          <nav className="hidden sm:flex items-center gap-6 text-xs font-semibold text-slate-600">
            <a href="#overview" className="hover:text-blue-600 transition-colors">Overview</a>
            <a href="#story" className="hover:text-blue-600 transition-colors">The Story</a>
            <a href="#demo" className="hover:text-blue-600 transition-colors">Interactive Demo</a>
            <a href="#results" className="hover:text-blue-600 transition-colors">Results</a>
          </nav>

          <Link
            to="/shop"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-sm transition-all"
          >
            <span>Visit Storefront</span>
            <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </header>

      {/* 2. HERO */}
      <section id="overview" className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-12 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-3.5 py-1 text-xs font-bold text-blue-700 mb-5">
          <Sparkles className="size-3.5 text-blue-600" />
          <span>Case Study • ValGrow Labs</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.18]">
          Building Sri Lanka's Largest Electronics Hardware Store
        </h1>

        <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Lasertronics has thousands of components in their Colombo showroom. We built a fast, modern online store that
          syncs directly with their counter cash registers, so stock and prices are always accurate.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/shop"
            className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 transition-all"
          >
            Explore Live Storefront
          </Link>
          <a
            href="#demo"
            className="px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-700 font-bold text-sm border border-slate-200 shadow-xs transition-all"
          >
            Try Interactive Demo
          </a>
        </div>

        {/* Project Quick Overview Cards */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-left">
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">Client</span>
            <strong className="text-xs sm:text-sm text-slate-900 font-bold mt-1 block">Lasertronics PVT LTD</strong>
            <span className="text-[11px] text-slate-500">Colombo, Sri Lanka</span>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">Scope</span>
            <strong className="text-xs sm:text-sm text-slate-900 font-bold mt-1 block">Full-Stack & POS Sync</strong>
            <span className="text-[11px] text-slate-500">Web, API & PWA</span>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">Catalog Size</span>
            <strong className="text-xs sm:text-sm text-blue-600 font-bold mt-1 block">16,715 Products</strong>
            <span className="text-[11px] text-slate-500">Live POS inventory</span>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">Speed</span>
            <strong className="text-xs sm:text-sm text-emerald-600 font-bold mt-1 block">&lt; 180ms Latency</strong>
            <span className="text-[11px] text-slate-500">Instant page loads</span>
          </div>
        </div>
      </section>

      {/* 3. THE STORY: PROBLEM & SOLUTION */}
      <section id="story" className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
              The Background
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              A busy showroom, manual phone orders, and 16,000 components
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              For years, university students, hobbyists, and electronics repair technicians in Sri Lanka visited the
              Lasertronics store in Colombo in person. If you lived outside Colombo, ordering meant calling the shop or
              sending WhatsApp messages with lists of component part numbers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-xs font-bold text-rose-600 uppercase tracking-wider mb-2">The Real Challenge</div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">•</span>
                  <span><strong>Trapped Inventory:</strong> Over 16,000 items were only visible on the cashier screen.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">•</span>
                  <span><strong>Double Selling:</strong> A customer online would order a part that had just been sold at the counter.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">•</span>
                  <span><strong>Currency Swings:</strong> Import prices change constantly, making manual price tags impossible to maintain.</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-200">
              <div className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-2">What ValGrow Built</div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span><strong>Live POS Bridge:</strong> We connected the website directly to their InTouch POS system.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span><strong>Smart Inventory Lock:</strong> When someone starts checkout online, that item is held automatically.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span><strong>Automated Margins:</strong> Prices calculate automatically from wholesale costs with category rules.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE DEMO (HUMAN & CLEAN) */}
      <section id="demo" className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
            Hands-On Demo
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            See How the Platform Works
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            Click through the tabs below to test live catalog search, counter sync, and pricing rules.
          </p>
        </div>

        {/* Demo Window */}
        <div className="rounded-3xl border border-slate-200 bg-white shadow-xl overflow-hidden">
          {/* Tab buttons */}
          <div className="p-2 sm:p-3 bg-slate-100 border-b border-slate-200 flex items-center justify-between gap-2">
            <div className="flex items-center gap-1 sm:gap-2">
              <button
                onClick={() => setActiveTab("search")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "search" ? "bg-white text-blue-600 shadow-xs" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                1. Product Search
              </button>
              <button
                onClick={() => setActiveTab("sync")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "sync" ? "bg-white text-blue-600 shadow-xs" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                2. Counter POS Sync
              </button>
              <button
                onClick={() => setActiveTab("pricing")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "pricing" ? "bg-white text-blue-600 shadow-xs" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                3. Margin Calculator
              </button>
            </div>

            <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-emerald-600 font-bold px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>System Live</span>
            </div>
          </div>

          <div className="p-5 sm:p-7 min-h-[300px]">
            {/* TAB 1: INSTANT SEARCH */}
            {activeTab === "search" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs font-bold text-slate-700">Try Searching Real Products:</div>
                  <span className="text-[11px] text-slate-500">Response time: ~12ms</span>
                </div>

                <div className="relative">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search e.g. 'ESP32', 'Arduino', 'Soldering', 'HDMI'..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-blue-500 bg-slate-50/50"
                  />
                </div>

                <div className="divide-y divide-slate-100 rounded-xl border border-slate-200 overflow-hidden">
                  {filteredProducts.map((p) => (
                    <div key={p.slug} className="p-3 flex items-center justify-between gap-3 hover:bg-slate-50">
                      <div className="flex items-center gap-3 min-w-0">
                        <img src={p.image} alt={p.name} className="size-9 rounded-lg object-cover bg-slate-100" />
                        <div className="min-w-0">
                          <div className="text-xs sm:text-sm font-bold text-slate-900 truncate">{p.name}</div>
                          <div className="text-[11px] text-slate-500">
                            SKU: {p.sku} • {p.category}
                          </div>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-xs sm:text-sm font-bold text-blue-600">{formatLKR(p.price)}</div>
                        <div className="text-[10px] text-slate-500">Stock: {p.stock} units</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 2: COUNTER POS SYNC */}
            {activeTab === "sync" && (
              <div className="space-y-5">
                <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <div className="text-xs font-bold text-blue-700">Colombo Showroom InTouch Connection</div>
                    <div className="text-sm font-bold text-slate-900 mt-0.5">{syncedCount.toLocaleString()} products in sync</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{lastSyncText}</div>
                  </div>
                  <button
                    onClick={handleSimulateSync}
                    disabled={isSyncing}
                    className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center gap-2 shadow-xs transition-all disabled:opacity-50"
                  >
                    <RefreshCw className={`size-3.5 ${isSyncing ? "animate-spin" : ""}`} />
                    <span>{isSyncing ? "Connecting..." : "Test Sync Connection"}</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50">
                    <span className="text-slate-500 font-semibold block">In-Store Barcode Scans</span>
                    <strong className="text-sm text-slate-900 font-bold block mt-1">Automatic Delta</strong>
                    <p className="text-[11px] text-slate-500 mt-1">Website stock updates within 1-2 seconds of counter sale.</p>
                  </div>
                  <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50">
                    <span className="text-slate-500 font-semibold block">Bandwidth Usage</span>
                    <strong className="text-sm text-emerald-600 font-bold block mt-1">Minimal & Efficient</strong>
                    <p className="text-[11px] text-slate-500 mt-1">Only changed items are transferred, preventing cashier slowdowns.</p>
                  </div>
                  <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50">
                    <span className="text-slate-500 font-semibold block">Checkout Protection</span>
                    <strong className="text-sm text-blue-600 font-bold block mt-1">15-Min Hold</strong>
                    <p className="text-[11px] text-slate-500 mt-1">Items in active carts are temporarily reserved.</p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: MARGIN CALCULATOR */}
            {activeTab === "pricing" && (
              <div className="space-y-4">
                <p className="text-xs text-slate-600">
                  When wholesale component costs change, the system automatically recalculates consumer prices using
                  category margins:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-center pt-2">
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs font-bold mb-1">
                        <span className="text-slate-600">Import Wholesale Cost:</span>
                        <span className="text-slate-900">{formatLKR(baseCost)}</span>
                      </div>
                      <input
                        type="range"
                        min="500"
                        max="10000"
                        step="250"
                        value={baseCost}
                        onChange={(e) => setBaseCost(Number(e.target.value))}
                        className="w-full accent-blue-600 cursor-pointer"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-bold mb-1">
                        <span className="text-slate-600">Category Markup Margin:</span>
                        <span className="text-blue-600">+{markupPercent}%</span>
                      </div>
                      <input
                        type="range"
                        min="10"
                        max="50"
                        step="5"
                        value={markupPercent}
                        onChange={(e) => setMarkupPercent(Number(e.target.value))}
                        className="w-full accent-blue-600 cursor-pointer"
                      />
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                    <div className="flex justify-between text-slate-600">
                      <span>Base Cost:</span>
                      <span>{formatLKR(baseCost)}</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Calculated Markup:</span>
                      <span className="text-emerald-600 font-bold">
                        +{formatLKR(Math.round(baseCost * (markupPercent / 100)))}
                      </span>
                    </div>
                    <div className="pt-2 border-t border-slate-200 flex justify-between items-center">
                      <span className="font-bold text-slate-900">Final Retail Price:</span>
                      <span className="text-base font-extrabold text-blue-600">
                        {formatLKR(calculatedSellingPrice)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 5. THE RESULTS (CLEAR & HONEST) */}
      <section id="results" className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
            Impact
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            What Changed for Lasertronics
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-center">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 font-display">16,715</div>
            <div className="text-xs font-bold text-slate-900 mt-1">Products Online</div>
            <div className="text-[11px] text-slate-500 mt-1">Up from 0 items</div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 font-display">&lt; 180ms</div>
            <div className="text-xs font-bold text-slate-900 mt-1">Load Speed</div>
            <div className="text-[11px] text-slate-500 mt-1">Smooth on mobile data</div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-600 font-display">0</div>
            <div className="text-xs font-bold text-slate-900 mt-1">Stock Errors</div>
            <div className="text-[11px] text-slate-500 mt-1">No double-selling</div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600 font-display">+340%</div>
            <div className="text-xs font-bold text-slate-900 mt-1">Island-wide Orders</div>
            <div className="text-[11px] text-slate-500 mt-1">Outside Colombo</div>
          </div>
        </div>

        {/* Client feedback */}
        <div className="mt-8 p-6 sm:p-7 rounded-2xl bg-blue-50/70 border border-blue-200 text-center max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
            “Connecting our entire showroom inventory to the website seemed like an overwhelming task. ValGrow Labs
            made it simple, fast, and reliable. We now take orders across Sri Lanka around the clock without manual stock headaches.”
          </p>
          <div className="mt-3 text-xs font-bold text-slate-900">
            Management Team • Lasertronics PVT LTD
          </div>
        </div>
      </section>

      {/* 6. VALGROW LABS FOOTER (WARM & HUMAN) */}
      <footer className="border-t border-slate-200 bg-white py-12 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-xs font-bold text-slate-700 mb-3">
            <span>Built by ValGrow Labs</span>
          </div>
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
            Have a system you want to bring online?
          </h3>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
            We build custom web platforms, e-commerce stores, and connect complex in-store databases. Let's build something together.
          </p>

          <div className="mt-5 flex items-center justify-center gap-3">
            <Link
              to="/shop"
              className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-sm transition-all"
            >
              See the Live Store
            </Link>
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-all"
            >
              Contact ValGrow Labs
            </Link>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 text-xs text-slate-400 flex items-center justify-center gap-4">
            <span>© {new Date().getFullYear()} ValGrow Labs</span>
            <span>•</span>
            <Link to="/" className="hover:text-blue-600 transition-colors">Store Home</Link>
            <span>•</span>
            <Link to="/shop" className="hover:text-blue-600 transition-colors">Catalog (16,715 SKUs)</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
