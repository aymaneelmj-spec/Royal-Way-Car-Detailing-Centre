import React, { useState } from "react";
import { MapPin, Clock, Phone, Navigation, ArrowUpRight, Compass, Image as ImageIcon, Map as MapIcon } from "lucide-react";
import { SITE_CONFIG } from "../lib/config";

interface MapProps {
  lang: "en" | "ar";
}

export default function Map({ lang }: MapProps) {
  const [activeRouteInfo, setActiveRouteInfo] = useState<string | null>(null);
  const [imageError, setImageError] = useState(false);

  const routes = [
    {
      name: "Doha / Corniche",
      nameAr: "الدوحة / الكورنيش",
      dist: "15 km",
      time: "14 mins",
      timeAr: "١٤ دقيقة",
      desc: "Via Ras Abu Aboud Expressway",
      descAr: "عبر طريق رأس أبو عبود السريع"
    },
    {
      name: "Hamad Int'l Airport",
      nameAr: "مطار حمد الدولي",
      dist: "12 km",
      time: "10 mins",
      timeAr: "١٠ دقائق",
      desc: "Via F-Ring Road",
      descAr: "عبر الطريق الدائري السادس"
    },
    {
      name: "Al Wakrah Centre",
      nameAr: "وسط مدينة الوكرة",
      dist: "4 km",
      time: "5 mins",
      timeAr: "٥ دقائق",
      desc: "Via Al Wakrah Road",
      descAr: "عبر طريق الوكرة الرئيسي"
    }
  ];

  return (
    <section id="location" className="py-24 bg-dark relative overflow-hidden border-t border-dark-border">
      
      {/* Decorative background visual elements */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Group */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold font-mono text-xs uppercase tracking-[0.3em] font-semibold mb-3 block">
            {lang === "en" ? "Visit Royal Way detailing" : "تفضّل بزيارة صالتنا بالوكرة"}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-warm-white tracking-tight">
            {lang === "en" ? "Workshop Location" : "موقع المركز الجغرافي"}
          </h2>
          <div className="h-0.5 w-16 bg-gold mx-auto mt-4" />
        </div>

        {/* Bento Board Layout Split (Map + Contact) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="location-cards">
          
          {/* Left Block: Contact, Hours & Directions */}
          <div className="lg:col-span-5 bg-dark-card border border-dark-border p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden shadow-xl" id="address-block">
            
            {/* Ambient gold glow highlight */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full blur-xl pointer-events-none" />

            <div className="space-y-8">
              {/* Landmark Header and Title */}
              <div>
                <span className="px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-[9px] font-mono font-bold uppercase tracking-wider text-gold-light inline-block mb-4">
                  {lang === "en" ? "Al Wakrah - Barwa Village" : "الوكرة - قرية بروة"}
                </span>

                <h3 className="text-lg sm:text-xl font-display font-bold text-warm-white mb-2 leading-snug">
                  {lang === "en" ? SITE_CONFIG.businessName : SITE_CONFIG.businessNameAr}
                </h3>
              </div>

              {/* Physical Address Block */}
              <div className="flex items-start space-x-4 rtl:space-x-reverse" id="address-pin">
                <div className="p-3 bg-zinc-900 border border-dark-border rounded-xl inline-flex items-center justify-center text-gold shrink-0 mt-0.5">
                  <MapPin size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wide text-muted-gray mb-1">
                    {lang === "en" ? "Address" : "العنوان الجغرافي"}
                  </h4>
                  <p className="text-xs sm:text-sm text-warm-white leading-relaxed font-sans font-light">
                    {lang === "en" ? SITE_CONFIG.address : SITE_CONFIG.addressAr}
                  </p>
                </div>
              </div>

              {/* Working Hours Block */}
              <div className="flex items-start space-x-4 rtl:space-x-reverse" id="hours-pin">
                <div className="p-3 bg-zinc-900 border border-dark-border rounded-xl inline-flex items-center justify-center text-gold shrink-0 mt-0.5">
                  <Clock size={16} />
                </div>
                <div className="flex-1">
                  <h4 className="text-xs font-mono uppercase tracking-wide text-muted-gray mb-2">
                    {lang === "en" ? "Working Hours" : "ساعات العمل"}
                  </h4>
                  <div className="space-y-1.5 text-xs sm:text-sm text-warm-white leading-relaxed font-sans font-light">
                    {SITE_CONFIG.hours.map((val, hIdx) => (
                      <div key={hIdx} className="flex justify-between items-center pr-2">
                        <span>{lang === "en" ? val.day : val.dayAr}</span>
                        <span className="font-semibold text-gold-light">{lang === "en" ? val.time : val.timeAr}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Phone Contacts Block */}
              <div className="flex items-start space-x-4 rtl:space-x-reverse" id="phone-pin">
                <div className="p-3 bg-zinc-900 border border-dark-border rounded-xl inline-flex items-center justify-center text-gold shrink-0 mt-0.5">
                  <Phone size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wide text-muted-gray mb-1">
                    {lang === "en" ? "Direct Telephone Lines" : "هواتف التواصل المباشر"}
                  </h4>
                  <a
                    href={`tel:${SITE_CONFIG.phone.replace(/\s+/g, "")}`}
                    className="text-xs sm:text-sm font-semibold text-warm-white hover:text-gold transition-colors duration-200"
                  >
                    {SITE_CONFIG.phone}
                  </a>
                </div>
              </div>

              {/* Fast-Route Distance Checker Widgets */}
              <div className="pt-4 border-t border-zinc-900">
                <h4 className="text-[11px] font-mono uppercase tracking-wider text-gold mb-3 flex items-center gap-1.5">
                  <Compass size={12} className="animate-spin-slow" />
                  <span>{lang === "en" ? "Location Shortcuts" : "اختصارات الوصول السريع"}</span>
                </h4>
                <div className="grid grid-cols-3 gap-2">
                  {routes.map((rt, idx) => (
                    <button
                      key={idx}
                      onMouseEnter={() => setActiveRouteInfo(lang === "en" ? `${rt.dist} (${rt.time}) — ${rt.desc}` : `${rt.dist} (${rt.timeAr}) — ${rt.descAr}`)}
                      onMouseLeave={() => setActiveRouteInfo(null)}
                      className="p-2 rounded-xl bg-zinc-900/50 border border-dark-border hover:border-gold/30 hover:bg-zinc-900 transition-all duration-300 text-center cursor-pointer group"
                    >
                      <div className="text-[10px] font-semibold text-warm-white group-hover:text-gold transition-colors">
                        {lang === "en" ? rt.name.split(" / ")[0] : rt.nameAr.split(" / ")[0]}
                      </div>
                      <div className="text-[11px] font-mono text-gold-light font-bold mt-1">
                        {rt.dist}
                      </div>
                    </button>
                  ))}
                </div>
                <div className="h-6 mt-2 relative">
                  {activeRouteInfo ? (
                    <span className="text-[10px] font-mono text-muted-gray/90 absolute left-0 right-0 text-center animate-fade-in">
                      {activeRouteInfo}
                    </span>
                  ) : (
                    <span className="text-[10px] font-mono text-muted-gray/40 absolute left-0 right-0 text-center">
                      {lang === "en" ? "Hover a shortcut to check route & timing" : "مرر مؤشرك على الاختصار لرؤية تفاصيل المسار والوقت"}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Nav Directions Button CTA */}
            <div className="border-t border-dark-border pt-6 mt-6">
              <a
                href={SITE_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-zinc-900 border border-dark-border hover:border-gold/40 hover:bg-dark hover:shadow-lg text-gold-light hover:text-gold py-4 px-6 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 transform hover:scale-[1.01] w-full cursor-pointer"
              >
                <Navigation size={14} className="text-gold" />
                <span>{lang === "en" ? "Navigate to Google Maps" : "توجيه خرائط جوجل للفرع"}</span>
                <ArrowUpRight size={13} />
              </a>
            </div>

          </div>

          {/* Right Block: Live Style Static Map Card linking to Google Maps */}
          <a
            href={SITE_CONFIG.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="lg:col-span-7 h-[420px] lg:h-auto rounded-3xl overflow-hidden border border-dark-border shadow-2xl bg-zinc-950 relative group flex flex-col justify-between cursor-pointer"
            id="iframe-map-block"
          >
            {/* Map image or custom interactive-style fallback */}
            <div className="absolute inset-0 w-full h-full bg-zinc-950 overflow-hidden">
              <img
                src="/gallery/mapsMaps.webp"
                alt="Static Map Link View"
                className="w-full h-full object-cover absolute inset-0 grayscale saturate-50 contrast-125 opacity-75 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700"
                onError={(e) => {
                  setImageError(true);
                  // Premium dark hybrid satellite map backdrop fallback
                  e.currentTarget.src = "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80";
                }}
              />
              
              {/* Visual guideline overlay if custom map is not uploaded yet */}
              {imageError && (
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/60 backdrop-blur-[1px] p-6 text-center pointer-events-none z-10">
                  <span className="px-3 py-1 rounded bg-gold/10 border border-gold/30 text-gold text-[10px] font-mono uppercase tracking-widest leading-none">
                    {lang === "en" ? "Live-Look satellite grid" : "خريطة الأقمار الصناعية الافتراضية"}
                  </span>
                  <p className="text-[11px] text-warm-white/95 mt-2.5 font-semibold max-w-[280px]">
                    {lang === "en" 
                      ? 'Place your map image at "/gallery/mapsMaps.webp"' 
                      : 'يرجى رفع صورة الخريطة باسم "/gallery/mapsMaps.webp"'}
                  </p>
                </div>
              )}

              {/* Grid overlay lines to give it a techy live HUD radar style */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(201,168,76,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,76,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none mix-blend-color-dodge" />
            </div>

            {/* Floating Glassmorphic Locator Badge showing precisely where they are */}
            <div className="absolute top-4 left-4 right-4 sm:right-auto bg-dark-card/95 backdrop-blur-md border border-dark-border rounded-2xl p-4 shadow-2xl flex items-center gap-3.5 max-w-sm pointer-events-none z-20">
              <div className="relative shrink-0 flex items-center justify-center">
                {/* Visual Gold Beacon Pulsing Ring */}
                <span className="absolute inline-flex h-10 w-10 rounded-full bg-gold/20 animate-ping" />
                <span className="relative flex rounded-full h-4 w-4 bg-gold shadow-[0_0_10px_rgba(201,168,76,0.8)]" />
              </div>
              <div className="text-left rtl:text-right">
                <div className="flex items-center gap-2">
                  <h4 className="text-xs font-bold text-warm-white tracking-wide">
                    {lang === "en" ? "Royal Way Detailing" : "رويال واي لتزيين وعناية السيارات"}
                  </h4>
                  <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <p className="text-[10px] text-gold font-mono mt-0.5 leading-none">
                  {lang === "en" ? "Barwa Village, Al Wakrah" : "قرية بروة - الوكرة"}
                </p>
                <div className="text-[10px] text-muted-gray mt-1 leading-snug font-sans font-light">
                  {lang === "en" ? "Building 17, Shop 33 — Active Hub" : "المبنى ١٧، المحل ٣٣ — فرع مفعّل وجاهز لاستقبالكم"}
                </div>
              </div>
            </div>

            {/* Floating Glassmorphic Navigation Panel at the bottom */}
            <div className="absolute bottom-4 left-4 right-4 bg-dark-card/95 backdrop-blur-md border border-dark-border/90 p-4 rounded-2xl shadow-2xl z-20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse shrink-0" />
                <div className="text-left rtl:text-right">
                  <p className="text-[10px] font-mono text-muted-gray uppercase tracking-widest leading-none">
                    {lang === "en" ? "DURABLE MAP OVERLAY" : "خريطة جغرافية ثابتة"}
                  </p>
                  <p className="text-xs font-bold text-warm-white mt-1">
                    {lang === "en" ? "Click to Open Live Route in Maps" : "انقر للإرشاد وفتح اتجاهات جوجل مابز"}
                  </p>
                </div>
              </div>

              {/* Direct Google Maps Action tab */}
              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <span className="flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-gold text-dark group-hover:bg-gold-light group-hover:shadow-[0_4px_15px_rgba(201,168,76,0.3)] text-xs font-bold uppercase tracking-wider transition-all">
                  <Navigation size={12} className="fill-current" />
                  <span>{lang === "en" ? "Open Maps App ↗" : "فتح في خرائط جوجل ↗"}</span>
                </span>
              </div>
            </div>

          </a>

        </div>

      </div>
    </section>
  );
}

