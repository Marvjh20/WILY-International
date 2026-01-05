import React from 'react';
import { Truck, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { IMAGES } from '../../constants/images';

const RuralOutreach: React.FC = () => {
  const navigate = useNavigate();

  const handleInquiryClick = () => {
    navigate('/', { state: { targetId: 'contact' } });
  };

  return (
    <div className="bg-white min-h-screen pt-16">
      {/* Hero Header */}
      <div className="relative bg-green-800 py-24">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={IMAGES.PAGES.RURAL_HERO}
            alt="Rural Village" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-green-900/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="h-5 w-5 mr-2" /> Back to Home
          </Link>
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
              <Truck className="h-12 w-12 text-green-300" />
            </div>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl uppercase">
            Rural Initiatives
          </h1>
          <p className="mt-6 text-xl text-green-100 max-w-3xl mx-auto">
            Supporting remote communities with access to essential hydration.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg text-gray-500 mx-auto">
          <p className="lead text-2xl text-gray-800 font-light mb-8">
            Access to clean water is a fundamental need that can be challenging for remote regions. We are dedicated to bridging this gap for underserved communities.
          </p>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Focus on Education & Wellness</h3>
          <p className="mb-6">
            Our outreach programs are designed to support schools and community centers in remote areas. We believe that proper hydration is a key component of a productive learning environment and overall community health.
          </p>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Towards Sustainable Support</h3>
          <p className="mb-6">
            WILY International seeks to go beyond temporary deliveries. We are exploring ways to use our platform to fund and support long-term water infrastructure projects, such as filtration systems, based on regional needs and available resources.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
             <div className="bg-green-50/50 p-6 rounded-xl border border-green-100">
                <h4 className="font-bold text-green-800">Educational Support</h4>
                <p className="text-sm text-green-700 mt-2">Striving to provide water provisions to remote educational institutions in northern provinces as capacity permits.</p>
             </div>
             <div className="bg-green-50/50 p-6 rounded-xl border border-green-100">
                <h4 className="font-bold text-green-800">Regional Outreach</h4>
                <p className="text-sm text-green-700 mt-2">Focused on identifying hill tribe villages and remote settlements that lack consistent access to clean drinking water.</p>
             </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-green-50/30 rounded-2xl p-8 md:p-12 text-center border border-green-100">
          <h2 className="text-2xl font-bold text-green-800 mb-4">Support Our Journey</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our outreach capability is tied directly to our collective support. If you share our vision for improved rural water access, we invite you to learn more about our upcoming initiatives.
          </p>
          <div className="flex justify-center">
            <button 
              onClick={handleInquiryClick}
              className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-base font-bold rounded-full text-white bg-green-700 hover:bg-green-800 transition-all shadow-lg uppercase tracking-wider"
            >
              Get More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RuralOutreach;