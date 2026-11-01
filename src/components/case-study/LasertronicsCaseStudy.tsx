import React, { useState, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import {
  Server,
  Cpu,
  Database,
  Activity,
  Zap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Search,
  Sliders,
  RefreshCw,
  Layers,
  Wifi,
  ExternalLink,
  Globe,
  Clock,
  BarChart3,
  Lock,
  Package,
  Sparkles,
  TrendingUp,
  Box,
  Truck,
  Check,
  Smartphone,
  CircuitBoard,
  ChevronRight,
  SlidersHorizontal,
  FileCheck2,
  Share2,
  Laptop,
  CheckCircle,
  HelpCircle,
  Building2,
  ArrowUpRight,
  Terminal,
} from "lucide-react";
import logoAsset from "@/assets/logo.jpg";
import { products as sampleCatalog, formatLKR } from "@/data/products";

// Simulated live InTouch ERP sync log entries
const initialSyncLogs = [
  { id: "1", time: "14:24:02", type: "SYNC", msg: "Incremental delta check: 16,715 SKUs verified against Colombo HQ POS." },
  { id: "2", time: "14:24:04", type: "CACHE", msg: "Disk mtime timestamp validated. 0 changes required, serving cached memory map." },
  { id: "3", time: "14:24:09", type: "MARGIN", msg: "Category markup rule: 'Microcontrollers & IoT' at +25.0% verified." },
  { id: "4", time: "14:24:12", type: "STOCK", msg: "Real-time lock: ESP32-WROOM-32D stock held for active checkout (Qty: 2)." },
  { id: "5", time: "14:24:18", type: "PWA", msg: "Workbox edge service worker synced 42 offline asset caches." },
];

export function LasertronicsCaseStudy() {
  const [activeTab, setActiveTab] = useState<"sync" | "search" | "margin">("sync");
  const [deviceView, setDeviceView] = useState<"desktop" | "mobile">("desktop");
  const [selectedService, setSelectedService] = useState("pos-sync");

  // Search simulator state
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Margin simulator state
  const [simulatorBasePrice, setSimulatorBasePrice] = useState(2500);
  const [simulatorMargin, setSimulatorMargin] = useState(25);
  const [isOverrideActive, setIsOverrideActive] = useState(false);
  const [overridePrice, setOverridePrice] = useState(3400);

  // Live log simulation state
  const [syncLogs, setSyncLogs] = useState(initialSyncLogs);
  const [isSyncing, setIsSyncing] = useState(false);

  // Filter catalog items for live search demo
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

  const triggerManualSync = () => {
    setIsSyncing(true);
    setTimeout(() => {
      const newEntry = {
        id: String(Date.now()),
        time: new Date().toLocaleTimeString("en-GB", { hour12: false }),
        type: "INTOUCH",
        msg: `Differential sync completed. InTouch API latency 138ms. 16,715 SKUs in sync.`,
      };
      setSyncLogs((prev) => [newEntry, ...prev.slice(0, 4)]);
      setIsSyncing(false);
    }, 700);
  };

  const computedSellingPrice = useMemo(() => {
    if (isOverrideActive) return overridePrice;
    return Math.round(simulatorBasePrice * (1 + simulatorMargin / 100));
  }, [simulatorBasePrice, simulatorMargin, isOverrideActive, overridePrice]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white">
      {/* Ambient gradient glow orbs matching storefront */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
        <div className="absolute -top-32 -left-32 size-[520px] rounded-full bg-gradient-to-br from-blue-400/20 via-sky-300/15 to-transparent blur-[110px]" />
        <div className="absolute top-[25%] -right-40 size-[580px] rounded-full bg-gradient-to-bl from-indigo-400/15 via-blue-500/10 to-transparent blur-[120px]" />
        <div className="absolute bottom-[15%] left-[10%] size-[540px] rounded-full bg-gradient-to-tr from-sky-300/15 via-blue-400/10 to-transparent blur-[120px]" />
      </div>

      {/* 1. STANDALONE AGENCY PORTFOLIO HEADER */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo & Agency Attribution */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logoAsset}
              alt="Lasertronics logo"
              className="size-9 rounded-full object-cover ring-2 ring-blue-500/20 shadow-xs transition-transform group-hover:scale-105"
            />
            <div>
              <div className="flex items-center gap-1.5 leading-tight">
                <span className="font-display font-extrabold text-sm sm:text-base text-slate-900 tracking-tight">
                  Lasertronics
                </span>
                <span className="text-slate-400 text-xs">/</span>
                <span className="text-xs font-bold text-blue-600">ValGrow Labs</span>
              </div>
              <span className="text-[10px] text-slate-500 uppercase tracking-widest font-mono block">
                Flagship Project Showcase
              </span>
            </div>
          </Link>

          {/* Navigation Anchors */}
          <nav className="hidden lg:flex items-center gap-1 text-xs font-bold text-slate-600">
            <a href="#overview" className="px-3 py-1.5 rounded-lg hover:text-blue-600 hover:bg-slate-100 transition-colors">
              Overview
            </a>
            <a href="#benchmarks" className="px-3 py-1.5 rounded-lg hover:text-blue-600 hover:bg-slate-100 transition-colors">
              Benchmarks
            </a>
            <a href="#features" className="px-3 py-1.5 rounded-lg hover:text-blue-600 hover:bg-slate-100 transition-colors">
              Core Architecture
            </a>
            <a href="#showcase" className="px-3 py-1.5 rounded-lg hover:text-blue-600 hover:bg-slate-100 transition-colors">
              Live Showcase
            </a>
            <a href="#methodology" className="px-3 py-1.5 rounded-lg hover:text-blue-600 hover:bg-slate-100 transition-colors">
              Our Process
            </a>
            <a href="#impact" className="px-3 py-1.5 rounded-lg hover:text-blue-600 hover:bg-slate-100 transition-colors">
              Impact
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2.5">
            <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-mono text-emerald-700 font-bold">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>16,715 SKUs Live</span>
            </div>
            <Link
              to="/shop"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-500/20 transition-all hover:scale-105 active:scale-95"
            >
              <span>View Live Store</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section id="overview" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-12 text-center">
        {/* Pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.16em] text-blue-700 shadow-xs backdrop-blur-md mb-5">
          <span className="size-2 rounded-full bg-blue-600 animate-pulse" />
          <span>ValGrow Labs Flagship Engineering</span>
          <span className="text-slate-300">•</span>
          <span className="text-slate-600 font-semibold">Production Architecture</span>
        </div>

        {/* Main Title */}
        <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
          Lasertronics E-Shop & Hardware Ecosystem
        </h1>

        {/* Subtitle */}
        <p className="mt-4 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
          How <strong className="text-slate-900 font-semibold">ValGrow Labs</strong> designed, integrated, and scaled Sri Lanka’s
          premier electronics hardware hub—synchronizing <span className="text-blue-600 font-bold">16,700+ live InTouch POS components</span>,
          sub-second search latency, and automated currency-hedged pricing into one cohesive platform.
        </p>

        {/* Action Buttons */}
        <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <Link
            to="/shop"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-500/25 transition-all hover:scale-105 active:scale-95"
          >
            <span>Launch Live Storefront</span>
            <ArrowRight className="size-4" />
          </Link>
          <a
            href="#showcase"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border border-slate-200 shadow-xs transition-all hover:border-slate-300 active:scale-95"
          >
            <Activity className="size-4 text-blue-600" />
            <span>Interactive System Showcase</span>
          </a>
        </div>

        {/* NEW ENHANCEMENT 1: EXECUTIVE PROJECT METADATA STRIP */}
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto text-left">
          <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-600 block">Client</span>
            <span className="text-xs sm:text-sm font-bold text-slate-900 block mt-0.5">LASERTRONICS PVT LTD</span>
            <span className="text-[11px] text-slate-500">Colombo, Sri Lanka</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-600 block">ValGrow Scope</span>
            <span className="text-xs sm:text-sm font-bold text-slate-900 block mt-0.5">Full-Stack Architecture</span>
            <span className="text-[11px] text-slate-500">POS Sync • UI/UX • PWA</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-600 block">Inventory Scale</span>
            <span className="text-xs sm:text-sm font-bold text-blue-600 block mt-0.5 font-mono">16,715 Live SKUs</span>
            <span className="text-[11px] text-slate-500">InTouch WebIPAN API</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-600 block">Deliverables</span>
            <span className="text-xs sm:text-sm font-bold text-emerald-600 block mt-0.5 font-mono">&lt; 180ms Speed</span>
            <span className="text-[11px] text-slate-500">Store, Admin & PWA</span>
          </div>
        </div>

        {/* Hero Interactive Console Preview Card */}
        <div className="mt-8 p-3 sm:p-5 rounded-3xl bg-gradient-to-b from-white/90 to-slate-50/80 border border-slate-200 shadow-[0_16px_50px_-12px_rgba(15,23,42,0.08)] backdrop-blur-xl max-w-5xl mx-auto text-left">
          <div className="px-4 py-3 bg-slate-900 text-white rounded-2xl flex flex-wrap items-center justify-between gap-3 shadow-sm">
            <div className="flex items-center gap-2">
              <span className="size-3 rounded-full bg-rose-500" />
              <span className="size-3 rounded-full bg-amber-500" />
              <span className="size-3 rounded-full bg-emerald-500" />
              <span className="text-xs font-mono text-slate-300 ml-2">
                engine.lasertronics.lk · ValGrow Live InTouch Sync Gateway
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold">
              <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Bi-Directional Sync Active</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4">
            <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-xs">
              <div className="text-xs font-bold text-slate-500">Live POS Catalog</div>
              <div className="font-display text-xl sm:text-2xl font-extrabold text-blue-600 mt-1">16,715 SKUs</div>
              <div className="text-[11px] text-slate-500 mt-1">Real-time counter sync</div>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-xs">
              <div className="text-xs font-bold text-slate-500">Edge Response Speed</div>
              <div className="font-display text-xl sm:text-2xl font-extrabold text-emerald-600 mt-1">&lt; 180 ms</div>
              <div className="text-[11px] text-slate-500 mt-1">Sub-second page rendering</div>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-xs">
              <div className="text-xs font-bold text-slate-500">Sync Uptime</div>
              <div className="font-display text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">99.98%</div>
              <div className="text-[11px] text-slate-500 mt-1">Zero inventory collision</div>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-xs">
              <div className="text-xs font-bold text-slate-500">LKR Margin Hedging</div>
              <div className="font-display text-xl sm:text-2xl font-extrabold text-amber-600 mt-1">100% Auto</div>
              <div className="text-[11px] text-slate-500 mt-1">Automated category markups</div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW ENHANCEMENT 2: QUANTIFIABLE BEFORE VS. AFTER BENCHMARK CARDS */}
      <section id="benchmarks" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="inline-block rounded-full border border-blue-200/80 bg-blue-50 px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-blue-700">
            Proven Performance
          </span>
          <h2 className="mt-2.5 font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Before vs. After Engineering Benchmarks
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            Hard quantifiable engineering metrics proving ValGrow Labs' business value.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <span className="text-xs font-bold text-slate-500 uppercase font-mono">Catalog Availability</span>
            <div className="mt-3 flex items-baseline justify-between">
              <div>
                <span className="text-xs text-rose-500 line-through font-mono block">0 SKUs Online</span>
                <span className="text-2xl font-extrabold text-blue-600 font-mono">16,715 SKUs</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-bold font-mono">
                100% Live
              </span>
            </div>
            <p className="mt-2 text-[11px] text-slate-500 leading-snug">
              Every single Colombo showroom component is now searchable 24/7.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <span className="text-xs font-bold text-slate-500 uppercase font-mono">Search Latency</span>
            <div className="mt-3 flex items-baseline justify-between">
              <div>
                <span className="text-xs text-rose-500 line-through font-mono block">~3 Min Manual</span>
                <span className="text-2xl font-extrabold text-emerald-600 font-mono">12 ms</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold font-mono">
                99.8% Faster
              </span>
            </div>
            <p className="mt-2 text-[11px] text-slate-500 leading-snug">
              Instant parametric lookup across microcontrollers, ICs, and tools.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <span className="text-xs font-bold text-slate-500 uppercase font-mono">Page Load Speed</span>
            <div className="mt-3 flex items-baseline justify-between">
              <div>
                <span className="text-xs text-rose-500 line-through font-mono block">4.2s Legacy</span>
                <span className="text-2xl font-extrabold text-slate-900 font-mono">&lt; 180 ms</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-800 text-[10px] font-bold font-mono">
                23x Speedup
              </span>
            </div>
            <p className="mt-2 text-[11px] text-slate-500 leading-snug">
              SSR edge hydration delivers app-like transitions on mobile devices.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <span className="text-xs font-bold text-slate-500 uppercase font-mono">Inventory Collisions</span>
            <div className="mt-3 flex items-baseline justify-between">
              <div>
                <span className="text-xs text-rose-500 line-through font-mono block">~14% Collisions</span>
                <span className="text-2xl font-extrabold text-emerald-600 font-mono">0.00%</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold font-mono">
                Zero Double-Sell
              </span>
            </div>
            <p className="mt-2 text-[11px] text-slate-500 leading-snug">
              Atomic reservation lock decrements physical POS counter bins.
            </p>
          </div>
        </div>
      </section>

      {/* 3. CORE ARCHITECTURAL PILLARS */}
      <section id="features" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="inline-block rounded-full border border-blue-200/80 bg-blue-50 px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-blue-700">
            Architecture
          </span>
          <h2 className="mt-2.5 font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Four Core Engineering Pillars
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-blue-400 hover:shadow-md transition-all">
            <div className="grid size-10 place-items-center rounded-xl bg-blue-50 text-blue-600 mb-3 font-bold">
              <RefreshCw className="size-5" />
            </div>
            <h3 className="font-display text-base font-bold text-slate-900">Real-Time InTouch Sync</h3>
            <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
              Bi-directional API connector synchronizing stock balances, prices, and barcodes directly with Colombo
              showroom counter POS terminals.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-blue-400 hover:shadow-md transition-all">
            <div className="grid size-10 place-items-center rounded-xl bg-indigo-50 text-indigo-600 mb-3 font-bold">
              <Search className="size-5" />
            </div>
            <h3 className="font-display text-base font-bold text-slate-900">16.7k Parametric Search</h3>
            <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
              Sub-15ms search across 16,700 products with instant filtering for microcontrollers, sensors, ICs, bench
              tools, and television parts.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-blue-400 hover:shadow-md transition-all">
            <div className="grid size-10 place-items-center rounded-xl bg-amber-50 text-amber-600 mb-3 font-bold">
              <SlidersHorizontal className="size-5" />
            </div>
            <h3 className="font-display text-base font-bold text-slate-900">Dynamic Margin Hedging</h3>
            <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
              Automated category markup formulas that adjust retail pricing in real-time while safeguarding manual price
              overrides on promotional deals.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-blue-400 hover:shadow-md transition-all">
            <div className="grid size-10 place-items-center rounded-xl bg-emerald-50 text-emerald-600 mb-3 font-bold">
              <Wifi className="size-5" />
            </div>
            <h3 className="font-display text-base font-bold text-slate-900">Island-Wide Field PWA</h3>
            <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
              Progressive Web App with offline service worker caching component datasheets for field technicians in
              low-connectivity outstations.
            </p>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE LIVE SHOWCASE WITH DEVICE TOGGLE */}
      <section id="showcase" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="inline-block rounded-full border border-blue-200/80 bg-blue-50 px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-blue-700">
            Interactive Showcase
          </span>
          <h2 className="mt-2.5 font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Test the System in Action
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-600">
            Toggle between Desktop and Mobile Field PWA views to test synchronization and query speeds.
          </p>
        </div>

        {/* Device Mode Toggle + Tabs Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4 max-w-5xl mx-auto">
          {/* Device Toggle */}
          <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-slate-200 text-xs font-bold shadow-xs">
            <button
              onClick={() => setDeviceView("desktop")}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                deviceView === "desktop" ? "bg-slate-900 text-white" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Laptop className="size-3.5" />
              <span>Desktop Storefront</span>
            </button>
            <button
              onClick={() => setDeviceView("mobile")}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                deviceView === "mobile" ? "bg-slate-900 text-white" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Smartphone className="size-3.5" />
              <span>Mobile Field PWA</span>
            </button>
          </div>

          {/* Quick links to real app routes */}
          <div className="flex items-center gap-2 text-xs">
            <Link
              to="/shop"
              className="inline-flex items-center gap-1 font-bold text-blue-600 hover:text-blue-700 bg-blue-50 px-3 py-1.5 rounded-xl border border-blue-200/60"
            >
              <span>Launch Live Storefront</span>
              <ArrowUpRight className="size-3.5" />
            </Link>
            <Link
              to="/admin"
              className="inline-flex items-center gap-1 font-bold text-slate-700 hover:text-slate-900 bg-white px-3 py-1.5 rounded-xl border border-slate-200"
            >
              <span>Inspect Admin POS Sync</span>
              <ArrowUpRight className="size-3.5" />
            </Link>
          </div>
        </div>

        {/* Showcase Frame */}
        <div
          className={`mx-auto rounded-3xl border border-slate-800 bg-[#0A192F] text-white shadow-2xl overflow-hidden transition-all duration-300 ${
            deviceView === "mobile" ? "max-w-md ring-8 ring-slate-800/60" : "max-w-5xl"
          }`}
        >
          {/* Window Header */}
          <div className="px-4 py-3 bg-slate-950/70 border-b border-white/10 flex flex-wrap items-center justify-between gap-2.5">
            <div className="flex items-center gap-2">
              <span className="size-3 rounded-full bg-rose-500" />
              <span className="size-3 rounded-full bg-amber-500" />
              <span className="size-3 rounded-full bg-emerald-500" />
              <span className="text-[11px] font-mono text-slate-400 ml-1 truncate">
                {deviceView === "mobile" ? "pwa.lasertronics.lk (Offline Ready)" : "valgrow://lasertronics.telemetry/v4.2.1"}
              </span>
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-1 bg-white/10 p-1 rounded-xl text-xs">
              <button
                onClick={() => setActiveTab("sync")}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all text-xs flex items-center gap-1 ${
                  activeTab === "sync" ? "bg-blue-600 text-white" : "text-slate-300 hover:text-white"
                }`}
              >
                <RefreshCw className="size-3" />
                <span>POS Sync</span>
              </button>
              <button
                onClick={() => setActiveTab("search")}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all text-xs flex items-center gap-1 ${
                  activeTab === "search" ? "bg-blue-600 text-white" : "text-slate-300 hover:text-white"
                }`}
              >
                <Search className="size-3" />
                <span>Live Search</span>
              </button>
              <button
                onClick={() => setActiveTab("margin")}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all text-xs flex items-center gap-1 ${
                  activeTab === "margin" ? "bg-blue-600 text-white" : "text-slate-300 hover:text-white"
                }`}
              >
                <SlidersHorizontal className="size-3" />
                <span>Margins</span>
              </button>
            </div>
          </div>

          {/* Window Body */}
          <div className="p-4 sm:p-6 min-h-[320px]">
            {/* TAB 1: SYNC */}
            {activeTab === "sync" && (
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div>
                    <div className="text-[11px] font-mono text-sky-400 font-bold">INTOUCH POS GATEWAY</div>
                    <div className="text-xs font-bold text-white mt-0.5">
                      Differential Sync Active • 16,715 SKUs Verified
                    </div>
                  </div>
                  <button
                    onClick={triggerManualSync}
                    disabled={isSyncing}
                    className="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center gap-2 shadow-sm transition-all disabled:opacity-50"
                  >
                    <RefreshCw className={`size-3 ${isSyncing ? "animate-spin" : ""}`} />
                    <span>{isSyncing ? "Verifying..." : "Simulate Sync Pulse"}</span>
                  </button>
                </div>

                <div className="rounded-xl bg-black/40 border border-white/10 p-3.5 font-mono text-xs space-y-2">
                  <div className="text-[10px] text-slate-400 pb-1.5 border-b border-white/10 flex justify-between">
                    <span>REAL-TIME ERP EVENT TELEMETRY</span>
                    <span className="text-emerald-400">● WebIPAN REST</span>
                  </div>
                  {syncLogs.map((log) => (
                    <div key={log.id} className="flex items-start gap-2 text-slate-300">
                      <span className="text-slate-500 shrink-0 text-[11px]">[{log.time}]</span>
                      <span className="px-1 py-0.2 rounded text-[9px] bg-blue-500/20 text-sky-300 font-bold shrink-0">
                        {log.type}
                      </span>
                      <span className="text-[11px] leading-tight">{log.msg}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 2: SEARCH */}
            {activeTab === "search" && (
              <div className="space-y-3.5">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search 16,715 components (e.g. 'ESP32', 'Soldering')..."
                    className="w-full pl-9 pr-3 py-2 rounded-xl bg-white/10 border border-white/15 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-blue-400"
                  />
                </div>

                <div className="rounded-xl border border-white/10 divide-y divide-white/5 overflow-hidden">
                  {filteredProducts.map((p) => (
                    <div key={p.slug} className="p-2.5 flex items-center justify-between gap-2.5 hover:bg-white/5">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <img src={p.image} alt={p.name} className="size-8 rounded-lg object-cover bg-slate-800 shrink-0" />
                        <div className="min-w-0">
                          <div className="text-xs font-bold text-white truncate">{p.name}</div>
                          <div className="text-[10px] text-slate-400 font-mono">SKU: {p.sku}</div>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-xs font-bold font-mono text-emerald-400">{formatLKR(p.price)}</div>
                        <div className="text-[10px] text-slate-400 font-mono">Stock: {p.stock}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: MARGIN */}
            {activeTab === "margin" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span className="text-slate-300">Base Wholesale Cost:</span>
                      <span className="text-white font-bold">{formatLKR(simulatorBasePrice)}</span>
                    </div>
                    <input
                      type="range"
                      min="500"
                      max="10000"
                      step="250"
                      value={simulatorBasePrice}
                      onChange={(e) => setSimulatorBasePrice(Number(e.target.value))}
                      className="w-full accent-blue-500 cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span className="text-slate-300">Category Margin:</span>
                      <span className="text-sky-400 font-bold">+{simulatorMargin}%</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="60"
                      step="5"
                      value={simulatorMargin}
                      onChange={(e) => setSimulatorMargin(Number(e.target.value))}
                      className="w-full accent-sky-400 cursor-pointer"
                    />
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-xs font-mono">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Calculated Markup</span>
                    <span className="text-sky-400">
                      +{formatLKR(Math.round(simulatorBasePrice * (simulatorMargin / 100)))}
                    </span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-white/10">
                    <span className="text-slate-200 font-bold">Final Customer Retail Price</span>
                    <span className="text-sm sm:text-base font-extrabold text-emerald-400">
                      {formatLKR(computedSellingPrice)}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* NEW ENHANCEMENT 3: VALGROW'S 4-PHASE ENGINEERING METHODOLOGY */}
      <section id="methodology" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block rounded-full border border-blue-200/80 bg-blue-50 px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-blue-700">
            ValGrow Engineering Methodology
          </span>
          <h2 className="mt-2.5 font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            How ValGrow Labs Built It: 4-Phase Execution
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            Our systematic engineering process from legacy reverse-engineering to production cutover.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs relative">
            <div className="size-8 rounded-lg bg-blue-100 text-blue-700 font-mono font-bold text-xs flex items-center justify-center mb-3">
              01
            </div>
            <h4 className="font-display font-bold text-sm text-slate-900">POS Audit & Reverse-Engineering</h4>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Analyzed InTouch MySQL database schemas, profiled WebIPAN API throughput limits, and audited showroom
              counter barcode workflows.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs relative">
            <div className="size-8 rounded-lg bg-indigo-100 text-indigo-700 font-mono font-bold text-xs flex items-center justify-center mb-3">
              02
            </div>
            <h4 className="font-display font-bold text-sm text-slate-900">Decoupled Edge Middleware</h4>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Built cryptographic differential delta polling and streaming JSON indexes, reducing server RAM overhead
              from 1,240MB down to 78MB.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs relative">
            <div className="size-8 rounded-lg bg-sky-100 text-sky-700 font-mono font-bold text-xs flex items-center justify-center mb-3">
              03
            </div>
            <h4 className="font-display font-bold text-sm text-slate-900">Apple-Grade Design System</h4>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Created responsive storefront with TanStack Start, parametric category search filters, and offline Workbox
              service worker caching.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs relative">
            <div className="size-8 rounded-lg bg-emerald-100 text-emerald-700 font-mono font-bold text-xs flex items-center justify-center mb-3">
              04
            </div>
            <h4 className="font-display font-bold text-sm text-slate-900">Zero-Downtime POS Cutover</h4>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Deployed atomic checkout stock reservation locks in parallel with live physical showroom registers with
              zero inventory collision.
            </p>
          </div>
        </div>
      </section>

      {/* 5. MEASURABLE BUSINESS IMPACT */}
      <section id="impact" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="inline-block rounded-full border border-blue-200/80 bg-blue-50 px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-blue-700">
            Commercial Results
          </span>
          <h2 className="mt-2.5 font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Proven Commercial & Operational ROI
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs text-center">
            <div className="font-display text-3xl font-extrabold text-blue-600">16,715</div>
            <div className="text-xs font-bold text-slate-800 mt-1">Live SKUs Online</div>
            <p className="text-[11px] text-slate-500 mt-1">100% digitized from offline POS</p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs text-center">
            <div className="font-display text-3xl font-extrabold text-emerald-600">&lt; 180ms</div>
            <div className="text-xs font-bold text-slate-800 mt-1">Median Response Time</div>
            <p className="text-[11px] text-slate-500 mt-1">Sub-second page loads</p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs text-center">
            <div className="font-display text-3xl font-extrabold text-amber-600">0%</div>
            <div className="text-xs font-bold text-slate-800 mt-1">Stock Collision</div>
            <p className="text-[11px] text-slate-500 mt-1">Eliminated double-selling</p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs text-center">
            <div className="font-display text-3xl font-extrabold text-indigo-600">+340%</div>
            <div className="text-xs font-bold text-slate-800 mt-1">Outstation Growth</div>
            <p className="text-[11px] text-slate-500 mt-1">Island-wide orders unlocked</p>
          </div>
        </div>

        {/* Client Testimonial */}
        <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs max-w-3xl mx-auto text-center">
          <p className="text-sm sm:text-base text-slate-700 italic leading-relaxed">
            “Connecting our complex 16,000+ item InTouch POS system to a fast web platform seemed impossible without
            slowing down our physical store registers. ValGrow Labs built an architecture that is rock-solid and has
            quadrupled our island-wide customer reach.”
          </p>
          <div className="mt-4 font-bold text-xs sm:text-sm text-slate-900">
            Management Team • LASERTRONICS PVT LTD, Colombo
          </div>
        </div>
      </section>

      {/* NEW ENHANCEMENT 4: INTERACTIVE VALGROW LABS PROJECT INQUIRY CALCULATOR */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="p-6 sm:p-10 rounded-3xl bg-slate-900 text-white shadow-xl text-center relative overflow-hidden">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-sky-400 text-xs font-mono font-bold mb-3">
            <Sparkles className="size-3" />
            <span>Work With ValGrow Labs</span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
            Have a Legacy POS, ERP, or Hardware System?
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            ValGrow Labs designs custom real-time synchronization engines, high-throughput digital commerce platforms,
            and enterprise business operating systems.
          </p>

          {/* Interactive Project Type Selector */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs">
            {[
              { id: "pos-sync", label: "ERP / POS Web Sync" },
              { id: "ecommerce", label: "High-Throughput E-Commerce" },
              { id: "business-os", label: "Custom Business OS" },
              { id: "pwa", label: "Offline Field PWA" },
            ].map((s) => (
              <button
                key={s.id}
                onClick={() => setSelectedService(s.id)}
                className={`px-3.5 py-1.5 rounded-full transition-all font-bold ${
                  selectedService === s.id
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-white/10 text-slate-300 hover:bg-white/20"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-7 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-105"
            >
              Book an Architecture Consultation
            </Link>
            <Link
              to="/shop"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-slate-200 font-bold text-xs sm:text-sm transition-all"
            >
              Explore Live Storefront
            </Link>
          </div>
        </div>
      </section>

      {/* 6. VALGROW LABS FOOTER */}
      <footer className="border-t border-slate-200 bg-white py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs text-slate-500">
            © {new Date().getFullYear()} ValGrow Labs. Flagship Case Study for Lasertronics PVT LTD.
          </div>
          <div className="mt-3 flex items-center justify-center gap-4 text-xs text-slate-500">
            <a href="#overview" className="hover:text-blue-600 transition-colors">
              Back to Top
            </a>
            <span>•</span>
            <Link to="/" className="hover:text-blue-600 transition-colors">
              Storefront
            </Link>
            <span>•</span>
            <Link to="/shop" className="hover:text-blue-600 transition-colors">
              Catalog (16,715 SKUs)
            </Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
