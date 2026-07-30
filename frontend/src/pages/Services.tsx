import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const materialIconMap: Record<string, string> = {
  Wind: 'air',
  Snowflake: 'ac_unit',
  ShieldCheck: 'verified_user',
  Clock: 'schedule',
  Wrench: 'build'
};

interface Service {
  id: number;
  name: string;
  icon: string;
  description: string;
  residential: boolean;
  commercial: boolean;
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

const DEFAULT_SERVICES_ALL = [
  {
    id: 1,
    name: "Central AC Inspection & Diagnostics",
    icon: "Wind",
    description: "Comprehensive diagnostics of central cooling units, duct pressures, and electrical sensors to pinpoint performance issues before they worsen.",
    residential: true,
    commercial: true
  },
  {
    id: 2,
    name: "Filter Cleaning & Replacement",
    icon: "Snowflake",
    description: "Deep washing of filters or premium replacement to optimize cooling efficiency, eliminate dust, and enhance overall indoor air quality.",
    residential: true,
    commercial: true
  },
  {
    id: 3,
    name: "Coil & Duct Cleaning",
    icon: "ShieldCheck",
    description: "Deep chemical cleaning of condenser coils and duct sterilization to prevent bacterial/mold build-up in Dubai's humid seasons.",
    residential: true,
    commercial: true
  },
  {
    id: 4,
    name: "Thermostat & Electrical Check",
    icon: "Clock",
    description: "Recalibration of smart/digital thermostats and thorough inspection of relays, capacitors, and power lines to prevent electrical short-circuits.",
    residential: true,
    commercial: true
  },
  {
    id: 5,
    name: "Refrigerant Level Inspection & Refill",
    icon: "Wrench",
    description: "Pressure testing for gas leaks, pipe sealing, and environment-friendly R410A/R22 refrigerant top-ups to restore maximum cooling power.",
    residential: true,
    commercial: false
  },
  {
    id: 6,
    name: "Preventive Maintenance Contracts",
    icon: "ShieldCheck",
    description: "Customized annual maintenance packages for villas, apartments, and commercial facilities ensuring regular check-ups and zero call-out charges.",
    residential: true,
    commercial: true
  },
  {
    id: 7,
    name: "24/7 Emergency AC Repair",
    icon: "Clock",
    description: "Immediate response for sudden cooling breakdowns in peak summer heat. Rapid dispatch of certified HVAC technicians day or night.",
    residential: true,
    commercial: true
  },
  {
    id: 8,
    name: "AC Installation & Replacement",
    icon: "Wrench",
    description: "Hassle-free replacement of aged central AC units with high-efficiency, energy-saving models. Full installation warranty included.",
    residential: true,
    commercial: true
  },
  {
    id: 9,
    name: "Minor Electrical & Plumbing Support",
    icon: "Wrench",
    description: "Ancillary support for drain pipe blockages, overflow tray piping, and basic electrical breaker fixes integrated with your AC unit.",
    residential: false,
    commercial: true
  }
];

export default function Services() {
  const [services, setServices] = useState<Service[]>(DEFAULT_SERVICES_ALL);
  const [loading, setLoading] = useState(false);
  const [filterType, setFilterType] = useState<'all' | 'residential' | 'commercial'>('all');
  const navigate = useNavigate();
  const { language } = useLanguage();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('/api/services');
        if (response.data && response.data.length > 0) {
          setServices(response.data);
        }
      } catch (err) {
        console.warn('Backend API offline, using built-in services catalog backup:', err);
      }
    };
    fetchServices();
  }, []);

  const handleBookService = (serviceName: string) => {
    navigate(`/contact?service=${encodeURIComponent(serviceName)}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredServices = services.filter((s) => {
    if (filterType === 'all') return true;
    if (filterType === 'residential') return s.residential;
    if (filterType === 'commercial') return s.commercial;
    return true;
  });

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
    <div className="text-on-surface pt-28 pb-16 space-y-20 overflow-x-hidden min-h-screen">
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
        {/* Header & Filters */}
        <section className="mb-stack-lg text-center">
          <span className="text-primary-container font-label-md text-label-md tracking-[0.2em] uppercase mb-4 block">
            {language === 'ar' ? 'حلول تكييف معتمدة' : 'Expert HVAC Solutions'}
          </span>
          <h1 className="font-display-lg text-display-lg text-on-surface mb-stack-sm font-display text-white">
            {language === 'ar' ? 'حلول التبريد المتكاملة' : 'Expert Cooling Solutions'}
          </h1>
          <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl mx-auto mb-stack-md">
            {language === 'ar' 
              ? 'خدمات تكييف دقيقة مصممة لتناسب مناخ دولة الإمارات الفريد والمتميز بالحرارة العالية. صيانة سريعة، موثوقة، واحترافية.' 
              : 'Precision HVAC services tailored for the unique climate of the UAE. Reliable, fast, and professional.'}
          </p>
          
          {/* Toggle buttons */}
          <div className="flex justify-center gap-stack-sm flex-wrap mt-6">
            <button
              onClick={() => setFilterType('all')}
              className={`px-8 py-2.5 rounded-full font-label-md transition-all select-none ${
                filterType === 'all'
                  ? 'bg-primary-container text-on-primary-container shadow-lg font-bold'
                  : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-bright border border-outline-variant/30 font-semibold'
              }`}
            >
              {language === 'ar' ? 'جميع الخدمات' : 'All Services'}
            </button>
            <button
              onClick={() => setFilterType('residential')}
              className={`px-8 py-2.5 rounded-full font-label-md transition-all select-none ${
                filterType === 'residential'
                  ? 'bg-primary-container text-on-primary-container shadow-lg font-bold'
                  : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-bright border border-outline-variant/30 font-semibold'
              }`}
            >
              {language === 'ar' ? 'الخدمات السكنية' : 'Residential'}
            </button>
            <button
              onClick={() => setFilterType('commercial')}
              className={`px-8 py-2.5 rounded-full font-label-md transition-all select-none ${
                filterType === 'commercial'
                  ? 'bg-primary-container text-on-primary-container shadow-lg font-bold'
                  : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-bright border border-outline-variant/30 font-semibold'
              }`}
            >
              {language === 'ar' ? 'الخدمات التجارية' : 'Commercial'}
            </button>
          </div>
        </section>

        {/* Services Grid */}
        <section className="bg-transparent">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="h-8 w-8 border-2 border-primary-container border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter mb-[80px]"
            >
              {filteredServices.map((service, index) => {
                const materialIcon = materialIconMap[service.icon] || 'build';
                const isRepair = service.name.toLowerCase().includes('repair') || service.name.toLowerCase().includes('electrical');
                const isFeatured = index === 0;
                const trans = getTranslatedService(service.name, service.description);

                return (
                  <motion.div
                    key={service.id}
                    id={`service-${service.id}`}
                    variants={revealVariants}
                    whileHover={{ y: -6 }}
                    className={`glass-card p-6 rounded-3xl group hover:border-primary-container/30 transition-all duration-300 border border-white/5 flex flex-col justify-between ${
                      isFeatured ? 'lg:col-span-2 lg:flex-row gap-6 items-center' : ''
                    }`}
                  >
                    <div className={`space-y-6 ${isFeatured ? 'lg:max-w-xl text-left w-full' : ''}`}>
                      <div className="flex justify-between items-start">
                        <div className="w-12 h-12 rounded-full bg-tertiary-container/15 flex items-center justify-center text-tertiary-container shrink-0">
                          <span className="material-symbols-outlined text-[28px]">{materialIcon}</span>
                        </div>
                        <div className="flex gap-2 select-none">
                          {isFeatured && (
                            <span className="px-3 py-1 bg-primary-container/15 text-primary-container text-[10px] font-bold rounded-full border border-primary-container/20 uppercase tracking-widest animate-pulse">
                              {language === 'ar' ? 'خيار مميز' : 'Featured Option'}
                            </span>
                          )}
                          {service.residential && (
                            <span className="px-3 py-1 bg-surface-variant/50 text-on-surface-variant text-caption rounded-full border border-outline-variant/20 uppercase tracking-wider font-semibold">
                              {language === 'ar' ? 'منزلي' : 'Home'}
                            </span>
                          )}
                          {service.commercial && (
                            <span className="px-3 py-1 bg-surface-variant/50 text-on-surface-variant text-caption rounded-full border border-outline-variant/20 uppercase tracking-wider font-semibold">
                              {language === 'ar' ? 'تجاري' : 'Office'}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2 text-left">
                        <h3 className="font-headline-sm text-headline-sm text-white font-display font-bold leading-normal">{trans.name}</h3>
                        <p className="text-body-md text-on-surface-variant leading-relaxed">{trans.description}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => handleBookService(service.name)}
                      className={`bg-primary-container text-on-primary-container py-3 rounded-xl font-label-md font-bold hover:shadow-[0_4px_20px_rgba(255,122,26,0.4)] transition-all flex items-center justify-center gap-2 select-none uppercase tracking-wider text-xs ${
                        isFeatured ? 'w-full lg:w-auto lg:px-8 mt-6 lg:mt-0 shrink-0' : 'w-full mt-8'
                      }`}
                    >
                      <span>{isRepair ? (language === 'ar' ? 'احجز التصليح' : 'Book Repair') : (language === 'ar' ? 'اطلب سعراً' : 'Request Quote')}</span>
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </button>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </section>
      </main>
    </div>
  );
}
