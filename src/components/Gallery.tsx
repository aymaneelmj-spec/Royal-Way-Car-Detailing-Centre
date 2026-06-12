import React, { useState, useEffect } from "react";
import { Maximize2, X, ChevronLeft, ChevronRight, Filter } from "lucide-react";
import { SITE_CONFIG } from "../lib/config";
import { motion, AnimatePresence } from "motion/react";
import LazyImage from "./LazyImage";

interface GalleryProps {
  lang: "en" | "ar";
}

export default function Gallery({ lang }: GalleryProps) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [tilt, setTilt] = useState<{ index: number; x: number; y: number } | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter categories
  const categories = [
    { key: "All", label: "All Works", labelAr: "الكل" },
    { key: "Correction", label: "Correction", labelAr: "تصحيح الطلاء" },
    { key: "Detailing", label: "Detailing", labelAr: "تلميع وتفصيل" },
    { key: "Interior", label: "Interior", labelAr: "العناية بالداخلية" },
    { key: "Ceramic", label: "Ceramic Coating", labelAr: "النانو سيراميك" },
  ];

  const filteredImages = SITE_CONFIG.galleryImages.filter((img) => {
    if (activeFilter === "All") return true;
    return img.category === activeFilter;
  });

  // Handle 3D Mouse Transform
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ index, x, y });
  };

  const handleMouseLeave = () => {
    setTilt(null);
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") handlePrevNext(1);
      if (e.key === "ArrowLeft") handlePrevNext(-1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredImages]);

  const handlePrevNext = (direction: number) => {
    if (lightboxIndex === null) return;
    const total = filteredImages.length;
    let nextIdx = (lightboxIndex + direction) % total;
    if (nextIdx < 0) nextIdx = total - 1;
    setLightboxIndex(nextIdx);
  };

  return (
    <section id="gallery" className="py-24 bg-dark relative overflow-hidden border-t border-dark-border">
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <span className="text-gold font-mono text-xs uppercase tracking-[0.3em] font-semibold mb-3 block">
              {lang === "en" ? "Exclusive Portfolio" : "ألبوم أعمالنا الفاخرة"}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-warm-white tracking-tight">
              {lang === "en" ? "Showroom Masterpieces" : "روائع من صالة التلميع"}
            </h2>
            <div className="h-1 w-20 bg-gold mt-4" />
          </div>

          {/* Filtering buttons */}
          <div className="flex flex-wrap gap-2 items-center" id="gallery-filters">
            <span className="text-muted-gray text-xs font-mono mr-2 hidden sm:inline flex items-center space-x-1.5 rtl:ml-2 rtl:mr-0">
              <Filter size={12} className="text-gold" />
              <span>{lang === "en" ? "Filter:" : "تصفية حسب:"}</span>
            </span>

            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => {
                  setActiveFilter(cat.key);
                  setLightboxIndex(null);
                }}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                  activeFilter === cat.key
                    ? "bg-gold text-dark border-gold shadow-[0_4px_15px_rgba(201,168,76,0.3)]"
                    : "bg-dark-card border border-dark-border text-warm-white/70 hover:border-gold/30 hover:text-warm-white"
                }`}
              >
                {lang === "en" ? cat.label : cat.labelAr}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="gallery-grid">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, idx) => {
              const isTilted = tilt && tilt.index === idx;
              
              // Find index in core unfiltered gallery images to link correctly
              const originalIndexInConfig = SITE_CONFIG.galleryImages.findIndex(
                (item) => item.src === img.src
              );

              return (
                <motion.div
                  key={img.src}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.4 }}
                  onMouseMove={(e) => handleMouseMove(e, idx)}
                  onClick={() => setLightboxIndex(idx)}
                  className="relative group aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900 border border-dark-border cursor-pointer shadow-lg hover:border-gold/30 transition-all duration-300"
                  style={{
                    transform: isTilted
                      ? `perspective(600px) rotateY(${tilt!.x * 12}deg) rotateX(${-tilt!.y * 12}deg) scale(1.025)`
                      : "perspective(600px) rotateY(0deg) rotateX(0deg) scale(1)",
                    transition: isTilted ? "none" : "all 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
                    zIndex: hoveredIndex === idx ? 10 : 1,
                  }}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => {
                    setHoveredIndex(null);
                    handleMouseLeave();
                  }}
                >
                  <LazyImage
                    src={img.src}
                    alt={img.title}
                    referrerPolicy="no-referrer"
                    imgClassName="transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Elegant Gradient Hover state overlay with visual metadata */}
                  <div className="absolute inset-x-0 bottom-0 top-1/4 bg-gradient-to-t from-black/92 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <span className="text-[9px] font-mono font-bold tracking-widest text-gold uppercase mb-1">
                      {img.category}
                    </span>
                    <h3 className="text-sm font-display font-bold text-warm-white tracking-wide">
                      {lang === "en" ? img.title : img.titleAr}
                    </h3>
                    <div className="flex items-center space-x-1.5 rtl:space-x-reverse mt-2 text-[10px] text-warm-white/60">
                      <Maximize2 size={11} className="text-gold" />
                      <span>{lang === "en" ? "Click to view detail" : "اضغط للتكبير"}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* CSS Lightbox overlay implementation */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
              onClick={() => setLightboxIndex(null)}
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-6 right-6 text-warm-white/70 hover:text-gold p-2 hover:bg-zinc-900 rounded-full transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X size={28} />
              </button>

              {/* Prev Arrow */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevNext(-1);
                }}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-warm-white/70 hover:text-gold p-3 hover:bg-zinc-900 rounded-full transition-colors cursor-pointer"
                aria-label="Previous Image"
              >
                <ChevronLeft size={32} />
              </button>

              {/* Core Image Showcase Card */}
              <motion.div
                key={filteredImages[lightboxIndex].src}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="max-w-4xl w-full flex flex-col justify-center items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative rounded-2xl overflow-hidden border border-warm-white/10 max-h-[75vh] w-full flex justify-center bg-zinc-950">
                  <img
                    src={filteredImages[lightboxIndex].src}
                    alt={filteredImages[lightboxIndex].title}
                    referrerPolicy="no-referrer"
                    className="object-contain max-h-[75vh] w-full"
                  />
                  
                  {/* Category overlay */}
                  <span className="absolute top-4 left-4 bg-gold/90 text-dark text-[10px] font-bold px-3 py-1.5 rounded-md font-mono uppercase tracking-widest leading-none">
                    {filteredImages[lightboxIndex].category}
                  </span>
                </div>

                {/* Lightbox Footer text metadata */}
                <div className="text-center mt-6 max-w-lg">
                  <h3 className="font-display font-medium text-lg text-warm-white">
                    {lang === "en" ? filteredImages[lightboxIndex].title : filteredImages[lightboxIndex].titleAr}
                  </h3>
                  <p className="text-xs text-muted-gray mt-1">
                    {lang === "en" ? "Image" : "صورة"} {lightboxIndex + 1} {lang === "en" ? "of" : "من"} {filteredImages.length} • {lang === "en" ? "Royal Way Qatar Showcase" : "أعمال رويال واي قطر"}
                  </p>
                </div>
              </motion.div>

              {/* Next Arrow */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevNext(1);
                }}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-warm-white/70 hover:text-gold p-3 hover:bg-zinc-900 rounded-full transition-colors cursor-pointer"
                aria-label="Next Image"
              >
                <ChevronRight size={32} />
              </button>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
