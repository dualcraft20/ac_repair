import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SpotlightCard from './SpotlightCard';

const materialIconMap: Record<string, string> = {
  Wind: 'air',
  Snowflake: 'ac_unit',
  ShieldCheck: 'verified_user',
  Clock: 'schedule',
  Wrench: 'build'
};

interface ServiceCardProps {
  id: number;
  name: string;
  icon: string;
  description: string;
}

export default function ServiceCard({ id, name, icon, description }: ServiceCardProps) {
  const materialIcon = materialIconMap[icon] || 'build';

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4 }}
      className="h-full"
    >
      <SpotlightCard className="p-6 flex flex-col justify-between h-full shadow-lg">
        <div className="space-y-4 text-left">
          {/* Icon Container */}
          <div className="w-12 h-12 rounded-xl bg-tertiary-container/10 flex items-center justify-center text-tertiary-container">
            <span className="material-symbols-outlined text-[28px]">{materialIcon}</span>
          </div>

          {/* Title */}
          <h3 className="text-headline-sm font-headline-sm text-white mb-2 font-display font-bold">
            {name}
          </h3>

          {/* Description */}
          <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
            {description}
          </p>
        </div>

        <div className="pt-4 mt-auto text-left">
          <Link
            to={`/services#service-${id}`}
            className="text-primary-container font-label-md text-label-md flex items-center gap-2 group/link select-none w-fit font-bold"
            onClick={() => {
              setTimeout(() => {
                const el = document.getElementById(`service-${id}`);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }, 100);
            }}
          >
            <span>Learn More</span> 
            <span className="material-symbols-outlined text-[18px] group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>
      </SpotlightCard>
    </motion.div>
  );
}
