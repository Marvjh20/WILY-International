import React, { useEffect } from 'react';
import { Briefcase, ArrowLeft, MapPin, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { IMAGES } from '../../constants/images';

const Career: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInquiryClick = () => {
    navigate('/', { state: { targetId: 'contact' } });
  };

  const jobs = [
    {
      title: "Field Operations Coordinator",
      location: "Bangkok & Upcountry",
      type: "Full-time",
      description: "Oversee regional project implementation and ensure efficient resource allocation to support our community outreach initiatives across the region."
    },
    {
      title: "Accounts Manager",
      location: "Bangkok HQ",
      type: "Full-time",
      description: "Manage key stakeholder relationships and drive strategic partnership opportunities to expand organizational growth and market presence."
    },
    {
      title: "Supply Chain Manager",
      location: "Bangkok HQ",
      type: "Full-time",
      description: "Optimize end-to-end logistics operations to ensure timely delivery of resources while maintaining operational efficiency and inventory standards."
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-16">
      {/* Hero Header - Updated to Friendly Light Blue */}
      <div className="relative bg-sky-50 py-24 border-b border-sky-100">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={IMAGES.PAGES.CAREER_HERO}
            alt="Team Collaboration" 
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-sky-50/90 to-sky-100/95" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link to="/" className="inline-flex items-center text-wily-blue/80 hover:text-wily-blue mb-8 transition-colors font-semibold">
            <ArrowLeft className="h-5 w-5 mr-2" /> Back to Home
          </Link>
          <div className="flex justify-center mb-6">
            <div className="p-5 bg-white rounded-full shadow-xl ring-4 ring-sky-100">
              <Briefcase className="h-12 w-12 text-wily-blue" />
            </div>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-wily-blue sm:text-5xl lg:text-6xl uppercase drop-shadow-sm">
            Join Our Team
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            Build a career while making a tangible difference in Thailand.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Open Positions</h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            We are looking for passionate individuals who share our vision of sustainable impact.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-16">
          {jobs.map((job, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 flex flex-col group">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-sky-100 text-wily-blue border border-sky-200">
                    <Briefcase className="h-3 w-3 mr-1" /> {job.type}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-wily-blue transition-colors">{job.title}</h3>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  {job.location}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {job.description}
                </p>
              </div>
              <button 
                onClick={handleInquiryClick}
                className="group/btn inline-flex items-center text-wily-blue font-bold hover:text-blue-700 transition-colors mt-auto"
              >
                Apply Now <ArrowRight className="ml-2 h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
        
        {/* General Application CTA */}
        <div className="bg-gradient-to-br from-wily-lightBlue/50 to-white rounded-2xl shadow-lg p-8 md:p-12 text-center border border-blue-100 relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-wily-blue/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-wily-blue mb-4">Don't see a role for you?</h3>
              <p className="text-gray-700 mb-8 max-w-2xl mx-auto font-medium">
                  We are always looking for volunteers and specialized skills. If you share our vision, we want to hear from you.
              </p>
              <button 
                  onClick={handleInquiryClick}
                  className="inline-block bg-wily-gold text-white font-bold px-10 py-4 rounded-full hover:bg-wily-darkGold transition-colors shadow-md transform hover:-translate-y-0.5 uppercase tracking-wide text-sm"
              >
                  Send Open Application
              </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Career;