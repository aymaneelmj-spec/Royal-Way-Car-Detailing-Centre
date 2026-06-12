import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "../lib/config";
import { motion, AnimatePresence } from "motion/react";

interface WhatsAppFloatingButtonProps {
  lang: "en" | "ar";
}

export default function WhatsAppFloatingButton({ lang }: WhatsAppFloatingButtonProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  // Pre-filled WhatsApp message based on active language
  const customMessage = lang === "en"
    ? "Hello Royal Way! I would like to make a booking inquiry for my vehicle detailing."
    : "مرحباً رويال واي للعناية بالسيارات! أود حجز موعد للعناية بسيارتي والاستفسار عن الخدمات.";

  const encodedMessage = encodeURIComponent(customMessage);
  const whatsappUrl = `https://wa.me/97455066333?text=${encodedMessage}`;

  return (
    <div 
      className="fixed bottom-6 right-6 z-[99]"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div className="relative flex items-center justify-center">
        
        {/* Tooltip / Prompt bubble */}
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10, x: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10, x: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-16 right-0 bg-dark-card/95 backdrop-blur-md border border-emerald-500/30 text-warm-white px-4 py-2.5 rounded-2xl shadow-2xl text-xs font-sans whitespace-nowrap z-[100] tracking-wide pointer-events-none flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="font-semibold text-emerald-400">
                {lang === "en" ? "Booking Chat" : "محادثة الحجز المباشر"}
              </span>
              <span className="text-muted-gray/90 font-light">
                {lang === "en" ? "— We respond in minutes" : "— نرد خلال دقائق"}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulsing Backlight Rings */}
        <span className="absolute inline-flex h-16 w-16 rounded-full bg-emerald-500/25 animate-ping opacity-75" />
        <span className="absolute inline-flex h-14 w-14 rounded-full bg-emerald-500/10 animate-pulse" />

        {/* Floating Core Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="floating-whatsapp-trigger"
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white shadow-[0_8px_30px_rgb(16,185,129,0.35)] hover:shadow-[0_12px_40px_rgb(16,185,129,0.5)] border border-emerald-400/20 transition-all duration-300 transform hover:scale-110 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
        >
          <MessageCircle size={26} className="fill-current text-white transform group-hover:rotate-12 transition-transform duration-300" />
          
          {/* Notification Glow Dot */}
          <span className="absolute top-1 right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500 border-2 border-emerald-600" />
          </span>
        </a>
      </div>
    </div>
  );
}
