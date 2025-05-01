import React from "react";
import HomeSection from "./components/sections/home";
import OurClientsSection from "./components/sections/our-clients";
import OurWorkSection from "./components/sections/our-work";
import ContactSection from "./components/sections/contact";
import InformationFooter from "./components/sections/information-footer";
import { Quicksand, Poppins } from "next/font/google";

// Initialize the fonts
const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-quicksand",
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function Home() {
  return (
    <main className={`${quicksand.variable} ${poppins.variable}`}>
      <HomeSection id="home" />
      <OurWorkSection id="our-work" />
      <OurClientsSection id="our-clients" />
      <ContactSection id="contact" />
      <InformationFooter id ="information-footer"/>
    </main>
  );
}
