
import React from "react";
import FeatureDetail from "./FeatureDetail";

const FeatureDetails: React.FC = () => {
  const details = [
    {
      title: "Import Your Content",
      description:
        "RecallAI makes it easy to get started. Import content from various sources, including PDFs, images with text, web pages, and plain text. Our advanced extraction algorithms ensure your content is accurately captured.",
      bulletPoints: [
        "Drag and drop files into your knowledge base",
        "Bulk import options for multiple files",
        "Browser extension for saving web content",
      ],
      isReversed: false,
    },
    {
      title: "Organize with AI",
      description:
        "Our AI automatically categorizes your content, extracts key concepts, and creates connections between related information. This makes it easier to find what you need when you need it.",
      bulletPoints: [
        "Automatic topic extraction",
        "Smart tagging system",
        "Knowledge graph visualization",
      ],
      isReversed: true,
    },
    {
      title: "Learn & Recall",
      description:
        "Ask questions in natural language and get accurate answers from your knowledge base. RecallAI understands context and provides precise information when you need it.",
      bulletPoints: [
        "Natural language query understanding",
        "Source citations with each answer",
        "Spaced repetition learning suggestions",
      ],
      isReversed: false,
    },
  ];

  return (
    <section className="py-16 bg-gray-50 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How RecallAI Works</h2>
        {details.map((detail, index) => (
          <FeatureDetail key={index} {...detail} />
        ))}
      </div>
    </section>
  );
};

export default FeatureDetails;
