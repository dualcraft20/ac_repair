import React from 'react';
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

export default function About() {
  const { t, language } = useLanguage();

  const steps = [
    {
      num: language === 'ar' ? '٠١' : '01',
      title: language === 'ar' ? 'حجز موعد الاتصال' : 'Schedule Callback',
      desc: language === 'ar' ? 'تواصل مع فريقنا عبر الهاتف أو الواتساب في أي وقت. حدد موقعك وتفاصيل عطل التكييف.' : 'Reach out to our team via Call or WhatsApp at any hour. Provide your location and cooling issue details.',
      icon: 'phone_in_talk',
      color: 'bg-[#ff7a1a]/10 text-primary-container'
    },
    {
      num: language === 'ar' ? '٠٢' : '02',
      title: language === 'ar' ? 'تشخيص وإرسال فني' : 'Diagnostics Dispatch',
      desc: language === 'ar' ? 'يصل مهندس التكييف المعتمد في سيارة صيانة مجهزة لتحديد تسريب الغاز، فحص المكثف، وأعطال لوحة التحكم.' : 'A certified AC technician arrives in a mobile van to trace electrical faults, gas leaks, and coil dust.',
      icon: 'assignment',
      color: 'bg-[#4ae183]/10 text-secondary'
    },
    {
      num: language === 'ar' ? '٠٣' : '03',
      title: language === 'ar' ? 'عرض السعر الثابت' : 'Upfront Proposal',
      desc: language === 'ar' ? 'نقدم لك كشفاً وتفصيلاً للأسعار الثابتة قبل بدء التصليح. لا نبدأ بالعمل إلا بعد موافقتك على القيمة.' : 'We present a fixed-rate quote explaining the necessary fixes. Work only starts after you approve the estimate.',
      icon: 'description',
      color: 'bg-[#46a6f8]/10 text-tertiary-container'
    },
    {
      num: language === 'ar' ? '٠٤' : '04',
      title: language === 'ar' ? 'تصليح في نفس اليوم' : 'Same-Day Repair',
      desc: language === 'ar' ? 'نقوم بإصلاح العطل باستخدام قطع غيار أصلية، وتنظيف المرشحات، وتعقيم الوحدة، والتأكد من قوة وجودة تدفق الهواء.' : 'Using genuine OEM parts, we fix the cooling, clean filters, sanitize surrounding areas, and confirm airflow performance.',
      icon: 'build',
      color: 'bg-white/5 text-on-surface'
    }
  ];

  const badges = [
    { 
      title: language === 'ar' ? 'شركة تكييف مرخصة' : 'Licensed HVAC Firm', 
      desc: language === 'ar' ? 'ملتزمون بكافة القوانين المحلية وإرشادات السلامة البلدية.' : 'Compliant with local municipal laws and safety regulations.', 
      icon: 'badge' 
    },
    { 
      title: language === 'ar' ? 'تأمين كامل للموقع' : 'Fully Insured Team', 
      desc: language === 'ar' ? 'حماية تامة لممتلكاتك أو فيلتك أثناء أعمال الصيانة والتصليح.' : 'Protects your villa or commercial assets during maintenance tasks.', 
      icon: 'shield' 
    },
    { 
      title: language === 'ar' ? 'قطع غيار أصلية ١٠٠%' : '100% Genuine Spares', 
      desc: language === 'ar' ? 'نستخدم فقط مكثفات ومحركات ومصافي هواء أصلية كلياً.' : 'We only use OEM capacitors, fan motors, and quality filters.', 
      icon: 'verified' 
    },
    { 
      title: language === 'ar' ? 'دعم متواصل ٢٤/٧' : '24/7/365 Support', 
      desc: language === 'ar' ? 'مستعدون لإرسال طواقم الصيانة في العطلات الأسبوعية والرسمية.' : 'Uninterrupted assistance, including weekend and holiday dispatches.', 
      icon: 'support_agent' 
    }
  ];

  return (
    <div className="text-on-surface pt-28 pb-16 space-y-20 overflow-x-hidden min-h-screen">
      {/* Page Header */}
      <section className="pt-24 pb-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
        <span className="text-primary-container font-label-md text-label-md tracking-[0.2em] uppercase mb-4 block">{t('aboutHeaderSub')}</span>
        <h1 className="font-display-lg text-display-lg mb-6 leading-tight max-w-3xl mx-auto font-display text-white">
          {language === 'ar' ? (
            <>هندسة مناخ مثالي في <span className="text-primary-container">صحراء الإمارات</span></>
          ) : (
            <>Engineering Perfect Climates in the <span className="text-primary-container">UAE Desert</span></>
          )}
        </h1>
        <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl mx-auto">
          {t('aboutHeaderDesc')}
        </p>
      </section>

      {/* Our Story */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
        className="py-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-stack-lg items-center">
          
          <div className="lg:col-span-7 space-y-6 text-left">
            <h2 className="font-headline-md text-display-lg text-white font-display">{t('decadeTitle')}</h2>
            <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
              {t('decadeDesc1')}
            </p>
            <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
              {t('decadeDesc2')}
            </p>
            <div className="pt-4">
              <div className="flex items-center gap-4 text-secondary">
                <span className="material-symbols-outlined text-[32px]">verified_user</span>
                <span className="font-headline-sm text-headline-sm font-display text-secondary">{language === 'ar' ? 'مرخص ومعتمد من بلدية دبي' : 'ISO Certified & Licensed'}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual photo card with overlapping pull-quote */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="relative mx-auto max-w-[360px] lg:max-w-none">
              <div className="absolute -inset-2 bg-primary-container/5 rounded-3xl blur-2xl opacity-30 pointer-events-none"></div>
              
              <div className="glass-card p-2 rounded-2xl border border-white/10 shadow-xl">
                <img
                  src="/images/ductwork.png"
                  alt="Duct cleaning and ventilation sanitization"
                  className="rounded-xl w-full object-cover aspect-[4/3] max-h-[340px] opacity-90"
                />
              </div>

              {/* Overlapping Pull-Quote Badge - Custom Designed Touch */}
              <div className="absolute -bottom-6 -left-6 max-w-[240px] glass-card p-4 rounded-xl border border-white/15 shadow-2xl hidden sm:block transform hover:-translate-y-0.5 transition-transform">
                <p className="text-xs italic leading-relaxed text-white font-display">
                  {t('factoidDesc')}
                </p>
                <p className="text-[10px] text-primary-container uppercase font-bold tracking-widest mt-2">
                  {t('factoidSource')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Stats Row */}
      <section className="bg-surface-container-high py-12 my-12 border-y border-outline-variant/10 relative z-10">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-[40px] md:text-5xl text-primary font-display font-extrabold mb-1">{language === 'ar' ? '١٢+' : '12+'}</div>
              <div className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">{t('yearsExp')}</div>
            </div>
            <div className="text-center border-l border-outline-variant/10">
              <div className="text-[40px] md:text-5xl text-primary font-display font-extrabold mb-1">{language === 'ar' ? '٢٥ ألف+' : '25k+'}</div>
              <div className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">{t('jobsCompleted')}</div>
            </div>
            <div className="text-center border-l border-outline-variant/10">
              <div className="text-[40px] md:text-5xl text-primary font-display font-extrabold mb-1">{language === 'ar' ? '٨٥+' : '85+'}</div>
              <div className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">{t('activeEngineers')}</div>
            </div>
            <div className="text-center border-l border-outline-variant/10">
              <div className="text-[40px] md:text-5xl text-primary font-display font-extrabold mb-1">{language === 'ar' ? '٩٩٪' : '99%'}</div>
              <div className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">{t('satisfactionRate')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Details Section */}
      <section className="py-stack-md px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center space-y-2 mb-stack-lg">
          <h2 className="text-headline-md font-headline-md text-primary-container tracking-widest uppercase">{t('standardsStory')}</h2>
          <h3 className="text-display-lg font-display text-on-surface font-bold">{t('standardsSub')}</h3>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter"
        >
          {badges.map((badge) => (
            <motion.div
              key={badge.title}
              variants={revealVariants}
              className="glass-card p-6 rounded-2xl border border-white/5 space-y-4 hover:border-primary-container/20 transition-colors text-left"
            >
              <div className="w-12 h-12 rounded-lg bg-surface-container-high text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">{badge.icon}</span>
              </div>
              <div className="space-y-1">
                <h4 className="font-display font-bold text-white text-base leading-tight">{badge.title}</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">{badge.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Workflow Timeline Section */}
      <section className="py-stack-lg bg-surface-container-lowest border-y border-outline-variant/10">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <span className="text-primary-container font-label-md text-label-md tracking-[0.2em] uppercase mb-4 block">
            {language === 'ar' ? 'طريقة العمل' : 'How We Work'}
          </span>
          <h2 className="font-display-lg text-display-lg text-on-surface mb-stack-lg font-display text-white">
            {language === 'ar' ? (
              <>خطوات الصيانة <span className="text-primary-container">المبسطة</span></>
            ) : (
              <>Our Streamlined <span className="text-primary-container">Workflow</span></>
            )}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter mt-12 text-left">
            {steps.map((step) => (
              <div key={step.num} className="glass-card p-6 rounded-3xl border border-white/5 space-y-4 relative group hover:border-primary-container/25 transition-all">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-extrabold font-display opacity-20 group-hover:opacity-100 text-primary-container transition-opacity">{step.num}</span>
                  <div className={`w-10 h-10 rounded-xl ${step.color} flex items-center justify-center`}>
                    <span className="material-symbols-outlined text-[20px]">{step.icon}</span>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-display font-bold text-white text-base leading-tight">{step.title}</h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
