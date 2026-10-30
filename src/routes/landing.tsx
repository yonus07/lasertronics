import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import Lenis from "lenis";
import { Preloader, ScrollProgressBar } from "@/components/landing/Preloader";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { StatsStrip } from "@/components/landing/StatsStrip";
import { CategoryMarquee } from "@/components/landing/CategoryMarquee";
import { BentoFeatures } from "@/components/landing/BentoFeatures";
import { FeaturedProducts } from "@/components/landing/FeaturedProducts";
import { Solutions } from "@/components/landing/Solutions";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { MobileCTA } from "@/components/landing/MobileCTA";
import { CursorGlowTrail, useReducedMotion } from "@/lib/motion";

export const Route = createFileRoute("/landing")({
  head: () => ({
    meta: [
      {
        title: "Lasertronics E-Shop — 16,700+ Electronics, IoT & Components Sri Lanka",
      },
      {
        name: "description",
        content:
          "Sri Lanka's award-level electronics hardware ecosystem engineered by ValGrow Labs. 16,700+ live products synced with InTouch POS/ERP, 100% LKR pricing, and island-wide delivery.",
      },
      {
        name: "keywords",
        content:
          "electronics Sri Lanka, Arduino Colombo, ESP32, sensors, soldering tools, InTouch POS, ValGrow Labs, LKR electronics, robotics Sri Lanka",
      },
      {
        property: "og:title",
        content: "Lasertronics E-Shop — Every Electronic Component. One Store. Island-Wide.",
      },
      {
        property: "og:description",
        content:
          "16,700+ live products synced real-time from Colombo store. 100% LKR pricing with island-wide doorstep delivery.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "Lasertronics E-Shop | 16,700+ Electronics Sri Lanka",
      },
      {
        name: "twitter:description",
        content:
          "Sri Lanka's premier hardware hub engineered by ValGrow Labs. Live InTouch sync & island-wide delivery.",
      },
      {
        name: "theme-color",
        content: "#05070D",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["ElectronicsStore", "Organization"],
          name: "LASERTRONICS PVT LTD",
          alternateName: "Lasertronics E-Shop",
          url: "https://lasertronics.lk",
          description:
            "Full-stack electronics e-commerce platform engineered by ValGrow Labs with 16,700+ live products synced from the InTouch POS/ERP.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "1st Cross Street",
            addressLocality: "Colombo",
            addressRegion: "Western Province",
            postalCode: "01100",
            addressCountry: "LK",
          },
          priceRange: "LKR",
          currenciesAccepted: "LKR",
          paymentAccepted: "Cash on Delivery, Credit Card, Direct Bank Transfer",
          openingHours: "Mo-Sa 09:00-18:00",
          telephone: "+94 11 234 5678",
        }),
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  const prefersReduced = useReducedMotion();

  // Initialize Lenis smooth scroll
  useEffect(() => {
    if (prefersReduced || typeof window === "undefined") return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let animationFrameId: number;

    const raf = (time: number) => {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    };

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, [prefersReduced]);

  return (
    <div className="min-h-screen bg-[var(--landing-bg)] text-[var(--landing-text-primary)] transition-colors duration-300 font-body selection:bg-[#2F6BFF] selection:text-white relative overflow-x-hidden">
      {/* 1. Preloader (under 1.2s boot diagnostic) */}
      <Preloader />

      {/* Top Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Interactive Cursor Glow Trail (Desktop only) */}
      <CursorGlowTrail />

      {/* 2. Sticky Glass Navbar */}
      <Navbar />

      {/* 3. Hero Section */}
      <main id="main-content">
        <Hero />
        {/* 4. Trust Strip Stats */}
        <StatsStrip />
        {/* 5. Category Marquee */}
        <CategoryMarquee />
        {/* 6. Bento Features Grid */}
        <BentoFeatures />
        {/* 7 & 8. Project Selector & Featured Products */}
        <FeaturedProducts />
        {/* 9. From Prototype to Production Solutions (Radix Tabs) */}
        <Solutions />
        {/* 10. How It Works (SVG Circuit Line) */}
        <HowItWorks />
        {/* 11. Testimonials (Embla Carousel) */}
        <Testimonials />
        {/* 12. FAQ (Radix Accordion) */}
        <FAQ />
        {/* 13. Final CTA Banner */}
        <FinalCTA />
      </main>

      {/* 14. Footer */}
      <Footer />

      {/* 15. Mobile Sticky CTA Bar */}
      <MobileCTA />
    </div>
  );
}

