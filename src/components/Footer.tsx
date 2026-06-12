import { SITE_CONFIG } from "../lib/config";
import { Star, MessageCircle, Phone, Instagram, MapPin, EyeOff } from "lucide-react";

interface FooterProps {
  lang: "en" | "ar";
}

export default function Footer({ lang }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Home", nameAr: "الرئيسية", href: "#" },
    { name: "Services", nameAr: "خدماتنا", href: "#services" },
    { name: "Why Us", nameAr: "لماذا مركزنا", href: "#whyus" },
    { name: "Gallery", nameAr: "معرض الأعمال", href: "#gallery" },
    { name: "Pricing", nameAr: "الباقات والأسعار", href: "#pricing" },
  ];

  return (
    <footer className="bg-black pt-16 pb-8 border-t border-dark-border relative overflow-hidden text-sm text-warm-white/60 font-sans font-light">
      {/* Subtle ambient light from bottom corners */}
      <div className="absolute bottom-0 right-0 w-80 h-40 bg-gold/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-40 bg-zinc-900/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 items-start">
          
          {/* Column 1: Info Brand */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left rtl:md:text-right">
            <a href="#" className="flex flex-col group select-none mb-4">
              <span className="font-display text-2xl font-black tracking-widest text-warm-white group-hover:text-gold transition-colors duration-300">
                {lang === "en" ? SITE_CONFIG.logoText : SITE_CONFIG.logoTextAr}
              </span>
              <span className="text-[9px] tracking-[0.25em] text-gold font-mono -mt-1 block uppercase font-medium">
                {lang === "en" ? "Detailing Centre" : "مركز تلميع وعناية"}
              </span>
            </a>

            <p className="text-xs sm:text-sm text-warm-white/70 max-w-sm leading-relaxed mb-6">
              {lang === "en"
                ? "Qatar's ultimate luxury car protection studio. Merging German compound chemistry with expert microscopic diligence to build an everlasting paint gloss."
                : "مركز رويال واي، الرائد الأول لحماية الطلاء وتفاصيل السيارات في قطر بالاعتماد الكلي على أرقى المنتجات والمكائن والمجهود العالي."}
            </p>

            {/* Verification Rating Badge */}
            <div className="inline-flex items-center space-x-2.5 rtl:space-x-reverse bg-zinc-900/80 border border-dark-border rounded-xl p-3 px-5 mb-4 justify-center">
              <div className="flex items-center space-x-0.5 rtl:space-x-reverse">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="fill-gold text-gold" />
                ))}
              </div>
              <span className="text-xs font-mono font-bold text-warm-white">{SITE_CONFIG.rating}★</span>
              <span className="text-[10px] text-muted-gray">({SITE_CONFIG.reviews} {lang === "en" ? "Reviews" : "تقييم"})</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-2 text-center md:text-left rtl:md:text-right">
            <h4 className="text-xs font-mono uppercase tracking-widest text-gold font-bold mb-5">
              {lang === "en" ? "Sitemap" : "خريطة الموقع"}
            </h4>
            <ul className="space-y-3 font-medium">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-warm-white/80 hover:text-gold text-xs sm:text-sm transition-colors duration-200"
                  >
                    {lang === "en" ? link.name : link.nameAr}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contacts */}
          <div className="md:col-span-3 text-center md:text-left rtl:md:text-right">
            <h4 className="text-xs font-mono uppercase tracking-widest text-gold font-bold mb-5">
              {lang === "en" ? "Contact Help" : "مساعدة واستفسار"}
            </h4>
            
            <ul className="space-y-3 font-medium text-xs sm:text-sm">
              <li className="flex items-center justify-center md:justify-start rtl:md:justify-start space-x-2 rtl:space-x-reverse">
                <Phone size={13} className="text-gold" />
                <a href={`tel:${SITE_CONFIG.phone.replace(/\s+/g, "")}`} className="hover:text-gold text-warm-white/80">
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start rtl:md:justify-start space-x-2 rtl:space-x-reverse">
                <Instagram size={13} className="text-gold" />
                <a href={SITE_CONFIG.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-gold text-warm-white/80">
                  {lang === "en" ? "@royalway.qa" : "رويال مابز إنستجرام"}
                </a>
              </li>
              <li className="flex items-start justify-center md:justify-start rtl:md:justify-start space-x-2 rtl:space-x-reverse">
                <MapPin size={13} className="text-gold mt-0.5 shrink-0" />
                <span className="text-[11px] sm:text-xs leading-none text-warm-white/80">
                  {lang === "en" ? "Barwa Village, Al Wakrah, Qatar" : "الوكرة - قرية بروة، قطر"}
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Hours Information */}
          <div className="md:col-span-3 text-center md:text-left rtl:md:text-right">
            <h4 className="text-xs font-mono uppercase tracking-widest text-gold font-bold mb-5">
              {lang === "en" ? "Calendar & Days" : "أوقات العمل الرسمية"}
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-warm-white/80">
              {SITE_CONFIG.hours.map((val, hIdx) => (
                <div key={hIdx} className="space-y-0.5">
                  <p className="font-semibold text-warm-white">{lang === "en" ? val.day : val.dayAr}</p>
                  <p className="text-xs text-gold-light">{lang === "en" ? val.time : val.timeAr}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Bottom copyright and legal disclaimer info */}
        <div className="border-t border-dark-border/60 pt-8 flex flex-col md:flex-row items-center justify-between text-center md:text-left rtl:md:text-right gap-4">
          <p className="text-[11px] text-muted-gray">
            © {currentYear} {SITE_CONFIG.businessName}. {lang === "en" ? "All Rights Reserved." : "جميع الحقوق محفوظة لوكالة رويال واي."}
          </p>

          <p className="text-[11px] text-muted-gray flex items-center space-x-1 rtl:space-x-reverse">
            <span>
              {lang === "en" 
                ? "Bespoke handcrafted detailing digital solution for Qatar Khalij owners" 
                : "حلول رقمية وصور عالية الدقة وتصميم رائع لعملاء الخليج الفاخرين"}
            </span>
          </p>
        </div>

      </div>
    </footer>
  );
}
