import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import { SITE_CONFIG } from "../lib/config";
import { Award, ShieldAlert, Cpu, Sparkles, CheckCircle2 } from "lucide-react";

interface WhyUsProps {
  lang: "en" | "ar";
}

// Active count-up component inside React for clean premium motion
interface StatProps {
  key?: number | string;
  stat: string;
  label: string;
  labelAr: string;
  lang: "en" | "ar";
}

function StatCounter({ stat, label, labelAr, lang }: StatProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    // Parse the number out of the string, e.g. "3000+" -> 3000
    const numericPart = parseInt(stat.replace(/[^0-9]/g, ""), 10);
    if (isNaN(numericPart)) {
      return;
    }

    let start = 0;
    const duration = 1500; // ms
    const increment = Math.ceil(numericPart / (duration / 16)); // ~60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericPart) {
        setDisplayValue(numericPart);
        clearInterval(timer);
      } else {
        setDisplayValue(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, stat]);

  // Re-append the symbol (like +, %, ★) based on the original string
  const cleanSymbol = stat.replace(/[0-9]/g, "");

  return (
    <div ref={ref} className="text-center p-6 sm:p-8 rounded-3xl bg-zinc-900/40 border border-dark-border relative overflow-hidden group hover:border-gold/30 transition-all duration-300">
      <div className="absolute top-0 left-0 w-1.5 h-full bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <span className="font-display text-4xl sm:text-5xl font-extrabold text-gold block mb-2 tracking-tight">
        {displayValue > 0 ? (
          <>
            {displayValue.toLocaleString()}
            {cleanSymbol}
          </>
        ) : (
          stat
        )}
      </span>
      <span className="text-xs sm:text-sm font-sans tracking-wide text-warm-white/80 font-medium">
        {lang === "en" ? label : labelAr}
      </span>
    </div>
  );
}

export default function WhyUs({ lang }: WhyUsProps) {
  
  return (
    <section id="whyus" className="py-24 bg-dark-card relative overflow-hidden">
      
      {/* Carbon fiber diagonal striped layout CSS only - NO external images */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(45deg, #C9A84C 25%, transparent 25%), 
                            linear-gradient(-45deg, #C9A84C 25%, transparent 25%), 
                            linear-gradient(45deg, transparent 75%, #C9A84C 75%), 
                            linear-gradient(-45deg, transparent 75%, #C9A84C 75%)`,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px"
        }}
      />

      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Core Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Block: Stats Counters */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-gold font-mono text-xs uppercase tracking-[0.3em] font-semibold mb-3 block">
              {lang === "en" ? "By The Numbers" : "مؤشرات تفوقنا الرقمية"}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-warm-white mb-6 leading-tight">
              {lang === "en" ? "Precision-Crafted Auto Detailing" : "الرفاهية في العناية بسيارتك"}
            </h2>
            <p className="text-sm sm:text-base text-muted-gray mb-10 leading-relaxed font-sans font-light">
              {lang === "en"
                ? "At Royal Way, car restoration and preservation is an absolute obsession. We measure luxury by microscopic results, using premium materials."
                : "في رويال واي، حماية سيارتك واستعادة لمعانها بريقها الأصلي هو غايتنا. نقيس الفخامة بالنتائج المجهرية ونستعمل أرقى المواد."}
            </p>

            {/* Grid of counter items */}
            <div className="grid grid-cols-2 gap-4">
              {SITE_CONFIG.whyUs.map((item, idx) => (
                <StatCounter
                  key={idx}
                  stat={item.stat}
                  label={item.label}
                  labelAr={item.labelAr}
                  lang={lang}
                />
              ))}
            </div>
          </div>

          {/* Right Block: Three Pillars of Quality */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-6" id="whyus-pillars">
              {SITE_CONFIG.whyDetails.map((pillar, idx) => {
                // Assign custom icon based on index
                const renderIcon = (index: number) => {
                  switch (index) {
                    case 0: return <Cpu className="w-6 h-6 text-gold" />;
                    case 1: return <CheckCircle2 className="w-6 h-6 text-gold animate-pulse" />;
                    case 2: return <Award className="w-6 h-6 text-gold" />;
                    default: return <Sparkles className="w-6 h-6 text-gold" />;
                  }
                };

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: lang === "en" ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="p-6 rounded-2xl bg-dark/60 border border-dark-border hover:border-gold/20 hover:bg-zinc-900/50 transition-all duration-300 flex items-start space-x-6 rtl:space-x-reverse"
                  >
                    <div className="p-3 bg-zinc-900 border border-dark-border rounded-xl inline-flex items-center justify-center shrink-0">
                      {renderIcon(idx)}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-display font-bold text-warm-white mb-2">
                        {lang === "en" ? pillar.title : pillar.titleAr}
                      </h3>
                      <p className="text-xs sm:text-sm text-warm-white/70 leading-relaxed font-sans font-light">
                        {lang === "en" ? pillar.description : pillar.descriptionAr}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
