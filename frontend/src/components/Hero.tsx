import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t, language } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="relative min-h-[800px] flex items-center overflow-hidden py-stack-lg">
      {/* Atmospheric Orbs */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] orb-blue animate-drift pointer-events-none"></div>
      <div className="absolute bottom-[0%] left-[-5%] w-[500px] h-[500px] orb-orange animate-drift pointer-events-none" style={{ animationDelay: '-5s' }}></div>
      
      <div className="relative w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-lg items-center">
          
          {/* Hero Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-stack-md text-left"
          >
            {/* Beacon Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-label-md font-label-md w-fit">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
              </span>
              <span>{t('dispatchBadge')}</span>
            </motion.div>

            {/* Title */}
            <motion.h1 variants={itemVariants} className="text-display-lg font-display-lg leading-[1.1] text-on-surface">
              {language === 'ar' ? (
                <>صيانة وتصليح <span className="text-primary-container">التكييف المركزي</span> المعتمدة في دبي</>
              ) : (
                <>Dubai's Trusted <span className="text-primary-container">Central AC</span> Repair & Comfort Care</>
              )}
            </motion.h1>

            {/* Description */}
            <motion.p variants={itemVariants} className="text-body-lg font-body-lg text-on-surface-variant max-w-[540px]">
              {t('heroSub')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-stack-md pt-stack-sm">
              <a
                href="#"
                className="bg-primary-container text-on-primary-container h-[56px] px-8 rounded-xl font-bold text-label-md flex items-center justify-center gap-3 hover:shadow-[0_4px_20px_rgba(255,122,26,0.4)] transition-all active:scale-95 uppercase tracking-wider select-none"
              >
                <span className="material-symbols-outlined">call</span>
                <span>{t('callHotline')}</span>
              </a>

              <a
                href="#"
                className="bg-[#2ECC71] text-white h-[56px] px-8 rounded-xl font-bold text-label-md flex items-center justify-center gap-3 hover:brightness-105 transition-all active:scale-95 uppercase tracking-wider select-none"
              >
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>chat_bubble</span>
                <span>{t('whatsAppInquiry')}</span>
              </a>
            </motion.div>

            {/* Core Values Bullets */}
            <motion.div variants={itemVariants} className="pt-6 border-t border-outline-variant/10 grid grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-surface-container-high text-[#33aef0] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">schedule</span>
                </div>
                <span className="text-xs font-semibold text-on-surface-variant">{t('responseTime')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-surface-container-high text-secondary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">verified_user</span>
                </div>
                <span className="text-xs font-semibold text-on-surface-variant">{t('certifiedTechs')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-surface-container-high text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">payments</span>
                </div>
                <span className="text-xs font-semibold text-on-surface-variant">{t('noHiddenFees')}</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Right Visual: Layered Parallax Floating Dashboard */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="relative w-full h-[520px] hidden lg:block select-none"
          >
            {/* Glowing background hub */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary-container/10 rounded-full blur-3xl opacity-30 pointer-events-none animate-pulse"></div>

            {/* Card 1: Floating Wrench/Service Badge */}
            <div className="absolute top-[8%] left-[5%] animate-float-slow hover:scale-105 transition-transform duration-300">
              <div className="glass-card px-5 py-3.5 rounded-2xl border border-white/10 flex items-center gap-3.5 shadow-xl">
                <div className="w-10 h-10 rounded-xl bg-primary-container/10 flex items-center justify-center text-primary-container">
                  <span className="material-symbols-outlined text-[22px]">build</span>
                </div>
                <div className="text-left">
                  <h4 className="text-white text-sm font-bold font-display">{language === 'ar' ? 'تصليح معتمد' : 'Precision Repair'}</h4>
                  <p className="text-[10px] text-on-surface-variant">{language === 'ar' ? 'فنيون مؤهلون' : 'Certified Techs & Tools'}</p>
                </div>
              </div>
            </div>

            {/* Card 2: Floating Climate control Thermostat */}
            <div className="absolute top-[28%] right-[8%] animate-float-medium hover:scale-105 transition-transform duration-300">
              <div className="glass-card px-5 py-3.5 rounded-2xl border border-white/10 flex items-center gap-3.5 shadow-xl">
                <div className="w-10 h-10 rounded-xl bg-[#33aef0]/15 flex items-center justify-center text-[#33aef0]">
                  <span className="material-symbols-outlined text-[22px]">thermostat</span>
                </div>
                <div className="text-left">
                  <h4 className="text-white text-sm font-bold font-display">{language === 'ar' ? 'ضبط حرارة ذكي' : 'Climate Control'}</h4>
                  <p className="text-[10px] text-on-surface-variant">{language === 'ar' ? 'توفير الطاقة بنظام' : 'Nest & Smart Thermostats'}</p>
                </div>
              </div>
            </div>

            {/* Card 3: Floating Fan / Clean air indicator */}
            <div className="absolute bottom-[20%] left-[3%] animate-float-fast hover:scale-105 transition-transform duration-300">
              <div className="glass-card px-5 py-3.5 rounded-2xl border border-white/10 flex items-center gap-3.5 shadow-xl">
                <div className="w-10 h-10 rounded-xl bg-secondary/15 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>air</span>
                </div>
                <div className="text-left">
                  <h4 className="text-white text-sm font-bold font-display">{language === 'ar' ? 'تنظيف مجاري التكييف' : 'Duct Cleaning'}</h4>
                  <p className="text-[10px] text-on-surface-variant">{language === 'ar' ? 'هواء صحي ونقي ٩٩٪' : '99% Dust & Mold Removal'}</p>
                </div>
              </div>
            </div>


            {/* Card 5: Verified Google Ratings card inside cloud */}
            <div className="absolute bottom-[5%] right-[10%] animate-float-slow hover:scale-105 transition-transform duration-300">
              <div className="glass-card p-4 rounded-2xl flex items-center gap-3 shadow-2xl border border-white/10">
                <div className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center text-secondary shrink-0">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-sm text-white">4.9 / 5.0</span>
                    <div className="flex text-secondary scale-75 origin-left">
                      <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star_half</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-on-surface-variant font-medium">{t('ratingBadge')}</p>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
