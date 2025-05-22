
import { Switch } from "@/components/ui/switch";

interface PricingToggleProps {
  billingCycle: "monthly" | "yearly";
  setBillingCycle: (cycle: "monthly" | "yearly") => void;
}

const PricingToggle = ({ billingCycle, setBillingCycle }: PricingToggleProps) => {
  const handleToggleChange = () => {
    setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly");
  };

  return (
    <div className="flex items-center justify-center space-x-4">
      <span 
        className={`text-sm font-medium ${billingCycle === "monthly" ? "text-indigo-600" : "text-gray-500"}`}
      >
        Monthly
      </span>
      <Switch 
        checked={billingCycle === "yearly"}
        onCheckedChange={handleToggleChange}
        className="data-[state=checked]:bg-indigo-600"
      />
      <span 
        className={`text-sm font-medium ${billingCycle === "yearly" ? "text-indigo-600" : "text-gray-500"}`}
      >
        Yearly
      </span>
    </div>
  );
};

export default PricingToggle;
