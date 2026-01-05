import React, { useState } from 'react';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IMAGES } from '../constants/images';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [imgError, setImgError] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'th' : 'en');
  };

  const navLinks = [
    { 
      name: t('nav.whatWeDo'), 
      id: 'services', 
      subLinks: [
        { name: t('nav.temple'), path: '/temple-donation' },
        { name: t('nav.relief'), path: '/disaster-relief' },
        { name: t('nav.rural'), path: '/rural-outreach' },
      ]
    },
    { name: t('nav.gallery'), id: 'gallery' },
    { 
      name: t('nav.collaboration'), 
      id: 'collaboration', 
      subLinks: [
        { name: t('nav.csr'), path: '/csr' },
        { name: t('nav.cobranding'), path: '/co-branding' },
        { name: t('nav.alliance'), path: '/aid-relief-alliance' },
      ]
    },
    { 
      name: t('nav.recruitment'), 
      id: 'recruitment',
      subLinks: [
        { name: t('nav.whyJoin'), path: '/', targetId: 'recruitment' },
        { name: t('nav.positions'), path: '/career' },
      ]
    },
    { name: t('nav.contact'), id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { targetId: id } });
    }
  };

  const handleSubLinkClick = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 transition-all duration-300 h-24 md:h-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" onClick={(e) => handleNavClick(e, 'home')} className="flex items-center">
              {!imgError ? (
                <img 
                  src={IMAGES.LOGO} 
                  alt="WILY International" 
                  className="h-16 w-auto md:h-20 lg:h-24 object-contain transition-transform hover:scale-105"
                  onError={() => setImgError(true)}
                  referrerPolicy="no-referrer"
                />
              ) : (
                <span className="text-xl font-black text-wily-blue tracking-tighter uppercase">WILY</span>
              )}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative h-full flex items-center"
                onMouseEnter={() => link.subLinks && setActiveDropdown(link.name)}
                onMouseLeave={() => link.subLinks && setActiveDropdown(null)}
              >
                <button
                  onClick={(e) => handleNavClick(e, link.id)}
                  className="group flex items-center text-[11px] lg:text-[13px] font-bold text-gray-500 hover:text-wily-blue tracking-widest transition-colors whitespace-nowrap py-4"
                >
                  {link.name}
                  {link.subLinks && (
                    <ChevronDown className={`ml-1 h-3 w-3 transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                  )}
                </button>

                {/* Dropdown Menu */}
                {link.subLinks && (
                  <div 
                    className={`absolute top-full left-0 w-56 bg-white border border-gray-100 shadow-xl rounded-b-xl overflow-hidden transition-all duration-300 transform origin-top ${
                      activeDropdown === link.name ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-0 pointer-events-none'
                    }`}
                  >
                    <div className="py-2">
                      {link.subLinks.map((sub) => (
                        <React.Fragment key={sub.name}>
                          {/* If targetId exists, it's a scroll link, otherwise it's a page navigation */}
                          {sub.targetId ? (
                            <button
                              onClick={(e) => {
                                handleNavClick(e, sub.targetId!);
                                handleSubLinkClick();
                              }}
                              className="block w-full text-left px-6 py-3 text-[12px] font-bold text-gray-500 hover:text-wily-blue hover:bg-gray-50 transition-colors uppercase tracking-wider"
                            >
                              {sub.name}
                            </button>
                          ) : (
                            <Link
                              to={sub.path}
                              onClick={handleSubLinkClick}
                              className="block px-6 py-3 text-[12px] font-bold text-gray-500 hover:text-wily-blue hover:bg-gray-50 transition-colors uppercase tracking-wider"
                            >
                              {sub.name}
                            </Link>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {/* Language Switcher Desktop */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-3 py-1.5 rounded-full bg-gray-50 hover:bg-gray-100 text-xs font-bold text-gray-600 border border-gray-200 transition-all"
            >
              <Globe className="w-3 h-3" />
              <span>{language === 'en' ? 'EN' : 'TH'}</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-4">
             {/* Language Switcher Mobile */}
             <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-3 py-1.5 rounded-full bg-gray-50 hover:bg-gray-100 text-xs font-bold text-gray-600 border border-gray-200 transition-all"
            >
              <Globe className="w-3 h-3" />
              <span>{language === 'en' ? 'EN' : 'TH'}</span>
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-500 hover:text-wily-blue focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 animate-in slide-in-from-top duration-300 shadow-xl max-h-[85vh] overflow-y-auto">
          <div className="px-6 py-8 space-y-4">
            {navLinks.map((link) => (
              <div key={link.name} className="space-y-2">
                <button
                  onClick={(e) => handleNavClick(e, link.id)}
                  className="block w-full text-left text-gray-700 hover:text-wily-blue font-bold text-lg tracking-wider py-2"
                >
                  {link.name}
                </button>
                {link.subLinks && (
                  <div className="pl-4 space-y-3 border-l-2 border-gray-100 ml-1">
                    {link.subLinks.map((sub) => (
                      <React.Fragment key={sub.name}>
                        {sub.targetId ? (
                           <button
                             onClick={(e) => handleNavClick(e, sub.targetId!)}
                             className="block w-full text-left text-gray-500 hover:text-wily-blue font-medium text-base tracking-wide py-1"
                           >
                             {sub.name}
                           </button>
                        ) : (
                          <Link
                            to={sub.path}
                            onClick={() => setIsOpen(false)}
                            className="block text-gray-500 hover:text-wily-blue font-medium text-base tracking-wide py-1"
                           >
                            {sub.name}
                          </Link>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;