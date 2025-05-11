'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { NavItem } from '../types';
import useScrollToSection from '../hooks/use-scroll-to-section';
import Image from 'next/image';

const Navbar: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>('home');
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [navbarHeight, setNavbarHeight] = useState<number>(0);
    const scrollingRef = useRef<boolean>(false);

    const scrollToSection = useScrollToSection();

    useEffect(() => {
        // Get navbar height for offset calculations
        const updateNavbarHeight = () => {
            const navbar = document.querySelector('.navbar');
            if (navbar) {
                setNavbarHeight(navbar.clientHeight);
            }
        };

        updateNavbarHeight();
        window.addEventListener('resize', updateNavbarHeight);

        // Function to check and fix position for hash navigation on page load
        const checkHashNavigation = () => {
            const hash = window.location.hash.substring(1);
            if (hash) {
                // Wait for page to fully render
                setTimeout(() => {
                    scrollToSection(hash);
                }, 500);
            }
        };

        // Run hash check on mount
        checkHashNavigation();

        const handleScroll = (): void => {
            // Update navbar appearance
            setIsScrolled(window.scrollY > 50);

            // Don't update active section while programmatically scrolling
            if (scrollingRef.current) return;

            // Update active section based on scroll position
            const sections: string[] = ['home', 'our-clients', 'our-work', 'contact'];

            // Find the section closest to the top of the viewport
            let closestSection = null;
            let closestDistance = Infinity;

            sections.forEach(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Calculate distance to top accounting for navbar
                    const distance = Math.abs(rect.top - navbarHeight);

                    // If this element is closest to the threshold, update
                    if (distance < closestDistance) {
                        closestSection = section;
                        closestDistance = distance;
                    }
                }
            });

            if (closestSection) {
                setActiveSection(closestSection);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Initial check for active section
        setTimeout(handleScroll, 100);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', updateNavbarHeight);
        };
    }, [navbarHeight, scrollToSection]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavItemClick = (id: string) => {
        // Set scrolling flag to prevent active section updates during scroll
        scrollingRef.current = true;

        // Perform scroll
        scrollToSection(id);

        // Clear scrolling flag after animation completes
        setTimeout(() => {
            scrollingRef.current = false;
            setActiveSection(id);
        }, 1000);

        // Close menu if open
        setIsMenuOpen(false);
    };

    const navItems: NavItem[] = [
        { id: 'home', label: 'Home' },
        { id: 'our-work', label: 'Our Work' },
        { id: 'contact', label: 'Contact Us' }
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="logo">
                <Link href="/" onClick={(e) => {
                    e.preventDefault();
                    handleNavItemClick('home');
                }}>
                    <Image
                        src="/austen-design-logo-white.png"
                        alt="Company Logo"
                        width={500}
                        height={500}
                        className="nav-logo"
                        quality={100}
                        priority
                    />
                </Link>
            </div>
            <button
                className="hamburger"
                onClick={toggleMenu}
                aria-label="Toggle navigation menu"
            >
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
            </button>
            <ul className={`nav-items ${isMenuOpen ? 'open' : ''}`}>
                {navItems.map((item) => (
                    <li key={item.id}>
                        <Link
                            href={`#${item.id}`}
                            className={activeSection === item.id ? 'active' : ''}
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavItemClick(item.id);
                            }}
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;