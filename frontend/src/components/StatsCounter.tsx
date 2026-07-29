import React, { useState, useEffect } from 'react';

interface StatsCounterProps {
  target: number;
  suffix?: string;
  decimals?: number;
  duration?: number;
}

export default function StatsCounter({ target, suffix = '', decimals = 0, duration = 1500 }: StatsCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      const currentVal = progress * target;
      setCount(currentVal);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [target, duration]);

  return (
    <span className="font-bold text-4xl sm:text-5xl text-medium-turquoise tracking-tight">
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}
