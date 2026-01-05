import React from 'react';
import { HeartHandshake, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { IMAGES } from '../../constants/images';

const DisasterRelief: React.FC = () => {
  const navigate = useNavigate();

  const handleInquiryClick = () => {
    navigate('/', { state: { targetId: 'contact' } });
  };

  return (
    <div className="bg-white min-h-screen pt-16">
      {/* Hero Header - Refined to Soft Velvet Red (Lighter Tone) */}
      <div className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #a34b5a 0%, #cb7a88 100%)' }}>
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={IMAGES.PAGES.DISASTER_HERO} 
            alt="Disaster Relief" 
            className="w-full h-full object-cover opacity-30 mix-blend-soft-light scale-105"
          />
          {/* Subtle noise/texture overlay for 'velvet' feel */}
          <div className="absolute inset-0 opacity-[0.15] bg-[url('https://www.transparenttextures.com/patterns/felt.png')]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link to="/" className="inline-flex items-center text-white/90 hover:text-white mb-8 transition-colors font-medium tracking-wide">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Home
          </Link>
          
          <div className="flex justify-center mb-8">
            <div className="p-5 bg-white/15 rounded-full backdrop-blur-md border border-white/20 shadow-2xl">
              <HeartHandshake className="h-12 w-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl uppercase drop-shadow-md">
            Relief Efforts
          </h1>
          
          <p className="mt-6 text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
            Providing a compassionate response and essential hydration to communities navigating environmental crises.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="prose prose-lg text-gray-500 mx-auto">
          <p className="lead text-2xl text-gray-800 font-light mb-10 leading-relaxed">
            In times of uncertainty, a simple bottle of water becomes a symbol of hope. WILY International focuses on facilitating rapid hydration support for those affected by regional disasters.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-[#a34b5a]"></span>
                Strategic Focus
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our objective is to streamline the dispatch of clean bottled water to flood zones and areas hit by natural calamities. We continuously refine our logistics vision to better serve these urgent needs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-[#a34b5a]"></span>
                Local Synergy
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We believe in the power of coordination. By aligning with local relief foundations and emergency response teams, we aim to ensure that our contributions complement existing aid frameworks.
              </p>
            </div>
          </div>

          <div className="bg-[#fff5f6] border-l-4 border-[#cb7a88] p-8 rounded-r-2xl shadow-sm">
             <h4 className="text-lg font-bold text-[#a34b5a] mb-3">Commitment to Care</h4>
             <p className="text-gray-700 font-medium leading-relaxed italic">
               "WILY strives to prioritize relief dispatch during regional emergencies. All mobilization efforts are managed in accordance with real-time situational assessments and current production capacity."
             </p>
          </div>
        </div>

        {/* CTA Section - Muted Velvet Theme */}
        <div className="mt-20 bg-gradient-to-br from-[#fffafa] to-[#fff5f6] rounded-[3rem] p-10 md:p-16 text-center border border-[#fce4e7] shadow-sm">
          <h2 className="text-3xl font-bold text-[#8e3a4e] mb-6">Partnership & Coordination</h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-lg">
            Our ability to react effectively grows through collaboration. If your organization specializes in disaster response, let's explore how we can support your mission.
          </p>
          <div className="flex justify-center">
            <button 
              onClick={handleInquiryClick}
              className="group inline-flex items-center justify-center px-12 py-5 border border-transparent text-base font-bold rounded-full text-white bg-[#a34b5a] hover:bg-[#8e3a4e] transition-all shadow-xl shadow-rose-100 uppercase tracking-widest"
            >
              Collaborate With Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisasterRelief;