import React, { useEffect } from 'react';
import { LifeBuoy, ArrowLeft, Truck, PackageCheck } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { IMAGES } from '../../constants/images';

const AidReliefAlliance: React.FC = () => {
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
      <div className="relative bg-teal-900 py-24">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={IMAGES.PAGES.ALLIANCE_HERO}
            alt="Teamwork and Logistics" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-teal-900/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link to="/" className="inline-flex items-center text-teal-100 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="h-5 w-5 mr-2" /> Back to Home
          </Link>
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
              <LifeBuoy className="h-12 w-12 text-teal-300" />
            </div>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl uppercase">
            Aid Relief Alliance
          </h1>
          <p className="mt-6 text-xl text-teal-100 max-w-3xl mx-auto">
            Operational synergy for NGOs, Food Banks, and Rescue Teams.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg text-gray-500 mx-auto">
          <p className="lead text-2xl text-gray-800 font-light mb-8">
            Disaster relief and community support require speed and coordination. WILY International partners with existing aid organizations to handle the hydration component of your relief packages.
          </p>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-4">A Force Multiplier</h3>
          <p className="mb-6">
            If your organization specializes in food distribution, medical aid, or emergency rescue, partnering with WILY allows you to offload the water sourcing logistics. We provide the "WILY x PARTNER" bottled water, ready to be bundled with your essential supplies.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
            <div className="p-6 bg-teal-50 rounded-xl border border-teal-100">
              <Truck className="h-8 w-8 text-teal-600 mb-3" />
              <h4 className="font-bold text-gray-900 mb-2">Logistical Support</h4>
              <p className="text-sm text-gray-600">
                We can arrange direct delivery to your staging grounds or distribution centers, ensuring water is available exactly when your teams deploy.
              </p>
            </div>
            <div className="p-6 bg-teal-50 rounded-xl border border-teal-100">
              <PackageCheck className="h-8 w-8 text-teal-600 mb-3" />
              <h4 className="font-bold text-gray-900 mb-2">Bundling Efficiency</h4>
              <p className="text-sm text-gray-600">
                Our bottles are packaged for durability and ease of transport, making them ideal for inclusion in survival kits or family relief packs.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">For Non-Profits & Foundations</h3>
          <p>
            We understand that non-profits operate on tight budgets. Our Alliance program is designed to maximize the impact of every baht donated. By working together, we ensure comprehensive relief reaches those in crisis without duplication of effort.
          </p>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 md:p-12 text-center border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Let's Coordinate Efforts</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            If you represent a relief organization or community foundation, let's connect to streamline our resources.
          </p>
          <div className="flex justify-center">
            <button 
              onClick={handleInquiryClick}
              className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-base font-bold rounded-full text-white bg-teal-700 hover:bg-teal-800 transition-all shadow-lg uppercase tracking-wider"
            >
              Join the Alliance
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AidReliefAlliance;