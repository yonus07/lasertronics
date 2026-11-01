import React, { useState, useMemo, useEffect } from "react";
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
} from "lucide-react";
import { products as sampleCatalog, formatLKR } from "@/data/products";

// Simulated live InTouch ERP sync log entries
const initialSyncLogs = [
  { id: "1", time: "14:14:02", type: "SYNC", msg: "Incremental delta check: 16,715 SKUs verified against Colombo HQ POS." },
  { id: "2", time: "14:14:04", type: "CACHE", msg: "Disk mtime timestamp validated. 0 changes required, serving cached memory map." },
  { id: "3", time: "14:14:09", type: "MARGIN", msg: "Category markup rule: 'Microcontrollers & IoT' at +25.0% verified." },
  { id: "4", time: "14:14:12", type: "STOCK", msg: "Real-time lock: ESP32-WROOM-32D stock held for active session (Qty: 2)." },
  { id: "5", time: "14:14:18", type: "PWA", msg: "Workbox edge service worker synced 42 offline asset caches." },
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
    }, 900);
  };

  // Calculated selling price in margin calculator
  const computedSellingPrice = useMemo(() => {
    if (isOverrideActive) return overridePrice;
    return Math.round(simulatorBasePrice * (1 + simulatorMargin / 100));
  }, [simulatorBasePrice, simulatorMargin, isOverrideActive, overridePrice]);

  return (
    <div className="min-h-screen bg-[#070B14] text-slate-100 selection:bg-blue-600 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* 1. STICKY HEADER */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#070B14]/85 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo & Agency Attribution */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="size-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center font-bold text-white shadow-md shadow-blue-500/20">
                V
              </div>
              <div>
                <div className="flex items-center gap-1.5 leading-none">
                  <span className="font-bold text-sm tracking-tight text-white">ValGrow Labs</span>
                  <span className="text-slate-500 text-xs">/</span>
                  <span className="text-xs font-semibold text-sky-400">Lasertronics</span>
                </div>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-mono">
                  Enterprise Case Study
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1 text-xs font-medium text-slate-300">
            <a href="#overview" className="px-3 py-1.5 rounded-md hover:text-white hover:bg-white/5 transition-colors">
              Overview
            </a>
            <a href="#architecture" className="px-3 py-1.5 rounded-md hover:text-white hover:bg-white/5 transition-colors">
              Architecture
            </a>
            <a href="#dashboard" className="px-3 py-1.5 rounded-md hover:text-white hover:bg-white/5 transition-colors">
              Live Showcase
            </a>
            <a href="#innovations" className="px-3 py-1.5 rounded-md hover:text-white hover:bg-white/5 transition-colors">
              Key Innovations
            </a>
            <a href="#impact" className="px-3 py-1.5 rounded-md hover:text-white hover:bg-white/5 transition-colors">
              Business ROI
            </a>
            <a href="#tech-stack" className="px-3 py-1.5 rounded-md hover:text-white hover:bg-white/5 transition-colors">
              Tech Stack
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2.5">
            <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-400">
              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
              16,715 SKUs Synced
            </div>
            <Link
              to="/shop"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-sm shadow-blue-500/30 transition-all hover:scale-105"
            >
              <span>Live Storefront</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section id="overview" className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
        {/* Ambient Subtle Glow */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
          <div className="h-[450px] w-[700px] rounded-full bg-gradient-to-tr from-blue-600/20 via-sky-500/10 to-transparent blur-3xl opacity-60" />
          <div className="absolute top-1/4 right-1/4 h-[300px] w-[300px] rounded-full bg-indigo-500/15 blur-3xl opacity-50" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Tagline Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-300 backdrop-blur-md mb-6">
            <span className="size-2 rounded-full bg-sky-400 animate-pulse" />
            <span className="text-white font-semibold">ValGrow Labs Flagship Engineering</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Omnichannel Retail Architecture</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
            Engineering Sri Lanka’s Largest Electronics & Hardware E-Commerce Ecosystem
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed">
            How <strong className="text-white">ValGrow Labs</strong> designed, integrated, and scaled{" "}
            <strong className="text-sky-400">Lasertronics PVT LTD</strong> from offline showroom registers to a
            sub-second, multi-channel platform uniting <span className="text-white font-semibold">16,700+ live SKUs</span>,
            zero-delay InTouch ERP inventory synchronization, and automated currency-hedged pricing.
          </p>

          {/* CTA Group */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href="#dashboard"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02]"
            >
              <Activity className="size-4 text-sky-200" />
              <span>Explore Interactive Showcase</span>
            </a>
            <Link
              to="/shop"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 font-semibold text-sm backdrop-blur-md transition-all hover:text-white"
            >
              <span>Visit Live Lasertronics Store</span>
              <ExternalLink className="size-4 text-slate-400" />
            </Link>
          </div>

          {/* Executive Stats Strip */}
          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm text-left">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">16,715</div>
              <div className="text-xs text-sky-400 font-medium mt-1">Live InTouch SKUs</div>
              <p className="text-[11px] text-slate-400 mt-1">Syncing physical Colombo warehouse to web in real-time.</p>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm text-left">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">&lt; 180ms</div>
              <div className="text-xs text-emerald-400 font-medium mt-1">Median Edge Latency</div>
              <p className="text-[11px] text-slate-400 mt-1">Sub-second SSR hydration across mobile and desktop.</p>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm text-left">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">99.98%</div>
              <div className="text-xs text-sky-400 font-medium mt-1">ERP Sync Reliability</div>
              <p className="text-[11px] text-slate-400 mt-1">Zero inventory collision between counter and online cart.</p>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm text-left">
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono">100%</div>
              <div className="text-xs text-amber-400 font-medium mt-1">Automated Margin Hedging</div>
              <p className="text-[11px] text-slate-400 mt-1">LKR profit protection guarding against import volatility.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE SYSTEM DASHBOARD SHOWCASE (CENTERPIECE) */}
      <section id="dashboard" className="py-16 md:py-24 bg-[#0A0F1E] border-y border-white/10 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-sky-400">
              <Terminal className="size-3.5" />
              Live Workspace Simulator
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
              Explore the ValGrow Engineering Cockpit
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2">
              Interact directly with the real four-pillar engine engineered by ValGrow Labs for Lasertronics.
            </p>
          </div>

          {/* Browser / Cockpit Window Frame */}
          <div className="rounded-2xl border border-white/15 bg-[#070B14] shadow-2xl overflow-hidden">
            {/* Window Titlebar */}
            <div className="px-4 py-3 bg-[#0D1424] border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
              {/* Left: Window Dots */}
              <div className="flex items-center gap-2">
                <span className="size-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="size-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="size-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="text-xs font-mono text-slate-400 ml-2 hidden sm:inline">
                  valgrow://lasertronics.engine/v4.2.1-live
                </span>
              </div>

              {/* Center: Interactive Tabs */}
              <div className="flex items-center gap-1 bg-[#070B14] p-1 rounded-xl border border-white/10 text-xs">
                <button
                  onClick={() => setActiveTab("sync")}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 ${
                    activeTab === "sync"
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <RefreshCw className="size-3.5" />
                  <span>POS Sync Telemetry</span>
                </button>
                <button
                  onClick={() => setActiveTab("search")}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 ${
                    activeTab === "search"
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <Search className="size-3.5" />
                  <span>16.7k Search Engine</span>
                </button>
                <button
                  onClick={() => setActiveTab("margin")}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 ${
                    activeTab === "margin"
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <SlidersHorizontal className="size-3.5" />
                  <span>Dynamic Pricing Matrix</span>
                </button>
                <button
                  onClick={() => setActiveTab("pwa")}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 ${
                    activeTab === "pwa"
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <Globe className="size-3.5" />
                  <span>PWA & Logistics</span>
                </button>
              </div>

              {/* Right: Live indicator */}
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="hidden md:inline">200 OK · WebIPAN</span>
              </div>
            </div>

            {/* Window Content Body */}
            <div className="p-4 sm:p-6 lg:p-8 min-h-[420px]">
              {/* TAB 1: POS SYNC TELEMETRY */}
              {activeTab === "sync" && (
                <div className="space-y-6">
                  {/* Status Banner */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                        <h3 className="font-bold text-sm text-white">InTouch POS / ERP Bi-Directional Connector</h3>
                      </div>
                      <p className="text-xs text-slate-300 mt-1">
                        Endpoint: <code className="text-sky-300 font-mono">shsx9584.intouchconnects.com/index.php</code>{" "}
                        • Client ID: <code className="text-slate-400 font-mono">9edba68d...</code>
                      </p>
                    </div>
                    <button
                      onClick={triggerManualSync}
                      disabled={isSyncing}
                      className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-2 transition-all disabled:opacity-50"
                    >
                      <RefreshCw className={`size-3.5 ${isSyncing ? "animate-spin" : ""}`} />
                      <span>{isSyncing ? "Checking Deltas..." : "Simulate Sync Pulse"}</span>
                    </button>
                  </div>

                  {/* 3 Metric Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                      <div className="text-xs text-slate-400">Sync Pipeline Latency</div>
                      <div className="text-2xl font-bold font-mono text-white mt-1">138 ms</div>
                      <div className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
                        <Check className="size-3" />
                        <span>Differential payload compression active</span>
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                      <div className="text-xs text-slate-400">Memory Utilization</div>
                      <div className="text-2xl font-bold font-mono text-sky-400 mt-1">78 MB / 400 MB</div>
                      <div className="text-[11px] text-slate-400 mt-1">
                        Memory-mapped index fits Render free limits
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                      <div className="text-xs text-slate-400">Inventory Collision Rate</div>
                      <div className="text-2xl font-bold font-mono text-emerald-400 mt-1">0.00%</div>
                      <div className="text-[11px] text-slate-400 mt-1">
                        Atomic session lock on Colombo register checkout
                      </div>
                    </div>
                  </div>

                  {/* Live Stream Logs */}
                  <div className="rounded-xl bg-[#03060C] border border-white/10 p-4 font-mono text-xs">
                    <div className="flex items-center justify-between pb-2 border-b border-white/10 text-slate-400 text-[11px]">
                      <span>EVENT LOG TELEMETRY STREAM</span>
                      <span>AUTO-REFRESH: 5s INTERVAL</span>
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

              {/* TAB 2: 16.7k SEARCH ENGINE */}
              {activeTab === "search" && (
                <div className="space-y-5">
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    {/* Live Search Input */}
                    <div className="relative flex-1">
                      <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search 16,715 components (e.g., 'ESP32', 'Soldering', 'Multimeter', 'HDMI')..."
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono text-sky-400 shrink-0">
                      <Zap className="size-3.5" />
                      <span>12ms Execution Across 16.7k SKUs</span>
                    </div>
                  </div>

                  {/* Filter Chips */}
                  <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
                    {[
                      { id: "all", label: "All Hardware" },
                      { id: "iot-and-microcontrollers", label: "IoT & Microcontrollers" },
                      { id: "repair-kits", label: "Soldering & Tools" },
                      { id: "electronics", label: "Passive Components" },
                      { id: "tv-accessories", label: "TV & Video" },
                    ].map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
                          selectedCategory === cat.id
                            ? "bg-blue-600 text-white font-medium"
                            : "bg-white/5 text-slate-400 hover:text-slate-200"
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>

                  {/* Product Rows */}
                  <div className="rounded-xl border border-white/10 divide-y divide-white/5 overflow-hidden">
                    {filteredProducts.map((p) => (
                      <div
                        key={p.slug}
                        className="p-3.5 flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="size-10 rounded-lg bg-slate-800 border border-white/10 overflow-hidden shrink-0">
                            <img src={p.image} alt={p.name} className="size-full object-cover" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-xs sm:text-sm font-semibold text-white truncate">{p.name}</div>
                            <div className="text-[11px] text-slate-400 flex items-center gap-2">
                              <span className="font-mono text-slate-400">SKU: {p.sku}</span>
                              <span>•</span>
                              <span className="text-sky-400">{p.category}</span>
                            </div>
                          </div>
                        </div>

                        <div className="text-right shrink-0">
                          <div className="text-xs sm:text-sm font-bold font-mono text-emerald-400">
                            {formatLKR(p.price)}
                          </div>
                          <div className="text-[10px] text-slate-400 font-mono">
                            Stock: <span className="text-white font-semibold">{p.stock} units</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 3: DYNAMIC PRICING MATRIX */}
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
                          <span className="text-slate-400">Base POS Import Cost:</span>
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
                          <span className="text-slate-400">Category Markup Margin:</span>
                          <span className="text-sky-400 font-bold">+{simulatorMargin}%</span>
                        </div>
                        <input
                          type="range"
                          min="5"
                          max="60"
                          step="5"
                          value={simulatorMargin}
                          onChange={(e) => setSimulatorMargin(Number(e.target.value))}
                          className="w-full accent-sky-500 cursor-pointer"
                        />
                      </div>

                      <div className="pt-2">
                        <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
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

                  {/* Pricing Output Card */}
                  <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
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
                        <span className={isOverrideActive ? "text-amber-400 font-semibold" : "text-emerald-400"}>
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
                      <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400">
                        Zero Profit Leakage
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 4: PWA & LOGISTICS */}
              {activeTab === "pwa" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                      <div className="flex items-center gap-2 text-sky-400 text-xs font-semibold">
                        <Smartphone className="size-4" />
                        <span>Offline Hardware Specs</span>
                      </div>
                      <div className="text-xl font-bold font-mono text-white mt-2">100% Cached</div>
                      <p className="text-[11px] text-slate-400 mt-1">
                        Engineers can check pinouts and stock in remote outstations with zero connectivity.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                      <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold">
                        <Truck className="size-4" />
                        <span>Island-Wide Delivery</span>
                      </div>
                      <div className="text-xl font-bold font-mono text-white mt-2">Pronto / Koombiyo</div>
                      <p className="text-[11px] text-slate-400 mt-1">
                        Automated dispatch routing to Colombo, Kandy, Galle, Jaffna, and Trincomalee.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                      <div className="flex items-center gap-2 text-purple-400 text-xs font-semibold">
                        <ShieldCheck className="size-4" />
                        <span>Atomic Checkout</span>
                      </div>
                      <div className="text-xl font-bold font-mono text-white mt-2">15-Min Hold</div>
                      <p className="text-[11px] text-slate-400 mt-1">
                        Physical counter stock is temporarily decremented while customer completes bank payment.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-between text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <span className="size-2 rounded-full bg-emerald-400" />
                      <span>PWA Service Worker registered with background periodic sync worker.</span>
                    </div>
                    <span className="font-mono text-slate-500">v1.4.0-pwa</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE CHALLENGE VS. THE VALGROW SOLUTION */}
      <section className="py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-sky-400">
            System Transformation
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
            The Bottlenecks & The Architecture
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2">
            Bridging decades-old physical showroom counter sales with modern, sub-second digital retail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Legacy Challenges Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-rose-500/[0.03] border border-rose-500/20 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-rose-400 font-bold text-sm uppercase tracking-wider font-mono">
              <span>● Previous State</span>
              <span>(Pre-ValGrow)</span>
            </div>
            <h3 className="text-xl font-bold text-white mt-3">Offline Showroom Fragmentation</h3>
            <ul className="mt-5 space-y-3.5 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <span className="text-rose-400 mt-0.5">✕</span>
                <span>
                  <strong>16,700+ Untapped Components:</strong> Sri Lanka's largest inventory was locked inside local
                  counter software with zero searchability for university students or remote tech labs.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-400 mt-0.5">✕</span>
                <span>
                  <strong>LKR Currency Fluctuations:</strong> Daily changes in import tariffs and USD/LKR exchange
                  rates caused massive manual price updating delays and revenue loss.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-400 mt-0.5">✕</span>
                <span>
                  <strong>Double-Selling Collisions:</strong> In-store cashiers frequently sold the same scarce IC or
                  bench tool that an online customer had just placed in their shopping cart.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-400 mt-0.5">✕</span>
                <span>
                  <strong>Server Memory Explosions:</strong> Naive cloud imports of 16,700 items consumed &gt;1.2GB RAM,
                  crashing standard cloud instances and resulting in heavy downtime.
                </span>
              </li>
            </ul>
          </div>

          {/* ValGrow Architecture Solution Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-blue-500/[0.04] border border-blue-500/20 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-sky-400 font-bold text-sm uppercase tracking-wider font-mono">
              <span>● Engineered Solution</span>
              <span>(By ValGrow Labs)</span>
            </div>
            <h3 className="text-xl font-bold text-white mt-3">Resilient Edge POS Connector</h3>
            <ul className="mt-5 space-y-3.5 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span>
                  <strong>Sub-Second Web Catalog:</strong> Built on TanStack Start and Nitro SSR, streaming 16,700+
                  catalog items in &lt;180ms with instant parametric search filters.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span>
                  <strong>Automated Hedging & Margin Rules:</strong> Category-level markup percentage matrices with
                  override protection that automatically re-index consumer LKR prices.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span>
                  <strong>Atomic Stock Locking:</strong> Webhook and differential polling bridge that locks physical POS
                  bin items instantly when customer reaches payment checkout.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span>
                  <strong>Memory-Mapped Free Tier Tuning:</strong> Streaming JSON chunking and disk mtime caching
                  reducing RAM overhead from 1.2GB down to 78MB.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. SYSTEM ARCHITECTURE PIPELINE */}
      <section id="architecture" className="py-16 md:py-24 bg-[#090D1A] border-y border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-sky-400">
              High-Throughput Data Pipeline
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
              End-to-End System Architecture
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2">
              How data travels between Colombo cash registers and customers across Sri Lanka.
            </p>
          </div>

          {/* 4 Pipeline Stages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Step 1 */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 relative group hover:border-blue-500/40 transition-colors">
              <div className="size-8 rounded-lg bg-blue-500/20 border border-blue-500/30 text-sky-300 flex items-center justify-center font-mono text-xs font-bold mb-4">
                01
              </div>
              <h4 className="text-base font-bold text-white">InTouch POS Database</h4>
              <div className="text-xs text-sky-400 font-mono mt-1">Colombo Main HQ</div>
              <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
                Physical counter registers executing daily barcode scans, customer sales, and goods-received notes.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 relative group hover:border-blue-500/40 transition-colors">
              <div className="size-8 rounded-lg bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 flex items-center justify-center font-mono text-xs font-bold mb-4">
                02
              </div>
              <h4 className="text-base font-bold text-white">ValGrow Sync Gateway</h4>
              <div className="text-xs text-indigo-400 font-mono mt-1">WebIPAN Middleware</div>
              <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
                Secure API connector authenticating client secrets, rate-limiting requests, and hashing differential
                stock deltas.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 relative group hover:border-blue-500/40 transition-colors">
              <div className="size-8 rounded-lg bg-purple-500/20 border border-purple-500/30 text-purple-300 flex items-center justify-center font-mono text-xs font-bold mb-4">
                03
              </div>
              <h4 className="text-base font-bold text-white">Edge Cache & Pricing</h4>
              <div className="text-xs text-purple-400 font-mono mt-1">Disk Mtime Engine</div>
              <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
                Instant slug resolution, category margin calculation, and automated override protection without hitting
                ERP database.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 relative group hover:border-blue-500/40 transition-colors">
              <div className="size-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 flex items-center justify-center font-mono text-xs font-bold mb-4">
                04
              </div>
              <h4 className="text-base font-bold text-white">TanStack Start & PWA</h4>
              <div className="text-xs text-emerald-400 font-mono mt-1">Omnichannel Client</div>
              <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
                Lightning-fast SSR storefront, offline service worker, and integrated Sri Lankan courier tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. KEY INNOVATIONS (BENTO GRID) */}
      <section id="innovations" className="py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-sky-400">
            ValGrow Engineering Highlights
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
            Core Engineering Innovations
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2">
            Architectural breakthroughs engineered specifically for hardware retail in developing markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all">
            <div className="size-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-sky-400 mb-5">
              <Cpu className="size-5" />
            </div>
            <h3 className="text-lg font-bold text-white">512MB RAM Optimization for Cloud Free-Tier</h3>
            <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
              Serving 16,715 rich hardware records on standard cloud instances typically exhausts memory limits.
              ValGrow designed a streaming JSON ingestion worker and memory-mapped index structure that reduced
              resident memory from 1,240MB down to 78MB—operating with zero memory leaks.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs font-mono text-sky-400">
              <Check className="size-4 text-emerald-400" />
              <span>Reduced memory overhead by 93.7%</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all">
            <div className="size-10 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-5">
              <RefreshCw className="size-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Differential Delta Polling Worker</h3>
            <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
              Rather than spamming the InTouch POS server with full 16,000 product transfers, ValGrow implemented
              cryptographic differential hashing. The sync engine only transfers products with modified timestamps or
              stock decrements, consuming negligible server bandwidth.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs font-mono text-indigo-400">
              <Check className="size-4 text-emerald-400" />
              <span>Zero cashier latency during physical store rush hours</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all">
            <div className="size-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-5">
              <TrendingUp className="size-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Dynamic Category Margin Matrix with Override Shield</h3>
            <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
              Allows the Lasertronics finance team to dynamically adjust profit margins per category (e.g., 20% for
              cables, 35% for bench equipment) with automatic currency recalculation. Built-in override flags prevent
              promotional items and custom negotiated deals from being wiped out.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs font-mono text-amber-400">
              <Check className="size-4 text-emerald-400" />
              <span>100% automated price updates across entire inventory</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all">
            <div className="size-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-5">
              <Wifi className="size-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Island-Wide Field PWA & Offline Datasheets</h3>
            <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
              Sri Lankan electronics engineers and repair technicians frequently operate in remote industrial zones
              with unstable network coverage. ValGrow engineered a Progressive Web App that caches pinouts, technical
              specifications, and offline ordering queues directly onto mobile devices.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs font-mono text-emerald-400">
              <Check className="size-4 text-emerald-400" />
              <span>Fully functional in low-connectivity outstation zones</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BUSINESS & TECHNICAL ROI */}
      <section id="impact" className="py-16 md:py-24 bg-[#090D1A] border-y border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
              Tangible Commercial Outcomes
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
              Measurable Business Impact
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2">
              How the ValGrow architecture unlocked tangible commercial revenue and operational efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-sky-400">16,715</div>
              <div className="text-xs font-semibold text-white mt-2">Products Digitized</div>
              <p className="text-[11px] text-slate-400 mt-1">
                From zero online availability to 100% searchable catalog nationwide.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-emerald-400">&lt; 180ms</div>
              <div className="text-xs font-semibold text-white mt-2">Average Page Speed</div>
              <p className="text-[11px] text-slate-400 mt-1">
                96% faster than competing local electronics supplier websites.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-amber-400">0%</div>
              <div className="text-xs font-semibold text-white mt-2">Inventory Discrepancy</div>
              <p className="text-[11px] text-slate-400 mt-1">
                Completely eliminated double-selling between counter POS and online orders.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-indigo-400">+340%</div>
              <div className="text-xs font-semibold text-white mt-2">Outstation Sales Growth</div>
              <p className="text-[11px] text-slate-400 mt-1">
                Expanded reach to robotics labs, repair hubs, and universities island-wide.
              </p>
            </div>
          </div>

          {/* Client Testimonial Card */}
          <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-blue-900/20 via-slate-900/30 to-indigo-900/20 border border-white/15 max-w-4xl mx-auto relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-base sm:text-lg text-slate-200 italic leading-relaxed">
                “Connecting our 16,000+ item InTouch POS system with all its real-time warehouse complexities to a
                modern web store seemed impossible without crippling our physical counter registers. ValGrow Labs
                architected a solution that is blazingly fast, rock-solid, and has multiplied our island-wide orders
                fourfold.”
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="size-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white text-sm">
                  LP
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Management Team</div>
                  <div className="text-xs text-slate-400">LASERTRONICS PVT LTD • Colombo, Sri Lanka</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TECH STACK SPECIFICATIONS */}
      <section id="tech-stack" className="py-16 md:py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-sky-400">
            Engineered With Precision
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-3">
            Technology Stack & Standards
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {[
            { name: "TanStack Start", role: "SSR & Router Framework" },
            { name: "React 19", role: "Reactive UI Runtime" },
            { name: "TypeScript", role: "Strict End-to-End Types" },
            { name: "Tailwind CSS", role: "Utility Design System" },
            { name: "InTouch ERP API", role: "POS Database Integration" },
            { name: "Nitro Server", role: "Edge-Ready Micro-Engine" },
            { name: "Workbox PWA", role: "Offline Service Worker" },
            { name: "Zod & Lucide", role: "Schema Validation & UI" },
          ].map((item) => (
            <div key={item.name} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-center">
              <div className="text-xs sm:text-sm font-bold text-white font-mono">{item.name}</div>
              <div className="text-[10px] sm:text-[11px] text-slate-400 mt-1">{item.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. AGENCY CTA & ENTERPRISE FOOTER */}
      <footer className="border-t border-white/10 bg-[#050810] pt-16 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-blue-600/10 via-indigo-600/5 to-transparent border border-blue-500/20 text-center relative overflow-hidden">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-sky-400">
              Work With The Engineers
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-4">
              Need a Mission-Critical ERP Sync or Hardware E-Commerce Platform?
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xs sm:text-base text-slate-300">
              ValGrow Labs designs and builds high-throughput digital platforms, real-time POS connectors, and
              enterprise business operating systems.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02]"
              >
                <span>Partner With ValGrow Labs</span>
                <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/shop"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 font-semibold text-sm transition-all"
              >
                <span>Explore Live Lasertronics Store</span>
                <ExternalLink className="size-4 text-slate-400" />
              </Link>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <div className="size-5 rounded bg-blue-600 flex items-center justify-center text-[10px] font-bold text-white">
                V
              </div>
              <span>© {new Date().getFullYear()} ValGrow Labs. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-4 text-slate-400">
              <a href="#overview" className="hover:text-white transition-colors">
                Back to Top
              </a>
              <span>•</span>
              <Link to="/" className="hover:text-white transition-colors">
                Storefront Home
              </Link>
              <span>•</span>
              <Link to="/shop" className="hover:text-white transition-colors">
                Catalog (16,715 SKUs)
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
