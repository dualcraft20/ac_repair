import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import WhyUs from './pages/WhyUs';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import ClickSpark from './components/ClickSpark';
import Galaxy from './components/Galaxy';

function AnimatedRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/why-us" element={<WhyUs />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

function AppContent() {
  const { t } = useLanguage();

  return (
    <ClickSpark sparkColor="#ff7a1a" sparkSize={10} sparkRadius={20} sparkCount={8} duration={400}>
      <div className="flex flex-col min-h-screen bg-background text-on-surface font-sans relative">
        {/* Global Interactive Galaxy Starfield Background */}
        <div className="fixed inset-0 w-full h-full pointer-events-none opacity-30 z-0">
          <Galaxy
            mouseRepulsion
            mouseInteraction
            density={1}
            glowIntensity={0.25}
            saturation={0.0}
            hueShift={140}
            twinkleIntensity={0.3}
            rotationSpeed={0.05}
            repulsionStrength={2}
            autoCenterRepulsion={0}
            starSpeed={0.25}
            speed={0.7}
          />
        </div>

        {/* Sticky Header Navigation */}
        <Navbar />

      {/* Dynamic Route Pages */}
      <main className="flex-grow relative z-10">
        <AnimatedRoutes />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Floating Action CTAs */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3.5 md:hidden">
        {/* WhatsApp */}
        <a
          href="#"
          className="w-14 h-14 bg-[#2ECC71] text-white rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-transform"
          aria-label={t('whatsApp')}
        >
          <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
        </a>

        {/* Call Hotline */}
        <a
          href="#"
          className="w-14 h-14 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-transform"
          aria-label={t('callHotline')}
        >
          <span className="material-symbols-outlined text-[24px] animate-pulse">call</span>
        </a>
      </div>
    </div>
    </ClickSpark>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <AppContent />
      </Router>
    </LanguageProvider>
  );
}
