
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/features/HeroSection";
import KeyFeatures from "@/components/features/KeyFeatures";
import FeatureDetails from "@/components/features/FeatureDetails";
import CTASection from "@/components/features/CTASection";

const Features: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        <KeyFeatures />
        <FeatureDetails />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Features;
