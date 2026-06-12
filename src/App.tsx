import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Gallery from "./components/Gallery";
import Pricing from "./components/Pricing";
import BookingCTA from "./components/BookingCTA";
import FAQ from "./components/FAQ";
import Map from "./components/Map";
import Footer from "./components/Footer";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";
import SEO from "./components/SEO";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001
  });

  const [lang, setLang] = useState<"en" | "ar">(() => {
    // Attempt local storage load
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("royal_way_lang");
      return saved === "ar" || saved === "en" ? saved : "en";
    }
    return "en";
  });

  // Watch & synchronize language HTML document attributes dynamically
  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    
    // Set appropriate font family variables directly for pristine alignment
    if (lang === "ar") {
      document.body.style.fontFamily = '"Cairo", sans-serif';
    } else {
      document.body.style.fontFamily = '"Inter", sans-serif';
    }

    localStorage.setItem("royal_way_lang", lang);
  }, [lang]);

  return (
    <div className="bg-dark text-warm-white min-h-screen relative overflow-x-hidden selection:bg-gold selection:text-dark">
      
      {/* Dynamic Localized Metadata Optimization */}
      <SEO lang={lang} />
      
      {/* Premium ambient top lines */}
      <div className="fixed top-0 inset-x-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold opacity-80 z-[100] shadow-[0_2px_15px_rgba(201,168,76,0.3)]" />
      
      {/* Slim dynamic scroll progress indicator */}
      <motion.div
        id="scroll-progress-indicator"
        className="fixed top-1 left-0 right-0 h-[3px] bg-gradient-to-r from-gold via-gold-light to-gold origin-left z-[100] shadow-[0_1px_8px_rgba(201,168,76,0.4)]"
        style={{ scaleX }}
      />

      {/* Header Navigation Bar */}
      <Navbar lang={lang} setLang={setLang} />

      {/* Core Body Sections */}
      <main>
        {/* Full-view hero banner */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Hero lang={lang} />
        </motion.div>

        {/* Core Services grid with details */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Services lang={lang} />
        </motion.div>

        {/* Company stats and brand pillars */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <WhyUs lang={lang} />
        </motion.div>

        {/* Real-time custom gallery showcase with lightbox controller */}
        <Gallery lang={lang} />

        {/* Premium detailing pricing packages */}
        <Pricing lang={lang} />

        {/* Meticulous feedback & collections reviews */}
        <BookingCTA lang={lang} />

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <FAQ lang={lang} />
        </motion.div>

        {/* Google Map location routing dashboard */}
        <Map lang={lang} />
      </main>

      {/* Footer trade and copyright zone */}
      <Footer lang={lang} />

      {/* Floating global WhatsApp inquiry triggers */}
      <WhatsAppFloatingButton lang={lang} />

    </div>
  );
}
