import React, { useEffect, useRef, useState } from 'react';
import { Home, HeartHandshake, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../constants/images';
import { useLanguage } from '../contexts/LanguageContext';

// Reusable component for individual scroll animations
const ScrollReveal: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t('services.templeTitle'),
      description: t('services.templeDesc'),
      icon: <Home className="h-6 w-6 text-wily-gold" fill="currentColor" />,
      image: IMAGES.SERVICES.TEMPLE,
      link: "/temple-donation"
    },
    {
      title: t('services.reliefTitle'),
      description: t('services.reliefDesc'),
      icon: <HeartHandshake className="h-6 w-6 text-[#a34b5a]" />,
      image: IMAGES.SERVICES.DISASTER,
      link: "/disaster-relief"
    },
    {
      title: t('services.ruralTitle'),
      description: t('services.ruralDesc'),
      icon: <Truck className="h-6 w-6 text-green-600" fill="currentColor" />,
      image: IMAGES.SERVICES.RURAL,
      link: "/rural-outreach"
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-base text-wily-blue font-semibold tracking-wide uppercase">{t('services.tagline')}</h2>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {t('services.title')}
          </h3>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            {t('services.subtitle')}
          </p>
        </ScrollReveal>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 150}>
              <Link to={service.link} className="block group h-full">
                <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 h-full flex flex-col border border-gray-100">
                  
                  {/* Image Container */}
                  <div className="p-4">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem]">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                  </div>
                  
                  {/* Content Area */}
                  <div className="px-8 pb-10 pt-2 flex flex-col flex-1">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="flex-shrink-0 p-2 bg-gray-50 rounded-xl group-hover:bg-white transition-colors duration-300">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
                        {service.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-500 text-[15px] leading-relaxed mb-8 flex-1">
                      {service.description}
                    </p>
                    
                    {/* Interactive CTA text */}
                    <div className="flex items-center text-xs font-black tracking-widest text-gray-400 group-hover:text-wily-blue transition-colors uppercase">
                      {t('services.learnMore')}
                      <div className="ml-2 w-6 h-[1px] bg-gray-300 group-hover:w-12 group-hover:bg-wily-blue transition-all duration-300"></div>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;