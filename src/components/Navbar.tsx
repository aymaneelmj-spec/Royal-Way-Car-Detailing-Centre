import { useState, useEffect, Fragment } from "react";
import { Menu, X, Phone, Globe } from "lucide-react";
import { SITE_CONFIG } from "../lib/config";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  lang: "en" | "ar";
  setLang: (lang: "en" | "ar") => void;
}

export default function Navbar({ lang, setLang }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", nameAr: "الرئيسية", href: "#" },
    { name: "Services", nameAr: "خدماتنا", href: "#services" },
    { name: "Why Us", nameAr: "لماذا نحن", href: "#whyus" },
    { name: "Gallery", nameAr: "معرض الصور", href: "#gallery" },
    { name: "Pricing", nameAr: "الباقات والأسعار", href: "#pricing" },
    { name: "FAQ", nameAr: "الأسئلة الشائعة", href: "#faq" },
    { name: "Location", nameAr: "موقعنا", href: "#location" },
  ];

  const toggleLanguage = () => {
    setLang(lang === "en" ? "ar" : "en");
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="navbar-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark/90 backdrop-blur-md border-b border-dark-border py-4 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand Zone */}
          <a href="#" className="flex flex-col select-none group">
            <span className="font-display text-xl sm:text-2xl font-bold tracking-widest text-warm-white group-hover:text-gold transition-colors duration-300">
              {lang === "en" ? SITE_CONFIG.logoText : SITE_CONFIG.logoTextAr}
            </span>
            <span className="text-[9px] tracking-[0.25em] text-gold font-mono -mt-1 block uppercase font-medium">
              {lang === "en" ? "Detailing Centre" : "مركز تلميع وعناية"}
            </span>
          </a>

          {/* Desktop Nav Actions */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 rtl:space-x-reverse" id="desktop-nav">
            {navLinks.map((link, index) => (
              <Fragment key={link.name}>
                {index > 0 && (
                  <span className="w-px h-3.5 bg-warm-white/10 self-center" />
                )}
                <a
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-warm-white/80 hover:text-gold transition-colors duration-300 relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[1px] after:bg-gold hover:after:w-3/4 after:transition-all after:duration-300"
                >
                  {lang === "en" ? link.name : link.nameAr}
                </a>
              </Fragment>
            ))}
          </nav>

          {/* Right Utility buttons */}
          <div className={`hidden sm:flex items-center ${lang === 'ar' ? 'gap-6 sm:gap-8' : 'gap-4'}`}>
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full border border-dark-border hover:border-gold/50 bg-dark-card text-xs font-semibold text-gold-light hover:text-gold transition-all duration-300 cursor-pointer"
              title="Switch Language / تبديل اللغة"
            >
              <Globe size={13} />
              <span>{lang === "en" ? "العربية" : "English"}</span>
            </button>

            {/* Premium WhatsApp CTA */}
            <a
              href={SITE_CONFIG.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] text-white text-xs font-bold uppercase tracking-wider py-2.5 px-5 rounded-full transition-all duration-300 shadow-md transform hover:scale-[1.03]"
            >
              <Phone size={14} className="animate-pulse" />
              <span>{lang === "en" ? "Book via WhatsApp" : "احجز عبر الواتساب"}</span>
            </a>
          </div>

          {/* Mobile Buttons */}
          <div className="flex sm:hidden items-center space-x-3 rtl:space-x-reverse">
            <button
              onClick={toggleLanguage}
              className="p-1 px-2.5 rounded bg-dark-card border border-dark-border text-xs text-gold-light font-bold"
            >
              {lang === "en" ? "عربي" : "EN"}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-warm-white hover:text-gold p-1.5 rounded-md hover:bg-dark-card transition-colors duration-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Tablet only burger, hidden on desktop and mobile */}
          <div className={`hidden sm:flex lg:hidden items-center ${lang === 'ar' ? 'gap-6' : 'gap-4'}`}>
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full border border-dark-border text-xs font-semibold text-gold-light bg-dark-card"
            >
              <Globe size={13} />
              <span>{lang === "en" ? "العربية" : "English"}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-warm-white hover:text-gold p-2 rounded-md hover:bg-dark-card transition-colors duration-300 focus:outline-none"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-dark-card border-b border-dark-border mt-4 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link, index) => (
                <Fragment key={link.name}>
                  {index > 0 && (
                    <div className="h-px bg-dark-border/40 my-1 mx-3" />
                  )}
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-3 rounded-md text-base font-medium text-warm-white hover:bg-zinc-900 hover:text-gold transition-colors duration-200"
                  >
                    {lang === "en" ? link.name : link.nameAr}
                  </a>
                </Fragment>
              ))}
              <div className="pt-4 border-t border-dark-border flex flex-col space-y-3">
                <a
                  href={SITE_CONFIG.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold py-3 px-4 rounded-full transition-colors duration-200 w-full"
                >
                  <Phone size={16} />
                  <span>{lang === "en" ? "Book detailing now" : "احجز موعد تلميع الآن"}</span>
                </a>
                <a
                  href={`tel:${SITE_CONFIG.phone.replace(/\s+/g, "")}`}
                  className="flex items-center justify-center space-x-2 border border-gold/40 text-gold-light text-sm font-bold py-3 px-4 rounded-full hover:bg-zinc-900 transition-colors duration-200 w-full"
                >
                  <span>{lang === "en" ? "Call Directly" : "اتصال مباشر بالمركز"}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
