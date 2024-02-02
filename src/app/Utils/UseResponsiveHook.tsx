import { useState, useEffect } from 'react';
import { ResponsiveState } from './UseResponsiveHook.types';

const useResponsive = (): ResponsiveState => {
    const [windowSize, setWindowSize] = useState<ResponsiveState>({
        isMobile: false,
        isTablet: false,
        isDesktop: true, 
    });

    const MOBILE_WIDTH = 768;
    const TABLET_WIDTH = 1024;

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setWindowSize({
                isMobile: width < MOBILE_WIDTH,
                isTablet: width >= MOBILE_WIDTH && width < TABLET_WIDTH,
                isDesktop: width >= TABLET_WIDTH,
            });
        };
        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []); 

    return windowSize;
};

export default useResponsive;
