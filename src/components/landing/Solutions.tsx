import { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { Link } from "@tanstack/react-router";
import {
  GraduationCap,
  Hammer,
  Building2,
  CheckCircle2,
  ArrowRight,
  Cpu,
  Layers,
  FileSpreadsheet,
  Truck,
  Sparkles,
} from "lucide-react";

export function Solutions() {
  const [activeTab, setActiveTab] = useState("students");

  return (
    <section id="solutions" className="py-24 relative bg-[var(--landing-bg)] overflow-hidden transition-colors duration-300">
      {/* Background ambient mesh */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[350px] bg-[#22D3EE]/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[600px] h-[350px] bg-[#2F6BFF]/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--landing-surface)] border border-[var(--landing-border)] text-xs font-mono-spec text-[#2F6BFF] dark:text-[#22D3EE] mb-4 shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-[#2F6BFF] dark:text-[#22D3EE]" />
            <span>SOLUTIONS ARCHITECTURE</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[var(--landing-text-primary)] tracking-tight">
            From Prototype to Production
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--landing-text-secondary)] font-body">
            Tailored hardware supply chains whether you are building a university thesis, prototyping a breakthrough IoT device, or running mass PCB assembly.
          </p>
        </div>

        {/* Radix Tabs Container */}
        <Tabs.Root
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full flex flex-col items-center"
        >
          {/* Tabs Navigation Triggers */}
          <Tabs.List
            aria-label="Target Solutions Audience"
            className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-[var(--landing-surface)] border border-[var(--landing-border)] backdrop-blur-xl mb-12 shadow-[var(--landing-card-shadow)]"
          >
            <Tabs.Trigger
              value="students"
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-heading text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F6BFF] ${
                activeTab === "students"
                  ? "bg-gradient-to-r from-[#2F6BFF] to-[#1E55E6] text-white shadow-[0_0_25px_rgba(47,107,255,0.4)] border border-white/20"
                  : "text-[var(--landing-text-secondary)] hover:text-[var(--landing-text-primary)] hover:bg-[var(--landing-surface-subtle)]"
              }`}
            >
              <GraduationCap className="h-4 w-4" />
              <span>Engineering Students</span>
            </Tabs.Trigger>

            <Tabs.Trigger
              value="makers"
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-heading text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F6BFF] ${
                activeTab === "makers"
                  ? "bg-gradient-to-r from-[#2F6BFF] to-[#1E55E6] text-white shadow-[0_0_25px_rgba(47,107,255,0.4)] border border-white/20"
                  : "text-[var(--landing-text-secondary)] hover:text-[var(--landing-text-primary)] hover:bg-[var(--landing-surface-subtle)]"
              }`}
            >
              <Hammer className="h-4 w-4" />
              <span>Makers & Innovators</span>
            </Tabs.Trigger>

            <Tabs.Trigger
              value="businesses"
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-heading text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F6BFF] ${
                activeTab === "businesses"
                  ? "bg-gradient-to-r from-[#2F6BFF] to-[#1E55E6] text-white shadow-[0_0_25px_rgba(47,107,255,0.4)] border border-white/20"
                  : "text-[var(--landing-text-secondary)] hover:text-[var(--landing-text-primary)] hover:bg-[var(--landing-surface-subtle)]"
              }`}
            >
              <Building2 className="h-4 w-4" />
              <span>Enterprises & OEMs</span>
            </Tabs.Trigger>
          </Tabs.List>

          {/* Tab Content 1: Students */}
          <Tabs.Content
            value="students"
            className="w-full focus:outline-none animate-fade-in"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl bg-[var(--landing-surface)] border border-[var(--landing-border)] backdrop-blur-2xl p-8 sm:p-12 shadow-[var(--landing-card-shadow)]">
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono-spec text-[#2F6BFF] dark:text-[#22D3EE] mb-3 font-semibold">
                    <GraduationCap className="h-4 w-4" />
                    <span>ACADEMIC & FYP DISCOUNTS</span>
                  </div>
                  <h3 className="font-heading text-2xl sm:text-4xl font-extrabold text-[var(--landing-text-primary)]">
                    Powering Final Year Projects & Robotics Competitions
                  </h3>
                  <p className="mt-4 text-base text-[var(--landing-text-secondary)] font-body leading-relaxed">
                    Deadlines wait for no one. We provide student-friendly project bundles, official Moratuwa / Peradeniya / SLIIT competition kits, and instant campus-wide express delivery.
                  </p>
                </div>

                <div className="mt-8 space-y-3.5">
                  {[
                    "Pre-packaged kits for Arduino, ESP32 IoT, robotics & sensor fusion",
                    "Formal quotation generation for university grant & faculty reimbursements",
                    "Next-day priority delivery directly to university hostels or Colombo counter pickup",
                    "Guaranteed authentic ICs with pinout diagrams to prevent bench burnout",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-sm font-body text-[var(--landing-text-secondary)]">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Link
                    to="/shop"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl btn-shimmer font-heading text-xs font-semibold text-white tracking-wide shadow-md"
                  >
                    <span>Browse Student Project Kits</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[var(--landing-surface-subtle)] border border-[var(--landing-border)] hover:bg-[var(--landing-surface)] text-xs font-heading font-medium text-[var(--landing-text-primary)] transition-colors shadow-xs"
                  >
                    <span>Request University Quotation</span>
                  </Link>
                </div>
              </div>

              {/* Visual Telemetry Card */}
              <div className="lg:col-span-5 rounded-2xl bg-[var(--landing-bg-secondary)] border border-[var(--landing-border)] p-6 font-mono-spec text-xs shadow-inner">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[var(--landing-border)] text-[#2F6BFF] dark:text-[#22D3EE] font-semibold">
                  <span>STUDENT_KIT_ROBOTICS.inv</span>
                  <span className="text-emerald-500">IN STOCK</span>
                </div>
                <div className="space-y-3 text-[11px] text-[var(--landing-text-secondary)]">
                  <div className="p-3 rounded-xl bg-[var(--landing-surface)] border border-[var(--landing-border)] flex justify-between shadow-xs">
                    <span>ESP32-WROOM-32D Dual Core</span>
                    <strong className="text-[var(--landing-text-primary)]">Rs. 525</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-[var(--landing-surface)] border border-[var(--landing-border)] flex justify-between shadow-xs">
                    <span>L298N Dual H-Bridge Motor Driver</span>
                    <strong className="text-[var(--landing-text-primary)]">Rs. 320</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-[var(--landing-surface)] border border-[var(--landing-border)] flex justify-between shadow-xs">
                    <span>HC-SR04 Ultrasonic Distance Sensor</span>
                    <strong className="text-[var(--landing-text-primary)]">Rs. 112</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-[var(--landing-surface)] border border-[var(--landing-border)] flex justify-between shadow-xs">
                    <span>830-Point Breadboard + 65 Jumper Wires</span>
                    <strong className="text-[var(--landing-text-primary)]">Rs. 380</strong>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-[var(--landing-border)] flex items-center justify-between text-xs">
                  <span className="text-[var(--landing-text-muted)]">Total Project Cost:</span>
                  <span className="text-emerald-500 font-bold text-sm">Rs. 1,337</span>
                </div>
              </div>
            </div>
          </Tabs.Content>

          {/* Tab Content 2: Makers */}
          <Tabs.Content
            value="makers"
            className="w-full focus:outline-none animate-fade-in"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl bg-[var(--landing-surface)] border border-[var(--landing-border)] backdrop-blur-2xl p-8 sm:p-12 shadow-[var(--landing-card-shadow)]">
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono-spec text-[#FF4D2E] mb-3 font-semibold">
                    <Hammer className="h-4 w-4" />
                    <span>HARDWARE PROTOTYPING & WORKBENCH</span>
                  </div>
                  <h3 className="font-heading text-2xl sm:text-4xl font-extrabold text-[var(--landing-text-primary)]">
                    Built for Rapid Hardware Iteration
                  </h3>
                  <p className="mt-4 text-base text-[var(--landing-text-secondary)] font-body leading-relaxed">
                    Stop waiting 4 weeks for overseas AliExpress parcels that get held up at customs. Access Sri Lanka's largest local stock of breakout boards, high-grade soldering stations, and specialized modules.
                  </p>
                </div>

                <div className="mt-8 space-y-3.5">
                  {[
                    "Complete inventory of surface-mount & through-hole components",
                    "Digital soldering stations, ESD tweezers, and bench multimeters",
                    "Real-time Colombo inventory counts with instant in-store pickup",
                    "Fast WhatsApp engineering support for pin-compatible alternatives",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-sm font-body text-[var(--landing-text-secondary)]">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Link
                    to="/shop"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl btn-shimmer font-heading text-xs font-semibold text-white tracking-wide shadow-md"
                  >
                    <span>Browse Maker & Prototyping Gear</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Visual Telemetry Card */}
              <div className="lg:col-span-5 rounded-2xl bg-[var(--landing-bg-secondary)] border border-[var(--landing-border)] p-6 font-mono-spec text-xs shadow-inner">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[var(--landing-border)] text-[#FF4D2E] font-semibold">
                  <span>BENCH_TOOLING_TELEMETRY</span>
                  <span className="text-emerald-500">READY</span>
                </div>
                <div className="space-y-3 text-[11px] text-[var(--landing-text-secondary)]">
                  <div className="p-3 rounded-xl bg-[var(--landing-surface)] border border-[var(--landing-border)] shadow-xs">
                    <span className="text-[var(--landing-text-muted)] block mb-1">Temperature Profile</span>
                    <strong className="text-[var(--landing-text-primary)]">PID Stabilized 200°C - 480°C (±2°C)</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-[var(--landing-surface)] border border-[var(--landing-border)] shadow-xs">
                    <span className="text-[var(--landing-text-muted)] block mb-1">ESD Safety Standard</span>
                    <strong className="text-[var(--landing-text-primary)]">MIL-STD-1686 & IEC 61340-5-1 Compliant</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-[var(--landing-surface)] border border-[var(--landing-border)] shadow-xs">
                    <span className="text-[var(--landing-text-muted)] block mb-1">Component Packaging</span>
                    <strong className="text-[var(--landing-text-primary)]">Anti-Static Shielding Bags with Desiccant</strong>
                  </div>
                </div>
              </div>
            </div>
          </Tabs.Content>

          {/* Tab Content 3: Businesses */}
          <Tabs.Content
            value="businesses"
            className="w-full focus:outline-none animate-fade-in"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl bg-[var(--landing-surface)] border border-[var(--landing-border)] backdrop-blur-2xl p-8 sm:p-12 shadow-[var(--landing-card-shadow)]">
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono-spec text-[#2F6BFF] mb-3 font-semibold">
                    <Building2 className="h-4 w-4" />
                    <span>OEM & COMMERCIAL SUPPLY</span>
                  </div>
                  <h3 className="font-heading text-2xl sm:text-4xl font-extrabold text-[var(--landing-text-primary)]">
                    Bulk Procurement & InTouch ERP Integration
                  </h3>
                  <p className="mt-4 text-base text-[var(--landing-text-secondary)] font-body leading-relaxed">
                    Designed for industrial manufacturing, commercial service centers, and IoT hardware producers. Send us your Bill of Materials (BOM) for automated pricing and scheduled local batch shipments.
                  </p>
                </div>

                <div className="mt-8 space-y-3.5">
                  {[
                    "Wholesale volume tier discounts on reels and manufacturer bulk packaging",
                    "Official Sri Lankan VAT & SVAT registered tax invoices",
                    "Automated InTouch POS ERP stock allocation for recurring monthly supply",
                    "Dedicated B2B account support with direct engineer contact",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-sm font-body text-[var(--landing-text-secondary)]">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl btn-shimmer font-heading text-xs font-semibold text-white tracking-wide shadow-md"
                  >
                    <span>Submit BOM for Commercial Quote</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Visual Telemetry Card */}
              <div className="lg:col-span-5 rounded-2xl bg-[var(--landing-bg-secondary)] border border-[var(--landing-border)] p-6 font-mono-spec text-xs shadow-inner">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[var(--landing-border)] text-[#2F6BFF] dark:text-[#22D3EE] font-semibold">
                  <span>ENTERPRISE_BOM_MATCHING</span>
                  <span className="text-emerald-500">AUTOMATED</span>
                </div>
                <div className="space-y-3 text-[11px] text-[var(--landing-text-secondary)]">
                  <div className="p-3 rounded-xl bg-[var(--landing-surface)] border border-[var(--landing-border)] flex justify-between shadow-xs">
                    <span>Batch Reel: 0805 SMD 10k Resistors (5k pcs)</span>
                    <strong className="text-[var(--landing-text-primary)]">Wholesale Tier</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-[var(--landing-surface)] border border-[var(--landing-border)] flex justify-between shadow-xs">
                    <span>Relay Modules 5V 10A (500 pcs)</span>
                    <strong className="text-[var(--landing-text-primary)]">Batch Ready</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-[var(--landing-surface)] border border-[var(--landing-border)] flex justify-between shadow-xs">
                    <span>ESP32-WROOM Modules (250 pcs)</span>
                    <strong className="text-[var(--landing-text-primary)]">Reserved</strong>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-[var(--landing-border)] flex items-center justify-between text-xs">
                  <span className="text-[var(--landing-text-muted)]">InTouch ERP Invoice:</span>
                  <span className="text-[var(--landing-text-primary)] font-semibold">SVAT / VAT Compliant</span>
                </div>
              </div>
            </div>
          </Tabs.Content>
        </Tabs.Root>

      </div>
    </section>
  );
}
