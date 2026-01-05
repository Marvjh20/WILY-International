import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { IMAGES } from '../constants/images';
import { useLanguage } from '../contexts/LanguageContext';

const Gallery: React.FC = () => {
  const { t } = useLanguage();
  
  const images = [
    { url: IMAGES.GALLERY[0].url, caption: t('gallery.caption1') },
    { url: IMAGES.GALLERY[1].url, caption: t('gallery.caption2') },
    { url: IMAGES.GALLERY[2].url, caption: t('gallery.caption3') },
    { url: IMAGES.GALLERY[3].url, caption: t('gallery.caption4') }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('animate-fade-in');
  const autoScrollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoScroll = () => {
    if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    autoScrollRef.current = setInterval(() => {
      setAnimationClass('animate-fade-in'); // Auto scroll uses fade
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
  };

  const resetAutoScroll = () => {
    if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    startAutoScroll();
  };

  const prevSlide = () => {
    resetAutoScroll();
    setAnimationClass('animate-slide-right'); // Manual Click: Swipe Right
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    resetAutoScroll();
    setAnimationClass('animate-slide-left'); // Manual Click: Swipe Left
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    startAutoScroll();
    return () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    };
  }, []);

  return (
    <section id="gallery" className="py-24 bg-gray-50">
      {/* Inline styles for custom keyframe animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInRight {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 1.2s ease-in-out forwards;
        }
        .animate-slide-left {
          animation: slideInRight 0.5s ease-out forwards;
        }
        .animate-slide-right {
          animation: slideInLeft 0.5s ease-out forwards;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-wily-blue font-semibold tracking-wide uppercase">{t('gallery.tagline')}</h2>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {t('gallery.title')}
          </h3>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            {t('gallery.subtitle')}
          </p>
        </div>

        <div className="relative group w-full rounded-[2.5rem] shadow-2xl overflow-hidden h-[500px] md:h-[750px]">
          {/* Image Container with Animation Key Key */}
          <div 
            key={currentIndex}
            className={`w-full h-full bg-center bg-cover ${animationClass}`}
            style={{ backgroundImage: `url(${images[currentIndex].url})` }} 
          >
            {/* Gradient Overlay for Text */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 md:p-10">
               <p className="text-white text-xl md:text-2xl font-semibold text-center">{images[currentIndex].caption}</p>
            </div>
          </div>

          {/* Left Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-8 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/50 transition-colors backdrop-blur-sm z-10">
            <ChevronLeft onClick={prevSlide} size={30} />
          </div>

          {/* Right Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-8 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/50 transition-colors backdrop-blur-sm z-10">
            <ChevronRight onClick={nextSlide} size={30} />
          </div>
          
          {/* Dots */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {images.map((_, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => {
                  resetAutoScroll();
                  setAnimationClass('animate-fade-in');
                  setCurrentIndex(slideIndex);
                }}
                className={`transition-all duration-300 cursor-pointer w-3 h-3 rounded-full shadow-md ${currentIndex === slideIndex ? 'bg-wily-gold w-8' : 'bg-white/50 hover:bg-white'}`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;