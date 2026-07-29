import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: t('home'), path: '/' },
    { name: t('services'), path: '/services' },
    { name: t('whyUs'), path: '/why-us' },
    { name: t('aboutUs'), path: '/about' },
    { name: t('contact'), path: '/contact' }
  ];

  return (
    <header className="bg-surface-container shadow-md fixed top-0 left-0 right-0 z-50 border-b border-outline-variant/10">
      <nav className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
        {/* Logo wordmark */}
        <Link to="/" className="text-headline-sm font-headline-sm font-bold text-on-surface flex items-center gap-2 select-none group">
          <span className="material-symbols-outlined text-primary-container transition-transform group-hover:rotate-45 duration-500" style={{ fontVariationSettings: "'FILL' 1" }}>ac_unit</span>
          <span className="font-display tracking-tight">AC SERVICE UAE</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path || (link.path.startsWith('/contact?service=') && location.search.includes('service='));
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`transition-colors font-label-md text-label-md ${
                  isActive 
                    ? 'text-primary border-b-2 border-primary pb-1' 
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-stack-sm">
          {/* Language Toggle Button */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
            className="text-on-surface-variant hover:text-on-surface text-sm font-bold flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-white/5 border border-outline-variant/20 transition-colors uppercase tracking-wider font-display select-none mr-2"
          >
            <span className="material-symbols-outlined text-[18px]">language</span>
            <span>{language === 'en' ? 'العربية' : 'English'}</span>
          </button>

          <a
            href="#"
            className="bg-primary-container text-on-primary-container font-label-md text-label-md px-6 py-2.5 rounded-lg font-bold hover:brightness-110 active:scale-95 transition-all shadow-md flex items-center gap-2 select-none"
          >
            <span className="material-symbols-outlined text-[18px]">call</span>
            <span>{t('callNow')}</span>
          </a>
          <a
            href="#"
            className="bg-[#2ECC71] text-white font-label-md text-label-md px-6 py-2.5 rounded-lg font-bold hover:brightness-110 active:scale-95 transition-all shadow-md flex items-center gap-2 select-none"
          >
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
            <span>{t('whatsApp')}</span>
          </a>
        </div>

        {/* Mobile controls */}
        <div className="lg:hidden flex items-center gap-2">
          {/* Language Toggle */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
            className="text-on-surface-variant hover:text-on-surface text-xs font-bold flex items-center gap-1 px-2.5 py-1.5 rounded-lg hover:bg-white/5 border border-outline-variant/20 transition-colors uppercase select-none"
          >
            <span className="material-symbols-outlined text-[16px]">language</span>
            <span>{language === 'en' ? 'العربية' : 'EN'}</span>
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 focus:outline-none text-on-surface hover:text-primary transition-colors flex items-center"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {isOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-surface-container border-t border-outline-variant/10 py-3 absolute left-0 w-full shadow-lg">
          <div className="px-4 pt-2 pb-3 space-y-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || (link.path.startsWith('/contact?service=') && location.search.includes('service='));
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-4 py-2 rounded-lg text-sm font-bold tracking-wide uppercase transition-colors ${
                    isActive 
                      ? 'bg-primary-container/10 text-primary font-bold border-l-4 border-l-primary' 
                      : 'text-on-surface-variant hover:bg-white/5 hover:text-on-surface'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          <div className="px-8 py-4 flex flex-col space-y-2 border-t border-outline-variant/10">
            <a
              href="#"
              className="bg-primary-container text-on-primary-container text-center py-3 rounded-lg font-bold text-xs flex items-center justify-center gap-2 shadow uppercase tracking-wider"
            >
              <span className="material-symbols-outlined text-sm">call</span>
              <span>{t('callNow')}</span>
            </a>
            <a
              href="#"
              className="bg-[#2ECC71] text-white text-center py-3 rounded-lg font-bold text-xs flex items-center justify-center gap-2 shadow uppercase tracking-wider"
            >
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
              <span>{t('whatsApp')}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
