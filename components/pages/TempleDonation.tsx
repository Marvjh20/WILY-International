import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { IMAGES } from '../../constants/images';

const TempleDonation: React.FC = () => {
  const navigate = useNavigate();

  const handleInquiryClick = () => {
    navigate('/', { state: { targetId: 'contact' } });
  };

  return (
    <div className="bg-white min-h-screen pt-16">
      {/* Hero Header */}
      <div className="relative bg-wily-blue py-24">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={IMAGES.PAGES.TEMPLE_HERO}
            alt="Thai Temple" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-wily-blue/60 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="h-5 w-5 mr-2" /> Back to Home
          </Link>
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
              <Home className="h-12 w-12 text-wily-gold" />
            </div>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl uppercase">
            Temple Outreach
          </h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
            Exploring ways to support the spiritual and community pillars of Thailand.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg text-gray-500 mx-auto">
          <p className="lead text-2xl text-gray-800 font-light mb-8">
            In Thailand, temples are more than places of worship; they are the heart of community life. WILY International seeks to honor this tradition through clean water initiatives.
          </p>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-4">The Cultural Significance</h3>
          <p className="mb-6">
            Providing clean water to temples aligns with the fundamental practice of "Tam Boon" (making merit). Temples often act as shelters and community hubs, where access to safe hydration is essential for monks, students, and local residents alike.
          </p>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Collaborative Approach</h3>
          <p className="mb-6">
            Our vision involves directing a portion of our resources toward temple support programs. We work to identify temples in underserved regions that could benefit from periodic clean water supplies, particularly during significant cultural festivals and ceremonies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            <div className="border border-gray-100 p-6 rounded-xl shadow-sm">
              <h4 className="font-bold text-gray-900 mb-2">Resource Allocation</h4>
              <p className="text-sm">Initiatives are developed in alignment with available inventory and regional logistical capacity.</p>
            </div>
            <div className="border border-gray-100 p-6 rounded-xl shadow-sm">
              <h4 className="font-bold text-gray-900 mb-2">Community Support</h4>
              <p className="text-sm">We focus on temples that serve as centers for education and community relief during local hardships.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-wily-lightBlue/30 rounded-2xl p-8 md:p-12 text-center border border-blue-100">
          <h2 className="text-2xl font-bold text-wily-blue mb-4">Learn More About Our Vision</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            We are continuously looking for ways to expand our outreach. If you would like more information on our community initiatives or wish to suggest a location for future consideration, please contact our team.
          </p>
          <div className="flex justify-center">
            <button 
              onClick={handleInquiryClick}
              className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-base font-bold rounded-full text-white bg-wily-gold hover:bg-wily-darkGold transition-all shadow-lg uppercase tracking-wider"
            >
              General Inquiry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TempleDonation;