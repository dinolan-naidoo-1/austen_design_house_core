"use client";
import React from "react";

import { SectionProps } from "../../types";
import WhatsAppButton from "../features/whatsapp-button";
// Animation keyframes
const HomeSection: React.FC<SectionProps> = ({ id }) => {
  return (
    <section id={id} className="section home-section">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "100%",
          maxWidth: "100%",
          margin: "0",
          left: "3rem",
          paddingTop: "9.5rem",
          position: "relative",
          justifyContent: "space-between",
        }}
      >
        {/* Text Content */}
        <div
          style={{
            width: "40%",
            minWidth: "300px",
            marginLeft: "5rem",
            paddingRight: "2rem",
            zIndex: 2,
          }}
        >
          <h1
            style={{
              textAlign: "left",
              fontSize: "2.5rem",
              fontFamily: "var(--font-quicksand)",
            }}
          >
            ELEVATING BRANDS WITH
          </h1>
          <h1
            style={{
              textAlign: "left",
              fontSize: "4rem",
              color: "#e6a2bb",
              fontFamily: "var(--font-quicksand)",
            }}
          >
            3D MODELS
          </h1>
          <>
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
    .animated-letter:nth-child(11) { animation-delay: 1.1s;margin-left: 10px;  }
    .animated-letter:nth-child(12) { animation-delay: 1.2s;margin-left: 10px; }
    .animated-letter:nth-child(13) { animation-delay: 1.3s; }
    .animated-letter:nth-child(14) { animation-delay: 1.4s;  }
    .animated-letter:nth-child(15) { animation-delay: 1.5s; }
    .animated-letter:nth-child(16) { animation-delay: 1.6s; }
    .animated-letter:nth-child(17) { animation-delay: 1.7s; }
    .animated-letter:nth-child(18) { animation-delay: 1.8s; }
    .animated-letter:nth-child(19) { animation-delay: 1.9s; }
    .animated-letter:nth-child(20) { animation-delay: 2.0s; }
    .animated-letter:nth-child(21) { animation-delay: 2.1s; margin-left: 10px;}
    .animated-letter:nth-child(22) { animation-delay: 2.2s; }
    /* Space between AUGMENTED and REALITY */
    .animated-letter:nth-child(23) { animation-delay: 2.3s;  }
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

            <h1
              style={{
                paddingTop: "1rem",
                textAlign: "left",
                fontSize: "2rem",
                color: "#3d3d3d",
                fontFamily: "var(--font-quicksand)",
                transformOrigin: "center bottom",
              }}
            >
              ANIMATIONS
              {/*{"ANIMATIONS;AUGMENTED REALITY".split("").map((char, index) => (
                <span key={index} className="animated-letter">
                  {char}
                </span>
              ))}*/}
            </h1>
          </>

          <p
            style={{
              paddingTop: "1.8rem",
              textAlign: "left",
              fontSize: "1.5rem",
              color: "#363636",
              fontFamily: "var(--font-quicksand)",
            }}
          >
            Turn your website, catalogue & online store into an immersive, 3D
            shopping experience for your customers.
          </p>
          <p
            style={{
              paddingTop: "1.8rem",
              textAlign: "left",
              fontSize: "1.5rem",
              color: "#363636",
              fontFamily: "var(--font-quicksand)",
            }}
          >
            Customers can now view your products in a 360° space & use augmented
            reality to have the most real life experience before buying your
            product.
          </p>

          {/* Services List - Grid Layout */}
          <div
            style={{
              paddingTop: "3rem",
              paddingBottom: "1rem",
              width: "100%", // Ensure full width
            }}
          >
            <h3
              style={{
                fontSize: "1.6rem",
                color: "#363636",
                fontFamily: "var(--font-quicksand)",
                marginBottom: "1rem",
              }}
            >
              Our Services:
            </h3>

            {/* Grid Layout for Services - wider columns */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(250px, 1fr) minmax(300px, 1fr)", // Wider minimum widths
                columnGap: "2rem",
                rowGap: "0.75rem",
                width: "100%", // Ensure full width
              }}
            >
              {/* First row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  whiteSpace: "nowrap", // Prevent text wrapping
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: "8px",
                    height: "8px",
                    minWidth: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#e6a2bb",
                    marginRight: "10px",
                  }}
                ></span>
                <span
                  style={{
                    fontSize: "1.3rem",
                    color: "#363636",
                    fontFamily: "var(--font-quicksand)",
                  }}
                >
                  3D Interactive AR Models
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  whiteSpace: "nowrap", // Prevent text wrapping
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: "8px",
                    height: "8px",
                    minWidth: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#e6a2bb",
                    marginRight: "10px",
                  }}
                ></span>
                <span
                  style={{
                    fontSize: "1.3rem",
                    color: "#363636",
                    fontFamily: "var(--font-quicksand)",
                  }}
                >
                  Interior Renders
                </span>
              </div>

              {/* Second row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  whiteSpace: "nowrap", // Prevent text wrapping
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: "8px",
                    height: "8px",
                    minWidth: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#e6a2bb",
                    marginRight: "10px",
                  }}
                ></span>
                <span
                  style={{
                    fontSize: "1.3rem",
                    color: "#363636",
                    fontFamily: "var(--font-quicksand)",
                  }}
                >
                  Product Animations
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  whiteSpace: "nowrap", // Prevent text wrapping
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: "8px",
                    height: "8px",
                    minWidth: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#e6a2bb",
                    marginRight: "10px",
                  }}
                ></span>
                <span
                  style={{
                    fontSize: "1.3rem",
                    color: "#363636",
                    fontFamily: "var(--font-quicksand)",
                  }}
                >
                  Furniture Models & Fabric Application
                </span>
              </div>

              {/* Third row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  whiteSpace: "nowrap", // Prevent text wrapping
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: "8px",
                    height: "8px",
                    minWidth: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#e6a2bb",
                    marginRight: "10px",
                  }}
                ></span>
                <span
                  style={{
                    fontSize: "1.3rem",
                    color: "#363636",
                    fontFamily: "var(--font-quicksand)",
                  }}
                >
                  Technical Drawings
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  whiteSpace: "nowrap", // Prevent text wrapping
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: "8px",
                    height: "8px",
                    minWidth: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#e6a2bb",
                    marginRight: "10px",
                  }}
                ></span>
                <span
                  style={{
                    fontSize: "1.3rem",
                    color: "#363636",
                    fontFamily: "var(--font-quicksand)",
                  }}
                >
                  Sheet Metal Design; Bending Orientations; DXF Files
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "600px",
            minWidth: "300px",
            display: "flex",
            right: "16rem",
            justifyContent: "flex-end",
            alignItems: "center",
            zIndex: 1,
          }}
        >
          {/* 3D Model Embed */}
          {/*    <div
            style={{
              position: "relative",
              width: "70%",
              maxWidth: "600px",
              minWidth: "300px",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              zIndex: 1,
              border: "1px solid",
              borderColor: "#d7d7d7",
              backgroundColor: "#e9e9e9",
            }}
          >
            <div
              className="sketchfab-embed-wrapper"
              style={{ width: "100%", maxWidth: "500px" }}
            >
              <iframe
                title="BLA BLA"
                frameBorder="0"
                allowFullScreen
                //@ts-ignore
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                xr-spatial-tracking="true"
                execution-while-out-of-viewport="true"
                execution-while-not-rendered="true"
                web-share="true"
                src="https://sketchfab.com/models/1446408b3dca49b5bb5d346f76e0c610/embed?autostart=1&transparent=1"
                style={{ width: "100%", height: "400px" }}
              />
            </div>
          </div>*/}
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      ></div>
      <div
        style={{
          marginTop: "6rem",
        }}
      >
        <WhatsAppButton />
      </div>
    </section>
  );
};

export default HomeSection;
