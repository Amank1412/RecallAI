
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto text-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
          Features
        </span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8">
        Remember Smarter, Learn Faster, Stay Ahead with RecallAI.
      </p>
    </section>
  );
};

export default HeroSection;
