import React, { useState, useEffect, useRef } from "react";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string; // Wrapper classes
  imgClassName?: string; // Inner img tag classes
  fallbackSrc?: string;
  referrerPolicy?: React.HTMLAttributeReferrerPolicy;
}

export default function LazyImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  fallbackSrc = "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=80",
  referrerPolicy,
  ...props
}: LazyImageProps) {
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Unobserve once triggers to save memory
        }
      },
      {
        rootMargin: "80px", // Trigger when 80px away from viewport
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={imageRef}
      className={`relative overflow-hidden w-full h-full bg-zinc-950 select-none ${className}`}
    >
      {/* Premium minimal skeleton pulsing aura */}
      {(!isInView || !isLoaded) && (
        <div className="absolute inset-0 bg-zinc-900/90 animate-pulse flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-gold/40 animate-ping" />
        </div>
      )}

      {isInView && (
        <img
          src={error ? fallbackSrc : src}
          alt={alt}
          referrerPolicy={referrerPolicy}
          className={`w-full h-full object-cover transition-all duration-700 ease-out ${imgClassName} ${
            isLoaded ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-[1.03] blur-sm"
          }`}
          onLoad={() => setIsLoaded(true)}
          onError={() => setError(true)}
          {...props}
        />
      )}
    </div>
  );
}
