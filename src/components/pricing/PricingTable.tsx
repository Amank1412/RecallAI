
import { Check } from "lucide-react";

interface PricingTableProps {
  billingCycle: "monthly" | "yearly";
}

const PricingTable = ({ billingCycle }: PricingTableProps) => {
  // Feature categories and features within each
  const featureCategories = [
    {
      name: "Core Features",
      features: [
        {
          name: "Knowledge Bases",
          starter: "3",
          pro: "Unlimited",
          lifetime: "Unlimited",
          business: "Unlimited",
          tooltip: "Separate spaces to organize different topics or subjects"
        },
        {
          name: "Storage",
          starter: "500 MB",
          pro: "10 GB",
          lifetime: "20 GB",
          business: "Custom",
          tooltip: "Total storage for your documents and knowledge bases"
        },
        {
          name: "AI Queries",
          starter: "100/month",
          pro: "2,000/month",
          lifetime: "3,000/month",
          business: "Unlimited",
          tooltip: "Questions you can ask your knowledge base per month"
        }
      ]
    },
    {
      name: "Content & Extraction",
      features: [
        {
          name: "Text Extraction",
          starter: "Basic",
          pro: "Advanced",
          lifetime: "Advanced",
          business: "Advanced",
          tooltip: "Extract text from various file formats"
        },
        {
          name: "PDF Processing",
          starter: false,
          pro: true,
          lifetime: true,
          business: true,
          tooltip: "Extract text and knowledge from PDF documents"
        },
        {
          name: "Image Text Recognition",
          starter: false,
          pro: true,
          lifetime: true,
          business: true,
          tooltip: "Extract text from images using OCR technology"
        },
        {
          name: "Web Page Import",
          starter: "5/month",
          pro: "Unlimited",
          lifetime: "Unlimited",
          business: "Unlimited",
          tooltip: "Import content directly from web pages"
        }
      ]
    },
    {
      name: "Integrations & Export",
      features: [
        {
          name: "Data Export (Markdown)",
          starter: false,
          pro: true,
          lifetime: true,
          business: true,
          tooltip: "Export your knowledge bases in Markdown format"
        },
        {
          name: "API Access",
          starter: false,
          pro: true,
          lifetime: true,
          business: true,
          tooltip: "Programmatic access to your knowledge through our API"
        },
        {
          name: "Third-party Integrations",
          starter: "Limited",
          pro: "Standard",
          lifetime: "Standard",
          business: "Custom",
          tooltip: "Connect with other tools and services"
        }
      ]
    },
    {
      name: "Support & Security",
      features: [
        {
          name: "Customer Support",
          starter: "Email",
          pro: "Priority Email",
          lifetime: "Priority Email",
          business: "Dedicated Manager",
          tooltip: "How quickly we respond to your questions"
        },
        {
          name: "Onboarding",
          starter: "Self-serve",
          pro: "Self-serve",
          lifetime: "Guided",
          business: "White-glove",
          tooltip: "Help getting started with RecallAI"
        },
        {
          name: "SSO & Advanced Security",
          starter: false,
          pro: false,
          lifetime: false,
          business: true,
          tooltip: "Single Sign-On and enterprise-grade security features"
        }
      ]
    }
  ];

  const renderFeatureValue = (value: string | boolean) => {
    if (typeof value === "boolean") {
      return value ? (
        <div className="flex justify-center">
          <Check className="h-5 w-5 text-green-500" />
        </div>
      ) : (
        <div className="text-center">—</div>
      );
    }
    return <div className="text-center">{value}</div>;
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="py-4 px-4 text-left text-gray-600 w-1/5">Features</th>
            <th className="py-4 px-4 text-center text-gray-600 w-1/5">Starter</th>
            <th className="py-4 px-4 text-center text-gray-600 font-bold bg-indigo-50 w-1/5">Pro</th>
            <th className="py-4 px-4 text-center text-gray-600 w-1/5">Lifetime</th>
            <th className="py-4 px-4 text-center text-gray-600 w-1/5">Business</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-200">
            <td className="py-4 px-4 font-bold">Price</td>
            <td className="py-4 px-4 text-center">Free</td>
            <td className="py-4 px-4 text-center font-medium bg-indigo-50">
              ${billingCycle === "monthly" ? "10" : "7"}/mo
              {billingCycle === "yearly" && <div className="text-xs text-indigo-600">billed yearly</div>}
            </td>
            <td className="py-4 px-4 text-center">$500 one-time</td>
            <td className="py-4 px-4 text-center">Custom</td>
          </tr>

          {featureCategories.map((category, categoryIndex) => (
            <>
              <tr key={`category-${categoryIndex}`} className="bg-gray-50">
                <td
                  colSpan={5}
                  className="py-2 px-4 font-medium text-gray-800"
                >
                  {category.name}
                </td>
              </tr>
              {category.features.map((feature, featureIndex) => (
                <tr
                  key={`feature-${categoryIndex}-${featureIndex}`}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="py-3 px-4 text-gray-700 flex items-center">
                    <span title={feature.tooltip}>{feature.name}</span>
                  </td>
                  <td className="py-3 px-4 text-gray-700">
                    {renderFeatureValue(feature.starter)}
                  </td>
                  <td className="py-3 px-4 text-gray-700 bg-indigo-50">
                    {renderFeatureValue(feature.pro)}
                  </td>
                  <td className="py-3 px-4 text-gray-700">
                    {renderFeatureValue(feature.lifetime)}
                  </td>
                  <td className="py-3 px-4 text-gray-700">
                    {renderFeatureValue(feature.business)}
                  </td>
                </tr>
              ))}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PricingTable;
