'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollRevealWrapper({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    // Reset all scroll reveal elements on route change
    const resetScrollReveal = () => {
      const scrollElements = document.querySelectorAll(
        '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale'
      );
      scrollElements.forEach(el => {
        el.classList.remove('revealed');
      });
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      resetScrollReveal();

      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      }, observerOptions);

      // Observe all elements with scroll-reveal classes
      const scrollElements = document.querySelectorAll(
        '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale'
      );

      scrollElements.forEach(el => observer.observe(el));

      // Parallax effect on scroll
      const handleScroll = () => {
        const parallaxElements = document.querySelectorAll('.parallax');
        parallaxElements.forEach(el => {
          const speed = el.dataset.speed || 0.5;
          const yPos = -(window.pageYOffset * speed);
          el.style.transform = `translateY(${yPos}px)`;
        });
      };

      window.addEventListener('scroll', handleScroll, { passive: true });

      // Trigger initial check for elements already in viewport
      setTimeout(() => {
        scrollElements.forEach(el => {
          const rect = el.getBoundingClientRect();
          const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
          if (isInViewport) {
            el.classList.add('revealed');
          }
        });
      }, 100);

      return () => {
        scrollElements.forEach(el => observer.unobserve(el));
        window.removeEventListener('scroll', handleScroll);
      };
    }, 50);

    return () => clearTimeout(timer);
  }, [pathname]); // Re-run when pathname changes

  return <>{children}</>;
}
