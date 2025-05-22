
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Star } from "lucide-react";
import PricingTable from "@/components/pricing/PricingTable";
import PricingToggle from "@/components/pricing/PricingToggle";
import Testimonials from "@/components/pricing/Testimonials";
import FAQ from "@/components/pricing/FAQ";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Index = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-6">
            Master Knowledge. Forget Nothing.
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8">
            RecallAI makes learning effortless by transforming how professionals and students retain and access information.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50">
              Watch Demo
            </Button>
          </div>
        </section>
        
        {/* Pricing Section */}
        <section id="pricing" className="py-16 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the plan that's right for you and start enhancing your knowledge retention today.
            </p>
            
            {/* Billing Toggle */}
            <div className="mt-8">
              <PricingToggle billingCycle={billingCycle} setBillingCycle={setBillingCycle} />
              {billingCycle === "yearly" && (
                <p className="mt-2 text-sm text-indigo-600 font-medium">Save up to 30% with yearly billing</p>
              )}
            </div>
          </div>
          
          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Free Plan */}
            <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-2">Starter</h3>
              <p className="text-gray-600 mb-4">Perfect for trying out RecallAI</p>
              <div className="mb-4">
                <span className="text-4xl font-bold">Free</span>
              </div>
              <Button className="w-full mb-6 bg-gray-800 hover:bg-gray-700">
                Start Free
              </Button>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">3 Knowledge Bases</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">500 MB storage</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">100 AI queries per month</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Basic text extraction</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Email support</span>
                </li>
              </ul>
            </div>
            
            {/* Pro Plan - Highlighted */}
            <div className="border-2 border-indigo-600 rounded-xl p-6 bg-white shadow-md relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <h3 className="text-xl font-bold mb-2">Pro</h3>
              <p className="text-gray-600 mb-4">For serious learners & professionals</p>
              <div className="mb-4">
                <span className="text-4xl font-bold">${billingCycle === "monthly" ? "10" : "7"}</span>
                <span className="text-gray-600">/month</span>
                {billingCycle === "yearly" && (
                  <span className="ml-2 text-sm text-indigo-600">(billed yearly)</span>
                )}
              </div>
              <Button className="w-full mb-6 bg-indigo-600 hover:bg-indigo-700">
                Upgrade Now
              </Button>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700"><strong>Unlimited</strong> Knowledge Bases</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">10 GB storage</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">2,000 AI queries per month</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Advanced extraction (PDF, Images)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Priority support</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">API access</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Data export in Markdown</span>
                </li>
              </ul>
            </div>
            
            {/* Lifetime Plan */}
            <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-2">Lifetime</h3>
              <p className="text-gray-600 mb-4">One-time payment, forever access</p>
              <div className="mb-4">
                <span className="text-4xl font-bold">$500</span>
                <span className="text-gray-600">/one-time</span>
              </div>
              <Button className="w-full mb-6 bg-purple-600 hover:bg-purple-700">
                Buy Lifetime
              </Button>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">All Pro features</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">20 GB storage</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">3,000 AI queries per month</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Free future updates</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Priority support & onboarding</span>
                </li>
              </ul>
            </div>
            
            {/* Business Plan */}
            <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-2">Business</h3>
              <p className="text-gray-600 mb-4">For teams and organizations</p>
              <div className="mb-4">
                <span className="text-4xl font-bold">Custom</span>
              </div>
              <Button className="w-full mb-6 bg-gray-800 hover:bg-gray-700">
                Contact Sales
              </Button>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">All Pro features</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Custom storage limits</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Unlimited AI queries</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Team collaboration tools</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">SSO & advanced security</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Dedicated account manager</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Custom integrations</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Student Discount Notice */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center mb-16">
            <p className="text-blue-700">
              <strong>Students save 20%!</strong> Use your .edu email address during checkout to receive your discount automatically.
            </p>
          </div>
          
          {/* Feature Comparison Table */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Compare All Features</h3>
            <PricingTable billingCycle={billingCycle} />
          </div>
          
          {/* Testimonials */}
          <Testimonials />
          
          {/* Money-back Guarantee */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center my-16 max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Star className="h-8 w-8 text-yellow-500 mr-2" />
              <h3 className="text-2xl font-bold">30-Day Money-Back Guarantee</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Try RecallAI risk-free. If you're not completely satisfied within the first 30 days, we'll refund your payment in full.
              No questions asked.
            </p>
            <Link to="/refund-policy" className="text-indigo-600 hover:text-indigo-700 font-medium">
              Read our refund policy →
            </Link>
          </div>
          
          {/* FAQ Section */}
          <FAQ />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
