import React, { useEffect } from 'react';
import { Award, ArrowLeft, Tag, PenTool } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { IMAGES } from '../../constants/images';

const CoBranding: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInquiryClick = () => {
    navigate('/', { state: { targetId: 'contact' } });
  };

  return (
    <div className="bg-white min-h-screen pt-16">
      {/* Hero Header */}
      <div className="relative bg-gray-900 py-24">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={IMAGES.PAGES.COBRAND_HERO}
            alt="Product Design" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gray-900/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link to="/" className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="h-5 w-5 mr-2" /> Back to Home
          </Link>
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
              <Award className="h-12 w-12 text-wily-gold" />
            </div>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl uppercase">
            Co-Branding Opportunities
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Place your brand on a product that carries a message of hope and generosity.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg text-gray-500 mx-auto">
          <p className="lead text-2xl text-gray-800 font-light mb-8">
            The "WILY x BRAND" initiative is a powerful visual statement. It tells the world that your organization is actively contributing to the well-being of the community.
          </p>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Not For Sale. Only For Giving.</h3>
          <p className="mb-6">
            This is the core of our co-branding philosophy. The bottles carrying your logo are never sold on shelves. They are gifted. This distinction elevates your brand equity, associating it purely with altruism rather than commercial transaction.
          </p>
          
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 my-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <PenTool className="h-5 w-5 mr-2 text-wily-blue" />
              Custom Label Integration
            </h3>
            <p className="mb-4">
              We work with your design team to integrate your logo alongside the WILY mark.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li><strong>Prominent Logo Placement:</strong> Your brand displayed clearly on the label.</li>
              <li><strong>The 'Donated By' Tagline:</strong> Explicit acknowledgment of your contribution.</li>
              <li><strong>QR Code Integration:</strong> Optional links to your own sustainability landing pages.</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ideal For Events & PR</h3>
          <p>
            These co-branded bottles are perfect for distribution at your own corporate events, charity galas, or as part of a larger PR campaign where you want to demonstrate tangible community support.
          </p>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-wily-blue/5 rounded-2xl p-8 md:p-12 text-center border border-wily-blue/10">
          <h2 className="text-2xl font-bold text-wily-blue mb-4">See Your Brand on a Bottle</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us to request a digital mockup of what a WILY x YOUR BRAND collaboration could look like.
          </p>
          <div className="flex justify-center">
            <button 
              onClick={handleInquiryClick}
              className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-base font-bold rounded-full text-white bg-wily-gold hover:bg-yellow-500 transition-all shadow-lg uppercase tracking-wider"
            >
              Request Brand Kit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoBranding;