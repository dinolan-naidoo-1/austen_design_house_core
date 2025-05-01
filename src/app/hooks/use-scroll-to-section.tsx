'use client';

import { useCallback, useEffect, useState } from 'react';

export default function useScrollToSection() {
    const [navbarHeight, setNavbarHeight] = useState<number>(0);

    // Get the navbar height once on component mount
    useEffect(() => {
        const updateNavbarHeight = () => {
            const navbar = document.querySelector('.navbar');
            if (navbar) {
                setNavbarHeight(navbar.clientHeight);
            }
        };

        // Initial measurement
        updateNavbarHeight();

        // Update on resize
        window.addEventListener('resize', updateNavbarHeight);
        return () => window.removeEventListener('resize', updateNavbarHeight);
    }, []);

    const scrollToSection = useCallback((elementId: string): void => {
        const element = document.getElementById(elementId);

        if (element) {
            // Create a hidden marker element at the top of the section for precise positioning
            const marker = document.createElement('div');
            marker.style.position = 'absolute';
            marker.style.top = '0';
            marker.style.left = '0';
            marker.style.height = '1px';
            marker.style.width = '1px';
            marker.style.pointerEvents = 'none';
            marker.style.opacity = '0';
            marker.style.zIndex = '-1';
            marker.id = `scroll-marker-${elementId}`;

            // Get the computed style of the section
            const sectionStyle = window.getComputedStyle(element);
            const hasPadding = parseInt(sectionStyle.paddingTop) > 0;

            // If section has padding, we need to account for it
            if (hasPadding) {
                element.style.position = 'relative';
                element.appendChild(marker);

                // Get position of marker which is at true top of section
                const markerPos = marker.getBoundingClientRect().top;
                const scrollPosition = markerPos + window.scrollY - navbarHeight;

                // Scroll to marker position
                window.scrollTo({
                    top: scrollPosition,
                    behavior: 'smooth'
                });

                // Remove marker after scrolling
                setTimeout(() => {
                    element.removeChild(marker);
                }, 1000);
            } else {
                // For sections without padding, use regular approach
                const elementPosition = element.getBoundingClientRect().top;
                const scrollPosition = elementPosition + window.scrollY - navbarHeight;

                window.scrollTo({
                    top: scrollPosition,
                    behavior: 'smooth'
                });
            }
        }
    }, [navbarHeight]);

    return scrollToSection;
}