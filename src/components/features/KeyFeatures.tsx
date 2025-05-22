
import React from "react";
import { BookText, Brain, Layout, Database, Code, Lock } from "lucide-react";
import FeatureCard from "./FeatureCard";

const KeyFeatures: React.FC = () => {
  const features = [
    {
      icon: BookText,
      title: "Knowledge Bases",
      description: "Create unlimited knowledge bases to organize your learning by topic, subject, or project.",
      bulletPoints: [
        "Intuitive organization system",
        "Tag-based categorization",
        "Search across all bases",
      ],
      iconBgColor: "bg-indigo-100",
      iconColor: "text-indigo-600",
    },
    {
      icon: Brain,
      title: "AI Learning Assistant",
      description: "Ask questions about your content and receive intelligent responses based on your knowledge bases.",
      bulletPoints: [
        "Natural language queries",
        "Contextual understanding",
        "Source citations",
      ],
      iconBgColor: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      icon: Layout,
      title: "Advanced Content Import",
      description: "Import content from multiple sources to build your knowledge bases effortlessly.",
      bulletPoints: [
        "PDF extraction",
        "Image text recognition (OCR)",
        "Web page import",
      ],
      iconBgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Database,
      title: "Secure Data Storage",
      description: "Store your knowledge securely with our robust storage solution.",
      bulletPoints: [
        "Up to 20GB storage (plan dependent)",
        "Automatic backups",
        "Data export in Markdown",
      ],
      iconBgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: Code,
      title: "API Access",
      description: "Integrate RecallAI with your existing tools and workflows.",
      bulletPoints: [
        "RESTful API endpoints",
        "Webhooks for events",
        "Comprehensive documentation",
      ],
      iconBgColor: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "Protect your valuable knowledge with advanced security features.",
      bulletPoints: [
        "End-to-end encryption",
        "SSO integration (Business plan)",
        "Compliance with data regulations",
      ],
      iconBgColor: "bg-red-100",
      iconColor: "text-red-600",
    },
  ];

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default KeyFeatures;
