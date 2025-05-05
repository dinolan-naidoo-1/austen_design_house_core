"use client";
import React from "react";

import { SectionProps } from "../../types";
import WhatsAppButton from "../features/whatsapp-button";

const HomeSection: React.FC<SectionProps> = ({ id }) => {
    return (
        <section id={id} className="section home-section">
            <div className="home-container">
                {/* Main Content Container */}
                <div className="content-wrapper">
                    {/* Text Content */}
                    <div className="text-content">
                        <h1 className="main-heading">ELEVATING BRANDS WITH</h1>

                        {/* Animated Text */}
                        <div className="animated-text-container">
                            <style
                                dangerouslySetInnerHTML={{
                                    __html: `
                    @keyframes bounceIn {
                      0% {
                        opacity: 0;
                        transform: scale(0);
                      }
                      20% {
                        opacity: 1;
                      }
                      40% {
                        transform: scale(1.15)
                      }
                      70% {
                        transform: scale(.9)
                      }
                      100% {
                        transform: scale(1);
                        opacity: 1;
                      }
                    }

                    .animated-letter {
                      display: inline-block;
                      animation: bounceIn 6s forwards;
                      animation-timing-function: ease-out;
                      opacity: 0;
                      animation-iteration-count: infinite;
                      animation-direction: alternate;
                      animation-duration: 6s;
                    }
                    
                    /* Stagger animation for each letter */
                    /* 3 */ .animated-letter:nth-child(1) { animation-delay: 0.1s; }
                    /* D */ .animated-letter:nth-child(2) { animation-delay: 0.2s; }
                    /* M */ .animated-letter:nth-child(3) { animation-delay: 0.3s; margin-left: 15px }
                    /* O */ .animated-letter:nth-child(4) { animation-delay: 0.4s; }
                    /* D */ .animated-letter:nth-child(5) { animation-delay: 0.5s; }
                    /* E */ .animated-letter:nth-child(6) { animation-delay: 0.6s; }
                    /* L */ .animated-letter:nth-child(7) { animation-delay: 0.7s; }
                    /* S */ .animated-letter:nth-child(8) { animation-delay: 0.8s; }
                    /* ; */ .animated-letter:nth-child(9) { animation-delay: 0.9s; }
                    /* A */ .animated-letter:nth-child(10) { animation-delay: 1.0s; margin-left: 15px; }
                    /* N */ .animated-letter:nth-child(11) { animation-delay: 1.1s; margin-left: 15px;}
                    /* I */ .animated-letter:nth-child(12) { animation-delay: 1.2s; }
                    /* M */ .animated-letter:nth-child(13) { animation-delay: 1.3s; }
                    /* A */ .animated-letter:nth-child(14) { animation-delay: 1.4s; }
                    /* T */ .animated-letter:nth-child(15) { animation-delay: 1.5s; }
                    /* I */ .animated-letter:nth-child(16) { animation-delay: 1.6s; }
                    /* O */ .animated-letter:nth-child(17) { animation-delay: 1.7s; }
                    /* N */ .animated-letter:nth-child(18) { animation-delay: 1.8s; }
                    /* S */ .animated-letter:nth-child(19) { animation-delay: 1.9s; }
                    /* ; */ .animated-letter:nth-child(20) { animation-delay: 2.0s; }
                    /* A */ .animated-letter:nth-child(21) { animation-delay: 2.1s; margin-left: 15px; }
                    /* U */ .animated-letter:nth-child(22) { animation-delay: 2.2s; margin-left: 15px;}
                    /* G */ .animated-letter:nth-child(23) { animation-delay: 2.3s; }
                    /* M */ .animated-letter:nth-child(24) { animation-delay: 2.4s; }
                    /* E */ .animated-letter:nth-child(25) { animation-delay: 2.5s; }
                    /* N */ .animated-letter:nth-child(26) { animation-delay: 2.6s; }
                    /* T */ .animated-letter:nth-child(27) { animation-delay: 2.7s; }
                    /* E */ .animated-letter:nth-child(28) { animation-delay: 2.8s; }
                    /* D */ .animated-letter:nth-child(29) { animation-delay: 2.9s; }
                    /* R */ .animated-letter:nth-child(30) { animation-delay: 3.0s;  }
                    /* E */ .animated-letter:nth-child(31) { animation-delay: 3.1s; margin-left: 15px; }
                    /* A */ .animated-letter:nth-child(32) { animation-delay: 3.2s; }
                    /* L */ .animated-letter:nth-child(33) { animation-delay: 3.3s; }
                    /* I */ .animated-letter:nth-child(34) { animation-delay: 3.4s; }
                    /* T */ .animated-letter:nth-child(35) { animation-delay: 3.5s; }
                    /* Y */ .animated-letter:nth-child(36) { animation-delay: 3.6s; }
                     .animated-letter:nth-child(37) { animation-delay: 3.6s; }
                     .animated-letter:nth-child(38) { animation-delay: 3.6s; }
                     .animated-letter:nth-child(39) { animation-delay: 3.6s; }
                  `,
                                }}
                            />

                            <h1 className="animated-heading">
                                {"3D MODELS;ANIMATIONS;AUGMENTED REALITY".split("").map((char, index) => (
                                    <span key={index} className="animated-letter">
                    {char}
                  </span>
                                ))}
                            </h1>
                        </div>

                        <p className="description-text">
                            Turn your website, catalogue & online store into an immersive, 3D
                            shopping experience for your customers.
                        </p>
                        <p className="description-text">
                            Customers can now view your products in a 360° space & use augmented
                            reality to have the most real life experience before buying your
                            product.
                        </p>

                        {/* Services List */}
                        <div className="services-container">
                            <h3 className="services-heading">Our Services:</h3>

                            <div className="services-grid">
                                {/* Row 1 */}
                                <div className="service-item">
                                    <span className="bullet-point"></span>
                                    <span className="service-text">3D Interactive AR Models</span>
                                </div>
                                <div className="service-item">
                                    <span className="bullet-point"></span>
                                    <span className="service-text">Interior Renders</span>
                                </div>

                                {/* Row 2 */}
                                <div className="service-item">
                                    <span className="bullet-point"></span>
                                    <span className="service-text">Product Animations</span>
                                </div>
                                <div className="service-item">
                                    <span className="bullet-point"></span>
                                    <span className="service-text">Furniture Models & Fabric Application</span>
                                </div>

                                {/* Row 3 */}
                                <div className="service-item">
                                    <span className="bullet-point"></span>
                                    <span className="service-text">Technical Drawings</span>
                                </div>
                                <div className="service-item">
                                    <span className="bullet-point"></span>
                                    <span className="service-text">Sheet Metal Design; Bending Orientations; DXF Files</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="model-container">
                        <div className="model-wrapper">

                            <div className="gif-container">

                                <img
                                    src="/home-screen-shoe.gif"
                                    alt="Animation"
                                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                />
                                <p style={{
                                    padding: "1.1rem",
                                    textAlign: "center",
                                    fontSize: "1rem",
                                    color: "#363636",
                                    fontFamily: "var(--font-quicksand)",
                                }}>Artlabs</p>

                            </div>
                        </div>
                    </div>
                </div>

                {/* WhatsApp Button Container */}
                <div className="whatsapp-container">
                    <WhatsAppButton />
                </div>
            </div>

            {/* CSS Styles */}
            <style jsx>{`
              .home-container {
                width: 100%;
                max-width: 100%;
                padding: 0 1rem;
                display: flex;
                flex-direction: column;
                margin: 0 auto;
              }

              .content-wrapper {
                width: 100%;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: space-between;
                padding-top: 9.5rem;
                position: relative;
              }

              .text-content {
                width: 50%;
                min-width: 300px;
                padding-right: 2rem;
                padding-left: 2rem;
                z-index: 2;
                margin-bottom: 2rem;
              }

              .main-heading {
                text-align: left;
                font-size: 2.5rem;
                font-family: var(--font-quicksand);
              }

              .animated-heading {
                padding-top: 1rem;
                text-align: left;
                font-size: 1.7rem;
                color: #9f3c5e;
                font-family: var(--font-quicksand);
                transform-origin: center bottom;
              }

              .description-text {
                padding-top: 1.8rem;
                text-align: left;
                font-size: 1.5rem;
                color: #363636;
                font-family: var(--font-quicksand);
              }

              .services-container {
                padding-top: 3rem;
                padding-bottom: 1rem;
                width: 100%;
              }

              .services-heading {
                font-size: 1.6rem;
                color: #363636;
                font-family: var(--font-quicksand);
                margin-bottom: 1rem;
              }

              .services-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                column-gap: 2rem;
                row-gap: 0.75rem;
                width: 100%;
              }

              .service-item {
                display: flex;
                align-items: center;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }

              .bullet-point {
                display: inline-block;
                width: 8px;
                height: 8px;
                min-width: 8px;
                border-radius: 50%;
                background-color: #9f3c5e;
                margin-right: 10px;
              }

              .service-text {
                font-size: 1.3rem;
                color: #363636;
                font-family: var(--font-quicksand);
                white-space: normal;
              }

              .model-container {
                width: 45%;
                min-width: 300px;
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1;
              }

              .model-wrapper {
                width: 100%;
                max-width: 600px;
                border: 1px solid #d7d7d7;
                background-color: #e9e9e9;
              }

              .whatsapp-container {
                margin-top: 6rem;
                width: 100%;
                display: flex;
                justify-content: center;
              }

              /* Media Queries */
              @media (max-width: 1024px) {
                .text-content {
                  width: 60%;
                }

                .model-container {
                  width: 40%;
                }
              }

              @media (max-width: 768px) {
                .content-wrapper {
                  flex-direction: column;
                  padding-top: 7rem;
                }

                .text-content {
                  width: 100%;
                  padding-right: 1rem;
                  padding-left: 1rem;
                  order: 2;
                }

                .model-container {
                  width: 100%;
                  max-width: 100%;
                  margin-bottom: 2rem;
                  order: 1;
                }

                .model-wrapper {
                  max-width: 100%;
                }

                .services-grid {
                  grid-template-columns: 1fr;
                }

                .main-heading {
                  font-size: 2rem;
                }

                .highlight-heading {
                  font-size: 3rem;
                }

                .animated-heading {
                  font-size: 1.5rem;
                }

                .description-text {
                  font-size: 1.2rem;
                }
              }

              @media (max-width: 480px) {
                .content-wrapper {
                  padding-top: 6rem;
                }

                .text-content {
                  min-width: unset;
                  padding: 0;
                }

                .model-container {
                  min-width: unset;
                }

                .main-heading {
                  font-size: 1.8rem;
                }

                .highlight-heading {
                  font-size: 2.5rem;
                }

                .animated-heading {
                  font-size: 1.2rem;
                }

                .service-text {
                  font-size: 1rem;
                }

              }
            `}</style>
        </section>
    );
};

export default HomeSection;