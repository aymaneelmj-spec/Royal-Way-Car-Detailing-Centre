import { useEffect } from "react";
import { SITE_CONFIG } from "../lib/config";

interface SEOProps {
  lang: "en" | "ar";
}

export default function SEO({ lang }: SEOProps) {
  useEffect(() => {
    // Highly-optimized, localized meta descriptions and keywords targeted towards local Qatar search queries
    const title = lang === "en"
      ? `${SITE_CONFIG.businessName} | Elite Car Detailing, PPF & Ceramic Coating Qatar`
      : `${SITE_CONFIG.businessNameAr} | أفضل مركز تلميع سيارات، سيراميك وحماية PPF في قطر`;

    const description = lang === "en"
      ? `Premium car detailing services in Barwa Village, Al Wakrah, Qatar. Specialized in self-healing paint protection film (PPF), multi-stage paint correction, 9H nano-ceramic coating, and intensive steam detailing. Showroom finish of highest standard.`
      : `مركز عناية سيارات متكامل في قرية بروة، الوكرة، قطر. متخصصون في تركيب فيلم حماية الطلاء ذاتي المعالجة (PPF)، النانو سيراميك 9H الأصلي، التلميع والتصحيح الشامل ثلاثي المراحل، وتفصيل الكبائن بالبخار. جودة لا تضاهى.`;

    const keywords = lang === "en"
      ? "royal way detailing, car detailing qatar, car polish qatar, paint protection film qatar, ppf barwa village, ceramic coating qatar, car wash wakrah, luxury auto spa doha, car care al wakrah"
      : "رويال واي لتلميع السيارات, تلميع سيارات قطر, حماية سيارات الوكرة, عازل حراري قرية بروة, نانو سيراميك قطر, غسيل سيارات الوكرة, معالجة وإزالة الخدوش قطر, تظليل النوافذ بالدوحة";

    // Update browser tab document title
    document.title = title;

    // Helper utility to safely create/update key meta selectors dynamically
    const updateMetaTag = (selectors: string, attrName: string, attrVal: string, contentStr: string) => {
      try {
        let element = document.querySelector(selectors);
        if (!element) {
          element = document.createElement("meta");
          element.setAttribute(attrName, attrVal);
          document.head.appendChild(element);
        }
        element.setAttribute("content", contentStr);
      } catch (err) {
        console.warn("Metatag update error: ", err);
      }
    };

    // Update standard search crawler attributes
    updateMetaTag('meta[name="description"]', 'name', 'description', description);
    updateMetaTag('meta[name="keywords"]', 'name', 'keywords', keywords);

    // OpenGraph Social Previews - Optimized for elegant preview snippets on WhatsApp, TikTok, Instagram
    updateMetaTag('meta[property="og:title"]', 'property', 'og:title', title);
    updateMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
    updateMetaTag('meta[property="og:locale"]', 'property', 'og:locale', lang === "ar" ? "ar_QA" : "en_US");
    updateMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', lang === "en" ? SITE_CONFIG.businessName : SITE_CONFIG.businessNameAr);
    updateMetaTag('meta[property="og:type"]', 'property', 'og:type', "website");
    updateMetaTag('meta[property="og:image"]', 'property', 'og:image', "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80");

    // Twitter Card optimization
    updateMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    updateMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    updateMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', "summary_large_image");

    // Canonical link tag to prevent duplicate content crawling penalties
    try {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        document.head.appendChild(canonical);
      }
      canonical.setAttribute("href", window.location.origin + window.location.pathname);
    } catch {
      // Graceful fallback for sandboxed iframe environments
    }
  }, [lang]);

  return null; // Renderless utility
}
