import { useEffect } from 'react';

const useIntersectionObserver = (callback, options) => {
  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    const elements = document.querySelectorAll('.animate-on-scroll');

    elements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [callback, options]);
};

export default useIntersectionObserver;