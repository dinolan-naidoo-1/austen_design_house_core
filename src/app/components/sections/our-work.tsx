"use-client";

import React from "react";

import { SectionProps } from "../../types";
import WhatsAppButton from "@/app/components/features/whatsapp-button";
import Image from "next/image";

const OurWorksSection: React.FC<SectionProps> = ({ id }) => {
  // @ts-ignore
  return (
    <section
      id={id}
      className="section our-work-section"
      style={{
        minHeight: "135vh",
        paddingTop: "3rem",
        overflow: "hidden", // Prevent any potential overflow issues
        backgroundColor: "#dcdcdc",
        position: "relative", // Important for absolute positioning of fade effects
      }}
    >
      {/* Top fade effect overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "80px",
          background:
            "linear-gradient(to bottom, white, rgba(255, 255, 255, 0))",
          zIndex: 1,
        }}
      ></div>
      {/* Bottom fade effect overlay */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "80px",
          background: "linear-gradient(to top, white, rgba(255, 255, 255, 0))",
          zIndex: 1,
        }}
      ></div>
      <h1
        style={{
          textAlign: "center",
          fontSize: "2.7rem",
          fontFamily: "var(--font-quicksand)",
          marginBottom: "2rem",
        }}
      >
        Our Work
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          width: "100%",
          padding: "2rem",
        }}
      >
        {/* Video on the left */}
        <div
          style={{
            width: "350px",
            height: "600px",
            overflow: "hidden",
            marginLeft: 8,
            backgroundColor: "white",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{ width: "100%", height: "350px", objectFit: "cover" }}
            poster="/austen-logo-white.png"
          >
            <source src="/shoe-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div style={{ padding: "16px" }}>
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: 600,
                marginBottom: "0.5rem",
                fontFamily: "var(--font-quicksand)",
              }}
            >
              AR Shopping Experience
            </h3>
            <p
              style={{ color: "#4B5563", fontFamily: "var(--font-quicksand)" }}
            >
              Sell directly from AR. Customers can now buy your products
              straight from your AR product display in the Quicklook environment
              using Apple Pay.
            </p>
          </div>
        </div>

        {/* Three images on the right */}
        <div
          style={{
            flex: "1",
            minWidth: "300px",
            maxWidth: "calc(100% - 370px)", // Adjust based on video width + gap
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "16px",
            }}
          >
            {/* First product */}
            <div
              style={{
                position: "relative",
                height: "auto",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Image
                src="/clickable_image_1.png"
                alt="AR Product 1"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>

            {/* Second product */}
            <div
              style={{
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div style={{ position: "relative", height: "192px" }}>
                <Image
                  src="/path-to-second-image.jpg"
                  alt="AR Product 2"
                  fill
                  style={{ objectFit: "contain" }}
                />
                <div style={{ position: "absolute", top: "8px", right: "8px" }}>
                  <Image
                    src="/path-to-3d-icon.svg"
                    alt="3D"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
              <div style={{ padding: "12px" }}>
                <h3
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    fontFamily: "var(--font-quicksand)",
                  }}
                >
                  Modern Chair
                </h3>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "#6B7280",
                    fontFamily: "var(--font-quicksand)",
                  }}
                >
                  3D AR Model
                </p>
              </div>
            </div>

            {/* Third product */}
            <div
              style={{
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                backgroundColor: "white",
              }}
            >
              <div style={{ position: "relative", height: "192px" }}>
                <Image
                  src="/path-to-third-image.jpg"
                  alt="AR Product 3"
                  fill
                  style={{ objectFit: "contain" }}
                />
                <div style={{ position: "absolute", top: "8px", right: "8px" }}>
                  <Image
                    src="/path-to-3d-icon.svg"
                    alt="3D"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
              <div style={{ padding: "12px" }}>
                <h3
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    fontFamily: "var(--font-quicksand)",
                  }}
                >
                  Orange Fridge
                </h3>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "#6B7280",
                    fontFamily: "var(--font-quicksand)",
                  }}
                >
                  3D AR Model
                </p>
              </div>
            </div>
          </div>

          {/* Apple AR Integration content */}
          <div
            style={{
              marginTop: "24px",
              padding: "16px",
              backgroundColor: "white",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h2
              style={{
                fontSize: "1.25rem",
                fontWeight: 600,
                marginBottom: "8px",
                fontFamily: "var(--font-quicksand)",
              }}
            >
              Apple integration in Augmented Reality (AR) Environment
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <div style={{ width: "25%" }}>
                <Image
                  src="/path-to-apple-pay-logo.svg"
                  alt="Apple Pay"
                  width={150}
                  height={60}
                />
              </div>
              <div style={{ width: "75%" }}>
                <p
                  style={{
                    color: "#4B5563",
                    fontFamily: "var(--font-quicksand)",
                  }}
                >
                  Apple Pay can now be integrated into the AR Quicklook
                  environment so customers can make purchases from your website
                  while interacting with your 3D product model.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ paddingTop: "1rem" }}>
        <WhatsAppButton />
      </div>
    </section>
  );
};

export default OurWorksSection;
