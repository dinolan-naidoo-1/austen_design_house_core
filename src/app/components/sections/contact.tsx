"use client";

import React, { useState, useEffect } from "react";
import { SectionProps } from "../../types";
import WhatsAppButton from "@/app/components/features/whatsapp-button";
import { sendEmail } from "@/utilities/resend";

const ContactSection: React.FC<SectionProps> = ({ id }) => {
    const [formData, setFormData] = useState({
        email: "",
        contactNumber: "",
        interestedIn: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        message: string;
        isError: boolean;
    } | null>(null);
    const [emailError, setEmailError] = useState<string | null>(null);
    const [currentUrl, setCurrentUrl] = useState("");

    useEffect(() => {
        setCurrentUrl(window.location.href);
    }, []);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const validateEmail = (email: string): boolean => {
        const isValid = emailRegex.test(email.toLowerCase());
        setEmailError(isValid ? null : "Please enter a valid email address");
        return isValid;
    };

    const validateFields = (): boolean => {
        const { email, contactNumber, interestedIn } = formData;
        if (!email || !contactNumber || !interestedIn) {
            setSubmitStatus({
                message: "Please fill in all required fields.",
                isError: true,
            });
            return false;
        }
        if (!validateEmail(email)) return false;
        return true;
    };

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        if (name === "email") setEmailError(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateFields()) return;

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Use the server action directly
            const response = await sendEmail(formData);

            if (response.success) {
                setFormData({
                    email: "",
                    contactNumber: "",
                    interestedIn: "",
                    message: "",
                });
                setSubmitStatus({
                    message: "Thank you! Your message has been sent successfully.",
                    isError: false,
                });
            } else {
                throw new Error(response.error || "Failed to send email");
            }
        } catch (error: any) {
            console.error("Error submitting form:", error);
            setSubmitStatus({
                message:
                    "There was an error sending your message. Please try again later.",
                isError: true,
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id={id} className="section contact-section">
            <div className="contact-container">
                <h1 className="section-title">CONTACT US</h1>

                <div className="content-wrapper">
                    <h2 className="section-subtitle">GET STARTED; GET A QUOTE!</h2>

                    <div className="contact-content">
                        {/* Contact Info - Left Column */}
                        <div className="contact-info">
                            <div className="info-block">
                                <h3 className="info-title">PHONE NUMBER</h3>
                                <p className="info-text">068 075 9791</p>
                            </div>
                            <div className="info-block">
                                <h3 className="info-title">EMAIL ADDRESS</h3>
                                <p className="info-text">info@austendesign.co.za</p>
                            </div>
                        </div>

                        {/* Contact Form - Middle Column */}
                        <div className="contact-form">
                            <form onSubmit={handleSubmit}>
                                {/* Email */}
                                <div className="form-group">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        onBlur={() => formData.email && validateEmail(formData.email)}
                                        placeholder="your email*"
                                        required
                                        className={`form-input ${emailError ? 'error' : ''}`}
                                    />
                                    {emailError && <div className="error-message">{emailError}</div>}
                                </div>

                                {/* Phone */}
                                <div className="form-group">
                                    <input
                                        type="tel"
                                        name="contactNumber"
                                        value={formData.contactNumber}
                                        onChange={handleChange}
                                        placeholder="contact number*"
                                        required
                                        pattern="^\d{9,15}$"
                                        title="Enter a valid phone number"
                                        className="form-input"
                                    />
                                </div>

                                {/* Interest */}
                                <div className="form-group">
                                    <label htmlFor="interest-select" className="select-label">
                                        I'm interested in*
                                    </label>
                                    <select
                                        id="interest-select"
                                        name="interestedIn"
                                        value={formData.interestedIn}
                                        onChange={handleChange}
                                        required
                                        className="form-select"
                                    >
                                        <option value="" disabled>
                                            Select an option
                                        </option>
                                        <option value="3D Product Visualization">
                                            3D Product Visualization
                                        </option>
                                        <option value="Interior Design">Interior Design</option>
                                        <option value="Architectural Visualization">
                                            Architectural Visualization
                                        </option>
                                        <option value="Virtual Reality">Virtual Reality</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                {/* Message */}
                                <div className="form-group">
                  <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us what you need"
                      className="form-textarea"
                  />
                                </div>

                                {/* Feedback */}
                                {submitStatus && (
                                    <div className={`status-message ${submitStatus.isError ? 'error' : 'success'}`}>
                                        {submitStatus.message}
                                    </div>
                                )}

                                {/* Submit */}
                                <div className="submit-container">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
                                    >
                                        {isSubmitting ? "Submitting..." : "Submit"}
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Website & Location - Right Column */}
                        <div className="contact-info">
                            <div className="info-block">
                                <h3 className="info-title">WEBSITE</h3>
                                <p className="info-text">www.austendesign.co.za</p>
                            </div>
                            <div className="info-block">
                                <h3 className="info-title">JOHANNESBURG, ZA</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="whatsapp-container">
                    <WhatsAppButton
                        message="Hello, I'd like to request a quote for your services."
                        customStyle={{ fontWeight: "bold" }}
                    />
                </div>
            </div>

            {/* CSS Styles */}
            <style jsx>{`
        .section.contact-section {
          min-height: 120vh;
          padding-top: 3rem;
          padding-bottom: 5rem;
          display: flex;
          justify-content: center;
          align-items: flex-start;
        }

        .contact-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .section-title {
          text-align: center;
          font-size: 2.7rem;
          font-family: var(--font-quicksand);
          margin-bottom: 3rem;
          font-weight: bold;
          width: 100%;
        }

        .content-wrapper {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .section-subtitle {
          font-size: 1.8rem;
          font-family: var(--font-quicksand);
          margin-bottom: 3rem;
          padding-top: 1rem;
          text-align: center;
          width: 100%;
        }

        .contact-content {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-between;
          width: 100%;
          gap: 2rem;
        }

        .contact-info {
          flex: 1 1 250px;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .info-block {
          margin-bottom: 1rem;
        }

        .info-title {
          font-size: 1.2rem;
          font-family: var(--font-quicksand);
          font-weight: bold;
          margin-bottom: 0.5rem;
        }

        .info-text {
          font-size: 1.1rem;
          font-family: var(--font-quicksand);
        }

        .contact-form {
          flex: 2 1 500px;
          max-width: 600px;
          padding: 0 4rem;
        }

        .form-group {
          margin-bottom: 1rem;
          width: 100%;
        }

        .form-input,
        .form-select,
        .form-textarea {
          width: 100%;
          padding: 0.8rem 1rem;
          font-size: 1rem;
          border-radius: 4px;
          border: none;
          background-color: #f0f0f0;
          font-family: var(--font-quicksand);
        }

        .form-input.error {
          border: 1px solid #d32f2f;
        }

        .error-message {
          color: #d32f2f;
          font-size: 0.8rem;
          margin-top: 0.3rem;
          padding-left: 0.5rem;
        }

        .select-label {
          display: block;
          margin-bottom: 0.5rem;
          font-family: var(--font-quicksand);
        }

        .form-textarea {
          min-height: 100px;
          resize: vertical;
        }

        .status-message {
          margin-bottom: 1rem;
          padding: 0.8rem;
          border-radius: 4px;
          text-align: center;
          font-family: var(--font-quicksand);
        }

        .status-message.error {
          background-color: #ffdddd;
          color: #d32f2f;
        }

        .status-message.success {
          background-color: #ddffdd;
          color: #388e3c;
        }

        .submit-container {
          display: flex;
          justify-content: center;
          width: 100%;
        }

        .submit-button {
          padding: 0.8rem 2.5rem;
          font-size: 1rem;
          background-color: #b3b3b3;
          color: #000;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-family: var(--font-quicksand);
          font-weight: bold;
          transition: all 0.3s ease;
        }

        .submit-button:hover {
          background-color: #a0a0a0;
        }

        .submit-button.submitting {
          background-color: #e0e0e0;
          color: #888;
          cursor: not-allowed;
        }

        .whatsapp-container {
          padding-top: 5rem;
          display: flex;
          justify-content: center;
          width: 100%;
        }

        /* Media Queries */
        @media (max-width: 1024px) {
          .contact-form {
            padding: 0 2rem;
          }
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2.3rem;
          }
          
          .section-subtitle {
            font-size: 1.5rem;
          }
          
          .contact-content {
            flex-direction: column;
          }
          
          .contact-info {
            order: 2;
            padding: 0 2rem;
          }
          
          .contact-form {
            order: 1;
            padding: 0 1rem;
            max-width: 100%;
          }
          
          .whatsapp-container {
            padding-top: 3rem;
          }
        }

        @media (max-width: 480px) {
          .section.contact-section {
            min-height: 100vh;
            padding-top: 2rem;
          }
          
          .section-title {
            font-size: 2rem;
            margin-bottom: 2rem;
          }
          
          .section-subtitle {
            font-size: 1.3rem;
            margin-bottom: 2rem;
          }
          
          .info-title {
            font-size: 1.1rem;
          }
          
          .info-text {
            font-size: 1rem;
          }
          
          .contact-form {
            padding: 0;
          }
          
          .form-input,
          .form-select,
          .form-textarea {
            padding: 0.7rem 0.8rem;
            font-size: 0.9rem;
          }
          
          .submit-button {
            padding: 0.7rem 2rem;
            font-size: 0.9rem;
          }
        }
      `}</style>
        </section>
    );
};

export default ContactSection;