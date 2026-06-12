import { MessageCircle, Phone, Clock } from "lucide-react";
import { SITE_CONFIG } from "../lib/config";
import { motion } from "motion/react";

interface BookingCTAProps {
  lang: "en" | "ar";
}

export default function BookingCTA({ lang }: BookingCTAProps) {
  return (
    <section id="cta" className="py-20 relative overflow-hidden bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border-t border-b border-dark-border">
      
      {/* Visual luxury ambient background highlights */}
      <div className="absolute top-0 right-1/4 w-96 h-full bg-gold/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-32 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Decorative vertical lines on margins */}
      <div className="absolute top-0 bottom-0 left-10 md:left-24 w-[1px] bg-dark-border/20 hidden md:block" />
      <div className="absolute top-0 bottom-0 right-10 md:right-24 w-[1px] bg-dark-border/20 hidden md:block" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Floating animated WhatsApp icon container */}
        <div className="flex justify-center mb-6">
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 3, 
              ease: "easeInOut" 
            }}
            className="p-5 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 shadow-[0_15px_30px_rgba(16,185,129,0.3)] inline-flex items-center justify-center text-white border-2 border-emerald-400/20"
          >
            <MessageCircle size={36} className="fill-current text-white" />
          </motion.div>
        </div>

        {/* Core Promo Typography */}
        <span className="text-gold font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] font-semibold mb-3 block">
          {lang === "en" ? "Instant Booking & Custom Quotes" : "تواصل مباشر مجاني والرد خلال دقائق"}
        </span>
        
        <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-black text-warm-white mb-6 leading-tight max-w-3xl mx-auto">
          {lang === "en" 
            ? "Ready for the Untouchable Gloss Experience?" 
            : "جاهز لتمنح سيارتك بريقاً مذهلاً ولمعاناً لا يخبو؟"}
        </h2>
        
        <p className="text-sm sm:text-base text-warm-white/70 max-w-xl mx-auto mb-10 leading-relaxed font-sans font-light">
          {lang === "en"
            ? "Schedule any classic detailing, single correction session, or premium paint film application via our rapid response cell."
            : "اضغط على الزر لحجز موعد لسيارتك فوراً أو طلب عرض سعر مجاني تخصصي عبر محادثة واتساب سريعة ومريحة."}
        </p>

        {/* Hours / Schedule disclaimer strip */}
        <div className="p-4 rounded-2xl bg-zinc-900/60 border border-dark-border inline-flex flex-col sm:flex-row items-center gap-4 px-6 mb-12" id="cta-hours">
          <div className="flex items-center space-x-2 rtl:space-x-reverse text-xs text-gold/90 font-mono font-medium uppercase tracking-wider">
            <Clock size={13} />
            <span>{lang === "en" ? "Available Today:" : "ساعات العمل المتاحة:"}</span>
          </div>
          <span className="text-xs text-warm-white/80 font-sans">
            {lang === "en" ? SITE_CONFIG.hours[0].day : SITE_CONFIG.hours[0].dayAr}: {lang === "en" ? SITE_CONFIG.hours[0].time : SITE_CONFIG.hours[0].timeAr}
          </span>
        </div>

        {/* Buttons Action Segment */}
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
          <a
            href={SITE_CONFIG.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2.5 bg-emerald-600 hover:bg-emerald-500 hover:shadow-[0_15px_30px_rgba(16,185,129,0.35)] text-white text-xs sm:text-sm font-bold uppercase tracking-wider py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-[1.03] w-full sm:w-auto cursor-pointer"
          >
            <MessageCircle size={16} className="fill-current text-white" />
            <span>{lang === "en" ? "Open Live WhatsApp Chat" : "ابتدئ المحادثة الآن"}</span>
          </a>

          <a
            id="cta-call-btn"
            href={`tel:${SITE_CONFIG.phone.replace(/\s+/g, "")}`}
            className="flex items-center justify-center space-x-2 border border-dark-border hover:border-gold/30 bg-dark-card hover:bg-zinc-900 text-gold-light hover:text-gold text-xs sm:text-sm font-bold uppercase tracking-wider py-4 px-8 rounded-full transition-all duration-300 w-full sm:w-auto cursor-pointer"
          >
            <Phone size={15} />
            <span>{lang === "en" ? "Call Detail Workshop" : "اتصل بالهاتف مباشرة"}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
