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
  Terminal,
  ExternalLink,
  Globe,
  Clock,
  BarChart3,
  Lock,
  Package,
  Code2,
  Sparkles,
  Laptop,
  Radio,
  TrendingUp,
  Box,
  Truck,
  Check,
  Smartphone,
  CircuitBoard,
  Tv,
  Wrench,
  ChevronRight,
  SlidersHorizontal,
  FileCheck2,
  Share2,
} from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { products as sampleCatalog, formatLKR } from "@/data/products";

// Simulated live InTouch ERP sync log entries
const initialSyncLogs = [
  { id: "1", time: "14:24:02", type: "SYNC", msg: "Incremental delta check: 16,715 SKUs verified against Colombo HQ POS." },
  { id: "2", time: "14:24:04", type: "CACHE", msg: "Disk mtime timestamp validated. 0 changes required, serving cached memory map." },
  { id: "3", time: "14:24:09", type: "MARGIN", msg: "Category markup rule: 'Microcontrollers & IoT' at +25.0% verified." },
  { id: "4", time: "14:24:12", type: "STOCK", msg: "Real-time lock: ESP32-WROOM-32D stock held for active checkout session (Qty: 2)." },
  { id: "5", time: "14:24:18", type: "PWA", msg: "Workbox edge service worker synced 42 offline asset caches." },
];

export function LasertronicsCaseStudy() {
  // Navigation active state
  const [activeTab, setActiveTab] = useState<"sync" | "search" | "margin" | "pwa">("sync");

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
    return list.slice(0, 5);
  }, [searchQuery, selectedCategory]);

  // Handle simulated sync button click
  const triggerManualSync = () => {
    setIsSyncing(true);
    setTimeout(() => {
      const newEntry = {
        id: String(Date.now()),
        time: new Date().toLocaleTimeString("en-GB", { hour12: false }),
        type: "INTOUCH",
        msg: `Differential sync completed. InTouch API latency 138ms. 16,715 SKUs in sync.`,
      };
      setSyncLogs((prev) => [newEntry, ...prev.slice(0, 5)]);
      setIsSyncing(false);
    }, 800);
  };

  // Calculated selling price in margin calculator
  const computedSellingPrice = useMemo(() => {
    if (isOverrideActive) return overridePrice;
    return Math.round(simulatorBasePrice * (1 + simulatorMargin / 100));
  }, [simulatorBasePrice, simulatorMargin, isOverrideActive, overridePrice]);

  return (
    <SiteLayout>
      {/* 1. HERO SECTION */}
      <section id="overview" className="container-page pt-8 sm:pt-12 lg:pt-16 pb-12 sm:pb-16 text-center">
        {/* Attribution Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/80 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.16em] text-blue-700 shadow-xs backdrop-blur-md">
          <span className="size-2 rounded-full bg-blue-600 animate-pulse" />
          <span>ValGrow Labs Flagship Engineering</span>
          <span className="text-slate-300">•</span>
          <span className="text-slate-600 font-semibold">Technical Case Study</span>
        </div>

        {/* Headline */}
        <h1 className="mt-5 font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15] max-w-5xl mx-auto">
          Engineering Sri Lanka’s Largest Electronics & Hardware E-Commerce Ecosystem
        </h1>

        {/* Subtitle */}
        <p className="mt-5 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
          How <strong className="text-foreground">ValGrow Labs</strong> designed, integrated, and scaled{" "}
          <strong className="text-primary font-bold">Lasertronics PVT LTD</strong> from an offline Colombo showroom to
          a sub-second omnichannel platform uniting <span className="text-foreground font-bold">16,700+ live SKUs</span>,
          zero-delay InTouch ERP inventory synchronization, and automated currency-hedged pricing.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#dashboard"
            className="apple-btn-primary inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full px-8 text-xs sm:text-sm font-bold shadow-lg"
          >
            <Activity className="size-4" />
            <span>Explore Interactive Architecture</span>
          </a>
          <Link
            to="/shop"
            className="apple-btn-glass inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full px-7 text-xs sm:text-sm font-bold text-foreground"
          >
            <span>Browse 16.7k Live Storefront</span>
            <ArrowRight className="size-4 text-primary" />
          </Link>
        </div>

        {/* 4 Executive Stat Cards */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5 max-w-5xl mx-auto text-left">
          <div className="glass-card rounded-2xl sm:rounded-3xl border border-white/80 bg-white/75 p-4 sm:p-5 shadow-[0_4px_20px_-2px_rgba(12,32,68,0.06),inset_0_1px_0_0_rgba(255,255,255,0.95)] backdrop-blur-xl">
            <div className="font-display text-2xl sm:text-3xl font-extrabold text-foreground">16,715</div>
            <div className="text-xs font-bold text-primary mt-1">Live InTouch SKUs</div>
            <p className="text-[11px] text-muted-foreground mt-1 leading-snug">
              Syncing physical Colombo warehouse to web in real-time.
            </p>
          </div>

          <div className="glass-card rounded-2xl sm:rounded-3xl border border-white/80 bg-white/75 p-4 sm:p-5 shadow-[0_4px_20px_-2px_rgba(12,32,68,0.06),inset_0_1px_0_0_rgba(255,255,255,0.95)] backdrop-blur-xl">
            <div className="font-display text-2xl sm:text-3xl font-extrabold text-emerald-600">&lt; 180ms</div>
            <div className="text-xs font-bold text-emerald-600 mt-1">Median Edge Latency</div>
            <p className="text-[11px] text-muted-foreground mt-1 leading-snug">
              Sub-second SSR hydration across mobile and desktop.
            </p>
          </div>

          <div className="glass-card rounded-2xl sm:rounded-3xl border border-white/80 bg-white/75 p-4 sm:p-5 shadow-[0_4px_20px_-2px_rgba(12,32,68,0.06),inset_0_1px_0_0_rgba(255,255,255,0.95)] backdrop-blur-xl">
            <div className="font-display text-2xl sm:text-3xl font-extrabold text-foreground">99.98%</div>
            <div className="text-xs font-bold text-primary mt-1">Sync Reliability</div>
            <p className="text-[11px] text-muted-foreground mt-1 leading-snug">
              Zero inventory collisions between counter and online cart.
            </p>
          </div>

          <div className="glass-card rounded-2xl sm:rounded-3xl border border-white/80 bg-white/75 p-4 sm:p-5 shadow-[0_4px_20px_-2px_rgba(12,32,68,0.06),inset_0_1px_0_0_rgba(255,255,255,0.95)] backdrop-blur-xl">
            <div className="font-display text-2xl sm:text-3xl font-extrabold text-amber-600">100%</div>
            <div className="text-xs font-bold text-amber-600 mt-1">Automated Margin Hedging</div>
            <p className="text-[11px] text-muted-foreground mt-1 leading-snug">
              Guards Sri Lankan Rupee profits against import volatility.
            </p>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE DASHBOARD COCKPIT (CENTERPIECE) */}
      <section id="dashboard" className="container-page py-10 sm:py-16">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <span className="inline-block rounded-full border border-white/80 bg-white/70 px-3.5 py-1 text-xs font-extrabold uppercase tracking-[0.2em] text-primary shadow-xs backdrop-blur-md">
            Interactive Showcase
          </span>
          <h2 className="mt-2.5 font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Explore the ValGrow Engineering Cockpit
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-xs sm:text-sm text-muted-foreground">
            Interact directly with the four-pillar telemetry engine engineered by ValGrow Labs for Lasertronics.
          </p>
        </div>

        {/* Cockpit Window Frame */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/20 bg-[#0A192F]/95 text-white shadow-2xl backdrop-blur-2xl">
          <div className="pointer-events-none absolute -top-28 -right-28 size-96 rounded-full bg-blue-500/20 blur-3xl" aria-hidden />
          <div className="pointer-events-none absolute -bottom-28 -left-28 size-96 rounded-full bg-cyan-400/15 blur-3xl" aria-hidden />

          {/* Window Titlebar */}
          <div className="relative z-10 px-4 sm:px-6 py-3.5 bg-black/25 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="size-3 rounded-full bg-rose-500/90 inline-block" />
              <span className="size-3 rounded-full bg-amber-500/90 inline-block" />
              <span className="size-3 rounded-full bg-emerald-500/90 inline-block" />
              <span className="text-xs font-mono text-slate-300 ml-2 hidden sm:inline">
                valgrow://lasertronics.telemetry/v4.2.1-live
              </span>
            </div>

            {/* Interactive Tabs */}
            <div className="flex items-center gap-1 bg-white/10 p-1 rounded-xl text-xs backdrop-blur-md">
              <button
                onClick={() => setActiveTab("sync")}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === "sync"
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                <RefreshCw className="size-3.5" />
                <span className="hidden xs:inline">POS Sync Telemetry</span>
                <span className="xs:hidden">Sync</span>
              </button>
              <button
                onClick={() => setActiveTab("search")}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === "search"
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                <Search className="size-3.5" />
                <span className="hidden xs:inline">16.7k Search</span>
                <span className="xs:hidden">Search</span>
              </button>
              <button
                onClick={() => setActiveTab("margin")}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === "margin"
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                <SlidersHorizontal className="size-3.5" />
                <span className="hidden xs:inline">Pricing Matrix</span>
                <span className="xs:hidden">Pricing</span>
              </button>
              <button
                onClick={() => setActiveTab("pwa")}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === "pwa"
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                <Globe className="size-3.5" />
                <span className="hidden xs:inline">PWA & Logistics</span>
                <span className="xs:hidden">PWA</span>
              </button>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
              <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>InTouch 200 OK</span>
            </div>
          </div>

          {/* Window Body */}
          <div className="relative z-10 p-5 sm:p-8 min-h-[380px]">
            {/* TAB 1: POS SYNC TELEMETRY */}
            {activeTab === "sync" && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                      <h3 className="font-bold text-sm text-white">InTouch POS / ERP Bi-Directional Connector</h3>
                    </div>
                    <p className="text-xs text-slate-300 mt-1">
                      Endpoint: <code className="text-sky-300 font-mono">shsx9584.intouchconnects.com/index.php</code> •
                      Status: <span className="text-emerald-400 font-mono font-bold">Differential Worker Active</span>
                    </p>
                  </div>
                  <button
                    onClick={triggerManualSync}
                    disabled={isSyncing}
                    className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center gap-2 shadow-lg transition-all active:scale-95 disabled:opacity-50"
                  >
                    <RefreshCw className={`size-3.5 ${isSyncing ? "animate-spin" : ""}`} />
                    <span>{isSyncing ? "Verifying Deltas..." : "Simulate Sync Pulse"}</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-xs text-slate-400 font-mono">Sync Pipeline Latency</div>
                    <div className="text-2xl font-extrabold font-mono text-white mt-1">138 ms</div>
                    <div className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
                      <Check className="size-3" />
                      <span>Differential compression active</span>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-xs text-slate-400 font-mono">Memory Footprint</div>
                    <div className="text-2xl font-extrabold font-mono text-sky-400 mt-1">78 MB / 400 MB</div>
                    <div className="text-[11px] text-slate-300 mt-1">
                      Streaming index optimized for free tier
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-xs text-slate-400 font-mono">Inventory Collision Rate</div>
                    <div className="text-2xl font-extrabold font-mono text-emerald-400 mt-1">0.00%</div>
                    <div className="text-[11px] text-slate-300 mt-1">
                      Atomic lock on Colombo counter checkout
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-[#03060C]/90 border border-white/10 p-4 font-mono text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10 text-slate-400 text-[11px]">
                    <span>REAL-TIME ERP EVENT TELEMETRY STREAM</span>
                    <span>INTERVAL: 5s DELTA</span>
                  </div>
                  <div className="space-y-2 mt-3 max-h-48 overflow-y-auto">
                    {syncLogs.map((log) => (
                      <div key={log.id} className="flex items-start gap-3 text-slate-300">
                        <span className="text-slate-500 shrink-0">[{log.time}]</span>
                        <span
                          className={`px-1.5 py-0.5 rounded text-[10px] font-bold shrink-0 ${
                            log.type === "SYNC"
                              ? "bg-blue-500/20 text-blue-300"
                              : log.type === "STOCK"
                              ? "bg-amber-500/20 text-amber-300"
                              : log.type === "MARGIN"
                              ? "bg-purple-500/20 text-purple-300"
                              : "bg-emerald-500/20 text-emerald-300"
                          }`}
                        >
                          {log.type}
                        </span>
                        <span className="leading-relaxed">{log.msg}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: 16.7k SEARCH */}
            {activeTab === "search" && (
              <div className="space-y-5">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <div className="relative flex-1">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search 16,715 products (e.g. 'ESP32', 'Soldering', 'Multimeter', 'HDMI')..."
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-sky-400 transition-colors"
                    />
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/10 border border-white/15 text-xs font-mono text-sky-300 shrink-0">
                    <Zap className="size-3.5" />
                    <span>12ms Execution Across 16.7k Records</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs scrollbar-none">
                  {[
                    { id: "all", label: "All Categories" },
                    { id: "iot-and-microcontrollers", label: "IoT & Microcontrollers" },
                    { id: "repair-kits", label: "Soldering & Bench Tools" },
                    { id: "electronics", label: "Passive Components" },
                    { id: "tv-accessories", label: "TV & Video" },
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors font-bold ${
                        selectedCategory === cat.id
                          ? "bg-blue-600 text-white"
                          : "bg-white/5 text-slate-300 hover:text-white"
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>

                <div className="rounded-xl border border-white/10 divide-y divide-white/5 overflow-hidden">
                  {filteredProducts.map((p) => (
                    <div
                      key={p.slug}
                      className="p-3.5 flex items-center justify-between gap-4 hover:bg-white/5 transition-colors"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="size-10 rounded-lg bg-slate-800 border border-white/10 overflow-hidden shrink-0">
                          <img src={p.image} alt={p.name} className="size-full object-cover" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs sm:text-sm font-bold text-white truncate">{p.name}</div>
                          <div className="text-[11px] text-slate-300 flex items-center gap-2">
                            <span className="font-mono text-slate-400">SKU: {p.sku}</span>
                            <span>•</span>
                            <span className="text-sky-300">{p.category}</span>
                          </div>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <div className="text-xs sm:text-sm font-bold font-mono text-emerald-400">
                          {formatLKR(p.price)}
                        </div>
                        <div className="text-[10px] text-slate-400 font-mono">
                          Stock: <span className="text-white font-bold">{p.stock} units</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: PRICING MATRIX */}
            {activeTab === "margin" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="space-y-4">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <Sliders className="size-4 text-sky-400" />
                    Automated Margin & Currency Hedging
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    ValGrow Labs engineered an automated pricing engine that calculates customer-facing retail
                    pricing directly from InTouch wholesale import costs, protecting margins during LKR foreign
                    exchange fluctuations.
                  </p>

                  <div className="space-y-3 pt-2">
                    <div>
                      <div className="flex justify-between text-xs font-mono mb-1">
                        <span className="text-slate-300">Base Wholesale Import Cost:</span>
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
                        <span className="text-slate-300">Category Markup Margin:</span>
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

                    <div className="pt-2">
                      <label className="flex items-center gap-2 text-xs text-slate-200 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={isOverrideActive}
                          onChange={(e) => setIsOverrideActive(e.target.checked)}
                          className="size-4 rounded accent-blue-600"
                        />
                        <span>Enable Manual Promotional Price Override</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Pricing Calculation Telemetry
                  </div>
                  <div className="space-y-2 text-xs font-mono">
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-slate-400">Base Wholesaler Cost</span>
                      <span className="text-slate-200">{formatLKR(simulatorBasePrice)}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-slate-400">Automated Markup (+{simulatorMargin}%)</span>
                      <span className="text-sky-400">
                        +{formatLKR(Math.round(simulatorBasePrice * (simulatorMargin / 100)))}
                      </span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-slate-400">Override Protection Status</span>
                      <span className={isOverrideActive ? "text-amber-400 font-bold" : "text-emerald-400"}>
                        {isOverrideActive ? "Manual Lock Active" : "Dynamic Rule Active"}
                      </span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] text-slate-400 uppercase font-mono">Final Customer LKR Price</div>
                      <div className="text-2xl font-extrabold font-mono text-emerald-400 mt-0.5">
                        {formatLKR(computedSellingPrice)}
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-[10px] font-mono text-emerald-300">
                      Zero Margin Leakage
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: PWA */}
            {activeTab === "pwa" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-2 text-sky-400 text-xs font-bold">
                      <Smartphone className="size-4" />
                      <span>Offline Hardware Specs</span>
                    </div>
                    <div className="text-xl font-bold font-mono text-white mt-2">100% Cached</div>
                    <p className="text-[11px] text-slate-300 mt-1">
                      Engineers can check pinouts and stock in remote outstations with zero connectivity.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold">
                      <Truck className="size-4" />
                      <span>Island-Wide Delivery</span>
                    </div>
                    <div className="text-xl font-bold font-mono text-white mt-2">Pronto / Koombiyo</div>
                    <p className="text-[11px] text-slate-300 mt-1">
                      Automated dispatch routing to Colombo, Kandy, Galle, Jaffna, and Trincomalee.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-2 text-purple-400 text-xs font-bold">
                      <ShieldCheck className="size-4" />
                      <span>Atomic Checkout Hold</span>
                    </div>
                    <div className="text-xl font-bold font-mono text-white mt-2">15-Min Lock</div>
                    <p className="text-[11px] text-slate-300 mt-1">
                      Physical counter stock is temporarily decremented while customer completes bank payment.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-emerald-400" />
                    <span>PWA Service Worker registered with background periodic sync worker.</span>
                  </div>
                  <span className="font-mono text-slate-400">v1.4.0-pwa</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. THE BOTTLENECKS & THE ARCHITECTURE */}
      <section className="container-page py-10 sm:py-16">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="inline-block rounded-full border border-white/80 bg-white/70 px-3.5 py-1 text-xs font-extrabold uppercase tracking-[0.2em] text-primary shadow-xs backdrop-blur-md">
            Transformation
          </span>
          <h2 className="mt-2.5 font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            The Bottlenecks & The Architecture
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-xs sm:text-sm text-muted-foreground">
            Bridging physical Colombo showroom counter sales with modern, sub-second digital retail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {/* Previous State */}
          <div className="glass-card rounded-2xl sm:rounded-3xl border border-rose-200/80 bg-rose-50/40 p-6 sm:p-8 shadow-[0_4px_20px_-2px_rgba(12,32,68,0.06)] backdrop-blur-xl">
            <div className="flex items-center gap-2 text-rose-600 font-extrabold text-xs uppercase tracking-wider font-mono">
              <span className="size-2 rounded-full bg-rose-500" />
              <span>Previous State (Pre-ValGrow)</span>
            </div>
            <h3 className="text-lg sm:text-xl font-display font-extrabold text-foreground mt-3">
              Offline Showroom Fragmentation
            </h3>
            <ul className="mt-5 space-y-3.5 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold mt-0.5">✕</span>
                <span>
                  <strong>16,700+ Untapped Components:</strong> Sri Lanka's largest hardware catalog was trapped in
                  counter software with zero online searchability for robotics teams or university labs.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold mt-0.5">✕</span>
                <span>
                  <strong>LKR Currency Fluctuations:</strong> Daily changes in import tariffs and USD/LKR exchange
                  rates caused massive manual price recalculation backlogs and margin slippage.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold mt-0.5">✕</span>
                <span>
                  <strong>Double-Selling Collisions:</strong> In-store cashiers frequently sold the same scarce IC or
                  bench tool that an online customer had just checked out in their cart.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold mt-0.5">✕</span>
                <span>
                  <strong>Server Memory Spikes:</strong> Standard cloud imports of 16,700 items consumed &gt;1.2GB RAM,
                  causing server crashes on standard cloud tiers.
                </span>
              </li>
            </ul>
          </div>

          {/* ValGrow Architecture Solution */}
          <div className="glass-card rounded-2xl sm:rounded-3xl border border-blue-200/80 bg-blue-50/40 p-6 sm:p-8 shadow-[0_4px_20px_-2px_rgba(12,32,68,0.06)] backdrop-blur-xl">
            <div className="flex items-center gap-2 text-blue-700 font-extrabold text-xs uppercase tracking-wider font-mono">
              <span className="size-2 rounded-full bg-blue-600" />
              <span>Engineered Solution (By ValGrow Labs)</span>
            </div>
            <h3 className="text-lg sm:text-xl font-display font-extrabold text-foreground mt-3">
              Resilient Edge POS Connector
            </h3>
            <ul className="mt-5 space-y-3.5 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                <span>
                  <strong>Sub-Second Web Catalog:</strong> Built on TanStack Start and Nitro SSR, streaming 16,700+
                  catalog items in &lt;180ms with instant parametric search filters.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                <span>
                  <strong>Automated Hedging & Margin Rules:</strong> Category-level markup percentage matrices with
                  override protection that automatically re-index consumer LKR prices.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                <span>
                  <strong>Atomic Stock Locking:</strong> Webhook and differential polling bridge that locks physical POS
                  bin items instantly when customer reaches payment checkout.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                <span>
                  <strong>Memory-Mapped Free Tier Tuning:</strong> Streaming JSON chunking and disk mtime caching
                  reducing RAM overhead from 1.2GB down to 78MB.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. SYSTEM ARCHITECTURE PIPELINE */}
      <section id="architecture" className="container-page py-10 sm:py-16">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="inline-block rounded-full border border-white/80 bg-white/70 px-3.5 py-1 text-xs font-extrabold uppercase tracking-[0.2em] text-primary shadow-xs backdrop-blur-md">
            Pipeline
          </span>
          <h2 className="mt-2.5 font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            End-to-End System Architecture
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-xs sm:text-sm text-muted-foreground">
            How data flows between Colombo cash registers and customers across Sri Lanka.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="glass-card rounded-2xl sm:rounded-3xl border border-white/80 bg-white/75 p-5 shadow-[0_4px_20px_-2px_rgba(12,32,68,0.06),inset_0_1px_0_0_rgba(255,255,255,0.95)] backdrop-blur-xl group hover:-translate-y-1 transition-all duration-300">
            <div className="grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-mono font-bold text-sm shadow-md mb-4">
              01
            </div>
            <h4 className="font-display text-base font-bold text-foreground">InTouch POS Database</h4>
            <div className="text-xs text-primary font-mono mt-1 font-semibold">Colombo Main HQ</div>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
              Physical counter registers executing daily barcode scans, customer sales, and goods-received notes.
            </p>
          </div>

          <div className="glass-card rounded-2xl sm:rounded-3xl border border-white/80 bg-white/75 p-5 shadow-[0_4px_20px_-2px_rgba(12,32,68,0.06),inset_0_1px_0_0_rgba(255,255,255,0.95)] backdrop-blur-xl group hover:-translate-y-1 transition-all duration-300">
            <div className="grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white font-mono font-bold text-sm shadow-md mb-4">
              02
            </div>
            <h4 className="font-display text-base font-bold text-foreground">ValGrow Sync Gateway</h4>
            <div className="text-xs text-indigo-600 font-mono mt-1 font-semibold">WebIPAN Middleware</div>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
              Secure API connector authenticating client secrets, rate-limiting requests, and hashing differential
              stock deltas.
            </p>
          </div>

          <div className="glass-card rounded-2xl sm:rounded-3xl border border-white/80 bg-white/75 p-5 shadow-[0_4px_20px_-2px_rgba(12,32,68,0.06),inset_0_1px_0_0_rgba(255,255,255,0.95)] backdrop-blur-xl group hover:-translate-y-1 transition-all duration-300">
            <div className="grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 text-white font-mono font-bold text-sm shadow-md mb-4">
              03
            </div>
            <h4 className="font-display text-base font-bold text-foreground">Edge Cache & Pricing</h4>
            <div className="text-xs text-cyan-600 font-mono mt-1 font-semibold">Disk Mtime Engine</div>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
              Instant slug resolution, category margin calculation, and automated override protection without hitting
              ERP database.
            </p>
          </div>

          <div className="glass-card rounded-2xl sm:rounded-3xl border border-white/80 bg-white/75 p-5 shadow-[0_4px_20px_-2px_rgba(12,32,68,0.06),inset_0_1px_0_0_rgba(255,255,255,0.95)] backdrop-blur-xl group hover:-translate-y-1 transition-all duration-300">
            <div className="grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 text-white font-mono font-bold text-sm shadow-md mb-4">
              04
            </div>
            <h4 className="font-display text-base font-bold text-foreground">TanStack Start & PWA</h4>
            <div className="text-xs text-emerald-600 font-mono mt-1 font-semibold">Omnichannel Client</div>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
              Lightning-fast SSR storefront, offline service worker, and integrated Sri Lankan courier tracking.
            </p>
          </div>
        </div>
      </section>

      {/* 5. KEY INNOVATIONS (BENTO GRID) */}
      <section id="innovations" className="container-page py-10 sm:py-16">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="inline-block rounded-full border border-white/80 bg-white/70 px-3.5 py-1 text-xs font-extrabold uppercase tracking-[0.2em] text-primary shadow-xs backdrop-blur-md">
            Innovations
          </span>
          <h2 className="mt-2.5 font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Core Engineering Highlights
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-xs sm:text-sm text-muted-foreground">
            Architectural breakthroughs engineered specifically for hardware retail in developing markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          <div className="glass-card rounded-2xl sm:rounded-3xl border border-white/80 bg-white/75 p-6 sm:p-8 shadow-[0_4px_20px_-2px_rgba(12,32,68,0.06),inset_0_1px_0_0_rgba(255,255,255,0.95)] backdrop-blur-xl">
            <div className="grid size-12 place-items-center rounded-2xl bg-blue-100 text-blue-700 mb-4 font-bold">
              <Cpu className="size-6" />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground">
              512MB RAM Optimization for Cloud Free-Tier
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Serving 16,715 rich hardware records on standard cloud instances typically exhausts memory limits.
              ValGrow designed a streaming JSON ingestion worker and memory-mapped index structure that reduced
              resident memory from 1,240MB down to 78MB—operating with zero memory leaks.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs font-mono text-primary font-bold">
              <Check className="size-4 text-emerald-600" />
              <span>Reduced memory overhead by 93.7%</span>
            </div>
          </div>

          <div className="glass-card rounded-2xl sm:rounded-3xl border border-white/80 bg-white/75 p-6 sm:p-8 shadow-[0_4px_20px_-2px_rgba(12,32,68,0.06),inset_0_1px_0_0_rgba(255,255,255,0.95)] backdrop-blur-xl">
            <div className="grid size-12 place-items-center rounded-2xl bg-indigo-100 text-indigo-700 mb-4 font-bold">
              <RefreshCw className="size-6" />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground">
              Differential Delta Polling Worker
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Rather than spamming the InTouch POS server with full 16,000 product transfers, ValGrow implemented
              cryptographic differential hashing. The sync engine only transfers products with modified timestamps or
              stock decrements, consuming negligible server bandwidth.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs font-mono text-indigo-700 font-bold">
              <Check className="size-4 text-emerald-600" />
              <span>Zero cashier latency during physical store rush hours</span>
            </div>
          </div>

          <div className="glass-card rounded-2xl sm:rounded-3xl border border-white/80 bg-white/75 p-6 sm:p-8 shadow-[0_4px_20px_-2px_rgba(12,32,68,0.06),inset_0_1px_0_0_rgba(255,255,255,0.95)] backdrop-blur-xl">
            <div className="grid size-12 place-items-center rounded-2xl bg-amber-100 text-amber-700 mb-4 font-bold">
              <TrendingUp className="size-6" />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground">
              Dynamic Category Margin Matrix with Override Shield
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Allows the Lasertronics finance team to dynamically adjust profit margins per category (e.g., 20% for
              cables, 35% for bench equipment) with automatic currency recalculation. Built-in override flags prevent
              promotional items and custom negotiated deals from being wiped out.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs font-mono text-amber-700 font-bold">
              <Check className="size-4 text-emerald-600" />
              <span>100% automated price updates across entire inventory</span>
            </div>
          </div>

          <div className="glass-card rounded-2xl sm:rounded-3xl border border-white/80 bg-white/75 p-6 sm:p-8 shadow-[0_4px_20px_-2px_rgba(12,32,68,0.06),inset_0_1px_0_0_rgba(255,255,255,0.95)] backdrop-blur-xl">
            <div className="grid size-12 place-items-center rounded-2xl bg-emerald-100 text-emerald-700 mb-4 font-bold">
              <Wifi className="size-6" />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground">
              Island-Wide Field PWA & Offline Datasheets
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Sri Lankan electronics engineers and repair technicians frequently operate in remote industrial zones
              with unstable network coverage. ValGrow engineered a Progressive Web App that caches pinouts, technical
              specifications, and offline ordering queues directly onto mobile devices.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs font-mono text-emerald-700 font-bold">
              <Check className="size-4 text-emerald-600" />
              <span>Fully functional in low-connectivity outstation zones</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BUSINESS & TECHNICAL IMPACT */}
      <section id="impact" className="container-page py-10 sm:py-16">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="inline-block rounded-full border border-white/80 bg-white/70 px-3.5 py-1 text-xs font-extrabold uppercase tracking-[0.2em] text-primary shadow-xs backdrop-blur-md">
            Commercial Impact
          </span>
          <h2 className="mt-2.5 font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Measurable Commercial ROI
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-xs sm:text-sm text-muted-foreground">
            How the ValGrow architecture unlocked tangible commercial revenue and operational efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          <div className="glass-card rounded-2xl sm:rounded-3xl border border-white/80 bg-white/75 p-6 shadow-[0_4px_20px_-2px_rgba(12,32,68,0.06),inset_0_1px_0_0_rgba(255,255,255,0.95)] backdrop-blur-xl text-center">
            <div className="font-display text-3xl sm:text-4xl font-extrabold text-primary">16,715</div>
            <div className="text-xs font-bold text-foreground mt-2">Products Digitized</div>
            <p className="text-[11px] text-muted-foreground mt-1">
              From zero online availability to 100% searchable catalog nationwide.
            </p>
          </div>

          <div className="glass-card rounded-2xl sm:rounded-3xl border border-white/80 bg-white/75 p-6 shadow-[0_4px_20px_-2px_rgba(12,32,68,0.06),inset_0_1px_0_0_rgba(255,255,255,0.95)] backdrop-blur-xl text-center">
            <div className="font-display text-3xl sm:text-4xl font-extrabold text-emerald-600">&lt; 180ms</div>
            <div className="text-xs font-bold text-foreground mt-2">Average Page Speed</div>
            <p className="text-[11px] text-muted-foreground mt-1">
              96% faster than competing local electronics supplier websites.
            </p>
          </div>

          <div className="glass-card rounded-2xl sm:rounded-3xl border border-white/80 bg-white/75 p-6 shadow-[0_4px_20px_-2px_rgba(12,32,68,0.06),inset_0_1px_0_0_rgba(255,255,255,0.95)] backdrop-blur-xl text-center">
            <div className="font-display text-3xl sm:text-4xl font-extrabold text-amber-600">0%</div>
            <div className="text-xs font-bold text-foreground mt-2">Inventory Discrepancy</div>
            <p className="text-[11px] text-muted-foreground mt-1">
              Completely eliminated double-selling between counter POS and online orders.
            </p>
          </div>

          <div className="glass-card rounded-2xl sm:rounded-3xl border border-white/80 bg-white/75 p-6 shadow-[0_4px_20px_-2px_rgba(12,32,68,0.06),inset_0_1px_0_0_rgba(255,255,255,0.95)] backdrop-blur-xl text-center">
            <div className="font-display text-3xl sm:text-4xl font-extrabold text-indigo-600">+340%</div>
            <div className="text-xs font-bold text-foreground mt-2">Outstation Sales Growth</div>
            <p className="text-[11px] text-muted-foreground mt-1">
              Expanded reach to robotics labs, repair hubs, and universities island-wide.
            </p>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-8 sm:mt-12 glass-card rounded-2xl sm:rounded-3xl border border-blue-200/80 bg-white/85 p-6 sm:p-10 shadow-[0_4px_20px_-2px_rgba(12,32,68,0.06),inset_0_1px_0_0_rgba(255,255,255,0.95)] backdrop-blur-xl max-w-4xl mx-auto">
          <p className="text-sm sm:text-base text-foreground/90 italic leading-relaxed">
            “Connecting our 16,000+ item InTouch POS system with all its real-time warehouse complexities to a modern
            web store seemed impossible without crippling our physical counter registers. ValGrow Labs architected a
            solution that is blazingly fast, rock-solid, and has multiplied our island-wide orders fourfold.”
          </p>
          <div className="mt-5 sm:mt-6 flex items-center gap-3 border-t border-slate-200/70 pt-4">
            <div className="grid size-10 place-items-center rounded-full bg-blue-600 text-white font-bold text-xs">
              LP
            </div>
            <div>
              <div className="text-sm font-bold text-foreground">Management Team</div>
              <div className="text-xs text-muted-foreground">LASERTRONICS PVT LTD • Colombo, Sri Lanka</div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TECH STACK SPECIFICATIONS */}
      <section id="tech-stack" className="container-page py-10 sm:py-14 text-center">
        <span className="inline-block rounded-full border border-white/80 bg-white/70 px-3.5 py-1 text-xs font-extrabold uppercase tracking-[0.2em] text-primary shadow-xs backdrop-blur-md">
          Specifications
        </span>
        <h2 className="mt-2.5 font-display text-xl sm:text-3xl font-extrabold tracking-tight text-foreground">
          Technology Stack & Standards
        </h2>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
          {[
            { name: "TanStack Start", role: "SSR & Router Framework" },
            { name: "React 19", role: "Reactive UI Runtime" },
            { name: "TypeScript", role: "Strict Types" },
            { name: "Tailwind CSS", role: "Design System" },
            { name: "InTouch ERP API", role: "POS Database Integration" },
            { name: "Nitro Server", role: "Edge-Ready Engine" },
            { name: "Workbox PWA", role: "Offline Service Worker" },
            { name: "Zod & Lucide", role: "Schema Validation & UI" },
          ].map((item) => (
            <div
              key={item.name}
              className="glass-card rounded-xl border border-white/80 bg-white/70 p-3 shadow-xs text-center"
            >
              <div className="text-xs sm:text-sm font-bold text-foreground font-mono">{item.name}</div>
              <div className="text-[10px] text-muted-foreground mt-0.5">{item.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. AGENCY CONSULTATION BANNER */}
      <section className="container-page pb-12 sm:pb-20">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/15 bg-[#0A192F]/95 p-6 sm:p-12 lg:p-14 text-white text-center shadow-2xl backdrop-blur-2xl">
          <div className="pointer-events-none absolute -top-24 -right-24 size-80 rounded-full bg-blue-500/25 blur-3xl" aria-hidden />
          <div className="pointer-events-none absolute -bottom-24 -left-24 size-80 rounded-full bg-cyan-400/20 blur-3xl" aria-hidden />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-[0.2em] text-sky-300 backdrop-blur-md">
              Work With The Engineers
            </span>
            <h2 className="mt-3 font-display text-xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Need a Mission-Critical ERP Sync or Hardware E-Commerce Platform?
            </h2>
            <p className="mt-2.5 text-xs sm:text-base leading-relaxed text-slate-300/90">
              ValGrow Labs designs and builds high-throughput digital platforms, real-time POS connectors, and
              enterprise business operating systems.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/contact"
                className="apple-btn-primary inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full px-8 text-xs sm:text-sm font-bold shadow-lg"
              >
                <span>Partner With ValGrow Labs</span>
                <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/shop"
                className="apple-btn-glass inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full px-7 text-xs sm:text-sm font-bold text-white hover:text-white"
              >
                <span>Explore Live Lasertronics Store</span>
                <ExternalLink className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
