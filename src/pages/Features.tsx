
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, BookText, Brain, Layout, Database, Lock } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Features = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Features
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8">
            Discover how RecallAI transforms your learning and knowledge management experience.
          </p>
        </section>
        
        {/* Key Features Grid */}
        <section className="py-16 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Knowledge Base Feature */}
            <div className="border border-gray-200 rounded-xl p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-indigo-100 p-3 rounded-lg w-fit mb-4">
                <BookText className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Knowledge Bases</h3>
              <p className="text-gray-600 mb-4">
                Create unlimited knowledge bases to organize your learning by topic, subject, or project.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Intuitive organization system</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Tag-based categorization</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Search across all bases</span>
                </li>
              </ul>
            </div>
            
            {/* AI Learning Assistant */}
            <div className="border border-gray-200 rounded-xl p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-purple-100 p-3 rounded-lg w-fit mb-4">
                <Brain className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI Learning Assistant</h3>
              <p className="text-gray-600 mb-4">
                Ask questions about your content and receive intelligent responses based on your knowledge bases.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Natural language queries</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Contextual understanding</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Source citations</span>
                </li>
              </ul>
            </div>
            
            {/* Content Import */}
            <div className="border border-gray-200 rounded-xl p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                <Layout className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Advanced Content Import</h3>
              <p className="text-gray-600 mb-4">
                Import content from multiple sources to build your knowledge bases effortlessly.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">PDF extraction</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Image text recognition (OCR)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Web page import</span>
                </li>
              </ul>
            </div>
            
            {/* Data Storage */}
            <div className="border border-gray-200 rounded-xl p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-green-100 p-3 rounded-lg w-fit mb-4">
                <Database className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Secure Data Storage</h3>
              <p className="text-gray-600 mb-4">
                Store your knowledge securely with our robust storage solution.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Up to 20GB storage (plan dependent)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Automatic backups</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Data export in Markdown</span>
                </li>
              </ul>
            </div>
            
            {/* API Access */}
            <div className="border border-gray-200 rounded-xl p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-yellow-100 p-3 rounded-lg w-fit mb-4">
                <Code className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">API Access</h3>
              <p className="text-gray-600 mb-4">
                Integrate RecallAI with your existing tools and workflows.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">RESTful API endpoints</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Webhooks for events</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Comprehensive documentation</span>
                </li>
              </ul>
            </div>
            
            {/* Security */}
            <div className="border border-gray-200 rounded-xl p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-red-100 p-3 rounded-lg w-fit mb-4">
                <Lock className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Enterprise Security</h3>
              <p className="text-gray-600 mb-4">
                Protect your valuable knowledge with advanced security features.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">End-to-end encryption</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">SSO integration (Business plan)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Compliance with data regulations</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Feature Details Section */}
        <section className="py-16 bg-gray-50 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How RecallAI Works</h2>
            
            {/* Feature 1 */}
            <div className="flex flex-col md:flex-row items-center mb-20">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <h3 className="text-2xl font-bold mb-4">Import Your Content</h3>
                <p className="text-lg text-gray-700 mb-4">
                  RecallAI makes it easy to get started. Import content from various sources, including PDFs, images with text, web pages, and plain text. Our advanced extraction algorithms ensure your content is accurately captured.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-700">Drag and drop files into your knowledge base</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-700">Bulk import options for multiple files</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-700">Browser extension for saving web content</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 bg-white p-4 rounded-lg shadow-md">
                <div className="aspect-video bg-gray-200 rounded-md flex items-center justify-center">
                  <span className="text-gray-500">Import Content Visualization</span>
                </div>
              </div>
            </div>
            
            {/* Feature 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center mb-20">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pl-8">
                <h3 className="text-2xl font-bold mb-4">Organize with AI</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Our AI automatically categorizes your content, extracts key concepts, and creates connections between related information. This makes it easier to find what you need when you need it.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-700">Automatic topic extraction</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-700">Smart tagging system</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-700">Knowledge graph visualization</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 bg-white p-4 rounded-lg shadow-md">
                <div className="aspect-video bg-gray-200 rounded-md flex items-center justify-center">
                  <span className="text-gray-500">AI Organization Visualization</span>
                </div>
              </div>
            </div>
            
            {/* Feature 3 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <h3 className="text-2xl font-bold mb-4">Learn & Recall</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Ask questions in natural language and get accurate answers from your knowledge base. RecallAI understands context and provides precise information when you need it.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-700">Natural language query understanding</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-700">Source citations with each answer</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-700">Spaced repetition learning suggestions</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 bg-white p-4 rounded-lg shadow-md">
                <div className="aspect-video bg-gray-200 rounded-md flex items-center justify-center">
                  <span className="text-gray-500">Learning Interface Visualization</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
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
      </main>
      
      <Footer />
    </div>
  );
};

export default Features;
