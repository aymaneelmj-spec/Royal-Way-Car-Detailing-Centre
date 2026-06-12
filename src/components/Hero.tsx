import { useEffect, useState } from "react";
import { Phone, Star, MessageCircle, ArrowDown } from "lucide-react";
import { SITE_CONFIG } from "../lib/config";
import { motion } from "motion/react";

interface HeroProps {
  lang: "en" | "ar";
}

export default function Hero({ lang }: HeroProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Handle subtle 3D mouse parallax move effect on the hero contents
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark pt-16"
    >
      {/* Background image container with subtle 3D parallax zoom */}
      <div
        className="absolute inset-0 z-0 transition-transform duration-700 ease-out scale-105"
        style={{
          backgroundImage: `url('${SITE_CONFIG.heroBackground}')`,
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
          transform: `scale(1.05) translate(${mousePos.x * 12}px, ${mousePos.y * 12}px)`,
        }}
      >
        {/* Soft elegant gradient overlays instead of heavy dark wash, ensuring the car shines */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/80 md:from-black/70 md:via-black/30 md:to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
      </div>

      {/* Floating ambient glow lights */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Core Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center md:text-left rtl:md:text-right w-full flex flex-col md:flex-row items-center md:justify-between gap-12">
        
        {/* Left side: Main Typography Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-2xl flex-1 mt-10 md:mt-0"
        >
          {/* Eyebrow badge */}
          <span className="inline-block px-4 py-1 rounded-full border border-gold/40 bg-gold/10 text-[10px] sm:text-xs font-mono text-gold-light tracking-[0.2em] font-semibold uppercase mb-6 shadow-[0_0_15px_rgba(201,168,76,0.15)]">
            {lang === "en" ? "Qatar's Premium Detailing Centre" : "مركز تلميع السيارات الأول في قطر"}
          </span>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-warm-white leading-[1.1] mb-4">
            {lang === "en" ? SITE_CONFIG.businessName : SITE_CONFIG.businessNameAr}
          </h1>

          <p className="text-xl sm:text-2xl font-arabic text-gold-light tracking-wide font-medium mb-8">
            {lang === "en" ? SITE_CONFIG.tagline : SITE_CONFIG.taglineAr}
          </p>

          <p className="text-sm sm:text-base text-warm-white/70 max-w-lg leading-relaxed mb-10 font-sans font-light">
            {lang === "en"
              ? "Expert ceramic coatings, self-healing paint protection films, and comprehensive inside-out restoration tailored for prestigious owners of Qatar."
              : "حماية الطلاء بفيلم الـ PPF المعالج ذاتياً، نانو سيراميك مجهري متطور، وتلميع مائي خارجي وداخلي مكثف مصمم خصيصاً لأصحاب الذوق الرفيع وبأفضل المواد المعتمدة."}
          </p>

          {/* Action CTA Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start rtl:md:justify-start">
            <a
              href={SITE_CONFIG.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-gold hover:bg-gold-light text-dark font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-[1.03] shadow-lg hover:shadow-[0_10px_25px_rgba(201,168,76,0.3)] w-full sm:w-auto text-sm uppercase tracking-wider"
            >
              <MessageCircle size={18} className="fill-current text-dark" />
              <span>{lang === "en" ? "Chat on WhatsApp" : "راسلنا على الواتساب"}</span>
            </a>

            <a
              href={`tel:${SITE_CONFIG.phone.replace(/\s+/g, "")}`}
              className="flex items-center justify-center space-x-2 bg-dark/60 backdrop-blur-sm hover:bg-zinc-900 border border-warm-white/20 hover:border-gold-light/60 text-warm-white font-bold px-8 py-4 rounded-full transition-all duration-300 w-full sm:w-auto text-sm uppercase tracking-wider"
            >
              <Phone size={16} />
              <span>{lang === "en" ? "Call Directly" : "اتصل بنا الآن"}</span>
            </a>
          </div>
        </motion.div>

        {/* Right side: 3D-feel Floating Glassmorphic card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full max-w-sm md:w-[320px] lg:w-[360px]"
          style={{
            transform: `perspective(1000px) rotateY(${mousePos.x * 20}deg) rotateX(${-mousePos.y * 20}deg)`,
          }}
        >
          <div className="p-8 rounded-3xl bg-zinc-900/60 backdrop-blur-xl border border-warm-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.6)] relative overflow-hidden group hover:border-gold/30 transition-all duration-500">
            {/* Glossy gradient strip */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-gold via-gold-light to-gold shadow-[0_2px_15px_rgba(201,168,76,0.3)]" />
            
            {/* Abstract gold pattern behind */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gold/5 rounded-full blur-xl group-hover:bg-gold/10 transition-colors duration-500" />

            <div className="flex items-center space-x-1 mb-4 rtl:space-x-reverse justify-center md:justify-start">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-gold text-gold animate-pulse" style={{ animationDelay: `${i * 120}ms` }} />
              ))}
            </div>

            <p className="text-3xl font-display font-medium text-warm-white mb-1 tracking-tight">
              {SITE_CONFIG.rating} / 5.0
            </p>
            <p className="text-xs font-mono font-medium tracking-wide text-gold uppercase mb-5">
              {lang === "en" ? "Google Maps Verified Rating" : "تقييم حقيقي موثق من جوجل مابز"}
            </p>

            <blockquote className="text-sm text-warm-white/80 leading-relaxed font-sans font-light italic mb-6">
              {lang === "en"
                ? `"Excellent workshop. They brought my Land Cruiser back to life with a breathtaking ceramic shield. Superb attention to detail."`
                : `"ورشتي المفضلة دائماً. أعادوا الحياة لسيارتي لاندكروزر وكسوها بدرع سيراميكي يسر العين وزاد لمعانها بشكل رائع."`}
            </blockquote>

            <div className="border-t border-warm-white/10 pt-5 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-warm-white">{lang === "en" ? "Based on" : "بناءً على"}</p>
                <p className="text-xs text-muted-gray">{SITE_CONFIG.reviews} {lang === "en" ? "real client reports" : "تقييم عملاء موثق"}</p>
              </div>
              <span className="px-3 py-1.5 rounded-md bg-gold/10 text-[10px] font-mono font-bold text-gold-light border border-gold/20 uppercase tracking-widest">
                {lang === "en" ? "Showroom" : "صالة بروة"}
              </span>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Floating Scroll Indicator Arrow at bottom */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center cursor-pointer">
        <a href="#services" className="flex flex-col items-center text-warm-white/50 hover:text-gold transition-colors duration-300">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase mb-2">
            {lang === "en" ? "Scroll to Explore" : "انزل لِتستكشف"}
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="p-2 rounded-full border border-warm-white/10 bg-dark-card/40"
          >
            <ArrowDown size={14} className="text-gold" />
          </motion.div>
        </a>
      </div>

    </section>
  );
}
