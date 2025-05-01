"use client";

import React from 'react';
import { SectionProps } from '../../types';
import WhatsAppButton from "@/app/components/features/whatsapp-button";

const InformationFooter: React.FC<SectionProps> = ({ id }) => {
    return (
        <section id={id} className="footer-section">
            <div className="footer-container">
                <h2 className="footer-heading">
                    LEADING THE WAY IN IMMERSIVE E-COMMERCE IN SOUTH AFRICA
                </h2>

                {/* Additional content can be added here if needed */}

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
          padding: 3rem 1rem 5rem 1rem;
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
          margin-bottom: 2rem;
          max-width: 90%;
        }
        
        .whatsapp-container {
          margin-top: 2rem;
          margin-bottom: 2rem;
          width: 100%;
          display: flex;
          justify-content: center;
        }
        
        /* Media Queries */
        @media (max-width: 768px) {
          .footer-heading {
            font-size: 1.8rem;
            max-width: 95%;
          }
          
          .footer-section {
            padding: 2.5rem 1rem 4rem 1rem;
          }
        }
        
        @media (max-width: 480px) {
          .footer-heading {
            font-size: 1.5rem;
            max-width: 100%;
          }
          
          .footer-section {
            padding: 2rem 0.75rem 3rem 0.75rem;
          }
        }
      `}</style>
        </section>
    );
};

export default InformationFooter;