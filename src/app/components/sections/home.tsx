"use client";
import React from "react";

import { SectionProps } from "../../types";
import WhatsAppButton from "../features/whatsapp-button";
// Animation keyframes
const HomeSection: React.FC<SectionProps> = ({ id }) => {
  return (
    <section id={id} className="section home-section">
      <h1>Testing</h1>
    </section>
  );
};

export default HomeSection;
