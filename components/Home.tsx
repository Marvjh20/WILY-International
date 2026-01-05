import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from './Hero';
import Services from './Services';
import Contact from './Contact';
import Gallery from './Gallery';
import Collaboration from './Collaboration';
import Recruitment from './Recruitment';
import Partners from './Partners';

const Home: React.FC = () => {
  const { state } = useLocation();

  useEffect(() => {
    if (state && state.targetId) {
      const element = document.getElementById(state.targetId);
      if (element) {
        // Add a small delay to ensure DOM is ready
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [state]);

  return (
    <>
      <Hero />
      <Services />
      <Gallery />
      <Collaboration />
      <Partners />
      <Recruitment />
      <Contact />
    </>
  );
};

export default Home;