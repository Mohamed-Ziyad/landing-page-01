import React from "react";
import "../css/style.css";

import HeaderSection from "../components/HeaderSection";
import HomeSection from "../components/HomeSection";
import FeaturesSection from "../components/FeaturesSection";
import AboutSection from "../components/AboutSection";
import ReviewSection from "../components/ReviewSection";
import NewsLetterSection from "../components/NewsLetterSection";
import PricingSection from "../components/PricingSection";
import ContactSection from "../components/ContactSection";
import FooterSection from "../components/FooterSection";
function Home() {
  return (
    <div>
      <HeaderSection />
      <HomeSection />
      <FeaturesSection />
      <AboutSection />
      <NewsLetterSection />
      <ReviewSection />
      <PricingSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}

export default Home;
