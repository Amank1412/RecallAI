
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Master Your Knowledge?</h2>
      <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
        Join thousands of professionals and students who have transformed how they learn and retain information.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">
          Start Free Trial
        </Button>
        <Button size="lg" variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50">
          <Link to="/#pricing">View Pricing</Link>
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
