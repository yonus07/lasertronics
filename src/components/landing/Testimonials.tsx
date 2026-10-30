import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2, MapPin } from "lucide-react";

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const reviews = [
    {
      name: "Kavinda Perera",
      role: "Final Year Mechatronics Student",
      org: "University of Moratuwa",
      location: "Colombo / Katubedda",
      content:
        "Got my entire SLRC robotics competition hardware delivered within 24 hours to Katubedda. The ESP32 and motor drivers were 100% genuine and the InTouch stock count matched what was physically on the shelf.",
      rating: 5,
      avatar: "KP",
      accent: "from-blue-600 to-cyan-400",
    },
    {
      name: "Tharindu Wickramasinghe",
      role: "Embedded Systems Lead",
      org: "IoT Labs Colombo",
      location: "Western Province",
      content:
        "We order microcontrollers and passive components in bulk for our production runs. Transparent LKR pricing with zero Forex markup makes budgeting predictable, and SVAT invoices are issued promptly.",
      rating: 5,
      avatar: "TW",
      accent: "from-indigo-600 to-purple-500",
    },
    {
      name: "Nimal Jayawardena",
      role: "Master Hardware Technician",
      org: "Central Electronics Care",
      location: "Kandy",
      content:
        "The digital soldering station and precision toolkit are top tier. Finding authentic ESD-safe tools with next-day courier delivery to Kandy used to take weeks before Lasertronics.",
      rating: 5,
      avatar: "NJ",
      accent: "from-emerald-600 to-teal-400",
    },
    {
      name: "Ayesha Fernando",
      role: "STEM Educator & Robotics Maker",
      org: "MakerSpace LK",
      location: "Gampaha",
      content:
        "Lasertronics is the only hardware platform in Sri Lanka where you can check live stock numbers, order via COD, and receive parts securely sealed in anti-static moisture barrier packaging.",
      rating: 5,
      avatar: "AF",
      accent: "from-rose-600 to-amber-500",
    },
  ];

  return (
    <section className="py-24 relative bg-[var(--landing-bg)] overflow-hidden transition-colors duration-300">
      {/* Background Ambient Lighting */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[350px] bg-[#2F6BFF]/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Navigation Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--landing-surface)] border border-[var(--landing-border)] text-xs font-mono-spec text-[#2F6BFF] dark:text-[#22D3EE] mb-4 shadow-xs">
              <Quote className="h-3.5 w-3.5 text-[#2F6BFF] dark:text-[#22D3EE]" />
              <span>TESTED ON THE BENCH</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[var(--landing-text-primary)] tracking-tight">
              Trusted by 3,200+ Sri Lankan Engineers
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[var(--landing-text-secondary)] font-body max-w-xl">
              From university competition benches to industrial PCB repair labs across the island.
            </p>
          </div>

          {/* Carousel Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollPrev}
              type="button"
              aria-label="Previous testimonial"
              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--landing-surface)] border border-[var(--landing-border)] text-[var(--landing-text-primary)] hover:border-[#2F6BFF]/50 hover:bg-[var(--landing-surface-subtle)] shadow-xs transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F6BFF]"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={scrollNext}
              type="button"
              aria-label="Next testimonial"
              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--landing-surface)] border border-[var(--landing-border)] text-[var(--landing-text-primary)] hover:border-[#2F6BFF]/50 hover:bg-[var(--landing-surface-subtle)] shadow-xs transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F6BFF]"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Embla Carousel Viewport */}
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex -ml-6">
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-6 min-w-0"
              >
                <div className="rounded-3xl bg-[var(--landing-surface)] border border-[var(--landing-border)] backdrop-blur-xl p-8 flex flex-col justify-between h-full transition-all duration-300 hover:border-[#2F6BFF]/40 shadow-[var(--landing-card-shadow)]">
                  <div>
                    {/* Rating stars & verified badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-1 text-amber-500">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-amber-400" />
                        ))}
                      </div>
                      <span className="flex items-center gap-1 text-[11px] font-mono-spec text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                        <CheckCircle2 className="h-3 w-3" /> Verified Order
                      </span>
                    </div>

                    {/* Review text */}
                    <p className="text-sm sm:text-base text-[var(--landing-text-secondary)] font-body leading-relaxed mb-6">
                      "{review.content}"
                    </p>
                  </div>

                  {/* Reviewer Details */}
                  <div className="pt-6 border-t border-[var(--landing-border)] flex items-center gap-3.5">
                    <div
                      className={`h-11 w-11 rounded-2xl bg-gradient-to-tr ${review.accent} flex items-center justify-center font-heading font-bold text-white text-sm shadow-md shrink-0`}
                    >
                      {review.avatar}
                    </div>
                    <div className="overflow-hidden">
                      <div className="font-heading font-bold text-[var(--landing-text-primary)] text-sm truncate">
                        {review.name}
                      </div>
                      <div className="text-xs text-[var(--landing-text-muted)] font-body truncate">
                        {review.role} • {review.org}
                      </div>
                      <div className="flex items-center gap-1 text-[10px] font-mono-spec text-[#2F6BFF] dark:text-[#22D3EE] mt-0.5 font-medium">
                        <MapPin className="h-2.5 w-2.5" />
                        <span>{review.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
