"use client";
import React from 'react';
import { SectionProps } from '../../types';
import WhatsAppButton from "@/app/components/features/whatsapp-button";
import Image from 'next/image';
import useScrollToSection from '../../hooks/use-scroll-to-section';

const InformationFooter: React.FC<SectionProps> = ({ id }) => {
    const scrollToSection = useScrollToSection();

    const handleNavItemClick = (id: string) => {
        scrollToSection(id);
    };

    const handlePdfClick = (pdfPath: string) => {
        // Open the PDF in a new tab
        window.open(pdfPath, '_blank');
    };

    return (
        <section id={id} className="footer-section">
            <div className="footer-container">
                <h2 className="footer-heading">
                    LEADING THE WAY IN IMMERSIVE E-COMMERCE IN SOUTH AFRICA
                </h2>

                <div className="footer-content">
                    <div className="footer-logo">
                        <Image
                            src="/austen-design-logo-white.png"
                            alt="Austen Design House Logo"
                            width={120}
                            height={120}
                            className="logo-image"
                        />
                    </div>

                    <div className="footer-links">
                        <div className="links-column">
                            <a href="#home" className="footer-link" onClick={(e) => {
                                e.preventDefault();
                                handleNavItemClick('home');
                            }}>Home</a>
                            <a href="#our-work" className="footer-link" onClick={(e) => {
                                e.preventDefault();
                                handleNavItemClick('our-work');
                            }}>Our Work</a>
                            <a href="#contact" className="footer-link" onClick={(e) => {
                                e.preventDefault();
                                handleNavItemClick('contact');
                            }}>Contact Us</a>
                        </div>
                        <div className="links-column">
                            <a href="#" className="footer-link" onClick={(e) => {
                                e.preventDefault();
                                if (confirm('Open Privacy Policy')) {
                                    handlePdfClick('Privacy Policy ADH.pdf');
                                }
                            }}>Privacy Policy</a>
                            <a href="#" className="footer-link" onClick={(e) => {
                                e.preventDefault();
                                if (confirm('Open Terms Of Service')) {
                                    handlePdfClick('/Terms of Service ADH.pdf');
                                }
                            }}>Terms of Service</a>
                        </div>
                    </div>
                </div>

                <div className="copyright">
                    ©2025 AUSTEN DESIGN HOUSE. ALL RIGHTS RESERVED.
                </div>

                <div className="whatsapp-container">
                    <WhatsAppButton />
                </div>
            </div>

            {/* CSS Styles */}
            <style jsx>{`
              .footer-section {
                background-color: #000000;
                color: #ffffff;
                min-height: 50vh;
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 3rem 1rem 2rem 1rem;
              }

              .footer-container {
                width: 100%;
                max-width: 1200px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
              }

              .footer-heading {
                color: #ffffff;
                text-align: center;
                font-size: 2.3rem;
                font-family: var(--font-quicksand);
                margin-bottom: 4rem;
                max-width: 90%;
              }

              .footer-content {
                display: flex;
                width: 100%;
                justify-content: center;
                margin-bottom: 4rem;
                gap: 6rem;
                align-items: center;
              }

              .footer-logo {
                display: flex;
                justify-content: center;
                align-items: center;
              }

              .logo-image {
                width: 120px;
                height: auto;
              }

              .footer-links {
                display: flex;
                gap: 6rem;
              }

              .links-column {
                display: flex;
                flex-direction: column;
                gap: 1rem;
              }

              .links-column a {
                color: #ffffff !important;
                text-decoration: none !important;
                transition: opacity 0.3s ease;
                cursor: pointer;
              }

              .links-column a:hover {
                opacity: 0.8;
              }
              
              .footer-link {
                font-size: 1.5rem;
                color: #ffffff !important;
                text-decoration: none !important;
              }

              .copyright {
                font-size: 0.875rem;
                color: #999;
                margin-bottom: 2rem;
                text-align: center;
              }

              .whatsapp-container {
                margin-top: 2rem;
                margin-bottom: 2rem;
                width: 100%;
                display: flex;
                justify-content: center;
              }

              /* Media Queries */
              @media (max-width: 992px) {
                .footer-content {
                  gap: 4rem;
                }

                .logo-image {
                  width: 100px;
                }
                .footer-link {
                  font-size: 1.2rem;
                }
              }

              @media (max-width: 768px) {
                .footer-heading {
                  font-size: 1.8rem;
                  max-width: 95%;
                  margin-bottom: 3rem;
                }

                .footer-content {
                  flex-direction: column;
                  gap: 3rem;
                }
                .footer-link {
                  font-size: 1.2rem;
                }

                .footer-links {
                  gap: 4rem;
                }

                .footer-section {
                  padding: 2.5rem 1rem 2rem 1rem;
                }
              }

              @media (max-width: 480px) {
                .footer-heading {
                  font-size: 1.5rem;
                  max-width: 100%;
                  margin-bottom: 2.5rem;
                }
                .footer-link {
                  font-size: 1.2rem;
                }

                .footer-links {
                  gap: 2rem;
                  flex-direction: column;
                  align-items: center;
                  text-align: center;
                }

                .links-column {
                  align-items: center;
                }

                .footer-section {
                  padding: 2rem 0.75rem 1.5rem 0.75rem;
                }

                .logo-image {
                  width: 80px;
                }
              }
            `}</style>
        </section>
    );
};

export default InformationFooter;