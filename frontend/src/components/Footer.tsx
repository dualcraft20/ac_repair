import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/20 pt-stack-lg pb-stack-md relative z-10 text-on-surface-variant text-body-md font-sans">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-12">
        
        {/* Column 1: Brand */}
        <div className="space-y-4 text-left">
          <Link to="/" onClick={handleLinkClick} className="text-headline-sm font-headline-sm font-extrabold text-primary flex items-center gap-2 select-none group">
            <span className="material-symbols-outlined transition-transform group-hover:rotate-45 duration-500" style={{ fontVariationSettings: "'FILL' 1" }}>ac_unit</span>
            <span className="font-display">AC SERVICE UAE</span>
          </Link>
          <p className="pr-4 leading-relaxed text-sm">
            {t('footerDesc')}
          </p>
        </div>

        {/* Column 2: Our Services */}
        <div className="space-y-4 text-left">
          <h4 className="text-headline-sm font-headline-sm text-on-surface font-display font-bold">{t('ourServices')}</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/services?type=residential" onClick={handleLinkClick} className="hover:text-tertiary transition-colors">
                {t('residentialAc')}
              </Link>
            </li>
            <li>
              <Link to="/services?type=commercial" onClick={handleLinkClick} className="hover:text-tertiary transition-colors">
                {t('commercialCooling')}
              </Link>
            </li>
            <li>
              <Link to="/why-us" onClick={handleLinkClick} className="hover:text-tertiary transition-colors">
                {t('whyUs')}
              </Link>
            </li>
            <li>
              <Link to="/services" onClick={handleLinkClick} className="hover:text-tertiary transition-colors">
                {t('maintenancePlans')}
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Legal */}
        <div className="space-y-4 text-left">
          <h4 className="text-headline-sm font-headline-sm text-on-surface font-display font-bold">{t('legal')}</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/contact" onClick={handleLinkClick} className="hover:text-tertiary transition-colors">
                {t('terms')}
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleLinkClick} className="hover:text-tertiary transition-colors">
                {t('privacy')}
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Shortcuts */}
        <div className="space-y-4 text-left">
          <h4 className="text-headline-sm font-headline-sm text-on-surface font-display font-bold">{t('contact')}</h4>
          <p className="text-sm leading-relaxed">
            Dubai, United Arab Emirates
          </p>
          <div className="flex flex-col space-y-2 text-sm">
            <a href="#" className="hover:text-primary transition-colors">{t('callNow')}</a>
            <a href="#" className="hover:text-primary transition-colors">{t('whatsApp')}</a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-outline-variant/10 pt-6 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-semibold">
        <p>© {currentYear} AC SERVICE UAE. {t('rights')}</p>
        <div className="flex gap-4">
          <Link to="/contact" onClick={handleLinkClick} className="hover:underline">Dubai, UAE</Link>
          <span>•</span>
          <Link to="/why-us" onClick={handleLinkClick} className="hover:underline">Atmosphere Elite</Link>
        </div>
      </div>
    </footer>
  );
}
