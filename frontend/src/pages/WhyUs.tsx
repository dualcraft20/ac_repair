import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

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

export default function WhyUs() {
  const { t, language } = useLanguage();

  const credentials = [
    {
      title: t('featureCertified'),
      desc: t('featureCertifiedDesc'),
      icon: 'verified_user',
      color: 'text-secondary bg-secondary/10 border-secondary/20'
    },
    {
      title: t('featureDispatch'),
      desc: t('featureDispatchDesc'),
      icon: 'speed',
      color: 'text-primary-container bg-primary-container/10 border-primary-container/20'
    },
    {
      title: t('featurePricing'),
      desc: t('featurePricingDesc'),
      icon: 'payments',
      color: 'text-tertiary-container bg-tertiary-container/10 border-tertiary-container/20'
    },
    {
      title: t('featureWarranty'),
      desc: t('featureWarrantyDesc'),
      icon: 'history',
      color: 'text-secondary bg-secondary/10 border-secondary/20'
    }
  ];

  const comparisonRows = [
    {
      metric: t('metricSpeed'),
      standard: t('metricSpeedStandard'),
      ourService: t('metricSpeedOur'),
      highlight: true
    },
    {
      metric: t('metricTech'),
      standard: t('metricTechStandard'),
      ourService: t('metricTechOur'),
      highlight: false
    },
    {
      metric: t('metricPricing'),
      standard: t('metricPricingStandard'),
      ourService: t('metricPricingOur'),
      highlight: true
    },
    {
      metric: t('metricParts'),
      standard: t('metricPartsStandard'),
      ourService: t('metricPartsOur'),
      highlight: false
    },
    {
      metric: t('metricWarranty'),
      standard: t('metricWarrantyStandard'),
      ourService: t('metricWarrantyOur'),
      highlight: true
    },
    {
      metric: t('metricAvailability'),
      standard: t('metricAvailabilityStandard'),
      ourService: t('metricAvailabilityOur'),
      highlight: false
    }
  ];

  return (
    <div className="text-on-surface pt-28 pb-16 space-y-20 overflow-x-hidden min-h-screen">
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
        {/* Page Header */}
        <section className="mb-stack-lg text-center">
          <span className="text-primary-container font-label-md text-label-md tracking-[0.2em] uppercase mb-4 block">{t('ourStandard')}</span>
          <h1 className="font-display-lg text-display-lg text-on-surface mb-stack-sm font-display text-white">
            {language === 'ar' ? (
              <>لماذا تثق دبي <span className="text-primary-container">بدقتنا</span></>
            ) : (
              <>Why Dubai Trusts <span className="text-primary-container">Our Precision</span></>
            )}
          </h1>
          <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl mx-auto">
            {t('whyDubaiTrustsSub')}
          </p>
        </section>

        {/* Feature Grid */}
        <motion.section 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-gutter mb-[100px]"
        >
          {credentials.map((item) => (
            <motion.div
              key={item.title}
              variants={revealVariants}
              className="glass-card p-8 rounded-3xl border border-white/5 flex gap-stack-md items-start hover:border-primary-container/20 transition-all duration-300"
            >
              <div className={`w-12 h-12 shrink-0 rounded-full flex items-center justify-center border ${item.color}`}>
                <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
              </div>
              <div className="space-y-2 text-left">
                <h3 className="text-headline-sm font-headline-sm font-display text-white font-bold leading-normal">{item.title}</h3>
                <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.section>

        {/* Comparison Table Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants}
          className="space-y-6 mb-[100px]"
        >
          <div className="text-center max-w-xl mx-auto space-y-2 mb-8">
            <h2 className="text-3xl font-bold text-white font-display">{t('howWeCompare')}</h2>
            <p className="text-on-surface-variant text-sm">
              {t('howWeCompareSub')}
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-outline-variant/10 glass-card">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-high/80 border-b border-outline-variant/10 text-white font-display text-sm font-bold">
                  <th className="p-5 font-bold uppercase tracking-wider text-left">{t('metricHeader')}</th>
                  <th className="p-5 font-bold uppercase tracking-wider text-left">{t('standardHeader')}</th>
                  <th className="p-5 font-bold uppercase tracking-wider text-left text-primary">{t('ourServiceHeader')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10 text-sm">
                {comparisonRows.map((row) => (
                  <tr 
                    key={row.metric} 
                    className={`transition-colors ${
                      row.highlight ? 'bg-white/[0.02]' : 'hover:bg-white/[0.01]'
                    }`}
                  >
                    <td className="p-5 font-semibold text-white text-left">{row.metric}</td>
                    <td className="p-5 text-on-surface-variant text-left">{row.standard}</td>
                    <td className="p-5 text-primary font-bold text-left">{row.ourService}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* Final call to action card */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants}
          className="glass-card rounded-[32px] p-8 md:p-12 border border-white/5 text-center space-y-6 max-w-3xl mx-auto shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary-container/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
          <span className="text-primary font-label-md text-label-md tracking-[0.2em] uppercase block">{language === 'ar' ? 'طلب معاودة اتصال' : 'Schedule Callback'}</span>
          <h2 className="text-3xl font-bold text-white font-display font-bold leading-tight">{t('readyTitle')}</h2>
          <p className="text-on-surface-variant text-sm max-w-xl mx-auto leading-relaxed">
            {t('readySub')}
          </p>
          <div className="pt-4">
            <Link
              to="/contact"
              className="bg-primary-container text-on-primary-container font-bold px-10 py-4 rounded-xl transition duration-200 shadow-md hover:shadow-[0_4px_20px_rgba(255,122,26,0.4)] select-none uppercase tracking-wider text-xs inline-flex items-center gap-2"
              onClick={() => window.scrollTo(0, 0)}
            >
              <span>{t('bookAppointment')}</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
