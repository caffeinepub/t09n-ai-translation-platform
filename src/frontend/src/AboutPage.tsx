import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

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
    { href: "/#features", label: "Features", ocid: "nav.features_link" },
    { href: "/#pricing", label: "Pricing", ocid: "nav.pricing_link" },
    { href: "/#faq", label: "FAQ", ocid: "nav.faq_link" },
    { href: "/#contact", label: "Contact", ocid: "nav.contact_link" },
    { href: "/about", label: "About", ocid: "nav.about_link" },
  ];

  const navTextClass = "text-[#374151] hover:text-[#111111]";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/96 backdrop-blur-md shadow-sm border-b border-[#E5E7EB]"
          : "bg-white/80 backdrop-blur-sm border-b border-[#E5E7EB]/60"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="/" className="hover:opacity-80 transition-opacity">
          <img
            src="/assets/uploads/Version-01-2-1.png"
            alt="t09n.com logo"
            className="h-10 w-auto transition-all duration-300"
          />
        </a>

        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-ocid={link.ocid}
              className={`text-sm font-medium transition-colors ${navTextClass} ${link.href === "/about" ? "text-[#1A6EF8] font-semibold" : ""}`}
            >
              {link.label}
            </a>
          ))}
          <Button
            size="sm"
            className="font-semibold btn-primary px-5 bg-[#1A6EF8] hover:bg-[#1560d4] text-white border border-[#1A6EF8]"
            data-ocid="nav.cta_button"
            onClick={() => window.open("https://app.t09n.com/signup", "_blank")}
          >
            Start Free
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden p-2 rounded-md transition-colors"
          data-ocid="nav.mobile_menu_toggle"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span
              className={`block h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </div>
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-[#E5E7EB] px-4 py-5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-ocid={link.ocid}
              className="text-sm font-medium text-[#374151] hover:text-[#111111] py-1 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button
            size="sm"
            className="bg-[#1A6EF8] hover:bg-[#1560d4] text-white font-semibold w-fit btn-primary"
            data-ocid="nav.cta_button"
            onClick={() => {
              setMobileOpen(false);
              window.open("https://app.t09n.com/signup", "_blank");
            }}
          >
            Start Free
          </Button>
        </div>
      )}
    </header>
  );
}

/* ─── About Hero ─────────────────────────────────────────────────── */
function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 bg-black overflow-hidden">
      {/* Dot grid texture */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Blue radial highlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(26,110,248,0.12) 0%, transparent 70%)",
        }}
      />
      {/* Bottom fade */}
      <div
        className="absolute inset-x-0 bottom-0 h-20 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #F7F9FC 100%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-4"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          About t09n.com
        </p>
        <h1
          className="font-display font-bold text-white tracking-tight mb-6"
          style={{ fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.1 }}
        >
          The Operating System
          <br />
          <span style={{ color: "#1A6EF8" }}>for Translators</span>
        </h1>
        <p
          className="mb-8 max-w-2xl mx-auto"
          style={{
            fontSize: "18px",
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.7)",
          }}
        >
          t09n.com provides a professional workspace designed for how
          translation actually happens.
        </p>
        <p
          className="mb-10 max-w-2xl mx-auto"
          style={{
            fontSize: "16px",
            lineHeight: 1.8,
            color: "rgba(255,255,255,0.6)",
          }}
        >
          For many years, professional translation software has been expensive,
          complex, and built primarily for large enterprises. Independent
          translators and small agencies were often forced to work with tools
          that were either too costly or too limited for real professional
          workflows.
          <br />
          <br />
          <strong style={{ color: "#FFFFFF" }}>
            t09n.com was created to change that.
          </strong>
        </p>
        <Button
          size="lg"
          className="bg-[#1A6EF8] text-white hover:bg-[#1560d4] font-bold text-base px-9 h-14 btn-primary shadow-lg border-2 border-[#1A6EF8]"
          data-ocid="about.hero_button"
          onClick={() => {
            const el = document.querySelector("#about-features");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        >
          View Features
        </Button>
      </div>
    </section>
  );
}

/* ─── Our Story ──────────────────────────────────────────────────── */
function OurStory() {
  return (
    <section className="py-section bg-[#F7F9FC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center fade-in">
          {/* Left — text */}
          <div>
            <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-3">
              Our Story
            </p>
            <h2
              className="font-display font-bold text-foreground tracking-tight mb-6"
              style={{ fontSize: "clamp(26px, 3vw, 34px)" }}
            >
              Our Story
            </h2>
            <div
              className="space-y-4 text-muted-foreground leading-relaxed"
              style={{ fontSize: "16px" }}
            >
              <p>
                Localization Lounge began working in multilingual content and
                localization services in 2017. Through years of working with
                translators, agencies, and international clients, we gained deep
                insight into how translation workflows operate in real
                environments.
              </p>
              <p>
                We saw that many translators were forced to choose between
                expensive professional software or limited free tools.
              </p>
              <p>
                That experience led to the creation of t09n.com — a cloud-based
                translation workspace designed to support real translation
                workflows.
              </p>
            </div>
          </div>

          {/* Right — decorative card */}
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl border border-[#E5E7EB] p-8 shadow-sm max-w-sm w-full">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="/assets/uploads/Version-04-1.png"
                  alt="t09n.com"
                  className="h-12 w-auto"
                />
                <div>
                  <p className="font-display font-bold text-foreground text-lg">
                    t09n.com
                  </p>
                  <p className="text-xs text-muted-foreground">Since 2017</p>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Founded", value: "2017" },
                  { label: "Company", value: "Localization Lounge" },
                  { label: "Platform", value: "Cloud-based CAT Tool" },
                  { label: "Focus", value: "Indian Languages" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between py-2 border-b border-[#E5E7EB] last:border-0"
                  >
                    <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {item.label}
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── What Platform Provides ─────────────────────────────────────── */
const PLATFORM_FEATURES = [
  {
    icon: "📝",
    title: "Segment-based Translation Editor",
    description:
      "Structured editor designed for translating documents efficiently.",
  },
  {
    icon: "🔄",
    title: "Translation Memory",
    description: "Maintain consistency across large projects.",
  },
  {
    icon: "📚",
    title: "Glossary Management",
    description: "Store and enforce terminology across translations.",
  },
  {
    icon: "📊",
    title: "Quality Assessment Reports",
    description: "Review translation accuracy and consistency.",
  },
  {
    icon: "🎨",
    title: "Document Formatting Preservation",
    description: "Maintain formatting while translating documents.",
  },
  {
    icon: "🗂️",
    title: "Project Management",
    description: "Organize translation projects in one workspace.",
  },
];

const DELAY_CLASSES = [
  "fade-in-delay-1",
  "fade-in-delay-2",
  "fade-in-delay-3",
  "fade-in-delay-1",
  "fade-in-delay-2",
  "fade-in-delay-3",
];

function PlatformFeatures() {
  return (
    <section id="about-features" className="py-section bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 fade-in">
          <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-3">
            Platform
          </p>
          <h2
            className="font-display font-bold text-foreground tracking-tight"
            style={{ fontSize: "clamp(28px, 3.5vw, 36px)" }}
          >
            What t09n.com Provides
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PLATFORM_FEATURES.map((feature, i) => (
            <div
              key={feature.title}
              className={`fade-in ${DELAY_CLASSES[i]} bg-white border border-[#E5E7EB] rounded-2xl p-7 card-hover group hover:border-primary/40 transition-colors`}
            >
              <div className="text-4xl mb-5 w-12 h-12 flex items-center justify-center">
                {feature.icon}
              </div>
              <h3
                className="font-display font-semibold text-foreground mb-2"
                style={{ fontSize: "18px" }}
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

/* ─── Our Approach ───────────────────────────────────────────────── */
function OurApproach() {
  return (
    <section className="py-section bg-[#F7F9FC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 fade-in">
          <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-3">
            Philosophy
          </p>
          <h2
            className="font-display font-bold text-foreground tracking-tight"
            style={{ fontSize: "clamp(28px, 3.5vw, 36px)" }}
          >
            Our Approach
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 fade-in fade-in-delay-1">
          {[
            {
              icon: "🤝",
              text: "We believe translation technology should support professional translators rather than replace them.",
            },
            {
              icon: "⚡",
              text: "Our platform is designed to remove repetitive work, simplify project organization, and help translators focus on accuracy and context.",
            },
            {
              icon: "🎯",
              text: "Every feature in t09n.com is built around one principle: technology should make translation workflows clearer, faster, and more consistent.",
            },
          ].map((item) => (
            <div
              key={item.icon}
              className="bg-white rounded-2xl border border-[#E5E7EB] p-7 text-center card-hover"
            >
              <div className="text-4xl mb-5">{item.icon}</div>
              <p
                className="text-muted-foreground leading-relaxed"
                style={{ fontSize: "15px" }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Our Vision ─────────────────────────────────────────────────── */
function OurVision() {
  return (
    <section
      className="py-section relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #1A6EF8 0%, #1255cc 60%, #0d44a8 100%)",
      }}
    >
      {/* Dot overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(255,255,255,0.12) 0%, transparent 65%)",
        }}
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center fade-in">
        <p className="text-xs font-semibold text-white/70 tracking-widest uppercase mb-4">
          Vision
        </p>
        <h2
          className="font-display font-bold text-white tracking-tight mb-6"
          style={{ fontSize: "clamp(28px, 3.5vw, 36px)" }}
        >
          Our Vision
        </h2>
        <p className="text-white/80 text-lg leading-relaxed mb-4">
          Language connects people, businesses, and cultures.
        </p>
        <p className="text-white/70 text-base leading-relaxed max-w-2xl mx-auto">
          Our goal is to build a translation workspace that allows translators
          and agencies to manage multilingual content more efficiently while
          maintaining the quality standards required for professional
          communication.
        </p>
      </div>
    </section>
  );
}

/* ─── Company Information ─────────────────────────────────────────── */
function CompanyInfo() {
  return (
    <section className="py-section bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 fade-in">
          <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-3">
            Company
          </p>
          <h2
            className="font-display font-bold text-foreground tracking-tight"
            style={{ fontSize: "clamp(28px, 3.5vw, 36px)" }}
          >
            Company Information
          </h2>
        </div>

        <div className="fade-in fade-in-delay-1 bg-[#F7F9FC] rounded-2xl border border-[#E5E7EB] p-8 sm:p-10">
          <div className="flex items-center gap-5 mb-8 pb-8 border-b border-[#E5E7EB]">
            <img
              src="/assets/uploads/Version-04-1.png"
              alt="t09n.com logo"
              className="h-14 w-auto"
            />
            <div>
              <p className="font-display font-bold text-foreground text-xl">
                t09n.com
              </p>
              <p className="text-sm text-muted-foreground">
                The Operating System for Translators
              </p>
            </div>
          </div>

          <div className="space-y-5">
            {[
              {
                label: "Developed by",
                value: "Localization Lounge",
                bold: true,
              },
              { label: "GSTIN", value: "24BSWPM3389R1ZG", bold: false },
              {
                label: "Support",
                value: "support@t09n.com",
                href: "mailto:support@t09n.com",
                bold: false,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 py-3 border-b border-[#E5E7EB] last:border-0"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground w-32 flex-shrink-0">
                  {item.label}
                </span>
                {item.href ? (
                  <a
                    href={item.href}
                    className={`text-sm transition-colors hover:text-primary ${item.bold ? "font-semibold text-foreground" : "text-foreground"}`}
                  >
                    {item.value}
                  </a>
                ) : (
                  <span
                    className={`text-sm ${item.bold ? "font-semibold text-foreground" : "text-foreground"}`}
                  >
                    {item.value}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
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
        { label: "Features", href: "/#features" },
        { label: "Pricing", href: "/#pricing" },
        { label: "FAQ", href: "/#faq" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Contact", href: "/#contact" },
        { label: "Blog", href: "#" },
      ],
    },
    {
      heading: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms of Service", href: "/terms-of-service" },
        { label: "Acceptable Use", href: "/acceptable-use-policy" },
      ],
    },
    {
      heading: "Connect",
      links: [
        { label: "Twitter", href: "https://twitter.com/t09napp" },
        { label: "LinkedIn", href: "https://linkedin.com/company/t09n" },
        { label: "Email", href: "mailto:join@t09n.com" },
      ],
    },
  ];

  return (
    <footer className="bg-[#111111] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-8">
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
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Business identity strip */}
        <div className="py-4 border-b border-white/10 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-1 text-xs text-white/50">
          <span>
            Operated by{" "}
            <span className="text-white/70 font-medium">
              LOCALIZATION LOUNGE
            </span>
          </span>
          <span className="hidden sm:inline text-white/20">|</span>
          <span>
            GSTIN:{" "}
            <span className="text-white/70 font-medium">24BSWPM3389R1ZG</span>
          </span>
          <span className="hidden sm:inline text-white/20">|</span>
          <span>
            Support:{" "}
            <a
              href="mailto:support@t09n.com"
              className="text-white/70 hover:text-white transition-colors"
            >
              support@t09n.com
            </a>
          </span>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img
              src="/assets/uploads/Version-04-1.png"
              alt="t09n.com"
              className="h-11 w-auto"
            />
            <span className="text-xs text-white hidden sm:block">
              The operating system for professional translators.
            </span>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 text-xs text-white/40">
            <p>© {year} t09n.com. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── AboutPage ──────────────────────────────────────────────────── */
export default function AboutPage() {
  useFadeInOnScroll();

  useEffect(() => {
    document.title = "About t09n.com – The Operating System for Translators";
    // Set meta description
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      (meta as HTMLMetaElement).name = "description";
      document.head.appendChild(meta);
    }
    (meta as HTMLMetaElement).content =
      "Learn about t09n.com, a cloud-based translation workspace built to help translators manage projects, maintain consistency, and deliver high-quality multilingual content.";
  }, []);

  return (
    <div className="font-body antialiased">
      <Navbar />
      <main>
        <AboutHero />
        <OurStory />
        <PlatformFeatures />
        <OurApproach />
        <OurVision />
        <CompanyInfo />
      </main>
      <Footer />
    </div>
  );
}
