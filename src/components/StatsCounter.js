'use client';
import React, { useState, useEffect, useRef } from 'react';

const StatsCounter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ experience: 0, clients: 0, centers: 0 });
  const sectionRef = useRef(null);

  const finalValues = {
    experience: 35,
    clients: 22000,
    centers: 220
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = {
      experience: setInterval(() => {
        setCounts(prev => {
          const increment = Math.ceil(finalValues.experience / steps);
          const newValue = Math.min(prev.experience + increment, finalValues.experience);
          if (newValue >= finalValues.experience) {
            clearInterval(intervals.experience);
            return { ...prev, experience: finalValues.experience };
          }
          return { ...prev, experience: newValue };
        });
      }, stepDuration),

      clients: setInterval(() => {
        setCounts(prev => {
          const increment = Math.ceil(finalValues.clients / steps);
          const newValue = Math.min(prev.clients + increment, finalValues.clients);
          if (newValue >= finalValues.clients) {
            clearInterval(intervals.clients);
            return { ...prev, clients: finalValues.clients };
          }
          return { ...prev, clients: newValue };
        });
      }, stepDuration),

      centers: setInterval(() => {
        setCounts(prev => {
          const increment = Math.ceil(finalValues.centers / steps);
          const newValue = Math.min(prev.centers + increment, finalValues.centers);
          if (newValue >= finalValues.centers) {
            clearInterval(intervals.centers);
            return { ...prev, centers: finalValues.centers };
          }
          return { ...prev, centers: newValue };
        });
      }, stepDuration)
    };

    return () => {
      clearInterval(intervals.experience);
      clearInterval(intervals.clients);
      clearInterval(intervals.centers);
    };
  }, [isVisible]);

  const formatNumber = (num) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(0)}k`;
    }
    return num;
  };

  return (
    <section ref={sectionRef} className="py-12 md:py-16 px-6 md:px-12 lg:px-24 animate-fade-in-up">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-[#037080] to-[#5fb5b9] rounded-[3rem] shadow-3d hover:shadow-3d-lg transition-all duration-500 hover:-translate-y-2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 px-8 md:px-16 py-12 md:py-16">
            {/* Years Experience */}
            <div className="text-center md:border-r border-white/30 animate-scale-in">
              <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2 font-recoleta">
                {counts.experience}+
              </h3>
              <p className="text-white text-sm md:text-base font-roboto-semi-condensed uppercase tracking-widest">
                YEAR EXPERIENCE
              </p>
            </div>

            {/* Happy Clients */}
            <div className="text-center md:border-r border-white/30 animate-scale-in delay-200">
              <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2 font-recoleta">
                {formatNumber(counts.clients)}+
              </h3>
              <p className="text-white text-sm md:text-base font-roboto-semi-condensed uppercase tracking-widest">
                HAPPY CLIENTS
              </p>
            </div>

            {/* Trusted Centers */}
            <div className="text-center animate-scale-in delay-400">
              <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2 font-recoleta">
                {counts.centers}+
              </h3>
              <p className="text-white text-sm md:text-base font-roboto-semi-condensed uppercase tracking-widest">
                TRUSTED CENTER
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
