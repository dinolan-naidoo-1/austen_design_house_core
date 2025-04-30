'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { NavItem } from '../types';
import useScrollToSection from '../hooks/use-scroll-to-section';
import Image from 'next/image';

const Navbar: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>('home');
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const scrollToSection = useScrollToSection();

    useEffect(() => {
        const handleScroll = (): void => {
            setIsScrolled(window.scrollY > 50);
            // Update active section based on scroll position
            const sections: string[] = ['home', 'our-clients', 'our-work', 'contact'];
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavItemClick = (id: string) => {
        scrollToSection(id);
        setIsMenuOpen(false); // Close menu after clicking an item
    };

    const navItems: NavItem[] = [
        { id: 'home', label: 'Home' },
        { id: 'our-work', label: 'Our Work' },
        { id: 'our-clients', label: 'Our Clients' },
        { id: 'contact', label: 'Contact Us' }
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="logo">
                <Link href="/" onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('home');
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

            <button className="hamburger" onClick={toggleMenu} aria-label="Toggle navigation menu">
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