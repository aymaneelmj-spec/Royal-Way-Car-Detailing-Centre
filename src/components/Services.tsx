import { motion } from "motion/react";
import * as Icons from "lucide-react";
import { SITE_CONFIG } from "../lib/config";

interface ServicesProps {
  lang: "en" | "ar";
}

// Custom parser to map config string to Lucide React icons
function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) {
    return <Icons.Sparkles className={className} />;
  }
  return <IconComponent className={className} />;
}

export default function Services({ lang }: ServicesProps) {
  
  // Stagger container animation
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="services" className="py-24 bg-dark relative overflow-hidden border-t border-dark-border">
      {/* Light glow effects */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-80 h-80 bg-zinc-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold font-mono text-xs uppercase tracking-[0.3em] font-semibold mb-3 block">
            {lang === "en" ? "Precision Detailing Services" : "دقة متناهية وحماية مطلقة لقيمة سيارتك"}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-warm-white tracking-tight mb-4">
            {lang === "en" ? "Our Elite Services" : "خدماتنا المتميزة الفاخرة"}
          </h2>
          <div className="h-1 w-20 bg-gold mx-auto mb-6" />
          <p className="text-sm sm:text-base text-muted-gray leading-relaxed font-sans font-light">
            {lang === "en"
              ? "We engineer protection systems and detailing routines that preserve your pride and joy. Explore our high-caliber treatments."
              : "نصنع حلول حماية متكاملة تبقي سيارتك بقيمتها ومظهرها الأصلي الخلاب. استكشف أهم وأبرز العلاجات الفاخرة التي نقدمها."}
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SITE_CONFIG.services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                rotateX: -3,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              style={{ transformStyle: "preserve-3d" }}
              className={`p-8 rounded-3xl bg-dark-card border transition-colors duration-300 relative group overflow-hidden ${
                service.popular 
                  ? "border-gold/40 shadow-[0_15px_40px_rgba(201,168,76,0.15)]" 
                  : "border-dark-border hover:border-gold/30 hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
              }`}
            >
              {/* Highlight badge for popular services */}
              {service.popular && (
                <div className="absolute top-4 right-4 rtl:left-4 rtl:right-auto px-3.5 py-1 rounded-full bg-gold/10 border border-gold/30 text-[9px] font-mono font-bold uppercase tracking-wider text-gold-light">
                  {lang === "en" ? "Most Requested" : "الأكثر طلباً"}
                </div>
              )}

              {/* Ambient circle glow inside card on hover */}
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-gold/5 rounded-full blur-xl group-hover:bg-gold/10 transition-colors duration-500 pointer-events-none" />

              {/* Icon Panel */}
              <div className="p-4 rounded-2xl bg-zinc-900 border border-dark-border inline-flex items-center justify-center text-gold mb-6 group-hover:text-gold-light group-hover:border-gold/30 transition-all duration-300 transform group-hover:scale-105">
                <ServiceIcon name={service.icon} className="w-6 h-6" />
              </div>

              {/* Service Titles */}
              <h3 className="text-xl font-display font-bold text-warm-white group-hover:text-gold-light transition-colors duration-200">
                {lang === "en" ? service.title : service.titleAr}
              </h3>
              
              <p className="text-[11px] font-mono uppercase tracking-wider text-gold-light/60 mt-1 mb-4 font-semibold">
                {lang === "en" ? "Superior Quality Shield" : "حماية وجودة فائقة"}
              </p>

              {/* Description */}
              <p className="text-xs sm:text-sm text-warm-white/70 leading-relaxed font-sans font-light mb-8 h-20 overflow-hidden line-clamp-3">
                {lang === "en" ? service.description : service.descriptionAr}
              </p>

              {/* Footer Zone: Price tag + WhatsApp link */}
              <div className="border-t border-dark-border pt-5 flex items-center justify-between mt-auto">
                <div>
                  <span className="text-[10px] font-mono uppercase text-muted-gray block leading-none mb-1">
                    {lang === "en" ? "Direct Price" : "سعر مباشر يبدأ من"}
                  </span>
                  <span className="text-sm font-bold text-gold-light">
                    {lang === "en" ? service.price : service.priceAr}
                  </span>
                </div>

                <a
                  href={`${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(
                    lang === "en"
                      ? `Hi Royal Way team, I'm interested in booking the ${service.title} service. Could you tell me more about available slots?`
                      : `مرحباً مركز رويال واي، أنا مهتم بحجز خدمة ${service.titleAr}. هل يمكن معرفة المواعيد المتاحة؟`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 rtl:space-x-reverse text-xs font-bold text-warm-white hover:text-gold transition-colors duration-200 uppercase tracking-wider group/link font-sans"
                >
                  <span>{lang === "en" ? "Book Service" : "حجز الخدمة"}</span>
                  <Icons.ArrowUpRight size={13} className="transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
                </a>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
