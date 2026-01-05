import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../constants/images';
import { useLanguage } from '../contexts/LanguageContext';

const Recruitment: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="recruitment" className="py-24 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-base text-wily-blue font-semibold tracking-wide uppercase">{t('recruitment.tagline')}</h2>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {t('recruitment.title')}
          </h3>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content - Left Side */}
          <div className="w-full md:w-1/2 text-left">
            <p className="text-xl text-gray-500 leading-relaxed mb-8">
              {t('recruitment.description')}
            </p>
            
            <Link 
              to="/career"
              className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-base font-bold rounded-full text-white bg-wily-gold hover:bg-yellow-600 shadow-lg transition-all transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-wily-gold"
            >
              {t('recruitment.cta')}
            </Link>
          </div>

          {/* Graphic Content - Right Side */}
          <div className="w-full md:w-1/2">
            <div className="relative rounded-[2rem] overflow-hidden group">
              <img 
                src={IMAGES.CAREER_FEATURE} 
                alt="WILY Team Collaboration" 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              {/* Optional graphic overlay to give it a 'vector' vibe if using a photo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-wily-blue/20 to-transparent mix-blend-overlay"></div>
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default Recruitment;