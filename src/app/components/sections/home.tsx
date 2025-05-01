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
                        <h1 className="highlight-heading">3D MODELS</h1>

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
                      animation: bounceIn 3s forwards;
                      animation-timing-function: ease-out;
                      opacity: 0;
                      animation-iteration-count: infinite;
                      animation-direction: alternate;
                      animation-duration: 4s;
                    }
                    
                    /* Stagger animation for each letter */
                    .animated-letter:nth-child(1) { animation-delay: 0.1s; } 
                    .animated-letter:nth-child(2) { animation-delay: 0.2s; }
                    .animated-letter:nth-child(3) { animation-delay: 0.3s; }
                    .animated-letter:nth-child(4) { animation-delay: 0.4s; }
                    .animated-letter:nth-child(5) { animation-delay: 0.5s; }
                    .animated-letter:nth-child(6) { animation-delay: 0.6s; }
                    .animated-letter:nth-child(7) { animation-delay: 0.7s; }
                    .animated-letter:nth-child(8) { animation-delay: 0.8s; }
                    .animated-letter:nth-child(9) { animation-delay: 0.9s; }
                    .animated-letter:nth-child(10) { animation-delay: 1.0s; }
                    .animated-letter:nth-child(11) { animation-delay: 1.1s; margin-left: 10px; }
                    .animated-letter:nth-child(12) { animation-delay: 1.2s; margin-left: 10px; }
                    .animated-letter:nth-child(13) { animation-delay: 1.3s; }
                    .animated-letter:nth-child(14) { animation-delay: 1.4s; }
                    .animated-letter:nth-child(15) { animation-delay: 1.5s; }
                    .animated-letter:nth-child(16) { animation-delay: 1.6s; }
                    .animated-letter:nth-child(17) { animation-delay: 1.7s; }
                    .animated-letter:nth-child(18) { animation-delay: 1.8s; }
                    .animated-letter:nth-child(19) { animation-delay: 1.9s; }
                    .animated-letter:nth-child(20) { animation-delay: 2.0s; }
                    .animated-letter:nth-child(21) { animation-delay: 2.1s; margin-left: 10px; }
                    .animated-letter:nth-child(22) { animation-delay: 2.2s; }
                    .animated-letter:nth-child(23) { animation-delay: 2.3s; }
                    .animated-letter:nth-child(24) { animation-delay: 2.4s; }
                    .animated-letter:nth-child(25) { animation-delay: 2.5s; }
                    .animated-letter:nth-child(26) { animation-delay: 2.6s; }
                    .animated-letter:nth-child(27) { animation-delay: 2.7s; }
                    .animated-letter:nth-child(28) { animation-delay: 2.8s; }
                    .animated-letter:nth-child(29) { animation-delay: 2.9s; }
                    .animated-letter:nth-child(30) { animation-delay: 3.0s; }
                  `,
                                }}
                            />

                            <h1 className="animated-heading">
                                {"ANIMATIONS;AUGMENTED REALITY".split("").map((char, index) => (
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

                    {/* 3D Model Container */}
                    <div className="model-container">
                        <div className="model-wrapper">
                            <div className="sketchfab-embed-wrapper">
                                <iframe
                                    title="3D Model"
                                    frameBorder="0"
                                    allowFullScreen
                                    mozallowfullscreen="true"
                                    webkitallowfullscreen="true"
                                    allow="autoplay; fullscreen; xr-spatial-tracking"
                                    xr-spatial-tracking="true"
                                    execution-while-out-of-viewport="true"
                                    execution-while-not-rendered="true"
                                    web-share="true"
                                    src="https://sketchfab.com/models/1446408b3dca49b5bb5d346f76e0c610/embed?autostart=1&transparent=1"
                                />
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

        .highlight-heading {
          text-align: left;
          font-size: 4rem;
          color: #e6a2bb;
          font-family: var(--font-quicksand);
        }

        .animated-heading {
          padding-top: 1rem;
          text-align: left;
          font-size: 2rem;
          color: #3d3d3d;
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
          background-color: #e6a2bb;
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

        .sketchfab-embed-wrapper {
          width: 100%;
          height: 400px;
        }

        .sketchfab-embed-wrapper iframe {
          width: 100%;
          height: 100%;
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
          
          .sketchfab-embed-wrapper {
            height: 300px;
          }
        }
      `}</style>
        </section>
    );
};

export default HomeSection;