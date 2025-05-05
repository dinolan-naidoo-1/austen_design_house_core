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

const ImmersiveEcommerceStats = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            if (typeof window !== 'undefined') {
                setIsSmallScreen(window.innerWidth < 768);
            }
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const circleSize = isSmallScreen ? 90 : 120;
    const innerCircleSize = isSmallScreen ? 60 : 80;
    const fontSizePercent = isSmallScreen ? '1.1rem' : '1.8rem';
    const fontSizeText = isSmallScreen ? '0.9rem' : '1.6rem';
    const fontSizeSource = isSmallScreen ? '0.7rem' : '0.9rem';

    const circleWrapperStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '2rem',
    };

    const circleStyle: React.CSSProperties = {
        position: 'relative',
        width: `${circleSize}px`,
        height: `${circleSize}px`,
        borderRadius: '50%',
        backgroundColor: '#e0e0e0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '1.5rem',
        flexShrink: 0,
    };

    const orangeCircleStyle: React.CSSProperties = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        clipPath: 'polygon(50% 50%, 100% 0, 100% 100%, 0 100%, 0 0)',
        backgroundColor: '#FF8A00',
        zIndex: 0,
    };

    const innerCircleStyle: React.CSSProperties = {
        width: `${innerCircleSize}px`,
        height: `${innerCircleSize}px`,
        borderRadius: '50%',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
    };

    const percentStyle: React.CSSProperties = {
        fontSize: fontSizePercent,
        fontWeight: 'bold',
        fontFamily: 'var(--font-quicksand)',
    };

    const textStyle: React.CSSProperties = {
        fontSize: fontSizeText,
        fontFamily: 'var(--font-quicksand)',
        flex: 1,
    };

    const containerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '2rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        height: '100%',
    };

    const titleStyle: React.CSSProperties = {
        fontSize: 'clamp(1.5rem, 2vw, 2rem)',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '2rem',
        fontFamily: 'var(--font-quicksand)',
    };

    const sourceStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '1rem',
        color: '#555',
        fontSize: fontSizeSource,
    };

    return (
        <div style={containerStyle}>
            <h2 style={titleStyle}>THE GROWING TREND OF IMMERSIVE E-COMMERCE</h2>

            <div style={circleWrapperStyle}>
                <div style={circleStyle}>
                    <div style={orangeCircleStyle}></div>
                    <div style={innerCircleStyle}>
                        <span style={percentStyle}>71%</span>
                    </div>
                </div>
                <p style={textStyle}>
                    Shoppers would frequent stores more if AR was implemented
                </p>
            </div>

            <div style={circleWrapperStyle}>
                <div style={circleStyle}>
                    <div style={orangeCircleStyle}></div>
                    <div style={innerCircleStyle}>
                        <span style={percentStyle}>71%</span>
                    </div>
                </div>
                <p style={textStyle}>
                    Gen Z & Millennials are more likely to use AR frequently
                </p>
            </div>

            <div style={circleWrapperStyle}>
                <div style={circleStyle}>
                    <div style={{
                        ...orangeCircleStyle,
                        clipPath: 'polygon(50% 50%, 100% 0, 100% 100%, 0 100%, 0 0, 100% 0)' as any
                    }}></div>
                    <div style={innerCircleStyle}>
                        <span style={percentStyle}>94%</span>
                    </div>
                </div>
                <p style={textStyle}>
                    3D content can drive a 94% conversion rate
                </p>
            </div>

            <div style={circleWrapperStyle}>
                <div style={circleStyle}>
                    <div style={{
                        ...orangeCircleStyle,
                        clipPath: 'polygon(50% 50%, 100% 0, 100% 100%, 0 100%, 0 0, 100% 0)' as any
                    }}></div>
                    <div style={innerCircleStyle}>
                        <span style={percentStyle}>5x</span>
                    </div>
                </div>
                <p style={textStyle}>
                    3D and AR merchandising has been shown to deliver a five times increase in time on a website.
                </p>
            </div>

            <div style={sourceStyle}>
                <span>www.forbes.com</span>
                <span style={{ margin: '0 0.5rem', fontWeight: 'bold', fontSize: '1.4rem' }}>Forbes</span>
                <span>Karina Kogan</span>
            </div>
        </div>
    );
};



const ApplePayButton = () => {
    return (
        <div
            style={{
                backgroundColor: "black",
                borderRadius: "1.3rem",
                color: "white",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
                fontSize: "2rem",
                fontWeight: "500",
                minHeight: "48px",
                padding: "0.2rem",
                width: "50%"
            }}
        >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: "8px" }}>
                <path d="M17.0425 12.4576C17.0187 9.47448 19.53 8.03698 19.6425 7.96948C18.21 5.84198 16.0125 5.55948 15.225 5.53698C13.425 5.34948 11.6887 6.65198 10.7775 6.65198C9.84375 6.65198 8.44125 5.55948 6.90375 5.58948C4.93125 5.61948 3.09375 6.74198 2.0925 8.46948C-0.0075 12.0045 1.48875 17.1945 3.48 19.992C4.485 21.372 5.67 22.9395 7.2375 22.887C8.76 22.8345 9.33375 21.912 11.175 21.912C12.9975 21.912 13.5375 22.887 15.1275 22.857C16.77 22.8345 17.8125 21.4395 18.7725 20.052C19.935 18.447 20.4037 16.8645 20.4262 16.7895C20.385 16.7745 17.07 15.4395 17.0425 12.4576Z" fill="white"/>
                <path d="M14.3831 3.75C15.2119 2.73 15.7594 1.365 15.6244 0C14.4281 0.045 12.9394 0.7875 12.0744 1.7775C11.3081 2.64 10.6481 4.05 10.8056 5.3625C12.1431 5.4525 13.5244 4.7475 14.3831 3.75Z" fill="white"/>
            </svg>
            Pay
        </div>
    );
};

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

    // AR View Badge component for reuse
    const ARViewBadge = () => (
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
            AR View for iOS
        </div>
    );

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
                        maxWidth: "calc(100% - 300px)", // Adjust based on video width + gap
                    }}
                >
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                            gap: "50px",
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
                                    src="/ar-product-1.png"
                                    alt="AR Product 1 - View in AR"
                                    layout="fill"
                                    style={{ objectFit: "contain" }}
                                />
                                <ARViewBadge />
                            </a>
                        </div>

                        {/* Second product - now with AR support */}
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
                                href="/interactive-product-2.usdz"
                                style={{
                                    display: "block",
                                    height: "100%",
                                    width: "100%",
                                    position: "relative",
                                }}
                            >
                                <SafeImage
                                    src="/ar-product-2.png"
                                    alt="AR Product 2 - View in AR"
                                    layout="fill"
                                    style={{ objectFit: "contain" }}
                                />
                                <ARViewBadge />
                            </a>
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

                        {/* Third product - now with AR support */}
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
                                href="/interactive-product-3.usdz"
                                style={{
                                    display: "block",
                                    height: "100%",
                                    width: "100%",
                                    position: "relative",
                                }}
                            >
                                <SafeImage
                                    src="/ar-product-3.png"
                                    alt="AR Product 3 - View in AR"
                                    layout="fill"
                                    style={{ objectFit: "contain" }}
                                />
                                <ARViewBadge />
                            </a>
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

                    <div
                        style={{
                            marginTop: "clamp(2rem, 2.5vw, 20rem)",
                            padding: "16px",
                            backgroundColor: "#f7f5f5",
                            borderRadius: "8px",
                        }}
                    >
                        <h2
                            style={{
                                fontSize: "clamp(1.8rem, 2.5vw, 2.3rem)",
                                fontWeight: 600,
                                marginBottom: "8px",
                                fontFamily: "var(--font-quicksand)",
                                padding: "3rem",
                            }}
                        >
                            Apple integration in Augmented Reality (AR) Environment
                        </h2>

                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                gap: "5px",
                                flexWrap: "wrap",
                                justifyContent: "center", // centers children on small screens
                            }}
                        >
                            <div
                                style={{
                                    flex: "1 1 200px",
                                    maxWidth: "100%",
                                    minWidth: "150px",
                                    paddingLeft: "2rem",
                                    height: "60px",
                                    position: "relative",
                                }}
                            >
                                <ApplePayButton />
                            </div>
                            <div
                                style={{
                                    flex: "2 1 300px",
                                    maxWidth: "100%",
                                    paddingRight: "2rem",
                                }}
                            >
                                <p
                                    style={{
                                        color: "#4B5563",
                                        fontFamily: "var(--font-quicksand)",
                                        fontSize: "clamp(1.3rem, 2vw, 2rem)",
                                    }}
                                >
                                    Apple Pay can now be integrated into the AR Quicklook environment so
                                    customers can make purchases from your website while interacting with your
                                    3D product model.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* New section for second video and image - added content */}
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px",
                    width: "100%",
                    padding: "2rem",
                    marginTop: "1rem",
                }}
            >
                {/* Analytics section */}
                <div
                    style={{
                        flex: "1",
                        minWidth: "300px",
                        position: "relative",
                        borderRadius: "8px",
                        overflow: "hidden",
                        height: "auto",
                    }}
                >
                    <ImmersiveEcommerceStats />
                </div>

                {/* Second video - now on the right */}
                <div
                    style={{
                        width: "400px",
                        height: "auto",
                        overflow: "hidden",
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
                        <source src="/advert-video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

            <div style={{ paddingTop: "1rem", zIndex:"999" }}>
                <WhatsAppButton />
            </div>
        </section>
    );
};

export default OurWorksSection;