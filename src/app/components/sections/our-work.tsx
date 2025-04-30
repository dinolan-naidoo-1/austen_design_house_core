import React from 'react';
import { SectionProps } from '../../types';
import WhatsAppButton from "@/app/components/features/whatsapp-button";

const OurWorksSection: React.FC<SectionProps> = ({ id }) => {
    // @ts-ignore
    return (
        <section id={id} className="section our-work-section" style={{
            minHeight: '135vh',
            paddingTop: '3rem',
            overflow: 'hidden', // Prevent any potential overflow issues
            backgroundColor: '#dcdcdc',
            position: 'relative', // Important for absolute positioning of fade effects
        }}>
            {/* Top fade effect overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '80px',
                background: 'linear-gradient(to bottom, white, rgba(255, 255, 255, 0))',
                zIndex: 1,
            }}></div>

            {/* Bottom fade effect overlay */}
            <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '80px',
                background: 'linear-gradient(to top, white, rgba(255, 255, 255, 0))',
                zIndex: 1,
            }}></div>
            <h1 style={{
                textAlign: 'center',
                fontSize: '2.7rem',
                fontFamily: 'var(--font-quicksand)',
                marginBottom: '2rem'
            }}>
                Our Work
            </h1>

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                padding: '0 2rem'
            }}>
                {/* Sketchfab Models Container on Left */}
                <div style={{
                    flex: '1 1 50%',
                    minWidth: '300px',
                    marginBottom: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem'
                }}>
                    {/* First Sketchfab Model */}
                    <div className="sketchfab-container" style={{
                        width: '100%',
                        height: '300px'
                    }}>
                        <div className="sketchfab-embed-wrapper" style={{ height: '100%' }}>
                            <iframe
                                title="GOBP20"
                                frameBorder="0"
                                allowFullScreen
                                // @ts-ignore
                                mozallowfullscreen="true"
                                webkitallowfullscreen="true"
                                allow="autoplay; fullscreen; xr-spatial-tracking"
                                xr-spatial-tracking
                                execution-while-out-of-viewport
                                execution-while-not-rendered
                                web-share
                                src="https://sketchfab.com/models/fce19fd9c12b4f2a907f0084c5daed31/embed?autostart=1&transparent=1"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    border: 'none'
                                }}
                            />
                            <p style={{
                                fontSize: '13px',
                                fontWeight: 'normal',
                                margin: '5px',
                                color: '#4A4A4A'
                            }}>
                                <a href="https://sketchfab.com/3d-models/gobp20-fce19fd9c12b4f2a907f0084c5daed31?utm_medium=embed&utm_campaign=share-popup&utm_content=fce19fd9c12b4f2a907f0084c5daed31"
                                   target="_blank"
                                   rel="nofollow"
                                   style={{ fontWeight: 'bold', color: '#1CAAD9' }}
                                >
                                    GOBP20
                                </a> by
                                <a href="https://sketchfab.com/albertsitoeus?utm_medium=embed&utm_campaign=share-popup&utm_content=fce19fd9c12b4f2a907f0084c5daed31"
                                   target="_blank"
                                   rel="nofollow"
                                   style={{ fontWeight: 'bold', color: '#1CAAD9' }}
                                >
                                    albertsitoeus
                                </a> on
                                <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=fce19fd9c12b4f2a907f0084c5daed31"
                                   target="_blank"
                                   rel="nofollow"
                                   style={{ fontWeight: 'bold', color: '#1CAAD9' }}
                                >
                                    Sketchfab
                                </a>
                            </p>
                        </div>
                    </div>

                    Second Sketchfab Model
                    <div className="sketchfab-container" style={{
                        width: '100%',
                        height: '300px'
                    }}>
                        <div className="sketchfab-embed-wrapper" style={{ height: '100%' }}>
                            <iframe
                                title="AUSTEN DESIGN HOUSE - B"
                                frameBorder="0"
                                allowFullScreen
                                // @ts-ignore
                                mozallowfullscreen="true"
                                webkitallowfullscreen="true"
                                allow="autoplay; fullscreen; xr-spatial-tracking"
                                xr-spatial-tracking
                                execution-while-out-of-viewport
                                execution-while-not-rendered
                                web-share
                                src="https://sketchfab.com/models/24d86062538148d6aaab8e3d83cb7d59/embed?autostart=1&transparent=1"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    border: 'none'
                                }}
                            />
                            <p style={{
                                fontSize: '13px',
                                fontWeight: 'normal',
                                margin: '5px',
                                color: '#4A4A4A'
                            }}>
                                <a href="https://sketchfab.com/3d-models/austen-design-house-b-24d86062538148d6aaab8e3d83cb7d59?utm_medium=embed&utm_campaign=share-popup&utm_content=24d86062538148d6aaab8e3d83cb7d59"
                                   target="_blank"
                                   rel="nofollow"
                                   style={{ fontWeight: 'bold', color: '#1CAAD9' }}
                                >
                                    AUSTEN DESIGN HOUSE - B
                                </a> by
                                <a href="https://sketchfab.com/albertsitoeus?utm_medium=embed&utm_campaign=share-popup&utm_content=24d86062538148d6aaab8e3d83cb7d59"
                                   target="_blank"
                                   rel="nofollow"
                                   style={{ fontWeight: 'bold', color: '#1CAAD9' }}
                                >
                                    albertsitoeus
                                </a> on
                                <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=24d86062538148d6aaab8e3d83cb7d59"
                                   target="_blank"
                                   rel="nofollow"
                                   style={{ fontWeight: 'bold', color: '#1CAAD9' }}
                                >
                                    Sketchfab
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                {/*               <div style={{
                    marginTop: '2rem',
                    width: '100%',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                }}>
                    <video
                        width="20%"
                        height="auto"
                        controls
                        autoPlay={false}
                        preload="auto"
                        style={{
                            display: 'block',
                            borderRadius: '8px'
                        }}
                    >
                        <source src="/video1.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>*/}

                {/* Text Content on Right */}
                <div style={{
                    flex: '1 1 40%',
                    minWidth: '300px',
                    paddingLeft: '2rem'
                }}>
                    <p style={{
                        textAlign: 'left',
                        fontSize: '1.6rem',
                        color: "#363636",
                        fontFamily: 'var(--font-quicksand)'
                    }}>
                        71% increase in conversion rates<br/>
                        28% decrease in product returns<br/>
                        78% of customers prefer to shop in 3D
                    </p>

                    <div style={{
                        marginTop: '2rem'
                    }}>

                    </div>
                </div>
            </div>

            <div
                style={{
                    paddingTop:"1rem"
                }}
            >
                <WhatsAppButton />
            </div>
        </section>
    );
};

export default OurWorksSection;