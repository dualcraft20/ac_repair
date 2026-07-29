import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  review: string;
  source: string;
  date: string;
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [loading, setLoading] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get('/api/testimonials');
        setTestimonials(response.data);
      } catch (err) {
        console.error('Error fetching testimonials:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      navigateSlide(1);
    }, 8000);
  };

  useEffect(() => {
    if (testimonials.length > 0) {
      resetTimer();
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [testimonials, currentIndex]);

  const navigateSlide = (newDirection: number) => {
    if (testimonials.length === 0) return;
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      let nextIndex = prev + newDirection;
      if (nextIndex < 0) nextIndex = testimonials.length - 1;
      if (nextIndex >= testimonials.length) nextIndex = 0;
      return nextIndex;
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="h-8 w-8 border-2 border-primary-container border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const { language } = useLanguage();

  const getTranslatedTestimonial = (item: Testimonial) => {
    if (language === 'ar') {
      const mapping: Record<number, Partial<Testimonial>> = {
        1: {
          name: 'طارق الهاشمي',
          review: 'خدمة سريعة للغاية وممتازة! انقطع التبريد في فيلا المرابع العربية الخاصة بي في تمام الساعة الثانية ظهراً في منتصف شهر يوليو. اتصلت بالخط الساخن، ووصل المهندس خلال 35 دقيقة ومعه ضاغط هواء بديل أصلي. أنقذوا عائلتي من حرارة الصيف الشديدة!',
          source: 'المرابع العربية',
          date: 'يوليو ٢٠٢٦'
        },
        2: {
          name: 'سارة كلارك',
          review: 'مهندسون محترفون جداً. كانت هناك مشكلة معقدة في تدفق الهواء وتراكم الثلج في شقتنا بجميرا. قام الفريق بتنظيف قنوات الهواء وتعقيم مجاري الهواء بالكامل وحل المشكلة بشكل جذري. أوصي بشدة بصيانتهم الوقائية السنوية.',
          source: 'نخلة جميرا',
          date: 'يونيو ٢٠٢٦'
        },
        3: {
          name: 'أحمد المري',
          review: 'الشفافية الكاملة في الأسعار هي ما يميزهم. قدم المهندس تشخيصاً كاملاً قبل بدء العمل، وعرض سعراً ثابتاً ومحدداً للمكثف التالف. لا رسوم خفية ولا تكاليف إضافية كما تفعل شركات أخرى في دبي.',
          source: 'دبي مارينا',
          date: 'مايو ٢٠٢٦'
        }
      };
      return { ...item, ...mapping[item.id] };
    }
    return item;
  };

  if (testimonials.length === 0) return null;

  const rawTestimonial = testimonials[currentIndex];
  const currentTestimonial = rawTestimonial ? getTranslatedTestimonial(rawTestimonial) : testimonials[0];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.35, ease: 'easeInOut' }
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      transition: { duration: 0.25, ease: 'easeInOut' }
    })
  };

  return (
    <div className="relative max-w-4xl mx-auto px-4 py-8">
      
      <div className="relative min-h-[380px] sm:min-h-[300px] flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full glass-card p-8 md:p-12 rounded-[40px] relative border border-white/5 shadow-2xl flex flex-col justify-between"
          >
            {/* Top Quote Badge */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary-container rounded-full flex items-center justify-center shadow-lg text-on-primary-container select-none">
              <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
            </div>

            <div className="text-center space-y-6 pt-2">
              {/* Star Ratings */}
              <div className="flex justify-center gap-1 text-secondary">
                {[...Array(5)].map((_, i) => {
                  const isHalf = i === 4 && currentTestimonial.rating % 1 !== 0;
                  return (
                    <span 
                      key={i} 
                      className="material-symbols-outlined" 
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {isHalf ? 'star_half' : 'star'}
                    </span>
                  );
                })}
              </div>

              {currentIndex === 0 ? (
                /* Custom Editorial Pull-Quote - Breaks repetition */
                <div className="space-y-6">
                  <div className="relative py-2 px-2 sm:px-6">
                    <p className="text-2xl sm:text-3xl font-display font-bold leading-normal text-white italic tracking-tight text-center relative z-10 max-w-2xl mx-auto">
                      "{currentTestimonial.review}"
                    </p>
                  </div>
                  <div className="pt-2 flex items-center justify-center gap-3 select-none">
                    <span className="w-6 h-[1px] bg-outline-variant/30"></span>
                    <span className="text-sm font-bold text-white tracking-wider uppercase font-display">{currentTestimonial.name}</span>
                    <span className="text-xs text-on-surface-variant font-medium">{currentTestimonial.source}</span>
                    <span className="w-6 h-[1px] bg-outline-variant/30"></span>
                  </div>
                </div>
              ) : (
                /* Standard Slide */
                <>
                  {/* Quote Text */}
                  <p className="text-headline-sm font-headline-sm italic leading-relaxed text-on-surface font-display px-2 sm:px-6">
                    "{currentTestimonial.review}"
                  </p>

                  {/* Profile Block */}
                  <div className="pt-2">
                    <div className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-primary-container p-1 overflow-hidden bg-surface-container flex items-center justify-center select-none shadow">
                      <span className="text-primary-container font-extrabold text-lg uppercase tracking-wider font-display">
                        {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h5 className="text-headline-sm font-headline-sm text-white font-display font-bold leading-none">{currentTestimonial.name}</h5>
                    <p className="text-label-md font-label-md text-on-surface-variant mt-1.5">{currentTestimonial.source} • {currentTestimonial.date}</p>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Chevrons */}
        <button
          onClick={() => navigateSlide(-1)}
          className="absolute top-1/2 -left-6 lg:-left-16 -translate-y-1/2 w-12 h-12 rounded-full glass-card hover:bg-white/10 flex items-center justify-center transition-all hidden md:flex text-white select-none border border-white/10"
          aria-label="Previous slide"
        >
          <span className="material-symbols-outlined text-[24px]">chevron_left</span>
        </button>
        <button
          onClick={() => navigateSlide(1)}
          className="absolute top-1/2 -right-6 lg:-right-16 -translate-y-1/2 w-12 h-12 rounded-full glass-card hover:bg-white/10 flex items-center justify-center transition-all hidden md:flex text-white select-none border border-white/10"
          aria-label="Next slide"
        >
          <span className="material-symbols-outlined text-[24px]">chevron_right</span>
        </button>
      </div>

      {/* Pagination indicators */}
      <div className="flex justify-center gap-2 mt-4 select-none">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              const diff = idx - currentIndex;
              if (diff !== 0) navigateSlide(diff);
            }}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'bg-primary-container w-6' : 'bg-white/10 w-1.5 hover:bg-white/20'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}
