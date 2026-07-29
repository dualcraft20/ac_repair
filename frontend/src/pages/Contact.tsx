import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import MapEmbed from '../components/MapEmbed';
import { useLanguage } from '../context/LanguageContext';

const revealVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function Contact() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const serviceParam = queryParams.get('service') || '';
  const { t, language } = useLanguage();

  const coverageAreas = language === 'ar' ? [
    'نخلة جميرا',
    'دبي مارينا',
    'قرية جميرا الدائرية',
    'أبراج بحيرات الجميرا',
    'الينابيع والبحيرات',
    'جميرا بارك',
    'وسط مدينة دبي',
    'الخليج التجاري',
    'داماك هيلز',
    'المرابع العربية',
    'جميرا بيتش ريزيدنس',
    'البرشاء'
  ] : [
    'Palm Jumeirah',
    'Dubai Marina',
    'JVC',
    'JLT',
    'Springs & Lakes',
    'Jumeirah Park',
    'Downtown Dubai',
    'Business Bay',
    'Damac Hills',
    'Arabian Ranches',
    'JBR',
    'Al Barsha'
  ];

  return (
    <div className="text-on-surface pt-28 pb-16 space-y-20 overflow-x-hidden min-h-screen">
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
        {/* Header Section */}
        <header className="mb-stack-lg">
          <div className="flex items-center gap-4 mb-2">
            <span className="w-12 h-[2px] bg-primary-container"></span>
            <span className="text-primary-container font-label-md text-label-md tracking-widest uppercase">
              {language === 'ar' ? 'متاحون 24/7 في دبي' : 'Available 24/7 Across Dubai'}
            </span>
          </div>
          <h1 className="font-display-lg text-display-lg text-on-surface mb-stack-sm font-display text-white">
            {language === 'ar' ? 'تواصل معنا' : 'REACH OUT'}
          </h1>
          <p className="text-on-surface-variant font-body-lg text-body-lg max-w-2xl">
            {t('contactSub')}
          </p>
        </header>

        {/* Contact Info cards & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start mb-stack-lg">
          {/* Info cards (Left Column) */}
          <div className="lg:col-span-5 space-y-gutter">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
              className="space-y-6 text-left"
            >
              {/* Call Card */}
              <div className="glass-card p-6 rounded-2xl border-l-4 border-l-primary-container group hover:bg-surface-container-high transition-all duration-300 border-y-white/5 border-r-white/5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-container/10 flex items-center justify-center text-primary-container shrink-0">
                    <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-white mb-1 font-display">{t('callDirectlyCard')}</h3>
                    <p className="text-on-surface-variant font-body-md text-body-md mb-2 leading-relaxed">{t('callDirectlyDesc')}</p>
                    <a className="text-primary-container font-bold text-headline-sm hover:underline font-display tracking-tight" href="#">
                      {t('callNow')}
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="glass-card p-6 rounded-2xl border-l-4 border-l-secondary group hover:bg-surface-container-high transition-all duration-300 border-y-white/5 border-r-white/5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                    <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-white mb-1 font-display">{t('whatsAppSupportCard')}</h3>
                    <p className="text-on-surface-variant font-body-md text-body-md mb-2 leading-relaxed">{t('whatsAppSupportDesc')}</p>
                    <a 
                      className="text-secondary font-bold text-headline-sm hover:underline font-display tracking-tight" 
                      href="#"
                    >
                      {t('whatsApp')}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Active Neighborhoods Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
              className="glass-card p-6 rounded-2xl border border-white/5 space-y-4 text-left"
            >
              <div>
                <h3 className="font-headline-sm text-headline-sm text-white font-display font-bold leading-normal">{t('activeAreas')}</h3>
                <p className="text-xs text-on-surface-variant mt-1">{t('activeAreasSub')}</p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {coverageAreas.map((area) => (
                  <span
                    key={area}
                    className="px-3.5 py-1.5 bg-surface-container-high text-on-surface text-xs font-semibold rounded-full border border-outline-variant/30 transition hover:bg-surface-bright select-none"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Form (Right Column) */}
          <div className="lg:col-span-7">
            <ContactForm initialService={serviceParam} />
          </div>
        </div>

        {/* Map Location Section */}
        <section className="space-y-6">
          <div className="text-left space-y-2 max-w-xl">
            <h2 className="text-2xl font-bold text-white font-display">{t('locationTitle')}</h2>
            <p className="text-on-surface-variant text-sm">
              {language === 'ar' 
                ? 'تفضل بزيارة مركز الصيانة الرئيسي لدينا في دبي للاستشارات الهندسية الكبرى وتوزيع عقود صيانة الفلل.' 
                : 'Visit our primary service office for commercial cooling estimates and corporate dispatch planning.'}
            </p>
          </div>

          <div className="h-[400px] w-full rounded-[24px] overflow-hidden border border-outline-variant/10 shadow-lg">
            <MapEmbed />
          </div>
        </section>

      </main>
    </div>
  );
}
