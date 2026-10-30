import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function FAQ() {
  const faqs = [
    {
      id: "faq-1",
      num: "01",
      question: "How fast is island-wide delivery and what are the shipping fees?",
      answer:
        "We dispatch orders daily from our Colombo 01 hub using tracked express courier partners. Western Province (Colombo, Gampaha, Kalutara) orders typically arrive within 24 hours; all other 22 districts across Sri Lanka arrive within 24 to 48 hours. Standard island-wide delivery is a flat rate of Rs. 450, and delivery is completely FREE on orders over Rs. 15,000.",
    },
    {
      id: "faq-2",
      num: "02",
      question: "How accurate is the 16,700+ live product stock displayed online?",
      answer:
        "Our digital catalog is linked directly to the physical InTouch POS/ERP system at our 1st Cross Street retail store in Colombo with automated 15-second synchronization cycles. If an item indicates 'In Stock', that component is physically on the shelf and ready for immediate pack and dispatch.",
    },
    {
      id: "faq-3",
      num: "03",
      question: "What payment methods are supported?",
      answer:
        "We support 100% transparent Sri Lankan Rupee checkout through three flexible methods: Cash on Delivery (COD) island-wide, Visa & Mastercard debit/credit cards via secure payment gateway, and Direct Bank Deposit/Online Transfer (with instant receipt confirmation). No foreign exchange conversion fees or hidden surcharges.",
    },
    {
      id: "faq-4",
      num: "04",
      question: "Can universities and businesses place bulk BOM orders?",
      answer:
        "Yes! We regularly supply engineering faculties (Moratuwa, Peradeniya, SLIIT, Ruhuna) and commercial electronics manufacturers. You can upload or email your Bill of Materials (BOM) spreadsheet, and our engineering team will generate an official quotation with volume tier discounts and SVAT/VAT compliant tax invoices.",
    },
    {
      id: "faq-5",
      num: "05",
      question: "What is your warranty and component replacement policy?",
      answer:
        "All active ICs, development boards, and modules are sourced from verified manufacturers and sealed in electrostatic discharge (ESD) safe packaging. We provide a 7-day replacement warranty for any manufacturer defects or dead-on-arrival components upon inspection at our Colombo facility.",
    },
  ];

  return (
    <section id="faq" className="py-24 relative bg-[var(--landing-bg)] overflow-hidden transition-colors duration-300">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[350px] bg-[#22D3EE]/5 blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--landing-surface)] border border-[var(--landing-border)] text-xs font-mono-spec text-[#2F6BFF] dark:text-[#22D3EE] mb-4 shadow-xs">
            <HelpCircle className="h-3.5 w-3.5 text-[#2F6BFF] dark:text-[#22D3EE]" />
            <span>KNOWLEDGE BASE</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[var(--landing-text-primary)] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-[var(--landing-text-secondary)] font-body">
            Everything you need to know about our physical store stock, island-wide delivery, and LKR payments.
          </p>
        </div>

        {/* Radix Accordion */}
        <Accordion.Root type="single" collapsible defaultValue="faq-1" className="space-y-4">
          {faqs.map((faq) => (
            <Accordion.Item
              key={faq.id}
              value={faq.id}
              className="rounded-2xl bg-[var(--landing-surface)] border border-[var(--landing-border)] overflow-hidden backdrop-blur-xl shadow-[var(--landing-card-shadow)] transition-all duration-200 data-[state=open]:border-[#2F6BFF]/40"
            >
              <Accordion.Header className="flex">
                <Accordion.Trigger className="w-full flex items-center justify-between p-6 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F6BFF]">
                  <div className="flex items-center gap-4 pr-4">
                    <span className="font-mono-spec text-xs font-bold text-[#2F6BFF] dark:text-[#22D3EE] px-2.5 py-1 rounded-lg bg-[var(--landing-surface-subtle)] border border-[var(--landing-border)]">
                      {faq.num}
                    </span>
                    <span className="font-heading text-base sm:text-lg font-bold text-[var(--landing-text-primary)] group-hover:text-[#2F6BFF] dark:group-hover:text-[#22D3EE] transition-colors">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown className="h-5 w-5 text-[var(--landing-text-muted)] group-hover:text-[var(--landing-text-primary)] transition-transform duration-300 ease-out shrink-0 group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>

              <Accordion.Content className="px-6 pb-6 pt-1 text-[var(--landing-text-secondary)] font-body text-sm sm:text-base leading-relaxed data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden">
                <div className="pl-12 border-l border-[var(--landing-border)] text-[var(--landing-text-secondary)]">
                  {faq.answer}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>

        {/* Support Help Card */}
        <div className="mt-12 p-6 rounded-2xl bg-[var(--landing-surface)] border border-[var(--landing-border)] shadow-[var(--landing-card-shadow)] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="font-heading text-sm font-bold text-[var(--landing-text-primary)]">
              Still have questions about a specific component?
            </div>
            <div className="text-xs text-[var(--landing-text-muted)] font-body mt-0.5">
              Our hardware engineers at 1st Cross St are available to assist via WhatsApp or phone.
            </div>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl btn-shimmer font-heading text-xs font-semibold text-white shrink-0 shadow-md"
          >
            <span>Contact Support</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
