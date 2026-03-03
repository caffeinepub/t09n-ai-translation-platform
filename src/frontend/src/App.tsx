import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { useActor } from "./hooks/useActor";

/* ─── useFadeInOnScroll ──────────────────────────────────────────── */
function useFadeInOnScroll() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        }
      },
      { threshold: 0.1 },
    );
    const elements = document.querySelectorAll(".fade-in");
    for (const el of elements) {
      observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);
}

/* ─── Helpers ────────────────────────────────────────────────────── */
function scrollToSection(id: string) {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

function SpinnerIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}

/* ─── Navbar ─────────────────────────────────────────────────────── */
function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#features", label: "Features", ocid: "nav.features_link" },
    {
      href: "#how-it-works",
      label: "How It Works",
      ocid: "nav.howitworks_link",
    },
    { href: "#pricing", label: "Pricing", ocid: "nav.pricing_link" },
    { href: "#faq", label: "FAQ", ocid: "nav.faq_link" },
  ];

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    scrollToSection(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E5E7EB]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          className="hover:opacity-80 transition-opacity"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            src="/assets/uploads/Version-01-2-1.png"
            alt="t09n.com logo"
            className="h-14 w-auto"
          />
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-ocid={link.ocid}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
            >
              {link.label}
            </a>
          ))}
          <Button
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold btn-primary px-5"
            data-ocid="nav.cta_button"
            onClick={() => scrollToSection("#waitlist")}
          >
            Start Free
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden p-2 rounded-md hover:bg-muted transition-colors"
          data-ocid="nav.mobile_menu_toggle"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span
              className={`block h-0.5 bg-foreground transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-foreground transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-foreground transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-md border-b border-[#E5E7EB] px-4 py-5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-ocid={link.ocid}
              className="text-sm font-medium text-muted-foreground hover:text-foreground py-1 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
            >
              {link.label}
            </a>
          ))}
          <Button
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold w-fit btn-primary"
            data-ocid="nav.cta_button"
            onClick={() => {
              setMobileOpen(false);
              scrollToSection("#waitlist");
            }}
          >
            Start Free
          </Button>
        </div>
      )}
    </header>
  );
}

/* ─── Hero ───────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-white">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, oklch(0.54 0.18 264 / 0.08) 0%, transparent 70%)",
        }}
      />
      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center py-20 sm:py-28">
        {/* Hero logo — enlarged for visual impact */}
        <div className="flex justify-center mb-10">
          <img
            src="/assets/uploads/Version-01-2-1.png"
            alt="t09n.com"
            className="h-40 sm:h-52 w-auto"
            style={{ imageRendering: "auto" }}
          />
        </div>

        {/* Eyebrow pill */}
        <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/20 rounded-full px-4 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
          <span className="text-xs font-semibold text-primary tracking-wide uppercase">
            Built for Indian Translators
          </span>
        </div>

        {/* Headline — responsive line break */}
        <h1
          className="font-display font-extrabold text-foreground leading-tight tracking-tight mb-6"
          style={{
            fontSize: "clamp(36px, 5.5vw, 56px)",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}
        >
          The Operating System
          <br className="hidden lg:block" />
          <span className="text-primary"> for Translators</span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-muted-foreground mb-10 max-w-2xl mx-auto"
          style={{ fontSize: "18px", lineHeight: 1.7 }}
        >
          Professional translation platform at{" "}
          <strong className="text-foreground font-semibold">
            70% lower cost
          </strong>{" "}
          than SDL Trados. Dual-layer technology built for Indian translators.
        </p>

        {/* Primary CTA + secondary ghost link */}
        <div className="flex flex-col items-center gap-4 mb-12">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base px-9 h-14 btn-primary w-full sm:w-auto hero-cta-glow"
            data-ocid="hero.cta_button"
            onClick={() => scrollToSection("#waitlist")}
          >
            Start Free — No Credit Card
          </Button>
          <button
            type="button"
            data-ocid="hero.pricing_link"
            className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors bg-transparent border-0 p-0 cursor-pointer"
            onClick={() => scrollToSection("#pricing")}
          >
            See Pricing →
          </button>
        </div>

        {/* Trust badges — 4 items */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
          {[
            "1,000 words free",
            "10+ Indian languages",
            "Cancel anytime",
            "No credit card",
          ].map((badge) => (
            <span key={badge} className="flex items-center gap-1.5">
              <CheckIcon className="w-4 h-4 text-primary flex-shrink-0" />
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <svg
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}

/* ─── Problem vs Solution ────────────────────────────────────────── */
function ProblemSolution() {
  const oldWayPains = [
    "Costs ₹5,000+/month (SDL Trados)",
    "Desktop-only, no cloud access",
    "No advanced translation technology",
    "Complex setup, steep learning curve",
    "Primarily English-centric design",
  ];

  const newWayBenefits = [
    "Start free, scale from ₹0/month",
    "Cloud-based, works everywhere",
    "Dual-layer translation technology built in",
    "Simple, intuitive interface",
    "10+ Indian languages first-class",
  ];

  return (
    <section id="problem" className="py-section bg-[#F7F9FC]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 fade-in">
          <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-3">
            Why Switch
          </p>
          <h2
            className="font-display font-bold text-foreground tracking-tight"
            style={{ fontSize: "clamp(28px, 3.5vw, 36px)" }}
          >
            Why translators are switching
          </h2>
        </div>

        {/* Relative wrapper for the VS badge */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Old Way */}
            <div className="fade-in fade-in-delay-1 bg-white rounded-2xl p-8 border border-[#E5E7EB] border-l-4 border-l-red-400">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">😤</span>
                <h3 className="font-display font-bold text-lg text-foreground">
                  The Old Way
                </h3>
                <span className="text-xs font-semibold uppercase tracking-wide bg-red-50 text-red-500 px-2.5 py-1 rounded-full ml-auto">
                  SDL Trados
                </span>
              </div>
              <ul className="space-y-3.5">
                {oldWayPains.map((pain) => (
                  <li key={pain} className="flex items-start gap-3">
                    <XIcon className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      {pain}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile VS divider */}
            <div className="md:hidden flex items-center justify-center py-4">
              <span className="text-sm font-bold text-muted-foreground">
                VS
              </span>
            </div>

            {/* New Way */}
            <div className="fade-in fade-in-delay-2 bg-white rounded-2xl p-8 border border-[#E5E7EB] border-l-4 border-l-emerald-400">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">✨</span>
                <h3 className="font-display font-bold text-lg text-foreground">
                  The t09n Way
                </h3>
                <span className="text-xs font-semibold uppercase tracking-wide bg-primary/8 text-primary px-2.5 py-1 rounded-full ml-auto">
                  t09n.com
                </span>
              </div>
              <ul className="space-y-3.5">
                {newWayBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckIcon className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground font-medium">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Desktop VS badge — absolutely centered between cards */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border-2 border-[#E5E7EB] items-center justify-center text-xs font-bold text-muted-foreground shadow-sm">
            VS
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Features ───────────────────────────────────────────────────── */
const FEATURES = [
  {
    icon: "🔄",
    title: "Dual-Layer Translation",
    description:
      "Two complementary translation engines working in parallel — compare both outputs and pick the best for every segment. Exceptional accuracy for Indian languages.",
  },
  {
    icon: "🔧",
    title: "Full CAT Tool",
    description:
      "15+ automated quality checks, translation memory, and a professional segment editor built for real daily productivity.",
  },
  {
    icon: "📊",
    title: "TQA Reports",
    description:
      "Translation Quality Assessment reports with error categorization. Deliver confidently knowing every segment has been validated.",
  },
  {
    icon: "💰",
    title: "Pay As You Go",
    description:
      "Start free with 1,000 words/month. Scale with PAYG at ₹0.10/word. Pay only for what you translate — no wasted quota.",
  },
  {
    icon: "📚",
    title: "Terminology Base",
    description:
      "Build client-specific glossaries. Consistent terminology across every project, enforced automatically.",
  },
  {
    icon: "🎨",
    title: "Format Preservation",
    description:
      "Upload .docx, .xlsx, .pptx, .srt and get back perfectly formatted output — colors, tables, and styles intact.",
  },
];

const FEATURE_DELAYS = [
  "fade-in-delay-1",
  "fade-in-delay-2",
  "fade-in-delay-3",
  "fade-in-delay-1",
  "fade-in-delay-2",
  "fade-in-delay-3",
];

function Features() {
  return (
    <section id="features" className="py-section bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 fade-in">
          <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-3">
            Features
          </p>
          <h2
            className="font-display font-bold text-foreground tracking-tight"
            style={{ fontSize: "clamp(28px, 3.5vw, 36px)" }}
          >
            Everything a professional translator needs
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => (
            <div
              key={feature.title}
              className={`fade-in ${FEATURE_DELAYS[i]} bg-white border border-[#E5E7EB] rounded-2xl p-7 card-hover group hover:border-primary/40 transition-colors`}
            >
              <div className="text-4xl mb-5 w-12 h-12 flex items-center justify-center">
                {feature.icon}
              </div>
              <h3
                className="font-display font-semibold text-foreground mb-2"
                style={{ fontSize: "20px" }}
              >
                {feature.title}
              </h3>
              <p
                className="text-muted-foreground leading-relaxed"
                style={{ fontSize: "15px" }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── How It Works ───────────────────────────────────────────────── */
const STEPS = [
  {
    number: "01",
    title: "Upload your document",
    description:
      "Drag and drop your file — .docx, .xlsx, .pptx, .txt, or .srt. We handle the parsing instantly.",
  },
  {
    number: "02",
    title: "Dual-layer translation engines",
    description:
      "Our dual-layer translation system processes your content instantly. See both translation outputs side by side.",
  },
  {
    number: "03",
    title: "Review, edit, and export",
    description:
      "Pick the best translation, refine in the segment editor, then export your polished document.",
  },
];

const STEP_DELAYS = ["fade-in-delay-1", "fade-in-delay-2", "fade-in-delay-3"];

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-section bg-[#F7F9FC]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 fade-in">
          <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-3">
            Process
          </p>
          <h2
            className="font-display font-bold text-foreground tracking-tight"
            style={{ fontSize: "clamp(28px, 3.5vw, 36px)" }}
          >
            From document to translation in 3 steps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden md:block absolute top-10 h-px bg-[#E5E7EB]"
            style={{
              left: "calc(16.67% + 2rem)",
              right: "calc(16.67% + 2rem)",
            }}
          />

          {STEPS.map((step, i) => (
            <div
              key={step.number}
              className={`fade-in ${STEP_DELAYS[i]} text-center relative`}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white border-2 border-[#E5E7EB] mb-6 relative">
                <span
                  className="font-display font-extrabold text-primary"
                  style={{ fontSize: "24px" }}
                >
                  {step.number}
                </span>
              </div>
              <h3
                className="font-display font-semibold text-foreground mb-3"
                style={{ fontSize: "18px" }}
              >
                {step.title}
              </h3>
              <p
                className="text-muted-foreground leading-relaxed"
                style={{ fontSize: "15px" }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Pricing ────────────────────────────────────────────────────── */
const PLANS = [
  {
    name: "Free",
    price: "0",
    priceLabel: "₹0",
    period: "month",
    quota: "1,000 words/month",
    bullets: ["1,000 words/month", "Basic CAT editor", "2 Indian languages"],
    cta: "Try Free",
    highlighted: false,
    ocid: "pricing.free_button",
  },
  {
    name: "PAYG",
    price: "0.10",
    priceLabel: "₹0.10",
    period: "word",
    quota: "Pay as you go",
    bullets: ["No monthly cap", "All file formats", "5 Indian languages"],
    cta: "Get Started",
    highlighted: false,
    ocid: "pricing.payg_button",
  },
  {
    name: "Starter",
    price: "799",
    priceLabel: "₹799",
    period: "month",
    quota: "25,000 words/month",
    bullets: [
      "25,000 words/month",
      "Full CAT tool",
      "TM & glossary",
      "10+ languages",
    ],
    cta: "Buy Now",
    highlighted: false,
    ocid: "pricing.starter_button",
  },
  {
    name: "Pro",
    price: "1,499",
    priceLabel: "₹1,499",
    period: "month",
    quota: "100,000 words/month",
    bullets: [
      "100,000 words/month",
      "Dual-layer engine",
      "TQA reports",
      "Priority support",
      "All languages",
    ],
    cta: "Buy Now",
    highlighted: true,
    ocid: "pricing.pro_button",
  },
  {
    name: "Business",
    price: "4,999",
    priceLabel: "₹4,999",
    period: "month",
    quota: "500,000 words + team",
    bullets: [
      "500,000 words/month",
      "Team accounts",
      "Custom glossaries",
      "API access",
      "Dedicated support",
    ],
    cta: "Contact Us",
    highlighted: false,
    ocid: "pricing.business_button",
  },
];

function Pricing() {
  return (
    <section id="pricing" className="py-section bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 fade-in">
          <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-3">
            Pricing
          </p>
          <h2
            className="font-display font-bold text-foreground tracking-tight"
            style={{ fontSize: "clamp(28px, 3.5vw, 36px)" }}
          >
            Simple, transparent pricing
          </h2>
          <p className="text-muted-foreground mt-3 text-base">
            Start free. Scale as you grow. Cancel anytime.
          </p>
        </div>

        {/* Horizontal scroll container on mobile */}
        <div className="overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 sm:overflow-visible">
          <div
            className="flex gap-4 sm:gap-5 items-end"
            style={{ minWidth: "max-content" }}
          >
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`fade-in bg-white rounded-2xl p-6 sm:p-8 relative flex flex-col transition-all duration-300 ${
                  plan.highlighted
                    ? "pricing-highlight scale-[1.05] z-10"
                    : "border border-[#E5E7EB]"
                }`}
                style={{ width: "200px", minWidth: "200px" }}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-bold tracking-widest uppercase px-4 py-1 rounded-full whitespace-nowrap">
                    ⭐ Most Popular
                  </span>
                )}

                <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase mb-3">
                  {plan.name}
                </p>

                <div className="mb-1">
                  <span
                    className="font-mono font-extrabold text-foreground"
                    style={{ fontSize: "28px" }}
                  >
                    {plan.priceLabel}
                  </span>
                  <span className="text-muted-foreground text-xs ml-1">
                    /{plan.period}
                  </span>
                </div>

                <div className="py-3 border-t border-b border-[#E5E7EB] my-4">
                  <p className="text-xs font-semibold text-foreground">
                    {plan.quota}
                  </p>
                </div>

                {/* Feature bullets */}
                <ul className="mb-5 space-y-1.5 text-left">
                  {plan.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-1.5">
                      <CheckIcon className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-muted-foreground leading-snug">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <Button
                    className={`w-full font-semibold btn-primary text-sm ${
                      plan.highlighted
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                        : "bg-white border-2 border-[#E5E7EB] text-foreground hover:border-primary hover:text-primary"
                    }`}
                    variant={plan.highlighted ? "default" : "outline"}
                    data-ocid={plan.ocid}
                    onClick={() => scrollToSection("#waitlist")}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Full pricing link */}
        <div className="text-center mt-8">
          <button
            type="button"
            data-ocid="pricing.details_link"
            className="text-sm text-primary hover:underline inline-block bg-transparent border-0 p-0 cursor-pointer"
            onClick={() => scrollToSection("#pricing")}
          >
            See Full Pricing Details →
          </button>
        </div>
      </div>
    </section>
  );
}

/* ─── Stats + Testimonials ───────────────────────────────────────── */
const STATS = [
  { value: "500+", label: "Translators" },
  { value: "70%", label: "Cost Savings" },
  { value: "4.9/5", label: "Rating" },
];

const LANGUAGE_BADGES = [
  "Hindi",
  "Tamil",
  "Telugu",
  "Kannada",
  "Malayalam",
  "Bengali",
  "Marathi",
  "Gujarati",
];

const TESTIMONIALS = [
  {
    quote:
      "Finally, an affordable CAT tool that works for Hindi. I save ₹3,500 every month!",
    name: "Priya Sharma",
    role: "Freelance Translator",
    location: "Delhi",
    initials: "PS",
  },
  {
    quote:
      "The dual-layer approach gives confidence. I always have a second opinion on tricky segments.",
    name: "Rahul Mehta",
    role: "Technical Translator",
    location: "Mumbai",
    initials: "RM",
  },
  {
    quote:
      "Best tool for Tamil-English translation. The TM feature saves hours every week.",
    name: "Kavitha Rajan",
    role: "Literary Translator",
    location: "Chennai",
    initials: "KR",
  },
];

const TESTIMONIAL_DELAYS = [
  "fade-in-delay-1",
  "fade-in-delay-2",
  "fade-in-delay-3",
];

function StatsAndTestimonials() {
  return (
    <section className="py-section bg-[#F7F9FC]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Stats strip */}
        <div className="grid grid-cols-3 gap-4 mb-6 fade-in">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="font-display font-bold text-foreground"
                style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
              >
                {stat.value}
              </div>
              <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Language badges strip */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-4 mb-12 fade-in fade-in-delay-1">
          <span className="text-xs text-muted-foreground mr-2">
            10+ Indian languages:
          </span>
          {LANGUAGE_BADGES.map((lang) => (
            <span
              key={lang}
              className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-xs font-medium text-foreground"
            >
              {lang}
            </span>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className={`fade-in ${TESTIMONIAL_DELAYS[i]} bg-white rounded-2xl p-7 border border-[#E5E7EB] card-hover`}
            >
              {/* Large quote mark */}
              <div
                className="text-primary font-display font-black leading-none mb-4"
                style={{ fontSize: "48px", opacity: 0.25 }}
                aria-hidden="true"
              >
                "
              </div>
              <p
                className="text-foreground leading-relaxed italic mb-6"
                style={{ fontSize: "15px" }}
              >
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-[#E5E7EB]">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-primary">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.role}, {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ────────────────────────────────────────────────────────── */
const FAQS = [
  {
    id: "dual-layer",
    q: "How does the dual-layer translation system work?",
    a: "t09n runs your text through two complementary translation engines simultaneously, then presents both outputs so you can choose or blend the best result for each segment. This dual-layer approach gives you higher accuracy on nuanced content.",
  },
  {
    id: "languages",
    q: "Which Indian languages are supported?",
    a: "Hindi, Tamil, Telugu, Kannada, Malayalam, Bengali, Marathi, Gujarati, Punjabi, Odia — with more languages being added regularly based on user demand.",
  },
  {
    id: "vs-trados",
    q: "How does t09n compare to SDL Trados?",
    a: "SDL Trados costs ₹25,000–₹80,000+ as an upfront license. t09n starts completely free and our Pro plan is just ₹1,499/month with our dual-layer translation technology built in — no extra plugins needed.",
  },
  {
    id: "tm-import",
    q: "Can I import existing translation memories?",
    a: "Yes, t09n supports TMX file imports so you can bring your existing translation memory and start getting value immediately without starting from scratch.",
  },
  {
    id: "quality",
    q: "Can I trust the quality for client work?",
    a: "Absolutely. Our platform delivers enterprise-grade translation quality suitable for professional client delivery. All translations go through multiple verification layers and automated quality checks. Many professional translators use t09n.com for client projects daily.",
  },
];

function FAQ() {
  return (
    <section id="faq" className="py-section bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 fade-in">
          <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-3">
            FAQ
          </p>
          <h2
            className="font-display font-bold text-foreground tracking-tight"
            style={{ fontSize: "clamp(28px, 3.5vw, 36px)" }}
          >
            Frequently asked questions
          </h2>
        </div>

        <div className="fade-in fade-in-delay-1">
          <Accordion type="single" collapsible className="space-y-2">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                data-ocid={`faq.item.${i + 1}`}
                className="border border-[#E5E7EB] rounded-xl px-5 overflow-hidden"
              >
                <AccordionTrigger className="text-sm font-semibold text-foreground text-left hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

/* ─── Waitlist / CTA Section ─────────────────────────────────────── */
function WaitlistSection() {
  const { actor } = useActor();
  const [email, setEmail] = useState("");
  const [validationError, setValidationError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const { mutate, isPending, isSuccess, isError, error } = useMutation<
    void,
    Error,
    string
  >({
    mutationFn: async (emailVal: string) => {
      if (!actor) throw new Error("Not connected");
      const already = await actor.isInWaitlist(emailVal);
      if (already) throw new Error("already_signed_up");
      await actor.signUp(emailVal);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError("");
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setValidationError("Please enter a valid email address.");
      inputRef.current?.focus();
      return;
    }
    mutate(email);
  };

  const alreadySignedUp =
    isError && (error as Error)?.message === "already_signed_up";
  const genericError =
    isError && (error as Error)?.message !== "already_signed_up";

  return (
    <section
      id="waitlist"
      className="py-section"
      style={{
        background: "linear-gradient(to bottom, #ffffff, #f0f4ff)",
      }}
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <div className="fade-in">
          <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-4">
            Get Early Access
          </p>
          <h2
            className="font-display font-bold text-foreground tracking-tight mb-4"
            style={{ fontSize: "clamp(28px, 3.5vw, 36px)" }}
          >
            Ready to Save 70% on Translation Costs?
          </h2>
          <p className="text-muted-foreground mb-10 text-base">
            Join 500+ Indian translators already using t09n. Start with 1,000
            free words. No credit card needed.
          </p>
        </div>

        {isSuccess ? (
          <div
            data-ocid="waitlist.success_state"
            className="fade-in visible bg-white border border-emerald-200 rounded-2xl px-8 py-8 text-center shadow-sm"
          >
            <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckIcon className="w-6 h-6 text-emerald-500" />
            </div>
            <p className="font-display font-semibold text-lg text-foreground mb-1">
              You're on the list!
            </p>
            <p className="text-sm text-muted-foreground">
              We'll reach out soon with your access details.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="fade-in fade-in-delay-1 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <div className="flex-1">
              <Input
                ref={inputRef}
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                data-ocid="waitlist.input"
                className="bg-white border-[#E5E7EB] text-foreground placeholder:text-muted-foreground h-12 rounded-xl w-full"
                aria-invalid={!!validationError}
                aria-describedby={
                  validationError ? "waitlist-validation-error" : undefined
                }
                disabled={isPending}
              />
            </div>
            <Button
              type="submit"
              disabled={isPending}
              data-ocid="waitlist.submit_button"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-12 px-7 btn-primary flex-shrink-0 rounded-xl"
            >
              {isPending ? (
                <span
                  className="flex items-center gap-2"
                  data-ocid="waitlist.loading_state"
                >
                  <SpinnerIcon className="animate-spin w-4 h-4" />
                  Joining…
                </span>
              ) : (
                "Start Free"
              )}
            </Button>
          </form>
        )}

        {validationError && (
          <p
            id="waitlist-validation-error"
            className="text-sm text-red-500 mt-3"
            data-ocid="waitlist.error_state"
          >
            {validationError}
          </p>
        )}

        {alreadySignedUp && (
          <div
            data-ocid="waitlist.error_state"
            className="mt-4 text-sm text-primary bg-primary/6 border border-primary/20 rounded-xl px-5 py-3"
          >
            You're already on the waitlist — we'll be in touch soon!
          </div>
        )}

        {genericError && (
          <div
            data-ocid="waitlist.error_state"
            className="mt-4 text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-5 py-3"
          >
            Something went wrong. Please try again.
          </div>
        )}
      </div>
    </section>
  );
}

/* ─── Footer ─────────────────────────────────────────────────────── */
function Footer() {
  const year = new Date().getFullYear();

  const footerCols = [
    {
      heading: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "FAQ", href: "#faq" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About", href: "#" },
        { label: "Contact", href: "#" },
        { label: "Blog", href: "#" },
      ],
    },
    {
      heading: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
      ],
    },
    {
      heading: "Connect",
      links: [
        { label: "Twitter", href: "https://twitter.com/t09napp" },
        { label: "LinkedIn", href: "https://linkedin.com/company/t09n" },
        { label: "Email", href: "mailto:hello@t09n.com" },
      ],
    },
  ];

  return (
    <footer className="bg-[#111111] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-8">
        {/* 4-column grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {footerCols.map((col) => (
            <div key={col.heading}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
                {col.heading}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                      {...(link.href.startsWith("http") ||
                      link.href.startsWith("mailto")
                        ? {
                            target: "_blank",
                            rel: "noopener noreferrer",
                          }
                        : {
                            onClick: (e) => {
                              if (link.href.startsWith("#")) {
                                e.preventDefault();
                                scrollToSection(link.href);
                              }
                            },
                          })}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img
              src="/assets/uploads/Version-01-2-1.png"
              alt="t09n.com"
              className="h-11 w-auto brightness-0 invert"
            />
            <span className="text-xs text-white/30 hidden sm:block">
              The operating system for professional translators.
            </span>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 text-xs text-white/40">
            <p>© {year} t09n.com. All rights reserved.</p>
            <p>
              Built with ♥ using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                className="hover:text-white/70 transition-colors underline underline-offset-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── App ────────────────────────────────────────────────────────── */
export default function App() {
  useFadeInOnScroll();

  return (
    <div className="font-body antialiased">
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <Features />
        <HowItWorks />
        <Pricing />
        <StatsAndTestimonials />
        <FAQ />
        <WaitlistSection />
      </main>
      <Footer />
    </div>
  );
}
