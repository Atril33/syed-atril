import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToId = location.state?.scrollTo;
    if (scrollToId) {
      const el = document.getElementById(scrollToId);
      if (el) {
        // Smooth scroll
        el.scrollIntoView({ behavior: 'smooth' });
      }

      // Optional: Clear scrollTo state to avoid repeated scrolls
      window.history.replaceState({}, document.title);
    }
  }, [location]);
  return (
    <>
      <Header />
      <Portfolio />
      <About />
      <Contact />
    </>
  );
};

export default Home;
