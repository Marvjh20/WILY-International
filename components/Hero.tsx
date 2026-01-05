import React, { useState } from 'react';
import { Camera } from 'lucide-react';
import { IMAGES } from '../constants/images';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const [bgImage, setBgImage] = useState(IMAGES.HERO_BG);
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setBgImage(imageUrl);
    }
  };

  return (
    <section 
      id="home" 
      className="relative h-[85vh] min-h-[600px] flex items-center bg-cover bg-center bg-no-repeat transition-all duration-700"
      style={{ backgroundImage: `url('${bgImage}')` }}
    >
      {/* Soft gradient overlay from left for text readability, matching the screenshot's moody feel */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>

      {/* Image Customizer Button (Subtle) */}
      <div className="absolute bottom-8 right-8 z-20">
        <label className="flex items-center justify-center p-3 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md cursor-pointer transition-all border border-white/30">
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleImageUpload} 
            className="hidden" 
          />
          <Camera className="h-5 w-5 text-white" />
        </label>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-xl text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg whitespace-pre-line">
            {t('hero.title')}
          </h1>
          
          <p className="mt-6 text-base md:text-lg text-white/90 font-medium leading-relaxed max-w-md">
            {t('hero.subtitle')}
          </p>
          
          <div className="mt-10">
            <button
              onClick={() => scrollTo('services')}
              className="px-10 py-4 border border-transparent text-base font-bold rounded-full text-white bg-wily-gold hover:bg-yellow-600 shadow-lg transition-all transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-wily-gold"
            >
              {t('hero.cta')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;