// src/App.jsx
import React, { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import HeroSection from './sections/HeroSection.jsx';
import AboutSection from './sections/AboutSection.jsx';
import ProjectsSection from './sections/ProjectsSection.jsx';
import SkillsSection from './sections/SkillsSection.jsx';
import ContactSection from './sections/ContactSection.jsx';
import Footer from './components/Footer.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
useEffect(() => {
  AOS.init({
    duration: 1000,
    offset: 80,
    once: true,
    easing: 'ease-out-sine', 
  });
}, []);

  return (
    <div className="font-sans bg-bg-light text-text-on-light min-h-screen flex flex-col antialiased selection:bg-accent-primary selection:text-white"> {/* Lagt til antialiased og selection styling */}
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;