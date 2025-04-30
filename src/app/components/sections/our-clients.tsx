import React from 'react';
import { SectionProps } from '../../types';
import WhatsAppButton from "@/app/components/features/whatsapp-button";

const OurClientsSection: React.FC<SectionProps> = ({ id }) => {
    return (
        <section id={id} className="section our-client-section" style={{
            minHeight: '115vh', // Remove the 100vh minimum height
            paddingTop: '3rem' // Add padding top instead of centering with justify-content
        }}>
            <h1 style={{
                textAlign: 'center',
                fontSize: '2.7rem',
                fontFamily: 'var(--font-quicksand)',
                marginBottom: '2rem' // Add space between heading and content
            }}>
                Our Clients
            </h1>
            {/* Text Content */}
            <div style={{
                width: '40%',
                minWidth: '300px',
                zIndex: 2
            }}>
                <p style={{
                    paddingTop: '1.7rem',
                    textAlign: 'left',
                    fontSize: '1.6rem',
                    color: "#363636",
                    fontFamily: 'var(--font-quicksand)',
                }}>
                    Placeholder text <br/>
                    Placeholder text <br/>
                    Placeholder text <br/>
                    Placeholder text <br/>
                </p>
            </div>
            <div style={{
                marginTop: '2rem', // Add space before the button
                marginBottom: '20rem' // Add space at the bottom of the section
            }}>
            </div>
            <div
                style={{
                    paddingTop:"5rem"
                }}
            >
                <WhatsAppButton />
            </div>
        </section>
    );
};

export default OurClientsSection;