"use client";

import React, { useState, useRef, ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModernCarouselProps {
  children: ReactNode[];
  autoPlay?: boolean;
  autoPlayDelay?: number;
  className?: string;
}

const ModernCarousel = React.forwardRef<
  HTMLDivElement,
  ModernCarouselProps
>(
  (
    {
      children,
      autoPlay = false,
      autoPlayDelay = 5000,
      className,
    },
    ref
  ) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState<"next" | "prev">("next");
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);
    const autoPlayTimer = useRef<NodeJS.Timeout | null>(null);

    const totalSlides = React.Children.count(children);

    const goToSlide = (index: number, dir: "next" | "prev" = "next") => {
      setDirection(dir);
      setCurrentIndex(index % totalSlides);
      resetAutoPlay();
    };

    const nextSlide = () => {
      goToSlide((currentIndex + 1) % totalSlides, "next");
    };

    const prevSlide = () => {
      goToSlide((currentIndex - 1 + totalSlides) % totalSlides, "prev");
    };

    const handleTouchStart = (e: React.TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
      touchEndX.current = e.changedTouches[0].clientX;
      const diff = touchStartX.current - touchEndX.current;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    };

    const resetAutoPlay = () => {
      if (autoPlayTimer.current) {
        clearInterval(autoPlayTimer.current);
      }
      if (autoPlay) {
        autoPlayTimer.current = setInterval(() => {
          setCurrentIndex((prev) => (prev + 1) % totalSlides);
        }, autoPlayDelay);
      }
    };

    React.useEffect(() => {
      if (autoPlay) {
        resetAutoPlay();
      }
      return () => {
        if (autoPlayTimer.current) {
          clearInterval(autoPlayTimer.current);
        }
      };
    }, [autoPlay, autoPlayDelay, totalSlides]);

    return (
      <div
        ref={ref}
        className={cn("relative w-full overflow-hidden", className)}
        style={{ display: "block" }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slides Container */}
        <div className="absolute inset-0 w-full h-full flex items-stretch">
          {React.Children.map(children, (child, index) => (
            <div
              key={index}
              className={cn(
                "absolute inset-0 transition-opacity duration-500",
                index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              )}
            >
              {child}
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 tablet:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-2 transition-all border-2 border-gray-300 hover:border-gray-400 shadow-lg"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 text-black" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 tablet:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-2 transition-all border-2 border-gray-300 hover:border-gray-400 shadow-lg"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 text-black" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "transition-all rounded-full",
                index === currentIndex
                  ? "bg-white w-3 h-3"
                  : "bg-white/50 w-2 h-2 hover:bg-white/75"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    );
  }
);

ModernCarousel.displayName = "ModernCarousel";

export { ModernCarousel };
