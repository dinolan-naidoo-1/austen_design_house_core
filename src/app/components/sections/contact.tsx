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
    >,
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
    <section
      id={id}
      className="section contact-section"
      style={{
        minHeight: "120vh",
        paddingTop: "3rem",
        paddingBottom: "5rem",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "2.7rem",
          fontFamily: "var(--font-quicksand)",
          marginBottom: "3rem",
          fontWeight: "bold",
        }}
      >
        CONTACT US
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <h2
          style={{
            fontSize: "1.8rem",
            fontFamily: "var(--font-quicksand)",
            marginBottom: "3rem",
            paddingTop: "3rem",
            textAlign: "center",
          }}
        >
          GET STARTED; GET A QUOTE!
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            width: "100%",
            padding: "0 1rem",
          }}
        >
          {/* Contact Info */}
          <div style={{ flex: "1 1 250px", marginBottom: "2rem" }}>
            <div style={{ marginBottom: "2rem" }}>
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontFamily: "var(--font-quicksand)",
                  fontWeight: "bold",
                  marginBottom: "0.5rem",
                }}
              >
                PHONE NUMBER
              </h3>
              <p
                style={{
                  fontSize: "1.1rem",
                  fontFamily: "var(--font-quicksand)",
                }}
              >
                068 075 9791
              </p>
            </div>
            <div>
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontFamily: "var(--font-quicksand)",
                  fontWeight: "bold",
                  marginBottom: "0.5rem",
                }}
              >
                EMAIL ADDRESS
              </h3>
              <p
                style={{
                  fontSize: "1.1rem",
                  fontFamily: "var(--font-quicksand)",
                }}
              >
                info@austendesign.co.za
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div
            style={{ flex: "2 1 500px", maxWidth: "600px", padding: "0 4rem" }}
          >
            <form onSubmit={handleSubmit}>
              {/* Email */}
              <div style={{ marginBottom: "1rem" }}>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={() => formData.email && validateEmail(formData.email)}
                  placeholder="your email*"
                  required
                  style={{
                    width: "100%",
                    padding: "0.8rem 1rem",
                    fontSize: "1rem",
                    borderRadius: "4px",
                    border: emailError ? "1px solid #d32f2f" : "none",
                    backgroundColor: "#f0f0f0",
                  }}
                />
                {emailError && (
                  <div
                    style={{
                      color: "#d32f2f",
                      fontSize: "0.8rem",
                      marginTop: "0.3rem",
                      paddingLeft: "0.5rem",
                    }}
                  >
                    {emailError}
                  </div>
                )}
              </div>

              {/* Phone */}
              <div style={{ marginBottom: "1rem" }}>
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  placeholder="contact number*"
                  required
                  pattern="^\d{9,15}$"
                  title="Enter a valid phone number"
                  style={{
                    width: "100%",
                    padding: "0.8rem 1rem",
                    fontSize: "1rem",
                    borderRadius: "4px",
                    border: "none",
                    backgroundColor: "#f0f0f0",
                  }}
                />
              </div>

              {/* Interest */}
              <div style={{ marginBottom: "1rem" }}>
                <label
                  htmlFor="interest-select"
                  style={{ display: "block", marginBottom: "0.5rem" }}
                >
                  I'm interested in*
                </label>
                <select
                  id="interest-select"
                  name="interestedIn"
                  value={formData.interestedIn}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "0.8rem 1rem",
                    fontSize: "1rem",
                    borderRadius: "4px",
                    border: "none",
                    backgroundColor: "#f0f0f0",
                  }}
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
              <div style={{ marginBottom: "1.5rem" }}>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us what you need"
                  style={{
                    width: "100%",
                    padding: "0.8rem 1rem",
                    fontSize: "1rem",
                    borderRadius: "4px",
                    border: "none",
                    backgroundColor: "#f0f0f0",
                    minHeight: "100px",
                    resize: "vertical",
                  }}
                />
              </div>

              {/* Feedback */}
              {submitStatus && (
                <div
                  style={{
                    marginBottom: "1rem",
                    padding: "0.8rem",
                    backgroundColor: submitStatus.isError
                      ? "#ffdddd"
                      : "#ddffdd",
                    borderRadius: "4px",
                    color: submitStatus.isError ? "#d32f2f" : "#388e3c",
                    textAlign: "center",
                  }}
                >
                  {submitStatus.message}
                </div>
              )}

              {/* Submit */}
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    padding: "0.8rem 2.5rem",
                    fontSize: "1rem",
                    backgroundColor: isSubmitting ? "#e0e0e0" : "#b3b3b3",
                    color: isSubmitting ? "#888" : "#000",
                    border: "none",
                    borderRadius: "4px",
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                    fontFamily: "var(--font-quicksand)",
                    fontWeight: "bold",
                  }}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>

          {/* Website & Location */}
          <div style={{ flex: "1 1 250px", marginBottom: "2rem" }}>
            <div style={{ marginBottom: "2rem" }}>
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontFamily: "var(--font-quicksand)",
                  fontWeight: "bold",
                  marginBottom: "0.5rem",
                }}
              >
                WEBSITE
              </h3>
              <p
                style={{
                  fontSize: "1.1rem",
                  fontFamily: "var(--font-quicksand)",
                }}
              >
                www.austendesign.co.za
              </p>
            </div>
            <div>
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontFamily: "var(--font-quicksand)",
                  fontWeight: "bold",
                  marginBottom: "0.5rem",
                }}
              >
                JOHANNESBURG, ZA
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          paddingTop: "5rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <WhatsAppButton
          message="Hello, I'd like to request a quote for your services."
          customStyle={{ fontWeight: "bold" }}
        />
      </div>
    </section>
  );
};

export default ContactSection;
