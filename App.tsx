import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import TempleDonation from './components/pages/TempleDonation';
import DisasterRelief from './components/pages/DisasterRelief';
import RuralOutreach from './components/pages/RuralOutreach';
import CSR from './components/pages/CSR';
import CoBranding from './components/pages/CoBranding';
import AidReliefAlliance from './components/pages/AidReliefAlliance';
import Career from './components/pages/Career';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <div className="min-h-screen bg-white font-sans text-gray-900">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/temple-donation" element={<TempleDonation />} />
            <Route path="/disaster-relief" element={<DisasterRelief />} />
            <Route path="/rural-outreach" element={<RuralOutreach />} />
            <Route path="/csr" element={<CSR />} />
            <Route path="/co-branding" element={<CoBranding />} />
            <Route path="/aid-relief-alliance" element={<AidReliefAlliance />} />
            <Route path="/career" element={<Career />} />
          </Routes>
          <Footer />
        </div>
      </HashRouter>
    </LanguageProvider>
  );
}

export default App;