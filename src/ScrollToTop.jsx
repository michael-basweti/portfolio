import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });

    // Refresh AOS so animations trigger immediately on route transitions
    AOS.refresh();
    const timeout = setTimeout(() => {
      AOS.refresh();
    }, 150);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
