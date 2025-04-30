import React from 'react';
import { SectionProps } from '../../types';
import WhatsAppButton from "@/app/components/features/whatsapp-button";

const InformationFooter: React.FC<SectionProps> = ({ id }) => {
    return (
        <section style={{
            color: '#000000',
            minHeight: '50vh', // Remove the 100vh minimum height
            paddingTop: '3rem', // Add padding top instead of centering with justify-content
            backgroundColor: '#000000',
        }}>
            <p style={{
                color: '#ffffff',
                textAlign: 'center',
                fontSize: '2.3rem',
                fontFamily: 'var(--font-quicksand)',
                marginBottom: '2rem' // Add space between heading and content
            }}>
                LEADING THE WAY IN IMMERSIVE E-COMMERCE IN SOUTH AFRICA
            </p>
            {/* Text Content */}
            <div style={{
                width: '40%',
                minWidth: '300px',
                zIndex: 2
            }}>
            </div>
            <div style={{
                marginTop: '2rem', // Add space before the button
                marginBottom: '20rem' // Add space at the bottom of the section
            }}>
            </div>
        </section>
    );
};

export default InformationFooter;