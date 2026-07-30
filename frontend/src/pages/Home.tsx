import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import Testimonials from '../components/Testimonials';
import { useLanguage } from '../context/LanguageContext';

interface Service {
  id: number;
  name: string;
  icon: string;
  description: string;
}

const revealVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

const DEFAULT_SERVICES = [
  {
    id: 1,
    name: "Central AC Inspection & Diagnostics",
    icon: "Wind",
    description: "Comprehensive diagnostics of central cooling units, duct pressures, and electrical sensors to pinpoint performance issues before they worsen."
  },
  {
    id: 2,
    name: "Filter Cleaning & Replacement",
    icon: "Snowflake",
    description: "Deep washing of filters or premium replacement to optimize cooling efficiency, eliminate dust, and enhance overall indoor air quality."
  },
  {
    id: 3,
    name: "Coil & Duct Cleaning",
    icon: "ShieldCheck",
    description: "Deep chemical cleaning of condenser coils and duct sterilization to prevent bacterial/mold build-up in Dubai's humid seasons."
  },
  {
    id: 4,
    name: "Thermostat & Electrical Check",
    icon: "Clock",
    description: "Recalibration of smart/digital thermostats and thorough inspection of relays, capacitors, and power lines to prevent electrical short-circuits."
  },
  {
    id: 5,
    name: "Refrigerant Level Inspection & Refill",
    icon: "Wrench",
    description: "Pressure testing for gas leaks, pipe sealing, and environment-friendly R410A/R22 refrigerant top-ups to restore maximum cooling power."
  }
];

export default function Home() {
  const [services, setServices] = useState<Service[]>(DEFAULT_SERVICES);
  const [loading, setLoading] = useState(false);
  const { t, language } = useLanguage();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('/api/services');
        if (response.data && response.data.length > 0) {
          setServices(response.data);
        }
      } catch (err) {
        console.warn('Backend API offline, using built-in services backup:', err);
      }
    };
    fetchServices();
  }, []);

  const whyChooseUsData = [
    {
      title: t('featureCertified'),
      desc: t('featureCertifiedDesc'),
      icon: 'verified_user',
      color: 'text-secondary bg-secondary/20'
    },
    {
      title: t('featureDispatch'),
      desc: t('featureDispatchDesc'),
      icon: 'speed',
      color: 'text-primary-container bg-primary-container/20'
    },
    {
      title: t('featurePricing'),
      desc: t('featurePricingDesc'),
      icon: 'payments',
      color: 'text-tertiary-container bg-tertiary-container/20'
    },
    {
      title: t('featureWarranty'),
      desc: t('featureWarrantyDesc'),
      icon: 'history',
      color: 'text-secondary bg-secondary/20'
    }
  ];

  const coverageAreas = language === 'ar' ? [
    'نخلة جميرا',
    'دبي مارينا',
    'وسط مدينة دبي',
    'الخليج التجاري',
    'أبراج بحيرات الجميرا',
    'المرابع العربية',
    'جميرا بارك',
    'قرية جميرا الدائرية',
    'البرشاء',
    'الينابيع والبحيرات'
  ] : [
    'Palm Jumeirah',
    'Dubai Marina',
    'Downtown Dubai',
    'Business Bay',
    'JLT',
    'Arabian Ranches',
    'Jumeirah Park',
    'JVC',
    'Al Barsha',
    'Springs & Lakes'
  ];

  // Helper function to dynamically translate API service names & description
  const getTranslatedService = (name: string, description: string) => {
    if (language === 'ar') {
      const lowerName = name.toLowerCase();
      if (lowerName.includes('repair')) {
        return {
          name: 'تصليح التكييف',
          description: 'إصلاح سريع وشامل لأعطال الضواغط وتسريب الفريون وضوضاء الوحدات بأيدي مهندسين مختصين.'
        };
      }
      if (lowerName.includes('install') || lowerName.includes('replacement')) {
        return {
          name: 'تركيب مكيفات جديدة',
          description: 'تركيب وتجديد أنظمة التكييف والتهوية بنسب كفاءة عالية وضمان معتمد.'
        };
      }
      if (lowerName.includes('duct') || lowerName.includes('cleaning')) {
        return {
          name: 'تنظيف مجاري الهواء',
          description: 'تعقيم وتنظيف شامل لمجاري التكييف وإزالة الأتربة والبكتيريا لضمان هواء نقي وصحي.'
        };
      }
      if (lowerName.includes('thermostat') || lowerName.includes('smart')) {
        return {
          name: 'تركيب الثرموستات الذكي',
          description: 'تحسين استهلاك الطاقة بتركيب وبرمجة أجهزة ضبط الحرارة الذكية (نست، هانيويل).'
        };
      }
      if (lowerName.includes('maintenance') || lowerName.includes('plan')) {
        return {
          name: 'خطط الصيانة الوقائية',
          description: 'عقود صيانة سنوية للفلل والشركات تشمل الفحص الدوري وتأمين قطع الغيار الأصلية.'
        };
      }
      if (lowerName.includes('sanitization') || lowerName.includes('hygiene')) {
        return {
          name: 'تعقيم وتطهير المكيفات',
          description: 'القضاء على الفطريات والروائح الكريهة في مرشحات وملفات التكييف بأحدث المواد الطبية.'
        };
      }
      if (lowerName.includes('coil')) {
        return {
          name: 'تنظيف مكثفات التكييف',
          description: 'تنظيف وغسيل ملفات المكثف لزيادة قدرة التبريد وتقليل استهلاك تيار الكهرباء.'
        };
      }
    }
    return { name, description };
  };

  return (
    <div className="text-on-surface overflow-x-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Stats Bar */}
      <section className="bg-surface-container-high py-10 relative z-10 border-y border-outline-variant/10">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-2 md:grid-cols-4 gap-stack-lg md:gap-gutter">
          <div className="flex flex-col items-center md:items-start space-y-1">
            <span className="text-primary-container text-[40px] font-bold font-display leading-none">{language === 'ar' ? '٤.٩' : '4.9'}</span>
            <span className="text-on-surface-variant text-label-md font-label-md uppercase tracking-widest">{language === 'ar' ? 'تقييم جوجل' : 'Google Rating'}</span>
          </div>
          <div className="flex flex-col items-center md:items-start space-y-1 border-l border-outline-variant/10 pl-6 md:pl-0">
            <span className="text-primary-container text-[40px] font-bold font-display leading-none">{language === 'ar' ? '١٥ ألف+' : '15k+'}</span>
            <span className="text-on-surface-variant text-label-md font-label-md uppercase tracking-widest">{language === 'ar' ? 'عميل سعيد' : 'Happy Clients'}</span>
          </div>
          <div className="flex flex-col items-center md:items-start space-y-1 border-t border-t-outline-variant/10 pt-4 md:border-t-0 md:pt-0 md:border-l border-outline-variant/10 md:pl-6">
            <span className="text-primary-container text-[40px] font-bold font-display leading-none">{language === 'ar' ? '٦٠ دقيقة' : '60m'}</span>
            <span className="text-on-surface-variant text-label-md font-label-md uppercase tracking-widest">{language === 'ar' ? 'سرعة الوصول' : 'Avg. Arrival'}</span>
          </div>
          <div className="flex flex-col items-center md:items-start space-y-1 border-t border-t-outline-variant/10 pt-4 md:border-t-0 md:pt-0 border-l border-outline-variant/10 pl-6 md:pl-6">
            <span className="text-primary-container text-[40px] font-bold font-display leading-none">{language === 'ar' ? '٨٥+' : '85+'}</span>
            <span className="text-on-surface-variant text-label-md font-label-md uppercase tracking-widest">{language === 'ar' ? 'مهندس مختص' : 'Expert Techs'}</span>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-stack-lg bg-background">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center space-y-stack-sm mb-stack-lg">
            <h2 className="text-display-lg-mobile md:text-display-lg font-display text-on-surface">
              {language === 'ar' ? (
                <>خدمات التكييف <span className="text-primary-container">الدقيقة</span></>
              ) : (
                <>Precision Cooling <span className="text-primary-container">Services</span></>
              )}
            </h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl mx-auto">
              {t('servicesSub')}
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="h-8 w-8 border-2 border-primary-container border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-gutter"
            >
              {/* Featured Card */}
              {services.length > 0 && (() => {
                const trans = getTranslatedService(services[0].name, services[0].description);
                return (
                  <motion.div
                    variants={revealVariants}
                    className="glass-card p-8 rounded-3xl group hover:-translate-y-2 transition-all duration-300 md:col-span-2 flex flex-col md:flex-row gap-6 md:items-center justify-between border border-white/5 shadow-xl"
                  >
                    <div className="space-y-4 md:max-w-xl text-left">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-tertiary-container/10 flex items-center justify-center text-tertiary-container shrink-0">
                          <span className="material-symbols-outlined text-[28px]">ac_unit</span>
                        </div>
                        <span className="px-3 py-1 bg-primary-container/15 text-primary-container text-[10px] font-bold rounded-full border border-primary-container/20 uppercase tracking-widest animate-pulse">
                          {t('featuredServiceLabel')}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white font-display">
                        {trans.name}
                      </h3>
                      <p className="text-body-md text-on-surface-variant leading-relaxed">
                        {trans.description}
                      </p>
                    </div>
                    <div className="shrink-0 pt-4 md:pt-0">
                      <Link
                        to={`/services#service-${services[0].id}`}
                        className="bg-primary-container text-on-primary-container font-bold px-8 py-3.5 rounded-xl transition duration-200 shadow-md hover:shadow-[0_4px_20px_rgba(255,122,26,0.4)] flex items-center justify-center gap-2 select-none uppercase tracking-wider text-xs whitespace-nowrap"
                      >
                        <span>{t('bookService')}</span>
                        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                      </Link>
                    </div>
                  </motion.div>
                );
              })()}

              {/* Standard Cards */}
              {services.slice(1, 5).map((service) => {
                const trans = getTranslatedService(service.name, service.description);
                return (
                  <ServiceCard
                    key={service.id}
                    id={service.id}
                    name={trans.name}
                    icon={service.icon}
                    description={trans.description}
                  />
                );
              })}
            </motion.div>
          )}

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="border border-outline-variant/30 text-on-surface px-8 py-3 rounded-xl font-bold hover:bg-white/5 transition-colors select-none inline-flex items-center gap-2"
              onClick={() => window.scrollTo(0, 0)}
            >
              <span>{t('viewAllServices')}</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-stack-lg bg-surface-container-lowest border-y border-outline-variant/10">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-stack-lg items-center">
          
          <div className="lg:col-span-5 space-y-stack-md text-left">
            <h2 className="text-display-lg-mobile md:text-display-lg font-display text-on-surface leading-tight">
              {language === 'ar' ? (
                <>لماذا يثق سكان دبي <br /> <span className="text-primary-container">بدقتنا؟</span></>
              ) : (
                <>Why Dubai Trusts <br /> <span className="text-primary-container">Our Precision</span></>
              )}
            </h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant leading-relaxed">
              {t('whyUsSub')}
            </p>
            <div className="pt-stack-md">
              <Link 
                to="/why-us"
                className="border border-outline-variant/30 text-on-surface px-8 py-3 rounded-xl font-bold hover:bg-white/5 transition-colors inline-block"
                onClick={() => window.scrollTo(0, 0)}
              >
                {t('exploreMethod')}
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-stack-md text-left">
            {whyChooseUsData.map((feature) => (
              <div key={feature.title} className="flex gap-stack-md items-start p-6 rounded-2xl glass-card border border-white/5">
                <div className={`w-12 h-12 shrink-0 rounded-full ${feature.color} flex items-center justify-center`}>
                  <span className="material-symbols-outlined">{feature.icon}</span>
                </div>
                <div>
                  <h4 className="text-headline-sm font-headline-sm font-display text-white mb-1">{feature.title}</h4>
                  <p className="text-body-md font-body-md text-on-surface-variant leading-normal">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Testimonials section */}
      <section className="py-stack-lg bg-background overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center mb-stack-lg">
          <h2 className="text-headline-md font-headline-md text-primary-container mb-2 tracking-widest uppercase">{language === 'ar' ? 'قصص النجاح' : 'Client Stories'}</h2>
          <h3 className="text-display-lg font-display text-on-surface leading-tight">{t('testimonialsSub')}</h3>
        </div>

        <div className="relative w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <Testimonials />
        </div>
      </section>

      {/* Neighborhood Marquee */}
      <section className="py-8 bg-gradient-to-r from-surface-container-low via-tertiary-container/10 to-surface-container-low border-y border-outline-variant/10 overflow-hidden relative pointer-events-none select-none">
        <div className="marquee-container">
          <div className="marquee-content font-display font-extrabold uppercase tracking-[0.2em] text-xs sm:text-sm">
            {/* First loop */}
            {coverageAreas.map((area) => (
              <span key={area} className="flex items-center shrink-0">
                <span className="text-on-surface-variant/50">{area}</span>
                <span className="text-primary/45 mx-8">•</span>
              </span>
            ))}
            {/* Second loop for seamless scrolling */}
            {coverageAreas.map((area) => (
              <span key={`${area}_dup`} className="flex items-center shrink-0">
                <span className="text-on-surface-variant/50">{area}</span>
                <span className="text-primary/45 mx-8">•</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-stack-lg relative overflow-hidden">
        {/* Background base */}
        <div className="absolute inset-0 bg-primary-container"></div>
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        
        <div className="relative w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row items-center justify-between gap-stack-lg text-on-primary-container">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-display-lg-mobile md:text-display-lg font-display text-on-primary-container leading-none">
              {language === 'ar' ? 'لا تعانِ من حرارة الصيف.' : 'Don\'t Suffer in the Heat.'}
            </h2>
            <p className="text-headline-sm font-headline-sm text-on-primary-container/90">
              {language === 'ar' ? 'فريق صيانة التكييف المعتمد على بعد نقرة واحدة.' : 'Expert AC dispatch is just a click away.'}
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-stack-md shrink-0">
            <a
              href="#"
              className="bg-surface text-on-surface h-[64px] px-10 rounded-2xl font-bold text-label-md flex items-center justify-center gap-3 hover:scale-105 transition-transform shadow-2xl select-none"
            >
              <span className="material-symbols-outlined">call</span>
              <span>{t('callHotline')}</span>
            </a>
            <a
              href="#"
              className="bg-secondary-container text-on-secondary-container h-[64px] px-10 rounded-2xl font-bold text-label-md flex items-center justify-center gap-3 hover:scale-105 transition-transform shadow-2xl select-none"
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
              <span>{t('whatsAppInquiry')}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
