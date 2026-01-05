import React from 'react';
import { Heart, Award, LifeBuoy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Collaboration: React.FC = () => {
  const { t } = useLanguage();

  const opportunities = [
    {
      title: t('collaboration.csrTitle'),
      description: t('collaboration.csrDesc'),
      icon: <Heart className="h-6 w-6 text-white" />,
      link: "/csr"
    },
    {
      title: t('collaboration.cobrandTitle'),
      description: t('collaboration.cobrandDesc'),
      icon: <Award className="h-6 w-6 text-white" />,
      link: "/co-branding"
    },
    {
      title: t('collaboration.allianceTitle'),
      description: t('collaboration.allianceDesc'),
      icon: <LifeBuoy className="h-6 w-6 text-white" />,
      link: "/aid-relief-alliance"
    }
  ];

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="collaboration" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-base text-wily-blue font-semibold tracking-wide uppercase">{t('collaboration.tagline')}</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {t('collaboration.title')}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            {t('collaboration.subtitle')}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {opportunities.map((item, index) => (
            <div key={index} className="group flex flex-col items-start text-left bg-gray-50 rounded-[2rem] p-10 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
              <div className="flex items-center justify-center h-14 w-14 rounded-full bg-[#5D5FEF] shadow-md mb-8">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-8 flex-1">{item.description}</p>
              
              <Link 
                to={item.link}
                className="flex items-center text-xs font-black tracking-widest text-gray-400 group-hover:text-wily-blue transition-colors uppercase"
              >
                {t('collaboration.learnMore')}
                <div className="ml-2 w-6 h-[1px] bg-gray-300 group-hover:w-12 group-hover:bg-wily-blue transition-all duration-300"></div>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-base font-bold rounded-full text-white bg-wily-gold hover:bg-yellow-600 shadow-lg transition-all transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-wily-gold"
          >
            {t('collaboration.cta')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Collaboration;