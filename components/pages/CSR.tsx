import React, { useEffect } from 'react';
import { Heart, ArrowLeft, BarChart3, Users } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { IMAGES } from '../../constants/images';

const CSR: React.FC = () => {
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
      <div className="relative bg-indigo-900 py-24">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={IMAGES.PAGES.CSR_HERO}
            alt="Corporate Meeting" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-indigo-900/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link to="/" className="inline-flex items-center text-indigo-100 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="h-5 w-5 mr-2" /> Back to Home
          </Link>
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
              <Heart className="h-12 w-12 text-indigo-300" />
            </div>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl uppercase">
            Corporate Social Responsibility
          </h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl mx-auto">
            Tangible, transparent, and impactful community engagement for your organization.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg text-gray-500 mx-auto">
          <p className="lead text-2xl text-gray-800 font-light mb-8">
            Modern consumers and employees value companies that give back. Partnering with WILY International provides a direct channel to turn your CSR budget into clean water for communities in need.
          </p>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-4">The "WILY x YOUR BRAND" Initiative</h3>
          <p className="mb-6">
            We offer a unique opportunity for corporate partners to sponsor production runs of WILY bottled water. These bottles are strictly <strong>Not For Sale</strong>. Instead, they are distributed directly to our network of temples, rural schools, and disaster relief zones.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
            <div className="flex flex-col items-start p-6 bg-indigo-50 rounded-xl border border-indigo-100">
              <BarChart3 className="h-8 w-8 text-indigo-600 mb-4" />
              <h4 className="font-bold text-gray-900 mb-2">Transparent Reporting</h4>
              <p className="text-sm text-gray-600">
                We provide detailed impact reports showing exactly where your sponsored water was distributed, complete with photo evidence and beneficiary estimates for your annual sustainability reports.
              </p>
            </div>
            <div className="flex flex-col items-start p-6 bg-indigo-50 rounded-xl border border-indigo-100">
              <Users className="h-8 w-8 text-indigo-600 mb-4" />
              <h4 className="font-bold text-gray-900 mb-2">Employee Engagement</h4>
              <p className="text-sm text-gray-600">
                Opportunities for your team to join us on the ground for distribution days, fostering team building and direct community connection.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Water?</h3>
          <p>
            Water is the most fundamental human need. By ensuring access to clean hydration, your company supports health, education, and dignity. It is a universally understood and appreciated form of aid that transcends political or religious boundaries.
          </p>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 md:p-12 text-center border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Make an Impact?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can tailor a CSR program that aligns with your company's values and budget.
          </p>
          <div className="flex justify-center">
            <button 
              onClick={handleInquiryClick}
              className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-base font-bold rounded-full text-white bg-[#5D5FEF] hover:bg-indigo-700 transition-all shadow-lg uppercase tracking-wider"
            >
              Start Your CSR Journey
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSR;