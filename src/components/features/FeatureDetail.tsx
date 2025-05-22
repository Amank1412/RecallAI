
import { Check } from "lucide-react";
import React from "react";

interface FeatureDetailProps {
  title: string;
  description: string;
  bulletPoints: string[];
  isReversed?: boolean;
}

const FeatureDetail: React.FC<FeatureDetailProps> = ({
  title,
  description,
  bulletPoints,
  isReversed = false,
}) => {
  return (
    <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center mb-20`}>
      <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-lg text-gray-700 mb-4">{description}</p>
        <ul className="space-y-3">
          {bulletPoints.map((point, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span className="text-gray-700">{point}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:w-1/2 bg-white p-4 rounded-lg shadow-md">
        <div className="aspect-video bg-gray-200 rounded-md flex items-center justify-center">
          <span className="text-gray-500">{title} Visualization</span>
        </div>
      </div>
    </div>
  );
};

export default FeatureDetail;
