import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IMAGES } from '../constants/images';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
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

  return (
    <footer className="bg-[#fcfcfc] border-t border-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <button onClick={(e) => handleNavClick(e, 'home')} className="transition-transform hover:scale-105">
            <img 
              src={IMAGES.LOGO} 
              alt="WILY International" 
              className="h-20 w-auto mb-4"
              referrerPolicy="no-referrer"
            />
          </button>
          <p className="text-gray-500 text-sm max-w-md font-medium">
            {t('footer.mission')}
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 border-b border-gray-100 pb-16">
          
          {/* Column 1: Navigation */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-6">{t('footer.navTitle')}</h4>
            <div className="flex flex-col space-y-4">
              <button 
                onClick={(e) => handleNavClick(e, 'home')} 
                className="text-gray-500 hover:text-wily-blue transition-colors text-[13px] font-bold uppercase tracking-widest text-left"
              >
                {t('nav.home')}
              </button>
              
              <div className="flex flex-col space-y-2">
                <button 
                  onClick={(e) => handleNavClick(e, 'services')} 
                  className="text-gray-500 hover:text-wily-blue transition-colors text-[13px] font-bold uppercase tracking-widest text-left"
                >
                  {t('nav.whatWeDo')}
                </button>
                <div className="flex flex-col space-y-1.5 pl-3 border-l border-gray-100 ml-1">
                  <Link to="/temple-donation" className="text-gray-400 hover:text-wily-blue transition-colors text-xs italic font-medium">{t('nav.temple')}</Link>
                  <Link to="/disaster-relief" className="text-gray-400 hover:text-wily-blue transition-colors text-xs italic font-medium">{t('nav.relief')}</Link>
                  <Link to="/rural-outreach" className="text-gray-400 hover:text-wily-blue transition-colors text-xs italic font-medium">{t('nav.rural')}</Link>
                </div>
              </div>

              <button 
                onClick={(e) => handleNavClick(e, 'gallery')} 
                className="text-gray-500 hover:text-wily-blue transition-colors text-[13px] font-bold uppercase tracking-widest text-left"
              >
                {t('nav.gallery')}
              </button>
              
              <div className="flex flex-col space-y-2">
                <button 
                  onClick={(e) => handleNavClick(e, 'collaboration')} 
                  className="text-gray-500 hover:text-wily-blue transition-colors text-[13px] font-bold uppercase tracking-widest text-left"
                >
                  {t('nav.collaboration')}
                </button>
                <div className="flex flex-col space-y-1.5 pl-3 border-l border-gray-100 ml-1">
                  <Link to="/csr" className="text-gray-400 hover:text-wily-blue transition-colors text-xs italic font-medium">{t('nav.csr')}</Link>
                  <Link to="/co-branding" className="text-gray-400 hover:text-wily-blue transition-colors text-xs italic font-medium">{t('nav.cobranding')}</Link>
                  <Link to="/aid-relief-alliance" className="text-gray-400 hover:text-wily-blue transition-colors text-xs italic font-medium">{t('nav.alliance')}</Link>
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <button 
                  onClick={(e) => handleNavClick(e, 'recruitment')} 
                  className="text-gray-500 hover:text-wily-blue transition-colors text-[13px] font-bold uppercase tracking-widest text-left"
                >
                  {t('nav.recruitment')}
                </button>
                 <div className="flex flex-col space-y-1.5 pl-3 border-l border-gray-100 ml-1">
                  <button 
                    onClick={(e) => handleNavClick(e, 'recruitment')} 
                    className="text-left text-gray-400 hover:text-wily-blue transition-colors text-xs italic font-medium"
                  >
                    {t('nav.whyJoin')}
                  </button>
                  <Link to="/career" className="text-gray-400 hover:text-wily-blue transition-colors text-xs italic font-medium">{t('nav.positions')}</Link>
                </div>
              </div>

              <button 
                onClick={(e) => handleNavClick(e, 'contact')} 
                className="text-gray-500 hover:text-wily-blue transition-colors text-[13px] font-bold uppercase tracking-widest text-left"
              >
                {t('nav.contact')}
              </button>
            </div>
          </div>

          {/* Column 2: Contact */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-6">{t('footer.contactTitle')}</h4>
            <div className="space-y-4 text-sm text-gray-500">
              <p className="italic text-gray-400">{t('footer.address')}</p>
              <p className="italic text-gray-400">{t('footer.contactNo')}</p>
              <div className="flex flex-col space-y-1">
                <p className="italic text-gray-400">{t('footer.email')}</p>
                <a href="mailto:enquiries@wilyinternational.com" className="hover:text-wily-blue transition-colors font-medium">enquiries@wilyinternational.com</a>
              </div>
            </div>
          </div>

          {/* Column 3: Follow Us */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-6">{t('footer.followTitle')}</h4>
            <div className="flex items-center space-x-3">
              
              {/* Facebook - bi-facebook */}
              <a href="#" className="transition-transform hover:scale-110">
                <svg className="h-9 w-9" viewBox="0 0 16 16" fill="#1877F2">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>
              </a>

              {/* Instagram - bi-instagram (Scaled inside a gradient circle) */}
              <a href="#" className="transition-transform hover:scale-110">
                <svg className="h-9 w-9" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="footer-insta-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" style={{stopColor:'#f09433'}} />
                      <stop offset="25%" style={{stopColor:'#e6683c'}} />
                      <stop offset="50%" style={{stopColor:'#dc2743'}} />
                      <stop offset="75%" style={{stopColor:'#cc2366'}} />
                      <stop offset="100%" style={{stopColor:'#bc1888'}} />
                    </linearGradient>
                  </defs>
                  <circle cx="12" cy="12" r="12" fill="url(#footer-insta-grad)" />
                  {/* Scaled Bootstrap Icon Path */}
                  <g transform="translate(4, 4) scale(1)">
                    <path fill="white" d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.047-1.096-.047-3.232 0-2.136.009-2.388.047-3.231.036-.78.166-1.203.275-1.485.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                  </g>
                </svg>
              </a>

              {/* TikTok - bi-tiktok (Scaled inside a black circle) */}
              <a href="#" className="transition-transform hover:scale-110">
                 <svg className="h-9 w-9" viewBox="0 0 24 24">
                   <circle cx="12" cy="12" r="12" fill="black" />
                   <g transform="translate(4, 4)">
                     <path fill="white" d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"/>
                   </g>
                 </svg>
              </a>

              {/* Line - Bootstrap Icon (bi-line) inside Circle */}
              <a href="#" className="transition-transform hover:scale-110">
                <svg className="h-9 w-9" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="12" fill="#06c755" />
                  <g transform="translate(4, 4)">
                     <path fill="white" d="M8 0c4.411 0 8 2.912 8 6.492 0 1.433-.555 2.723-1.715 3.994-1.678 1.932-5.431 4.285-6.285 4.645-.83.35-.734-.197-.696-.413l.003-.018.114-.685c.027-.204.055-.521-.026-.723-.09-.223-.444-.339-.704-.395C2.846 12.39 0 9.701 0 6.492 0 2.912 3.59 0 8 0M5.022 7.686H3.497V4.918a.156.156 0 0 0-.155-.156H2.78a.156.156 0 0 0-.156.156v3.486c0 .041.017.08.044.107v.001l.002.002.002.002a.15.15 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157m.791-2.924a.156.156 0 0 0-.156.156v3.486c0 .086.07.155.156.155h.562c.086 0 .155-.07.155-.155V4.918a.156.156 0 0 0-.155-.156zm3.863 0a.156.156 0 0 0-.156.156v2.07L7.923 4.832l-.013-.015v-.001l-.01-.01-.003-.003-.011-.009h-.001L7.88 4.79l-.003-.002-.005-.003-.008-.005h-.002l-.003-.002-.01-.004-.004-.002-.01-.003h-.002l-.003-.001-.009-.002h-.006l-.003-.001h-.004l-.002-.001h-.574a.156.156 0 0 0-.156.155v3.486c0 .086.07.155.156.155h.56c.087 0 .157-.07.157-.155v-2.07l1.6 2.16a.2.2 0 0 0 .039.038l.001.001.01.006.004.002.008.004.007.003.005.002.01.003h.003a.2.2 0 0 0 .04.006h.56c.087 0 .157-.07.157-.155V4.918a.156.156 0 0 0-.156-.156zm3.815.717v-.56a.156.156 0 0 0-.155-.157h-2.242a.16.16 0 0 0-.108.044h-.001l-.001.002-.002.003a.16.16 0 0 0-.044.107v3.486c0 .041.017.08.044.107l.002.003.002.002a.16.16 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156Z"/>
                  </g>
                </svg>
              </a>

              {/* WhatsApp - bi-whatsapp (Standard filled path) */}
              <a href="#" className="transition-transform hover:scale-110">
                 <svg className="h-9 w-9" viewBox="0 0 16 16" fill="#25d366">
                   <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                 </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-10 flex flex-col items-center text-center border-t border-gray-50">
          <p className="text-xs text-gray-400 font-medium tracking-wide">
            {t('footer.copyright').replace('2024', currentYear.toString())}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;