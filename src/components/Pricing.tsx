import { Check, ShieldAlert } from "lucide-react";
import { SITE_CONFIG } from "../lib/config";
import { motion } from "motion/react";

interface PricingProps {
  lang: "en" | "ar";
}

export default function Pricing({ lang }: PricingProps) {
  
  // Custom message configuration for WhatsApp button click
  const getWhatsAppBookingText = (title: string, price: string) => {
    return encodeURIComponent(
      lang === "en"
        ? `Hi Royal Way team, I'd like to book your "${title}" package (QAR ${price}). Please check your calendar and let me know your earliest opening.`
        : `أهلاً رويال واي، أرغب في حجز الباقة المميزة "${title}" بقيمة ${price} ر.ق. يرجى إبلاغي بالمواعيد المتاحة لأحضر لكم سيارتي.`
    );
  };

  return (
    <section id="pricing" className="py-24 bg-dark relative overflow-hidden border-t border-dark-border">
      
      {/* Decorative vector background shapes */}
      <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-amber-500/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-gold font-mono text-xs uppercase tracking-[0.3em] font-semibold mb-3 block">
            {lang === "en" ? "Transparent Pricing Structures" : "عروض وباقات تليق بسيارتك الفارهة"}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-warm-white tracking-tight">
            {lang === "en" ? "Prestige Packages" : "أعرق باقات التلميع والحماية"}
          </h2>
          <div className="h-1 w-20 bg-gold mx-auto mt-4 mb-6" />
          <p className="text-sm sm:text-base text-muted-gray leading-relaxed font-sans font-light">
            {lang === "en"
              ? "We believe in complete pricing transparency. See each meticulously outlined scope of detailing labor below."
              : "نؤمن في مركز رويال واي بأعلى مستويات الشفافية. استعرض تفاصيل ومحتوى وكلفة كل باقة من باقات التلميع المائي التخصصية."}
          </p>
        </div>

        {/* Pricing Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch" id="pricing-grid">
          {SITE_CONFIG.pricingPackages.map((pkg, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 relative flex flex-col transition-all duration-300 ${
                pkg.popular
                  ? "bg-gradient-to-b from-zinc-900 via-dark-card to-dark border-2 border-gold shadow-[0_20px_50px_rgba(201,168,76,0.18)]"
                  : "bg-dark-card border border-dark-border hover:border-gold/30 hover:shadow-2xl"
              }`}
            >
              {/* Featured Ribbon Badge */}
              {pkg.popular && (
                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 px-4 py-1.5 rounded-full bg-gold text-dark text-[10px] font-mono font-bold uppercase tracking-widest leading-none shadow-[0_4px_15px_rgba(201,168,76,0.4)]">
                  {lang === "en" ? "Highly Recommended" : "الباقة الأكثر مبيعاً"}
                </div>
              )}

              {/* Title & Metadata */}
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-display font-black text-warm-white mb-2">
                  {lang === "en" ? pkg.title : pkg.titleAr}
                </h3>
                <span className="text-[10px] font-mono uppercase tracking-widest text-gold block mb-4">
                  {lang === "en" ? "Elite Standard Work" : "عمل احترافي متكامل"}
                </span>

                <div className="flex items-baseline space-x-1 rtl:space-x-reverse">
                  <span className="text-sm font-mono font-bold text-warm-white">QAR</span>
                  <span className="text-4xl sm:text-5xl font-extrabold text-warm-white tracking-tight leading-none">
                    {pkg.price}
                  </span>
                  <span className="text-xs text-muted-gray ml-2 rtl:mr-2 rtl:ml-0">
                    / {lang === "en" ? pkg.period : pkg.period.replace("Warranty", "ضمان")}
                  </span>
                </div>
              </div>

              {/* Package features loop */}
              <ul className="space-y-4 mb-10 flex-1 py-6 border-t border-b border-dark-border">
                {(lang === "en" ? pkg.features : pkg.featuresAr).map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start text-xs sm:text-sm text-warm-white/80 leading-relaxed font-sans font-light">
                    <div className="p-0.5 rounded-full bg-gold/10 border border-gold/30 inline-flex items-center justify-center shrink-0 mr-3 rtl:ml-3 rtl:mr-0 mt-0.5">
                      <Check size={11} className="text-gold" />
                    </div>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Action Button CTA */}
              <a
                href={`${SITE_CONFIG.whatsapp}?text=${getWhatsAppBookingText(
                  lang === "en" ? pkg.title : pkg.titleAr,
                  pkg.price
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`py-4 px-6 rounded-full text-center text-xs font-bold uppercase tracking-wider block transition-all duration-300 transform hover:scale-[1.02] cursor-pointer ${
                  pkg.popular
                    ? "bg-gold text-dark hover:bg-gold-light hover:shadow-[0_4px_20px_rgba(201,168,76,0.3)]"
                    : "bg-zinc-900 hover:bg-zinc-800 border border-dark-border text-warm-white hover:text-gold hover:border-gold/40"
                }`}
              >
                {lang === "en" ? "Book Package Now" : "حجز موعد للباقة"}
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
