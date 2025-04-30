'use client';

import { useCallback } from 'react';

export default function useScrollToSection() {
    const scrollToSection = useCallback((elementId: string): void => {
        const element = document.getElementById(elementId);
        if (element) {
            // Adding smooth scrolling behavior
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    }, []);

    return scrollToSection;
}