"use client";

import React, { useState, useEffect } from "react";
import { SectionProps } from "../../types";
import WhatsAppButton from "@/app/components/features/whatsapp-button";
import Image from "next/image";

// Define proper interface for SafeImage props
interface SafeImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    style?: React.CSSProperties;
    layout?: "fill" | "fixed" | "responsive";
}

const OurWorksSection: React.FC<SectionProps> = ({ id }) => {
    // Safe image component with error handling
    const SafeImage: React.FC<SafeImageProps> = ({
                                                     src,
                                                     alt,
                                                     width,
                                                     height,
                                                     style = {},
                                                     layout,
                                                 }) => {
        const [error, setError] = useState(false);

        if (error) {
            return (
                <div
                    style={{
                        backgroundColor: "#f0f0f0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: width ? `${width}px` : "100%",
                        height: height ? `${height}px` : "100%",
                        ...style,
                    }}
                >
                    <p style={{ color: "#666", fontSize: "0.8rem" }}>{alt}</p>
                </div>
            );
        }

        // For fill layout
        if (layout === "fill") {
            return (
                <div style={{ position: "relative", width: "100%", height: "100%" }}>
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        style={style}
                        onError={() => setError(true)}
                    />
                </div>
            );
        }

        // For fixed dimensions
        return (
            <Image
                src={src}
                alt={alt}
                width={width || 100}
                height={height || 100}
                style={style}
                onError={() => setError(true)}
            />
        );
    };

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
                        height: "100%",
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
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
                        {/* First product with AR support */}
                        <div
                            style={{
                                position: "relative",
                                height: "200px",
                                borderRadius: "8px",
                                overflow: "hidden",
                                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                                backgroundColor: "white",
                            }}
                        >
                            <a
                                rel="ar"
                                href="/gear-pump.usdz"
                                style={{
                                    display: "block",
                                    height: "100%",
                                    width: "100%",
                                    position: "relative",
                                }}
                            >
                                <SafeImage
                                    src="/clickable_image_1.png"
                                    alt="AR Product 1 - View in AR"
                                    layout="fill"
                                    style={{ objectFit: "contain" }}
                                />
                                <div
                                    style={{
                                        position: "absolute",
                                        bottom: "8px",
                                        right: "8px",
                                        background: "rgba(0,0,0,0.6)",
                                        color: "white",
                                        padding: "4px 8px",
                                        borderRadius: "4px",
                                        fontSize: "0.7rem",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "4px",
                                    }}
                                >
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
                                            stroke="white"
                                            strokeWidth="2"
                                        />
                                        <path
                                            d="M12 2V4"
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M12 20V22"
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M4 12H2"
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M22 12H20"
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M19.7781 4.22192L17.5561 6.44394"
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M6.44394 17.5561L4.22192 19.7781"
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M19.7781 19.7781L17.5561 17.5561"
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M6.44394 6.44394L4.22192 4.22192"
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                    AR View
                                </div>
                            </a>
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
                                <SafeImage
                                    src="/austen-logo-white.png" // Using a placeholder that exists
                                    alt="AR Product 2"
                                    layout="fill"
                                    style={{ objectFit: "contain" }}
                                />
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
                                <SafeImage
                                    src="/austen-logo-white.png" // Using a placeholder that exists
                                    alt="AR Product 3"
                                    layout="fill"
                                    style={{ objectFit: "contain" }}
                                />
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
                            <div
                                style={{ width: "25%", height: "60px", position: "relative" }}
                            >
                                {/* Instead of missing image, create a placeholder */}
                                <div
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        backgroundColor: "#f0f0f0",
                                        borderRadius: "4px",
                                    }}
                                >
                                    <p style={{ fontWeight: "bold" }}>Apple Pay</p>
                                </div>
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