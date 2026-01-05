import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { IMAGES } from '../constants/images';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-base text-wily-blue font-semibold tracking-wide uppercase">{t('contact.tagline')}</h2>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {t('contact.title')}
          </h3>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
        
        <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100">
          <div className="flex flex-col md:flex-row min-h-[600px]">
            
            {/* Left Image Section - 40% Width */}
            <div className="md:w-2/5 relative h-64 md:h-auto">
              <img 
                src={IMAGES.CONTACT_FEATURE}
                alt="Business collaboration" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
            </div>

            {/* Right Form Section - 60% Width */}
            <div className="md:w-3/5 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className="max-w-xl mx-auto w-full">
                
                {/* Internal Form Header */}
                <div className="text-center md:text-left mb-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{t('contact.formHeader')}</h4>
                  <p className="text-gray-500">
                    {t('contact.formSub')}
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-12 bg-green-50 rounded-2xl border border-green-100">
                    <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                      <Send className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{t('contact.successTitle')}</h3>
                    <p className="mt-2 text-gray-500 px-6">{t('contact.successDesc')}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <input
                        type="text"
                        placeholder={t('contact.placeholders.name')}
                        required
                        className="w-full px-5 py-3.5 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-wily-gold/50 focus:border-wily-gold transition-all bg-gray-50/50"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder={t('contact.placeholders.email')}
                        required
                        className="w-full px-5 py-3.5 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-wily-gold/50 focus:border-wily-gold transition-all bg-gray-50/50"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      />
                    </div>
                    <div className="relative">
                      <select
                        required
                        className={`w-full px-5 py-3.5 rounded-xl border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-wily-gold/50 focus:border-wily-gold transition-all appearance-none bg-gray-50/50 ${formState.subject === '' ? 'text-gray-400' : 'text-gray-900'}`}
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      >
                        <option value="" disabled>{t('contact.placeholders.select')}</option>
                        <option value="General Inquiry">{t('contact.subjects.general')}</option>
                        <option value="Partnership">{t('contact.subjects.partnership')}</option>
                        <option value="Volunteering">{t('contact.subjects.volunteering')}</option>
                        <option value="Donation">{t('contact.subjects.donation')}</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                        <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"/>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <textarea
                        placeholder={t('contact.placeholders.message')}
                        rows={4}
                        required
                        className="w-full px-5 py-3.5 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-wily-gold/50 focus:border-wily-gold transition-all bg-gray-50/50 resize-none"
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      ></textarea>
                    </div>
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-4 px-6 border border-transparent rounded-full shadow-lg text-base font-bold text-white bg-wily-gold hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-wily-gold transition-all transform hover:scale-[1.02]"
                      >
                        {t('contact.btn')}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;