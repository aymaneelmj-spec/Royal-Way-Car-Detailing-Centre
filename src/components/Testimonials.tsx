import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { SITE_CONFIG } from "../lib/config";
import { motion, AnimatePresence } from "motion/react";

interface TestimonialsProps {
  lang: "en" | "ar";
}

export default function Testimonials({ lang }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    const total = SITE_CONFIG.testimonials.length;
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    const total = SITE_CONFIG.testimonials.length;
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const activeTestimonial = SITE_CONFIG.testimonials[currentIndex];

  // Helper to generate initials for avatar
  const getInitials = (name: string) => {
    const parts = name.trim().split(" ");
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  return (
    <section id="testimonials" className="py-24 bg-dark-card relative overflow-hidden border-t border-dark-border">
      {/* Background glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-gold font-mono text-xs uppercase tracking-[0.3em] font-semibold mb-3 block">
            {lang === "en" ? "Owner Endorsements" : "لقاء الثقة مع عملائنا"}
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-warm-white tracking-tight">
            {lang === "en" ? "Praised By Elite Collectors" : "ماذا يقول مقتنو السيارات الفاخرة"}
          </h2>
          <div className="h-0.5 w-16 bg-gold mx-auto mt-4" />
        </div>

        {/* Testimonial Active Display Card with AnimatePresence */}
        <div className="relative" id="testimonials-carousel">
          <div className="min-h-[280px] md:min-h-[220px] bg-dark/60 rounded-3xl p-8 md:p-12 border border-dark-border shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-10">
            
            {/* Giant quote icon behind */}
            <Quote className="absolute right-8 top-8 text-gold/5 w-24 h-24 pointer-events-none transform rotate-12 rtl:left-8 rtl:right-auto" />

            {/* Initials avatar circle */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-gold to-gold-light p-0.5 shadow-lg shadow-gold/20 shrink-0">
              <div className="w-full h-full bg-dark rounded-full flex items-center justify-center font-display font-bold text-lg sm:text-xl text-gold-light select-none">
                {getInitials(lang === "en" ? activeTestimonial.name : activeTestimonial.nameAr)}
              </div>
            </div>

            {/* Content blocks */}
            <div className="flex-1 text-center md:text-left rtl:md:text-right">
              
              {/* Star group */}
              <div className="flex items-center space-x-1 justify-center md:justify-start rtl:md:justify-start mb-4 rtl:space-x-reverse">
                {[...Array(activeTestimonial.rating)].map((_, i) => (
                  <Star key={i} size={15} className="fill-gold text-gold" />
                ))}
              </div>

              {/* Review Text quote */}
              <blockquote className="text-base sm:text-lg text-warm-white font-sans font-light leading-relaxed mb-6">
                "{lang === "en" ? activeTestimonial.text : activeTestimonial.textAr}"
              </blockquote>

              {/* Client Info details */}
              <div>
                <cite className="not-italic font-display font-bold text-warm-white sm:text-md">
                  {lang === "en" ? activeTestimonial.name : activeTestimonial.nameAr}
                </cite>
                <div className="text-[11px] font-mono tracking-wider text-gold-light uppercase mt-0.5 font-medium">
                  {lang === "en" ? activeTestimonial.role : activeTestimonial.roleAr}
                </div>
              </div>

            </div>

          </div>

          {/* Nav Controls Buttons */}
          <div className="flex items-center justify-center space-x-4 rtl:space-x-reverse mt-8">
            <button
              onClick={handlePrev}
              className="p-3.5 rounded-full border border-dark-border hover:border-gold/30 bg-dark-card hover:bg-zinc-900 text-gold-light transition-all cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={16} />
            </button>

            {/* Dots */}
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              {SITE_CONFIG.testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentIndex === i ? "w-6 bg-gold" : "w-2 bg-dark-border"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3.5 rounded-full border border-dark-border hover:border-gold/30 bg-dark-card hover:bg-zinc-900 text-gold-light transition-all cursor-pointer"
              aria-label="Next Testimonial"
            >
              <ChevronRight size={16} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
