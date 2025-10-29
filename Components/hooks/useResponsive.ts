import { useState, useEffect } from 'react';

interface ResponsiveState {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isTabletOrMobile: boolean;
  screenSize: 'mobile' | 'tablet' | 'desktop';
  width: number;
  height: number;
  isClient: boolean;
}

export const useResponsive = (): ResponsiveState => {
  const [isClient, setIsClient] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: 1024, // Default to desktop size for SSR
    height: 768,
  });

  const [responsiveState, setResponsiveState] = useState<ResponsiveState>({
    isMobile: false,
    isTablet: false,
    isDesktop: true, // Default to desktop for SSR
    isTabletOrMobile: false,
    screenSize: 'desktop',
    width: 1024,
    height: 768,
    isClient: false,
  });

  // Set isClient to true after component mounts (client-side only)
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return; // Don't run on server

    let timeoutId: NodeJS.Timeout;

    const handleResize = () => {
      // Clear previous timeout
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      // Debounce resize events
      timeoutId = setTimeout(() => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        setWindowSize({ width, height });
        
        const isMobile = width <= 768;
        const isTablet = width > 768 && width <= 1024;
        const isDesktop = width > 1024;
        
        const isTabletOrMobile = isMobile || isTablet;
        
        const screenSize = isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop';
        
        setResponsiveState({
          isMobile,
          isTablet,
          isDesktop,
          isTabletOrMobile,
          screenSize,
          width,
          height,
          isClient: true,
        });
      }, 100); // 100ms debounce
    };

    // Set initial values
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isClient]);

  return responsiveState;
};

export default useResponsive;
