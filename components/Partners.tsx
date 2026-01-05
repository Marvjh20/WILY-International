import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { IMAGES } from '../constants/images';

const Partners: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const partnerLogos = Object.values(IMAGES.PARTNERS);
  
  // Create 4 sets of logos to ensure adequate scroll buffer even on wide screens
  // [Set 1] - [Set 2 (Start)] - [Set 3] - [Set 4]
  const repeatedLogos = [...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos];
  const [isReady, setIsReady] = useState(false);

  // Initialize scroll position to Set 2
  useEffect(() => {
    const initScroll = () => {
      if (scrollRef.current) {
        const scrollWidth = scrollRef.current.scrollWidth;
        const oneSetWidth = scrollWidth / 4;
        
        // Jump to the start of Set 2 instantly
        scrollRef.current.scrollLeft = oneSetWidth;
        setIsReady(true);
      }
    };

    // Small delay to ensure images have loaded/layout is stable
    const timer = setTimeout(initScroll, 100);
    return () => clearTimeout(timer);
  }, []);

  // Infinite Scroll Logic
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let timeoutId: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      // Debounce to prevent jitter during active scrolling
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (!container) return;
        
        const scrollWidth = container.scrollWidth;
        const oneSetWidth = scrollWidth / 4;
        const scrollLeft = container.scrollLeft;

        // RIGHT SCROLL FIX:
        // If we have scrolled past Set 2 (into Set 3), teleport back to Set 2.
        // We use >= 2.0 * Width as the trigger because visually Set 3 (at 2W) looks identical to Set 2 (at 1W).
        if (scrollLeft >= 2 * oneSetWidth) {
           container.style.scrollBehavior = 'auto'; // Disable animation for instant jump
           container.scrollLeft -= oneSetWidth;     // Shift back by exactly one set
           container.style.scrollBehavior = '';     // Re-enable smooth scroll
        } 
        // LEFT SCROLL FIX:
        // If we have scrolled deep into Set 1 (approaching 0), teleport forward to Set 2.
        else if (scrollLeft <= 0.5 * oneSetWidth) {
           container.style.scrollBehavior = 'auto';
           container.scrollLeft += oneSetWidth;
           container.style.scrollBehavior = '';
        }
      }, 50); // Fast check
    };

    container.addEventListener('scroll', handleScroll);
    return () => {
      container.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300; // Amount to scroll per click
      scrollRef.current.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    // We hide the component until it's initialized (isReady) to prevent seeing the initial jump
    <div className={`bg-white pb-24 pt-4 overflow-hidden transition-opacity duration-500 ${isReady ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative group px-12">
          {/* Left Navigation Button */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg border border-gray-100 md:opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gray-50 -ml-2 hover:scale-110 active:scale-95"
            aria-label="Scroll Left"
          >
            <ChevronLeft className="h-5 w-5 text-gray-400" />
          </button>

          {/* Carousel Viewport */}
          <div 
            ref={scrollRef}
            className="flex items-center gap-12 md:gap-20 overflow-x-auto scrollbar-hide snap-none"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {repeatedLogos.map((logoUrl, index) => (
              <div 
                key={`${index}-${logoUrl}`} 
                className="flex-shrink-0 transition-all duration-500"
              >
                <img 
                  src={logoUrl} 
                  alt="Partner" 
                  className="h-12 md:h-16 aspect-[5/3] object-contain grayscale opacity-30 hover:grayscale-0 hover:opacity-100 hover:scale-105 transition-all duration-500 cursor-pointer"
                />
              </div>
            ))}
          </div>

          {/* Right Navigation Button */}
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg border border-gray-100 md:opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gray-50 -mr-2 hover:scale-110 active:scale-95"
            aria-label="Scroll Right"
          >
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </button>
        </div>
      </div>
      
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Partners;