import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'ar';

export const translations = {
  en: {
    // Navbar
    home: 'Home',
    services: 'Services',
    whyUs: 'Why Us',
    aboutUs: 'About Us',
    contact: 'Contact & Location',
    callNow: 'Call Now',
    whatsApp: 'WhatsApp',

    // Footer
    footerDesc: 'Providing high-end cooling solutions across Dubai for over 12 years. Precision, reliability, and excellence in every service.',
    ourServices: 'Our Services',
    residentialAc: 'Residential AC',
    commercialCooling: 'Commercial Cooling',
    maintenancePlans: 'Maintenance Plans',
    legal: 'Legal',
    terms: 'Terms of Service',
    privacy: 'Privacy Policy',
    rights: 'All rights reserved.',

    // Hero
    dispatchBadge: 'Dispatch Active 24/7 in Dubai',
    heroTitleMain: 'Dubai\'s Trusted Central AC Repair & Comfort Care',
    heroSub: 'Precision cooling solutions engineered for the UAE climate. Our expert technicians are on standby to restore your comfort within 60 minutes.',
    callHotline: 'Call Hotline',
    whatsAppInquiry: 'WhatsApp Inquiry',
    responseTime: '30m Response',
    certifiedTechs: 'Certified Techs',
    noHiddenFees: 'No Hidden Fees',
    ratingBadge: 'Based on 2,400+ Google Reviews',

    // Home Sections
    servicesTitle: 'Our AC Services',
    servicesSub: 'Precision HVAC maintenance and diagnostics for Dubai residential and commercial assets.',
    featuredServiceLabel: 'Featured Service',
    featuredServiceDesc: 'Immediate system fault tracing and rapid repair dispatch. Our response teams are equipped with advanced diagnostics to resolve cooling issues immediately.',
    bookService: 'Book Service',
    viewAllServices: 'View All Services',
    whyUsTitle: 'Why Dubai Trusts Our Precision',
    whyUsSub: 'We combine decade-long local expertise with modern engineering tools to deliver cooling that never fails, even in 50°C desert heat.',
    exploreMethod: 'Explore Our Method',
    testimonialsTitle: 'Client Stories',
    testimonialsSub: 'Trusted by Thousands',

    // Why Choose Us features
    featureCertified: 'Certified Experts',
    featureCertifiedDesc: 'Every technician undergoes rigorous local background checks and holds municipal HVAC engineering certifications.',
    featureDispatch: '60-Minute GPS Dispatch',
    featureDispatchDesc: 'Our mobile response vans are strategically pre-positioned across main highways to reach any villa community in under an hour.',
    featurePricing: 'Fixed Upfront Quotes',
    featurePricingDesc: 'We trace system faults first and present an exact invoice quote before work starts. Zero call-out surprises.',
    featureWarranty: '6-Month Parts Warranty',
    featureWarrantyDesc: 'We only source brand-new OEM compressors, capacitors, and fan motors, all backed by a written 6-month guarantee.',

    // Why Us Page
    ourStandard: 'Our Standard',
    whyDubaiTrusts: 'Why Dubai Trusts Our Precision',
    whyDubaiTrustsSub: 'Desert summers are unforgiving. We engineered our entire maintenance process around dispatch speed, engineering qualifications, and complete price transparency.',
    howWeCompare: 'How We Compare',
    howWeCompareSub: 'We stand behind our commitments. See how our service metrics compare with standard AC service options.',
    metricHeader: 'Service Metric',
    standardHeader: 'Standard Providers',
    ourServiceHeader: 'AC Service UAE',
    metricSpeed: 'Average Dispatch Speed',
    metricSpeedStandard: '4 to 6 Hours (Often delayed)',
    metricSpeedOur: 'Within 30 to 60 Minutes (GPS Dispatched)',
    metricTech: 'Technician Credentials',
    metricTechStandard: 'Subcontracted helpers',
    metricTechOur: 'Municipality-Certified HVAC Engineers',
    metricPricing: 'Pricing Policy',
    metricPricingStandard: 'Opaque pricing with hidden fees',
    metricPricingOur: 'Upfront fixed-rate diagnostics quotes',
    metricParts: 'Spare Parts Authenticity',
    metricPartsStandard: 'Refurbished or generic copies',
    metricPartsOur: '100% Brand-new OEM Spare Parts',
    metricWarranty: 'Written Performance Guarantee',
    metricWarrantyStandard: 'None or 7-day verbal promise',
    metricWarrantyOur: 'Written 6-Month service & parts warranty',
    metricAvailability: 'Availability Window',
    metricAvailabilityStandard: 'Office hours only (Closed weekends)',
    metricAvailabilityOur: '24/7/365 Emergency Dispatch Standby',
    readyTitle: 'Ready to Experience Precision Cooling?',
    readySub: 'Our certified HVAC dispatchers are online. Submit a booking request to get a technician scheduled to your doorstep.',
    bookAppointment: 'Book Appointment',

    // About Page
    aboutHeaderSub: 'About Us',
    aboutHeaderTitle: 'Engineering Perfect Climates in the UAE Desert',
    aboutHeaderDesc: 'For over a decade, AC Service UAE has been the trusted name in high-performance cooling systems, serving residential and commercial clients across the Emirates with technical precision.',
    decadeTitle: 'A Decade of Precision',
    decadeDesc1: 'Founded in Dubai in 2012, our journey began with a simple observation: the extreme heat of the UAE requires more than just standard maintenance—it requires specialized engineering expertise.',
    decadeDesc2: 'We built AC Service UAE on the pillars of transparency, reliability, and speed. Our team of certified engineers doesn\'t just fix units; they optimize systems to withstand the harshest environmental conditions, ensuring longevity and energy efficiency for every client.',
    factoidDesc: '"AC efficiency drops up to 30% under Dubai sandstorms without regular duct checks."',
    factoidSource: '— Eng. Standard Report',
    yearsExp: 'Years Experience',
    jobsCompleted: 'Jobs Completed',
    activeEngineers: 'Active Engineers',
    satisfactionRate: 'Satisfaction Rate',
    standardsStory: 'Our Standards & Story',
    standardsSub: 'How we maintain high performance under extreme summer conditions.',

    // Contact & Location Page
    contactTitle: 'Reach Out',
    contactSub: 'Emergency HVAC dispatch is pre-positioned across Dubai. Whether you need a quick repair or a commercial upgrade, our team is ready.',
    callDirectlyCard: 'Call Us Directly',
    callDirectlyDesc: 'Immediate response for emergency repairs.',
    whatsAppSupportCard: 'WhatsApp Support',
    whatsAppSupportDesc: 'Send details or photos of your unit for a quick quote.',
    activeAreas: 'Active Coverage Areas',
    activeAreasSub: 'Our rapid response vans cover all key residential and commercial zones across Dubai within 30-60 minutes.',
    locationTitle: 'Our Dubai Headquarters',
    formTitle: 'Request AC Support',
    formSub: 'Fill in the details below and get a free callback in minutes.',

    // Contact Form Fields
    fullName: 'Your Full Name *',
    phoneNumber: 'Phone Number *',
    serviceRequired: 'Service Required *',
    callbackWindow: 'Preferred Callback Window *',
    messageOptional: 'Message (Optional)',
    submitForm: 'Send Request',
    submitting: 'Sending...',
    successTitle: 'Request Received Successfully!',
    successDesc: 'Our dispatch team is online. An HVAC engineer will contact you shortly to coordinate the diagnostic dispatch.',
    successBtn: 'Book Another Service',
    placeholderName: 'e.g., John Doe',
    placeholderPhone: 'e.g., your phone number',
    selectService: 'Select a Service',
    morningWindow: 'Morning (8:00 AM - 12:00 PM)',
    afternoonWindow: 'Afternoon (12:00 PM - 4:00 PM)',
    eveningWindow: 'Evening (4:00 PM - 8:00 PM)',
    placeholderMsg: 'How can we help you today?'
  },
  ar: {
    // Navbar
    home: 'الرئيسية',
    services: 'الخدمات',
    whyUs: 'لماذا نحن',
    aboutUs: 'من نحن',
    contact: 'اتصل بنا وموقعنا',
    callNow: 'اتصل الآن',
    whatsApp: 'واتساب',

    // Footer
    footerDesc: 'نقدم حلول تبريد وتكييف راقية وعالية الجودة في جميع أنحاء دبي لأكثر من 12 عاماً. الدقة، الموثوقية، والتميز في كل خدمة.',
    ourServices: 'خدماتنا',
    residentialAc: 'تكييف سكني',
    commercialCooling: 'تبريد تجاري',
    maintenancePlans: 'عقود الصيانة',
    legal: 'قانوني',
    terms: 'شروط الخدمة',
    privacy: 'سياسة الخصوصية',
    rights: 'جميع الحقوق محفوظة.',

    // Hero
    dispatchBadge: 'الطوارئ نشطة 24/7 في دبي',
    heroTitleMain: 'صيانة وتصليح التكييف المركزي المعتمدة في دبي',
    heroSub: 'حلول تبريد دقيقة مصممة لطقس دولة الإمارات. مهندسونا المعتمدون على أهبة الاستعداد لإعادة التبريد والراحة لمنزلك خلال 60 دقيقة.',
    callHotline: 'الخط الساخن',
    whatsAppInquiry: 'طلب عبر الواتساب',
    responseTime: 'استجابة خلال 30 دقيقة',
    certifiedTechs: 'مهندسون معتمدون',
    noHiddenFees: 'أسعار بدون رسوم خفية',
    ratingBadge: 'بناءً على 2400+ من تقييمات جوجل',

    // Home Sections
    servicesTitle: 'خدمات التكييف لدينا',
    servicesSub: 'صيانة تكييف دقيقة وتشخيص أعطال معتمد للمباني السكنية والتجارية في دبي.',
    featuredServiceLabel: 'خدمة مميزة',
    featuredServiceDesc: 'فحص فوري لأعطال النظام وإرسال فني سريع. فرق الاستجابة لدينا مجهزة بأحدث أدوات الفحص لحل مشاكل التبريد فوراً.',
    bookService: 'حجز الخدمة',
    viewAllServices: 'عرض جميع الخدمات',
    whyUsTitle: 'لماذا يثق سكان دبي بدقتنا؟',
    whyUsSub: 'نجمع بين أكثر من عقد من الخبرة المحلية وأحدث المعدات الهندسية لنقدم تبريداً لا يفشل أبداً، حتى في حرارة صيف دبي البالغة 50 درجة مئوية.',
    exploreMethod: 'استكشف طريقتنا',
    testimonialsTitle: 'آراء عملائنا',
    testimonialsSub: 'موضع ثقة الآلاف في الإمارات',

    // Why Choose Us features
    featureCertified: 'خبراء معتمدون',
    featureCertifiedDesc: 'يخضع جميع المهندسين لدينا لفحص سجلاتهم ويحملون شهادات معتمدة محلياً في هندسة التكييف.',
    featureDispatch: 'استجابة بالـ GPS خلال 60 دقيقة',
    featureDispatchDesc: 'تتوزع سيارات الصيانة المتنقلة بشكل استراتيجي بالقرب من الطرق السريعة للوصول إلى منزلك في أقل من ساعة.',
    featurePricing: 'أسعار ثابتة ومحددة',
    featurePricingDesc: 'نقوم بتحديد أعطال النظام أولاً وتقديم عرض السعر الثابت قبل بدء الإصلاح. بدون أي مفاجآت.',
    featureWarranty: 'ضمان مكتوب 6 أشهر',
    featureWarrantyDesc: 'نستخدم فقط قطع غيار أصلية وجديدة كلياً مع تقديم ضمان مكتوب لمدة 6 أشهر على القطع والخدمة.',

    // Why Us Page
    ourStandard: 'معاييرنا',
    whyDubaiTrusts: 'لماذا تثق دبي بدقتنا',
    whyDubaiTrustsSub: 'صيف الصحراء لا يرحم. لقد صممنا عملية الصيانة بالكامل لتتمحور حول سرعة الاستجابة، الكفاءة الهندسية، والشفافية التامة في التسعير.',
    howWeCompare: 'كيف نقارن بغيرنا؟',
    howWeCompareSub: 'نحن نلتزم بوعودنا. قارن بين معايير خدماتنا ومقدمي الخدمات العاديين في دبي.',
    metricHeader: 'مقياس الخدمة',
    standardHeader: 'الشركات العادية',
    ourServiceHeader: 'تكييف دبي الممتاز',
    metricSpeed: 'متوسط سرعة الوصول',
    metricSpeedStandard: 'من 4 إلى 6 ساعات (مع تأخير متكرر)',
    metricSpeedOur: 'في غضون 30 إلى 60 دقيقة (متابعة بالـ GPS)',
    metricTech: 'مؤهلات الفنيين',
    metricTechStandard: 'عمالة غير مؤهلة أو مقاولين فرعيين',
    metricTechOur: 'مهندسو تكييف معتمدون من البلدية والجهات المعنية',
    metricPricing: 'سياسة التسعير',
    metricPricingStandard: 'أسعار غير واضحة ورسوم مخفية بعد العمل',
    metricPricingOur: 'تسعير ثابت ومحدد قبل بدء الفحص والتصليح',
    metricParts: 'أصالة قطع الغيار',
    metricPartsStandard: 'قطع غيار مجددة أو مقلدة ورخيصة',
    metricPartsOur: 'قطع غيار أصلية وجديدة 100% من المصنع',
    metricWarranty: 'الضمان المكتوب',
    metricWarrantyStandard: 'لا يوجد أو ضمان شفهي لمدة 7 أيام',
    metricWarrantyOur: 'ضمان مكتوب لمدة 6 أشهر على القطع والخدمة',
    metricAvailability: 'ساعات العمل والتغطية',
    metricAvailabilityStandard: 'ساعات العمل الرسمية فقط (مغلق عطلة الأسبوع)',
    metricAvailabilityOur: 'فريق طوارئ متاح 24 ساعة / 7 أيام في الأسبوع',
    readyTitle: 'مستعد لتجربة التبريد الدقيق؟',
    readySub: 'مهندسو الصيانة لدينا متصلون الآن. أرسل طلب الحجز لجدولة زيارة الفني إلى باب منزلك فوراً.',
    bookAppointment: 'احجز موعدك الآن',

    // About Page
    aboutHeaderSub: 'من نحن',
    aboutHeaderTitle: 'هندسة مناخ مثالي في صحراء الإمارات',
    aboutHeaderDesc: 'لأكثر من عقد من الزمان، كانت شركتنا هي الاسم الموثوق به في أنظمة التبريد عالية الأداء، حيث نخدم العملاء السكنيين والتجاريين بدقة هندسية عالية.',
    decadeTitle: 'عقد من الدقة والتميز',
    decadeDesc1: 'تأسست الشركة في دبي عام 2012، وبدأت رحلتنا بملاحظة بسيطة: الحرارة الشديدة في الإمارات تتطلب أكثر من مجرد صيانة عادية - إنها تتطلب خبرة هندسية متخصصة.',
    decadeDesc2: 'لقد بنينا الشركة على ركائز الشفافية والموثوقية والسرعة. لا يقوم مهندسونا المعتمدون بإصلاح الوحدات فوجب، بل يقومون بتحسين الأنظمة لتحمل أصعب الظروف البيئية، مما يضمن كفاءة الطاقة وطول عمر الأجهزة.',
    factoidDesc: '"تنخفض كفاءة التكييف بنسبة تصل إلى 30% بسبب العواصف الرملية في دبي دون صيانة دورية للقنوات."',
    factoidSource: '— تقرير معايير الهندسة',
    yearsExp: 'سنوات الخبرة',
    jobsCompleted: 'عمليات ناجحة',
    activeEngineers: 'مهندس معتمد',
    satisfactionRate: 'نسبة الرضا',
    standardsStory: 'قصتنا ومعاييرنا',
    standardsSub: 'كيف نحافظ على جودة التبريد في أقسى ظروف الصيف.',

    // Contact & Location Page
    contactTitle: 'تواصل معنا',
    contactSub: 'سيارات الاستجابة السريعة متمركزة في دبي. سواء كنت بحاجة لإصلاح عاجل أو ترقية نظام تجاري، فريقنا على استعداد للخدمة.',
    callDirectlyCard: 'اتصل بنا مباشرة',
    callDirectlyDesc: 'استجابة فورية لإصلاحات الطوارئ والأعطال العاجلة.',
    whatsAppSupportCard: 'دعم الواتساب',
    whatsAppSupportDesc: 'أرسل تفاصيل أو صور وحدة التكييف للحصول على تقدير سريع.',
    activeAreas: 'مناطق التغطية النشطة',
    activeAreasSub: 'تغطي سيارات الصيانة المتنقلة كافة المناطق السكنية والتجارية الرئيسية في دبي خلال 30-60 دقيقة.',
    locationTitle: 'مقرنا الرئيسي في دبي',
    formTitle: 'طلب دعم وتصليح التكييف',
    formSub: 'املأ تفاصيل طلبك أدناه وسنتصل بك في غضون دقائق.',

    // Contact Form Fields
    fullName: 'الاسم الكامل *',
    phoneNumber: 'رقم الهاتف *',
    serviceRequired: 'الخدمة المطلوبة *',
    callbackWindow: 'الوقت المفضل للاتصال *',
    messageOptional: 'تفاصيل الرسالة (اختياري)',
    submitForm: 'إرسال الطلب',
    submitting: 'جاري الإرسال...',
    successTitle: 'تم استلام طلبك بنجاح!',
    successDesc: 'طاقم الطوارئ والاتصالات لدينا متصل الآن. سيتواصل معك أحد المهندسين لترتيب زيارة فحص التكييف فوراً.',
    successBtn: 'حجز خدمة أخرى',
    placeholderName: 'مثال: أحمد محمد',
    placeholderPhone: 'مثال: رقم هاتف للتواصل',
    selectService: 'اختر الخدمة المطلوبة',
    morningWindow: 'صباحاً (8:00 صباحاً - 12:00 ظهراً)',
    afternoonWindow: 'بعد الظهر (12:00 ظهراً - 4:00 عصراً)',
    eveningWindow: 'مساءً (4:00 عصراً - 8:00 مساءً)',
    placeholderMsg: 'كيف يمكننا مساعدتك اليوم?'
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  dir: 'ltr' | 'rtl';
  t: (key: keyof typeof translations['en']) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    return (localStorage.getItem('preferredLanguage') as Language) || 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('preferredLanguage', lang);
  };

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
  }, [language, dir]);

  const t = (key: keyof typeof translations['en']): string => {
    return translations[language][key] || translations['en'][key] || '';
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dir, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
