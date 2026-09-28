import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';

interface HeroCarouselProps {
  onSelectProduct: (product: Product) => void;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ onSelectProduct }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);

  const heroProducts = PRODUCTS;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % heroProducts.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + heroProducts.length) % heroProducts.length);
  };

  // Continuous auto-play cycle
  useEffect(() => {
    if (!isPaused && !isLoading) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 4500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, currentIndex, isLoading]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
  };

  const current = heroProducts[currentIndex];

  return (
    <section
      id="home"
      className="relative pt-20 pb-8 sm:pt-24 sm:pb-12 bg-gradient-to-b from-[#F6EB14]/15 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900/80 dark:to-slate-950 transition-colors duration-300"
      aria-label="Featured Products Showcase"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Clean Showcase Container */}
        <div
          className="relative w-full rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xl overflow-hidden group select-none transition-all"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Slide Display Frame */}
          {isLoading ? (
            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[560px] lg:h-[620px] xl:h-[680px] bg-slate-100 dark:bg-slate-950 flex items-center justify-center animate-pulse">
              <div className="w-1/2 h-1/2 bg-slate-200 dark:bg-slate-800/80 rounded-2xl" />
            </div>
          ) : (
            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[560px] lg:h-[620px] xl:h-[680px] bg-slate-100/70 dark:bg-slate-950/70 flex items-center justify-center p-4 sm:p-8 md:p-12 overflow-hidden">
              {heroProducts.map((product, idx) => (
                <div
                  key={product.id}
                  className={`absolute inset-0 p-4 sm:p-8 md:p-12 flex items-center justify-center transition-opacity duration-700 ease-in-out cursor-pointer ${
                    idx === currentIndex
                      ? 'opacity-100 z-10'
                      : 'opacity-0 z-0 pointer-events-none'
                  }`}
                  onClick={() => onSelectProduct(product)}
                  title={`Click to view details for ${product.name}`}
                >
                  {/* 100% Contained, Never Cropped Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full w-auto h-auto object-contain rounded-xl drop-shadow-md transition-transform duration-500 hover:scale-[1.015]"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}

              {/* Subtle Navigation Arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevSlide();
                }}
                className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/80 dark:bg-slate-900/80 hover:bg-white dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 shadow-md border border-slate-200/80 dark:border-slate-700 flex items-center justify-center transition-all opacity-70 group-hover:opacity-100 hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-xs"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                }}
                className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/80 dark:bg-slate-900/80 hover:bg-white dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 shadow-md border border-slate-200/80 dark:border-slate-700 flex items-center justify-center transition-all opacity-70 group-hover:opacity-100 hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-xs"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* Clean, Streamlined Bottom Info Bar */}
          <div className="px-5 py-3 sm:px-7 sm:py-3.5 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-4">
            {/* Product Meta */}
            <div
              className="min-w-0 cursor-pointer group/title"
              onClick={() => onSelectProduct(current)}
            >
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-rose-600 dark:text-rose-400">
                  {current.brand}
                </span>
                <span className="text-slate-300 dark:text-slate-700">·</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {current.categoryLabel}
                </span>
              </div>
              <h2 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white truncate group-hover/title:text-rose-600 dark:group-hover/title:text-rose-400 transition-colors">
                {current.name}
              </h2>
            </div>

            {/* Auto-Slide Progress Dots & View Details Action */}
            <div className="flex items-center gap-4 shrink-0">
              {/* Pagination Dots */}
              <div className="flex items-center gap-1.5" role="tablist">
                {heroProducts.map((p, idx) => {
                  const isActive = idx === currentIndex;
                  return (
                    <button
                      key={p.id}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        isActive
                          ? 'w-6 sm:w-7 bg-rose-600 dark:bg-rose-500'
                          : 'w-1.5 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600'
                      }`}
                      aria-label={`Slide ${idx + 1}`}
                      role="tab"
                      aria-selected={isActive}
                    />
                  );
                })}
              </div>

              {/* Discreet View Details Link Button */}
              <button
                type="button"
                onClick={() => onSelectProduct(current)}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>View Details</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
